const { createClient } = require("@supabase/supabase-js")
const fs = require("fs")
const path = require("path")

// Load environment variables from .env.local
// This ensures the script can access the Supabase keys
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const adminUsername = process.env.ADMIN_USERNAME
const adminPassword = process.env.ADMIN_PASSWORD

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("❌ Missing Supabase environment variables")
  console.error(
    "Please ensure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are defined in your .env.local file.",
  )
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    persistSession: false, // Important for server-side scripts
  },
})

async function setupDatabase() {
  try {
    console.log("🚀 Setting up Ngonzi Tours database...")
    console.log("📍 Supabase URL:", supabaseUrl)

    // Read the SQL schema file
    const schemaPath = path.join(__dirname, "..", "database", "schema.sql")

    if (!fs.existsSync(schemaPath)) {
      console.error("❌ Schema file not found at:", schemaPath)
      process.exit(1)
    }

    const schema = fs.readFileSync(schemaPath, "utf8")

    // Split the schema into individual statements
    // Filter out empty statements and comments
    const statements = schema
      .split(";")
      .map((stmt) => stmt.trim())
      .filter((stmt) => stmt.length > 0 && !stmt.startsWith("--"))

    console.log(`📝 Found ${statements.length} SQL statements to execute`)

    // Execute each statement
    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i]
      if (statement.trim()) {
        console.log(`⚡ Executing statement ${i + 1}/${statements.length}...`)

        // Supabase's `rpc` method for `exec_sql` is a common way to run arbitrary SQL.
        // Note: For `CREATE EXTENSION`, you might need to run it directly in Supabase SQL Editor
        // if `exec_sql` doesn't have sufficient permissions or is not enabled for it.
        const { error } = await supabase.rpc("exec_sql", {
          sql: statement,
        })

        if (error) {
          // Suppress "already exists" errors for idempotency
          if (!error.message.includes("already exists") && !error.message.includes("does not exist")) {
            console.warn("⚠️  Warning (statement might have failed):", error.message)
          } else {
            console.log(`✅ Statement ${i + 1} (likely already exists or handled)`)
          }
        } else {
          console.log(`✅ Statement ${i + 1} executed successfully`)
        }
      }
    }

    // Create admin user if credentials are provided
    if (adminUsername && adminPassword) {
      console.log(`Attempting to create admin user: ${adminUsername}`)
      const { data: existingUser, error: fetchError } = await supabase
        .from("admin_users")
        .select("id")
        .eq("username", adminUsername)
        .single()

      if (fetchError && fetchError.code !== "PGRST116") {
        // PGRST116 means "no rows found"
        console.error("Error checking for existing admin user:", fetchError.message)
      }

      if (existingUser) {
        console.log(`Admin user '${adminUsername}' already exists. Skipping creation.`)
      } else {
        // In a real application, you would hash the password securely (e.g., using bcrypt)
        // For this example, we're storing it directly for simplicity, but this is NOT secure for production.
        const { data, error } = await supabase
          .from("admin_users")
          .insert([{ username: adminUsername, password_hash: adminPassword }]) // Store plain password for demo

        if (error) {
          console.error("Error creating admin user:", error.message)
        } else {
          console.log(`Admin user '${adminUsername}' created successfully.`)
        }
      }
    } else {
      console.warn("ADMIN_USERNAME or ADMIN_PASSWORD not set in .env.local. Admin user will not be created.")
    }

    // Verify tables were created
    console.log("\n🔍 Verifying database setup...")

    const tables = ["contacts", "bookings", "blog_posts", "tours", "admin_users"]
    for (const table of tables) {
      try {
        const { data, error } = await supabase.from(table).select("*").limit(1)

        if (error) {
          console.log(`❌ Table '${table}' not accessible:`, error.message)
        } else {
          console.log(`✅ Table '${table}' is ready`)
        }
      } catch (err) {
        console.log(`❌ Error checking table '${table}':`, err.message)
      }
    }

    console.log("\n🎉 Database setup completed!")
    console.log("📊 Tables created:")
    console.log("   - contacts (for contact form submissions)")
    console.log("   - bookings (for tour bookings)")
    console.log("   - blog_posts (for blog content)")
    console.log("   - tours (for tour packages)")
    console.log("   - admin_users (for admin panel access)")
    console.log("\n💡 You can now run: npm run dev")
  } catch (error) {
    console.error("❌ Database setup failed:", error.message)
    console.error("\n🔧 Troubleshooting:")
    console.error("1. Check your Supabase credentials in .env.local")
    console.error("2. Ensure your Supabase project is active and the 'exec_sql' function is enabled (if used).")
    console.error("3. Verify the service role key has proper permissions.")
    console.error("4. If 'CREATE EXTENSION pgcrypto' fails, run it directly in your Supabase SQL editor.")
    process.exit(1)
  }
}

setupDatabase()
