import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getToursByCategory } from "@/lib/data"
import { TourCard } from "@/components/tour-card"
import { MapPin, Star, ArrowRight, Users, Sparkles, Shield, CheckCircle, Camera, Heart, Globe, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: "Cultural Tours - Ngonzi Tours | Authentic East African Cultural Experiences",
  description:
    "Immerse yourself in authentic East African cultures with our cultural tours. Meet local tribes, learn traditions, and experience the rich heritage of Tanzania, Kenya, and beyond.",
  openGraph: {
    title: "Cultural Tours - Authentic East African Cultural Experiences",
    description: "Discover authentic cultures and traditions with our immersive cultural tours.",
  },
}

export default function CulturalToursPage() {
  const culturalTours = getToursByCategory("Cultural")

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <Image src="/images/picha-man.jpg" alt="Cultural Tours" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl text-white">
              <div className="inline-flex items-center gap-3 mb-8 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <Heart className="h-5 w-5 text-orange-400" />
                <span className="font-semibold">Cultural Immersion Tours</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">
                CULTURAL
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  HERITAGE
                </span>
              </h1>

              <p className="text-2xl md:text-3xl mb-12 opacity-90 max-w-4xl leading-relaxed font-light">
                Immerse yourself in authentic East African cultures. Meet local tribes, learn ancient traditions, and
                experience the rich heritage that defines this remarkable region.
              </p>

              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {[
                  { icon: Users, value: "40+", label: "Ethnic Groups" },
                  { icon: Globe, value: "Ancient", label: "Traditions" },
                  { icon: Heart, value: "Authentic", label: "Experiences" },
                  { icon: Award, value: "Local", label: "Community Guides" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  >
                    <stat.icon className="h-8 w-8 mx-auto mb-3 text-orange-400" />
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm opacity-80">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-4 text-xl font-bold shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Heart className="h-6 w-6 mr-3" />
                  Explore Cultural Tours
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent px-12 py-4 text-xl font-bold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link href="/contact">
                    <ArrowRight className="h-6 w-6 mr-3" />
                    Plan Cultural Journey
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50/50 to-red-50/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full px-6 py-3 mb-8 border border-orange-200">
              <CheckCircle className="h-5 w-5 text-orange-600" />
              <span className="font-bold">Cultural Tour Inclusions</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              What's
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Included
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our cultural tours include authentic experiences and meaningful interactions with local communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Users,
                title: "Local Community Guides",
                description: "Authentic guides from local communities who share their culture firsthand",
                color: "orange",
              },
              {
                icon: Heart,
                title: "Cultural Activities",
                description: "Participate in traditional ceremonies, dances, and cultural practices",
                color: "red",
              },
              {
                icon: Camera,
                title: "Village Visits",
                description: "Visit authentic villages and meet local families in their homes",
                color: "amber",
              },
              {
                icon: Award,
                title: "Community Support",
                description: "Your visit directly supports local communities and cultural preservation",
                color: "rose",
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

      {/* Cultural Tours Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-100 to-pink-100 text-red-700 rounded-full px-6 py-3 mb-8 border border-red-200">
              <Globe className="h-5 w-5 text-red-600" />
              <span className="font-bold">Available Tours</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Cultural
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
                Experiences
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Choose from our authentic cultural tours designed to provide meaningful connections with local communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {culturalTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Groups Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Cultural
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                Communities
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet and learn from the diverse ethnic groups that call East Africa home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Maasai People",
                description: "Semi-nomadic pastoralists known for their distinctive culture and warrior traditions",
                traditions: ["Cattle herding", "Traditional dances", "Beadwork", "Warrior ceremonies"],
                region: "Kenya & Tanzania",
              },
              {
                title: "Hadzabe Tribe",
                description: "One of the last hunter-gatherer tribes in Africa with ancient traditions",
                traditions: ["Hunting with bows", "Fire making", "Traditional medicine", "Click language"],
                region: "Northern Tanzania",
              },
              {
                title: "Datoga People",
                description: "Skilled metalworkers and pastoralists with unique cultural practices",
                traditions: ["Blacksmithing", "Jewelry making", "Cattle culture", "Traditional clothing"],
                region: "Northern Tanzania",
              },
              {
                title: "Kikuyu People",
                description: "Kenya's largest ethnic group with rich agricultural traditions",
                traditions: ["Farming practices", "Traditional music", "Storytelling", "Craft making"],
                region: "Central Kenya",
              },
              {
                title: "Samburu People",
                description: "Closely related to Maasai with distinct cultural practices",
                traditions: ["Pastoralism", "Traditional dances", "Colorful attire", "Age-set system"],
                region: "Northern Kenya",
              },
              {
                title: "Chagga People",
                description: "Mountain people known for their agricultural skills and coffee cultivation",
                traditions: ["Coffee farming", "Irrigation systems", "Traditional brewing", "Mountain culture"],
                region: "Mount Kilimanjaro",
              },
            ].map((group, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white"
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{group.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{group.description}</p>
                  <div className="mb-4">
                    <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 mb-2">
                      {group.region}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 text-sm">Traditional Practices:</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.traditions.map((tradition, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="bg-orange-50 text-orange-700 border-orange-200 text-xs"
                        >
                          {tradition}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Etiquette Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full px-6 py-3 mb-8 border border-green-200">
              <Shield className="h-5 w-5 text-green-600" />
              <span className="font-bold">Cultural Etiquette</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Respectful
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Interaction
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Guidelines for respectful and meaningful cultural interactions during your tours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Do's</h3>
              {[
                "Ask permission before taking photographs",
                "Dress modestly and respectfully",
                "Show genuine interest in local customs",
                "Participate respectfully in offered activities",
                "Support local communities through purchases",
                "Learn basic greetings in local languages",
              ].map((guideline, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{guideline}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Don'ts</h3>
              {[
                "Don't photograph people without permission",
                "Avoid making cultural comparisons or judgments",
                "Don't touch sacred objects or enter restricted areas",
                "Avoid giving money directly to children",
                "Don't interrupt religious or cultural ceremonies",
                "Avoid wearing revealing or inappropriate clothing",
              ].map((guideline, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <div className="w-3 h-3 bg-red-600 rounded-full" />
                  </div>
                  <span className="text-gray-700 leading-relaxed">{guideline}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Sparkles className="h-5 w-5 text-yellow-300" />
              <span className="font-bold">Ready for Cultural Discovery?</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              Ready to Discover
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
                Rich Cultures?
              </span>
            </h2>

            <p className="text-2xl mb-12 opacity-90 leading-relaxed max-w-4xl mx-auto">
              Embark on a meaningful cultural journey that will broaden your perspective and create lasting connections
              with the diverse communities of East Africa.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/contact">
                  <ArrowRight className="h-6 w-6 mr-3" />
                  Plan Cultural Tour
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 bg-transparent px-12 py-4 text-xl font-bold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/tours">
                  <Heart className="h-6 w-6 mr-3" />
                  View All Tours
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: MapPin, text: "Tanzania • Kenya • Uganda" },
                { icon: Star, text: "Authentic Experiences" },
                { icon: Users, text: "Local Community Guides" },
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
