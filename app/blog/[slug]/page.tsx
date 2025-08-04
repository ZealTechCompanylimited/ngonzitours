import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { getBlogPostBySlug, getRelatedBlogPosts } from "@/lib/data"
import { Clock, ArrowLeft, Calendar } from "lucide-react"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedBlogPosts(post.slug, post.category, 3)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 bg-gray-900">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <Link href="/blog">
              <Button variant="ghost" className="text-white hover:text-green-400 mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
            <Badge className="mb-4 bg-green-600 hover:bg-green-700">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
            <div className="flex items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Author Info */}
          <div className="flex items-center gap-4 mb-8 p-6 bg-gray-50 rounded-lg">
            <Avatar className="h-16 w-16">
              <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
              <AvatarFallback>
                {post.author.name
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{post.author.name}</h3>
              <p className="text-gray-600">{post.author.bio}</p>
            </div>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-xl text-gray-600 mb-8 font-medium leading-relaxed">{post.excerpt}</div>

            <div
              className="prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br />") }}
            />
          </article>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {relatedPost.readTime}
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold line-clamp-2">
                        <Link href={`/blog/${relatedPost.slug}`} className="hover:text-green-600 transition-colors">
                          {relatedPost.title}
                        </Link>
                      </h4>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-600 line-clamp-2 mb-3">{relatedPost.excerpt}</p>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage
                            src={relatedPost.author.avatar || "/placeholder.svg"}
                            alt={relatedPost.author.name}
                          />
                          <AvatarFallback className="text-xs">
                            {relatedPost.author.name
                              .split(" ")
                              .map((n: string) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <p className="text-sm text-gray-600">{relatedPost.author.name}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-16 p-8 bg-green-50 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready for Your Own Adventure?</h3>
            <p className="text-gray-600 mb-6">Let us help you plan the perfect East African safari experience.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tours">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Explore Tours
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
