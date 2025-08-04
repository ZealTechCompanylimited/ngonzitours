import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin, Clock, User, BookOpen, Compass, Globe, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Travel Guide - Ngonzi Tours",
  description:
    "Your comprehensive guide to traveling in Tanzania and Kenya. Find essential tips, packing lists, and cultural insights.",
}

const travelGuideArticles = [
  {
    slug: "packing-for-safari",
    title: "Essential Packing List for Your Safari",
    description:
      "Don't know what to bring? Our comprehensive guide ensures you're well-prepared for your African adventure.",
    image: "/images/chui.jpg",
    category: "Preparation",
    readTime: "8 min read",
    author: "Sarah Mitchell",
    featured: true,
  },
  {
    slug: "health-safety-tips",
    title: "Health and Safety Tips for East Africa",
    description:
      "Stay healthy and safe on your trip with our expert advice on vaccinations, medications, and local precautions.",
    image: "/images/nyumbu.jpeg",
    category: "Health",
    readTime: "10 min read",
    author: "Dr. James Mwangi",
    featured: true,
  },
  {
    slug: "cultural-etiquette",
    title: "Cultural Etiquette in Tanzania and Kenya",
    description:
      "Learn about local customs and traditions to ensure respectful and enriching interactions with communities.",
    image: "/images/picha-man.jpg",
    category: "Culture",
    readTime: "7 min read",
    author: "Grace Kimani",
    featured: false,
  },
  {
    slug: "best-time-to-visit",
    title: "Best Time to Visit for Wildlife Viewing",
    description: "Discover the optimal seasons for witnessing the Great Migration and other wildlife spectacles.",
    image: "/images/Serengeti.jpg",
    category: "Planning",
    readTime: "9 min read",
    author: "Michael Loibooki",
    featured: false,
  },
  {
    slug: "visa-requirements",
    title: "Visa and Entry Requirements",
    description:
      "Understand the necessary documentation for entering Tanzania and Kenya, including visa application processes.",
    image: "/images/stone-town.jpg",
    category: "Travel",
    readTime: "6 min read",
    author: "Immigration Expert",
    featured: false,
  },
  {
    slug: "local-cuisine",
    title: "A Taste of East Africa: Local Cuisine",
    description:
      "Explore the delicious flavors of Tanzanian and Kenyan food, from traditional dishes to popular snacks.",
    image: "/images/mnemba.jpg",
    category: "Food",
    readTime: "8 min read",
    author: "Chef Amina Hassan",
    featured: false,
  },
]

const categories = [
  { name: "All", count: 6, icon: Globe },
  { name: "Preparation", count: 1, icon: BookOpen },
  { name: "Health", count: 1, icon: Heart },
  { name: "Culture", count: 1, icon: Compass },
  { name: "Planning", count: 1, icon: MapPin },
  { name: "Travel", count: 1, icon: ArrowRight },
  { name: "Food", count: 1, icon: User },
]

const getCategoryColor = (category: string) => {
  const colors = {
    "Preparation": "bg-blue-100 text-blue-800 border-blue-200",
    "Health": "bg-red-100 text-red-800 border-red-200",
    "Culture": "bg-purple-100 text-purple-800 border-purple-200",
    "Planning": "bg-green-100 text-green-800 border-green-200",
    "Travel": "bg-orange-100 text-orange-800 border-orange-200",
    "Food": "bg-yellow-100 text-yellow-800 border-yellow-200",
  }
  return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800 border-gray-200"
}

export default function TravelGuidePage() {
  const featuredArticles = travelGuideArticles.filter(article => article.featured)
  const regularArticles = travelGuideArticles.filter(article => !article.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-green-700 to-green-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-green-800/90" />
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
        </div>
        
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex items-center justify-center gap-2 mb-6">
              <BookOpen className="h-8 w-8" />
              <span className="text-lg font-medium tracking-wide">EXPERT TRAVEL ADVICE</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Your Complete
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Travel Guide
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Everything you need to know for an unforgettable adventure in Tanzania and Kenya. 
              From packing essentials to cultural insights, we've got you covered.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                <BookOpen className="mr-2 h-5 w-5" />
                Start Reading
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg bg-transparent">
                <Compass className="mr-2 h-5 w-5" />
                Explore Tours
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" fill="none" className="w-full h-12 text-slate-50">
            <path d="M0,0V120H1200V0C1200,0 600,60 0,0Z" fill="currentColor"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">6</div>
              <div className="text-gray-600">Expert Guides</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">2</div>
              <div className="text-gray-600">Countries Covered</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
              <div className="text-gray-600">Happy Travelers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <Button
                  key={category.name}
                  variant="outline"
                  className="bg-white hover:bg-green-50 hover:border-green-300 hover:text-green-700 transition-all duration-200"
                >
                  <IconComponent className="mr-2 h-4 w-4" />
                  {category.name}
                  <span className="ml-2 bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs">
                    {category.count}
                  </span>
                </Button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Guides</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most comprehensive and essential guides to help you prepare for your East African adventure
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {featuredArticles.map((article) => (
              <Card key={article.slug} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white">
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getCategoryColor(article.category)} border font-medium`}>
                      {article.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                      Featured
                    </div>
                  </div>
                </div>
                
                <CardHeader className="p-6">
                  <CardTitle className="text-xl md:text-2xl group-hover:text-green-600 transition-colors duration-300 leading-tight">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-6 pt-0">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link href={`/travel-guide/${article.slug}`} className="block">
                    <Button className="w-full group-hover:bg-green-700 transition-all duration-300 bg-green-600 hover:bg-green-700">
                      Read Complete Guide
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">All Travel Guides</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our complete collection of travel guides and insider tips
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {travelGuideArticles.map((article) => (
              <Card key={article.slug} className="group h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <Badge className={`${getCategoryColor(article.category)} border text-xs font-medium`}>
                      {article.category}
                    </Badge>
                  </div>
                  {article.featured && (
                    <div className="absolute top-3 right-3">
                      <div className="bg-yellow-400 text-yellow-900 rounded-full px-2 py-1 text-xs font-bold">
                        ⭐ Featured
                      </div>
                    </div>
                  )}
                </div>
                
                <CardHeader className="p-4 flex-grow">
                  <CardTitle className="text-lg group-hover:text-green-600 transition-colors duration-300 leading-tight line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-3 text-sm leading-relaxed">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-4 pt-0 mt-auto">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span className="truncate max-w-20">{article.author}</span>
                    </div>
                  </div>
                  
                  <Link href={`/travel-guide/${article.slug}`} className="block">
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all duration-300"
                    >
                      Read Guide
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Travel Tips</h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest travel guides, insider tips, and exclusive offers delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Start Your Adventure?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Now that you're armed with expert knowledge, it's time to book your dream safari experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-3 text-lg">
                <MapPin className="mr-2 h-5 w-5" />
                View Safari Packages
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 text-lg">
                <User className="mr-2 h-5 w-5" />
                Speak with Expert
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}