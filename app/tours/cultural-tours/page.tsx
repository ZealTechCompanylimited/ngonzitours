import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Cultural Tours - Ngonzi Tours",
  description:
    "Immerse yourself in the rich cultures and traditions of Tanzania with Ngonzi Tours' cultural experiences.",
}

const culturalTours = [
  {
    slug: "authentic-cultural-immersion",
    name: "Authentic Cultural Immersion",
    description:
      "Discover the rich traditions and vibrant cultures of Tanzania's local communities. Engage with Maasai, Hadzabe, and other tribes.",
    image: "/images/cultural.webp",
    duration: "4 Days / 3 Nights",
    groupSize: "2-8 people",
    price: "From $750",
  },
  {
    slug: "maasai-village-experience",
    name: "Maasai Village Experience",
    description:
      "Spend a day or two living with the Maasai, learning about their customs, traditions, and daily life in the heart of the savanna.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "2 Days / 1 Night",
    groupSize: "Any size",
    price: "From $300",
  },
  {
    slug: "coffee-plantation-tour",
    name: "Arusha Coffee Plantation Tour",
    description:
      "Explore a working coffee plantation near Arusha, learn about coffee production from bean to cup, and enjoy a fresh brew.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "1 Day",
    groupSize: "Any size",
    price: "From $100",
  },
]

export default function CulturalToursPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="mb-4 text-3xl font-bold md:text-5xl">Cultural Tours</h1>
      <p className="mb-8 text-xl text-muted-foreground">
        Go beyond the wildlife and connect with the heart of Tanzania through our immersive cultural tours. Experience
        authentic traditions, local lifestyles, and warm hospitality.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {culturalTours.map((tour) => (
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
