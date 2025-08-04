import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  Clock,
  User,
  Calendar,
  Share2,
  BookOpen,
  ChevronRight,
  Eye,
  ThumbsUp,
  MessageCircle,
  Bookmark,
  Download,
  CheckCircle,
  Star,
  MapPin,
  Info,
} from "lucide-react"

interface TravelGuidePageProps {
  params: {
    slug: string
  }
}

// Travel guide articles data with enhanced structure
const travelGuideArticles = {
  "packing-for-safari": {
    title: "Essential Packing List for Your Safari",
    description:
      "Don't know what to bring? Our comprehensive guide ensures you're well-prepared for your African adventure.",
    image: "/images/chui.jpg",
    author: "Sarah Mitchell",
    publishedAt: "2024-01-20",
    readTime: "8 min read",
    category: "Preparation",
    difficulty: "Beginner",
    views: "12.5k",
    likes: "324",
    tableOfContents: [
      { id: "clothing", title: "Clothing Essentials", level: 1 },
      { id: "photography", title: "Photography Equipment", level: 1 },
      { id: "health-safety", title: "Health and Safety Items", level: 1 },
      { id: "electronics", title: "Electronics and Accessories", level: 1 },
      { id: "what-not-to-pack", title: "What NOT to Pack", level: 1 },
      { id: "packing-tips", title: "Packing Tips", level: 1 },
      { id: "seasonal", title: "Seasonal Considerations", level: 1 },
    ],
    keyTakeaways: [
      "Pack neutral colors to avoid disturbing wildlife",
      "Bring layers for varying temperatures",
      "Don't forget sun protection and insect repellent",
      "Pack light but smart for weight restrictions",
    ],
    content: {
      sections: [
        {
          id: "clothing",
          title: "Clothing Essentials",
          content: `
            <div class="space-y-6">
              <div class="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h4 class="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                  <span class="w-2 h-2 bg-amber-500 rounded-full"></span>
                  Neutral Colors Are Key
                </h4>
                <p class="text-amber-700">Stick to neutral colors like khaki, beige, olive green, and brown. Avoid bright colors (especially red and orange) and black clothing, as these can attract insects or startle wildlife.</p>
              </div>
              
              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-4">
                  <h4 class="font-semibold text-gray-900 text-lg">Essential Items:</h4>
                  <ul class="space-y-3">
                    <li class="flex items-start gap-3">
                      <CheckCircle class="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Long-sleeved shirts:</strong> Protection from sun and insects
                      </div>
                    </li>
                    <li class="flex items-start gap-3">
                      <CheckCircle class="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Lightweight pants:</strong> Essential for morning and evening game drives
                      </div>
                    </li>
                    <li class="flex items-start gap-3">
                      <CheckCircle class="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Warm jacket or fleece:</strong> Mornings and evenings can be surprisingly cold
                      </div>
                    </li>
                    <li class="flex items-start gap-3">
                      <CheckCircle class="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Comfortable walking shoes:</strong> Broken-in hiking boots or sturdy sneakers
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 class="font-semibold text-blue-800 mb-3">Pro Tip</h4>
                  <p class="text-blue-700 text-sm">Pack clothes that can be layered. Safari temperatures can vary dramatically from early morning (10°C) to midday (30°C).</p>
                </div>
              </div>
            </div>
          `,
        },
        {
          id: "photography",
          title: "Photography Equipment",
          content: `
            <div class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 class="font-semibold text-gray-900 text-lg mb-4 flex items-center gap-2">
                    <Camera class="h-5 w-5 text-green-600" />
                    Camera Gear
                  </h4>
                  <ul class="space-y-3">
                    <li class="flex items-start gap-3">
                      <CheckCircle class="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>DSLR or mirrorless camera:</strong> With fast autofocus
                      </div>
                    </li>
                    <li class="flex items-start gap-3">
                      <CheckCircle class="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Telephoto lens:</strong> 70-200mm minimum, 100-400mm preferred
                      </div>
                    </li>
                    <li class="flex items-start gap-3">
                      <CheckCircle class="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Extra batteries:</strong> Cold mornings drain batteries quickly
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 class="font-semibold text-green-800 mb-3">Equipment Protection</h4>
                  <ul class="space-y-2 text-green-700 text-sm">
                    <li>• Camera rain cover for dust and rain</li>
                    <li>• Dry bags to keep equipment safe</li>
                    <li>• Lens cleaning kit for constant dust</li>
                    <li>• Bean bag or tripod for vehicle support</li>
                  </ul>
                </div>
              </div>
            </div>
          `,
        },
        {
          id: "health-safety",
          title: "Health and Safety Items",
          content: `
            <div class="space-y-6">
              <div class="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 class="font-semibold text-red-800 mb-2">Important Health Reminder</h4>
                <p class="text-red-700 text-sm">Consult your doctor 4-6 weeks before travel for vaccinations and malaria prophylaxis recommendations.</p>
              </div>
              
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 class="font-semibold text-gray-900 text-lg mb-4">Medical Kit</h4>
                  <ul class="space-y-2">
                    <li class="flex items-center gap-2">
                      <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Prescription medications (bring extra)</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Malaria prophylaxis (consult doctor)</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>DEET-based insect repellent</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>High SPF sunscreen</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 class="font-semibold text-gray-900 text-lg mb-4">Personal Care</h4>
                  <ul class="space-y-2">
                    <li class="flex items-center gap-2">
                      <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Biodegradable soap and shampoo</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Wet wipes (useful when water is scarce)</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Hand sanitizer</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          `,
        },
      ],
    },
  },
  "health-safety-tips": {
    title: "Health and Safety Tips for East Africa",
    description:
      "Stay healthy and safe on your trip with our expert advice on vaccinations, medications, and local precautions.",
    image: "/images/nyumbu.jpeg",
    author: "Dr. James Mwangi",
    publishedAt: "2024-01-18",
    readTime: "10 min read",
    category: "Health",
    difficulty: "Intermediate",
    views: "8.2k",
    likes: "156",
    tableOfContents: [
      { id: "pre-travel", title: "Pre-Travel Health Preparation", level: 1 },
      { id: "malaria", title: "Malaria Prevention", level: 1 },
      { id: "food-water", title: "Food and Water Safety", level: 1 },
      { id: "common-issues", title: "Common Health Issues", level: 1 },
      { id: "wildlife-safety", title: "Wildlife and Environmental Safety", level: 1 },
    ],
    keyTakeaways: [
      "Get vaccinated 4-6 weeks before travel",
      "Take malaria prophylaxis in high-risk areas",
      "Practice strict food and water safety",
      "Carry comprehensive travel insurance",
    ],
    content: {
      sections: [
        {
          id: "pre-travel",
          title: "Pre-Travel Health Preparation",
          content: `
            <div class="space-y-6">
              <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 class="font-semibold text-blue-800 mb-3 text-lg">Vaccination Timeline</h4>
                <p class="text-blue-700 mb-4">Start your health preparations 4-6 weeks before departure to ensure all vaccinations are effective.</p>
                
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 class="font-medium text-blue-800 mb-2">Required Vaccinations:</h5>
                    <ul class="space-y-1 text-blue-700 text-sm">
                      <li>• Yellow Fever (if coming from infected areas)</li>
                      <li>• COVID-19 (check current requirements)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 class="font-medium text-blue-800 mb-2">Recommended Vaccinations:</h5>
                    <ul class="space-y-1 text-blue-700 text-sm">
                      <li>• Hepatitis A and B</li>
                      <li>• Typhoid</li>
                      <li>• Meningitis</li>
                      <li>• Tetanus/Diphtheria</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          `,
        },
      ],
    },
  },
  "cultural-etiquette": {
    title: "Cultural Etiquette in Tanzania and Kenya",
    description:
      "Learn about local customs and traditions to ensure respectful and enriching interactions with communities.",
    image: "/images/picha-man.jpg",
    author: "Grace Kimani",
    publishedAt: "2024-01-15",
    readTime: "7 min read",
    category: "Culture",
    difficulty: "Beginner",
    views: "15.3k",
    likes: "428",
    tableOfContents: [
      { id: "general-values", title: "General Cultural Values", level: 1 },
      { id: "greetings", title: "Greetings and Social Interactions", level: 1 },
      { id: "dress-code", title: "Dress Code and Appearance", level: 1 },
      { id: "dining", title: "Dining Etiquette", level: 1 },
    ],
    keyTakeaways: [
      "Respect for elders is paramount in East African culture",
      "Use your right hand for greetings and eating",
      "Dress modestly, especially in rural areas",
      "Take time with greetings - don't rush social interactions",
    ],
    content: {
      sections: [
        {
          id: "general-values",
          title: "General Cultural Values",
          content: `
            <div class="space-y-6">
              <div class="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h4 class="font-semibold text-purple-800 mb-3 text-lg flex items-center gap-2">
                  <Globe class="h-5 w-5" />
                  Ubuntu Philosophy
                </h4>
                <p class="text-purple-700 mb-4">Both Tanzania and Kenya embrace the concept of Ubuntu - "I am because we are." This philosophy emphasizes:</p>
                
                <div class="grid md:grid-cols-2 gap-4">
                  <ul class="space-y-2 text-purple-700">
                    <li class="flex items-center gap-2">
                      <CheckCircle class="h-4 w-4 text-purple-600" />
                      Community over individualism
                    </li>
                    <li class="flex items-center gap-2">
                      <CheckCircle class="h-4 w-4 text-purple-600" />
                      Respect for elders
                    </li>
                  </ul>
                  <ul class="space-y-2 text-purple-700">
                    <li class="flex items-center gap-2">
                      <CheckCircle class="h-4 w-4 text-purple-600" />
                      Hospitality to visitors
                    </li>
                    <li class="flex items-center gap-2">
                      <CheckCircle class="h-4 w-4 text-purple-600" />
                      Collective responsibility
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          `,
        },
      ],
    },
  },
  "best-time-to-visit": {
    title: "Best Time to Visit for Wildlife Viewing",
    description: "Discover the optimal seasons for witnessing the Great Migration and other wildlife spectacles.",
    image: "/images/Serengeti.jpg",
    author: "Michael Loibooki",
    publishedAt: "2024-01-12",
    readTime: "9 min read",
    category: "Planning",
    difficulty: "Intermediate",
    views: "22.1k",
    likes: "567",
    tableOfContents: [
      { id: "seasons", title: "Understanding East African Seasons", level: 1 },
      { id: "migration", title: "The Great Migration Calendar", level: 1 },
      { id: "regional", title: "Regional Timing Considerations", level: 1 },
      { id: "wildlife-specific", title: "Wildlife-Specific Timing", level: 1 },
    ],
    keyTakeaways: [
      "Dry season (June-October) offers best weather and wildlife viewing",
      "Great Migration timing varies by location and season",
      "Calving season (January-March) provides unique experiences",
      "Each season has distinct advantages and considerations",
    ],
    content: {
      sections: [
        {
          id: "seasons",
          title: "Understanding East African Seasons",
          content: `
            <div class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h4 class="font-semibold text-yellow-800 mb-3 text-lg">Dry Season (June - October)</h4>
                  <ul class="space-y-2 text-yellow-700">
                    <li class="flex items-start gap-2">
                      <div class="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                      <span><strong>Weather:</strong> Clear skies, minimal rainfall</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <div class="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                      <span><strong>Wildlife:</strong> Concentrated around water sources</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <div class="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                      <span><strong>Vegetation:</strong> Sparse, excellent visibility</span>
                    </li>
                  </ul>
                </div>
                
                <div class="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 class="font-semibold text-green-800 mb-3 text-lg">Wet Season (November - May)</h4>
                  <ul class="space-y-2 text-green-700">
                    <li class="flex items-start gap-2">
                      <div class="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <span><strong>Long Rains:</strong> March - May (heaviest)</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <div class="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <span><strong>Wildlife:</strong> Dispersed, abundant food sources</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <div class="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <span><strong>Vegetation:</strong> Lush and green</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          `,
        },
      ],
    },
  },
  "visa-requirements": {
    title: "Visa and Entry Requirements",
    description:
      "Understand the necessary documentation for entering Tanzania and Kenya, including visa application processes.",
    image: "/images/stone-town.jpg",
    author: "Immigration Expert",
    publishedAt: "2024-01-10",
    readTime: "6 min read",
    category: "Travel",
    difficulty: "Beginner",
    views: "18.7k",
    likes: "392",
    tableOfContents: [
      { id: "tanzania-visa", title: "Tanzania Visa Requirements", level: 1 },
      { id: "kenya-visa", title: "Kenya Visa Requirements", level: 1 },
      { id: "east-african-visa", title: "East African Tourist Visa", level: 1 },
      { id: "entry-points", title: "Entry Points", level: 1 },
    ],
    keyTakeaways: [
      "Most visitors need visas for both Tanzania and Kenya",
      "Online e-visa applications are recommended",
      "East African Tourist Visa covers Kenya, Uganda, and Rwanda",
      "Yellow fever vaccination may be required",
    ],
    content: {
      sections: [
        {
          id: "tanzania-visa",
          title: "Tanzania Visa Requirements",
          content: `
            <div class="space-y-6">
              <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 class="font-semibold text-blue-800 mb-3 text-lg">Visa Types and Costs</h4>
                
                <div class="grid md:grid-cols-3 gap-4">
                  <div class="bg-white rounded-lg p-4 border border-blue-100">
                    <h5 class="font-medium text-blue-800 mb-2">Tourist Visa (Single Entry)</h5>
                    <ul class="space-y-1 text-blue-700 text-sm">
                      <li>• Validity: 90 days</li>
                      <li>• Cost: $50 USD</li>
                      <li>• Purpose: Tourism</li>
                    </ul>
                  </div>
                  
                  <div class="bg-white rounded-lg p-4 border border-blue-100">
                    <h5 class="font-medium text-blue-800 mb-2">Multiple Entry Visa</h5>
                    <ul class="space-y-1 text-blue-700 text-sm">
                      <li>• Validity: 12 months</li>
                      <li>• Cost: $100 USD</li>
                      <li>• Purpose: Multiple visits</li>
                    </ul>
                  </div>
                  
                  <div class="bg-white rounded-lg p-4 border border-blue-100">
                    <h5 class="font-medium text-blue-800 mb-2">Transit Visa</h5>
                    <ul class="space-y-1 text-blue-700 text-sm">
                      <li>• Validity: 7 days</li>
                      <li>• Cost: $30 USD</li>
                      <li>• Purpose: Transit</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          `,
        },
      ],
    },
  },
  "local-cuisine": {
    title: "A Taste of East Africa: Local Cuisine",
    description:
      "Explore the delicious flavors of Tanzanian and Kenyan food, from traditional dishes to popular snacks.",
    image: "/images/mnemba.jpg",
    author: "Chef Amina Hassan",
    publishedAt: "2024-01-08",
    readTime: "8 min read",
    category: "Food",
    difficulty: "Beginner",
    views: "11.4k",
    likes: "298",
    tableOfContents: [
      { id: "staples", title: "Staple Foods and Ingredients", level: 1 },
      { id: "tanzanian", title: "Traditional Tanzanian Dishes", level: 1 },
      { id: "kenyan", title: "Traditional Kenyan Dishes", level: 1 },
      { id: "coastal", title: "Coastal Cuisine", level: 1 },
      { id: "street-food", title: "Street Food and Snacks", level: 1 },
    ],
    keyTakeaways: [
      "East African cuisine blends African, Arab, and Indian influences",
      "Ugali is the staple food across the region",
      "Coastal areas feature coconut and seafood dishes",
      "Street food offers authentic local flavors",
    ],
    content: {
      sections: [
        {
          id: "staples",
          title: "Staple Foods and Ingredients",
          content: `
            <div class="space-y-6">
              <div class="grid md:grid-cols-3 gap-6">
                <div class="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 class="font-semibold text-orange-800 mb-3">Grains & Starches</h4>
                  <ul class="space-y-2 text-orange-700 text-sm">
                    <li>• Ugali (cornmeal staple)</li>
                    <li>• Rice (Wali) with spices</li>
                    <li>• Chapati (flatbread)</li>
                    <li>• Mandazi (sweet fried bread)</li>
                    <li>• Sweet potatoes</li>
                  </ul>
                </div>
                
                <div class="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 class="font-semibold text-red-800 mb-3">Proteins</h4>
                  <ul class="space-y-2 text-red-700 text-sm">
                    <li>• Beef (Nyama ya ng'ombe)</li>
                    <li>• Goat meat (Nyama ya mbuzi)</li>
                    <li>• Chicken (Kuku)</li>
                    <li>• Fish (Samaki)</li>
                    <li>• Beans and lentils</li>
                  </ul>
                </div>
                
                <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 class="font-semibold text-green-800 mb-3">Vegetables & Fruits</h4>
                  <ul class="space-y-2 text-green-700 text-sm">
                    <li>• Sukuma wiki (collard greens)</li>
                    <li>• Spinach with groundnuts</li>
                    <li>• Fresh coconut</li>
                    <li>• Mangoes (many varieties)</li>
                    <li>• Bananas</li>
                  </ul>
                </div>
              </div>
            </div>
          `,
        },
      ],
    },
  },
}

