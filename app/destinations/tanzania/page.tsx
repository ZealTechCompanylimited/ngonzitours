import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, MapPin, DollarSign, Mountain, Waves, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Tanzania - Ngonzi Tours",
  description: "Explore the iconic wildlife, majestic mountains, and pristine beaches of Tanzania with Ngonzi Tours.",
}

const tanzaniaTours = [
  {
    slug: "wildlife-safari",
    name: "Classic Wildlife Safari",
    description:
      "Experience the thrill of the African wilderness with our classic wildlife safari. Witness the Great Migration, spot the Big Five, and immerse yourself in the breathtaking landscapes of Serengeti and Ngorongoro.",
    image: "/images/Serengeti.jpg",
    duration: "7 Days / 6 Nights",
    groupSize: "2-6 people",
    price: "From $2,500",
  },
  {
    slug: "kilimanjaro-trek-machame-route",
    name: "Kilimanjaro Trek: Machame Route",
    description:
      "Conquer Africa's highest peak, Mount Kilimanjaro, via the scenic Machame Route. A challenging yet rewarding adventure to the Roof of Africa.",
    image: "/images/Kilimanjaro.webp",
    duration: "7 Days / 6 Nights",
    groupSize: "1-10 people",
    price: "From $2,000",
  },
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
]

export default function TanzaniaPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="mb-4 text-3xl font-bold md:text-5xl">Tanzania</h1>
      <p className="mb-8 text-xl text-muted-foreground">
        Tanzania is the quintessential African safari destination, boasting vast plains teeming with wildlife, the
        majestic Mount Kilimanjaro, and the idyllic spice island of Zanzibar.
      </p>

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold md:text-3xl">Why Visit Tanzania?</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center">
            <MapPin className="mb-3 size-12 text-primary" />
            <h3 className="text-lg font-semibold">World-Class Safaris</h3>
            <p className="text-muted-foreground">Serengeti, Ngorongoro, Tarangire - home to the Big Five.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Mountain className="mb-3 size-12 text-primary" />
            <h3 className="text-lg font-semibold">Mount Kilimanjaro</h3>
            <p className="text-muted-foreground">Conquer Africa's highest peak.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Waves className="mb-3 size-12 text-primary" />
            <h3 className="text-lg font-semibold">Zanzibar Beaches</h3>
            <p className="text-muted-foreground">Pristine white sands and turquoise waters.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Globe className="mb-3 size-12 text-primary" />
            <h3 className="text-lg font-semibold">Rich Culture</h3>
            <p className="text-muted-foreground">Experience Maasai and Swahili traditions.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold md:text-3xl">Popular Tanzania Tours</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tanzaniaTours.map((tour) => (
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
      </section>
    </div>
  )
}
