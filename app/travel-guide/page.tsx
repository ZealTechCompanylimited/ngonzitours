import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Travel Guide - Ngonzi Tours",
  description:
    "Your comprehensive guide to traveling in Tanzania and Kenya. Find essential tips, packing lists, and cultural insights.",
}

const travelGuideArticles = [
  {
    slug: "packing-for-safari",
    title: "Essential Packing List for Your Safari",
    description:
      "Don't know what to bring? Our comprehensive guide ensures you're well-prepared for your African adventure.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    slug: "health-safety-tips",
    title: "Health and Safety Tips for East Africa",
    description:
      "Stay healthy and safe on your trip with our expert advice on vaccinations, medications, and local precautions.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    slug: "cultural-etiquette",
    title: "Cultural Etiquette in Tanzania and Kenya",
    description:
      "Learn about local customs and traditions to ensure respectful and enriching interactions with communities.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    slug: "best-time-to-visit",
    title: "Best Time to Visit for Wildlife Viewing",
    description: "Discover the optimal seasons for witnessing the Great Migration and other wildlife spectacles.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    slug: "visa-requirements",
    title: "Visa and Entry Requirements",
    description:
      "Understand the necessary documentation for entering Tanzania and Kenya, including visa application processes.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    slug: "local-cuisine",
    title: "A Taste of East Africa: Local Cuisine",
    description:
      "Explore the delicious flavors of Tanzanian and Kenyan food, from traditional dishes to popular snacks.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function TravelGuidePage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="mb-4 text-3xl font-bold md:text-5xl">Travel Guide</h1>
      <p className="mb-8 text-xl text-muted-foreground">
        Your comprehensive resource for planning and enjoying your adventure in Tanzania and Kenya. Find essential tips,
        cultural insights, and practical advice.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {travelGuideArticles.map((article) => (
          <Card key={article.slug} className="flex flex-col">
            <div className="relative h-48 w-full">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="rounded-t-lg object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
              <CardDescription className="line-clamp-3">{article.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <Link
                href={`/travel-guide/${article.slug}`}
                className="inline-flex items-center text-primary hover:underline"
              >
                Read More <ArrowRight className="ml-1 size-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
