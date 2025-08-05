import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { destinations } from "@/lib/data"
import {
  MapPin,
  Globe,
  Mountain,
  Waves,
  Calendar,
  Users,
  DollarSign,
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
  TelescopeIcon as Binoculars,
  Compass,
  Sun,
} from "lucide-react"

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
    rating: 4.9,
    reviews: 203,
    category: "Safari",
    highlights: ["Great Migration", "Big Five", "Maasai Mara", "Amboseli Elephants"],
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
    rating: 4.8,
    reviews: 156,
    category: "Safari",
    highlights: ["Elephant Herds", "Kilimanjaro Views", "Tsavo Wilderness", "Red Elephants"],
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
    rating: 4.7,
    reviews: 89,
    category: "Adventure",
    highlights: ["Point Lenana", "Alpine Scenery", "Unique Flora", "Mountain Challenge"],
  },
]

const whyVisitReasons = [
  {
    icon: Globe,
    title: "Iconic Safaris",
    description: "Home to the legendary Maasai Mara and witness the spectacular Great Migration firsthand.",
    color: "orange",
  },
  {
    icon: Mountain,
    title: "Diverse Landscapes",
    description: "From endless savannas to snow-capped mountains and the dramatic Rift Valley lakes.",
    color: "emerald",
  },
  {
    icon: Waves,
    title: "Beautiful Coastline",
    description: "Pristine beaches, coral reefs, and rich Swahili culture along the Indian Ocean coast.",
    color: "blue",
  },
  {
    icon: MapPin,
    title: "Rich Culture",
    description: "Engage with the proud Maasai people and discover Kenya's diverse tribal heritage.",
    color: "red",
  },
]

const stats = [
  { icon: Binoculars, value: "60+", label: "National Parks", color: "orange" },
  { icon: TrendingUp, value: "2M+", label: "Annual Visitors", color: "emerald" },
  { icon: TreePine, value: "25,000", label: "Wildlife Species", color: "green" },
  { icon: Star, value: "4.9", label: "Average Rating", color: "yellow" },
]

export default function KenyaPage() {
  const kenyaDestinations = destinations.filter((dest) => dest.country === "Kenya")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-900 via-red-800 to-amber-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-[url('/images/kenya G.webp')] bg-cover bg-center opacity-20" />

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-orange-400/10 rounded-full blur-2xl animate-pulse delay-1000" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Sun className="h-5 w-5 text-orange-300" />
              <span className="text-sm font-medium">The Original Safari Destination</span>
              <Sparkles className="h-4 w-4 text-yellow-300" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Experience
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-amber-400">
                Kenya
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
              Kenya, the land of the original safari, offers an unparalleled wildlife experience, from the Great
              Migration in the Maasai Mara to the majestic elephants of Amboseli with Kilimanjaro as a backdrop.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Camera className="h-6 w-6 mr-3" />
                Explore Safaris
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-900 bg-transparent px-10 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/contact">
                  <Plane className="h-6 w-6 mr-3" />
                  Plan Your Safari
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

      {/* Why Visit Kenya Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50/50 to-red-50/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full px-6 py-3 mb-6 border border-orange-200">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="font-semibold">Why Choose Kenya</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Visit Kenya?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover what makes Kenya the ultimate safari destination and one of Africa's most diverse countries
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
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 rounded-full px-6 py-3 mb-6 border border-orange-200">
              <Camera className="h-5 w-5" />
              <span className="font-semibold">Featured Tours</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Popular Kenya Tours</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Carefully crafted safari experiences that showcase the very best of Kenya's wildlife and landscapes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {kenyaTours.map((tour, index) => (
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
                        tour.category === "Safari" ? "bg-orange-600" : "bg-emerald-600"
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
                      <div className="bg-orange-100 rounded-full p-1.5">
                        <Calendar className="h-4 w-4 text-orange-600" />
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
                    className="w-full bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800 text-white py-2.5 font-semibold shadow-md hover:shadow-orange-500/25 transition-all duration-300"
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
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-orange-100 text-emerald-700 rounded-full px-6 py-3 mb-6 border border-emerald-200">
              <Compass className="h-5 w-5" />
              <span className="font-semibold">Must-Visit Places</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Iconic Kenya Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From the legendary Maasai Mara to the snow-capped peaks of Mount Kenya, explore the country's most
              spectacular locations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {kenyaDestinations.map((destination) => (
              <Link
                key={destination.id}
                href={`/destinations/${destination.slug}`}
                className="group relative h-96 overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={destination.images[0] || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">{destination.name}</h3>
                  <p className="text-white/90 line-clamp-3 mb-4">{destination.shortDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.highlights.slice(0, 3).map((highlight, index) => (
                      <span key={index} className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <span className="text-amber-400 font-medium group-hover:underline">Explore Destination</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/kenya G.webp')] bg-cover bg-center opacity-10" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Sparkles className="h-5 w-5 text-yellow-300" />
              <span className="font-semibold">Start Your Safari</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Ready to Experience Kenya?</h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
              Let our expert guides take you on an unforgettable Kenyan safari adventure. From witnessing the Great
              Migration to climbing Mount Kenya, we'll create memories that last a lifetime.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
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
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 bg-transparent px-10 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/tours">
                  <Camera className="h-6 w-6 mr-3" />
                  Browse All Safaris
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
