import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true", // Use 'true' for 465, 'false' for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Email to Ngonzi Tours admin
    const mailToAdmin = {
      from: process.env.SMTP_USER, // Sender email (your configured SMTP user)
      to: process.env.ADMIN_EMAIL, // Admin email from .env.local
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <p>You have received a new message from the Ngonzi Tours website contact form.</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    }

    // Email confirmation to the user
    const mailToUser = {
      from: process.env.SMTP_USER, // Sender email
      to: email, // User's email
      subject: `Confirmation: Your Ngonzi Tours Inquiry - ${subject}`,
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for contacting Ngonzi Tours. We have received your message and will get back to you as soon as possible, typically within 24-48 hours.</p>
        <p>Here is a copy of your message:</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
        <p>We look forward to helping you plan your unforgettable African adventure!</p>
        <p>Best regards,</p>
        <p>The Ngonzi Tours Team</p>
        <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}">${process.env.NEXT_PUBLIC_SITE_URL}</a></p>
      `,
    }

    await transporter.sendMail(mailToAdmin)
    await transporter.sendMail(mailToUser)

    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Error sending contact email:", error)
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 })
  }
}
