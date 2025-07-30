import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Destinations - Ngonzi Tours",
  description: "Explore the incredible destinations in Tanzania and Kenya offered by Ngonzi Tours.",
}

const destinations = [
  {
    slug: "tanzania",
    name: "Tanzania",
    description: "The heart of African safari, home to the Serengeti, Ngorongoro Crater, and Mount Kilimanjaro.",
    image: "/images/Serengeti.jpg",
  },
  {
    slug: "kenya",
    name: "Kenya",
    description:
      "The land of the original safari, offering diverse landscapes from savannas to mountains and coastlines.",
    image: "/images/kenya G.webp",
  },
  {
    slug: "zanzibar",
    name: "Zanzibar",
    description: "The Spice Island, famous for its pristine beaches, rich history, and vibrant culture.",
    image: "/images/mnemba.jpg",
  },
]

export default function DestinationsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="mb-4 text-3xl font-bold md:text-5xl">Our Destinations</h1>
      <p className="mb-8 text-xl text-muted-foreground">
        Discover the breathtaking beauty and diverse experiences awaiting you in East Africa. From iconic wildlife
        reserves to stunning coastlines and majestic mountains, each destination offers a unique adventure.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <Card key={destination.slug} className="flex flex-col">
            <div className="relative h-48 w-full">
              <Image
                src={destination.image || "/placeholder.svg"}
                alt={destination.name}
                fill
                className="rounded-t-lg object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <CardHeader>
              <CardTitle>{destination.name}</CardTitle>
              <CardDescription className="line-clamp-3">{destination.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <Button asChild variant="link" className="p-0">
                <Link href={`/destinations/${destination.slug}`} className="inline-flex items-center">
                  Explore <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
