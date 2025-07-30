import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Luxury Safaris - Ngonzi Tours",
  description: "Experience the ultimate luxury safari in Tanzania and Kenya with Ngonzi Tours' exclusive packages.",
}

const luxuryTours = [
  {
    slug: "ultimate-luxury-safari",
    name: "Ultimate Luxury Safari",
    description:
      "Indulge in an exclusive and opulent safari experience with private game drives, lavish accommodations, and personalized service in Tanzania's finest reserves.",
    image: "/images/ndege.jpeg",
    duration: "8 Days / 7 Nights",
    groupSize: "Private (2-4 people)",
    price: "From $6,000",
  },
  {
    slug: "exclusive-serengeti-retreat",
    name: "Exclusive Serengeti Retreat",
    description:
      "Stay in a private luxury camp in the heart of the Serengeti, offering unparalleled wildlife viewing and bespoke services.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "6 Days / 5 Nights",
    groupSize: "Private (2-6 people)",
    price: "From $5,500",
  },
  {
    slug: "kilimanjaro-luxury-trek",
    name: "Kilimanjaro Luxury Trek",
    description:
      "Conquer Kilimanjaro with added comfort and amenities, including private toilets, larger tents, and gourmet meals.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "7 Days / 6 Nights",
    groupSize: "Private (1-8 people)",
    price: "From $3,500",
  },
]

export default function LuxurySafariPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="mb-4 text-3xl font-bold md:text-5xl">Luxury Safaris</h1>
      <p className="mb-8 text-xl text-muted-foreground">
        Indulge in the finest African safari experience with our luxury packages. Expect exclusive accommodations,
        private game drives, and unparalleled service.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {luxuryTours.map((tour) => (
          <Card key={tour.slug} className="flex flex-col">
            <div className="relative h-48 w-full">
              <Image
                src={tour.image || "/placeholder.svg"}
                alt={tour.name}
                fill
                className="rounded-t-lg object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <CardHeader>
              <CardTitle>{tour.name}</CardTitle>
              <CardDescription className="line-clamp-3">{tour.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Calendar className="size-4" />
                  {tour.duration}
                </li>
                <li className="flex items-center gap-2">
                  <Users className="size-4" />
                  {tour.groupSize}
                </li>
                <li className="flex items-center gap-2">
                  <DollarSign className="size-4" />
                  {tour.price}
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/tours/${tour.slug}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
