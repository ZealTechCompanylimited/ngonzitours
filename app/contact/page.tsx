import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"


export const metadata: Metadata = {
  title: "Contact Us - Ngonzi Tours",
  description:
    "Get in touch with Ngonzi Tours for inquiries, bookings, and support. We are here to help you plan your dream African adventure.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
