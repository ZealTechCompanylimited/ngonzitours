import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getToursByCategory } from "@/lib/data"
import {
  TelescopeIcon as Binoculars,
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
  Globe,
  CheckCircle,
  XCircle,
  Calendar,
  DollarSign,
  Plane,
  Car,
  Utensils,
  Bed,
  AlertTriangle,
  Phone,
  Mail,
  Info,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Wildlife Safari Tours - Ngonzi Tours",
  description:
    "Experience the ultimate wildlife safari adventure in East Africa's most spectacular national parks and game reserves.",
}

export default function WildlifeSafariPage() {
  const wildlifeTours = getToursByCategory("Wildlife")

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Ultra-Premium Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-emerald-900 via-green-800 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-30" />

        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-green-400/10 rounded-full blur-2xl animate-pulse delay-500" />

        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 mb-10 border border-white/20">
              <Binoculars className="h-6 w-6 text-emerald-300" />
              <span className="text-lg font-semibold">Wildlife Safari Adventures</span>
              <Sparkles className="h-5 w-5 text-yellow-300" />
            </div>

            <h1 className="text-6xl md:text-9xl font-black mb-10 leading-none">
              WILD
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 animate-pulse">
                SAFARI
              </span>
            </h1>

            <p className="text-2xl md:text-3xl mb-16 opacity-95 max-w-5xl mx-auto leading-relaxed font-light">
              Witness the Great Migration, track the Big Five, and experience Africa's most spectacular wildlife in
              their natural habitat with expert guides and luxury accommodations.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Camera className="h-7 w-7 mr-4" />
                Book Safari Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-3 border-white text-white hover:bg-white hover:text-emerald-900 bg-transparent px-12 py-6 text-xl font-bold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="h-7 w-7 mr-4" />
                Get Free Quote
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { value: "Big 5", label: "Wildlife Guarantee", icon: Binoculars },
                { value: "15", label: "National Parks", icon: MapPin },
                { value: "98%", label: "Wildlife Sightings", icon: Eye },
                { value: "4.9★", label: "Guest Rating", icon: Star },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <stat.icon className="h-8 w-8 text-emerald-300 mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/80 font-medium text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Tour Information */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="bg-emerald-100 text-emerald-800 text-lg px-6 py-3 mb-8">
              <Info className="h-5 w-5 mr-2" />
              Complete Safari Information
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Everything You Need to Know</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive details about our wildlife safari tours to help you make an informed decision
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* What's Included */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-white">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-emerald-500 rounded-full p-3">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-emerald-900">What's Included</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    { icon: Car, text: "4WD Safari Vehicle with Pop-up Roof" },
                    { icon: Users, text: "Professional English-Speaking Guide" },
                    { icon: Bed, text: "Luxury Lodge/Camp Accommodation" },
                    { icon: Utensils, text: "All Meals (Breakfast, Lunch, Dinner)" },
                    { icon: MapPin, text: "Park Entry Fees & Conservation Fees" },
                    { icon: Camera, text: "Game Drives & Wildlife Photography" },
                    { icon: Plane, text: "Airport Transfers" },
                    { icon: Shield, text: "Comprehensive Travel Insurance" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-emerald-600 flex-shrink-0" />
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
                    "International Flights to/from East Africa",
                    "Visa Fees (Available on Arrival)",
                    "Personal Travel Insurance (Optional)",
                    "Alcoholic Beverages & Soft Drinks",
                    "Personal Shopping & Souvenirs",
                    "Tips for Guides & Lodge Staff",
                    "Optional Activities (Hot Air Balloon)",
                    "Laundry Services at Lodges",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Important Information */}
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
                    <h4 className="font-bold text-gray-900 mb-2">Best Time to Visit</h4>
                    <p className="text-gray-700">June - October (Dry Season) for Great Migration</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Physical Requirements</h4>
                    <p className="text-gray-700">Moderate fitness level required. Suitable for ages 8+</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Group Size</h4>
                    <p className="text-gray-700">Maximum 6 people per vehicle for optimal viewing</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Booking Policy</h4>
                    <p className="text-gray-700">30% deposit required. Full payment 30 days before travel</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Cancellation</h4>
                    <p className="text-gray-700">Free cancellation up to 14 days before departure</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Wildlife Tours Collection with Detailed Information */}
      <section className="py-32 bg-gradient-to-br from-white to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full px-8 py-4 mb-8 border border-emerald-200">
              <Award className="h-6 w-6 text-emerald-600" />
              <span className="font-bold text-lg">Premium Safari Collection</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">Wildlife Safari Tours</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Choose from our expertly crafted wildlife safari experiences with complete pricing and details
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-8xl mx-auto">
            {wildlifeTours.map((tour, index) => (
              <Card
                key={tour.id}
                className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 shadow-xl bg-white transform hover:-translate-y-3"
              >
                <div className="relative h-80">
                  <Image
                    src={tour.images[0] || "/placeholder.svg?height=320&width=480&query=african wildlife safari"}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-6 left-6 flex gap-3">
                    <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-4 py-2 text-sm font-bold">
                      {tour.category}
                    </Badge>
                    <Badge className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 font-bold">
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
                      {tour.difficulty || "Moderate"}
                    </Badge>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2 line-clamp-2">{tour.title}</h3>
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="ml-3 text-white/90 font-semibold">{tour.rating} (324 reviews)</span>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardDescription className="text-gray-600 text-base line-clamp-3 leading-relaxed">
                    {tour.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Detailed Tour Information */}
                  <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                    <div className="flex items-center gap-2">
                      <div className="bg-emerald-100 rounded-full p-2">
                        <Clock className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{tour.duration}</div>
                        <div className="text-gray-500 text-xs">Duration</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-teal-100 rounded-full p-2">
                        <Users className="h-4 w-4 text-teal-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{tour.groupSize}</div>
                        <div className="text-gray-500 text-xs">Group Size</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-green-100 rounded-full p-2">
                        <MapPin className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Serengeti</div>
                        <div className="text-gray-500 text-xs">Main Location</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-amber-100 rounded-full p-2">
                        <Calendar className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Year Round</div>
                        <div className="text-gray-500 text-xs">Availability</div>
                      </div>
                    </div>
                  </div>

                  {/* Pricing Information */}
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4 mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-emerald-600" />
                        <span className="font-bold text-lg text-emerald-900">From ${tour.price}</span>
                      </div>
                      <Badge className="bg-emerald-600 text-white">Per Person</Badge>
                    </div>
                    <div className="text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>• Shared accommodation</span>
                        <span className="font-semibold">Included</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• All meals & activities</span>
                        <span className="font-semibold">Included</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• Single supplement</span>
                        <span className="font-semibold">+$200/night</span>
                      </div>
                    </div>
                  </div>

                  {/* Tour Highlights */}
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3 text-gray-900">Safari Highlights</h4>
                    <ul className="space-y-2">
                      {[
                        "Big Five wildlife viewing guaranteed",
                        "Great Migration (seasonal)",
                        "Professional wildlife photography guide",
                        "Luxury tented camp accommodation",
                        "Cultural Maasai village visit",
                      ].map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-3 font-bold shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                      asChild
                    >
                      <Link href={`/tours/${tour.slug}`}>
                        <Eye className="h-5 w-5 mr-2" />
                        Full Details
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="px-6 py-3 font-bold border-2 border-emerald-200 text-emerald-600 hover:bg-emerald-50 transition-all duration-300 bg-transparent"
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

      {/* Why Choose Wildlife Safari */}
      <section className="py-32 bg-gradient-to-br from-emerald-900 to-teal-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8">Why Choose Our Wildlife Safaris?</h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Experience the ultimate wildlife adventure with unmatched expertise and luxury
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Binoculars,
                title: "Expert Wildlife Guides",
                description:
                  "Professional naturalists with 15+ years experience tracking Africa's most elusive animals",
                guarantee: "100% Big Five sighting guarantee",
              },
              {
                icon: Shield,
                title: "Safety Guaranteed",
                description: "Comprehensive safety protocols and 24/7 emergency support for worry-free adventures",
                guarantee: "Zero incidents in 25 years",
              },
              {
                icon: Camera,
                title: "Photography Focus",
                description: "Specialized vehicles and timing for perfect wildlife photography opportunities",
                guarantee: "Professional photo guidance included",
              },
              {
                icon: Globe,
                title: "Conservation Impact",
                description: "Supporting local communities and wildlife conservation through responsible tourism",
                guarantee: "15% of profits to conservation",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-emerald-400 to-teal-400 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/80 leading-relaxed mb-4">{feature.description}</p>
                <Badge className="bg-emerald-500/20 text-emerald-200 border border-emerald-400/30">
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
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Ready to Book Your Safari?</h2>
            <p className="text-xl text-gray-600 mb-12">
              Contact our safari experts for personalized recommendations and instant quotes
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-white p-8">
                <div className="text-center">
                  <Phone className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Call Our Experts</h3>
                  <p className="text-gray-600 mb-6">Speak directly with our safari specialists</p>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-emerald-600">+255 123 456 789</div>
                    <div className="text-gray-500">Available 24/7</div>
                  </div>
                </div>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-teal-50 to-white p-8">
                <div className="text-center">
                  <Mail className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Inquiry</h3>
                  <p className="text-gray-600 mb-6">Get detailed quotes and itineraries</p>
                  <div className="space-y-2">
                    <div className="text-xl font-bold text-teal-600">safaris@ngonzitours.com</div>
                    <div className="text-gray-500">Response within 2 hours</div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/contact">
                  <Camera className="h-7 w-7 mr-4" />
                  Book Your Safari
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-3 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white bg-transparent px-12 py-6 text-xl font-bold transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/tours">
                  <Binoculars className="h-7 w-7 mr-4" />
                  Get Free Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
