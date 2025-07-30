import { createClient } from "@/lib/supabase"

const supabase = createClient()

export interface Tour {
  id: number
  name: string
  slug: string
  description: string
  category: string
  pricePerPerson: number
  duration: number
  groupSize: string
  location: string
  rating: number
  reviews: number
  highlights: string[]
  itinerary: { day: number; title: string; description: string }[]
  inclusions: string[]
  exclusions: string[]
  images: string[]
}

export interface BlogPost {
  id: number
  title: string
  slug: string
  author: string
  date: string
  category: string
  imageUrl: string
  excerpt: string
  content: string
}

export interface Destination {
  id: number
  name: string
  slug: string
  description: string
  imageUrl: string
  highlights: string[]
  bestTime: string
  activities: string[]
}

// Dummy data for demonstration purposes
// In a real application, this would be fetched from a database
const dummyTours: Tour[] = [
  {
    id: 1,
    name: "Serengeti Wildlife Safari",
    slug: "serengeti-wildlife-safari",
    description: "Experience the iconic Serengeti National Park, home to the Great Migration and abundant wildlife.",
    category: "Wildlife Safari",
    pricePerPerson: 2500,
    duration: 7,
    groupSize: "2-8 people",
    location: "Serengeti, Tanzania",
    rating: 4.9,
    reviews: 120,
    highlights: [
      "Witness the Great Migration (seasonal)",
      "Game drives in Serengeti National Park",
      "Spot the Big Five (lion, leopard, elephant, rhino, buffalo)",
      "Visit a Maasai village",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description:
          "Arrive at Kilimanjaro International Airport (JRO), meet your Ngonzi Tours representative, and transfer to your hotel in Arusha.",
      },
      {
        day: 2,
        title: "Arusha to Serengeti National Park",
        description:
          "After breakfast, drive to Serengeti National Park with a packed lunch. Enjoy an en-route game drive as you head to your lodge/camp.",
      },
      {
        day: 3,
        title: "Full Day Serengeti Exploration",
        description:
          "Spend a full day on game drives in the Serengeti, exploring different areas based on wildlife movements and the season.",
      },
      {
        day: 4,
        title: "Serengeti to Ngorongoro Crater",
        description:
          "Morning game drive in Serengeti, then drive to Ngorongoro Conservation Area. Descend into the Ngorongoro Crater for an afternoon game drive.",
      },
      {
        day: 5,
        title: "Ngorongoro to Tarangire National Park",
        description:
          "After breakfast, drive to Tarangire National Park, famous for its large elephant herds and baobab trees. Afternoon game drive.",
      },
      {
        day: 6,
        title: "Tarangire to Arusha",
        description: "Morning game drive in Tarangire, then drive back to Arusha. Enjoy a farewell dinner.",
      },
      {
        day: 7,
        title: "Departure",
        description: "After breakfast, transfer to Kilimanjaro International Airport (JRO) for your departure.",
      },
    ],
    inclusions: [
      "All park fees and government taxes",
      "Accommodation as per itinerary",
      "Meals as specified (B=Breakfast, L=Lunch, D=Dinner)",
      "Professional English-speaking safari guide",
      "4x4 safari vehicle with pop-up roof",
      "Bottled water during game drives",
      "Airport transfers",
    ],
    exclusions: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Tips for guide and staff",
      "Personal expenses (laundry, souvenirs, drinks)",
      "Optional activities (e.g., hot air balloon safari)",
    ],
    images: ["/images/Serengeti.jpg", "/images/nyumbu.jpeg", "/images/zebra.jpg", "/images/twiga.jpg"],
  },
  {
    id: 2,
    name: "Kilimanjaro Climbing - Machame Route",
    slug: "kilimanjaro-machame-route",
    description: "Trek to the summit of Mount Kilimanjaro via the scenic Machame Route, known as the 'Whiskey Route'.",
    category: "Mountain Climbing",
    pricePerPerson: 2200,
    duration: 7,
    groupSize: "1-10 people",
    location: "Mount Kilimanjaro, Tanzania",
    rating: 4.8,
    reviews: 85,
    highlights: [
      "Summit Uhuru Peak, the highest point in Africa",
      "Diverse landscapes from rainforest to alpine desert",
      "Experienced mountain guides and porters",
      "Acclimatization day for better success rates",
    ],
    itinerary: [
      {
        day: 1,
        title: "Machame Gate to Machame Camp",
        description: "Drive to Machame Gate, register, and begin your trek through the rainforest to Machame Camp.",
      },
      {
        day: 2,
        title: "Machame Camp to Shira Camp",
        description: "Continue ascending through moorland, enjoying views of Kibo before reaching Shira Camp.",
      },
      {
        day: 3,
        title: "Shira Camp to Barranco Camp (via Lava Tower)",
        description:
          "Trek to Lava Tower for acclimatization, then descend to Barranco Camp, famous for its 'Breakfast Wall'.",
      },
      {
        day: 4,
        title: "Barranco Camp to Karanga Camp",
        description: "Conquer the Barranco Wall, then continue through valleys and ridges to Karanga Camp.",
      },
      {
        day: 5,
        title: "Karanga Camp to Barafu Camp",
        description:
          "A shorter day to Barafu Camp, the base camp for the summit attempt. Rest and prepare for the summit night.",
      },
      {
        day: 6,
        title: "Summit Attempt (Barafu to Uhuru Peak to Mweka Camp)",
        description: "Begin your ascent around midnight, reaching Uhuru Peak at sunrise. Descend to Mweka Camp.",
      },
      {
        day: 7,
        title: "Mweka Camp to Mweka Gate & Departure",
        description:
          "Final descent through the rainforest to Mweka Gate. Receive your summit certificates and transfer back to Arusha.",
      },
    ],
    inclusions: [
      "Park fees and rescue fees",
      "Professional mountain guides, porters, and cook",
      "All meals on the mountain",
      "Tents and camping equipment (excluding sleeping bags)",
      "Bottled water on first day, then filtered water",
      "Pre- and post-climb accommodation in Arusha (1 night each)",
      "Airport transfers",
    ],
    exclusions: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Tips for guides and porters",
      "Personal climbing gear (e.g., sleeping bag, trekking poles)",
      "Personal expenses",
    ],
    images: ["/images/Kilimanjaro.webp", "/images/kili1.webp", "/images/tree.webp"],
  },
  {
    id: 3,
    name: "Zanzibar Beach Relaxation",
    slug: "zanzibar-beach-relaxation",
    description: "Unwind on the pristine white sands of Zanzibar, exploring Stone Town and enjoying water activities.",
    category: "Beach Holidays",
    pricePerPerson: 1200,
    duration: 5,
    groupSize: "1-10 people",
    location: "Zanzibar, Tanzania",
    rating: 4.7,
    reviews: 95,
    highlights: [
      "Explore historic Stone Town (UNESCO World Heritage Site)",
      "Relax on beautiful beaches (Nungwi, Kendwa)",
      "Snorkeling or diving in Mnemba Atoll",
      "Spice farm tour",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Zanzibar & Stone Town",
        description:
          "Arrive at Zanzibar Airport, transfer to your hotel in Stone Town. Afternoon walking tour of the historic town.",
      },
      {
        day: 2,
        title: "Spice Farm & North Coast Beach",
        description:
          "Morning spice farm tour, learning about Zanzibar's rich spice history. Afternoon transfer to a beach resort on the north coast (e.g., Nungwi/Kendwa).",
      },
      {
        day: 3,
        title: "Mnemba Atoll Snorkeling/Diving",
        description:
          "Full day trip to Mnemba Atoll for snorkeling or diving in crystal-clear waters, known for vibrant marine life.",
      },
      {
        day: 4,
        title: "Beach Relaxation & Optional Activities",
        description:
          "Enjoy a free day at the beach. Optional activities include dhow cruises, jet skiing, or simply relaxing by the ocean.",
      },
      {
        day: 5,
        title: "Departure",
        description: "Enjoy a final breakfast, then transfer to Zanzibar Airport for your departure.",
      },
    ],
    inclusions: [
      "Airport transfers in Zanzibar",
      "Accommodation as per itinerary",
      "Daily breakfast",
      "Stone Town tour",
      "Spice farm tour",
      "Mnemba Atoll snorkeling/diving trip (shared boat)",
    ],
    exclusions: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Lunches and dinners",
      "Tips for guides and staff",
      "Optional activities not listed",
    ],
    images: ["/images/mnemba.jpg", "/images/stone-town.jpg"],
  },
  {
    id: 4,
    name: "Maasai Cultural Immersion",
    slug: "maasai-cultural-immersion",
    description: "An authentic cultural experience living with the Maasai people and learning their traditions.",
    category: "Cultural Tours",
    pricePerPerson: 900,
    duration: 3,
    groupSize: "2-6 people",
    location: "Arusha Region, Tanzania",
    rating: 4.6,
    reviews: 50,
    highlights: [
      "Live with a Maasai family in a traditional boma",
      "Participate in daily Maasai activities",
      "Learn about Maasai culture, traditions, and history",
      "Guided walks in the local area",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Welcome to Maasai Boma",
        description:
          "Drive from Arusha to a Maasai village. Receive a traditional welcome, settle into your boma, and learn about daily life.",
      },
      {
        day: 2,
        title: "Maasai Daily Life & Traditions",
        description:
          "Participate in activities like milking cows, fetching water, herding cattle, and learning about traditional medicine and crafts. Evening storytelling around the fire.",
      },
      {
        day: 3,
        title: "Village Exploration & Departure",
        description:
          "Morning walk with Maasai warriors, learning about their tracking skills and local flora/fauna. Farewell ceremony and drive back to Arusha.",
      },
    ],
    inclusions: [
      "Transportation from/to Arusha",
      "Accommodation in a traditional Maasai boma",
      "All meals during the cultural tour",
      "Maasai guide and cultural activities",
      "Community fees",
    ],
    exclusions: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Tips for hosts and guides",
      "Personal expenses",
    ],
    images: ["/images/cultural.webp", "/images/picha-man.jpg"],
  },
  {
    id: 5,
    name: "Kenya Big Five Safari",
    slug: "kenya-big-five-safari",
    description: "A classic Kenyan safari focusing on spotting the Big Five in Amboseli and Maasai Mara.",
    category: "Wildlife Safari",
    pricePerPerson: 2800,
    duration: 6,
    groupSize: "2-7 people",
    location: "Kenya",
    rating: 4.9,
    reviews: 105,
    highlights: [
      "Stunning views of Mount Kilimanjaro from Amboseli",
      "Exceptional elephant viewing in Amboseli",
      "Vast plains and abundant wildlife in Maasai Mara",
      "Optional hot air balloon safari over the Mara",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Nairobi & Transfer to Amboseli",
        description:
          "Arrive at Jomo Kenyatta International Airport (NBO), meet your guide, and drive to Amboseli National Park. Afternoon game drive.",
      },
      {
        day: 2,
        title: "Full Day Amboseli Exploration",
        description:
          "Enjoy morning and afternoon game drives in Amboseli, famous for its large elephant herds and views of Kilimanjaro.",
      },
      {
        day: 3,
        title: "Amboseli to Maasai Mara",
        description:
          "After breakfast, fly or drive to the Maasai Mara National Reserve. Afternoon game drive upon arrival.",
      },
      {
        day: 4,
        title: "Full Day Maasai Mara Game Drives",
        description:
          "Spend a full day exploring the Maasai Mara, renowned for its high concentration of wildlife and the Great Migration (seasonal).",
      },
      {
        day: 5,
        title: "Maasai Mara Optional Activities",
        description:
          "Morning game drive or optional hot air balloon safari. Visit a Maasai village or enjoy a nature walk.",
      },
      {
        day: 6,
        title: "Maasai Mara to Nairobi & Departure",
        description:
          "After breakfast, transfer to the airstrip for your flight back to Nairobi. Connect to your international departure flight.",
      },
    ],
    inclusions: [
      "All park fees and government taxes",
      "Accommodation as per itinerary",
      "Meals as specified (B=Breakfast, L=Lunch, D=Dinner)",
      "Professional English-speaking safari guide",
      "4x4 safari vehicle",
      "Internal flights (if applicable)",
      "Bottled water during game drives",
    ],
    exclusions: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Tips for guide and staff",
      "Personal expenses",
      "Optional activities (e.g., hot air balloon safari, Maasai village visit)",
    ],
    images: ["/images/kenya G.webp", "/images/amboseli.jpg", "/images/chui.jpg", "/images/ndege.jpeg"],
  },
  {
    id: 6,
    name: "Luxury Tanzania Safari & Zanzibar",
    slug: "luxury-tanzania-safari-zanzibar",
    description: "A premium combination of Tanzania's best wildlife safaris and a luxurious beach escape in Zanzibar.",
    category: "Luxury Safari",
    pricePerPerson: 4500,
    duration: 10,
    groupSize: "2-6 people",
    location: "Tanzania & Zanzibar",
    rating: 5.0,
    reviews: 75,
    highlights: [
      "Luxury accommodations in prime safari locations",
      "Private game drives in Serengeti and Ngorongoro",
      "Exclusive beach resort stay in Zanzibar",
      "Seamless internal transfers",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description: "Arrive at JRO, transfer to a luxury lodge in Arusha for relaxation.",
      },
      {
        day: 2,
        title: "Arusha to Tarangire National Park",
        description: "Private transfer to Tarangire, afternoon game drive, staying at a luxury tented camp.",
      },
      {
        day: 3,
        title: "Tarangire to Ngorongoro Crater",
        description:
          "Morning game drive in Tarangire, then drive to Ngorongoro Conservation Area. Descend into the crater for an extensive game drive.",
      },
      {
        day: 4,
        title: "Ngorongoro to Serengeti National Park",
        description:
          "Morning activity (e.g., crater rim walk), then fly to Serengeti. Afternoon game drive in Serengeti.",
      },
      {
        day: 5,
        title: "Full Day Serengeti Luxury Safari",
        description:
          "Enjoy private game drives in the Serengeti, with picnic lunches in the bush. Optional hot air balloon safari.",
      },
      {
        day: 6,
        title: "Serengeti to Zanzibar",
        description: "Morning game drive, then fly from Serengeti to Zanzibar. Transfer to a luxury beach resort.",
      },
      {
        day: 7,
        title: "Zanzibar Beach & Relaxation",
        description: "Day at leisure to enjoy the resort facilities, pristine beaches, or optional water sports.",
      },
      {
        day: 8,
        title: "Stone Town & Spice Tour",
        description:
          "Explore the UNESCO World Heritage site of Stone Town with a private guide, followed by a spice farm tour.",
      },
      {
        day: 9,
        title: "Zanzibar Optional Excursion",
        description:
          "Choose from optional activities like a Blue Lagoon snorkeling trip, Jozani Forest visit, or another day of beach relaxation.",
      },
      {
        day: 10,
        title: "Departure from Zanzibar",
        description: "Enjoy a final breakfast, then transfer to Zanzibar International Airport for your departure.",
      },
    ],
    inclusions: [
      "All luxury accommodations",
      "All park fees and internal flights",
      "Private 4x4 safari vehicle with guide",
      "All meals as specified",
      "Bottled water, soft drinks, and local beers/wines on safari",
      "Airport transfers",
      "Guided tours in Zanzibar",
    ],
    exclusions: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Tips for guides and staff",
      "Premium alcoholic beverages",
      "Optional activities not listed",
    ],
    images: ["/images/gt1.jpg", "/images/wildlifec-good.webp", "/images/zero.jpeg"],
  },
]

const dummyBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Great Migration: A Spectacle of Nature",
    slug: "great-migration-spectacle",
    author: "Ngonzi Tours Team",
    date: "July 15, 2025",
    category: "Wildlife",
    imageUrl: "/images/nyumbu.jpeg",
    excerpt:
      "Witness millions of wildebeest and zebras traverse the plains of Serengeti and Maasai Mara in search of greener pastures. Learn about this incredible natural phenomenon.",
    content: `
      <p>The Great Migration is one of the most awe-inspiring natural events on Earth, involving the movement of over 1.5 million wildebeest, 200,000 zebras, and numerous gazelles across the Serengeti and Maasai Mara ecosystems. This annual cycle is driven by the search for fresh grazing and water, following the seasonal rains.</p>
      <p>Starting typically in the southern Serengeti (Tanzania) around January-March with the calving season, the herds then move northwards through the central and western corridors, often crossing the Grumeti and Mara Rivers, which are famous for dramatic crocodile encounters. By July-October, they are usually in the northern Serengeti and into Kenya's Maasai Mara, before returning south as the short rains begin in November-December.</p>
      <p>Witnessing the Great Migration is a highlight for many safari-goers. It's not just about the sheer numbers of animals; it's also about the intense predator-prey interactions that occur as lions, leopards, cheetahs, and hyenas follow the herds. Planning your safari around the migration requires careful timing and flexibility, as the exact movements depend on rainfall patterns each year.</p>
      <p>Ngonzi Tours offers expertly guided safaris to put you in the best position to experience this incredible spectacle. Our guides are knowledgeable about the migration patterns and will ensure you have an unforgettable experience.</p>
    `,
  },
  {
    id: 2,
    title: "Conquering Kilimanjaro: A Climber's Guide",
    slug: "conquering-kilimanjaro-guide",
    author: "Adventure Seeker",
    date: "June 20, 2025",
    category: "Mountain Climbing",
    imageUrl: "/images/Kilimanjaro.webp",
    excerpt:
      "Dreaming of standing on Africa's highest peak? This guide covers everything you need to know about climbing Mount Kilimanjaro.",
    content: `
      <p>Mount Kilimanjaro, the highest peak in Africa, stands majestically at 5,895 meters (19,341 feet) above sea level. It's a popular destination for trekkers worldwide, offering a challenging yet rewarding experience without requiring technical climbing skills.</p>
      <h3>Choosing Your Route</h3>
      <p>There are several routes to the summit, each offering different scenery, difficulty levels, and acclimatization profiles:</p>
      <ul>
        <li><strong>Machame Route:</strong> Known as the "Whiskey Route," it's popular for its scenic beauty and good acclimatization profile over 6-7 days.</li>
        <li><strong>Lemosho Route:</strong> A longer, more remote, and highly scenic route, typically 7-8 days, offering excellent acclimatization.</li>
        <li><strong>Marangu Route:</strong> The "Coca-Cola Route," known for its hut accommodation and shorter duration (5-6 days), but with a lower success rate due to rapid ascent.</li>
        <li><strong>Rongai Route:</strong> Approaches from the north, drier side, and is a good option during the rainy season.</li>
      </ul>
      <h3>Preparation is Key</h3>
      <p>Successful summiting largely depends on physical and mental preparation. Regular hiking, cardio exercises, and strength training are crucial. Acclimatization is vital, and choosing a longer route (7+ days) significantly increases your chances of success.</p>
      <h3>What to Pack</h3>
      <p>Layered clothing is essential due to varying temperatures. You'll need warm gear for the summit night, waterproof outer layers, sturdy hiking boots, a good sleeping bag, and a daypack. Ngonzi Tours provides a comprehensive packing list and high-quality camping equipment.</p>
      <h3>Health and Safety</h3>
      <p>Acute Mountain Sickness (AMS) is a risk. Our experienced guides are trained to recognize and manage symptoms. Stay hydrated, eat well, and ascend slowly. We prioritize your safety above all else.</p>
      <p>Climbing Kilimanjaro is an unforgettable journey. With proper preparation and a reliable tour operator like Ngonzi Tours, you can achieve your dream of standing on the Roof of Africa.</p>
    `,
  },
  {
    id: 3,
    title: "Zanzibar: The Spice Island's Charms",
    slug: "zanzibar-spice-island-charms",
    author: "Travel Enthusiast",
    date: "May 10, 2025",
    category: "Beach Holidays",
    imageUrl: "/images/mnemba.jpg",
    excerpt:
      "Discover the enchanting allure of Zanzibar, from its historic Stone Town to its breathtaking white-sand beaches.",
    content: `
      <p>Zanzibar, an archipelago off the coast of Tanzania, is a tropical paradise steeped in history and culture. Known as the "Spice Island," it offers a unique blend of stunning beaches, vibrant markets, and ancient architecture.</p>
      <h3>Stone Town: A UNESCO Gem</h3>
      <p>The heart of Zanzibar is Stone Town, a UNESCO World Heritage site. Its labyrinthine alleys, bustling bazaars, and intricately carved wooden doors tell tales of its rich past as a trading hub. Explore the Old Fort, the House of Wonders, and the former slave market. Don't miss the sunset dhow cruises from the harbor.</p>
      <h3>Pristine Beaches</h3>
      <p>Beyond Stone Town, Zanzibar boasts some of the world's most beautiful beaches. Nungwi and Kendwa in the north are famous for their vibrant atmosphere and stunning sunsets. Paje and Jambiani on the southeast coast offer a more laid-back vibe, perfect for kitesurfing and quiet relaxation. The turquoise waters are ideal for swimming, snorkeling, and diving, especially around Mnemba Atoll, a marine conservation area.</p>
      <h3>Spice Farm Tours</h3>
      <p>A visit to Zanzibar isn't complete without a spice farm tour. Learn about the island's history as a major spice producer, and discover how cloves, nutmeg, cinnamon, and vanilla are grown and used. It's a sensory experience that connects you to the island's heritage.</p>
      <p>Whether you're seeking adventure, relaxation, or cultural immersion, Zanzibar offers an unforgettable experience. Combine it with a safari for the ultimate East African journey!</p>
    `,
  },
  {
    id: 4,
    title: "A Guide to Responsible Safari Tourism",
    slug: "responsible-safari-tourism",
    author: "Ngonzi Tours Team",
    date: "April 1, 2025",
    category: "Travel Tips",
    imageUrl: "/images/tembo.webp",
    excerpt: "Learn how to make your safari adventure sustainable and beneficial for local communities and wildlife.",
    content: `
      <p>Responsible tourism is crucial for preserving the natural beauty and cultural heritage of destinations like Tanzania and Kenya. As a safari-goer, you have a significant role to play in ensuring your trip has a positive impact.</p>
      <h3>Support Local Communities</h3>
      <ul>
        <li><strong>Choose local operators:</strong> Opt for tour companies like Ngonzi Tours that are locally owned and employ local staff. This ensures that tourism revenue directly benefits the community.</li>
        <li><strong>Buy local crafts:</strong> Purchase souvenirs from local artisans. Bargain respectfully, but remember that a small amount to you can make a big difference to them.</li>
        <li><strong>Visit cultural villages responsibly:</strong> If visiting a Maasai or other cultural village, ensure your visit is respectful and contributes directly to the community. Avoid treating people as exhibits.</li>
      </ul>
      <h3>Protect Wildlife and Environment</h3>
      <ul>
        <li><strong>Stay on designated paths:</strong> During game drives, ensure your vehicle stays on established tracks to minimize disturbance to wildlife and vegetation.</li>
        <li><strong>Maintain a respectful distance:</strong> Never approach animals too closely. Your guide will know the appropriate distance.</li>
        <li><strong>No littering:</strong> Carry out everything you carry in. Leave no trace behind.</li>
        <li><strong>Support conservation efforts:</strong> Consider donating to local conservation organizations or choosing lodges that actively participate in conservation.</li>
        <li><strong>Minimize water and energy use:</strong> Be mindful of your consumption, especially in remote areas where resources are scarce.</li>
      </ul>
      <h3>Respect Local Culture</h3>
      <ul>
        <li><strong>Dress modestly:</strong> Especially outside of tourist resorts, dress respectfully, covering shoulders and knees.</li>
        <li><strong>Ask before photographing:</strong> Always ask for permission before taking photos of people.</li>
        <li><strong>Learn basic phrases:</strong> A few words of Swahili (e.g., "Jambo," "Asante") can go a long way in showing respect and building rapport.</li>
      </ul>
      <p>By following these guidelines, you can ensure your safari is not only an incredible personal experience but also a positive force for conservation and community development.</p>
    `,
  },
]

