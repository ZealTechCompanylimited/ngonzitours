import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getDestinationBySlug, getToursByCategory } from "@/lib/data"
import {
  Calendar,
  Users,
  MapPin,
  DollarSign,
  Waves,
  Globe,
  Star,
  ArrowRight,
  Eye,
  Heart,
  Share2,
  Sparkles,
  Camera,
  Plane,
  TrendingUp,
  TreePine,
  Anchor,
  Palmtree,
  Building,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Zanzibar - Ngonzi Tours",
  description: "Discover the pristine beaches, rich history, and vibrant culture of Zanzibar with Ngonzi Tours.",
}

const zanzibarTours = [
  {
    slug: "zanzibar-beach-culture",
    name: "Zanzibar Beach & Culture Tour",
    description:
      "Experience the best of Zanzibar with pristine beaches, Stone Town history, spice tours, and cultural experiences. Perfect tropical getaway.",
    image: "/images/mnemba.jpg",
    duration: "5 Days / 4 Nights",
    groupSize: "Any size",
    price: "From $1200",
    rating: 4.6,
    reviews: 234,
    category: "Beach",
    highlights: ["Stone Town UNESCO site", "Pristine white beaches", "Spice plantation tours", "Jozani Forest monkeys"],
  },
  {
    slug: "stone-town-heritage-tour",
    name: "Stone Town Heritage Tour",
    description:
      "Explore the UNESCO World Heritage Site of Stone Town with its rich history, narrow alleys, and cultural fusion.",
    image: "/images/stone-town.jpg",
    duration: "2 Days / 1 Night",
    groupSize: "2-15 people",
    price: "From $245",
    rating: 4.5,
    reviews: 189,
    category: "Cultural",
    highlights: ["UNESCO World Heritage Site", "House of Wonders", "Freddie Mercury House", "Spice markets"],
  },
  {
    slug: "prison-island-tour",
    name: "Prison Island Tour & Snorkeling",
    description: "Visit historic Prison Island to see giant tortoises and enjoy snorkeling in crystal-clear waters.",
    image: "/images/mnemba.jpg",
    duration: "3 Days / 2 Nights",
    groupSize: "2-12 people",
    price: "From $443",
    rating: 4.4,
    reviews: 156,
    category: "Beach",
    highlights: ["Giant Aldabra tortoises", "Historic prison ruins", "Snorkeling coral reefs", "Pristine beaches"],
  },
  {
    slug: "jozani-forest-tour",
    name: "Jozani Forest & Red Colobus Tour",
    description:
      "Explore Zanzibar's indigenous forest and encounter the rare red colobus monkeys found only in Zanzibar.",
    image: "/images/mnemba.jpg",
    duration: "4 Days / 3 Nights",
    groupSize: "2-10 people",
    price: "From $644",
    rating: 4.6,
    reviews: 134,
    category: "Cultural",
    highlights: ["Red colobus monkeys", "Indigenous forest ecosystem", "Mangrove boardwalk", "Conservation education"],
  },
  {
    slug: "matemwe-beach-retreat",
    name: "Matemwe Beach Retreat",
    description:
      "Experience pristine Matemwe Beach on Zanzibar's northeast coast with crystal-clear waters and coral reefs.",
    image: "/images/mnemba.jpg",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 people",
    price: "From $943",
    rating: 4.7,
    reviews: 167,
    category: "Beach",
    highlights: [
      "Pristine Matemwe Beach",
      "Coral reef snorkeling",
      "Traditional fishing village",
      "Sunset dhow cruises",
    ],
  },
  {
    slug: "mnemba-island-tour",
    name: "Mnemba Island Diving Adventure",
    description: "Explore pristine waters around Mnemba Island, one of East Africa's premier diving destinations.",
    image: "/images/mnemba.jpg",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 people",
    price: "From $943",
    rating: 4.8,
    reviews: 198,
    category: "Beach",
    highlights: ["Mnemba Atoll diving", "Dolphin encounters", "Whale shark sightings", "World-class snorkeling"],
  },
  {
    slug: "kendwa-beach-tour",
    name: "Kendwa Beach Paradise",
    description: "Discover Kendwa Beach, famous for stunning sunsets, vibrant nightlife, and crystal-clear waters.",
    image: "/images/mnemba.jpg",
    duration: "6 Days / 5 Nights",
    groupSize: "2-10 people",
    price: "From $1955",
    rating: 4.6,
    reviews: 223,
    category: "Beach",
    highlights: ["Spectacular sunsets", "Crystal-clear waters", "Water sports activities", "Beach parties"],
  },
  {
    slug: "nungwi-beach-tour",
    name: "Nungwi Beach Cultural Experience",
    description:
      "Experience the vibrant fishing village of Nungwi with beautiful beaches and traditional dhow building.",
    image: "/images/mnemba.jpg",
    duration: "4 Days / 3 Nights",
    groupSize: "2-12 people",
    price: "From $756",
    rating: 4.5,
    reviews: 187,
    category: "Cultural",
    highlights: ["Traditional dhow building", "Pristine Nungwi Beach", "Fishing village culture", "Turtle sanctuary"],
  },
  {
    slug: "kuza-cave-tour",
    name: "Kuza Cave Adventure",
    description: "Explore the mystical Kuza Cave with its crystal-clear natural pool and learn about local traditions.",
    image: "/images/stone-town.jpg",
    duration: "3 Days / 2 Nights",
    groupSize: "2-8 people",
    price: "From $567",
    rating: 4.4,
    reviews: 145,
    category: "Adventure",
    highlights: [
      "Crystal-clear cave pool",
      "Limestone cave exploration",
      "Traditional cave stories",
      "Conservation education",
    ],
  },
  {
    slug: "fukuchani-beach-tour",
    name: "Fukuchani Beach Serenity",
    description:
      "Discover the tranquil beauty of Fukuchani Beach, a hidden gem perfect for relaxation and authentic experiences.",
    image: "/images/mnemba.jpg",
    duration: "4 Days / 3 Nights",
    groupSize: "2-6 people",
    price: "From $678",
    rating: 4.3,
    reviews: 98,
    category: "Beach",
    highlights: [
      "Secluded pristine beach",
      "Local community interaction",
      "Traditional fishing",
      "Peaceful environment",
    ],
  },
]

