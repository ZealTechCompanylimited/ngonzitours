"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface ImageCarouselProps {
  images: string[]
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  if (!images || images.length === 0) {
    return null // Or a placeholder if no images are provided
  }

  return (
    <Carousel className="w-full max-w-4xl mx-auto">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-0">
                  <div className="relative h-full w-full">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Carousel image ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
