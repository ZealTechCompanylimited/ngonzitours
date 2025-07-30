import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <h3 className="text-2xl font-bold mb-4">Ngonzi Tours</h3>
          <p className="text-sm leading-relaxed opacity-90">
            Crafting unforgettable safari, mountain climbing, and beach holiday experiences in Tanzania and Kenya. Your
            adventure of a lifetime starts here.
          </p>
          <div className="flex space-x-4 mt-6">
            <a
              href="https://facebook.com/ngonzitours"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://twitter.com/ngonzitours"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://instagram.com/ngonzitours"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/tours" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                Our Tours
              </Link>
            </li>
            <li>
              <Link href="/destinations" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                Destinations
              </Link>
            </li>
            <li>
              <Link href="/travel-guide" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                Travel Guide
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacy" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/sitemap" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:info@ngonzitours.com" className="hover:underline">
                info@ngonzitours.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+255784123456" className="hover:underline">
                +255 784 123 456
              </a>{" "}
              {/* Replace with actual phone number */}
            </li>
            <li>Arusha, Tanzania</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
        &copy; {new Date().getFullYear()} Ngonzi Tours. All rights reserved.
      </div>
    </footer>
  )
}
