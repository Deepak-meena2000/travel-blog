import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  ArrowRight,
  Info,
  Calendar,
  DollarSign,
  Plane,
  Wifi,
  Shield,
  Utensils,
  Globe,
  AlertTriangle,
  Check,
} from "lucide-react"
import { destinations } from "@/data/destinations"
import { ThankYouSection } from "@/components/thank-you-section"

type Props = {
  params: { country: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const country = destinations.find((d) => d.slug === params.country)

  if (!country) {
    return {
      title: "Travel Guide Not Found",
    }
  }

  return {
    title: `Things to Know Before Going to ${country.name}`,
    description: `Essential travel tips, information, and advice for your trip to ${country.name}. Visa requirements, best time to visit, currency, safety tips and more.`,
    openGraph: {
      title: `${country.name} Travel Guide - Things to Know Before Going`,
      description: `Essential travel tips, information, and advice for your trip to ${country.name}.`,
    },
  }
}

export async function generateStaticParams() {
  return destinations.map((destination) => ({
    country: destination.slug,
  }))
}

// Mock data for travel guide
const travelGuideData = {
  bali: {
    visaInfo:
      "Most visitors to Bali can obtain a visa on arrival valid for 30 days. The cost is approximately $35 USD. Ensure your passport is valid for at least 6 months from your arrival date.",
    bestTimeToVisit:
      "The best time to visit Bali is during the dry season from April to October. The weather is sunny with lower humidity, making it perfect for beach activities and exploring.",
    highSeason: "July, August, and during major holidays",
    lowSeason: "January to March (rainy season)",
    currency: "Indonesian Rupiah (IDR)",
    creditCardAcceptance: "widely accepted in tourist areas, but carry cash for smaller vendors and rural areas",
    moneyTips: [
      "ATMs are widely available in tourist areas",
      "Inform your bank about your travel plans to avoid card blocks",
      "Always have some cash on hand for small purchases and in rural areas",
      "Be aware of money changers offering too-good-to-be-true rates",
    ],
    healthAndSafety:
      "Bali is generally safe for tourists, but take standard precautions. Tap water is not safe to drink, so stick to bottled water. Consider travel insurance that covers medical evacuation.",
    safetyTips: [
      "Be cautious of motorbike rentals if you're inexperienced",
      "Watch out for monkeys at temples - they can be aggressive",
      "Avoid drinking tap water or consuming ice made from tap water",
      "Use reputable taxi services or ride-hailing apps",
    ],
    internetInfo:
      "Wi-Fi is widely available in hotels, cafes, and restaurants. For constant connectivity, consider purchasing a local SIM card.",
    connectivityTips: [
      "Local SIM cards are inexpensive and provide good coverage",
      "Telkomsel offers the best coverage across Bali",
      "Purchase SIM cards at the airport or official stores, not from street vendors",
    ],
    gettingThere:
      "Most international visitors arrive at Ngurah Rai International Airport (DPS) in Denpasar. Direct flights are available from many major cities in Asia and Australia.",
    airports: [
      {
        name: "Ngurah Rai International Airport",
        code: "DPS",
        location: "Denpasar",
      },
    ],
    gettingAround:
      "Getting around Bali can be done via taxis, ride-hailing apps, private drivers, or motorbike rentals. For longer distances, consider hiring a driver for the day.",
    transportationOptions: [
      {
        name: "Taxi",
        icon: <MapPin className="h-4 w-4" />,
        description: "Use metered Blue Bird taxis or ride-hailing apps like Grab or Gojek for reliable service.",
      },
      {
        name: "Private Driver",
        icon: <MapPin className="h-4 w-4" />,
        description:
          "Hiring a driver costs around IDR 500,000-700,000 per day and is great for exploring multiple sites.",
      },
      {
        name: "Motorbike Rental",
        icon: <MapPin className="h-4 w-4" />,
        description: "Popular but risky. Only rent if experienced. Costs around IDR 50,000-70,000 per day.",
      },
      {
        name: "Shuttle Bus",
        icon: <MapPin className="h-4 w-4" />,
        description: "Kura-Kura Bus connects major tourist areas. Affordable but limited routes.",
      },
    ],
    accommodation:
      "Bali offers a wide range of accommodation options, from budget hostels to luxury villas. Prices vary significantly based on location and season.",
    accommodationTypes: [
      {
        name: "Luxury Resorts",
        icon: <MapPin className="h-4 w-4" />,
        description: "High-end properties with full amenities, often with beach or rice field views.",
        priceRange: "$150-$1000+ per night",
      },
      {
        name: "Private Villas",
        icon: <MapPin className="h-4 w-4" />,
        description: "Popular option offering privacy and often private pools. Great for groups or families.",
        priceRange: "$80-$500+ per night",
      },
      {
        name: "Boutique Hotels",
        icon: <MapPin className="h-4 w-4" />,
        description: "Stylish, smaller hotels with personalized service and unique design.",
        priceRange: "$50-$200 per night",
      },
      {
        name: "Budget Hostels",
        icon: <MapPin className="h-4 w-4" />,
        description: "Affordable options for backpackers and solo travelers.",
        priceRange: "$5-$30 per night",
      },
    ],
    recommendedAreas: [
      {
        name: "Seminyak",
        description: "Upscale area with trendy beach clubs, boutique shopping, and fine dining.",
        bestFor: "Couples, luxury travelers, foodies",
      },
      {
        name: "Ubud",
        description: "Cultural heart of Bali surrounded by rice terraces and rainforests.",
        bestFor: "Cultural experiences, yoga retreats, nature lovers",
      },
      {
        name: "Canggu",
        description: "Hip, laid-back surf town with a booming digital nomad scene.",
        bestFor: "Digital nomads, surfers, young travelers",
      },
      {
        name: "Nusa Dua",
        description: "Gated resort area with pristine beaches and family-friendly activities.",
        bestFor: "Families, resort vacations, water sports",
      },
    ],
    foodAndDrink:
      "Balinese cuisine is flavorful and diverse, featuring aromatic spices, fresh seafood, and tropical fruits. Don't miss trying local specialties like Babi Guling (suckling pig) and Nasi Campur (mixed rice).",
    mustTryDishes: [
      {
        name: "Babi Guling (Suckling Pig)",
        description:
          "Bali's most famous dish - a whole pig roasted with a blend of turmeric, coriander seeds, lemongrass, black pepper, and garlic.",
      },
      {
        name: "Nasi Campur",
        description:
          "Mixed rice dish with small portions of various sides like meat, vegetables, peanuts, eggs, and fried-shrimp krupuk.",
      },
      {
        name: "Sate Lilit",
        description:
          "Minced seafood or meat mixed with coconut, lime juice, and spices, then wrapped around lemongrass or bamboo sticks and grilled.",
      },
    ],
    cultureAndCustoms:
      "Balinese culture is deeply rooted in Hinduism, with daily offerings (canang sari) and frequent ceremonies. Respect local customs by dressing modestly at temples and participating respectfully in cultural events.",
    culturalTips: [
      "Cover shoulders and knees when visiting temples",
      "Remove shoes before entering homes and some businesses",
      "Use your right hand for giving and receiving items",
      "Don't touch people's heads as they're considered sacred",
      "Ask permission before taking photos of locals, especially during ceremonies",
    ],
    languageTips:
      " English is widely spoken in tourist areas, but learning a few basic Indonesian or Balinese phrases will be appreciated by locals.",
    usefulPhrases: [
      {
        phrase: "Hello",
        translation: "Halo (Indonesian) / Om Swastiastu (Balinese greeting)",
        pronunciation: "HAH-loh / Om swas-tee-AS-tu",
      },
      {
        phrase: "Thank you",
        translation: "Terima kasih (Indonesian) / Suksma (Balinese)",
        pronunciation: "tuh-REE-mah KAH-see / SOOK-smah",
      },
      {
        phrase: "Yes/No",
        translation: "Ya/Tidak",
        pronunciation: "YAH / TEE-dak",
      },
      {
        phrase: "How much?",
        translation: "Berapa harganya?",
        pronunciation: "buh-RAH-pah HAR-gah-nyah",
      },
    ],
  },
}

export default function TravelGuidePage({ params }: Props) {
  const country = destinations.find((d) => d.slug === params.country)

  if (!country) {
    notFound()
  }

  // Get travel guide data or use default
  const guideData = travelGuideData[params.country as keyof typeof travelGuideData] || travelGuideData.bali

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-80 bg-slate-800">
        <Image
          src={country.image || "/placeholder.svg?height=320&width=800"}
          alt={country.name}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-slate-800/60" />
        <div className="relative max-8-xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Things to Know Before Going to {country.name}</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Essential travel tips, information, and advice for your trip to {country.name}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-8-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="essentials" className="animate-fade-in">
                <TabsList className="w-full justify-start overflow-x-auto mb-8">
                  <TabsTrigger value="essentials" className="flex items-center gap-2">
                    <Info className="h-4 w-4" />
                    Essentials
                  </TabsTrigger>
                  <TabsTrigger value="transportation" className="flex items-center gap-2">
                    <Plane className="h-4 w-4" />
                    Transportation
                  </TabsTrigger>
                  <TabsTrigger value="accommodation" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Accommodation
                  </TabsTrigger>
                  <TabsTrigger value="food" className="flex items-center gap-2">
                    <Utensils className="h-4 w-4" />
                    Food & Drink
                  </TabsTrigger>
                  <TabsTrigger value="culture" className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    Culture
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="essentials" className="space-y-8 animate-slide-up">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Plane className="w-5 h-5 text-blue-600" />
                        </div>
                        <h2 className="text-xl font-bold">Visa Requirements</h2>
                      </div>
                      <p className="text-gray-600 mb-4">{guideData.visaInfo}</p>
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start">
                        <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-amber-800">
                          Visa requirements can change. Always check the official embassy website or consult with your
                          travel agent for the most up-to-date information.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-green-600" />
                        </div>
                        <h2 className="text-xl font-bold">Best Time to Visit</h2>
                      </div>
                      <p className="text-gray-600 mb-4">{guideData.bestTimeToVisit}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center mb-2">
                            <Calendar className="h-5 w-5 text-teal-600 mr-2" />
                            <h3 className="font-bold">High Season</h3>
                          </div>
                          <p className="text-sm text-gray-600">{guideData.highSeason}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center mb-2">
                            <Calendar className="h-5 w-5 text-teal-600 mr-2" />
                            <h3 className="font-bold">Low Season</h3>
                          </div>
                          <p className="text-sm text-gray-600">{guideData.lowSeason}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <DollarSign className="w-5 h-5 text-purple-600" />
                        </div>
                        <h2 className="text-xl font-bold">Currency & Money</h2>
                      </div>
                      <p className="text-gray-600 mb-4">
                        The official currency of {country.name} is the {guideData.currency}. Credit cards are{" "}
                        {guideData.creditCardAcceptance}.
                      </p>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold mb-3">Money Tips:</h3>
                        <ul className="space-y-2">
                          {guideData.moneyTips.map((tip, i) => (
                            <li key={i} className="flex items-start">
                              <DollarSign className="h-5 w-5 mr-2 text-teal-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                          <Shield className="w-5 h-5 text-red-600" />
                        </div>
                        <h2 className="text-xl font-bold">Health & Safety</h2>
                      </div>
                      <p className="text-gray-600 mb-4">{guideData.healthAndSafety}</p>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold mb-3">Safety Tips:</h3>
                        <ul className="space-y-2">
                          {guideData.safetyTips.map((tip, i) => (
                            <li key={i} className="flex items-start">
                              <Check className="h-5 w-5 mr-2 text-teal-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Wifi className="w-5 h-5 text-blue-600" />
                        </div>
                        <h2 className="text-xl font-bold">Internet & Connectivity</h2>
                      </div>
                      <p className="text-gray-600 mb-4">{guideData.internetInfo}</p>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold mb-3">Connectivity Tips:</h3>
                        <ul className="space-y-2">
                          {guideData.connectivityTips.map((tip, i) => (
                            <li key={i} className="flex items-start">
                              <Check className="h-5 w-5 mr-2 text-teal-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="transportation" className="space-y-8 animate-slide-up">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Plane className="w-5 h-5 text-blue-600" />
                        </div>
                        <h2 className="text-xl font-bold">Getting to {country.name}</h2>
                      </div>
                      <p className="text-gray-600 mb-4">{guideData.gettingThere}</p>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold mb-3">Major Airports:</h3>
                        <ul className="space-y-4">
                          {guideData.airports.map((airport, i) => (
                            <li key={i} className="flex items-start">
                              <Plane className="h-5 w-5 mr-2 text-teal-600 flex-shrink-0 mt-0.5" />
                              <div>
                                <span className="font-medium text-gray-900">{airport.name}</span>
                                <span className="text-sm text-gray-500 block">
                                  {airport.code} • {airport.location}
                                </span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-green-600" />
                        </div>
                        <h2 className="text-xl font-bold">Getting Around {country.name}</h2>
                      </div>
                      <p className="text-gray-600 mb-4">{guideData.gettingAround}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {guideData.transportationOptions.map((option, i) => (
                          <div key={i} className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-center mb-2">
                              <div className="bg-teal-100 text-teal-600 p-1 rounded mr-2">{option.icon}</div>
                              <h3 className="font-bold">{option.name}</h3>
                            </div>
                            <p className="text-sm text-gray-600">{option.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="accommodation" className="space-y-8 animate-slide-up">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-blue-600" />
                        </div>
                        <h2 className="text-xl font-bold">Where to Stay in {country.name}</h2>
                      </div>
                      <p className="text-gray-600 mb-4">{guideData.accommodation}</p>
                      <div className="space-y-4">
                        {guideData.accommodationTypes.map((type, i) => (
                          <div key={i} className="bg-gray-50 p-6 rounded-lg">
                            <div className="flex items-center mb-2">
                              <div className="bg-teal-100 text-teal-600 p-1 rounded mr-2">{type.icon}</div>
                              <h3 className="font-bold">{type.name}</h3>
                            </div>
                            <p className="text-gray-600 mb-2">{type.description}</p>
                            <div className="text-sm">
                              <span className="font-medium">Price Range:</span>{" "}
                              <span className="text-gray-600">{type.priceRange}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-green-600" />
                        </div>
                        <h2 className="text-xl font-bold">Recommended Areas</h2>
                      </div>
                      <div className="space-y-4">
                        {guideData.recommendedAreas.map((area, i) => (
                          <div key={i} className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-bold mb-2">{area.name}</h3>
                            <p className="text-gray-600 mb-2">{area.description}</p>
                            <div className="text-sm">
                              <span className="font-medium">Best for:</span>{" "}
                              <span className="text-gray-600">{area.bestFor}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="food" className="space-y-8 animate-slide-up">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                          <Utensils className="w-5 h-5 text-orange-600" />
                        </div>
                        <h2 className="text-xl font-bold">Food & Drink in {country.name}</h2>
                      </div>
                      <p className="text-gray-600 mb-4">{guideData.foodAndDrink}</p>
                      <div className="space-y-4">
                        {guideData.mustTryDishes.map((dish, i) => (
                          <div key={i} className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-bold mb-2">{dish.name}</h3>
                            <p className="text-gray-600">{dish.description}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6">
                        <Button asChild className="bg-teal-600 hover:bg-teal-700">
                          <Link href={`/${params.country}/what-to-eat`}>
                            <Utensils className="w-4 h-4 mr-2" />
                            Explore Food Guide
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="culture" className="space-y-8 animate-slide-up">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <Globe className="w-5 h-5 text-purple-600" />
                        </div>
                        <h2 className="text-xl font-bold">Culture & Customs</h2>
                      </div>
                      <p className="text-gray-600 mb-4">{guideData.cultureAndCustoms}</p>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold mb-3">Cultural Tips:</h3>
                        <ul className="space-y-2">
                          {guideData.culturalTips.map((tip, i) => (
                            <li key={i} className="flex items-start">
                              <Check className="h-5 w-5 mr-2 text-teal-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Globe className="w-5 h-5 text-blue-600" />
                        </div>
                        <h2 className="text-xl font-bold">Language</h2>
                      </div>
                      <p className="text-gray-600 mb-4">
                        The official language of {country.name} is{" "}
                        {guideData.usefulPhrases[0].translation.split(" ")[0]}.{guideData.languageTips}
                      </p>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold mb-3">Useful Phrases:</h3>
                        <ul className="space-y-4">
                          {guideData.usefulPhrases.map((phrase, i) => (
                            <li key={i}>
                              <div className="font-medium text-gray-900">{phrase.phrase}</div>
                              <div className="text-gray-600">{phrase.translation}</div>
                              <div className="text-sm text-gray-500 italic">{phrase.pronunciation}</div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <Card className="sticky top-8 animate-fade-in">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Travel Essentials</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="#visa"
                        className="flex items-center text-gray-600 hover:text-teal-600 transition-colors"
                      >
                        <Globe className="w-4 h-4 mr-2 text-teal-600" />
                        <span>Visa Requirements</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#time"
                        className="flex items-center text-gray-600 hover:text-teal-600 transition-colors"
                      >
                        <Calendar className="w-4 h-4 mr-2 text-teal-600" />
                        <span>Best Time to Visit</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#money"
                        className="flex items-center text-gray-600 hover:text-teal-600 transition-colors"
                      >
                        <DollarSign className="w-4 h-4 mr-2 text-teal-600" />
                        <span>Currency & Money</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#safety"
                        className="flex items-center text-gray-600 hover:text-teal-600 transition-colors"
                      >
                        <Shield className="w-4 h-4 mr-2 text-teal-600" />
                        <span>Health & Safety</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#internet"
                        className="flex items-center text-gray-600 hover:text-teal-600 transition-colors"
                      >
                        <Wifi className="w-4 h-4 mr-2 text-teal-600" />
                        <span>Internet & Connectivity</span>
                      </Link>
                    </li>
                  </ul>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          href={`/${params.country}/top-things-to-do`}
                          className="flex items-center text-gray-600 hover:text-teal-600 transition-colors"
                        >
                          <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                          <span>Top Things to Do</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`/${params.country}/what-to-eat`}
                          className="flex items-center text-gray-600 hover:text-teal-600 transition-colors"
                        >
                          <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                          <span>What to Eat in {country.name}</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                      <Link href="/custom-itinerary">
                        <MapPin className="w-4 h-4 mr-2" />
                        Plan Your Trip
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <ThankYouSection destination={country.name} />
    </div>
  )
}
