import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { getFeaturedTours, getFeaturedDestinations, getFeaturedBlogPosts } from "@/lib/data"
import { Calendar, DollarSign, Users } from "lucide-react"

export default function Home() {
  const featuredTours = getFeaturedTours().slice(0, 4)
  const featuredDestinations = getFeaturedDestinations().slice(0, 3)
  const featuredPosts = getFeaturedBlogPosts().slice(0, 3)

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/Serengeti.jpg"
            alt="Safari in Africa"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Experience the Magic of <span className="text-amber-400">East Africa</span>
          </h1>
          <p className="text-xl max-w-2xl mb-8">
            Unforgettable safari adventures, mountain treks, and beach getaways in Tanzania, Kenya, and Zanzibar.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/tours">Explore Tours</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/20 bg-transparent"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Safari Tours</h2>
            <Button variant="outline" asChild>
              <Link href="/tours">View All Tours</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTours.map((tour) => (
              <div
                key={tour.id}
                className="group relative overflow-hidden rounded-lg shadow-lg bg-white h-[450px] flex flex-col"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={tour.images[0] || "/placeholder.svg"}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                    <h3 className="text-white text-xl font-bold">{tour.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 text-black px-3 py-1 rounded-full text-sm font-medium">
                    {tour.category}
                  </div>
                </div>

                <div className="p-4 flex-grow">
                  <div className="flex items-center gap-4 mb-3 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{tour.groupSize}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground line-clamp-2 mb-4">{tour.shortDescription}</p>
                </div>

                <div className="p-4 pt-0 mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4 text-primary" />
                      <span className="font-bold text-lg">${tour.price}</span>
                      <span className="text-muted-foreground text-sm">/ person</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-amber-500">★★★★★</span>
                      <span className="text-sm">({tour.reviewsCount})</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button asChild className="w-full">
                      <Link href={`/booking?tour=${tour.slug}`}>Book Now</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href={`/tours/${tour.slug}`}>Read More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Top Destinations</h2>
            <Button variant="outline" asChild>
              <Link href="/destinations">View All Destinations</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredDestinations.map((destination) => (
              <Link
                key={destination.id}
                href={`/destinations/${destination.slug}`}
                className="group relative h-80 overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={destination.images[0] || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">{destination.name}</h3>
                  <p className="text-white/90 line-clamp-2 mb-4">{destination.shortDescription}</p>
                  <span className="text-amber-400 font-medium group-hover:underline">Explore Destination</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Ngonzi Tours</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide exceptional safari experiences with expert guides, comfortable accommodations, and
              unforgettable wildlife encounters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-award"
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Local Guides</h3>
              <p className="text-muted-foreground">
                Our guides have decades of experience and intimate knowledge of East African wildlife.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-jeep"
                >
                  <path d="M10 2h4" />
                  <path d="m21 14-3-8H6L3 14v6h2v2h2v-2h10v2h2v-2h2Z" />
                  <circle cx="8" cy="16" r="2" />
                  <circle cx="16" cy="16" r="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Vehicles</h3>
              <p className="text-muted-foreground">
                Comfortable 4x4 safari vehicles with pop-up roofs for optimal wildlife viewing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-hotel"
                >
                  <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
                  <path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16" />
                  <path d="M8 7h.01" />
                  <path d="M16 7h.01" />
                  <path d="M12 7h.01" />
                  <path d="M12 11h.01" />
                  <path d="M16 11h.01" />
                  <path d="M8 11h.01" />
                  <path d="M10 22v-6.5m4 0V22" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Accommodations</h3>
              <p className="text-muted-foreground">
                From luxury lodges to authentic tented camps, we select the best places to stay.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-heart-handshake"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
                  <path d="m18 15-2-2" />
                  <path d="m15 18-2-2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Responsible Tourism</h3>
              <p className="text-muted-foreground">
                We support local communities and conservation efforts throughout East Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Travel Insights</h2>
            <Button variant="outline" asChild>
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.publishedAt}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
                  <span className="text-primary font-medium mt-auto group-hover:underline">Read More</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Your African Adventure?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contact us today to plan your perfect safari, mountain trek, or beach getaway in East Africa.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white/20 bg-transparent"
            asChild
          >
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
