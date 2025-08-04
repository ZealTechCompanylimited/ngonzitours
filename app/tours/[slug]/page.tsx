import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { getTourBySlug, getRelatedTours } from "@/lib/data"
import {
  MapPin,
  Calendar,
  Users,
  Clock,
  Star,
  Check,
  X,
  Camera,
  Utensils,
  Bed,
  Shield,
  ArrowLeft,
  DollarSign,
  Award,
  Heart,
  Share2,
  Sparkles,
  Eye,
  Plane,
} from "lucide-react"

interface TourPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: TourPageProps): Promise<Metadata> {
  const tour = getTourBySlug(params.slug)
  if (!tour) {
    return {
      title: "Tour Not Found - Ngonzi Tours",
    }
  }
  return {
    title: `${tour.title} - Ngonzi Tours`,
    description: tour.description,
    openGraph: {
      title: tour.title,
      description: tour.description,
      images: tour.images,
    },
  }
}

export default function TourPage({ params }: TourPageProps) {
  const tour = getTourBySlug(params.slug)
  if (!tour) {
    notFound()
  }
  const relatedTours = getRelatedTours(tour.id)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Enhanced Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <Image src={tour.images[0] || "/placeholder.svg"} alt={tour.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        {/* Animated overlay elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-blue-400/20 rounded-full blur-lg animate-pulse delay-1000" />

        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-20">
            <div className="max-w-5xl text-white">
              <Link
                href="/tours"
                className="inline-flex items-center gap-3 mb-8 text-white/80 hover:text-white transition-all duration-300 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 hover:bg-white/20"
              >
                <ArrowLeft className="h-5 w-5" />
                Back to Tours
              </Link>

              <div className="flex flex-wrap items-center gap-6 mb-6">
                <Badge className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-4 py-2 text-sm font-semibold">
                  {tour.category}
                </Badge>
                <Badge className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 font-semibold">
                  {tour.difficulty}
                </Badge>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">4.9/5 (127 reviews)</span>
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

              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">{tour.title}</h1>
              <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-4xl leading-relaxed">{tour.description}</p>

              <div className="flex flex-wrap items-center gap-8 text-white/90 mb-12 text-lg">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <MapPin className="h-6 w-6" />
                  <span className="font-medium">{tour.location}</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <Clock className="h-6 w-6" />
                  <span className="font-medium">{tour.duration}</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <Users className="h-6 w-6" />
                  <span className="font-medium">{tour.groupSize}</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <Calendar className="h-6 w-6" />
                  <span className="font-medium">{tour.bestTime}</span>
                </div>
              </div>

              <div className="flex items-center gap-8 mb-8">
                <div className="text-4xl md:text-5xl font-bold">
                  ${tour.price}
                  <span className="text-xl font-normal opacity-75 ml-2">per person</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link href="/booking">
                    <Heart className="h-6 w-6 mr-3" />
                    Book Now
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent px-10 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link href="/contact">
                    <Plane className="h-6 w-6 mr-3" />
                    Get Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Quick Stats */}
      <section className="py-16 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-emerald-50/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Clock, value: tour.duration, label: "Duration", color: "emerald" },
              { icon: Users, value: tour.groupSize, label: "Group Size", color: "blue" },
              { icon: Award, value: tour.difficulty, label: "Difficulty", color: "orange" },
              { icon: DollarSign, value: `$${tour.price}`, label: "Per Person", color: "purple" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`bg-${stat.color}-100 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <stat.icon className={`h-10 w-10 text-${stat.color}-600`} />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-3">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Tour Details */}
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
                  value="itinerary"
                  className="text-lg py-3 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Itinerary
                </TabsTrigger>
                <TabsTrigger
                  value="inclusions"
                  className="text-lg py-3 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Inclusions
                </TabsTrigger>
                <TabsTrigger
                  value="gallery"
                  className="text-lg py-3 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Gallery
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-8">
                <div className="grid lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-2 space-y-10">
                    <Card className="shadow-xl border-0 bg-white">
                      <CardHeader className="pb-6">
                        <CardTitle className="text-3xl flex items-center gap-3">
                          <Sparkles className="h-8 w-8 text-blue-600" />
                          Tour Overview
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="prose prose-lg max-w-none">
                        <p className="text-gray-600 leading-relaxed mb-8 text-lg">{tour.longDescription}</p>

                        <h3 className="text-2xl font-bold mt-8 mb-6 text-gray-900">Tour Highlights</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          {tour.highlights.map((highlight: string, index: number) => (
                            <div
                              key={index}
                              className="flex items-start gap-3 p-6 bg-gradient-to-br from-emerald-50 to-white rounded-xl border border-emerald-200 hover:shadow-lg transition-all duration-300"
                            >
                              <Star className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                              <span className="text-gray-700 font-medium leading-relaxed">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 to-white">
                      <CardContent className="p-8">
                        <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-3 text-xl">
                          <Shield className="h-6 w-6" />
                          Safety & Expert Guidance
                        </h4>
                        <p className="text-blue-800 leading-relaxed text-lg">
                          All our tours are led by experienced, certified guides with extensive knowledge of local
                          conditions, wildlife behavior, and emergency procedures. We maintain the highest safety
                          standards and provide comprehensive support throughout your adventure.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <Card className="sticky top-8 shadow-xl border-0 bg-gradient-to-br from-white to-gray-50">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                          <DollarSign className="h-7 w-7 text-blue-600" />
                          Booking Information
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-4">
                          {[
                            { label: "Duration", value: tour.duration },
                            { label: "Difficulty", value: tour.difficulty, badge: true },
                            { label: "Group Size", value: tour.groupSize },
                            { label: "Best Time", value: tour.bestTime },
                            { label: "Location", value: tour.location },
                          ].map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0"
                            >
                              <span className="font-medium text-gray-700">{item.label}:</span>
                              {item.badge ? (
                                <Badge variant="outline" className="text-sm">
                                  {item.value}
                                </Badge>
                              ) : (
                                <span className="text-gray-900 font-semibold">{item.value}</span>
                              )}
                            </div>
                          ))}
                        </div>

                        <div className="pt-6 border-t border-gray-200">
                          <div className="text-center mb-6">
                            <div className="text-4xl font-bold text-blue-600 mb-2">${tour.price}</div>
                            <div className="text-gray-600 font-medium">per person</div>
                          </div>
                          <Button
                            className="w-full mb-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                            size="lg"
                            asChild
                          >
                            <Link href="/booking">Book This Tour</Link>
                          </Button>
                          <Button
                            variant="outline"
                            className="w-full bg-transparent border-2 py-3 text-lg font-semibold hover:bg-gray-50 transition-all duration-300"
                            size="lg"
                            asChild
                          >
                            <Link href="/contact">Get Custom Quote</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Rest of the tabs content with enhanced styling... */}
              <TabsContent value="itinerary" className="mt-8">
                <Card className="shadow-xl border-0 bg-white">
                  <CardHeader>
                    <CardTitle className="text-3xl flex items-center gap-3">
                      <Calendar className="h-8 w-8 text-blue-600" />
                      Day-by-Day Itinerary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full space-y-4">
                      {tour.itinerary.map((day, index) => (
                        <AccordionItem
                          key={index}
                          value={`day-${day.day}`}
                          className="border-2 border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                        >
                          <AccordionTrigger className="text-left px-6 py-6 hover:no-underline">
                            <div className="flex items-center gap-6">
                              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                {day.day}
                              </div>
                              <div>
                                <div className="font-bold text-xl text-gray-900 mb-2">
                                  Day {day.day}: {day.title}
                                </div>
                                <div className="text-gray-600 leading-relaxed">{day.description}</div>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-6">
                            <div className="pl-18 space-y-6">
                              <div>
                                <h4 className="font-bold mb-4 text-gray-900 flex items-center gap-3 text-lg">
                                  <Clock className="h-5 w-5 text-blue-600" />
                                  Activities:
                                </h4>
                                <ul className="space-y-3">
                                  {day.activities.map((activity: string, actIndex: number) => (
                                    <li key={actIndex} className="flex items-start gap-4">
                                      <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                                      <span className="text-gray-700 leading-relaxed">{activity}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              {day.accommodation && (
                                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                                  <Bed className="h-5 w-5 text-blue-600" />
                                  <span className="font-semibold text-blue-900">Accommodation:</span>
                                  <span className="text-blue-800">{day.accommodation}</span>
                                </div>
                              )}
                              {day.meals && (
                                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200">
                                  <Utensils className="h-5 w-5 text-orange-600" />
                                  <span className="font-semibold text-orange-900">Meals:</span>
                                  <span className="text-orange-800">{day.meals.join(", ")}</span>
                                </div>
                              )}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="inclusions" className="mt-8">
                <div className="grid md:grid-cols-2 gap-12">
                  <Card className="shadow-xl border-0 bg-gradient-to-br from-emerald-50 to-white">
                    <CardHeader>
                      <CardTitle className="text-2xl text-emerald-700 flex items-center gap-3">
                        <Check className="h-7 w-7" />
                        What's Included
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {tour.includes.map((item: string, index: number) => (
                          <div
                            key={index}
                            className="flex items-start gap-4 p-4 bg-white rounded-xl border border-emerald-200 hover:shadow-md transition-all duration-300"
                          >
                            <Check className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-xl border-0 bg-gradient-to-br from-red-50 to-white">
                    <CardHeader>
                      <CardTitle className="text-2xl text-red-700 flex items-center gap-3">
                        <X className="h-7 w-7" />
                        What's Not Included
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {tour.excludes.map((item: string, index: number) => (
                          <div
                            key={index}
                            className="flex items-start gap-4 p-4 bg-white rounded-xl border border-red-200 hover:shadow-md transition-all duration-300"
                          >
                            <X className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="gallery" className="mt-8">
                <Card className="shadow-xl border-0 bg-white">
                  <CardHeader>
                    <CardTitle className="text-3xl flex items-center gap-3">
                      <Camera className="h-8 w-8 text-blue-600" />
                      Photo Gallery
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {tour.images.map((image, index) => (
                        <div
                          key={index}
                          className="relative h-64 rounded-xl overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${tour.title} ${index + 1}`}
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
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Enhanced Related Tours */}
      {relatedTours.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-emerald-100 text-blue-700 rounded-full px-6 py-3 mb-6 border border-blue-200">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="font-semibold">Similar Adventures</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Similar Tours</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover more incredible adventures that might interest you
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {relatedTours.map((relatedTour) => (
                <Card
                  key={relatedTour.id}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-500 group bg-white transform hover:-translate-y-2"
                >
                  <div className="relative h-56">
                    <Image
                      src={relatedTour.images[0] || "/placeholder.svg"}
                      alt={relatedTour.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold">
                      {relatedTour.category}
                    </Badge>
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                      <span className="text-lg font-bold text-emerald-600">${relatedTour.price}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-white/90 text-sm font-medium ml-2">4.8</span>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2 group-hover:text-blue-600 transition-colors text-xl">
                      {relatedTour.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3 text-gray-600 leading-relaxed">
                      {relatedTour.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <span className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
                        <Clock className="h-4 w-4" />
                        {relatedTour.duration}
                      </span>
                      <span className="flex items-center gap-2 bg-blue-100 rounded-full px-3 py-1">
                        <Award className="h-4 w-4" />
                        {relatedTour.difficulty}
                      </span>
                      <span className="flex items-center gap-2 bg-emerald-100 rounded-full px-3 py-1">
                        <Users className="h-4 w-4" />
                        {relatedTour.groupSize}
                      </span>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-2.5 font-semibold shadow-md hover:shadow-blue-500/25 transition-all duration-300"
                      asChild
                    >
                      <Link href={`/tours/${relatedTour.slug}`}>
                        <Eye className="h-4 w-4 mr-2" />
                        View Tour Details
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-10" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Sparkles className="h-5 w-5 text-yellow-300" />
              <span className="font-semibold">Your Safety is Our Priority</span>
            </div>

            <Shield className="h-16 w-16 mx-auto mb-8 text-white/80" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Your Safety is Our Priority</h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
              All our tours are led by experienced, certified guides with extensive knowledge of local conditions,
              wildlife behavior, and emergency procedures. We maintain the highest safety standards and provide
              comprehensive support throughout your adventure.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/booking">Book This Tour</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent px-10 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/contact">Ask Questions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
