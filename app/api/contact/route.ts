import { type NextRequest, NextResponse } from "next/server"
import { getSupabaseAdminClient } from "@/lib/supabase"
import { sendContactEmail, sendAdminNotificationEmail } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const supabase = getSupabaseAdminClient()

    // Insert contact into database
    const { data, error } = await supabase
      .from("contacts")
      .insert([
        {
          name,
          email,
          subject,
          message,
          status: "new",
          created_at: new Date().toISOString(),
        },
      ])
      .select()

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to save contact" }, { status: 500 })
    }

    // Send confirmation email to customer
    try {
      await sendContactEmail({
        to: email,
        name,
        subject,
        message,
      })
    } catch (emailError) {
      console.error("Failed to send confirmation email:", emailError)
    }

    // Send notification email to admin
    try {
      await sendAdminNotificationEmail({
        type: "contact",
        data: {
          name,
          email,
          subject,
          message,
        },
      })
    } catch (emailError) {
      console.error("Failed to send admin notification:", emailError)
    }

    return NextResponse.json({ message: "Contact form submitted successfully", data }, { status: 200 })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
