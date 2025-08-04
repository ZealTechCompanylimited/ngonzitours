import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: {
    default: "Ngonzi Tours - Premium Safari and Adventure Tours",
    template: "%s - Ngonzi Tours",
  },
  description:
    "Ngonzi Tours offers premium safari, mountain climbing, and beach holiday experiences in Tanzania and Kenya. Book your unforgettable African adventure today!",
  keywords: [
    "safari",
    "tours",
    "tanzania",
    "kenya",
    "kilimanjaro",
    "serengeti",
    "zanzibar",
    "travel",
    "adventure",
    "wildlife",
    "beach holidays",
    "cultural tours",
    "luxury safari",
  ],
  authors: [{ name: "Ngonzi Tours" }],
  creator: "Ngonzi Tours",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ngonzitours.com",
    title: "Ngonzi Tours - Premium Safari and Adventure Tours",
    description:
      "Ngonzi Tours offers premium safari, mountain climbing, and beach holiday experiences in Tanzania and Kenya. Book your unforgettable African adventure today!",
    siteName: "Ngonzi Tours",
    images: [
      {
        url: "https://www.ngonzitours.com/og-image.jpg", // Replace with an actual OG image
        width: 1200,
        height: 630,
        alt: "Ngonzi Tours - African Safari",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ngonzi Tours - Premium Safari and Adventure Tours",
    description:
      "Ngonzi Tours offers premium safari, mountain climbing, and beach holiday experiences in Tanzania and Kenya. Book your unforgettable African adventure today!",
    images: ["https://www.ngonzitours.com/twitter-image.jpg"], // Replace with an actual Twitter image
    creator: "@NgonziTours", // Replace with actual Twitter handle if available
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // If you have one
  },
  manifest: "/site.webmanifest", // If you have one
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        <div className="flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </body>
    </html>
  )
}
