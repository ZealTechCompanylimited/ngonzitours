import type React from "react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Calendar, Users, MapPin, DollarSign } from "lucide-react"
import { ImageCarousel } from "@/components/image-carousel"

// Dummy data for tours - replace with actual data fetching from Supabase
const tours = [
  {
    slug: "wildlife-safari",
    name: "Classic Wildlife Safari",
    description:
      "Experience the thrill of the African wilderness with our classic wildlife safari. Witness the Great Migration, spot the Big Five, and immerse yourself in the breathtaking landscapes of Serengeti and Ngorongoro.",
    longDescription: `
      <p>Embark on an unforgettable journey through Tanzania's most iconic national parks. Our Classic Wildlife Safari is designed to give you the ultimate African bush experience, combining thrilling game drives with comfortable accommodations.</p>
      <p>You'll start your adventure in Arusha, the safari capital, before heading to Tarangire National Park, famous for its large elephant herds and baobab trees. Next, explore the vast plains of the Serengeti, home to millions of wildebeest and zebras during the annual Great Migration (seasonal). Conclude your safari with a visit to the Ngorongoro Crater, a UNESCO World Heritage Site teeming with diverse wildlife.</p>
      <p>Our experienced guides will ensure you have the best opportunities for wildlife viewing, sharing their extensive knowledge of the ecosystem and animal behavior. Enjoy delicious meals, comfortable lodges or tented camps, and the magic of African sunsets.</p>
    `,
    images: [
      "/images/Serengeti.jpg",
      "/images/nyumbu.jpeg",
      "/images/zebra.jpg",
      "/images/twiga.jpg",
      "/images/tembo.webp",
      "/images/chui.jpg",
      "/images/wildlifec-good.webp",
    ],
    duration: "7 Days / 6 Nights",
    groupSize: "2-6 people",
    price: "From $2,500 per person",
    highlights: [
      "Witness the Great Migration (seasonal)",
      "Spot the Big Five (lion, leopard, elephant, rhino, buffalo)",
      "Explore Serengeti National Park and Ngorongoro Crater",
      "Expert local guides",
      "Comfortable safari lodges/camps",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description:
          "Arrive at Kilimanjaro International Airport (JRO), meet our representative, and transfer to your hotel in Arusha for overnight.",
      },
      {
        day: 2,
        title: "Tarangire National Park",
        description:
          "Morning drive to Tarangire, known for its large elephant population and baobab trees. Enjoy a full day game drive.",
      },
      {
        day: 3,
        title: "Serengeti National Park",
        description:
          "Travel to the vast plains of the Serengeti. Afternoon game drive, searching for predators and their prey.",
      },
      {
        day: 4,
        title: "Full Day Serengeti Exploration",
        description:
          "Another full day of game drives in different areas of the Serengeti, maximizing wildlife viewing opportunities.",
      },
      {
        day: 5,
        title: "Ngorongoro Crater",
        description:
          "Morning game drive in Serengeti, then drive to Ngorongoro Conservation Area. Descend into the crater for an incredible game drive.",
      },
      {
        day: 6,
        title: "Lake Manyara National Park",
        description:
          "Morning drive to Lake Manyara, famous for its tree-climbing lions and diverse birdlife. Afternoon game drive.",
      },
      {
        day: 7,
        title: "Departure",
        description: "After breakfast, drive back to Arusha for your departure flight from JRO.",
      },
    ],
    included: [
      "All park fees and government taxes",
      "Accommodation as per itinerary",
      "Meals as specified (B=Breakfast, L=Lunch, D=Dinner)",
      "Professional English-speaking safari guide",
      "4x4 safari vehicle with pop-up roof",
      "Bottled water during game drives",
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Tips for guide and lodge staff",
      "Personal expenses (laundry, souvenirs, etc.)",
      "Optional activities (e.g., hot air balloon safari)",
    ],
  },
  {
    slug: "mountain-climbing",
    name: "Kilimanjaro Trek: Machame Route",
    description:
      "Conquer Africa's highest peak, Mount Kilimanjaro, via the scenic Machame Route. A challenging yet rewarding adventure to the Roof of Africa.",
    longDescription: `
      <p>The Machame Route, also known as the "Whiskey Route," is one of the most popular and scenic paths to the summit of Mount Kilimanjaro. It offers stunning views and a good acclimatization profile, making it a highly recommended choice for trekkers.</p>
      <p>This route is known for its diverse landscapes, from lush rainforests to moorlands and alpine deserts, before reaching the arctic zone at the summit. The trek involves daily ascents and descents, which aids in acclimatization and increases your chances of reaching Uhuru Peak.</p>
      <p>Our experienced mountain guides, porters, and cooks will ensure your safety, comfort, and enjoyment throughout the expedition. We provide high-quality camping equipment and nutritious meals to fuel your ascent.</p>
    `,
    images: ["/images/Kilimanjaro.webp", "/images/kili1.webp", "/images/tree.webp", "/images/picha-man.jpg"],
    duration: "7 Days / 6 Nights",
    groupSize: "1-10 people",
    price: "From $2,000 per person",
    highlights: [
      "Summit Uhuru Peak, the Roof of Africa",
      "Trek through diverse ecological zones",
      "Excellent acclimatization profile",
      "Experienced and certified mountain guides",
      "High-quality camping equipment and support team",
    ],
    itinerary: [
      {
        day: 1,
        title: "Machame Gate to Machame Camp",
        description: "Trek through rainforest to Machame Camp (3,000m).",
      },
      {
        day: 2,
        title: "Machame Camp to Shira Cave Camp",
        description: "Ascend to Shira Plateau, then to Shira Cave Camp (3,840m).",
      },
      {
        day: 3,
        title: "Shira Cave Camp to Barranco Camp",
        description: "Trek to Lava Tower (4,600m) for acclimatization, then descend to Barranco Camp (3,950m).",
      },
      {
        day: 4,
        title: "Barranco Camp to Karanga Camp",
        description: "Conquer the Barranco Wall, then trek to Karanga Camp (4,035m).",
      },
      {
        day: 5,
        title: "Karanga Camp to Barafu Camp",
        description: "Ascend to Barafu Camp (4,640m), the base camp for summit night.",
      },
      {
        day: 6,
        title: "Summit Day! Barafu Camp to Uhuru Peak to Mweka Camp",
        description: "Early morning ascent to Uhuru Peak (5,895m), then descend to Mweka Camp (3,100m).",
      },
      {
        day: 7,
        title: "Mweka Camp to Mweka Gate",
        description:
          "Final descent through rainforest to Mweka Gate, receive certificates, and transfer back to Arusha.",
      },
    ],
    included: [
      "Kilimanjaro National Park fees",
      "Professional mountain guides, porters, and cooks",
      "All meals on the mountain",
      "Camping equipment (tents, sleeping mats)",
      "Rescue fees",
      "Transfers to/from Machame Gate",
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Sleeping bags",
      "Personal trekking gear",
      "Tips for guides and porters",
      "Hotel accommodation in Arusha",
    ],
  },
  {
    slug: "beach-holidays",
    name: "Zanzibar Beach Escape",
    description:
      "Relax on the pristine white sands of Zanzibar, explore historic Stone Town, and enjoy water activities in the Indian Ocean.",
    longDescription: `
      <p>Escape to the spice island of Zanzibar for a perfect blend of relaxation, culture, and adventure. Our Zanzibar Beach Escape offers you the chance to unwind on stunning beaches, explore a UNESCO World Heritage Site, and discover the vibrant marine life.</p>
      <p>Your journey begins in Stone Town, the historic heart of Zanzibar, where you'll wander through narrow alleyways, visit bustling markets, and learn about the island's rich history and Swahili culture. From there, you'll transfer to the idyllic beaches of Kendwa or Nungwi, known for their soft white sand and crystal-clear waters.</p>
      <p>Spend your days swimming, snorkeling, diving, or simply basking in the sun. Optional activities include spice tours, Jozani Forest visits to see red colobus monkeys, and sunset dhow cruises. This is the perfect extension to a safari or a standalone relaxing getaway.</p>
    `,
    images: [
      "/images/mnemba.jpg",
      "/images/stone-town.jpg",
      "/images/zero.jpeg", // Placeholder for a beach/ocean image if needed
    ],
    duration: "5 Days / 4 Nights",
    groupSize: "Any size",
    price: "From $800 per person",
    highlights: [
      "Relax on pristine white sand beaches",
      "Explore the historic Stone Town (UNESCO World Heritage Site)",
      "Snorkeling and diving in clear Indian Ocean waters",
      "Spice farm tour",
      "Jozani Forest visit (red colobus monkeys)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Stone Town",
        description:
          "Arrive at Zanzibar Airport (ZNZ), transfer to your hotel in Stone Town. Afternoon at leisure or optional Stone Town walking tour.",
      },
      {
        day: 2,
        title: "Stone Town & Spice Farm Tour",
        description:
          "Morning guided tour of Stone Town. Afternoon spice farm tour, learning about Zanzibar's famous spices.",
      },
      {
        day: 3,
        title: "Beach Relaxation / Water Activities",
        description:
          "Transfer to a beach resort in Kendwa/Nungwi. Day at leisure for swimming, sunbathing, or optional water sports.",
      },
      {
        day: 4,
        title: "Jozani Forest & Blue Lagoon Snorkeling",
        description: "Morning visit to Jozani Forest. Afternoon boat trip to Blue Lagoon for snorkeling.",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Enjoy a final breakfast at the beach resort before transferring to ZNZ for your departure flight.",
      },
    ],
    included: [
      "Airport transfers",
      "Accommodation as per itinerary",
      "Daily breakfast",
      "Stone Town tour, Spice Farm tour, Jozani Forest tour",
      "Blue Lagoon snorkeling trip",
      "All government taxes and levies",
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Lunch and dinner",
      "Optional activities not listed",
      "Tips for guides and drivers",
    ],
  },
  {
    slug: "cultural-tours",
    name: "Authentic Cultural Immersion",
    description:
      "Discover the rich traditions and vibrant cultures of Tanzania's local communities. Engage with Maasai, Hadzabe, and other tribes.",
    longDescription: `
      <p>Our Authentic Cultural Immersion tour offers a unique opportunity to step beyond the wildlife and connect with the heart of Tanzania – its people. This tour is designed for travelers who wish to understand the diverse traditions, daily lives, and hospitality of various Tanzanian tribes.</p>
      <p>You'll visit a traditional Maasai village, learn about their nomadic lifestyle, participate in their dances, and witness their intricate beadwork. Experience a hunting and gathering expedition with the Hadzabe bushmen, one of the last true hunter-gatherer tribes in Africa, gaining insights into their ancient survival techniques.</p>
      <p>The tour also includes visits to local markets, schools, and community projects, providing a deeper understanding of contemporary Tanzanian life. This is an enriching experience that offers a different perspective on this beautiful country.</p>
    `,
    images: ["/images/cultural.webp", "/images/picha-man.jpg"],
    duration: "4 Days / 3 Nights",
    groupSize: "2-8 people",
    price: "From $750 per person",
    highlights: [
      "Visit a traditional Maasai village",
      "Experience a hunting trip with Hadzabe bushmen",
      "Interact with local communities",
      "Learn about traditional customs and practices",
      "Support local economies through responsible tourism",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Maasai Village Visit",
        description:
          "Arrive in Arusha, transfer to a lodge. Afternoon visit to a nearby Maasai village for cultural interaction and traditional dances.",
      },
      {
        day: 2,
        title: "Hadzabe Bushmen Experience",
        description:
          "Early morning drive to Lake Eyasi to meet the Hadzabe tribe. Join them on a hunting and gathering expedition.",
      },
      {
        day: 3,
        title: "Local Market & Community Project",
        description:
          "Visit a bustling local market in Arusha. Afternoon visit to a community project (e.g., school or women's cooperative).",
      },
      {
        day: 4,
        title: "Departure",
        description: "Enjoy breakfast and transfer to Kilimanjaro International Airport (JRO) for your departure.",
      },
    ],
    included: [
      "Accommodation as per itinerary",
      "Meals as specified (B=Breakfast, L=Lunch, D=Dinner)",
      "Professional English-speaking guide",
      "All cultural fees and community contributions",
      "Transfers as per itinerary",
      "Bottled water during activities",
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Tips for guides and local hosts",
      "Personal expenses",
    ],
  },
  {
    slug: "luxury-safari",
    name: "Ultimate Luxury Safari",
    description:
      "Indulge in an exclusive and opulent safari experience with private game drives, lavish accommodations, and personalized service in Tanzania's finest reserves.",
    longDescription: `
      <p>For those seeking the pinnacle of African adventure combined with unparalleled comfort and exclusivity, our Ultimate Luxury Safari is the perfect choice. This bespoke journey takes you to Tanzania's most pristine wilderness areas, staying in world-class lodges and tented camps that redefine luxury in the bush.</p>
      <p>Enjoy private game drives in custom-designed vehicles, allowing for flexible schedules and intimate wildlife encounters. Experience gourmet dining under the stars, unwind in lavish suites with breathtaking views, and benefit from personalized service that caters to your every need.</p>
      <p>This safari includes visits to remote parts of the Serengeti, exclusive concessions, and potentially a hot air balloon safari for a bird's-eye view of the plains. It's an experience crafted for discerning travelers who desire the very best.</p>
    `,
    images: ["/images/ndege.jpeg", "/images/Serengeti.jpg", "/images/chui.jpg", "/images/gt1.jpg"],
    duration: "8 Days / 7 Nights",
    groupSize: "Private (2-4 people)",
    price: "From $6,000 per person",
    highlights: [
      "Private game drives with expert guides",
      "Stay in exclusive luxury lodges/camps",
      "Gourmet dining experiences",
      "Optional hot air balloon safari",
      "Personalized service and attention to detail",
      "Access to remote and less crowded areas",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Arusha Luxury Lodge",
        description: "Arrive at JRO, transfer to a luxurious lodge in Arusha. Relax and prepare for your safari.",
      },
      {
        day: 2,
        title: "Fly to Northern Serengeti",
        description:
          "Morning flight to a private airstrip in the Northern Serengeti. Transfer to your luxury tented camp. Afternoon private game drive.",
      },
      {
        day: 3,
        title: "Northern Serengeti Exploration",
        description:
          "Full day of private game drives in the Northern Serengeti, focusing on river crossings (seasonal) and predator action.",
      },
      {
        day: 4,
        title: "Central Serengeti & Hot Air Balloon",
        description:
          "Morning hot air balloon safari (optional, extra cost) over the Serengeti. Fly to Central Serengeti, transfer to another luxury camp. Afternoon game drive.",
      },
      {
        day: 5,
        title: "Full Day Central Serengeti",
        description:
          "Explore the diverse landscapes and abundant wildlife of the Central Serengeti on private game drives.",
      },
      {
        day: 6,
        title: "Ngorongoro Crater Luxury Lodge",
        description:
          "Morning game drive, then fly to Manyara Airstrip and transfer to a luxury lodge on the rim of the Ngorongoro Crater.",
      },
      {
        day: 7,
        title: "Ngorongoro Crater Descent",
        description:
          "Full day private game drive inside the Ngorongoro Crater, enjoying unparalleled wildlife viewing.",
      },
      {
        day: 8,
        title: "Departure",
        description:
          "After a leisurely breakfast, transfer to Manyara Airstrip for your flight back to JRO for departure.",
      },
    ],
    included: [
      "All internal flights as per itinerary",
      "Luxury accommodation as specified",
      "All meals (gourmet dining)",
      "Private 4x4 safari vehicle and expert guide",
      "All park fees and conservation levies",
      "Bottled water and selected beverages",
      "Laundry service at camps",
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Hot air balloon safari (unless specified)",
      "Premium alcoholic beverages",
      "Tips for guides and staff",
      "Personal expenses",
    ],
  },
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const tour = tours.find((t) => t.slug === params.slug)

  if (!tour) {
    return {
      title: "Tour Not Found - Ngonzi Tours",
      description: "The requested tour could not be found.",
    }
  }

  return {
    title: `${tour.name} - Ngonzi Tours`,
    description: tour.description,
    openGraph: {
      images: tour.images.length > 0 ? [tour.images[0]] : [],
    },
  }
}

