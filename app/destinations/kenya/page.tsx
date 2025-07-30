import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Globe, Mountain, Waves, Calendar, Users, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Kenya - Ngonzi Tours",
  description: "Explore the iconic wildlife, diverse landscapes, and vibrant cultures of Kenya with Ngonzi Tours.",
}

const kenyaTours = [
  {
    slug: "kenya-wildlife-safari",
    name: "Kenya Wildlife Safari",
    description:
      "Experience the classic Kenyan safari in Maasai Mara, Amboseli, and Lake Nakuru, witnessing abundant wildlife and stunning landscapes.",
    image: "/images/kenya G.webp",
    duration: "7 Days / 6 Nights",
    groupSize: "2-7 people",
    price: "From $2,300",
  },
  {
    slug: "amboseli-tsavo-safari",
    name: "Amboseli & Tsavo Safari",
    description:
      "Focus on the large elephant herds of Amboseli with Kilimanjaro views, and the vast wilderness of Tsavo East and West.",
    image: "/images/amboseli.jpg",
    duration: "5 Days / 4 Nights",
    groupSize: "2-6 people",
    price: "From $1,800",
  },
  {
    slug: "mount-kenya-trek",
    name: "Mount Kenya Trek",
    description:
      "Trek to the summit of Mount Kenya, Africa's second-highest peak, offering a challenging and rewarding mountaineering experience.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "6 Days / 5 Nights",
    groupSize: "1-8 people",
    price: "From $1,500",
  },
]

export default function KenyaPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="mb-4 text-3xl font-bold md:text-5xl">Kenya</h1>
      <p className="mb-8 text-xl text-muted-foreground">
        Kenya, the land of the original safari, offers an unparalleled wildlife experience, from the Great Migration in
        the Maasai Mara to the majestic elephants of Amboseli with Kilimanjaro as a backdrop.
      </p>

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold md:text-3xl">Why Visit Kenya?</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center">
            <Globe className="mb-3 size-12 text-primary" />
            <h3 className="text-lg font-semibold">Iconic Safaris</h3>
            <p className="text-muted-foreground">Home to the Maasai Mara and the Great Migration.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Mountain className="mb-3 size-12 text-primary" />
            <h3 className="text-lg font-semibold">Diverse Landscapes</h3>
            <p className="text-muted-foreground">From savannas to mountains and Rift Valley lakes.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Waves className="mb-3 size-12 text-primary" />
            <h3 className="text-lg font-semibold">Beautiful Coastline</h3>
            <p className="text-muted-foreground">Pristine beaches and Swahili culture on the Indian Ocean.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <MapPin className="mb-3 size-12 text-primary" />
            <h3 className="text-lg font-semibold">Rich Culture</h3>
            <p className="text-muted-foreground">Engage with the Maasai and other vibrant communities.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold md:text-3xl">Popular Kenya Tours</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {kenyaTours.map((tour) => (
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
