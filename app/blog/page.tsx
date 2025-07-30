import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog - Ngonzi Tours",
  description: "Read the latest articles, travel tips, and safari stories from Ngonzi Tours.",
}

// Dummy blog posts - replace with actual data fetching from Supabase
const blogPosts = [
  {
    slug: "great-migration-guide",
    title: "The Ultimate Guide to the Great Migration",
    description:
      "Witness one of nature's most spectacular events. Learn when and where to see the wildebeest migration.",
    image: "/images/nyumbu.jpeg",
    date: "July 20, 2025",
  },
  {
    slug: "kilimanjaro-preparation",
    title: "Preparing for Your Kilimanjaro Climb",
    description: "Essential tips and advice to get you ready for conquering Africa's highest peak.",
    image: "/images/Kilimanjaro.webp",
    date: "June 15, 2025",
  },
  {
    slug: "zanzibar-hidden-gems",
    title: "Zanzibar's Hidden Gems: Beyond the Beaches",
    description: "Explore the lesser-known attractions and cultural experiences on the spice island.",
    image: "/images/stone-town.jpg",
    date: "May 10, 2025",
  },
  {
    slug: "ethical-safari-tips",
    title: "How to Have an Ethical Safari Experience",
    description: "Learn how to travel responsibly and support local communities and conservation efforts.",
    image: "/images/gt1.jpg",
    date: "April 22, 2025",
  },
  {
    slug: "photography-tips",
    title: "Safari Photography: Capturing the Wild",
    description: "Tips and tricks for taking stunning wildlife photos on your African adventure.",
    image: "/images/chui.jpg",
    date: "March 5, 2025",
  },
  {
    slug: "maasai-culture",
    title: "Understanding Maasai Culture: A Respectful Encounter",
    description: "Insights into the traditions and lifestyle of the iconic Maasai people.",
    image: "/images/cultural.webp",
    date: "February 18, 2025",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="mb-4 text-3xl font-bold md:text-5xl">Our Blog</h1>
      <p className="mb-8 text-xl text-muted-foreground">
        Stay updated with the latest travel insights, safari stories, and tips for your East African adventure.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="flex flex-col">
            <div className="relative h-48 w-full">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="rounded-t-lg object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription className="line-clamp-3">{post.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="mb-2 flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-2 size-4" />
                {post.date}
              </div>
              <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-primary hover:underline">
                Read More <ArrowRight className="ml-1 size-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
