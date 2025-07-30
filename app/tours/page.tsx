import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, MapPin, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Tours - Ngonzi Tours",
  description: "Explore a wide range of safari, mountain climbing, and beach holiday packages offered by Ngonzi Tours.",
}

const allTours = [
  {
    slug: "wildlife-safari",
    name: "Classic Wildlife Safari",
    description:
      "Experience the thrill of the African wilderness with our classic wildlife safari. Witness the Great Migration, spot the Big Five, and immerse yourself in the breathtaking landscapes of Serengeti and Ngorongoro.",
    image: "/images/Serengeti.jpg",
    duration: "7 Days / 6 Nights",
    groupSize: "2-6 people",
    price: "From $2,500",
    category: "Wildlife Safari",
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
    category: "Mountain Climbing",
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
    category: "Beach Holidays",
  },
  {
    slug: "authentic-cultural-immersion",
    name: "Authentic Cultural Immersion",
    description:
      "Discover the rich traditions and vibrant cultures of Tanzania's local communities. Engage with Maasai, Hadzabe, and other tribes.",
    image: "/images/cultural.webp",
    duration: "4 Days / 3 Nights",
    groupSize: "2-8 people",
    price: "From $750",
    category: "Cultural Tours",
  },
  {
    slug: "ultimate-luxury-safari",
    name: "Ultimate Luxury Safari",
    description:
      "Indulge in an exclusive and opulent safari experience with private game drives, lavish accommodations, and personalized service in Tanzania's finest reserves.",
    image: "/images/ndege.jpeg",
    duration: "8 Days / 7 Nights",
    groupSize: "Private (2-4 people)",
    price: "From $6,000",
    category: "Luxury Safari",
  },
  {
    slug: "mount-meru-trek",
    name: "Mount Meru Trek",
    description:
      "A challenging and rewarding trek to Tanzania's second-highest peak, offering stunning views of Kilimanjaro and diverse wildlife.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "4 Days / 3 Nights",
    groupSize: "1-8 people",
    price: "From $900",
    category: "Mountain Climbing",
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
    category: "Luxury Safari",
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
    category: "Beach Holidays",
  },
]

export default function ToursPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="mb-4 text-3xl font-bold md:text-5xl">Our Tours</h1>
      <p className="mb-8 text-xl text-muted-foreground">
        Explore our diverse range of tour packages designed to offer unforgettable experiences in East Africa. From
        thrilling wildlife safaris to challenging mountain treks and relaxing beach holidays, we have something for
        every adventurer.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {allTours.map((tour) => (
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
                <li className="flex items-center gap-2">
                  <MapPin className="size-4" />
                  {tour.category}
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
