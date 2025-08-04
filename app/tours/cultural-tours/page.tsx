import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getToursByCategory } from "@/lib/data"
import {
  Users,
  Clock,
  Star,
  Sparkles,
  Camera,
  Heart,
  ArrowRight,
  Eye,
  Award,
  Shield,
  Globe,
  CheckCircle,
  XCircle,
  Calendar,
  DollarSign,
  Car,
  Utensils,
  Bed,
  Activity,
  AlertTriangle,
  Phone,
  Mail,
  Info,
  BookOpen,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Cultural Tours - Ngonzi Tours",
  description:
    "Immerse yourself in East Africa's rich cultural heritage with authentic experiences among local communities and traditions.",
}

export default function CulturalToursPage() {
  const culturalTours = getToursByCategory("Cultural")

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Ultra-Premium Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-30" />

        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-indigo-400/10 rounded-full blur-2xl animate-pulse delay-500" />

        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 mb-10 border border-white/20">
              <Globe className="h-6 w-6 text-purple-300" />
              <span className="text-lg font-semibold">Cultural Heritage</span>
              <Sparkles className="h-5 w-5 text-yellow-300" />
            </div>

            <h1 className="text-6xl md:text-9xl font-black mb-10 leading-none">
              CULTURE
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 animate-pulse">
                IMMERSION
              </span>
            </h1>

            <p className="text-2xl md:text-3xl mb-16 opacity-95 max-w-5xl mx-auto leading-relaxed font-light">
              Discover the rich cultural tapestry of East Africa through authentic experiences with Maasai, Hadzabe,
              Chagga, and other indigenous communities. Experience traditional ceremonies, ancient customs, and living
              heritage.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Users className="h-7 w-7 mr-4" />
                Explore Culture
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-3 border-white text-white hover:bg-white hover:text-purple-900 bg-transparent px-12 py-6 text-xl font-bold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="h-7 w-7 mr-4" />
                Get Cultural Quote
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { value: "50+", label: "Communities", icon: Users },
                { value: "15", label: "Ethnic Groups", icon: Globe },
                { value: "100+", label: "Traditions", icon: Award },
                { value: "4.9★", label: "Cultural Rating", icon: Star },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <stat.icon className="h-8 w-8 text-purple-300 mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/80 font-medium text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Cultural Information */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-6 py-3 mb-8">
              <Info className="h-5 w-5 mr-2" />
              Complete Cultural Experience Information
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Everything You Need to Know</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive details about our cultural immersion experiences to ensure respectful and meaningful
              encounters
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* What's Included */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-white">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-500 rounded-full p-3">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-purple-900">What's Included</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    { icon: Users, text: "Expert Cultural Guide & Interpreter" },
                    { icon: Car, text: "Transportation to Remote Communities" },
                    { icon: Activity, text: "Traditional Ceremony Participation" },
                    { icon: Utensils, text: "Authentic Local Meals with Families" },
                    { icon: Bed, text: "Cultural Lodge/Homestay Accommodation" },
                    { icon: Camera, text: "Photography Permissions & Guidance" },
                    { icon: BookOpen, text: "Cultural Education & Storytelling" },
                    { icon: Shield, text: "Community Development Contribution" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-purple-600 flex-shrink-0" />
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
                    "International Flights to East Africa",
                    "Visa Fees & Travel Documents",
                    "Personal Travel Insurance",
                    "Alcoholic Beverages",
                    "Personal Shopping & Crafts",
                    "Tips for Community Members",
                    "Additional Cultural Workshops",
                    "Private Photography Sessions",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Cultural Guidelines & Information */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-amber-50 to-white">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-amber-500 rounded-full p-3">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-amber-900">Cultural Guidelines</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Users className="h-4 w-4 text-amber-600" />
                      Respectful Interaction
                    </h4>
                    <p className="text-gray-700">
                      Cultural sensitivity training provided. Dress code guidelines included
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Camera className="h-4 w-4 text-amber-600" />
                      Photography Ethics
                    </h4>
                    <p className="text-gray-700">Permission required for photos. Some ceremonies may be off-limits</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Globe className="h-4 w-4 text-amber-600" />
                      Language Barriers
                    </h4>
                    <p className="text-gray-700">Professional interpreters provided. Basic language lessons included</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-amber-600" />
                      Best Cultural Seasons
                    </h4>
                    <p className="text-gray-700">Year-round availability. Special ceremonies during harvest seasons</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-amber-600" />
                      Community Impact
                    </h4>
                    <p className="text-gray-700">20% of tour fees directly support community development projects</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cultural Tours Collection with Detailed Information */}
      <section className="py-32 bg-gradient-to-br from-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full px-8 py-4 mb-8 border border-purple-200">
              <Award className="h-6 w-6 text-purple-600" />
              <span className="font-bold text-lg">Authentic Cultural Experiences</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">Cultural Tours</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Immerse yourself in East Africa's vibrant cultures with complete community details and authentic
              experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-8xl mx-auto">
            {culturalTours.map((tour, index) => (
              <Card
                key={tour.id}
                className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 shadow-xl bg-white transform hover:-translate-y-3"
              >
                <div className="relative h-80">
                  <Image
                    src={
                      tour.images[0] || "/placeholder.svg?height=320&width=480&query=african cultural traditions maasai"
                    }
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-6 left-6 flex gap-3">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 text-sm font-bold">
                      {tour.category}
                    </Badge>
                    <Badge className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 font-bold">
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
                    <Badge className="bg-black/70 text-white px-3 py-2 font-bold backdrop-blur-sm">Authentic</Badge>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2 line-clamp-2">{tour.title}</h3>
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="ml-3 text-white/90 font-semibold">{tour.rating} (127 experiences)</span>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardDescription className="text-gray-600 text-base line-clamp-3 leading-relaxed">
                    {tour.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Detailed Cultural Information */}
                  <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                    <div className="flex items-center gap-2">
                      <div className="bg-purple-100 rounded-full p-2">
                        <Clock className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{tour.duration}</div>
                        <div className="text-gray-500 text-xs">Duration</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-pink-100 rounded-full p-2">
                        <Users className="h-4 w-4 text-pink-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {index === 0 ? "Maasai" : index === 1 ? "Hadzabe" : "Chagga"}
                        </div>
                        <div className="text-gray-500 text-xs">Community</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-indigo-100 rounded-full p-2">
                        <Globe className="h-4 w-4 text-indigo-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{tour.groupSize}</div>
                        <div className="text-gray-500 text-xs">Group Size</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-amber-100 rounded-full p-2">
                        <BookOpen className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Immersive</div>
                        <div className="text-gray-500 text-xs">Experience</div>
                      </div>
                    </div>
                  </div>

                  {/* Cultural Experience & Pricing Information */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Activity className="h-5 w-5 text-purple-600" />
                        <span className="font-bold text-lg text-purple-900">
                          {index === 0 ? "Maasai Village" : index === 1 ? "Hadzabe Hunting" : "Chagga Coffee"}
                        </span>
                      </div>
                      <Badge className="bg-purple-600 text-white">Per Person</Badge>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="flex justify-between">
                        <span>• Cultural guide & interpreter</span>
                        <span className="font-semibold">Included</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• Traditional meals & ceremonies</span>
                        <span className="font-semibold">Included</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• Community development fee</span>
                        <span className="font-semibold">Included</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• Craft workshop participation</span>
                        <span className="font-semibold">+$50</span>
                      </div>
                    </div>
                  </div>

                  {/* Cultural Highlights */}
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3 text-gray-900">Cultural Highlights</h4>
                    <ul className="space-y-2">
                      {[
                        "Traditional ceremony participation",
                        "Authentic community meals with families",
                        "Cultural storytelling & oral traditions",
                        "Traditional craft workshops",
                        "Community development project visit",
                      ].map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 font-bold shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                      asChild
                    >
                      <Link href={`/tours/${tour.slug}`}>
                        <Eye className="h-5 w-5 mr-2" />
                        Experience Details
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="px-6 py-3 font-bold border-2 border-purple-200 text-purple-600 hover:bg-purple-50 transition-all duration-300 bg-transparent"
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

      {/* Why Choose Cultural Tours */}
      <section className="py-32 bg-gradient-to-br from-purple-900 to-pink-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8">Why Choose Our Cultural Tours?</h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Experience authentic cultural immersion with respect, understanding, and meaningful community impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Users,
                title: "Authentic Communities",
                description:
                  "Direct partnerships with indigenous communities ensuring genuine cultural exchanges and experiences",
                guarantee: "100% authentic community partnerships",
              },
              {
                icon: Shield,
                title: "Respectful Tourism",
                description:
                  "Ethical cultural tourism that benefits local communities and preserves traditional ways of life",
                guarantee: "20% of fees support communities",
              },
              {
                icon: Camera,
                title: "Cultural Documentation",
                description:
                  "Professional photography guidance with respect for cultural sensitivities and sacred traditions",
                guarantee: "Cultural photography ethics training",
              },
              {
                icon: Globe,
                title: "Heritage Preservation",
                description:
                  "Supporting the preservation of ancient traditions, languages, and cultural heritage sites",
                guarantee: "UNESCO heritage site partnerships",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/80 leading-relaxed mb-4">{feature.description}</p>
                <Badge className="bg-purple-500/20 text-purple-200 border border-purple-400/30">
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
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Ready for Cultural Immersion?</h2>
            <p className="text-xl text-gray-600 mb-12">
              Contact our cultural specialists for community recommendations and respectful travel guidelines
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-white p-8">
                <div className="text-center">
                  <Phone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Call Our Cultural Experts</h3>
                  <p className="text-gray-600 mb-6">Speak with community liaison specialists</p>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-purple-600">+255 123 456 789</div>
                    <div className="text-gray-500">Available 8 AM - 6 PM EAT</div>
                  </div>
                </div>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-pink-50 to-white p-8">
                <div className="text-center">
                  <Mail className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Cultural Guide</h3>
                  <p className="text-gray-600 mb-6">Receive cultural etiquette & preparation guide</p>
                  <div className="space-y-2">
                    <div className="text-xl font-bold text-pink-600">culture@ngonzitours.com</div>
                    <div className="text-gray-500">Cultural preparation guide included</div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/contact">
                  <Users className="h-7 w-7 mr-4" />
                  Book Cultural Tour
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-3 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white bg-transparent px-12 py-6 text-xl font-bold transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/tours">
                  <Globe className="h-7 w-7 mr-4" />
                  Explore Communities
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
