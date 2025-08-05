import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getToursByCategory } from "@/lib/data"
import { TourCard } from "@/components/tour-card"
import { MapPin, Star, ArrowRight, Crown, Sparkles, Shield, CheckCircle, Camera, Gem, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: "Luxury Safari Tours - Ngonzi Tours | Premium African Safari Experiences",
  description:
    "Experience the ultimate luxury safari adventures with premium accommodations, private guides, and exclusive experiences across East Africa's finest destinations.",
  openGraph: {
    title: "Luxury Safari Tours - Premium African Safari Experiences",
    description: "Indulge in luxury safari experiences with premium accommodations and exclusive services.",
  },
}

export default function LuxurySafariPage() {
  const luxuryTours = getToursByCategory("Luxury")

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <Image src="/images/gt1.jpg" alt="Luxury Safari" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl text-white">
              <div className="inline-flex items-center gap-3 mb-8 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <Crown className="h-5 w-5 text-amber-400" />
                <span className="font-semibold">Luxury Safari Experiences</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">
                LUXURY
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                  SAFARI
                </span>
              </h1>

              <p className="text-2xl md:text-3xl mb-12 opacity-90 max-w-4xl leading-relaxed font-light">
                Indulge in the ultimate luxury safari experience with premium accommodations, private guides, and
                exclusive access to East Africa's most spectacular wildlife destinations.
              </p>

              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {[
                  { icon: Crown, value: "5-Star", label: "Luxury Lodges" },
                  { icon: Users, value: "Private", label: "Expert Guides" },
                  { icon: Gem, value: "Exclusive", label: "Experiences" },
                  { icon: Award, value: "Premium", label: "Service" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  >
                    <stat.icon className="h-8 w-8 mx-auto mb-3 text-amber-400" />
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm opacity-80">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-12 py-4 text-xl font-bold shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Crown className="h-6 w-6 mr-3" />
                  Explore Luxury Tours
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent px-12 py-4 text-xl font-bold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link href="/contact">
                    <ArrowRight className="h-6 w-6 mr-3" />
                    Plan Luxury Safari
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 to-yellow-50/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700 rounded-full px-6 py-3 mb-8 border border-amber-200">
              <CheckCircle className="h-5 w-5 text-amber-600" />
              <span className="font-bold">Luxury Inclusions</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              What's
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">
                Included
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our luxury safari packages include the finest accommodations, services, and experiences for the ultimate
              African adventure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Crown,
                title: "5-Star Accommodations",
                description: "Luxury lodges and tented camps with world-class amenities and service",
                color: "amber",
              },
              {
                icon: Users,
                title: "Private Safari Guides",
                description: "Dedicated expert guides with extensive wildlife knowledge and experience",
                color: "yellow",
              },
              {
                icon: Camera,
                title: "Private Vehicles",
                description: "Exclusive use of premium 4WD vehicles with professional drivers",
                color: "orange",
              },
              {
                icon: Gem,
                title: "Exclusive Experiences",
                description: "Hot air balloon safaris, private dining, and unique cultural encounters",
                color: "gold",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white"
              >
                <CardContent className="p-8">
                  <div
                    className={`bg-${feature.color}-100 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <feature.icon className={`h-10 w-10 text-${feature.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Tours Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-700 rounded-full px-6 py-3 mb-8 border border-yellow-200">
              <Gem className="h-5 w-5 text-yellow-600" />
              <span className="font-bold">Available Tours</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Luxury
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-600">
                Experiences
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Choose from our exclusive luxury safari experiences designed for the most discerning travelers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {luxuryTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Features Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Luxury
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">
                Features
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the finest luxury amenities and services during your safari adventure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Butler Service",
                description: "Personal butler service to attend to your every need throughout your stay",
                icon: "🤵",
              },
              {
                title: "Gourmet Dining",
                description: "World-class cuisine prepared by expert chefs using finest ingredients",
                icon: "🍽️",
              },
              {
                title: "Spa Treatments",
                description: "Relaxing spa services and wellness treatments in stunning natural settings",
                icon: "💆",
              },
              {
                title: "Private Airstrips",
                description: "Exclusive access via private flights to remote luxury camps and lodges",
                icon: "✈️",
              },
              {
                title: "Wine Cellar",
                description: "Extensive wine collections and premium beverages from around the world",
                icon: "🍷",
              },
              {
                title: "Concierge Service",
                description: "24/7 concierge service to arrange any special requests or experiences",
                icon: "🎩",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white"
              >
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Experiences Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full px-6 py-3 mb-8 border border-purple-200">
              <Sparkles className="h-5 w-5 text-purple-600" />
              <span className="font-bold">Exclusive Experiences</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Exclusive
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Experiences
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Enjoy once-in-a-lifetime experiences available only to our luxury safari guests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Unique Adventures</h3>
              {[
                "Hot air balloon safaris with champagne breakfast",
                "Private helicopter transfers and scenic flights",
                "Exclusive access to private conservancies",
                "Night game drives with thermal imaging",
                "Walking safaris with armed rangers",
                "Photography workshops with professional guides",
              ].map((experience, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{experience}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Cultural Immersion</h3>
              {[
                "Private meetings with Maasai elders and chiefs",
                "Exclusive cultural ceremonies and performances",
                "Traditional craft workshops with master artisans",
                "Private village visits with cultural guides",
                "Authentic cooking classes with local chefs",
                "Historical site tours with expert historians",
              ].map((experience, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{experience}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Crown className="h-5 w-5 text-yellow-300" />
              <span className="font-bold">Ready for Luxury?</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              Ready for Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
                Luxury Safari?
              </span>
            </h2>

            <p className="text-2xl mb-12 opacity-90 leading-relaxed max-w-4xl mx-auto">
              Indulge in the ultimate luxury safari experience with world-class accommodations, exclusive experiences,
              and personalized service that exceeds every expectation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                size="lg"
                className="bg-white text-amber-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/contact">
                  <ArrowRight className="h-6 w-6 mr-3" />
                  Plan Luxury Safari
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-amber-600 bg-transparent px-12 py-4 text-xl font-bold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/tours">
                  <Gem className="h-6 w-6 mr-3" />
                  View All Tours
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: MapPin, text: "Premium Destinations" },
                { icon: Star, text: "5-Star Service" },
                { icon: Users, text: "Private Experiences" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center gap-3 text-lg">
                  <item.icon className="h-6 w-6 text-yellow-300" />
                  <span className="font-semibold">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
