import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { createClient } from "@supabase/supabase-js"

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY // Use service key for server-side operations

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Supabase URL or Service Key is not defined.")
  throw new Error("Supabase environment variables are not set.")
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    persistSession: false, // Important for server-side operations
  },
})

export async function POST(request: Request) {
  try {
    const { fullName, email, phone, country, tourName, preferredDates, numberOfAdults, numberOfChildren, message } =
      await request.json()

    // Basic validation
    if (!fullName || !email || !tourName || !preferredDates || !numberOfAdults) {
      return NextResponse.json({ error: "Required fields are missing." }, { status: 400 })
    }

    // Insert booking into Supabase
    const { data, error: dbError } = await supabase.from("bookings").insert([
      {
        full_name: fullName,
        email,
        phone,
        country,
        tour_name: tourName,
        preferred_dates: preferredDates,
        number_of_adults: numberOfAdults,
        number_of_children: numberOfChildren,
        message,
        booking_date: new Date().toISOString(), // Record current date
      },
    ])

    if (dbError) {
      console.error("Supabase insert error:", dbError)
      return NextResponse.json({ error: "Failed to save booking." }, { status: 500 })
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Email to Ngonzi Tours admin
    const mailToAdmin = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Tour Booking: ${tourName} from ${fullName}`,
      html: `
        <p>A new tour booking has been submitted via the Ngonzi Tours website.</p>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Country:</strong> ${country || "N/A"}</p>
        <p><strong>Tour Name:</strong> ${tourName}</p>
        <p><strong>Preferred Dates:</strong> ${preferredDates}</p>
        <p><strong>Number of Adults:</strong> ${numberOfAdults}</p>
        <p><strong>Number of Children:</strong> ${numberOfChildren || 0}</p>
        <p><strong>Message:</strong><br/>${message || "N/A"}</p>
        <p><strong>Booking Date:</strong> ${new Date().toLocaleString()}</p>
      `,
    }

    // Email confirmation to the user
    const mailToUser = {
      from: process.env.SMTP_USER,
      to: email,
      subject: `Booking Confirmation: Your Ngonzi Tours Adventure - ${tourName}`,
      html: `
        <p>Dear ${fullName},</p>
        <p>Thank you for your booking inquiry with Ngonzi Tours! We have received your request for the <strong>${tourName}</strong> tour.</p>
        <p>Our team will review your details and get back to you within 24-48 hours to confirm availability and finalize your booking.</p>
        <p>Here are the details you provided:</p>
        <ul>
          <li><strong>Tour Name:</strong> ${tourName}</li>
          <li><strong>Preferred Dates:</strong> ${preferredDates}</li>
          <li><strong>Number of Adults:</strong> ${numberOfAdults}</li>
          <li><strong>Number of Children:</strong> ${numberOfChildren || 0}</li>
          <li><strong>Your Message:</strong> ${message || "N/A"}</li>
        </ul>
        <p>We are excited to help you plan your unforgettable African adventure!</p>
        <p>Best regards,</p>
        <p>The Ngonzi Tours Team</p>
        <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}">${process.env.NEXT_PUBLIC_SITE_URL}</a></p>
      `,
    }

    await transporter.sendMail(mailToAdmin)
    await transporter.sendMail(mailToUser)

    return NextResponse.json({ message: "Booking submitted successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Error processing booking:", error)
    return NextResponse.json({ error: "Failed to submit booking." }, { status: 500 })
  }
}