const whyVisitReasons = [
  {
    icon: Waves,
    title: "Pristine Beaches",
    description: "Relax on some of the world's most beautiful white-sand beaches with crystal-clear waters.",
    color: "cyan",
  },
  {
    icon: Building,
    title: "Historic Stone Town",
    description: "Explore a UNESCO World Heritage Site with centuries of rich history and architecture.",
    color: "amber",
  },
  {
    icon: Globe,
    title: "Vibrant Culture",
    description: "Immerse yourself in the unique blend of African, Arab, and Indian Swahili culture.",
    color: "emerald",
  },
  {
    icon: Anchor,
    title: "Water Activities",
    description: "Enjoy snorkeling, diving, dhow cruises, and water sports in pristine Indian Ocean waters.",
    color: "blue",
  },
]

const stats = [
  { icon: Palmtree, value: "50+", label: "Beautiful Beaches", color: "cyan" },
  { icon: TrendingUp, value: "500K+", label: "Annual Visitors", color: "emerald" },
  { icon: TreePine, value: "UNESCO", label: "World Heritage", color: "amber" },
  { icon: Star, value: "4.9", label: "Average Rating", color: "yellow" },
]

const zanzibarDestinations = [
  {
    name: "Stone Town",
    image: "/images/stone-town.jpg",
    description: "UNESCO World Heritage Site with rich history",
    highlights: ["Historic Architecture", "Cultural Sites", "Local Markets"],
  },
  {
    name: "Mnemba Island",
    image: "/images/mnemba.jpg",
    description: "Private island paradise for snorkeling and diving",
    highlights: ["Pristine Beaches", "Marine Life", "Water Sports"],
  },
  {
    name: "Spice Plantations",
    image: "/placeholder.svg?height=300&width=400",
    description: "Aromatic tours through historic spice farms",
    highlights: ["Spice Tours", "Local Culture", "Traditional Farming"],
  },
]

