import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getToursByCategory } from "@/lib/data"
import { TourCard } from "@/components/tour-card"
import { MapPin, Star, ArrowRight, TreePine, Eye, Sparkles, Shield, CheckCircle, Camera, TelescopeIcon as Binoculars, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: "Wildlife Safari Tours - Ngonzi Tours | East Africa Safari Adventures",
  description:
    "Experience the ultimate wildlife safari adventures across Tanzania, Kenya, and beyond. Witness the Big Five, Great Migration, and incredible African wildlife with expert guides.",
  openGraph: {
    title: "Wildlife Safari Tours - East Africa Adventures",
    description: "Discover the best wildlife safari experiences with the Big Five and Great Migration.",
  },
}

export default function WildlifeSafariPage() {
  const safariTours = getToursByCategory("Safari")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <Image src="/images/Serengeti.jpg" alt="Wildlife Safari" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl text-white">
              <div className="inline-flex items-center gap-3 mb-8 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <TreePine className="h-5 w-5 text-emerald-400" />
                <span className="font-semibold">Wildlife Safari Adventures</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">
                WILDLIFE
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-orange-400">
                  SAFARI
                </span>
              </h1>

              <p className="text-2xl md:text-3xl mb-12 opacity-90 max-w-4xl leading-relaxed font-light">
                Experience the ultimate wildlife adventures across East Africa. Witness the Big Five, Great Migration,
                and incredible biodiversity with our expert safari guides.
              </p>

              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {[
                  { icon: Eye, value: "Big 5", label: "Wildlife Viewing" },
                  { icon: Camera, value: "15+", label: "Safari Parks" },
                  { icon: Users, value: "Expert", label: "Local Guides" },
                  { icon: Award, value: "25+", label: "Years Experience" },
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
                  className="bg-gradient-to-r from-emerald-500 to-orange-500 hover:from-emerald-600 hover:to-orange-600 text-white px-12 py-4 text-xl font-bold shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Binoculars className="h-6 w-6 mr-3" />
                  Explore Safari Tours
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent px-12 py-4 text-xl font-bold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link href="/contact">
                    <ArrowRight className="h-6 w-6 mr-3" />
                    Plan Custom Safari
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 to-orange-50/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-orange-100 text-emerald-700 rounded-full px-6 py-3 mb-8 border border-emerald-200">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
              <span className="font-bold">Safari Inclusions</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              What's
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-orange-600">
                Included
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our wildlife safari tours include everything you need for an unforgettable African adventure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Users,
                title: "Expert Safari Guides",
                description: "Professional guides with extensive wildlife knowledge and years of experience",
                color: "emerald",
              },
              {
                icon: Camera,
                title: "4WD Safari Vehicles",
                description: "Comfortable vehicles with pop-up roofs for optimal wildlife viewing and photography",
                color: "blue",
              },
              {
                icon: Shield,
                title: "Park Fees & Permits",
                description: "All national park entrance fees and conservation fees included in tour price",
                color: "orange",
              },
              {
                icon: Award,
                title: "Quality Accommodations",
                description: "Carefully selected lodges and camps with excellent service and locations",
                color: "purple",
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

      {/* Safari Tours Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full px-6 py-3 mb-8 border border-orange-200">
              <TreePine className="h-5 w-5 text-orange-600" />
              <span className="font-bold">Available Tours</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Safari
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Adventures
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Choose from our carefully crafted wildlife safari experiences across Tanzania, Kenya, and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {safariTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* What's Not Included Section */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              What's Not
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                Included
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Please note these items are not included in our safari tour packages and should be budgeted separately.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "International flights to/from East Africa",
              "Visa fees and travel insurance",
              "Personal expenses and souvenirs",
              "Alcoholic beverages (unless specified)",
              "Tips for guides and staff",
              "Optional activities (hot air balloon, etc.)",
              "Medical expenses and vaccinations",
              "Laundry services",
              "Phone calls and internet charges",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-white rounded-xl border border-red-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safari Guidelines Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-emerald-100 text-blue-700 rounded-full px-6 py-3 mb-8 border border-blue-200">
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="font-bold">Safari Guidelines</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Important
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                Guidelines
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Follow these essential guidelines to ensure a safe and enjoyable safari experience for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Wildlife Viewing Ethics</h3>
              {[
                "Maintain safe distances from all wildlife",
                "Never feed or attempt to touch wild animals",
                "Keep noise levels low to avoid disturbing animals",
                "Follow your guide's instructions at all times",
                "Stay in designated areas and vehicles",
                "Respect animal behavior and breeding seasons",
              ].map((guideline, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{guideline}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Safety & Preparation</h3>
              {[
                "Bring sun protection and insect repellent",
                "Wear neutral-colored clothing for game drives",
                "Carry sufficient water and snacks",
                "Inform guides of any medical conditions",
                "Keep cameras and valuables secure",
                "Follow camp rules and curfew times",
              ].map((guideline, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{guideline}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 via-orange-600 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Sparkles className="h-5 w-5 text-yellow-300" />
              <span className="font-bold">Ready for Adventure?</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              Ready for Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
                Safari Adventure?
              </span>
            </h2>

            <p className="text-2xl mb-12 opacity-90 leading-relaxed max-w-4xl mx-auto">
              Join us for an unforgettable wildlife safari experience. Our expert guides will help you discover the
              incredible wildlife of East Africa while ensuring your safety and comfort.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/contact">
                  <ArrowRight className="h-6 w-6 mr-3" />
                  Plan Your Safari
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 bg-transparent px-12 py-4 text-xl font-bold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/tours">
                  <Eye className="h-6 w-6 mr-3" />
                  View All Tours
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: MapPin, text: "Tanzania • Kenya • Uganda" },
                { icon: Star, text: "4.9/5 Average Rating" },
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
