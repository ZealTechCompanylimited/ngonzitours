import type React from "react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { MapPin, Globe, Mountain, Waves } from "lucide-react"
import { ImageCarousel } from "@/components/image-carousel"
import Link from "next/link"

// Dummy data for destinations - replace with actual data fetching from Supabase
const destinations = [
  {
    slug: "tanzania",
    name: "Tanzania",
    description: "The heart of African safari, home to the Serengeti, Ngorongoro Crater, and Mount Kilimanjaro.",
    longDescription: `
      <p>Tanzania is East Africa's largest country and a land of superlatives. It boasts the highest peak in Africa, Mount Kilimanjaro; the deepest lake, Lake Tanganyika; and the largest game reserve, Selous Game Reserve (now Nyerere National Park).</p>
      <p>It is most famous for its incredible wildlife safaris, particularly in the Northern Circuit, which includes the iconic Serengeti National Park, the wildlife-rich Ngorongoro Crater, Tarangire National Park with its large elephant herds, and Lake Manyara National Park.</p>
      <p>Beyond the wildlife, Tanzania offers the pristine beaches and rich cultural history of Zanzibar, the vibrant local cultures, and the warm hospitality of its people. Whether you're seeking adventure, relaxation, or cultural immersion, Tanzania has it all.</p>
    `,
    images: [
      "/images/Serengeti.jpg",
      "/images/Kilimanjaro.webp",
      "/images/mnemba.jpg",
      "/images/nyumbu.jpeg",
      "/images/tembo.webp",
    ],
    highlights: [
      "Serengeti National Park & Great Migration",
      "Ngorongoro Crater (UNESCO World Heritage Site)",
      "Mount Kilimanjaro climbing expeditions",
      "Zanzibar's pristine beaches and Stone Town",
      "Diverse cultural experiences",
    ],
    popularTours: [
      { name: "Classic Wildlife Safari", slug: "wildlife-safari" },
      { name: "Kilimanjaro Trek: Machame Route", slug: "kilimanjaro-trek-machame-route" },
      { name: "Zanzibar Beach Escape", slug: "zanzibar-beach-escape" },
    ],
  },
  {
    slug: "kenya",
    name: "Kenya",
    description:
      "The land of the original safari, offering diverse landscapes from savannas to mountains and coastlines.",
    longDescription: `
      <p>Kenya is synonymous with safari, offering classic wildlife experiences that have captivated adventurers for centuries. Its vast savannas are home to an incredible array of wildlife, including the "Big Five" and the annual Great Migration in the Maasai Mara.</p>
      <p>Beyond the iconic Maasai Mara, Kenya boasts diverse landscapes, from the semi-arid plains of Samburu to the lush highlands around Mount Kenya, and the beautiful Indian Ocean coastline with its Swahili culture.</p>
      <p>Nairobi, the capital, serves as a vibrant hub with unique attractions like the Giraffe Centre and David Sheldrick Wildlife Trust. Kenya offers a blend of thrilling wildlife encounters, stunning scenery, and rich cultural heritage.</p>
    `,
    images: [
      "/images/kenya G.webp",
      "/images/amboseli.jpg",
      "/images/twiga.jpg",
      "/placeholder.svg?height=400&width=600",
    ],
    highlights: [
      "Maasai Mara National Reserve & Great Migration",
      "Amboseli National Park (elephants with Kilimanjaro views)",
      "Lake Nakuru National Park (flamingos)",
      "Mount Kenya climbing",
      "Coastal beaches and Swahili culture",
    ],
    popularTours: [
      { name: "Kenya Wildlife Safari", slug: "kenya-wildlife-safari" }, // Assuming a new tour for Kenya
      { name: "Amboseli & Tsavo Safari", slug: "amboseli-tsavo-safari" }, // Assuming a new tour for Kenya
    ],
  },
  {
    slug: "zanzibar",
    name: "Zanzibar",
    description: "The Spice Island, famous for its pristine beaches, rich history, and vibrant culture.",
    longDescription: `
      <p>Zanzibar, an archipelago off the coast of Tanzania, is a tropical paradise steeped in history and culture. Known as the "Spice Island," it was once a major trading hub, and its capital, Stone Town, is a UNESCO World Heritage Site with winding alleyways, bustling markets, and intricately carved doors.</p>
      <p>The island boasts some of the world's most beautiful beaches, with powdery white sands and crystal-clear turquoise waters perfect for swimming, snorkeling, and diving. Beyond the beaches, you can explore spice plantations, visit Jozani Forest to see red colobus monkeys, or enjoy a sunset dhow cruise.</p>
      <p>Zanzibar offers a unique blend of relaxation, adventure, and cultural immersion, making it an ideal destination for honeymooners, families, and solo travelers alike.</p>
    `,
    images: [
      "/images/mnemba.jpg",
      "/images/stone-town.jpg",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    highlights: [
      "Pristine white sand beaches (Nungwi, Kendwa, Paje)",
      "Historic Stone Town (UNESCO World Heritage Site)",
      "Snorkeling and diving at Mnemba Atoll",
      "Spice farm tours",
      "Jozani Forest National Park",
    ],
    popularTours: [
      { name: "Zanzibar Beach Escape", slug: "zanzibar-beach-escape" },
      { name: "Zanzibar & Stone Town Explorer", slug: "zanzibar-stone-town-explorer" }, // Assuming a new tour for Zanzibar
    ],
  },
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const destination = destinations.find((d) => d.slug === params.slug)

  if (!destination) {
    return {
      title: "Destination Not Found - Ngonzi Tours",
      description: "The requested destination could not be found.",
    }
  }

  return {
    title: `${destination.name} - Ngonzi Tours`,
    description: destination.description,
    openGraph: {
      images: destination.images.length > 0 ? [destination.images[0]] : [],
    },
  }
}

export default function DestinationDetailPage({ params }: { params: { slug: string } }) {
  const destination = destinations.find((d) => d.slug === params.slug)

  if (!destination) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="mb-4 text-3xl font-bold md:text-5xl">{destination.name}</h1>
      <p className="mb-6 text-xl text-muted-foreground">{destination.description}</p>

      {destination.images && destination.images.length > 0 && (
        <div className="mb-8">
          <ImageCarousel images={destination.images} />
        </div>
      )}

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold md:text-3xl">Overview</h2>
            <div
              className="prose max-w-none text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: destination.longDescription }}
            />
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold md:text-3xl">Highlights</h2>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {destination.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2 text-lg">
                  <MapPin className="mt-1 size-5 shrink-0 text-primary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </section>

          <Separator className="my-8" />

          <section>
            <h2 className="mb-4 text-2xl font-semibold md:text-3xl">Popular Tours in {destination.name}</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {destination.popularTours.map((tour) => (
                <Link key={tour.slug} href={`/tours/${tour.slug}`} className="block">
                  <Button variant="outline" className="h-auto w-full justify-start p-4 text-left bg-transparent">
                    <Globe className="mr-3 size-5" />
                    <span className="flex-1 text-lg font-medium">{tour.name}</span>
                    <ArrowRight className="ml-auto size-5" />
                  </Button>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-20 rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="mb-4 text-2xl font-semibold">Why Visit {destination.name}?</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-lg">
                <Globe className="size-6 text-muted-foreground" />
                <span>Diverse Landscapes</span>
              </li>
              <li className="flex items-center gap-3 text-lg">
                <Mountain className="size-6 text-muted-foreground" />
                <span>Iconic Mountains</span>
              </li>
              <li className="flex items-center gap-3 text-lg">
                <Waves className="size-6 text-muted-foreground" />
                <span>Stunning Coastlines</span>
              </li>
              <li className="flex items-center gap-3 text-lg">
                <Users className="size-6 text-muted-foreground" />
                <span>Rich Culture</span>
              </li>
            </ul>
            <Button size="lg" className="mt-6 w-full" asChild>
              <Link href="/booking">Plan Your Trip</Link>
            </Button>
          </div>
        </aside>
      </div>
    </div>
  )
}

// Dummy icons for the included/excluded lists
function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function Users(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
