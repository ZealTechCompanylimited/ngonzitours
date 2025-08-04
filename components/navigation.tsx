"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import {
  MenuIcon,
  MapPin,
  Mountain,
  Waves,
  Users,
  Crown,
  Compass,
  Phone,
  Mail,
  Star,
  ChevronRight,
  ArrowRight,
  Globe,
  Calendar,
} from "lucide-react"

const tourCategories = [
  {
    title: "Wildlife Safaris",
    href: "/tours/wildlife-safari",
    description: "Witness the Great Migration and the Big Five in their natural habitat.",
    icon: <Users className="h-5 w-5" />,
    featured: true,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Mountain Climbing",
    href: "/tours/mountain-climbing",
    description: "Conquer Kilimanjaro and other majestic peaks with expert guides.",
    icon: <Mountain className="h-5 w-5" />,
    featured: true,
    color: "from-slate-500 to-slate-700",
  },
  {
    title: "Beach Holidays",
    href: "/tours/beach-holidays",
    description: "Relax on pristine white-sand beaches in tropical paradise.",
    icon: <Waves className="h-5 w-5" />,
    featured: false,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Cultural Tours",
    href: "/tours/cultural-tours",
    description: "Immerse yourself in vibrant local cultures and traditions.",
    icon: <Compass className="h-5 w-5" />,
    featured: false,
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Luxury Safaris",
    href: "/tours/luxury-safari",
    description: "Indulge in exclusive and opulent African adventures.",
    icon: <Crown className="h-5 w-5" />,
    featured: true,
    color: "from-purple-500 to-purple-700",
  },
]

