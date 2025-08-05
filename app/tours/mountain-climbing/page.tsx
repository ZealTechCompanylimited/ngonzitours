import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getToursByCategory } from "@/lib/data"
import { TourCard } from "@/components/tour-card"
import { MapPin, Star, ArrowRight, Mountain, Sparkles, Shield, CheckCircle, Camera, Compass, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: "Mountain Climbing Tours - Ngonzi Tours | Kilimanjaro & East Africa Peaks",
  description:
    "Conquer Africa's highest peaks with our expert mountain climbing tours. Scale Mount Kilimanjaro, Mount Meru, and other spectacular mountains in East Africa.",
  openGraph: {
    title: "Mountain Climbing Tours - Kilimanjaro & East Africa Peaks",
    description: "Challenge yourself with mountain climbing adventures on Africa's highest peaks.",
  },
}

export default function MountainClimbingPage() {
  const climbingTours = getToursByCategory("Adventure")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <Image src="/images/ndege.jpeg" alt="Mountain Climbing" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl text-white">
              <div className="inline-flex items-center gap-3 mb-8 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <Mountain className="h-5 w-5 text-blue-400" />
                <span className="font-semibold">Mountain Climbing Adventures</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">
                MOUNTAIN
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  CLIMBING
                </span>
              </h1>

              <p className="text-2xl md:text-3xl mb-12 opacity-90 max-w-4xl leading-relaxed font-light">
                Conquer Africa's highest peaks and challenge yourself with our expert mountain climbing adventures.
                Scale Mount Kilimanjaro, Mount Meru, and other spectacular mountains.
              </p>

              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {[
                  { icon: Mountain, value: "5,895m", label: "Kilimanjaro Peak" },
                  { icon: Compass, value: "Expert", label: "Mountain Guides" },
                  { icon: Users, value: "Small", label: "Group Sizes" },
                  { icon: Award, value: "High", label: "Success Rate" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  >
                    <stat.icon className="h-8 w-8 mx-auto mb-3 text-blue-400" />
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm opacity-80">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-12 py-4 text-xl font-bold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Mountain className="h-6 w-6 mr-3" />
                  Explore Climbing Tours
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent px-12 py-4 text-xl font-bold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link href="/contact">
                    <ArrowRight className="h-6 w-6 mr-3" />
                    Plan Your Climb
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full px-6 py-3 mb-8 border border-blue-200">
              <CheckCircle className="h-5 w-5 text-blue-600" />
              <span className="font-bold">Climbing Inclusions</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              What's
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Included
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our mountain climbing packages include everything you need for a safe and successful summit attempt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Users,
                title: "Professional Guides",
                description: "Certified mountain guides with extensive experience and safety training",
                color: "blue",
              },
              {
                icon: Shield,
                title: "Safety Equipment",
                description: "All necessary safety gear including first aid kits and emergency equipment",
                color: "purple",
              },
              {
                icon: Camera,
                title: "Camping Equipment",
                description: "High-quality tents, sleeping bags, and camping gear for mountain conditions",
                color: "indigo",
              },
              {
                icon: Award,
                title: "Porters & Cooks",
                description: "Experienced porters and cooks to support your climbing expedition",
                color: "violet",
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

      {/* Climbing Tours Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 rounded-full px-6 py-3 mb-8 border border-purple-200">
              <Compass className="h-5 w-5 text-purple-600" />
              <span className="font-bold">Available Climbs</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Climbing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                Adventures
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Choose from our expertly guided mountain climbing expeditions to Africa's most spectacular peaks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {climbingTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Climbing Routes Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Popular
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Routes
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the different routes available for your mountain climbing adventure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Machame Route",
                description: "The most scenic route to Kilimanjaro's summit, known as the 'Whiskey Route'",
                duration: "6-7 days",
                difficulty: "Moderate-Challenging",
                success: "85-90%",
              },
              {
                title: "Lemosho Route",
                description: "Less crowded route with excellent acclimatization and stunning views",
                duration: "7-8 days",
                difficulty: "Moderate",
                success: "90-95%",
              },
              {
                title: "Rongai Route",
                description: "The only route approaching from the north, good during rainy season",
                duration: "6-7 days",
                difficulty: "Moderate",
                success: "80-85%",
              },
              {
                title: "Marangu Route",
                description: "The 'Coca-Cola Route' with hut accommodation instead of camping",
                duration: "5-6 days",
                difficulty: "Moderate",
                success: "65-70%",
              },
              {
                title: "Mount Meru",
                description: "Tanzania's second highest peak, excellent Kilimanjaro preparation",
                duration: "3-4 days",
                difficulty: "Moderate",
                success: "85-90%",
              },
              {
                title: "Mount Kenya",
                description: "Technical climbing on Africa's second highest mountain",
                duration: "4-6 days",
                difficulty: "Challenging",
                success: "70-80%",
              },
            ].map((route, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white"
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{route.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{route.description}</p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-700">Duration:</span>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        {route.duration}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-700">Difficulty:</span>
                      <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                        {route.difficulty}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-700">Success Rate:</span>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {route.success}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation Tips Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full px-6 py-3 mb-8 border border-green-200">
              <Shield className="h-5 w-5 text-green-600" />
              <span className="font-bold">Preparation Guide</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Preparation
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Tips
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Essential preparation tips to ensure your mountain climbing adventure is safe and successful.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Physical Preparation</h3>
              {[
                "Start training 3-4 months before your climb",
                "Focus on cardiovascular fitness and endurance",
                "Include hiking with weighted backpack",
                "Build leg strength with squats and lunges",
                "Practice walking on uneven terrain",
                "Gradually increase training intensity",
              ].map((tip, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{tip}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Gear & Equipment</h3>
              {[
                "Invest in quality, broken-in hiking boots",
                "Layer system for varying temperatures",
                "Waterproof and windproof outer shell",
                "Warm sleeping bag rated for low temperatures",
                "Trekking poles for stability and support",
                "Headlamp with extra batteries",
              ].map((tip, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Sparkles className="h-5 w-5 text-yellow-300" />
              <span className="font-bold">Ready to Climb?</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              Ready to Conquer
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
                Africa's Peaks?
              </span>
            </h2>

            <p className="text-2xl mb-12 opacity-90 leading-relaxed max-w-4xl mx-auto">
              Challenge yourself with the ultimate mountain climbing adventure. Our expert guides will help you safely
              reach the summit while creating memories that will last a lifetime.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/contact">
                  <ArrowRight className="h-6 w-6 mr-3" />
                  Plan Your Climb
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent px-12 py-4 text-xl font-bold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/tours">
                  <Mountain className="h-6 w-6 mr-3" />
                  View All Tours
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: MapPin, text: "Kilimanjaro • Meru • Kenya" },
                { icon: Star, text: "Expert Mountain Guides" },
                { icon: Users, text: "Small Group Sizes" },
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
