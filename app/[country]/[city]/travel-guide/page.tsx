import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, ArrowRight, Info, Calendar, Plane, Utensils, Shield, Check } from "lucide-react"
import { destinations } from "@/data/destinations"
import { ThankYouSection } from "@/components/thank-you-section"

// Mock city data
const cityData = {
  bali: {
    ubud: {
      name: "Ubud",
      image: "/placeholder.svg?height=300&width=500",
      overview:
        "Ubud is the cultural heart of Bali, surrounded by rainforests and terraced rice paddies. Known for its traditional crafts, dance performances, and as a hub for yoga and wellness retreats.",
      bestTimeToVisit:
        "The best time to visit Ubud is during the dry season from April to October. The weather is pleasant, making it ideal for outdoor activities and exploring the rice terraces.",
      highSeason: "July, August, and during major holidays",
      lowSeason: "January to March (rainy season)",
      safety:
        "Ubud is generally very safe for tourists. The main concerns are petty theft in crowded areas and monkey bites at the Monkey Forest. Keep valuables secure and don't feed or touch the monkeys.",
      safetyTips: [
        "Be cautious around monkeys at the Sacred Monkey Forest",
        "Use reputable taxi services or ride-hailing apps",
        "Keep valuables secure, especially in crowded areas",
        "Watch out for slippery paths during rainy season",
      ],
      gettingThere:
        "Ubud is located about 1.5 hours from Ngurah Rai International Airport in Denpasar. You can reach Ubud by taxi, private driver, or shuttle service.",
      gettingAround:
        "The central area of Ubud is walkable, but for exploring further afield, you'll need transportation. Options include renting a scooter, hiring a driver, or using ride-hailing apps.",
      transportationOptions: [
        {
          name: "Walking",
          icon: <MapPin className="h-4 w-4" />,
          description: "The central area is compact and best explored on foot.",
        },
        {
          name: "Scooter Rental",
          icon: <MapPin className="h-4 w-4" />,
          description: "Popular but requires experience. Costs around IDR 50,000-70,000 per day.",
        },
        {
          name: "Private Driver",
          icon: <MapPin className="h-4 w-4" />,
          description: "Convenient for day trips. Costs around IDR 500,000-700,000 per day.",
        },
        {
          name: "Ride-Hailing Apps",
          icon: <MapPin className="h-4 w-4" />,
          description: "Grab and Gojek are available but may have limited service in some areas.",
        },
      ],
      accommodation:
        "Ubud offers a wide range of accommodation options, from budget hostels to luxury resorts and private villas. Many places feature stunning views of rice fields or jungle ravines.",
      neighborhoods: [
        {
          name: "Ubud Center",
          description:
            "The heart of Ubud, close to the main market, Ubud Palace, and many restaurants and shops. Convenient but can be busy and noisy.",
          bestFor: "First-time visitors, shoppers, and those who want to be in the middle of everything",
        },
        {
          name: "Penestanan",
          description:
            "A quieter area west of the center with many yoga studios and organic cafes. Popular with expats and long-term visitors.",
          bestFor: "Yoga enthusiasts, digital nomads, and those seeking a more peaceful atmosphere",
        },
        {
          name: "Tegallalang",
          description:
            "Famous for its spectacular rice terraces, this area north of Ubud offers stunning views and a more rural experience.",
          bestFor: "Nature lovers and photographers seeking tranquility",
        },
        {
          name: "Nyuh Kuning",
          description: "A traditional village south of the Monkey Forest with a more authentic feel than central Ubud.",
          bestFor: "Those looking for a more authentic Balinese experience while still being close to amenities",
        },
      ],
      foodAndDrink:
        "Ubud is a food lover's paradise, offering everything from traditional Balinese cuisine to international fare. The town is known for its health-focused restaurants, organic cafes, and farm-to-table dining experiences.",
      restaurants: [
        {
          name: "Locavore",
          location: "Jl. Dewisita No.10, Ubud",
          cuisine: "Modern Indonesian",
          priceRange: "High-end",
          description:
            "Award-winning restaurant focusing on locally-sourced ingredients with innovative tasting menus. Reservation essential.",
        },
        {
          name: "Warung Babi Guling Ibu Oka",
          location: "Jl. Tegal Sari No.2, Ubud",
          cuisine: "Balinese",
          priceRange: "Budget",
          description: "Famous for its traditional Balinese suckling pig (babi guling). A must-try local experience.",
        },
        {
          name: "Clear Cafe",
          location: "Jl. Hanoman No.8, Ubud",
          cuisine: "Healthy/Vegetarian",
          priceRange: "Mid-range",
          description:
            "Beautiful cafe with a focus on healthy, organic food with many vegetarian and vegan options. Lovely atmosphere.",
        },
        {
          name: "Bridges Bali",
          location: "Jl. Raya Campuhan, Ubud",
          cuisine: "International",
          priceRange: "High-end",
          description:
            "Elegant restaurant with stunning valley views. Known for its wine selection and refined cuisine. Perfect for a special dinner.",
        },
      ],
    },
  },
}

