import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  MapPin,
  Thermometer,
  Calendar,
  Camera,
  Plane,
  Clock,
  Users,
  Star,
  Info,
  TreePine,
  Mountain,
  Waves,
  Car,
  Heart,
  Share2,
  Globe,
  Eye,
  Sparkles,
} from "lucide-react"
import { destinations, tours } from "@/lib/data"

interface DestinationPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: DestinationPageProps): Promise<Metadata> {
  const destination = destinations.find((d) => d.slug === params.slug)

  if (!destination) {
    return {
      title: "Destination Not Found - Ngonzi Tours",
    }
  }

  return {
    title: `${destination.name} - Ngonzi Tours`,
    description: destination.description,
    openGraph: {
      title: destination.name,
      description: destination.description,
      images: [destination.images[0]],
    },
  }
}

export default function DestinationDetailPage({ params }: DestinationPageProps) {
  const destination = destinations.find((d) => d.slug === params.slug)

  if (!destination) {
    notFound()
  }

  // Find tours available for this destination
  const availableTours = tours
    .filter(
      (tour) =>
        tour.location.toLowerCase().includes(destination.name.toLowerCase()) ||
        tour.title.toLowerCase().includes(destination.name.toLowerCase()) ||
        destination.tours.includes(tour.slug),
    )
    .slice(0, 6)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Enhanced Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <Image
          src={destination.images[0] || "/placeholder.svg"}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        {/* Animated overlay elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-blue-400/20 rounded-full blur-lg animate-pulse delay-1000" />

        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-20">
            <div className="max-w-5xl text-white">
              <Link
                href="/destinations"
                className="inline-flex items-center gap-3 mb-8 text-white/80 hover:text-white transition-all duration-300 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 hover:bg-white/20"
              >
                <ArrowLeft className="h-5 w-5" />
                Back to Destinations
              </Link>

              <div className="flex flex-wrap items-center gap-6 mb-6">
                <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 text-sm font-semibold">
                  {destination.country}
                </Badge>
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-3 text-lg font-medium">4.8 (245 reviews)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-white hover:bg-white/20 rounded-full p-3 backdrop-blur-sm border border-white/20"
                  >
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-white hover:bg-white/20 rounded-full p-3 backdrop-blur-sm border border-white/20"
                  >
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">{destination.name}</h1>
              <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-4xl leading-relaxed">
                {destination.description}
              </p>

              <div className="flex flex-wrap items-center gap-8 text-white/90 mb-12 text-lg">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <MapPin className="h-6 w-6" />
                  <span className="font-medium">{destination.country}</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <Thermometer className="h-6 w-6" />
                  <span className="font-medium">{destination.climate}</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <Calendar className="h-6 w-6" />
                  <span className="font-medium">{destination.bestTimeToVisit}</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <Globe className="h-6 w-6" />
                  <span className="font-medium">East Africa</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Eye className="h-6 w-6 mr-3" />
                  View Tours
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent px-10 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link href="/contact">
                    <Plane className="h-6 w-6 mr-3" />
                    Plan Your Visit
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Destination Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-12 bg-white shadow-lg rounded-xl p-2 border">
                <TabsTrigger
                  value="overview"
                  className="text-lg py-3 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="attractions"
                  className="text-lg py-3 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Attractions
                </TabsTrigger>
                <TabsTrigger
                  value="wildlife"
                  className="text-lg py-3 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Wildlife
                </TabsTrigger>
                <TabsTrigger
                  value="planning"
                  className="text-lg py-3 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Planning
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-10">
                <div className="grid lg:grid-cols-3 gap-10">
                  <div className="lg:col-span-2 space-y-10">
                    <Card className="shadow-xl border-0 bg-white">
                      <CardHeader className="pb-6">
                        <CardTitle className="text-3xl flex items-center gap-3">
                          <Sparkles className="h-8 w-8 text-blue-600" />
                          About {destination.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="prose prose-lg max-w-none">
                        <p className="text-gray-600 leading-relaxed mb-8 text-lg">{destination.longDescription}</p>

                        <h3 className="text-2xl font-bold mt-8 mb-6 text-gray-900">Key Features</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                          {[
                            {
                              icon: TreePine,
                              title: "Natural Beauty",
                              desc: "Stunning landscapes ranging from savannas to forests, offering diverse ecosystems and breathtaking scenery.",
                              color: "emerald",
                            },
                            {
                              icon: Camera,
                              title: "Photography",
                              desc: "Incredible photo opportunities with wildlife, landscapes, and cultural interactions throughout the region.",
                              color: "blue",
                            },
                            {
                              icon: Mountain,
                              title: "Adventure",
                              desc: "Multiple adventure activities from wildlife viewing to cultural experiences and outdoor exploration.",
                              color: "orange",
                            },
                            {
                              icon: Waves,
                              title: "Accessibility",
                              desc: "Well-connected destination with good infrastructure and various accommodation options for all budgets.",
                              color: "purple",
                            },
                          ].map((feature, index) => (
                            <div
                              key={index}
                              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                            >
                              <h4 className="font-bold mb-3 flex items-center gap-3 text-lg">
                                <div className={`bg-${feature.color}-100 rounded-full p-2`}>
                                  <feature.icon className={`h-6 w-6 text-${feature.color}-600`} />
                                </div>
                                {feature.title}
                              </h4>
                              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Enhanced Image Gallery */}
                    <Card className="shadow-xl border-0 bg-white">
                      <CardHeader>
                        <CardTitle className="text-3xl flex items-center gap-3">
                          <Camera className="h-8 w-8 text-blue-600" />
                          Gallery
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {destination.images.map((image, index) => (
                            <div key={index} className="relative h-64 rounded-xl overflow-hidden group shadow-lg">
                              <Image
                                src={image || "/placeholder.svg"}
                                alt={`${destination.name} ${index + 1}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Button size="sm" className="bg-white/90 text-gray-900 hover:bg-white">
                                  <Eye className="h-4 w-4 mr-2" />
                                  View
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Enhanced Sidebar */}
                  <div className="space-y-8">
                    <Card className="sticky top-6 shadow-xl border-0 bg-gradient-to-br from-blue-50 to-white">
                      <CardHeader>
                        <CardTitle className="text-2xl flex items-center gap-3">
                          <Info className="h-7 w-7 text-blue-600" />
                          Quick Facts
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-4">
                          {[
                            { label: "Country", value: destination.country },
                            { label: "Best Time", value: destination.bestTimeToVisit },
                            { label: "Climate", value: destination.climate },
                            { label: "Language", value: "English, Swahili" },
                            { label: "Currency", value: destination.country === "Tanzania" ? "TZS" : "KES" },
                          ].map((fact, index) => (
                            <div
                              key={index}
                              className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0"
                            >
                              <span className="text-gray-600 font-medium">{fact.label}:</span>
                              <span className="font-bold text-gray-900">{fact.value}</span>
                            </div>
                          ))}
                        </div>

                        <Separator />

                        <div className="space-y-4">
                          <Button
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                            size="lg"
                          >
                            <Eye className="h-5 w-5 mr-2" />
                            View Available Tours
                          </Button>
                          <Button
                            variant="outline"
                            className="w-full bg-transparent border-2 py-3 text-lg font-semibold hover:bg-gray-50 transition-all duration-300"
                            size="lg"
                            asChild
                          >
                            <Link href="/contact">
                              <Plane className="h-5 w-5 mr-2" />
                              Get Custom Itinerary
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="shadow-xl border-0 bg-gradient-to-br from-emerald-50 to-white">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <Info className="h-6 w-6 text-emerald-600" />
                          Travel Tips
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {destination.travelTips.map((tip, index) => (
                          <div
                            key={index}
                            className="bg-gradient-to-r from-emerald-100 to-blue-100 border border-emerald-200 rounded-xl p-4 hover:shadow-md transition-all duration-300"
                          >
                            <p className="text-emerald-800 font-medium leading-relaxed">{tip}</p>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Other tab contents remain similar but with enhanced styling */}
              <TabsContent value="attractions" className="space-y-8">
                <Card className="shadow-xl border-0 bg-white">
                  <CardHeader>
                    <CardTitle className="text-3xl flex items-center gap-3">
                      <MapPin className="h-8 w-8 text-blue-600" />
                      Top Attractions
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Must-see places and experiences in {destination.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      {destination.highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="border-2 border-gray-100 rounded-xl p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300 bg-gradient-to-br from-white to-gray-50"
                        >
                          <h3 className="text-2xl font-bold mb-4 text-gray-900">{highlight}</h3>
                          <p className="text-gray-600 mb-6 leading-relaxed">
                            Experience this incredible attraction that showcases the best of {destination.name}'s
                            natural beauty and cultural heritage.
                          </p>
                          <div className="flex items-center gap-6 text-sm text-gray-500">
                            <span className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
                              <Clock className="h-4 w-4" />
                              2-4 hours
                            </span>
                            <span className="flex items-center gap-2 bg-yellow-100 rounded-full px-3 py-1">
                              <Star className="h-4 w-4 text-yellow-600" />
                              4.{Math.floor(Math.random() * 3) + 6}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="wildlife" className="space-y-8">
                <Card className="shadow-xl border-0 bg-white">
                  <CardHeader>
                    <CardTitle className="text-3xl flex items-center gap-3">
                      <TreePine className="h-8 w-8 text-emerald-600" />
                      Wildlife & Nature
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Discover the incredible biodiversity of {destination.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                      {[
                        {
                          emoji: "🦁",
                          name: "Lions",
                          desc: "Majestic predators often seen in prides across the savanna",
                        },
                        { emoji: "🐘", name: "Elephants", desc: "Large herds of African elephants roaming freely" },
                        { emoji: "🦓", name: "Zebras", desc: "Distinctive striped horses in large migrating herds" },
                        {
                          emoji: "🦏",
                          name: "Rhinos",
                          desc: "Rare and endangered species protected in conservation areas",
                        },
                        { emoji: "🐆", name: "Leopards", desc: "Elusive spotted cats often found resting in trees" },
                        {
                          emoji: "🦌",
                          name: "Antelopes",
                          desc: "Various species including gazelles, impalas, and wildebeest",
                        },
                      ].map((animal, index) => (
                        <div
                          key={index}
                          className="text-center bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                        >
                          <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 shadow-md">
                            <span className="text-4xl">{animal.emoji}</span>
                          </div>
                          <h3 className="font-bold mb-3 text-lg text-gray-900">{animal.name}</h3>
                          <p className="text-gray-600 leading-relaxed">{animal.desc}</p>
                        </div>
                      ))}
                    </div>

                    <Separator className="my-12" />

                    <div>
                      <h3 className="text-2xl font-bold mb-8 text-gray-900">Best Wildlife Viewing Times</h3>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                          <h4 className="font-bold text-orange-800 mb-4 text-xl">Early Morning (6:00 - 9:00 AM)</h4>
                          <p className="text-orange-700 leading-relaxed">
                            Animals are most active during cooler morning hours. Perfect for predator sightings and bird
                            watching.
                          </p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                          <h4 className="font-bold text-purple-800 mb-4 text-xl">Late Afternoon (4:00 - 7:00 PM)</h4>
                          <p className="text-purple-700 leading-relaxed">
                            Second peak activity period with excellent lighting for photography and increased animal
                            movement.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="planning" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-10">
                  <Card className="shadow-xl border-0 bg-white">
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center gap-3">
                        <Plane className="h-7 w-7 text-blue-600" />
                        Getting There
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-200">
                        <h4 className="font-bold mb-4 flex items-center gap-3 text-lg">
                          <Plane className="h-6 w-6 text-blue-600" />
                          By Air
                        </h4>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {destination.country === "Tanzania"
                            ? "Fly into Kilimanjaro International Airport (JRO) or Julius Nyerere International Airport (DAR)"
                            : "Fly into Jomo Kenyatta International Airport (NBO) or Moi International Airport (MBA)"}
                        </p>
                        <ul className="text-gray-500 space-y-2">
                          <li>• Direct flights from major international cities</li>
                          <li>• Domestic connections available</li>
                          <li>• Airport transfers can be arranged</li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl border border-emerald-200">
                        <h4 className="font-bold mb-4 flex items-center gap-3 text-lg">
                          <Car className="h-6 w-6 text-emerald-600" />
                          By Road
                        </h4>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          Road access available from major cities with 4WD vehicles recommended for some areas.
                        </p>
                        <ul className="text-gray-500 space-y-2">
                          <li>• Well-maintained main roads</li>
                          <li>• Professional drivers available</li>
                          <li>• Journey times vary by season</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-xl border-0 bg-white">
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center gap-3">
                        <Mountain className="h-7 w-7 text-emerald-600" />
                        Accommodation
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {[
                        {
                          title: "Luxury Lodges",
                          desc: "High-end safari lodges with premium amenities, gourmet dining, and exceptional service.",
                          color: "purple",
                        },
                        {
                          title: "Tented Camps",
                          desc: "Authentic safari experience with comfortable tented accommodation in prime locations.",
                          color: "orange",
                        },
                        {
                          title: "Budget Options",
                          desc: "Affordable guesthouses and campsites for budget-conscious travelers.",
                          color: "emerald",
                        },
                      ].map((acc, index) => (
                        <div
                          key={index}
                          className={`bg-gradient-to-br from-${acc.color}-50 to-white p-6 rounded-xl border border-${acc.color}-200 hover:shadow-lg transition-all duration-300`}
                        >
                          <h4 className="font-bold mb-3 text-lg text-gray-900">{acc.title}</h4>
                          <p className="text-gray-600 leading-relaxed">{acc.desc}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                <Card className="shadow-xl border-0 bg-white">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <Info className="h-7 w-7 text-blue-600" />
                      Essential Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-8">
                      {[
                        {
                          title: "Visa Requirements",
                          color: "emerald",
                          items: [
                            "Tourist visa required",
                            "Available online or on arrival",
                            "Passport valid 6+ months",
                            "Yellow fever certificate if applicable",
                          ],
                        },
                        {
                          title: "Health & Safety",
                          color: "blue",
                          items: [
                            "Malaria prophylaxis recommended",
                            "Travel insurance advised",
                            "Safe drinking water available",
                            "Professional guides provided",
                          ],
                        },
                        {
                          title: "What to Pack",
                          color: "purple",
                          items: [
                            "Neutral colored clothing",
                            "Sun protection essentials",
                            "Binoculars and camera",
                            "Comfortable walking shoes",
                          ],
                        },
                      ].map((section, index) => (
                        <div
                          key={index}
                          className={`bg-gradient-to-br from-${section.color}-50 to-white p-6 rounded-xl border border-${section.color}-200`}
                        >
                          <h4 className={`font-bold mb-4 text-${section.color}-700 text-lg`}>{section.title}</h4>
                          <ul className="text-gray-600 space-y-2">
                            {section.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-2">
                                <span className="text-gray-400 mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Available Tours Section */}
      {availableTours.length > 0 && (
        <section id="tours" className="py-20 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-emerald-100 text-blue-700 rounded-full px-6 py-3 mb-6 border border-blue-200">
                <Camera className="h-5 w-5" />
                <span className="font-semibold">Available Tours</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Tours to {destination.name}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our carefully crafted tours to this incredible destination
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {availableTours.map((tour) => (
                <Card
                  key={tour.slug}
                  className="overflow-hidden hover:shadow-xl transition-all duration-500 bg-white transform hover:-translate-y-1"
                >
                  <div className="relative h-56">
                    <Image src={tour.images[0] || "/placeholder.svg"} alt={tour.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold">
                        {tour.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                        <span className="text-lg font-bold text-emerald-600">${tour.price}</span>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2 text-xl">{tour.title}</CardTitle>
                    <CardDescription className="line-clamp-3 text-gray-600 leading-relaxed">
                      {tour.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <span className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
                        <Clock className="h-4 w-4" />
                        {tour.duration}
                      </span>
                      <span className="flex items-center gap-2 bg-blue-100 rounded-full px-3 py-1">
                        <Users className="h-4 w-4" />
                        Max {tour.groupSize}
                      </span>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-2.5 font-semibold shadow-md hover:shadow-blue-500/25 transition-all duration-300"
                      asChild
                    >
                      <Link href={`/tours/${tour.slug}`}>
                        <Eye className="h-4 w-4 mr-2" />
                        View Tour Details
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {availableTours.length >= 6 && (
              <div className="text-center mt-16">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 px-10 py-4 text-lg font-semibold hover:bg-gray-50 transition-all duration-300"
                  asChild
                >
                  <Link href="/tours">View All Tours</Link>
                </Button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-10" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Sparkles className="h-5 w-5 text-yellow-300" />
              <span className="font-semibold">Ready to Explore?</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Explore {destination.name}?</h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Let us help you plan the perfect adventure to this incredible destination with expert guides and
              unforgettable experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/tours">
                  <Camera className="h-6 w-6 mr-3" />
                  Browse Tours
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent px-10 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/contact">
                  <Plane className="h-6 w-6 mr-3" />
                  Get Custom Itinerary
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
