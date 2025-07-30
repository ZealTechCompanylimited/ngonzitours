import type { Metadata } from "next"
import { BookingPageClient } from "./BookingPageClient"
import { Plane, CalendarCheck, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Book Your Tour - Ngonzi Tours",
  description:
    "Start planning your dream safari, mountain climbing, or beach holiday with Ngonzi Tours. Submit your booking inquiry today.",
}

export default function BookingPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="mb-6 text-4xl font-bold text-primary text-center">Book Your Tour</h1>
      <p className="mb-10 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
        Ready to embark on your dream African adventure? Fill out the form below to send us your booking request. Our
        team will get back to you shortly to finalize the details.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Booking Information / Why Book With Us */}
        <div className="space-y-8">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-primary">Why Book With Ngonzi Tours?</h2>
            <p className="text-muted-foreground">
              We make your booking process seamless and ensure you have all the support you need for an unforgettable
              journey.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <CalendarCheck className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Easy & Secure Booking</h3>
                <p className="text-muted-foreground">Our streamlined process ensures a hassle-free reservation.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Personalized Service</h3>
                <p className="text-muted-foreground">We tailor every detail to match your unique preferences.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Plane className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Expert Guidance</h3>
                <p className="text-muted-foreground">Benefit from our local knowledge and experienced team.</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="mb-4 text-2xl font-semibold text-primary">What Happens Next?</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Submit your booking request using the form.</li>
              <li>Our team will review your request and confirm availability within 24-48 hours.</li>
              <li>You will receive a detailed itinerary and payment instructions.</li>
              <li>Once confirmed, get ready for your incredible African adventure!</li>
            </ol>
          </div>
        </div>

        {/* Booking Form */}
        <div>
          <BookingPageClient />
        </div>
      </div>
    </div>
  )
}
