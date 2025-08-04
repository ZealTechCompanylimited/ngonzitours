import type { Metadata } from "next"
import { BookingPageClient } from "./BookingPageClient"

export const metadata: Metadata = {
  title: "Book Your African Adventure | Ngonzi Tours",
  description:
    "Book your dream African safari, mountain climbing, or beach holiday with Ngonzi Tours. Professional guides, luxury accommodations, and unforgettable experiences await.",
  keywords: "book safari, African tours booking, Tanzania tours, Kenya safari booking, Zanzibar holidays",
}

export default function BookingPage() {
  return <BookingPageClient />
}
