import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getToursByCategory, tours } from "@/lib/data"
import { DollarSign, Users } from "lucide-react"
import {
  MapPin,
  Star,
  ArrowRight,
  Compass,
  Mountain,
  Waves,
  TreePine,
  Crown,
  Eye,
  Sparkles,
  Shield,
  CheckCircle,
} from "lucide-react"
import { TourCard } from "@/components/tour-card"

export const metadata: Metadata = {
  title: "Tours - Ngonzi Tours | East Africa Safari & Adventure Tours",
  description:
    "Discover our complete collection of East Africa tours including wildlife safaris, mountain climbing, beach holidays, cultural tours, and luxury experiences.",
  openGraph: {
    title: "East Africa Tours - Ngonzi Tours",
    description: "Explore our premium safari tours, mountain adventures, and cultural experiences across East Africa.",
  },
}

export default function ToursPage() {
  const featuredTours = tours.slice(0, 3)
  const safariTours = getToursByCategory("Safari")
  const adventureTours = getToursByCategory("Adventure")
  const beachTours = getToursByCategory("Beach")
  const culturalTours = getToursByCategory("Cultural")
  const luxuryTours = getToursByCategory("Luxury")

  const tourCategories = [
    {
      slug: "wildlife-safari",
      name: "Wildlife Safari",
      description: "Experience the Big Five and Great Migration",
      icon: TreePine,
      color: "emerald",
      gradient: "from-emerald-600 to-green-700",
      tours: safariTours.length,
      image: "/images/Serengeti.jpg",
    },
    {
      slug: "mountain-climbing",
      name: "Mountain Climbing",
      description: "Conquer Africa's highest peaks",
      icon: Mountain,
      color: "orange",
      gradient: "from-orange-600 to-red-700",
      tours: adventureTours.length,
      image: "/images/Kilimanjaro.webp",
    },
    {
      slug: "beach-holidays",
      name: "Beach Holidays",
      description: "Relax on pristine tropical beaches",
      icon: Waves,
      color: "cyan",
      gradient: "from-cyan-600 to-blue-700",
      tours: beachTours.length,
      image: "/images/mnemba.jpg",
    },
    {
      slug: "cultural-tours",
      name: "Cultural Tours",
      description: "Immerse in local traditions and heritage",
      icon: Star,
      color: "purple",
      gradient: "from-purple-600 to-indigo-700",
      tours: culturalTours.length,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      slug: "luxury-safari",
      name: "Luxury Safari",
      description: "Premium safari experiences with luxury accommodations",
      icon: Crown,
      color: "amber",
      gradient: "from-amber-600 to-yellow-700",
      tours: luxuryTours.length,
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Ultra-Premium Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/kenya G.webp" alt="East Africa Tours" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40" />
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute top-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 left-10 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-orange-400/20 rounded-full blur-xl animate-pulse delay-500" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="max-w-6xl mx-auto">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
                <Compass className="h-5 w-5 text-emerald-400" />
                <span className="text-sm font-semibold">Premium East Africa Tours</span>
              </div>

              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none">
                Discover
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400">
                  East Africa
                </span>
              </h1>

              <p className="text-xl md:text-3xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed font-light">
                Embark on extraordinary adventures through Tanzania, Kenya, and Zanzibar with our premium guided tours.
                From wildlife safaris to mountain expeditions, create memories that last a lifetime.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-12 py-4 text-lg font-semibold shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link href="#featured-tours">
                    <Eye className="h-6 w-6 mr-3" />
                    Explore Tours
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent px-12 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link href="/contact">
                    <ArrowRight className="h-6 w-6 mr-3" />
                    Plan Custom Tour
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {[
                  { icon: Star, value: "25+", label: "Years Experience" },
                  { icon: Users, value: "5000+", label: "Happy Travelers" },
                  { icon: MapPin, value: "15+", label: "Destinations" },
                  { icon: DollarSign, value: "4.9", label: "Average Rating" },
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/20">
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-white/80 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Categories Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/50 to-emerald-50/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-700 rounded-full px-6 py-3 mb-8 border border-emerald-200">
              <Sparkles className="h-5 w-5 text-emerald-600" />
              <span className="font-semibold">Tour Categories</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
              Choose Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                Adventure
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From thrilling wildlife encounters to serene beach escapes, discover the perfect tour category for your
              dream East African adventure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {tourCategories.map((category, index) => (
              <Card
                key={category.slug}
                className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 bg-white transform hover:-translate-y-3"
              >
                <div className="relative h-64">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-80`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <Badge className={`bg-white/20 backdrop-blur-sm text-white border-white/30 font-semibold`}>
                      {category.tours} Tours Available
                    </Badge>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:bg-white/20 rounded-full p-2 backdrop-blur-sm border border-white/20"
                    >
                      <category.icon className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/30">
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-white/90 text-sm font-medium ml-2">4.9</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">{category.description}</p>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-sm text-gray-600">
                      <span className="font-semibold text-gray-900">{category.tours}</span> tours available
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span>Expert Guides</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      className={`flex-1 bg-gradient-to-r ${category.gradient} hover:opacity-90 text-white font-semibold shadow-lg transition-all duration-300`}
                      asChild
                    >
                      <Link href={`/tours/${category.slug}`}>
                        <Eye className="h-4 w-4 mr-2" />
                        View Tours
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="px-4 hover:bg-gray-50 transition-all duration-300 bg-transparent"
                      asChild
                    >
                      <Link href={`/tours/${category.slug}`}>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section id="featured-tours" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Safari Tours</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover the best safari experiences across East Africa. From the Great Migration to the Big Five, our
              expertly guided tours offer unforgettable wildlife encounters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl animate-pulse delay-1000" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Shield className="h-5 w-5 text-emerald-400" />
              <span className="font-semibold">Why Choose Ngonzi Tours</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              Premium
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                Experience
              </span>
            </h2>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              We deliver exceptional safari and adventure experiences with unmatched expertise and personalized service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Safety First",
                description:
                  "Certified guides and comprehensive safety protocols ensure your peace of mind throughout your journey.",
              },
              {
                icon: Star,
                title: "Expert Guides",
                description:
                  "Local experts with deep knowledge of wildlife, culture, and landscapes provide authentic experiences.",
              },
              {
                icon: Eye,
                title: "Personalized Service",
                description:
                  "Tailored itineraries and dedicated support create unforgettable, personalized adventures.",
              },
              {
                icon: CheckCircle,
                title: "Guaranteed Quality",
                description:
                  "Premium accommodations, reliable transport, and exceptional service standards guaranteed.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className="bg-white/20 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-white/80 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Sparkles className="h-5 w-5 text-yellow-300" />
              <span className="font-semibold">Start Your Adventure</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Ready for Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Dream Tour?
              </span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed max-w-4xl mx-auto">
              Let our expert team create a personalized East African adventure that exceeds your expectations. From
              luxury safaris to cultural immersions, your perfect journey awaits.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-4 text-lg font-semibold shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/contact">
                  <ArrowRight className="h-6 w-6 mr-3" />
                  Plan Custom Tour
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent px-12 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/destinations">
                  <Users className="h-6 w-6 mr-3" />
                  Explore Destinations
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-white/80">Customer Support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-white/80">Satisfaction Guarantee</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-white/80">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
