import type { Metadata } from "next"
import { ContactPageClient } from "./ContactPageClient"
import { Mail, Phone, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - Ngonzi Tours",
  description:
    "Get in touch with Ngonzi Tours for inquiries, bookings, and support. We are here to help you plan your dream African adventure.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="mb-6 text-4xl font-bold text-primary text-center">Contact Us</h1>
      <p className="mb-10 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
        Have questions about our tours, need a custom itinerary, or just want to say hello? We&apos;d love to hear from
        you!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-primary">Get in Touch Directly</h2>
            <p className="text-muted-foreground">
              Feel free to reach out to us through any of the following channels. Our team is ready to assist you.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Email Us</h3>
                <a href="mailto:info@ngonzitours.com" className="text-muted-foreground hover:underline">
                  info@ngonzitours.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Call Us</h3>
                <a href="tel:+255712345678" className="text-muted-foreground hover:underline">
                  +255 712 345 678
                </a>{" "}
                {/* Example number */}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Our Office</h3>
                <p className="text-muted-foreground">Arusha, Tanzania, East Africa</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="mb-4 text-2xl font-semibold text-primary">Office Hours</h2>
            <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM (EAT)</p>
            <p className="text-muted-foreground">Saturday: 10:00 AM - 2:00 PM (EAT)</p>
            <p className="text-muted-foreground">Sunday: Closed</p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <ContactPageClient />
        </div>
      </div>
    </div>
  )
}
