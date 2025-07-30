import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Beach Holidays - Ngonzi Tours",
  description: "Discover the best beach holiday packages in Zanzibar and other coastal destinations with Ngonzi Tours.",
}

const beachTours = [
  {
    slug: "zanzibar-beach-escape",
    name: "Zanzibar Beach Escape",
    description:
      "Relax on the pristine white sands of Zanzibar, explore historic Stone Town, and enjoy water activities in the Indian Ocean.",
    image: "/images/mnemba.jpg",
    duration: "5 Days / 4 Nights",
    groupSize: "Any size",
    price: "From $800",
  },
  {
    slug: "pemba-island-retreat",
    name: "Pemba Island Retreat",
    description:
      "An untouched paradise, Pemba offers secluded beaches, lush spice plantations, and incredible diving opportunities away from the crowds.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "4 Days / 3 Nights",
    groupSize: "2-8 people",
    price: "From $950",
  },
  {
    slug: "dar-es-salaam-coast",
    name: "Dar es Salaam Coastal Getaway",
    description:
      "Combine city exploration with relaxing beach days near Dar es Salaam, including Bongoyo Island and local markets.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "3 Days / 2 Nights",
    groupSize: "Any size",
    price: "From $450",
  },
]

export default function BeachHolidaysPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="mb-4 text-3xl font-bold md:text-5xl">Beach Holidays</h1>
      <p className="mb-8 text-xl text-muted-foreground">
        Unwind and rejuvenate on the stunning coastlines of East Africa. Our beach holidays offer pristine sands,
        crystal-clear waters, and vibrant marine life.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {beachTours.map((tour) => (
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
