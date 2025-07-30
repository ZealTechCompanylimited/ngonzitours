import Link from "next/link"
import type { Metadata } from "next"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Ngonzi Tours",
  description:
    "Learn more about Ngonzi Tours, our mission, values, and commitment to unforgettable African adventures.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="mb-6 text-3xl font-bold md:text-4xl">About Ngonzi Tours</h1>

      <section className="mb-12 grid gap-8 md:grid-cols-2 lg:gap-12">
        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
          <Image
            src="/images/picha-man.jpg"
            alt="Ngonzi Tours Team"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-semibold md:text-3xl">Our Story & Mission</h2>
          <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
            Ngonzi Tours was founded with a deep passion for East Africa's incredible wildlife, breathtaking landscapes,
            and vibrant cultures. Our mission is to provide authentic, sustainable, and unforgettable travel experiences
            that connect our guests with the heart of Africa. We believe in responsible tourism that benefits both
            travelers and local communities.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            We are a team of dedicated local experts, guides, and travel enthusiasts committed to sharing the magic of
            Tanzania and Kenya with the world. Every itinerary is crafted with meticulous attention to detail, ensuring
            a seamless and enriching journey from start to finish.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold md:text-3xl text-center">Why Choose Ngonzi Tours?</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border p-6 text-center shadow-sm">
            <CheckCircle className="mx-auto mb-4 size-12 text-primary" />
            <h3 className="mb-2 text-xl font-semibold">Local Expertise</h3>
            <p className="text-muted-foreground">
              Our team comprises local experts with in-depth knowledge of East Africa's wildlife, culture, and hidden
              gems.
            </p>
          </div>
          <div className="rounded-lg border p-6 text-center shadow-sm">
            <CheckCircle className="mx-auto mb-4 size-12 text-primary" />
            <h3 className="mb-2 text-xl font-semibold">Tailored Experiences</h3>
            <p className="text-muted-foreground">
              We specialize in custom itineraries, ensuring your trip perfectly matches your interests and budget.
            </p>
          </div>
          <div className="rounded-lg border p-6 text-center shadow-sm">
            <CheckCircle className="mx-auto mb-4 size-12 text-primary" />
            <h3 className="mb-2 text-xl font-semibold">Sustainable Tourism</h3>
            <p className="text-muted-foreground">
              We are committed to responsible travel practices that protect the environment and support local
              communities.
            </p>
          </div>
          <div className="rounded-lg border p-6 text-center shadow-sm">
            <CheckCircle className="mx-auto mb-4 size-12 text-primary" />
            <h3 className="mb-2 text-xl font-semibold">Safety First</h3>
            <p className="text-muted-foreground">
              Your safety and comfort are our top priorities. We adhere to the highest safety standards.
            </p>
          </div>
          <div className="rounded-lg border p-6 text-center shadow-sm">
            <CheckCircle className="mx-auto mb-4 size-12 text-primary" />
            <h3 className="mb-2 text-xl font-semibold">Exceptional Service</h3>
            <p className="text-muted-foreground">
              From your first inquiry to your departure, expect personalized and attentive service.
            </p>
          </div>
          <div className="rounded-lg border p-6 text-center shadow-sm">
            <CheckCircle className="mx-auto mb-4 size-12 text-primary" />
            <h3 className="mb-2 text-xl font-semibold">Unforgettable Memories</h3>
            <p className="text-muted-foreground">
              We strive to create moments that will last a lifetime, filled with wonder and discovery.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold md:text-3xl text-center">Our Values</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg border p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">Integrity</h3>
            <p className="text-muted-foreground">
              We operate with honesty, transparency, and ethical practices in all our dealings.
            </p>
          </div>
          <div className="rounded-lg border p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">Passion</h3>
            <p className="text-muted-foreground">
              Our love for Africa drives us to create extraordinary and meaningful travel experiences.
            </p>
          </div>
          <div className="rounded-lg border p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">Excellence</h3>
            <p className="text-muted-foreground">
              We are committed to delivering the highest quality of service and attention to detail.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">Ready to Explore?</h2>
        <p className="mb-6 text-lg text-muted-foreground">
          Join us on an adventure of a lifetime and discover the wonders of Tanzania and Kenya.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
        >
          Contact Us Today
        </Link>
      </section>
    </div>
  )
}
