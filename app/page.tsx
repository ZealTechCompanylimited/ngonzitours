import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Mountain, Waves, Globe, Users, Calendar, DollarSign } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden md:h-[700px] lg:h-[800px]">
        <Image
          src="/images/Serengeti.jpg"
          alt="Serengeti National Park"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center">
          <div className="container px-4 md:px-6">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
              Unforgettable African Adventures
            </h1>
            <p className="mt-4 text-lg text-white/90 sm:text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md">
              Experience premium safari, mountain climbing, and beach holidays in Tanzania and Kenya.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/tours">Explore Tours</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/20 bg-transparent"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/gt1.jpg"
              alt="Safari Guide"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Your Journey, Our Expertise</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Ngonzi Tours is dedicated to crafting bespoke travel experiences that immerse you in the natural beauty
              and rich cultures of East Africa. With years of experience and a passion for responsible tourism, we
              ensure every detail of your adventure is meticulously planned for an unforgettable journey.
            </p>
            <Button asChild size="lg">
              <Link href="/about">
                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tour Categories Section */}
      <section className="py-12 md:py-20 bg-muted">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Our Signature Experiences</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Mountain className="mx-auto h-12 w-12 text-primary mb-4" />
                <CardTitle>Wildlife Safaris</CardTitle>
                <CardDescription>
                  Witness the Great Migration, spot the Big Five, and explore iconic national parks.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="p-0">
                  <Link href="/tours/wildlife-safari">
                    View Safaris <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Mountain className="mx-auto h-12 w-12 text-primary mb-4" />
                <CardTitle>Mountain Climbing</CardTitle>
                <CardDescription>
                  Conquer Africa's highest peaks, including the majestic Mount Kilimanjaro.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="p-0">
                  <Link href="/tours/mountain-climbing">
                    View Climbs <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Waves className="mx-auto h-12 w-12 text-primary mb-4" />
                <CardTitle>Beach Holidays</CardTitle>
                <CardDescription>
                  Relax on pristine white-sand beaches and explore the vibrant marine life of Zanzibar.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="p-0">
                  <Link href="/tours/beach-holidays">
                    View Beaches <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="mx-auto h-12 w-12 text-primary mb-4" />
                <CardTitle>Cultural Tours</CardTitle>
                <CardDescription>
                  Immerse yourself in the rich traditions and vibrant cultures of local communities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="p-0">
                  <Link href="/tours/cultural-tours">
                    View Cultural Tours <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Globe className="mx-auto h-12 w-12 text-primary mb-4" />
                <CardTitle>Luxury Safaris</CardTitle>
                <CardDescription>
                  Indulge in exclusive and opulent safari experiences with personalized service.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="p-0">
                  <Link href="/tours/luxury-safari">
                    View Luxury Safaris <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Featured Tours</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Example Featured Tour 1 */}
            <Card className="flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/nyumbu.jpeg"
                  alt="Great Migration Safari"
                  fill
                  className="rounded-t-lg object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle>Great Migration Safari</CardTitle>
                <CardDescription className="line-clamp-3">
                  Witness millions of wildebeest and zebras thunder across the Serengeti plains.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Calendar className="size-4" />8 Days / 7 Nights
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="size-4" />
                    Small Group
                  </li>
                  <li className="flex items-center gap-2">
                    <DollarSign className="size-4" />
                    From $3,500
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/tours/wildlife-safari">View Details</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Example Featured Tour 2 */}
            <Card className="flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/kili1.webp"
                  alt="Kilimanjaro Machame Route"
                  fill
                  className="rounded-t-lg object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle>Kilimanjaro: Machame Route</CardTitle>
                <CardDescription className="line-clamp-3">
                  Conquer Africa's highest peak on the popular and scenic Machame Route.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Calendar className="size-4" />7 Days / 6 Nights
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="size-4" />
                    Guided Trek
                  </li>
                  <li className="flex items-center gap-2">
                    <DollarSign className="size-4" />
                    From $2,000
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/tours/mountain-climbing">View Details</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Example Featured Tour 3 */}
            <Card className="flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/mnemba.jpg"
                  alt="Zanzibar Beach Escape"
                  fill
                  className="rounded-t-lg object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle>Zanzibar Beach Escape</CardTitle>
                <CardDescription className="line-clamp-3">
                  Relax on pristine white sands and explore the historic Stone Town.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Calendar className="size-4" />5 Days / 4 Nights
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="size-4" />
                    Flexible
                  </li>
                  <li className="flex items-center gap-2">
                    <DollarSign className="size-4" />
                    From $800
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/tours/beach-holidays">View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-10 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/tours">
                View All Tours <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready for Your African Adventure?</h2>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Let us help you plan the trip of a lifetime. Contact our experts today!
          </p>
          <Button asChild size="lg" variant="secondary" className="text-primary">
            <Link href="/booking">Book Your Dream Tour</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