const destinations = [
  {
    title: "Tanzania",
    href: "/destinations/tanzania",
    description: "Home to Serengeti, Kilimanjaro, and Ngorongoro Crater.",
    image: "/images/Serengeti.jpg",
    highlights: ["Serengeti", "Kilimanjaro", "Ngorongoro"],
    badge: "Most Popular",
  },
  {
    title: "Kenya",
    href: "/destinations/kenya",
    description: "The land of classic safaris and diverse landscapes.",
    image: "/images/swala.jpg",
    highlights: ["Masai Mara", "Amboseli", "Tsavo"],
    badge: "Best Value",
  },
  {
    title: "Zanzibar",
    href: "/destinations/zanzibar",
    description: "The Spice Island with stunning beaches and rich history.",
    image: "/images/stone-town.jpg",
    highlights: ["Stone Town", "Beaches", "Spice Tours"],
    badge: "Cultural Gem",
  },
]

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/60 bg-white/95 backdrop-blur-xl supports-[backdrop-filter]:bg-white/90 shadow-lg shadow-gray-100/20">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Enhanced Top Bar */}
        <div className="hidden lg:flex items-center justify-between py-3 text-sm border-b border-gray-100/80">
          <div className="flex items-center gap-8 text-gray-600">
            <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <Phone className="h-3.5 w-3.5 text-white" />
              </div>
              <span className="font-medium">+255 123 456 789</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <Mail className="h-3.5 w-3.5 text-white" />
              </div>
              <span className="font-medium">info@ngonzitours.com</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 border-0 font-semibold px-3 py-1 shadow-sm">
              <Star className="h-3.5 w-3.5 mr-1.5 fill-current" />
              4.9/5 Excellence Rating
            </Badge>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2 text-gray-600">
              <Globe className="h-4 w-4 text-blue-500" />
              <span className="font-medium">Trusted by 5,000+ Travelers</span>
            </div>
          </div>
        </div>

        {/* Enhanced Main Navigation */}
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image
                src="/images/ngonzi-logo.png"
                alt="Ngonzi Tours"
                width={160}
                height={50}
                className="h-12 lg:h-14 w-auto transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-200",
                    )}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-200 data-[state=open]:bg-blue-50 data-[state=open]:text-blue-600">
                  Tours
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[900px] p-8 bg-white shadow-2xl border-0 rounded-2xl">
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                            <Star className="h-5 w-5 text-white" />
                          </div>
                          <h4 className="text-xl font-bold text-gray-900">Featured Tours</h4>
                        </div>
                        <div className="space-y-3">
                          {tourCategories
                            .filter((tour) => tour.featured)
                            .map((tour) => (
                              <Link
                                key={tour.title}
                                href={tour.href}
                                className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all duration-300 border border-transparent hover:border-blue-100 hover:shadow-md"
                              >
                                <div
                                  className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${tour.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                >
                                  {tour.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-lg">
                                    {tour.title}
                                  </div>
                                  <p className="text-gray-600 line-clamp-2 mt-1 text-sm leading-relaxed">
                                    {tour.description}
                                  </p>
                                </div>
                                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                              </Link>
                            ))}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                            <Compass className="h-5 w-5 text-white" />
                          </div>
                          <h4 className="text-xl font-bold text-gray-900">All Categories</h4>
                        </div>
                        <div className="space-y-2">
                          {tourCategories.map((tour) => (
                            <Link
                              key={tour.title}
                              href={tour.href}
                              className="flex items-center justify-between p-3 rounded-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all duration-200 group border border-transparent hover:border-blue-100"
                            >
                              <div className="flex items-center gap-3">
                                <div className="text-gray-500 group-hover:text-blue-600 transition-colors">
                                  {tour.icon}
                                </div>
                                <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                                  {tour.title}
                                </span>
                              </div>
                              <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
                            </Link>
                          ))}
                          <div className="border-t border-gray-100 pt-4 mt-4">
                            <Link
                              href="/tours"
                              className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 group border border-blue-200"
                            >
                              <span className="font-semibold text-blue-700">View All Tours</span>
                              <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-200" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-200 data-[state=open]:bg-blue-50 data-[state=open]:text-blue-600">
                  Destinations
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[800px] p-8 bg-white shadow-2xl border-0 rounded-2xl">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">Popular Destinations</h4>
                    </div>
                    <div className="grid grid-cols-3 gap-6 mb-6">
                      {destinations.map((destination) => (
                        <Link key={destination.title} href={destination.href} className="group block">
                          <div className="relative overflow-hidden rounded-xl mb-4 shadow-lg">
                            <Image
                              src={destination.image || "/placeholder.svg"}
                              alt={destination.title}
                              width={240}
                              height={160}
                              className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-colors duration-300" />
                            <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800 border-0 font-medium text-xs">
                              {destination.badge}
                            </Badge>
                            <div className="absolute bottom-3 left-3 right-3">
                              <h5 className="font-bold text-white text-lg mb-1">{destination.title}</h5>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2 leading-relaxed">
                            {destination.description}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {destination.highlights.slice(0, 2).map((highlight) => (
                              <Badge
                                key={highlight}
                                variant="secondary"
                                className="text-xs bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors"
                              >
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-gray-100 pt-6">
                      <Link
                        href="/destinations"
                        className="flex items-center justify-center gap-3 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 group border border-blue-200"
                      >
                        <MapPin className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold text-blue-700">Explore All Destinations</span>
                        <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/travel-guide" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-200",
                    )}
                  >
                    Travel Guide
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-200",
                    )}
                  >
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-200",
                    )}
                  >
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-200",
                    )}
                  >
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <Button
              asChild
              className="hidden lg:flex bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/booking">
                <Calendar className="mr-2 h-4 w-4" />
                Book Your Adventure
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            {/* Enhanced Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="hover:bg-blue-50 rounded-xl">
                  <MenuIcon className="h-6 w-6 text-gray-700" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[380px] sm:w-[420px] p-0 bg-white">
                <div className="flex flex-col h-full">
                  {/* Enhanced Mobile Header */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-white">
                    <Image
                      src="/images/ngonzi-logo.png"
                      alt="Ngonzi Tours"
                      width={140}
                      height={45}
                      className="h-10 w-auto"
                    />
                    <SheetClose />
                  </div>

                  {/* Enhanced Mobile Navigation */}
                  <nav className="flex-1 overflow-y-auto p-6">
                    <div className="space-y-8">
                      <Link
                        href="/"
                        className="flex items-center justify-between py-4 text-lg font-semibold hover:text-blue-600 transition-colors border-b border-gray-100"
                        onClick={() => setIsOpen(false)}
                      >
                        Home
                        <ChevronRight className="h-5 w-5" />
                      </Link>

                      <div className="space-y-4">
                        <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider flex items-center gap-2">
                          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                            <Star className="h-3 w-3 text-white" />
                          </div>
                          Tours
                        </h4>
                        {tourCategories.map((tour) => (
                          <Link
                            key={tour.title}
                            href={tour.href}
                            className="flex items-center gap-4 py-3 pl-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            <div
                              className={`w-8 h-8 bg-gradient-to-r ${tour.color} rounded-lg flex items-center justify-center text-white shadow-sm`}
                            >
                              {tour.icon}
                            </div>
                            <div className="flex-1">
                              <span className="font-medium">{tour.title}</span>
                            </div>
                            {tour.featured && (
                              <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 border-0 text-xs font-semibold">
                                Popular
                              </Badge>
                            )}
                          </Link>
                        ))}
                        <Link
                          href="/tours"
                          className="flex items-center justify-between py-3 pl-4 text-blue-600 font-semibold bg-blue-50 rounded-lg"
                          onClick={() => setIsOpen(false)}
                        >
                          View All Tours
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider flex items-center gap-2">
                          <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <MapPin className="h-3 w-3 text-white" />
                          </div>
                          Destinations
                        </h4>
                        {destinations.map((destination) => (
                          <Link
                            key={destination.title}
                            href={destination.href}
                            className="flex items-center gap-4 py-3 pl-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            <MapPin className="h-5 w-5 text-gray-400" />
                            <div className="flex-1">
                              <div className="font-medium">{destination.title}</div>
                              <div className="text-sm text-gray-500 line-clamp-1">{destination.description}</div>
                            </div>
                            <Badge variant="secondary" className="text-xs">
                              {destination.badge}
                            </Badge>
                          </Link>
                        ))}
                        <Link
                          href="/destinations"
                          className="flex items-center justify-between py-3 pl-4 text-blue-600 font-semibold bg-blue-50 rounded-lg"
                          onClick={() => setIsOpen(false)}
                        >
                          View All Destinations
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>

                      <div className="space-y-4">
                        {[
                          { name: "Travel Guide", href: "/travel-guide" },
                          { name: "Blog", href: "/blog" },
                          { name: "About Us", href: "/about" },
                          { name: "Contact", href: "/contact" },
                        ].map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-between py-4 text-lg font-semibold hover:text-blue-600 transition-colors border-b border-gray-100"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                            <ChevronRight className="h-5 w-5" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </nav>

                  {/* Enhanced Mobile Footer */}
                  <div className="p-6 border-t bg-gradient-to-r from-blue-50 to-white">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-xl shadow-lg"
                    >
                      <Link href="/booking" onClick={() => setIsOpen(false)}>
                        <Calendar className="mr-2 h-4 w-4" />
                        Book Your Adventure
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-current text-yellow-400" />
                        <span className="font-medium">4.9/5 Rating</span>
                      </div>
                      <div className="w-px h-4 bg-gray-300"></div>
                      <span className="font-medium">5,000+ Happy Travelers</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