export async function generateMetadata({ params }: TravelGuidePageProps): Promise<Metadata> {
  const article = travelGuideArticles[params.slug as keyof typeof travelGuideArticles]

  if (!article) {
    return {
      title: "Article Not Found - Ngonzi Tours",
    }
  }

  return {
    title: `${article.title} - Ngonzi Tours`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  }
}

export default function TravelGuideDetailPage({ params }: TravelGuidePageProps) {
  const article = travelGuideArticles[params.slug as keyof typeof travelGuideArticles]

  if (!article) {
    notFound()
  }

  const readingProgress = 0 // This would be calculated based on scroll position in a real app

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <Progress value={readingProgress} className="h-1 rounded-none" />
      </div>

      {/* Hero Section - More Compact */}
      <section className="relative h-80 md:h-96">
        <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <Link
              href="/travel-guide"
              className="inline-flex items-center gap-2 mb-4 text-white/90 hover:text-white transition-colors duration-200 bg-black/30 px-3 py-2 rounded-full backdrop-blur-sm text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Travel Guide
            </Link>

            <div className="flex items-center gap-2 mb-3">
              <Badge className="bg-green-600 hover:bg-green-700 text-white">{article.category}</Badge>
              <Badge variant="outline" className="border-white/30 text-white bg-black/20 backdrop-blur-sm">
                {article.difficulty}
              </Badge>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight text-white max-w-4xl">{article.title}</h1>
            <p className="text-lg text-white/90 mb-4 max-w-3xl">{article.description}</p>

            <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                <span>{article.views} views</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Table of Contents Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Article Stats */}
              <Card className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Article Stats</h3>
                  <BookOpen className="h-5 w-5 text-green-600" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Views</span>
                    <span className="font-medium">{article.views}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Likes</span>
                    <span className="font-medium">{article.likes}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Reading Time</span>
                    <span className="font-medium">{article.readTime}</span>
                  </div>
                </div>
              </Card>

              {/* Table of Contents */}
              <Card className="p-4">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Info className="h-5 w-5 text-green-600" />
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {article.tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className="block text-sm text-gray-600 hover:text-green-600 transition-colors py-1 border-l-2 border-transparent hover:border-green-600 pl-3"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </Card>

              {/* Key Takeaways */}
              <Card className="p-4 bg-green-50 border-green-200">
                <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Key Takeaways
                </h3>
                <ul className="space-y-2">
                  {article.keyTakeaways.map((takeaway, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-green-700">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                  <Bookmark className="h-4 w-4" />
                  Save Article
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                  <Download className="h-4 w-4" />
                  Download PDF
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                  <Share2 className="h-4 w-4" />
                  Share Article
                </Button>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="lg:col-span-3">
            <Card className="p-8 bg-white">
              {/* Article Header */}
              <div className="mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{article.author}</p>
                    <p className="text-sm text-gray-600">Travel Expert & Guide</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>Published {new Date(article.publishedAt).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{article.likes}</span>
                  </div>
                </div>
              </div>

              {/* Article Sections */}
              <div className="prose prose-lg max-w-none">
                {article.content.sections.map((section, index) => (
                  <div key={index} id={section.id} className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold text-sm">
                        {index + 1}
                      </span>
                      {section.title}
                    </h2>
                    <div
                      className="article-content"
                      dangerouslySetInnerHTML={{
                        __html: section.content,
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Article Footer */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {article.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{article.author}</p>
                      <p className="text-sm text-gray-600">Travel Expert with 10+ years experience</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                      <ThumbsUp className="h-4 w-4" />
                      {article.likes}
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                      <MessageCircle className="h-4 w-4" />
                      Comment
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                      <Share2 className="h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Was this guide helpful?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Let us know if you found this information useful for planning your East African adventure.
                  </p>
                  <div className="flex gap-3">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      Yes, helpful!
                    </Button>
                    <Button variant="outline" size="sm">
                      Suggest improvements
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Continue Reading</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore more expert guides to perfect your East African adventure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(travelGuideArticles)
              .filter(([slug]) => slug !== params.slug)
              .slice(0, 3)
              .map(([slug, relatedArticle]) => (
                <Card key={slug} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedArticle.image || "/placeholder.svg"}
                      alt={relatedArticle.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-green-600 text-white">{relatedArticle.category}</Badge>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white/90 text-sm">
                        <Clock className="h-4 w-4" />
                        <span>{relatedArticle.readTime}</span>
                        <span>•</span>
                        <Eye className="h-4 w-4" />
                        <span>{relatedArticle.views}</span>
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="line-clamp-2 group-hover:text-green-600 transition-colors text-lg">
                      {relatedArticle.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">{relatedArticle.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{relatedArticle.author}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {relatedArticle.difficulty}
                      </Badge>
                    </div>
                    <Button asChild className="w-full group-hover:bg-green-700 transition-colors">
                      <Link href={`/travel-guide/${slug}`}>
                        Read Guide
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Travel Tips</h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest travel guides, safari tips, and exclusive offers delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-4">No spam, unsubscribe anytime</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Plan Your Safari?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let our expert guides help you create the perfect East African experience based on these insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                <Link href="/tours">
                  <MapPin className="h-5 w-5 mr-2" />
                  Browse Tours
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                asChild
              >
                <Link href="/contact">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Contact Our Experts
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
