import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Wildlife Safaris - Ngonzi Tours",
  description:
    "Embark on an unforgettable wildlife safari in Tanzania and Kenya with Ngonzi Tours. Witness the Great Migration and the Big Five.",
}

const wildlifeTours = [
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
    slug: "northern-circuit-adventure",
    name: "Northern Circuit Adventure",
    description:
      "A comprehensive safari covering Tarangire, Lake Manyara, Serengeti, and Ngorongoro Crater, offering diverse wildlife and landscapes.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "6 Days / 5 Nights",
    groupSize: "2-7 people",
    price: "From $2,200",
  },
  {
    slug: "selous-mikumi-safari",
    name: "Selous & Mikumi Safari",
    description:
      "Explore the vast and wild Selous Game Reserve (Nyerere National Park) and Mikumi National Park, known for their large populations of elephants, lions, and wild dogs.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "5 Days / 4 Nights",
    groupSize: "2-6 people",
    price: "From $1,800",
  },
]

export default function WildlifeSafariPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="mb-4 text-3xl font-bold md:text-5xl">Wildlife Safaris</h1>
      <p className="mb-8 text-xl text-muted-foreground">
        Embark on an unforgettable journey into the heart of the African wilderness. Our wildlife safaris offer
        unparalleled opportunities to witness the iconic Big Five and the spectacular Great Migration.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {wildlifeTours.map((tour) => (
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
