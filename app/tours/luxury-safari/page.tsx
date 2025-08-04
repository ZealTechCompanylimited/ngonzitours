import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getToursByCategory } from "@/lib/data"
import {
  Crown,
  Clock,
  Users,
  Star,
  Sparkles,
  Wine,
  Heart,
  ArrowRight,
  Eye,
  MapPin,
  Award,
  Gem,
  CheckCircle,
  XCircle,
  DollarSign,
  Plane,
  Bed,
  Activity,
  AlertTriangle,
  Phone,
  Mail,
  Info,
  Shield,
  Camera,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Luxury Safari Tours - Ngonzi Tours",
  description:
    "Indulge in the ultimate luxury safari experience with premium accommodations, private vehicles, and personalized service.",
}

export default function LuxurySafariPage() {
  const luxuryTours = getToursByCategory("Luxury")

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      {/* Ultra-Premium Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-amber-900 via-yellow-800 to-orange-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-30" />

        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-orange-400/10 rounded-full blur-2xl animate-pulse delay-500" />

        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 mb-10 border border-white/20">
              <Crown className="h-6 w-6 text-amber-300" />
              <span className="text-lg font-semibold">Ultimate Luxury</span>
              <Sparkles className="h-5 w-5 text-yellow-300" />
            </div>

            <h1 className="text-6xl md:text-9xl font-black mb-10 leading-none">
              LUXURY
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 animate-pulse">
                SAFARI
              </span>
            </h1>

            <p className="text-2xl md:text-3xl mb-16 opacity-95 max-w-5xl mx-auto leading-relaxed font-light">
              Experience the pinnacle of African safari luxury with exclusive lodges, private guides, gourmet dining,
              personal butlers, and unparalleled service in the world's most spectacular wilderness areas.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Crown className="h-7 w-7 mr-4" />
                Book Luxury Safari
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-3 border-white text-white hover:bg-white hover:text-amber-900 bg-transparent px-12 py-6 text-xl font-bold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="h-7 w-7 mr-4" />
                Request Quote
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { value: "5★", label: "Luxury Lodges", icon: Crown },
                { value: "Private", label: "Game Drives", icon: MapPin },
                { value: "24/7", label: "Butler Service", icon: Gem },
                { value: "4.9★", label: "Luxury Rating", icon: Star },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <stat.icon className="h-8 w-8 text-amber-300 mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/80 font-medium text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Luxury Safari Information */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="bg-amber-100 text-amber-800 text-lg px-6 py-3 mb-8">
              <Info className="h-5 w-5 mr-2" />
              Complete Luxury Safari Information
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Everything You Need to Know</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive details about our luxury safari experiences to ensure the ultimate African adventure
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* What's Included */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-amber-50 to-white">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-amber-500 rounded-full p-3">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-amber-900">Luxury Inclusions</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    { icon: Crown, text: "5-Star Luxury Lodge Accommodation" },
                    { icon: Users, text: "Private Professional Guide & Vehicle" },
                    { icon: Gem, text: "Personal Butler & Concierge Service" },
                    { icon: Wine, text: "Gourmet Dining & Premium Beverages" },
                    { icon: Plane, text: "Private Charter Flights (Optional)" },
                    { icon: Camera, text: "Professional Photography Service" },
                    { icon: Bed, text: "Luxury Spa & Wellness Treatments" },
                    { icon: Shield, text: "Comprehensive Luxury Travel Insurance" },
                    { icon: Activity, text: "Exclusive Private Game Reserves" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-amber-600 flex-shrink-0" />
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
                    "International First-Class Flights",
                    "Visa Fees & Travel Documents",
                    "Personal Shopping & High-End Souvenirs",
                    "Private Helicopter Transfers (Optional)",
                    "Exclusive Wine Cellar Selections",
                    "Personal Photographer (Optional)",
                    "Luxury Spa Treatments Beyond Included",
                    "Private Jet Charter Upgrades",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Luxury Safari Information */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-yellow-50 to-white">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-yellow-500 rounded-full p-3">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-yellow-900">Luxury Information</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Crown className="h-4 w-4 text-yellow-600" />
                      Luxury Season
                    </h4>
                    <p className="text-gray-700">Year-round luxury with peak season June-October & December-March</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Users className="h-4 w-4 text-yellow-600" />
                      Exclusive Groups
                    </h4>
                    <p className="text-gray-700">Maximum 4 guests per vehicle. Private lodge bookings available</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Gem className="h-4 w-4 text-yellow-600" />
                      Service Level
                    </h4>
                    <p className="text-gray-700">24/7 personal butler, private chef, and dedicated concierge</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-yellow-600" />
                      Payment Terms
                    </h4>
                    <p className="text-gray-700">50% deposit required. Full payment 60 days before travel</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Shield className="h-4 w-4 text-yellow-600" />
                      Luxury Guarantee
                    </h4>
                    <p className="text-gray-700">100% satisfaction guarantee with luxury service standards</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Luxury Tours Collection with Detailed Information */}
      <section className="py-32 bg-gradient-to-br from-white to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700 rounded-full px-8 py-4 mb-8 border border-amber-200">
              <Award className="h-6 w-6 text-amber-600" />
              <span className="font-bold text-lg">Ultra-Premium Safari Collection</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">Luxury Safari Tours</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Indulge in the ultimate African safari with complete luxury details, exclusive lodges, and premium pricing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-8xl mx-auto">
            {luxuryTours.map((tour, index) => (
              <Card
                key={tour.id}
                className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 shadow-xl bg-white transform hover:-translate-y-3"
              >
                <div className="relative h-80">
                  <Image
                    src={
                      tour.images[0] || "/placeholder.svg?height=320&width=480&query=luxury safari lodge tent africa"
                    }
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-6 left-6 flex gap-3">
                    <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-4 py-2 text-sm font-bold">
                      {tour.category}
                    </Badge>
                    <Badge className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white px-4 py-2 font-bold">
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
                    <Badge className="bg-black/70 text-white px-3 py-2 font-bold backdrop-blur-sm">Ultra-Luxury</Badge>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2 line-clamp-2">{tour.title}</h3>
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="ml-3 text-white/90 font-semibold">{tour.rating} (89 luxury guests)</span>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardDescription className="text-gray-600 text-base line-clamp-3 leading-relaxed">
                    {tour.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Detailed Luxury Information */}
                  <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                    <div className="flex items-center gap-2">
                      <div className="bg-amber-100 rounded-full p-2">
                        <Clock className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{tour.duration}</div>
                        <div className="text-gray-500 text-xs">Duration</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-yellow-100 rounded-full p-2">
                        <Crown className="h-4 w-4 text-yellow-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">5-Star</div>
                        <div className="text-gray-500 text-xs">Lodge Rating</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-orange-100 rounded-full p-2">
                        <Users className="h-4 w-4 text-orange-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{tour.groupSize}</div>
                        <div className="text-gray-500 text-xs">Max Guests</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-red-100 rounded-full p-2">
                        <Gem className="h-4 w-4 text-red-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Private</div>
                        <div className="text-gray-500 text-xs">Experience</div>
                      </div>
                    </div>
                  </div>

                  {/* Luxury Features & Pricing Information */}
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-4 mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Crown className="h-5 w-5 text-amber-600" />
                        <span className="font-bold text-lg text-amber-900">
                          {index === 0 ? "Presidential Suite" : index === 1 ? "Royal Villa" : "Imperial Lodge"}
                        </span>
                      </div>
                      <Badge className="bg-amber-600 text-white">Per Person</Badge>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="flex justify-between">
                        <span>• Private luxury accommodation</span>
                        <span className="font-semibold">Included</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• Personal butler & chef</span>
                        <span className="font-semibold">Included</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• Premium wines & champagne</span>
                        <span className="font-semibold">Included</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• Private helicopter transfers</span>
                        <span className="font-semibold">+$2,500</span>
                      </div>
                    </div>
                  </div>

                  {/* Luxury Features */}
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3 text-gray-900">Luxury Features</h4>
                    <ul className="space-y-2">
                      {[
                        "Private luxury tented suite with butler service",
                        "Exclusive game drives with professional guide",
                        "Gourmet dining with personal chef",
                        "Premium spa treatments and wellness",
                        "Private airstrip and helicopter access",
                      ].map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-amber-500 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      className="flex-1 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white py-3 font-bold shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
                      asChild
                    >
                      <Link href={`/tours/${tour.slug}`}>
                        <Eye className="h-5 w-5 mr-2" />
                        Luxury Details
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="px-6 py-3 font-bold border-2 border-amber-200 text-amber-600 hover:bg-amber-50 transition-all duration-300 bg-transparent"
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

      {/* Luxury Features */}
      <section className="py-32 bg-gradient-to-br from-amber-900 to-yellow-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8">Luxury Safari Features</h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Experience unparalleled luxury in the heart of the African wilderness with world-class amenities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Crown,
                title: "5-Star Lodges",
                description:
                  "Exclusive luxury tented camps and lodges with world-class amenities, private decks, and panoramic views",
                guarantee: "Forbes 5-Star rated properties",
              },
              {
                icon: Users,
                title: "Private Experiences",
                description:
                  "Dedicated personal guides, private vehicles, and exclusive access to premium game reserves",
                guarantee: "Maximum 4 guests per experience",
              },
              {
                icon: Wine,
                title: "Gourmet Dining",
                description: "Personal chefs, premium wines, champagne service, and customized culinary experiences",
                guarantee: "Michelin-trained chefs available",
              },
              {
                icon: Sparkles,
                title: "Exclusive Access",
                description:
                  "Private conservancies, helicopter transfers, and special experiences unavailable to regular tourists",
                guarantee: "VIP access to restricted areas",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-amber-400 to-yellow-400 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/80 leading-relaxed mb-4">{feature.description}</p>
                <Badge className="bg-amber-500/20 text-amber-200 border border-amber-400/30">{feature.guarantee}</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Information & Contact */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Ready for Ultimate Luxury?</h2>
            <p className="text-xl text-gray-600 mb-12">
              Contact our luxury safari specialists for personalized recommendations and exclusive experiences
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-amber-50 to-white p-8">
                <div className="text-center">
                  <Phone className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Call Our Luxury Specialists</h3>
                  <p className="text-gray-600 mb-6">Speak with luxury travel experts</p>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-amber-600">+255 123 456 789</div>
                    <div className="text-gray-500">VIP line available 24/7</div>
                  </div>
                </div>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-yellow-50 to-white p-8">
                <div className="text-center">
                  <Mail className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Request Luxury Package</h3>
                  <p className="text-gray-600 mb-6">Receive exclusive luxury safari proposals</p>
                  <div className="space-y-2">
                    <div className="text-xl font-bold text-yellow-600">luxury@ngonzitours.com</div>
                    <div className="text-gray-500">Bespoke itineraries within 24 hours</div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/contact">
                  <Crown className="h-7 w-7 mr-4" />
                  Book Luxury Safari
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-3 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white bg-transparent px-12 py-6 text-xl font-bold transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/tours">
                  <Wine className="h-7 w-7 mr-4" />
                  Request Proposal
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
