import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getToursByCategory } from "@/lib/data"
import { TourCard } from "@/components/tour-card"
import { MapPin, Star, ArrowRight, Waves, Sun, Sparkles, Shield, CheckCircle, Camera, Palmtree, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: "Beach Holiday Tours - Ngonzi Tours | Tropical Paradise Getaways",
  description:
    "Discover pristine beaches and tropical paradise with our beach holiday tours. Relax on white sand beaches, enjoy crystal-clear waters, and experience island culture.",
  openGraph: {
    title: "Beach Holiday Tours - Tropical Paradise Getaways",
    description: "Relax on pristine beaches and enjoy tropical paradise with our beach holiday tours.",
  },
}

export default function BeachHolidaysPage() {
  const beachTours = getToursByCategory("Beach")

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <Image src="/images/mnemba.jpg" alt="Beach Holiday" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl text-white">
              <div className="inline-flex items-center gap-3 mb-8 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <Waves className="h-5 w-5 text-cyan-400" />
                <span className="font-semibold">Tropical Beach Holidays</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">
                BEACH
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  PARADISE
                </span>
              </h1>

              <p className="text-2xl md:text-3xl mb-12 opacity-90 max-w-4xl leading-relaxed font-light">
                Escape to pristine beaches and tropical paradise. Relax on white sand beaches, dive in crystal-clear
                waters, and immerse yourself in island culture.
              </p>

              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {[
                  { icon: Waves, value: "Pristine", label: "White Beaches" },
                  { icon: Sun, value: "Year-Round", label: "Sunshine" },
                  { icon: Users, value: "Expert", label: "Local Guides" },
                  { icon: Award, value: "Luxury", label: "Accommodations" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  >
                    <stat.icon className="h-8 w-8 mx-auto mb-3 text-cyan-400" />
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm opacity-80">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-12 py-4 text-xl font-bold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Palmtree className="h-6 w-6 mr-3" />
                  Explore Beach Tours
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent px-12 py-4 text-xl font-bold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link href="/contact">
                    <ArrowRight className="h-6 w-6 mr-3" />
                    Plan Beach Holiday
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/50 to-blue-50/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full px-6 py-3 mb-8 border border-cyan-200">
              <CheckCircle className="h-5 w-5 text-cyan-600" />
              <span className="font-bold">Beach Holiday Inclusions</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              What's
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                Included
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our beach holiday packages include everything you need for the perfect tropical getaway.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Users,
                title: "Airport Transfers",
                description: "Comfortable transfers from airport to your beach resort and back",
                color: "cyan",
              },
              {
                icon: Camera,
                title: "Beach Activities",
                description: "Snorkeling, kayaking, and various water sports equipment included",
                color: "blue",
              },
              {
                icon: Shield,
                title: "All Meals",
                description: "Delicious breakfast, lunch, and dinner featuring local and international cuisine",
                color: "teal",
              },
              {
                icon: Award,
                title: "Quality Accommodations",
                description: "Beachfront resorts and hotels with excellent service and amenities",
                color: "indigo",
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

      {/* Beach Tours Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full px-6 py-3 mb-8 border border-blue-200">
              <Palmtree className="h-5 w-5 text-blue-600" />
              <span className="font-bold">Available Tours</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Beach
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Holidays
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Choose from our carefully crafted beach holiday experiences in tropical paradise destinations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {beachTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Beach Activities Section */}
      <section className="py-24 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Beach
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                Activities
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Enjoy a wide range of activities and experiences during your beach holiday.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Snorkeling & Diving",
                description: "Explore vibrant coral reefs and marine life in crystal-clear waters",
                icon: "🤿",
              },
              {
                title: "Sunset Dhow Cruises",
                description: "Traditional sailing boat trips with stunning sunset views",
                icon: "⛵",
              },
              {
                title: "Water Sports",
                description: "Kayaking, windsurfing, jet skiing, and parasailing adventures",
                icon: "🏄",
              },
              {
                title: "Cultural Tours",
                description: "Visit local villages and experience authentic island culture",
                icon: "🏛️",
              },
              {
                title: "Spa & Wellness",
                description: "Relaxing spa treatments and wellness activities by the beach",
                icon: "💆",
              },
              {
                title: "Island Hopping",
                description: "Explore multiple islands and discover hidden beaches",
                icon: "🏝️",
              },
            ].map((activity, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white"
              >
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{activity.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{activity.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What to Pack Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700 rounded-full px-6 py-3 mb-8 border border-orange-200">
              <Shield className="h-5 w-5 text-orange-600" />
              <span className="font-bold">Packing Guide</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              What to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">
                Pack
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Essential items to pack for your perfect beach holiday experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Beach Essentials</h3>
              {[
                "Reef-safe sunscreen (SPF 30+)",
                "Swimwear and cover-ups",
                "Wide-brimmed hat and sunglasses",
                "Flip-flops and water shoes",
                "Quick-dry towels",
                "Waterproof phone case",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Items</h3>
              {[
                "Light, breathable clothing",
                "Insect repellent",
                "Personal medications",
                "Underwater camera or GoPro",
                "Snorkeling gear (if preferred)",
                "Light jacket for evening breezes",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Sparkles className="h-5 w-5 text-yellow-300" />
              <span className="font-bold">Ready for Paradise?</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              Ready for Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
                Beach Paradise?
              </span>
            </h2>

            <p className="text-2xl mb-12 opacity-90 leading-relaxed max-w-4xl mx-auto">
              Escape to pristine beaches and tropical paradise. Let us create the perfect beach holiday experience
              tailored to your dreams of sun, sand, and crystal-clear waters.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/contact">
                  <ArrowRight className="h-6 w-6 mr-3" />
                  Plan Your Holiday
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent px-12 py-4 text-xl font-bold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/tours">
                  <Waves className="h-6 w-6 mr-3" />
                  View All Tours
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: MapPin, text: "Zanzibar • Pemba • Mafia" },
                { icon: Star, text: "4.8/5 Average Rating" },
                { icon: Users, text: "Expert Local Guides" },
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
