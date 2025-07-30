import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables.")
}

// Client-side Supabase client (singleton pattern)
let supabaseClientInstance: ReturnType<typeof createClient> | null = null

export function getSupabaseClient() {
  if (!supabaseClientInstance) {
    supabaseClientInstance = createClient(supabaseUrl, supabaseAnonKey)
  }
  return supabaseClientInstance
}

// Server-side Supabase client (for API routes, server components, etc.)
// This client should use the service role key for elevated privileges if needed,
// but for basic read/write, the anon key might suffice if RLS is configured.
// For sensitive operations, ensure SUPABASE_SERVICE_ROLE_KEY is used and kept server-side.
export function createServerClient() {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!serviceRoleKey) {
    console.warn(
      "SUPABASE_SERVICE_ROLE_KEY is not set. Using anon key for server client. This might lead to RLS issues for privileged operations.",
    )
    return createClient(supabaseUrl, supabaseAnonKey)
  }
  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false, // Important for server-side operations
    },
  })
}
