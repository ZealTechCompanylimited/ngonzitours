import nodemailer from "nodemailer"

interface SendEmailProps {
  to: string
  subject: string
  html: string
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number.parseInt(process.env.SMTP_PORT || "587"), // Default to 587 if not set
  secure: process.env.SMTP_PORT === "465", // Use true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function sendEmail({ to, subject, html }: SendEmailProps) {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    console.warn("SMTP environment variables are not fully configured. Email sending skipped.")
    console.warn("Please ensure SMTP_HOST, SMTP_USER, and SMTP_PASSWORD are set in your .env.local file.")
    return { success: false, message: "SMTP not configured." }
  }

  try {
    const info = await transporter.sendMail({
      from: `"Ngonzi Tours" <${process.env.SMTP_USER}>`, // Sender address
      to, // List of receivers
      subject, // Subject line
      html, // HTML body
    })

    console.log("Message sent: %s", info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: error instanceof Error ? error.message : String(error) }
  }
}

export function generateBookingConfirmationEmail(bookingDetails: {
  fullName: string
  tourName: string
  travelDate: string
  numberOfAdults: number
  numberOfChildren?: number
  email: string
  phoneNumber?: string
  country?: string
  message?: string
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  const adminEmail = process.env.ADMIN_EMAIL || "admin@ngonzitours.com"

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Booking Confirmation - Ngonzi Tours</title>
        <style>
            body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 20px auto; background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
            .header { text-align: center; padding-bottom: 20px; border-bottom: 1px solid #eee; }
            .header h1 { color: #0056b3; margin: 0; font-size: 28px; }
            .content { padding: 20px 0; }
            .content p { margin-bottom: 10px; }
            .details { background-color: #f9f9f9; padding: 15px; border-radius: 5px; border: 1px solid #eee; }
            .details strong { color: #0056b3; }
            .footer { text-align: center; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #777; }
            .button { display: inline-block; background-color: #007bff; color: #ffffff !important; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 20px; }
            a { color: #007bff; text-decoration: none; }
            a:hover { text-decoration: underline; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Ngonzi Tours</h1>
                <p>Your African Adventure Awaits!</p>
            </div>
            <div class="content">
                <p>Dear ${bookingDetails.fullName},</p>
                <p>Thank you for booking with Ngonzi Tours! We are thrilled to confirm your recent tour reservation.</p>
                <p>Here are the details of your booking:</p>
                <div class="details">
                    <p><strong>Tour Name:</strong> ${bookingDetails.tourName}</p>
                    <p><strong>Travel Date:</strong> ${bookingDetails.travelDate}</p>
                    <p><strong>Number of Adults:</strong> ${bookingDetails.numberOfAdults}</p>
                    ${bookingDetails.numberOfChildren ? `<p><strong>Number of Children:</strong> ${bookingDetails.numberOfChildren}</p>` : ""}
                    <p><strong>Your Email:</strong> ${bookingDetails.email}</p>
                    ${bookingDetails.phoneNumber ? `<p><strong>Phone Number:</strong> ${bookingDetails.phoneNumber}</p>` : ""}
                    ${bookingDetails.country ? `<p><strong>Country:</strong> ${bookingDetails.country}</p>` : ""}
                    ${bookingDetails.message ? `<p><strong>Your Message:</strong> ${bookingDetails.message}</p>` : ""}
                </div>
                <p>We will review your booking and get back to you shortly with further instructions and payment details. Please allow 24-48 hours for our team to process your request.</p>
                <p>In the meantime, if you have any questions, feel free to reply to this email or visit our website.</p>
                <p style="text-align: center;">
                    <a href="${siteUrl}/contact" class="button">Contact Us</a>
                </p>
                <p>We look forward to helping you plan an unforgettable adventure!</p>
                <p>Best regards,<br>The Ngonzi Tours Team</p>
            </div>
            <div class="footer">
                <p>&copy; ${new Date().getFullYear()} Ngonzi Tours. All rights reserved.</p>
                <p><a href="${siteUrl}/privacy">Privacy Policy</a> | <a href="${siteUrl}/terms">Terms & Conditions</a></p>
            </div>
        </div>
    </body>
    </html>
  `
}

export function generateAdminNotificationEmail(bookingDetails: {
  fullName: string
  tourName: string
  travelDate: string
  numberOfAdults: number
  numberOfChildren?: number
  email: string
  phoneNumber?: string
  country?: string
  message?: string
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Tour Booking Notification - Ngonzi Tours Admin</title>
        <style>
            body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 20px auto; background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
            .header { text-align: center; padding-bottom: 20px; border-bottom: 1px solid #eee; }
            .header h1 { color: #d9534f; margin: 0; font-size: 28px; }
            .content { padding: 20px 0; }
            .content p { margin-bottom: 10px; }
            .details { background-color: #f9f9f9; padding: 15px; border-radius: 5px; border: 1px solid #eee; }
            .details strong { color: #d9534f; }
            .footer { text-align: center; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #777; }
            .button { display: inline-block; background-color: #d9534f; color: #ffffff !important; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 20px; }
            a { color: #d9534f; text-decoration: none; }
            a:hover { text-decoration: underline; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>New Tour Booking!</h1>
                <p>Ngonzi Tours Admin Notification</p>
            </div>
            <div class="content">
                <p>A new tour booking has been submitted through the website. Please review the details below:</p>
                <div class="details">
                    <p><strong>Tour Name:</strong> ${bookingDetails.tourName}</p>
                    <p><strong>Full Name:</strong> ${bookingDetails.fullName}</p>
                    <p><strong>Email:</strong> ${bookingDetails.email}</p>
                    <p><strong>Travel Date:</strong> ${bookingDetails.travelDate}</p>
                    <p><strong>Number of Adults:</strong> ${bookingDetails.numberOfAdults}</p>
                    ${bookingDetails.numberOfChildren ? `<p><strong>Number of Children:</strong> ${bookingDetails.numberOfChildren}</p>` : ""}
                    ${bookingDetails.phoneNumber ? `<p><strong>Phone Number:</strong> ${bookingDetails.phoneNumber}</p>` : ""}
                    ${bookingDetails.country ? `<p><strong>Country:</strong> ${bookingDetails.country}</p>` : ""}
                    ${bookingDetails.message ? `<p><strong>Client Message:</strong> ${bookingDetails.message}</p>` : ""}
                </div>
                <p>Please log in to the admin dashboard to manage this booking.</p>
                <p style="text-align: center;">
                    <a href="${siteUrl}/admin" class="button">Go to Admin Dashboard</a>
                </p>
                <p>This is an automated notification. Please do not reply directly to this email.</p>
            </div>
            <div class="footer">
                <p>&copy; ${new Date().getFullYear()} Ngonzi Tours Admin. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
  `
}

export function generateContactFormEmail(contactDetails: {
  name: string
  email: string
  subject?: string
  message: string
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission - Ngonzi Tours Admin</title>
        <style>
            body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 20px auto; background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
            .header { text-align: center; padding-bottom: 20px; border-bottom: 1px solid #eee; }
            .header h1 { color: #d9534f; margin: 0; font-size: 28px; }
            .content { padding: 20px 0; }
            .content p { margin-bottom: 10px; }
            .details { background-color: #f9f9f9; padding: 15px; border-radius: 5px; border: 1px solid #eee; }
            .details strong { color: #d9534f; }
            .footer { text-align: center; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #777; }
            .button { display: inline-block; background-color: #d9534f; color: #ffffff !important; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 20px; }
            a { color: #d9534f; text-decoration: none; }
            a:hover { text-decoration: underline; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>New Contact Form Submission!</h1>
                <p>Ngonzi Tours Admin Notification</p>
            </div>
            <div class="content">
                <p>A new message has been submitted through the contact form. Please review the details below:</p>
                <div class="details">
                    <p><strong>Name:</strong> ${contactDetails.name}</p>
                    <p><strong>Email:</strong> ${contactDetails.email}</p>
                    ${contactDetails.subject ? `<p><strong>Subject:</strong> ${contactDetails.subject}</p>` : ""}
                    <p><strong>Message:</strong> ${contactDetails.message}</p>
                </div>
                <p>Please log in to the admin dashboard to manage inquiries or reply directly to the sender.</p>
                <p style="text-align: center;">
                    <a href="${siteUrl}/admin" class="button">Go to Admin Dashboard</a>
                </p>
                <p>This is an automated notification. Please do not reply directly to this email.</p>
            </div>
            <div class="footer">
                <p>&copy; ${new Date().getFullYear()} Ngonzi Tours Admin. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
  `
}
