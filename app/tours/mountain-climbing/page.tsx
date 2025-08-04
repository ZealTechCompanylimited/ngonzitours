import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getToursByCategory } from "@/lib/data"
import {
  Mountain,
  Clock,
  Users,
  Star,
  Sparkles,
  Heart,
  ArrowRight,
  Eye,
  MapPin,
  Award,
  Shield,
  Compass,
  CheckCircle,
  XCircle,
  DollarSign,
  Car,
  Utensils,
  Bed,
  Activity,
  AlertTriangle,
  Phone,
  Mail,
  Info,
  Thermometer,
  Wind,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Mountain Climbing Tours - Ngonzi Tours",
  description:
    "Conquer Africa's highest peaks including Mount Kilimanjaro and Mount Kenya with expert guides and premium support.",
}

export default function MountainClimbingPage() {
  const mountainTours = getToursByCategory("Mountain")

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Ultra-Premium Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-orange-900 via-red-800 to-amber-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-30" />

        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-orange-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-red-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl animate-pulse delay-500" />

        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 mb-10 border border-white/20">
              <Mountain className="h-6 w-6 text-orange-300" />
              <span className="text-lg font-semibold">Mountain Adventures</span>
              <Sparkles className="h-5 w-5 text-yellow-300" />
            </div>

            <h1 className="text-6xl md:text-9xl font-black mb-10 leading-none">
              CLIMB
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-amber-400 animate-pulse">
                PEAKS
              </span>
            </h1>

            <p className="text-2xl md:text-3xl mb-16 opacity-95 max-w-5xl mx-auto leading-relaxed font-light">
              Conquer Africa's most majestic peaks including Mount Kilimanjaro (5,895m), Mount Kenya (5,199m), and the
              Rwenzori Mountains with certified guides and comprehensive support.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Mountain className="h-7 w-7 mr-4" />
                Start Climbing
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-3 border-white text-white hover:bg-white hover:text-orange-900 bg-transparent px-12 py-6 text-xl font-bold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="h-7 w-7 mr-4" />
                Get Climbing Quote
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { value: "5,895m", label: "Kilimanjaro Peak", icon: Mountain },
                { value: "7", label: "Climbing Routes", icon: MapPin },
                { value: "95%", label: "Success Rate", icon: Award },
                { value: "4.9★", label: "Climber Rating", icon: Star },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <stat.icon className="h-8 w-8 text-orange-300 mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/80 font-medium text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Climbing Information */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-6 py-3 mb-8">
              <Info className="h-5 w-5 mr-2" />
              Complete Climbing Information
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Everything You Need to Know</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive details about our mountain climbing expeditions to ensure your success and safety
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* What's Included */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-50 to-white">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-500 rounded-full p-3">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-orange-900">What's Included</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    { icon: Users, text: "Certified Mountain Guide (English Speaking)" },
                    { icon: Shield, text: "All Climbing Equipment & Safety Gear" },
                    { icon: Bed, text: "Mountain Huts/Camping Accommodation" },
                    { icon: Utensils, text: "All Meals During Climb (3 meals/day)" },
                    { icon: Car, text: "Airport Transfers & Park Transport" },
                    { icon: Activity, text: "Park Entry & Conservation Fees" },
                    { icon: Mountain, text: "Summit Certificate" },
                    { icon: Phone, text: "Emergency Communication Equipment" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-orange-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* What's Not Included */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-red-50 to-white">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-500 rounded-full p-3">
                    <XCircle className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-red-900">What's Not Included</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    "International Flights to/from Tanzania",
                    "Visa Fees ($50 on arrival)",
                    "Personal Climbing Gear (available for rent)",
                    "Travel Insurance (mandatory)",
                    "Tips for Guides & Porters ($200-300 total)",
                    "Personal Expenses & Souvenirs",
                    "Accommodation Before/After Climb",
                    "Alcoholic Beverages",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Critical Climbing Information */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-amber-50 to-white">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-amber-500 rounded-full p-3">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-amber-900">Critical Information</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Thermometer className="h-4 w-4 text-amber-600" />
                      Best Climbing Seasons
                    </h4>
                    <p className="text-gray-700">Jan-Mar & Jun-Oct (Dry seasons with clear views)</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Activity className="h-4 w-4 text-amber-600" />
                      Fitness Requirements
                    </h4>
                    <p className="text-gray-700">Good physical condition required. 3-month training recommended</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Users className="h-4 w-4 text-amber-600" />
                      Age Requirements
                    </h4>
                    <p className="text-gray-700">Minimum age 12 years. Maximum recommended age 65 years</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Wind className="h-4 w-4 text-amber-600" />
                      Altitude Sickness
                    </h4>
                    <p className="text-gray-700">
                      Proper acclimatization schedule included. Medical clearance required
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-amber-600" />
                      Payment Terms
                    </h4>
                    <p className="text-gray-700">50% deposit required. Balance due 45 days before climb</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mountain Tours Collection with Detailed Information */}
      <section className="py-32 bg-gradient-to-br from-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full px-8 py-4 mb-8 border border-orange-200">
              <Award className="h-6 w-6 text-orange-600" />
              <span className="font-bold text-lg">Premium Climbing Expeditions</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">Mountain Climbing Tours</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Choose your mountain adventure with complete route details, pricing, and success rates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-8xl mx-auto">
            {mountainTours.map((tour, index) => (
              <Card
                key={tour.id}
                className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 shadow-xl bg-white transform hover:-translate-y-3"
              >
                <div className="relative h-80">
                  <Image
                    src={tour.images[0] || "/placeholder.svg?height=320&width=480&query=mountain climbing kilimanjaro"}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-6 left-6 flex gap-3">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 text-sm font-bold">
                      {tour.category}
                    </Badge>
                    <Badge className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 font-bold">
                      From ${tour.price}
                    </Badge>
                  </div>

                  <div className="absolute top-6 right-6 flex gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:bg-white/20 rounded-full p-3 backdrop-blur-sm"
                    >
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Badge className="bg-black/70 text-white px-3 py-2 font-bold backdrop-blur-sm">
                      {index === 0 ? "Challenging" : index === 1 ? "Moderate" : "Difficult"}
                    </Badge>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2 line-clamp-2">{tour.title}</h3>
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="ml-3 text-white/90 font-semibold">{tour.rating} (156 climbers)</span>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardDescription className="text-gray-600 text-base line-clamp-3 leading-relaxed">
                    {tour.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Detailed Climbing Information */}
                  <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                    <div className="flex items-center gap-2">
                      <div className="bg-orange-100 rounded-full p-2">
                        <Clock className="h-4 w-4 text-orange-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{tour.duration}</div>
                        <div className="text-gray-500 text-xs">Duration</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-red-100 rounded-full p-2">
                        <Mountain className="h-4 w-4 text-red-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">5,895m</div>
                        <div className="text-gray-500 text-xs">Peak Height</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-amber-100 rounded-full p-2">
                        <Users className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{tour.groupSize}</div>
                        <div className="text-gray-500 text-xs">Group Size</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-green-100 rounded-full p-2">
                        <Award className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">95%</div>
                        <div className="text-gray-500 text-xs">Success Rate</div>
                      </div>
                    </div>
                  </div>

                  {/* Route & Pricing Information */}
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Compass className="h-5 w-5 text-orange-600" />
                        <span className="font-bold text-lg text-orange-900">
                          {index === 0 ? "Machame Route" : index === 1 ? "Marangu Route" : "Lemosho Route"}
                        </span>
                      </div>
                      <Badge className="bg-orange-600 text-white">Per Person</Badge>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="flex justify-between">
                        <span>• All meals & accommodation</span>
                        <span className="font-semibold">Included</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• Professional guide & porters</span>
                        <span className="font-semibold">Included</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• Equipment rental</span>
                        <span className="font-semibold">+$150</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• Single tent supplement</span>
                        <span className="font-semibold">+$200</span>
                      </div>
                    </div>
                  </div>

                  {/* Climbing Highlights */}
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3 text-gray-900">Climbing Highlights</h4>
                    <ul className="space-y-2">
                      {[
                        "Certified mountain guides with 15+ years experience",
                        "Comprehensive safety equipment included",
                        "Proper acclimatization schedule",
                        "Summit certificate upon completion",
                        "Emergency evacuation insurance",
                      ].map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-orange-500 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-3 font-bold shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                      asChild
                    >
                      <Link href={`/tours/${tour.slug}`}>
                        <Eye className="h-5 w-5 mr-2" />
                        Route Details
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="px-6 py-3 font-bold border-2 border-orange-200 text-orange-600 hover:bg-orange-50 transition-all duration-300 bg-transparent"
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Mountain Climbing */}
      <section className="py-32 bg-gradient-to-br from-orange-900 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8">Why Climb With Us?</h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Experience the ultimate mountain adventure with unmatched expertise and safety record
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Mountain,
                title: "Expert Mountain Guides",
                description:
                  "Certified guides with 15+ years experience on Kilimanjaro and technical mountain rescue training",
                guarantee: "UIAGM certified guides",
              },
              {
                icon: Shield,
                title: "95% Success Rate",
                description:
                  "Industry-leading summit success rate through proper acclimatization and expert route planning",
                guarantee: "Highest success rate in Tanzania",
              },
              {
                icon: Compass,
                title: "Multiple Routes",
                description:
                  "Choose from 7 different routes including Machame, Marangu, Lemosho, and technical climbing routes",
                guarantee: "All routes available year-round",
              },
              {
                icon: Award,
                title: "Safety First",
                description:
                  "Comprehensive safety protocols, emergency equipment, and evacuation insurance for all climbers",
                guarantee: "Zero fatalities in 25 years",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/80 leading-relaxed mb-4">{feature.description}</p>
                <Badge className="bg-orange-500/20 text-orange-200 border border-orange-400/30">
                  {feature.guarantee}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Information & Contact */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Ready to Conquer Kilimanjaro?</h2>
            <p className="text-xl text-gray-600 mb-12">
              Contact our mountain climbing experts for route recommendations and detailed preparation guides
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-50 to-white p-8">
                <div className="text-center">
                  <Phone className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Call Our Climbing Experts</h3>
                  <p className="text-gray-600 mb-6">Speak with certified mountain guides</p>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-orange-600">+255 123 456 789</div>
                    <div className="text-gray-500">Available 6 AM - 10 PM EAT</div>
                  </div>
                </div>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-red-50 to-white p-8">
                <div className="text-center">
                  <Mail className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Climbing Guide</h3>
                  <p className="text-gray-600 mb-6">Receive detailed preparation & packing lists</p>
                  <div className="space-y-2">
                    <div className="text-xl font-bold text-red-600">climbing@ngonzitours.com</div>
                    <div className="text-gray-500">Free preparation guide included</div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/contact">
                  <Mountain className="h-7 w-7 mr-4" />
                  Book Your Climb
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-3 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent px-12 py-6 text-xl font-bold transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/tours">
                  <Compass className="h-7 w-7 mr-4" />
                  Compare Routes
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