const dummyDestinations: Destination[] = [
  {
    id: 1,
    name: "Tanzania",
    slug: "tanzania",
    description:
      "Home to the Serengeti, Mount Kilimanjaro, and the spice island of Zanzibar, Tanzania offers unparalleled safari and beach experiences.",
    imageUrl: "/images/Serengeti.jpg",
    highlights: [
      "Serengeti National Park & Great Migration",
      "Ngorongoro Crater",
      "Mount Kilimanjaro",
      "Zanzibar beaches & Stone Town",
      "Tarangire National Park (elephants)",
    ],
    bestTime: "June to October (dry season for safaris), December to February (calving season in Serengeti)",
    activities: ["Wildlife safaris", "Mountain climbing", "Beach holidays", "Cultural tours", "Snorkeling & diving"],
  },
  {
    id: 2,
    name: "Kenya",
    slug: "kenya",
    description:
      "Known for its classic safaris, diverse landscapes, and vibrant Maasai culture, Kenya is a premier African travel destination.",
    imageUrl: "/images/kenya G.webp",
    highlights: [
      "Maasai Mara National Reserve & Great Migration",
      "Amboseli National Park (Kilimanjaro views & elephants)",
      "Lake Nakuru National Park (rhinos & flamingos)",
      "Samburu National Reserve (unique northern species)",
      "Nairobi National Park (city safari)",
    ],
    bestTime: "July to October (dry season, migration in Mara), January to March (warm and dry)",
    activities: ["Wildlife safaris", "Cultural experiences", "Bird watching", "Hot air balloon safaris", "City tours"],
  },
  {
    id: 3,
    name: "Zanzibar",
    slug: "zanzibar",
    description:
      "A tropical paradise off the coast of Tanzania, Zanzibar offers pristine beaches, historic Stone Town, and a rich cultural heritage.",
    imageUrl: "/images/mnemba.jpg",
    highlights: [
      "Stone Town (UNESCO World Heritage Site)",
      "Nungwi & Kendwa beaches",
      "Mnemba Atoll (snorkeling & diving)",
      "Spice farm tours",
      "Jozani Forest (Red Colobus monkeys)",
    ],
    bestTime: "June to October (dry and sunny), December to February (hot and dry)",
    activities: ["Beach relaxation", "Snorkeling & diving", "Cultural tours", "Water sports", "Dhow cruises"],
  },
]

