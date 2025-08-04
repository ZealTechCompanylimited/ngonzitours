import { type NextRequest, NextResponse } from "next/server"
import { getSupabaseAdminClient } from "@/lib/supabase"
import { sendBookingConfirmationEmail, sendAdminNotificationEmail } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullName, email, phone, country, tourName, preferredDates, numberOfAdults, numberOfChildren, message } =
      body

    // Validate required fields
    if (!fullName || !email || !tourName || !preferredDates || !numberOfAdults) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const supabase = getSupabaseAdminClient()

    // Insert booking into database - using snake_case column names to match database schema
    const { data, error } = await supabase
      .from("bookings")
      .insert([
        {
          full_name: fullName,
          email,
          phone,
          country,
          tour_name: tourName,
          preferred_dates: preferredDates,
          number_of_adults: numberOfAdults,
          number_of_children: numberOfChildren || 0,
          message,
          status: "pending",
          created_at: new Date().toISOString(),
        },
      ])
      .select()

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to save booking" }, { status: 500 })
    }

    // Send confirmation email to customer
    try {
      await sendBookingConfirmationEmail({
        to: email,
        fullName,
        tourName,
        preferredDates,
        numberOfAdults,
        numberOfChildren,
        message,
      })
    } catch (emailError) {
      console.error("Failed to send confirmation email:", emailError)
    }

    // Send notification email to admin
    try {
      await sendAdminNotificationEmail({
        type: "booking",
        data: {
          fullName,
          email,
          phone,
          country,
          tourName,
          preferredDates,
          numberOfAdults,
          numberOfChildren,
          message,
        },
      })
    } catch (emailError) {
      console.error("Failed to send admin notification:", emailError)
    }

    return NextResponse.json({ message: "Booking submitted successfully", data }, { status: 200 })
  } catch (error) {
    console.error("Booking API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
