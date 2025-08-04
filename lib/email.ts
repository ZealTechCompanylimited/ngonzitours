import nodemailer from "nodemailer"

interface SendEmailProps {
  to: string
  subject: string
  html: string
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number.parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_PORT === "465",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function sendEmail({ to, subject, html }: SendEmailProps) {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    console.warn("SMTP environment variables are not fully configured. Email sending skipped.")
    return { success: false, message: "SMTP not configured." }
  }

  try {
    const info = await transporter.sendMail({
      from: `"Ngonzi Tours" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    })

    console.log("Message sent: %s", info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: error instanceof Error ? error.message : String(error) }
  }
}

export async function sendBookingConfirmationEmail(bookingDetails: {
  to: string
  fullName: string
  tourName: string
  preferredDates: string
  numberOfAdults: number
  numberOfChildren?: number
  message?: string
}) {
  const html = generateBookingConfirmationEmail(bookingDetails)
  return await sendEmail({
    to: bookingDetails.to,
    subject: `Booking Confirmation - ${bookingDetails.tourName}`,
    html,
  })
}

export async function sendContactEmail(contactDetails: {
  to: string
  name: string
  subject: string
  message: string
}) {
  const html = generateContactConfirmationEmail(contactDetails)
  return await sendEmail({
    to: contactDetails.to,
    subject: `Thank you for contacting Ngonzi Tours - ${contactDetails.subject}`,
    html,
  })
}

export async function sendAdminNotificationEmail(notification: {
  type: "booking" | "contact"
  data: any
}) {
  const adminEmail = process.env.ADMIN_EMAIL
  if (!adminEmail) {
    console.warn("ADMIN_EMAIL not configured")
    return { success: false, message: "Admin email not configured" }
  }

  let html: string
  let subject: string

  if (notification.type === "booking") {
    html = generateAdminBookingNotificationEmail(notification.data)
    subject = `New Tour Booking - ${notification.data.tourName}`
  } else {
    html = generateAdminContactNotificationEmail(notification.data)
    subject = `New Contact Form Submission - ${notification.data.subject}`
  }

  return await sendEmail({
    to: adminEmail,
    subject,
    html,
  })
}

function generateBookingConfirmationEmail(bookingDetails: {
  fullName: string
  tourName: string
  preferredDates: string
  numberOfAdults: number
  numberOfChildren?: number
  message?: string
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

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
                    <p><strong>Preferred Dates:</strong> ${bookingDetails.preferredDates}</p>
                    <p><strong>Number of Adults:</strong> ${bookingDetails.numberOfAdults}</p>
                    ${bookingDetails.numberOfChildren ? `<p><strong>Number of Children:</strong> ${bookingDetails.numberOfChildren}</p>` : ""}
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

function generateContactConfirmationEmail(contactDetails: {
  name: string
  subject: string
  message: string
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Confirmation - Ngonzi Tours</title>
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
                <p>Thank You for Contacting Us!</p>
            </div>
            <div class="content">
                <p>Dear ${contactDetails.name},</p>
                <p>Thank you for contacting Ngonzi Tours. We have received your message and will get back to you as soon as possible, typically within 24-48 hours.</p>
                <p>Here is a copy of your message:</p>
                <div class="details">
                    <p><strong>Subject:</strong> ${contactDetails.subject}</p>
                    <p><strong>Message:</strong> ${contactDetails.message}</p>
                </div>
                <p>We look forward to helping you plan your unforgettable African adventure!</p>
                <p style="text-align: center;">
                    <a href="${siteUrl}" class="button">Visit Our Website</a>
                </p>
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

function generateAdminBookingNotificationEmail(bookingData: {
  fullName: string
  email: string
  phone?: string
  country?: string
  tourName: string
  preferredDates: string
  numberOfAdults: number
  numberOfChildren?: number
  message?: string
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Tour Booking - Ngonzi Tours Admin</title>
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
                    <p><strong>Tour Name:</strong> ${bookingData.tourName}</p>
                    <p><strong>Full Name:</strong> ${bookingData.fullName}</p>
                    <p><strong>Email:</strong> ${bookingData.email}</p>
                    ${bookingData.phone ? `<p><strong>Phone:</strong> ${bookingData.phone}</p>` : ""}
                    ${bookingData.country ? `<p><strong>Country:</strong> ${bookingData.country}</p>` : ""}
                    <p><strong>Preferred Dates:</strong> ${bookingData.preferredDates}</p>
                    <p><strong>Number of Adults:</strong> ${bookingData.numberOfAdults}</p>
                    ${bookingData.numberOfChildren ? `<p><strong>Number of Children:</strong> ${bookingData.numberOfChildren}</p>` : ""}
                    ${bookingData.message ? `<p><strong>Client Message:</strong> ${bookingData.message}</p>` : ""}
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

function generateAdminContactNotificationEmail(contactData: {
  name: string
  email: string
  subject: string
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
                    <p><strong>Name:</strong> ${contactData.name}</p>
                    <p><strong>Email:</strong> ${contactData.email}</p>
                    <p><strong>Subject:</strong> ${contactData.subject}</p>
                    <p><strong>Message:</strong> ${contactData.message}</p>
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