export default function CityTravelGuidePage({ params }: { params: { country: string; city: string } }) {
  const country = destinations.find((d) => d.slug === params.country)

  if (!country) {
    notFound()
  }

  // Get city data or use default
  const cityInfo =
    cityData[params.country as keyof typeof cityData]?.[params.city as keyof typeof cityData.bali] || cityData.bali.ubud

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-80 bg-slate-800">
        <Image
          src={cityInfo.image || "/placeholder.svg?height=300&width=500"}
          alt={cityInfo.name}
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-slate-800/60" />
        <div className="relative max-8-xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white animate-fade-in">
            <div className="flex items-center text-sm mb-2">
              <Link href={`/${params.country}`} className="text-gray-300 hover:text-white transition-colors">
                {country.name}
              </Link>
              <span className="mx-2">/</span>
              <span>{cityInfo.name}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{cityInfo.name} Travel Guide</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Essential travel tips, information, and advice for your trip to {cityInfo.name}
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
              <div className="prose max-w-none mb-8 animate-fade-in">
                <p className="text-lg text-gray-600">{cityInfo.overview}</p>
              </div>

              <Tabs defaultValue="essentials" className="animate-fade-in">
                <TabsList className="w-full justify-start overflow-x-auto mb-8">
                  <TabsTrigger value="essentials" className="flex items-center gap-2">
                    <Info className="h-4 w-4" />
                    Essentials
                  </TabsTrigger>
                  <TabsTrigger value="transportation" className="flex items-center gap-2">
                    <Plane className="h-4 w-4" />
                    Getting Around
                  </TabsTrigger>
                  <TabsTrigger value="accommodation" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Where to Stay
                  </TabsTrigger>
                  <TabsTrigger value="food" className="flex items-center gap-2">
                    <Utensils className="h-4 w-4" />
                    Food & Drink
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="essentials" className="space-y-8 animate-slide-up">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-green-600" />
                        </div>
                        <h2 className="text-xl font-bold">Best Time to Visit</h2>
                      </div>
                      <p className="text-gray-600 mb-4">{cityInfo.bestTimeToVisit}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center mb-2">
                            <Calendar className="h-5 w-5 text-teal-600 mr-2" />
                            <h3 className="font-bold">High Season</h3>
                          </div>
                          <p className="text-sm text-gray-600">{cityInfo.highSeason}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center mb-2">
                            <Calendar className="h-5 w-5 text-teal-600 mr-2" />
                            <h3 className="font-bold">Low Season</h3>
                          </div>
                          <p className="text-sm text-gray-600">{cityInfo.lowSeason}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                          <Shield className="w-5 h-5 text-red-600" />
                        </div>
                        <h2 className="text-xl font-bold">Safety</h2>
                      </div>
                      <p className="text-gray-600 mb-4">{cityInfo.safety}</p>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold mb-3">Safety Tips:</h3>
                        <ul className="space-y-2">
                          {cityInfo.safetyTips.map((tip, i) => (
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
                        <h2 className="text-xl font-bold">Getting to {cityInfo.name}</h2>
                      </div>
                      <p className="text-gray-600 mb-4">{cityInfo.gettingThere}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-green-600" />
                        </div>
                        <h2 className="text-xl font-bold">Getting Around {cityInfo.name}</h2>
                      </div>
                      <p className="text-gray-600 mb-4">{cityInfo.gettingAround}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {cityInfo.transportationOptions.map((option, i) => (
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
                        <h2 className="text-xl font-bold">Where to Stay in {cityInfo.name}</h2>
                      </div>
                      <p className="text-gray-600 mb-4">{cityInfo.accommodation}</p>
                      <div className="space-y-4">
                        {cityInfo.neighborhoods.map((neighborhood, i) => (
                          <div key={i} className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-bold mb-2">{neighborhood.name}</h3>
                            <p className="text-gray-600 mb-2">{neighborhood.description}</p>
                            <div className="text-sm">
                              <span className="font-medium">Best for:</span>{" "}
                              <span className="text-gray-600">{neighborhood.bestFor}</span>
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
                        <h2 className="text-xl font-bold">Food & Drink in {cityInfo.name}</h2>
                      </div>
                      <p className="text-gray-600 mb-4">{cityInfo.foodAndDrink}</p>
                      <div className="space-y-4">
                        {cityInfo.restaurants.map((restaurant, i) => (
                          <div key={i} className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-bold mb-2">{restaurant.name}</h3>
                            <div className="flex items-center text-sm text-gray-500 mb-3">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span>{restaurant.location}</span>
                              <span className="mx-2">•</span>
                              <span>{restaurant.cuisine}</span>
                              <span className="mx-2">•</span>
                              <span>{restaurant.priceRange}</span>
                            </div>
                            <p className="text-gray-600">{restaurant.description}</p>
                          </div>
                        ))}
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="#best-time"
                        className="flex items-center text-gray-600 hover:text-teal-600 transition-colors"
                      >
                        <Calendar className="w-4 h-4 mr-2 text-teal-600" />
                        <span>Best Time to Visit</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#safety"
                        className="flex items-center text-gray-600 hover:text-teal-600 transition-colors"
                      >
                        <Shield className="w-4 h-4 mr-2 text-teal-600" />
                        <span>Safety Tips</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#transportation"
                        className="flex items-center text-gray-600 hover:text-teal-600 transition-colors"
                      >
                        <Plane className="w-4 h-4 mr-2 text-teal-600" />
                        <span>Getting Around</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#accommodation"
                        className="flex items-center text-gray-600 hover:text-teal-600 transition-colors"
                      >
                        <MapPin className="w-4 h-4 mr-2 text-teal-600" />
                        <span>Where to Stay</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#food"
                        className="flex items-center text-gray-600 hover:text-teal-600 transition-colors"
                      >
                        <Utensils className="w-4 h-4 mr-2 text-teal-600" />
                        <span>Food & Drink</span>
                      </Link>
                    </li>
                  </ul>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          href={`/${params.country}/${params.city}/tops-things-to-do`}
                          className="flex items-center text-gray-600 hover:text-teal-600 transition-colors"
                        >
                          <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                          <span>Things to Do in {cityInfo.name}</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`/${params.country}/things-to-know-before-going`}
                          className="flex items-center text-gray-600 hover:text-teal-600 transition-colors"
                        >
                          <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                          <span>{country.name} Travel Guide</span>
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
      <ThankYouSection destination={cityInfo.name} />
    </div>
  )
}
