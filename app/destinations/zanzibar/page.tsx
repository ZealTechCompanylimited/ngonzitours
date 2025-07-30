import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, MapPin, DollarSign, Waves, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Zanzibar - Ngonzi Tours",
  description: "Discover the pristine beaches, rich history, and vibrant culture of Zanzibar with Ngonzi Tours.",
}

const zanzibarTours = [
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
    slug: "zanzibar-stone-town-explorer",
    name: "Zanzibar & Stone Town Explorer",
    description:
      "A deep dive into the history and culture of Stone Town combined with relaxation on the island's beautiful beaches.",
    image: "/images/stone-town.jpg",
    duration: "4 Days / 3 Nights",
    groupSize: "Any size",
    price: "From $600",
  },
  {
    slug: "spice-island-adventure",
    name: "Spice Island Adventure",
    description: "Experience a comprehensive tour of Zanzibar's spice plantations, Jozani Forest, and a dhow cruise.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "3 Days / 2 Nights",
    groupSize: "2-10 people",
    price: "From $450",
  },
]

export default function ZanzibarPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="mb-4 text-3xl font-bold md:text-5xl">Zanzibar</h1>
      <p className="mb-8 text-xl text-muted-foreground">
        Zanzibar, the legendary Spice Island, offers a captivating blend of pristine white-sand beaches, a rich
        historical past, and a vibrant Swahili culture. It's the perfect tropical escape.
      </p>

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold md:text-3xl">Why Visit Zanzibar?</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center">
            <Waves className="mb-3 size-12 text-primary" />
            <h3 className="text-lg font-semibold">Pristine Beaches</h3>
            <p className="text-muted-foreground">Relax on some of the world's most beautiful white-sand beaches.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <MapPin className="mb-3 size-12 text-primary" />
            <h3 className="text-lg font-semibold">Historic Stone Town</h3>
            <p className="text-muted-foreground">Explore a UNESCO World Heritage Site with rich history.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Globe className="mb-3 size-12 text-primary" />
            <h3 className="text-lg font-semibold">Vibrant Culture</h3>
            <p className="text-muted-foreground">Immerse yourself in the unique Swahili culture.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <DollarSign className="mb-3 size-12 text-primary" />
            <h3 className="text-lg font-semibold">Water Activities</h3>
            <p className="text-muted-foreground">Snorkeling, diving, and dhow cruises in clear waters.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold md:text-3xl">Popular Zanzibar Tours</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {zanzibarTours.map((tour) => (
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
