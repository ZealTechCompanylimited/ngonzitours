import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sitemap - Ngonzi Tours",
  description: "Explore the sitemap for Ngonzi Tours to find all our pages.",
}

export default function SitemapPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="mb-6 text-3xl font-bold md:text-4xl">Sitemap</h1>

      <nav className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Main Pages</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-primary hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-primary hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-primary hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/booking" className="text-primary hover:underline">
                Book Your Tour
              </Link>
            </li>
            <li>
              <Link href="/admin" className="text-primary hover:underline">
                Admin Panel
              </Link>
            </li>
          </ul>
        </div>

        <div className="rounded-lg border p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Tours</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/tours" className="text-primary hover:underline">
                All Tours
              </Link>
            </li>
            <li>
              <Link href="/tours/wildlife-safari" className="text-primary hover:underline">
                Wildlife Safari
              </Link>
            </li>
            <li>
              <Link href="/tours/mountain-climbing" className="text-primary hover:underline">
                Mountain Climbing
              </Link>
            </li>
            <li>
              <Link href="/tours/beach-holidays" className="text-primary hover:underline">
                Beach Holidays
              </Link>
            </li>
            <li>
              <Link href="/tours/cultural-tours" className="text-primary hover:underline">
                Cultural Tours
              </Link>
            </li>
            <li>
              <Link href="/tours/luxury-safari" className="text-primary hover:underline">
                Luxury Safari
              </Link>
            </li>
            {/* Add more specific tour links as they are created */}
          </ul>
        </div>

        <div className="rounded-lg border p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Destinations</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/destinations" className="text-primary hover:underline">
                All Destinations
              </Link>
            </li>
            <li>
              <Link href="/destinations/tanzania" className="text-primary hover:underline">
                Tanzania
              </Link>
            </li>
            <li>
              <Link href="/destinations/kenya" className="text-primary hover:underline">
                Kenya
              </Link>
            </li>
            <li>
              <Link href="/destinations/zanzibar" className="text-primary hover:underline">
                Zanzibar
              </Link>
            </li>
            {/* Add more specific destination links as they are created */}
          </ul>
        </div>

        <div className="rounded-lg border p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Blog & Travel Guide</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/blog" className="text-primary hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/travel-guide" className="text-primary hover:underline">
                Travel Guide
              </Link>
            </li>
            {/* Add more specific blog post links as they are created */}
          </ul>
        </div>

        <div className="rounded-lg border p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Legal & Policies</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/sitemap" className="text-primary hover:underline">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
