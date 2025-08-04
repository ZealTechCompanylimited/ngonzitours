import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getToursByCategory } from "@/lib/data"
import {
  Waves,
  Clock,
  Users,
  Star,
  Sparkles,
  Camera,
  Heart,
  ArrowRight,
  Eye,
  MapPin,
  Award,
  Shield,
  Sun,
  CheckCircle,
  XCircle,
  Calendar,
  Car,
  Utensils,
  Bed,
  Activity,
  AlertTriangle,
  Phone,
  Mail,
  Info,
  Palmtree,
  Fish,
  Anchor,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Beach Holiday Tours - Ngonzi Tours",
  description:
    "Relax on pristine beaches of Zanzibar, Pemba, and the East African coast with luxury resorts and crystal-clear waters.",
}

export default function BeachHolidaysPage() {
  const beachTours = getToursByCategory("Beach")

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      {/* Ultra-Premium Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-cyan-900 via-blue-800 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-40" />

        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-teal-400/10 rounded-full blur-2xl animate-pulse delay-500" />

        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 mb-10 border border-white/20">
              <Waves className="h-6 w-6 text-cyan-300" />
              <span className="text-lg font-semibold">Tropical Paradise</span>
              <Sparkles className="h-5 w-5 text-yellow-300" />
            </div>

            <h1 className="text-6xl md:text-9xl font-black mb-10 leading-none">
              BEACH
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 animate-pulse">
                BLISS
              </span>
            </h1>

            <p className="text-2xl md:text-3xl mb-16 opacity-95 max-w-5xl mx-auto leading-relaxed font-light">
              Escape to pristine beaches of Zanzibar, Pemba Island, Mafia Island, and the East African coast. Experience
              crystal-clear waters, luxury resorts, and unforgettable tropical adventures.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Waves className="h-7 w-7 mr-4" />
                Book Beach Holiday
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-3 border-white text-white hover:bg-white hover:text-cyan-900 bg-transparent px-12 py-6 text-xl font-bold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="h-7 w-7 mr-4" />
                Get Beach Quote
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { value: "25+", label: "Beach Resorts", icon: Sun },
                { value: "12", label: "Islands", icon: MapPin },
                { value: "365", label: "Days of Sun", icon: Waves },
                { value: "4.9★", label: "Guest Rating", icon: Star },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <stat.icon className="h-8 w-8 text-cyan-300 mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/80 font-medium text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Beach Holiday Information */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="bg-cyan-100 text-cyan-800 text-lg px-6 py-3 mb-8">
              <Info className="h-5 w-5 mr-2" />
              Complete Beach Holiday Information
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Everything You Need to Know</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive details about our beach holiday packages to help you choose the perfect tropical escape
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* What's Included */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-cyan-50 to-white">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-cyan-500 rounded-full p-3">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-cyan-900">What's Included</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    { icon: Bed, text: "Luxury Beachfront Resort Accommodation" },
                    { icon: Utensils, text: "All Meals (Breakfast, Lunch, Dinner)" },
                    { icon: Car, text: "Airport Transfers & Local Transport" },
                    { icon: Activity, text: "Water Sports Equipment & Activities" },
                    { icon: Fish, text: "Snorkeling & Diving Equipment" },
                    { icon: Anchor, text: "Dhow Sailing & Sunset Cruises" },
                    { icon: Camera, text: "Island Hopping Tours" },
                    { icon: Shield, text: "Travel Insurance & Beach Safety" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-cyan-600 flex-shrink-0" />
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
                    "International Flights to/from Zanzibar",
                    "Visa Fees ($50 on arrival)",
                    "Premium Alcoholic Beverages",
                    "Spa Treatments & Wellness Services",
                    "Personal Shopping & Souvenirs",
                    "Deep Sea Fishing Excursions",
                    "Private Beach Dinners (Optional)",
                    "Scuba Diving Certification Courses",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Important Beach Information */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-amber-50 to-white">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-amber-500 rounded-full p-3">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-amber-900">Important Information</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Sun className="h-4 w-4 text-amber-600" />
                      Best Beach Season
                    </h4>
                    <p className="text-gray-700">June-September & December-March (Dry seasons, calm seas)</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Waves className="h-4 w-4 text-amber-600" />
                      Swimming Conditions
                    </h4>
                    <p className="text-gray-700">Warm waters year-round (26-29°C). Suitable for all swimming levels</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Users className="h-4 w-4 text-amber-600" />
                      Age Requirements
                    </h4>
                    <p className="text-gray-700">Family-friendly. Children under 12 get 50% discount</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-amber-600" />
                      Booking Policy
                    </h4>
                    <p className="text-gray-700">25% deposit required. Full payment 21 days before travel</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Shield className="h-4 w-4 text-amber-600" />
                      Cancellation
                    </h4>
                    <p className="text-gray-700">Free cancellation up to 7 days before departure</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Beach Tours Collection with Detailed Information */}
      <section className="py-32 bg-gradient-to-br from-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full px-8 py-4 mb-8 border border-cyan-200">
              <Award className="h-6 w-6 text-cyan-600" />
              <span className="font-bold text-lg">Luxury Beach Escapes</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">Beach Holiday Tours</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Choose your perfect beach paradise with complete resort details, activities, and pricing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-8xl mx-auto">
            {beachTours.map((tour, index) => (
              <Card
                key={tour.id}
                className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 shadow-xl bg-white transform hover:-translate-y-3"
              >
                <div className="relative h-80">
                  <Image
                    src={tour.images[0] || "/placeholder.svg?height=320&width=480&query=tropical beach resort zanzibar"}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-6 left-6 flex gap-3">
                    <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 text-sm font-bold">
                      {tour.category}
                    </Badge>
                    <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 font-bold">
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
                    <Badge className="bg-black/70 text-white px-3 py-2 font-bold backdrop-blur-sm">All-Inclusive</Badge>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2 line-clamp-2">{tour.title}</h3>
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="ml-3 text-white/90 font-semibold">{tour.rating} (289 reviews)</span>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardDescription className="text-gray-600 text-base line-clamp-3 leading-relaxed">
                    {tour.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Detailed Beach Information */}
                  <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                    <div className="flex items-center gap-2">
                      <div className="bg-cyan-100 rounded-full p-2">
                        <Clock className="h-4 w-4 text-cyan-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{tour.duration}</div>
                        <div className="text-gray-500 text-xs">Duration</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-blue-100 rounded-full p-2">
                        <Palmtree className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Zanzibar</div>
                        <div className="text-gray-500 text-xs">Location</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-teal-100 rounded-full p-2">
                        <Users className="h-4 w-4 text-teal-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{tour.groupSize}</div>
                        <div className="text-gray-500 text-xs">Capacity</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-amber-100 rounded-full p-2">
                        <Sun className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">29°C</div>
                        <div className="text-gray-500 text-xs">Water Temp</div>
                      </div>
                    </div>
                  </div>

                  {/* Resort & Pricing Information */}
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-4 mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Bed className="h-5 w-5 text-cyan-600" />
                        <span className="font-bold text-lg text-cyan-900">
                          {index === 0 ? "5★ Beach Resort" : index === 1 ? "Boutique Lodge" : "Luxury Villa"}
                        </span>
                      </div>
                      <Badge className="bg-cyan-600 text-white">Per Person</Badge>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="flex justify-between">
                        <span>• Beachfront accommodation</span>
                        <span className="font-semibold">Included</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• All meals & drinks</span>
                        <span className="font-semibold">Included</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• Water sports & activities</span>
                        <span className="font-semibold">Included</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• Single occupancy supplement</span>
                        <span className="font-semibold">+$150/night</span>
                      </div>
                    </div>
                  </div>

                  {/* Beach Highlights */}
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3 text-gray-900">Beach Highlights</h4>
                    <ul className="space-y-2">
                      {[
                        "Private white sand beach access",
                        "Snorkeling & diving in coral reefs",
                        "Sunset dhow sailing cruises",
                        "Spice tour & Stone Town visit",
                        "Water sports equipment included",
                      ].map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-cyan-500 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-3 font-bold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                      asChild
                    >
                      <Link href={`/tours/${tour.slug}`}>
                        <Eye className="h-5 w-5 mr-2" />
                        Resort Details
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="px-6 py-3 font-bold border-2 border-cyan-200 text-cyan-600 hover:bg-cyan-50 transition-all duration-300 bg-transparent"
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

      {/* Why Choose Beach Holidays */}
      <section className="py-32 bg-gradient-to-br from-cyan-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8">Why Choose Our Beach Holidays?</h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Experience tropical paradise with luxury accommodations and pristine beaches
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Waves,
                title: "Pristine Beaches",
                description:
                  "Access to the most beautiful and secluded beaches with crystal-clear turquoise waters and white sand",
                guarantee: "Private beach access guaranteed",
              },
              {
                icon: Shield,
                title: "Luxury Resorts",
                description:
                  "Hand-picked 5-star resorts and boutique hotels with world-class amenities and personalized service",
                guarantee: "5-star accommodation only",
              },
              {
                icon: Camera,
                title: "Water Activities",
                description:
                  "Comprehensive water sports, snorkeling, diving, and sailing with professional equipment and guides",
                guarantee: "All equipment included",
              },
              {
                icon: Sun,
                title: "Year-Round Paradise",
                description:
                  "Perfect tropical climate with 365 days of sunshine and consistently warm ocean temperatures",
                guarantee: "29°C water temperature",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-cyan-400 to-blue-400 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/80 leading-relaxed mb-4">{feature.description}</p>
                <Badge className="bg-cyan-500/20 text-cyan-200 border border-cyan-400/30">{feature.guarantee}</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Information & Contact */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Ready for Your Beach Paradise?</h2>
            <p className="text-xl text-gray-600 mb-12">
              Contact our beach holiday specialists for resort recommendations and exclusive deals
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-cyan-50 to-white p-8">
                <div className="text-center">
                  <Phone className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Call Our Beach Experts</h3>
                  <p className="text-gray-600 mb-6">Speak with resort specialists</p>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-cyan-600">+255 123 456 789</div>
                    <div className="text-gray-500">Available 7 AM - 9 PM EAT</div>
                  </div>
                </div>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-white p-8">
                <div className="text-center">
                  <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Beach Package</h3>
                  <p className="text-gray-600 mb-6">Receive detailed resort information & deals</p>
                  <div className="space-y-2">
                    <div className="text-xl font-bold text-blue-600">beaches@ngonzitours.com</div>
                    <div className="text-gray-500">Exclusive resort deals included</div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/contact">
                  <Waves className="h-7 w-7 mr-4" />
                  Book Beach Holiday
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-3 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white bg-transparent px-12 py-6 text-xl font-bold transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/tours">
                  <Sun className="h-7 w-7 mr-4" />
                  Compare Resorts
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
