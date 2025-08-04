import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageCarousel } from "@/components/image-carousel"
import { Star, MapPin, Clock, Users, Award, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const heroImages = [
  "/images/Serengeti.jpg",
  "/images/twiga.jpg",
  "/images/zebra.jpg",
  "/images/swala.jpg",
  "/images/chui.jpg",
]

const tourCategories = [
  {
    title: "Wildlife Safari",
    description: "Experience the Big Five in their natural habitat across Tanzania's premier national parks.",
    image: "/images/swala.jpg",
    price: "From $1,200",
    duration: "3-7 days",
    slug: "wildlife-safari",
  },
  {
    title: "Mountain Climbing",
    description: "Conquer Mount Kilimanjaro, Africa's highest peak, with our expert guides.",
    image: "/images/gt1.jpg",
    price: "From $1,800",
    duration: "5-9 days",
    slug: "mountain-climbing",
  },
  {
    title: "Beach Holidays",
    description: "Relax on pristine beaches of Zanzibar with crystal clear waters and white sand.",
    image: "/images/mnemba.jpg",
    price: "From $800",
    duration: "3-10 days",
    slug: "beach-holidays",
  },
  {
    title: "Cultural Tours",
    description: "Immerse yourself in authentic Tanzanian culture with local communities.",
    image: "/images/picha-man.jpg",
    price: "From $600",
    duration: "2-5 days",
    slug: "cultural-tours",
  },
  {
    title: "Luxury Safari",
    description: "Premium safari experience with luxury lodges and exclusive game drives.",
    image: "/images/nyumbu.jpeg",
    price: "From $2,500",
    duration: "4-8 days",
    slug: "luxury-safari",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "USA",
    rating: 5,
    comment:
      "Absolutely incredible experience! The wildlife safari exceeded all expectations. Our guide was knowledgeable and the accommodations were perfect.",
  },
  {
    name: "David Smith",
    location: "UK",
    rating: 5,
    comment:
      "Climbing Kilimanjaro with Ngonzi Tours was the adventure of a lifetime. Professional guides, excellent equipment, and unforgettable memories.",
  },
  {
    name: "Maria Garcia",
    location: "Spain",
    rating: 5,
    comment:
      "The cultural tour was eye-opening and authentic. We learned so much about Tanzanian traditions and made lasting connections with local communities.",
  },
]

const features = [
  {
    icon: Award,
    title: "Expert Guides",
    description: "Licensed and experienced local guides with deep knowledge of Tanzania's wildlife and culture.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Comprehensive safety protocols and insurance coverage for all our tours and activities.",
  },
  {
    icon: Users,
    title: "Small Groups",
    description: "Intimate group sizes for personalized attention and better wildlife viewing experiences.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "Born and raised in Tanzania, we know the best spots and hidden gems off the beaten path.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <ImageCarousel images={heroImages} autoPlay={true} interval={5000} />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Discover Tanzania's
            <span className="text-orange-400 block">Wild Beauty</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Experience unforgettable safaris, climb Kilimanjaro, and explore pristine beaches with Tanzania's premier
            tour operator
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3" asChild>
              <Link href="/tours">Explore Tours</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-black text-lg px-8 py-3 bg-transparent"
              asChild
            >
              <Link href="/contact">Plan Your Trip</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tour Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Tour Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From thrilling wildlife encounters to cultural immersion, discover the perfect adventure for your Tanzania
              experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-orange-600 text-white">{category.duration}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription className="text-gray-600">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-orange-600">{category.price}</span>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-gray-500 mr-1" />
                      <span className="text-sm text-gray-500">{category.duration}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700" asChild>
                    <Link href={`/tours/${category.slug}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Ngonzi Tours?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing exceptional experiences that showcase the best of Tanzania while supporting
              local communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Guests Say</h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from travelers who've experienced Tanzania with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready for Your Tanzania Adventure?</h2>
          <p className="text-xl mb-8">
            Let us create a personalized itinerary that matches your dreams and budget. Contact us today to start
            planning your unforgettable journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-orange-600 hover:text-orange-700" asChild>
              <Link href="/booking">Book Your Tour</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
              asChild
            >
              <Link href="/contact">Get Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
