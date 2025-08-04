import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Star,
  Thermometer,
  Calendar,
  Users,
  Camera,
  Plane,
  Globe,
  Award,
  TrendingUp,
  Heart,
  Compass,
  CheckCircle,
  Sparkles,
  Eye,
  Phone,
} from "lucide-react"
import { destinations } from "@/lib/data"

export const metadata: Metadata = {
  title: "Destinations - Ngonzi Tours | East Africa Safari Destinations",
  description:
    "Explore our carefully selected destinations across East Africa, from Tanzania's Serengeti to Kenya's Maasai Mara and Zanzibar's pristine beaches. Complete destination guides with travel tips.",
  openGraph: {
    title: "East Africa Destinations - Ngonzi Tours",
    description: "Discover the best safari destinations, cultural sites, and natural wonders in East Africa.",
  },
}

export default function DestinationsPage() {
  const featuredDestinations = destinations.slice(0, 2)
  const regularDestinations = destinations.slice(2)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Ultra-Premium Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <Image src="/images/Serengeti.jpg" alt="East Africa Destinations" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

        {/* Floating Animation Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-emerald-400/20 rounded-full blur-lg animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-blue-400/20 rounded-full blur-md animate-pulse delay-500" />

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl text-white">
              <div className="inline-flex items-center gap-3 mb-8 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <Globe className="h-5 w-5 text-emerald-400" />
                <span className="font-semibold">Explore East Africa's Wonders</span>
              </div>

              <h1 className="text-6xl md:text-9xl font-black mb-8 leading-none">
                DISCOVER
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400">
                  PARADISE
                </span>
              </h1>

              <p className="text-2xl md:text-3xl mb-12 opacity-90 max-w-4xl leading-relaxed font-light">
                From the endless plains of the Serengeti to the spice islands of Zanzibar, explore East Africa's most
                spectacular destinations with expert local guides.
              </p>

              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {[
                  { icon: MapPin, value: "15+", label: "Destinations" },
                  { icon: Users, value: "5000+", label: "Happy Travelers" },
                  { icon: Award, value: "25+", label: "Years Experience" },
                  { icon: TrendingUp, value: "98%", label: "Satisfaction Rate" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  >
                    <stat.icon className="h-8 w-8 mx-auto mb-3 text-emerald-400" />
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm opacity-80">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-12 py-4 text-xl font-bold shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Camera className="h-6 w-6 mr-3" />
                  Explore All Destinations
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent px-12 py-4 text-xl font-bold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link href="/contact">
                    <Plane className="h-6 w-6 mr-3" />
                    Plan Your Journey
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 to-blue-50/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: MapPin, value: "15+", label: "Destinations", color: "blue" },
              { icon: Users, value: "5000+", label: "Happy Travelers", color: "emerald" },
              { icon: Award, value: "25+", label: "Years Experience", color: "orange" },
              { icon: TrendingUp, value: "98%", label: "Satisfaction Rate", color: "purple" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`bg-${stat.color}-100 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <stat.icon className={`h-10 w-10 text-${stat.color}-600`} />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-3">{stat.value}</div>
                <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-700 rounded-full px-6 py-3 mb-8 border border-emerald-200">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="font-bold">Most Popular</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
              Featured
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                Destinations
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our most sought-after destinations offering unforgettable experiences and breathtaking adventures with
              complete travel information and expert local insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto mb-20">
            {featuredDestinations.map((destination, index) => (
              <Card
                key={destination.slug}
                className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 shadow-xl transform hover:-translate-y-3 bg-white"
              >
                <div className="relative h-96">
                  <Image
                    src={destination.images[0] || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-6 left-6 flex gap-3">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-4 py-2">
                      Featured
                    </Badge>
                    <Badge className="bg-white/90 text-gray-900 font-bold px-4 py-2">{destination.country}</Badge>
                  </div>

                  <div className="absolute top-6 right-6">
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/20 rounded-full p-3">
                      <Heart className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-bold text-white mb-3">{destination.name}</h3>
                    <p className="text-white/90 text-lg line-clamp-2 mb-4">{destination.description}</p>
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-white font-medium ml-2">4.9 (324 reviews)</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="bg-orange-50 rounded-xl p-4 text-center">
                      <Thermometer className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                      <div className="font-bold text-gray-900">{destination.climate}</div>
                      <div className="text-sm text-gray-600">Climate</div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4 text-center">
                      <Calendar className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                      <div className="font-bold text-gray-900">{destination.bestTimeToVisit}</div>
                      <div className="text-sm text-gray-600">Best Time</div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-bold text-xl mb-4 text-gray-900">Top Highlights:</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {destination.highlights.slice(0, 4).map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{highlight}</span>
                        </div>
                      ))}
                      {destination.highlights.length > 4 && (
                        <div className="text-emerald-600 font-medium">
                          +{destination.highlights.length - 4} more highlights
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-bold text-xl mb-4 text-gray-900">Available Activities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.activities.map((activity, idx) => (
                        <Badge key={idx} variant="outline" className="text-sm font-medium px-3 py-1">
                          {activity}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      className="flex-1 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-bold py-3 shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                      asChild
                    >
                      <Link href={`/destinations/${destination.slug}`}>
                        <Eye className="h-5 w-5 mr-2" />
                        View Details
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-2 py-3 font-bold hover:bg-gray-50 transition-all duration-300 bg-transparent"
                      asChild
                    >
                      <Link href="/tours">
                        <Camera className="h-5 w-5 mr-2" />
                        View Tours
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Destinations */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full px-6 py-3 mb-8 border border-blue-200">
              <Compass className="h-5 w-5 text-purple-500" />
              <span className="font-bold">Complete Collection</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
              All
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Destinations
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore our complete collection of carefully selected destinations across East Africa, each offering
              unique experiences and unforgettable memories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {regularDestinations.map((destination) => (
              <Card
                key={destination.slug}
                className="overflow-hidden group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 shadow-lg"
              >
                <div className="relative h-64">
                  <Image
                    src={destination.images[0] || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-900 font-bold px-3 py-1">{destination.country}</Badge>
                  </div>

                  <div className="absolute top-4 right-4">
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/20 rounded-full p-2">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">{destination.name}</h3>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="ml-2 text-sm text-white/90 font-medium">4.8 (156 reviews)</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2 leading-relaxed">{destination.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-orange-50 rounded-lg p-3 text-center">
                      <Thermometer className="h-4 w-4 text-orange-500 mx-auto mb-1" />
                      <div className="text-xs font-medium text-gray-900">{destination.climate}</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 text-center">
                      <Calendar className="h-4 w-4 text-blue-500 mx-auto mb-1" />
                      <div className="text-xs font-medium text-gray-900">{destination.bestTimeToVisit}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold mb-3 text-gray-900">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {destination.highlights.slice(0, 3).map((highlight, index) => (
                        <Badge key={index} variant="outline" className="text-xs px-2 py-1">
                          {highlight}
                        </Badge>
                      ))}
                      {destination.highlights.length > 3 && (
                        <Badge variant="outline" className="text-xs px-2 py-1">
                          +{destination.highlights.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2.5 shadow-md hover:shadow-blue-500/25 transition-all duration-300"
                    asChild
                  >
                    <Link href={`/destinations/${destination.slug}`}>
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

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 bg-white/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-40 left-10 w-24 h-24 bg-yellow-400/30 rounded-full blur-lg animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Sparkles className="h-5 w-5 text-yellow-300" />
              <span className="font-bold">Ready for Adventure?</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Ready for Your East African
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
                Adventure?
              </span>
            </h2>

            <p className="text-2xl mb-12 opacity-90 leading-relaxed max-w-4xl mx-auto">
              Let our expert team create a personalized itinerary that matches your dreams and budget. From luxury
              safaris to cultural immersions, we'll make it unforgettable.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/contact">
                  <Phone className="h-6 w-6 mr-3" />
                  Start Planning
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent px-12 py-4 text-xl font-bold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/tours">
                  <Camera className="h-6 w-6 mr-3" />
                  Browse Tours
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-white/80">Customer Support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-white/80">Satisfaction Guarantee</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-white/80">Years of Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-white/80">Amazing Destinations</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