// This file can be used to centralize data fetching logic or mock data.
// For now, it's empty as data is directly in page components for simplicity.
// As the project grows, consider moving data fetching here.

export async function getAllTours(): Promise<Tour[]> {
  // In a real app, fetch from Supabase:
  // const { data, error } = await supabase.from('tours').select('*');
  // if (error) throw error;
  // return data;
  return dummyTours
}

export async function getTourBySlug(slug: string): Promise<Tour | undefined> {
  // In a real app, fetch from Supabase:
  // const { data, error } = await supabase.from('tours').select('*').eq('slug', slug).single();
  // if (error) throw error;
  // return data;
  return dummyTours.find((tour) => tour.slug === slug)
}

export async function getToursByCategory(category: string): Promise<Tour[]> {
  // In a real app, fetch from Supabase:
  // const { data, error } = await supabase.from('tours').select('*').eq('category', category);
  // if (error) throw error;
  // return data;
  return dummyTours.filter((tour) => tour.category === category)
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // In a real app, fetch from Supabase:
  // const { data, error } = await supabase.from('blog_posts').select('*');
  // if (error) throw error;
  // return data;
  return dummyBlogPosts
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  // In a real app, fetch from Supabase:
  // const { data, error } = await supabase.from('blog_posts').select('*').eq('slug', slug).single();
  // if (error) throw error;
  // return data;
  return dummyBlogPosts.find((post) => post.slug === slug)
}

export async function getAllDestinations(): Promise<Destination[]> {
  // In a real app, fetch from Supabase:
  // const { data, error } = await supabase.from('destinations').select('*');
  // if (error) throw error;
  // return data;
  return dummyDestinations
}

export async function getDestinationBySlug(slug: string): Promise<Destination | undefined> {
  // In a real app, fetch from Supabase:
  // const { data, error } = await supabase.from('destinations').select('*').eq('slug', slug).single();
  // if (error) throw error;
  // return data;
  return dummyDestinations.find((destination) => destination.slug === slug)
}
