import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, DollarSign, Users, Clock, Star, MapPin } from 'lucide-react'
import type { Tour } from "@/lib/data"

interface TourCardProps {
  tour: Tour
}

export function TourCard({ tour }: TourCardProps) {
  return (
    <Card className="group relative overflow-hidden rounded-lg shadow-lg bg-white h-[500px] flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={tour.images[0] || "/placeholder.svg"}
          alt={tour.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className={`font-semibold text-white border-0 ${
            tour.category === 'Safari' ? 'bg-emerald-600' :
            tour.category === 'Adventure' ? 'bg-orange-600' :
            tour.category === 'Beach' ? 'bg-blue-600' :
            tour.category === 'Cultural' ? 'bg-purple-600' :
            tour.category === 'Luxury' ? 'bg-amber-600' :
            'bg-gray-600'
          }`}>
            {tour.category}
          </Badge>
          {tour.featured && (
            <Badge className="bg-red-600 text-white font-semibold">
              Featured
            </Badge>
          )}
        </div>

        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
          <div className="flex items-center gap-1">
            <DollarSign className="h-4 w-4 text-emerald-600" />
            <span className="text-lg font-bold text-emerald-600">${tour.price}</span>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-white/90 text-sm font-medium ml-2">
              {tour.rating} ({tour.reviewsCount} reviews)
            </span>
          </div>
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="line-clamp-2 text-xl group-hover:text-blue-600 transition-colors">
          {tour.title}
        </CardTitle>
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{tour.location}</span>
        </div>
      </CardHeader>

      <CardContent className="flex-grow flex flex-col">
        <p className="text-gray-600 line-clamp-3 mb-4 leading-relaxed">
          {tour.shortDescription}
        </p>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center gap-1 bg-gray-100 rounded-full px-3 py-1">
            <Calendar className="h-4 w-4" />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center gap-1 bg-blue-100 rounded-full px-3 py-1">
            <Users className="h-4 w-4" />
            <span>{tour.groupSize}</span>
          </div>
          <div className="flex items-center gap-1 bg-orange-100 rounded-full px-3 py-1">
            <Clock className="h-4 w-4" />
            <span>{tour.difficulty}</span>
          </div>
        </div>

        <div className="mt-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">Best Time:</span> {tour.bestTime}
            </div>
          </div>

          <div className="flex gap-2">
            <Button 
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold shadow-md hover:shadow-blue-500/25 transition-all duration-300" 
              asChild
            >
              <Link href={`/tours/${tour.slug}`}>
                View Details
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="flex-1 border-2 hover:bg-gray-50 transition-all duration-300 bg-transparent" 
              asChild
            >
              <Link href={`/booking?tour=${tour.slug}`}>
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
