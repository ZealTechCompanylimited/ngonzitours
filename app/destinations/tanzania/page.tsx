import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Users,
  MapPin,
  DollarSign,
  Mountain,
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
  Award,
  TrendingUp,
  TreePine,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Tanzania - Ngonzi Tours",
  description: "Explore the iconic wildlife, majestic mountains, and pristine beaches of Tanzania with Ngonzi Tours.",
}

const tanzaniaTours = [
  {
    slug: "wildlife-safari",
    name: "Classic Wildlife Safari",
    description:
      "Experience the thrill of the African wilderness with our classic wildlife safari. Witness the Great Migration, spot the Big Five, and immerse yourself in the breathtaking landscapes of Serengeti and Ngorongoro.",
    image: "/images/Serengeti.jpg",
    duration: "7 Days / 6 Nights",
    groupSize: "2-6 people",
    price: "From $2,500",
    rating: 4.9,
    reviews: 127,
    category: "Safari",
    highlights: ["Great Migration", "Big Five", "Serengeti", "Ngorongoro Crater"],
  },
  {
    slug: "kilimanjaro-trek-machame-route",
    name: "Kilimanjaro Trek: Machame Route",
    description:
      "Conquer Africa's highest peak, Mount Kilimanjaro, via the scenic Machame Route. A challenging yet rewarding adventure to the Roof of Africa.",
    image: "/images/Kilimanjaro.webp",
    duration: "7 Days / 6 Nights",
    groupSize: "1-10 people",
    price: "From $2,000",
    rating: 4.8,
    reviews: 89,
    category: "Adventure",
    highlights: ["Uhuru Peak", "Machame Route", "Summit Certificate", "Multiple Climates"],
  },
  {
    slug: "zanzibar-beach-escape",
    name: "Zanzibar Beach Escape",
    description:
      "Relax on the pristine white sands of Zanzibar, explore historic Stone Town, and enjoy water activities in the Indian Ocean.",
    image: "/images/mnemba.jpg",
    duration: "5 Days / 4 Nights",
    groupSize: "Any size",
    price: "From $800",
    rating: 4.6,
    reviews: 156,
    category: "Beach",
    highlights: ["Stone Town", "Spice Tours", "Pristine Beaches", "Dhow Cruises"],
  },
]

const whyVisitReasons = [
  {
    icon: MapPin,
    title: "World-Class Safaris",
    description: "Serengeti, Ngorongoro, Tarangire - home to the Big Five and Great Migration.",
    color: "blue",
  },
  {
    icon: Mountain,
    title: "Mount Kilimanjaro",
    description: "Conquer Africa's highest peak and stand on the roof of the continent.",
    color: "emerald",
  },
  {
    icon: Waves,
    title: "Zanzibar Beaches",
    description: "Pristine white sands, turquoise waters, and rich Swahili culture.",
    color: "cyan",
  },
  {
    icon: Globe,
    title: "Rich Culture",
    description: "Experience authentic Maasai traditions and diverse tribal heritage.",
    color: "orange",
  },
]

const stats = [
  { icon: Award, value: "40%", label: "Protected Wildlife Areas", color: "blue" },
  { icon: TrendingUp, value: "1.5M", label: "Annual Visitors", color: "emerald" },
  { icon: TreePine, value: "120+", label: "Ethnic Groups", color: "orange" },
  { icon: Star, value: "4.8", label: "Average Rating", color: "yellow" },
]

export default function TanzaniaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-[url('/images/Serengeti.jpg')] bg-cover bg-center opacity-20" />

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-emerald-400/10 rounded-full blur-2xl animate-pulse delay-1000" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Globe className="h-5 w-5 text-emerald-300" />
              <span className="text-sm font-medium">East Africa's Crown Jewel</span>
              <Sparkles className="h-4 w-4 text-yellow-300" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Discover
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
                Tanzania
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
              Tanzania is the quintessential African safari destination, boasting vast plains teeming with wildlife, the
              majestic Mount Kilimanjaro, and the idyllic spice island of Zanzibar.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Camera className="h-6 w-6 mr-3" />
                Explore Tours
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 bg-transparent px-10 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
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

      {/* Why Visit Tanzania Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-emerald-50/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-emerald-100 text-blue-700 rounded-full px-6 py-3 mb-6 border border-blue-200">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="font-semibold">Why Choose Tanzania</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Visit Tanzania?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover what makes Tanzania one of Africa's most captivating destinations
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
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full px-6 py-3 mb-6 border border-orange-200">
              <Camera className="h-5 w-5" />
              <span className="font-semibold">Featured Tours</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Popular Tanzania Tours</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Carefully crafted experiences that showcase the very best of Tanzania
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {tanzaniaTours.map((tour, index) => (
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
                        tour.category === "Safari"
                          ? "bg-emerald-600"
                          : tour.category === "Adventure"
                            ? "bg-orange-600"
                            : "bg-cyan-600"
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
                      <div className="bg-blue-100 rounded-full p-1.5">
                        <Calendar className="h-4 w-4 text-blue-600" />
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
                      <div className="bg-orange-100 rounded-full p-1.5">
                        <DollarSign className="h-4 w-4 text-orange-600" />
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
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-2.5 font-semibold shadow-md hover:shadow-blue-500/25 transition-all duration-300"
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Iconic Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From the Serengeti plains to Kilimanjaro's summit, discover Tanzania's most spectacular locations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Serengeti National Park",
                image: "/images/Serengeti.jpg",
                description: "Witness the Great Migration and endless wildlife",
                highlights: ["Great Migration", "Big Five", "Endless Plains"],
              },
              {
                name: "Mount Kilimanjaro",
                image: "/images/Kilimanjaro.webp",
                description: "Conquer Africa's highest peak",
                highlights: ["Uhuru Peak", "Multiple Climates", "Adventure"],
              },
              {
                name: "Zanzibar Island",
                image: "/images/mnemba.jpg",
                description: "Pristine beaches and rich cultural heritage",
                highlights: ["Stone Town", "Spice Tours", "Beaches"],
              },
            ].map((destination, index) => (
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
                      Explore Destination
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/Serengeti.jpg')] bg-cover bg-center opacity-10" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Sparkles className="h-5 w-5 text-yellow-300" />
              <span className="font-semibold">Start Your Adventure</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Ready to Explore Tanzania?</h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
              Let our expert team create a personalized Tanzania adventure that matches your dreams and budget. From
              luxury safaris to mountain treks, we'll make it unforgettable.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
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
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent px-10 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
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