export default function ZanzibarPage() {
  const zanzibar = getDestinationBySlug("zanzibar")
  const beachTours = getToursByCategory("Beach")

  if (!zanzibar) {
    return <div>Destination not found</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-900 via-blue-800 to-emerald-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-[url('/images/mnemba.jpg')] bg-cover bg-center opacity-20" />

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-cyan-400/10 rounded-full blur-2xl animate-pulse delay-1000" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Waves className="h-5 w-5 text-cyan-300" />
              <span className="text-sm font-medium">The Spice Island Paradise</span>
              <Sparkles className="h-4 w-4 text-yellow-300" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Discover
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400">
                Zanzibar
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
              Zanzibar, the legendary Spice Island, offers a captivating blend of pristine white-sand beaches, a rich
              historical past, and a vibrant Swahili culture. It's the perfect tropical escape.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Camera className="h-6 w-6 mr-3" />
                Explore Tours
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-cyan-900 bg-transparent px-10 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/contact">
                  <Plane className="h-6 w-6 mr-3" />
                  Plan Your Journey
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className={`h-8 w-8 text-${stat.color}-300`} />
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-white/80 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Visit Zanzibar Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/50 to-blue-50/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full px-6 py-3 mb-6 border border-cyan-200">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="font-semibold">Why Choose Zanzibar</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Visit Zanzibar?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover what makes Zanzibar one of the world's most enchanting tropical destinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {whyVisitReasons.map((reason, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
              >
                <CardContent className="p-8">
                  <div
                    className={`bg-${reason.color}-100 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <reason.icon className={`h-10 w-10 text-${reason.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tours Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-100 to-emerald-100 text-cyan-700 rounded-full px-6 py-3 mb-6 border border-cyan-200">
              <Camera className="h-5 w-5" />
              <span className="font-semibold">Featured Tours</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Popular Zanzibar Tours</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Carefully crafted experiences that showcase the very best of Zanzibar's beauty and culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {zanzibarTours.map((tour, index) => (
              <Card
                key={tour.slug}
                className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white transform hover:-translate-y-2"
              >
                <div className="relative h-64">
                  <Image
                    src={tour.image || "/placeholder.svg"}
                    alt={tour.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge
                      className={`${
                        tour.category === "Beach"
                          ? "bg-cyan-600"
                          : tour.category === "Cultural"
                            ? "bg-amber-600"
                            : "bg-emerald-600"
                      } text-white font-semibold`}
                    >
                      {tour.category}
                    </Badge>
                  </div>

                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:bg-white/20 rounded-full p-2 backdrop-blur-sm"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:bg-white/20 rounded-full p-2 backdrop-blur-sm"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(tour.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-white/90 text-sm font-medium ml-2">
                        {tour.rating} ({tour.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 line-clamp-1">{tour.name}</CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-2 leading-relaxed">
                    {tour.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="bg-cyan-100 rounded-full p-1.5">
                        <Calendar className="h-4 w-4 text-cyan-600" />
                      </div>
                      <span className="font-medium">{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="bg-emerald-100 rounded-full p-1.5">
                        <Users className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span className="font-medium">{tour.groupSize}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-amber-100 rounded-full p-1.5">
                        <DollarSign className="h-4 w-4 text-amber-600" />
                      </div>
                      <span className="text-lg font-bold text-gray-900">{tour.price}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tour.highlights.slice(0, 3).map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs py-1 px-2">
                          {highlight}
                        </Badge>
                      ))}
                      {tour.highlights.length > 3 && (
                        <Badge variant="outline" className="text-xs py-1 px-2">
                          +{tour.highlights.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white py-2.5 font-semibold shadow-md hover:shadow-cyan-500/25 transition-all duration-300"
                    asChild
                  >
                    <Link href={`/tours/${tour.slug}`}>
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 px-10 py-4 text-lg font-semibold hover:bg-gray-50 transition-all duration-300"
              asChild
            >
              <Link href="/tours">
                View All Tours
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Destinations Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-cyan-100 text-emerald-700 rounded-full px-6 py-3 mb-6 border border-emerald-200">
              <MapPin className="h-5 w-5" />
              <span className="font-semibold">Must-Visit Places</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Iconic Zanzibar Locations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From historic Stone Town to pristine beaches, discover Zanzibar's most spectacular locations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {zanzibarDestinations.map((destination, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-xl transition-all duration-500 bg-white transform hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white mb-1">{destination.name}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{destination.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full hover:bg-gray-50 transition-all duration-300 bg-transparent"
                    asChild
                  >
                    <Link href={`/destinations/${destination.name.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Eye className="h-4 w-4 mr-2" />
                      Explore Location
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/mnemba.jpg')] bg-cover bg-center opacity-10" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Sparkles className="h-5 w-5 text-yellow-300" />
              <span className="font-semibold">Start Your Adventure</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Ready to Explore Zanzibar?</h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
              Let our expert team create a personalized Zanzibar adventure that combines relaxation, culture, and
              adventure. From luxury beach resorts to cultural immersions, we'll make it unforgettable.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                size="lg"
                className="bg-white text-cyan-600 hover:bg-gray-100 px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/contact">
                  <Plane className="h-6 w-6 mr-3" />
                  Start Planning
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 bg-transparent px-10 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/tours">
                  <Camera className="h-6 w-6 mr-3" />
                  Browse All Tours
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { value: "24/7", label: "Expert Support" },
                { value: "100%", label: "Satisfaction Guaranteed" },
                { value: "25+", label: "Years Experience" },
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/80 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