export default function TourDetailPage({ params }: { params: { slug: string } }) {
  const tour = tours.find((t) => t.slug === params.slug)

  if (!tour) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="mb-4 text-3xl font-bold md:text-5xl">{tour.name}</h1>
      <p className="mb-6 text-xl text-muted-foreground">{tour.description}</p>

      {tour.images && tour.images.length > 0 && (
        <div className="mb-8">
          <ImageCarousel images={tour.images} />
        </div>
      )}

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold md:text-3xl">Overview</h2>
            <div
              className="prose max-w-none text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: tour.longDescription }}
            />
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold md:text-3xl">Highlights</h2>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {tour.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2 text-lg">
                  <MapPin className="mt-1 size-5 shrink-0 text-primary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold md:text-3xl">Itinerary</h2>
            <div className="space-y-6">
              {tour.itinerary.map((item) => (
                <div key={item.day} className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    {item.day}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold md:text-3xl">What's Included</h2>
            <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
              {tour.included.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-lg">
                  <CheckCircle className="size-5 text-green-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold md:text-3xl">What's Excluded</h2>
            <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
              {tour.excluded.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-lg">
                  <XCircle className="size-5 text-red-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-20 rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="mb-4 text-2xl font-semibold">Tour Details</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-lg">
                <Calendar className="size-6 text-muted-foreground" />
                <span>Duration: {tour.duration}</span>
              </li>
              <li className="flex items-center gap-3 text-lg">
                <Users className="size-6 text-muted-foreground" />
                <span>Group Size: {tour.groupSize}</span>
              </li>
              <li className="flex items-center gap-3 text-lg">
                <DollarSign className="size-6 text-muted-foreground" />
                <span>Price: {tour.price}</span>
              </li>
            </ul>
            <Button size="lg" className="mt-6 w-full">
              Book This Tour
            </Button>
          </div>
        </aside>
      </div>
    </div>
  )
}

// Dummy icons for the included/excluded lists
function CheckCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

function XCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  )
}
