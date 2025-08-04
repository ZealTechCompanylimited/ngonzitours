import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { blogPosts, getFeaturedBlogPosts, getBlogPostsByCategory } from "@/lib/data"
import { Clock } from "lucide-react"

function BlogContent() {
  const featuredPosts = getFeaturedBlogPosts()
  const photographyPosts = getBlogPostsByCategory("Photography")
  const adventurePosts = getBlogPostsByCategory("Adventure")
  const culturePosts = getBlogPostsByCategory("Culture")
  const conservationPosts = getBlogPostsByCategory("Conservation")
  const travelTipsPosts = getBlogPostsByCategory("Travel Tips")

  const categories = [
    { name: "Photography", posts: photographyPosts, color: "bg-blue-100 text-blue-800" },
    { name: "Adventure", posts: adventurePosts, color: "bg-green-100 text-green-800" },
    { name: "Culture", posts: culturePosts, color: "bg-purple-100 text-purple-800" },
    { name: "Conservation", posts: conservationPosts, color: "bg-orange-100 text-orange-800" },
    { name: "Travel Tips", posts: travelTipsPosts, color: "bg-red-100 text-red-800" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Safari Stories & Travel Insights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the wonders of East Africa through our expert guides, travel tips, and inspiring stories from the
            field.
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Stories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    <Badge className="absolute top-4 left-4 bg-green-600 hover:bg-green-700">Featured</Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold line-clamp-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-green-600 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 line-clamp-3 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                        <AvatarFallback>
                          {post.author.name
                            .split(" ")
                            .map((n: string) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{post.author.name}</p>
                        <p className="text-xs text-gray-500">
                          {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse by Category</h2>
          <div className="space-y-12">
            {categories.map(
              (category) =>
                category.posts.length > 0 && (
                  <div key={category.name}>
                    <div className="flex items-center gap-3 mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
                      <Badge className={category.color}>{category.posts.length} posts</Badge>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.posts.map((post) => (
                        <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                          <div className="relative h-40">
                            <Image
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardHeader className="pb-2">
                            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {post.readTime}
                              </div>
                            </div>
                            <h4 className="text-lg font-semibold line-clamp-2">
                              <Link href={`/blog/${post.slug}`} className="hover:text-green-600 transition-colors">
                                {post.title}
                              </Link>
                            </h4>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <p className="text-gray-600 line-clamp-2 mb-3">{post.excerpt}</p>
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                                <AvatarFallback className="text-xs">
                                  {post.author.name
                                    .split(" ")
                                    .map((n: string) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <p className="text-sm text-gray-600">{post.author.name}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ),
            )}
          </div>
        </section>

        {/* All Posts */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-40">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  {post.featured && (
                    <Badge className="absolute top-3 left-3 bg-green-600 hover:bg-green-700">Featured</Badge>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-green-600 transition-colors">
                      {post.title}
                    </Link>
                  </h4>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 line-clamp-2 mb-3">{post.excerpt}</p>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                      <AvatarFallback className="text-xs">
                        {post.author.name
                          .split(" ")
                          .map((n: string) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <p className="text-sm text-gray-600">{post.author.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default function BlogPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogContent />
    </Suspense>
  )
}
