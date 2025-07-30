"use client"

import * as React from "react"
import Link from "next/link"
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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Wildlife Safaris",
    href: "/tours/wildlife-safari",
    description: "Witness the Great Migration and the Big Five.",
  },
  {
    title: "Mountain Climbing",
    href: "/tours/mountain-climbing",
    description: "Conquer Kilimanjaro and other majestic peaks.",
  },
  {
    title: "Beach Holidays",
    href: "/tours/beach-holidays",
    description: "Relax on pristine white-sand beaches in Zanzibar.",
  },
  {
    title: "Cultural Tours",
    href: "/tours/cultural-tours",
    description: "Immerse yourself in vibrant local cultures.",
  },
  {
    title: "Luxury Safaris",
    href: "/tours/luxury-safari",
    description: "Indulge in exclusive and opulent African adventures.",
  },
]

const destinations: { title: string; href: string; description: string }[] = [
  {
    title: "Tanzania",
    href: "/destinations/tanzania",
    description: "Home to Serengeti, Kilimanjaro, and Zanzibar.",
  },
  {
    title: "Kenya",
    href: "/destinations/kenya",
    description: "The land of classic safaris and diverse landscapes.",
  },
  {
    title: "Zanzibar",
    href: "/destinations/zanzibar",
    description: "The Spice Island with stunning beaches and history.",
  },
]

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="inline-block font-bold text-xl">Ngonzi Tours</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Tours</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem key={component.title} title={component.title} href={component.href}>
                      {component.description}
                    </ListItem>
                  ))}
                  <ListItem title="All Tours" href="/tours">
                    Explore all our tour packages.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Destinations</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {destinations.map((destination) => (
                    <ListItem key={destination.title} title={destination.title} href={destination.href}>
                      {destination.description}
                    </ListItem>
                  ))}
                  <ListItem title="All Destinations" href="/destinations">
                    Discover all our incredible travel locations.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/travel-guide" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Travel Guide</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Blog</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>About Us</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button asChild className="hidden md:flex">
          <Link href="/booking">Book Now</Link>
        </Button>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 py-6">
              <Link
                href="/"
                className="text-lg font-medium hover:text-primary"
                onClick={() => {
                  /* close sheet */
                }}
              >
                Home
              </Link>
              <div className="grid gap-2">
                <h4 className="font-semibold text-muted-foreground">Tours</h4>
                {components.map((component) => (
                  <Link
                    key={component.title}
                    href={component.href}
                    className="ml-4 text-muted-foreground hover:text-primary"
                    onClick={() => {
                      /* close sheet */
                    }}
                  >
                    {component.title}
                  </Link>
                ))}
                <Link
                  href="/tours"
                  className="ml-4 text-muted-foreground hover:text-primary"
                  onClick={() => {
                    /* close sheet */
                  }}
                >
                  All Tours
                </Link>
              </div>
              <div className="grid gap-2">
                <h4 className="font-semibold text-muted-foreground">Destinations</h4>
                {destinations.map((destination) => (
                  <Link
                    key={destination.title}
                    href={destination.href}
                    className="ml-4 text-muted-foreground hover:text-primary"
                    onClick={() => {
                      /* close sheet */
                    }}
                  >
                    {destination.title}
                  </Link>
                ))}
                <Link
                  href="/destinations"
                  className="ml-4 text-muted-foreground hover:text-primary"
                  onClick={() => {
                    /* close sheet */
                  }}
                >
                  All Destinations
                </Link>
              </div>
              <Link
                href="/travel-guide"
                className="text-lg font-medium hover:text-primary"
                onClick={() => {
                  /* close sheet */
                }}
              >
                Travel Guide
              </Link>
              <Link
                href="/blog"
                className="text-lg font-medium hover:text-primary"
                onClick={() => {
                  /* close sheet */
                }}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium hover:text-primary"
                onClick={() => {
                  /* close sheet */
                }}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium hover:text-primary"
                onClick={() => {
                  /* close sheet */
                }}
              >
                Contact
              </Link>
              <Button asChild className="mt-4">
                <Link href="/booking">Book Now</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
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
