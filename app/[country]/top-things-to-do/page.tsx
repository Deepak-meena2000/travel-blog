import Image from "next/image";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Star, Waves, Building } from "lucide-react";
import { destinations } from "@/data/destinations";
import { ThankYouSection } from "@/components/thank-you-section";
import Link from "next/link";
import HeroSection from "./components/hero-section";

const thingsToDo = [
  {
    id: 1,
    title: "Petronas Twin Towers",
    description:
      "Visit the iconic 88-story twin skyscrapers in Kuala Lumpur, offering breathtaking views from the observation deck and a skybridge connecting the towers.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Architecture",
    icon: Building,
    operationalHours: "9:00 AM - 9:00 PM (Closed Mondays)",
    location: "Kuala Lumpur City Centre",
    price: "RM 80 for adults, RM 33 for children",
    duration: "1-2 hours",
    tips: [
      "Book tickets in advance to avoid long queues",
      "Visit during sunset for spectacular views",
      "The skybridge is on the 41st floor",
    ],
  },
  {
    id: 2,
    title: "Temple Hopping in Ubud",
    description:
      "Explore ancient Hindu temples scattered throughout Ubud, each with unique architecture and spiritual significance.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Culture",
    icon: Star,
    operationalHours: "6:00 AM - 6:00 PM",
    location: "Ubud, Bali",
    price: "IDR 15,000 - 30,000 per temple",
    duration: "Half day to full day",
    tips: [
      "Dress modestly and bring a sarong",
      "Visit early morning for fewer crowds",
      "Hire a local guide for cultural insights",
    ],
  },
  {
    id: 3,
    title: "Surfing at Kuta Beach",
    description:
      "Learn to surf or improve your skills at one of Bali's most famous beaches, perfect for beginners and experienced surfers alike.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Adventure",
    icon: Waves,
    operationalHours: "Best waves: 6:00 AM - 10:00 AM",
    location: "Kuta, Bali",
    price: "Surf lessons: $25-40 USD",
    duration: "2-3 hours per session",
    tips: [
      "Book lessons with certified instructors",
      "Early morning has the best waves",
      "Apply reef-safe sunscreen",
    ],
  },
];

const relatedArticles = [
  {
    title: "Best Street Food in Bali: A Culinary Adventure",
    category: "Food",
    image: "/placeholder.svg?height=150&width=200",
  },
  {
    title: "Ultimate Guide to Bali's Beaches",
    category: "Beaches",
    image: "/placeholder.svg?height=150&width=200",
  },
  {
    title: "Best Street Food in Bali: A Culinary Adventure",
    category: "Food",
    image: "/placeholder.svg?height=150&width=200",
  },
  {
    title: "Ultimate Guide to Bali's Beaches",
    category: "Beaches",
    image: "/placeholder.svg?height=150&width=200",
  },
];

export default async function ThingsToDoPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const countryName = (await params).country;
  const country = destinations.find((d) => d.slug === countryName);

  if (!country) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection country={country} />

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <section>
            <div className="mb-8 bg-gradient-to-r from-teal-50 to-slate-50 p-6 rounded-lg border border-teal-100 shadow-sm animate-fade-in-up">
              <div className="flex items-center mb-4">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 ">
                    <div className="bg-teal-100 p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="text-teal-600"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold text-slate-800">
                      Overview
                    </h2>
                  </div>
                  <p>{country.description}</p>
                </div>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {thingsToDo.map((activity, index) => {
                const IconComponent = activity.icon;
                return (
                  <Card
                    key={activity.id}
                    className="overflow-hidden animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative">
                      <Image
                        src={activity.image || "/placeholder.svg"}
                        alt={activity.title}
                        width={800}
                        height={300}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-teal-600 text-white flex items-center gap-1">
                          <IconComponent className="w-3 h-3" />
                          {activity.category}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {index + 1}. {activity.title}
                      </h2>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {activity.description}
                      </p>

                      {/* Activity Details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <Clock className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                Operational Hours
                              </h4>
                              <p className="text-gray-600 text-sm">
                                {activity.operationalHours}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <MapPin className="w-4 h-4 text-green-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                Location
                              </h4>
                              <p className="text-gray-600 text-sm">
                                {activity.location}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <DollarSign className="w-4 h-4 text-purple-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                Price
                              </h4>
                              <p className="text-gray-600 text-sm">
                                {activity.price}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <Clock className="w-4 h-4 text-orange-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                Duration
                              </h4>
                              <p className="text-gray-600 text-sm">
                                {activity.duration}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Quick Tips */}
                      <div className="bg-teal-50 rounded-lg p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                            <Star className="w-4 h-4 text-teal-600" />
                          </div>
                          <h4 className="font-semibold text-gray-900">
                            Quick Tips
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {activity.tips.map((tip, tipIndex) => (
                            <li
                              key={tipIndex}
                              className="flex items-start gap-2 text-sm text-gray-700"
                            >
                              <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <Card className="sticky top-20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {relatedArticles.map((article, index) => (
                      <Link
                        key={index}
                        href={`/${countryName}`}
                        className="flex gap-3 group cursor-pointer"
                      >
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          width={80}
                          height={60}
                          className="w-20 h-15 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-sm group-hover:text-teal-600 transition-colors line-clamp-2">
                            {article.title}
                          </h4>
                          <Badge variant="secondary" className="text-xs mt-1">
                            {article.category}
                          </Badge>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-gray-50 rounded-lg text-center">
                    <p className="text-sm text-gray-500 mb-2">ADVERTISEMENT</p>
                    <div className="h-32 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-gray-400">Sidebar Ad</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <ThankYouSection destination={country.name} />

      {/* You May Also Like */}
      <section className="py-16 bg-gray-50">
        <div className="max-8-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            You May Also Like:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedArticles.map((article, index) => (
              <Link key={index} href={`/${countryName}`}>
                <Card
                  className="group hover:shadow-lg transition-all duration-300 cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        width={300}
                        height={200}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-teal-600 text-white text-xs flex items-center gap-1">
                          <MapPin className="w-2 h-2" />
                          {article.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900 text-sm group-hover:text-teal-600 transition-colors line-clamp-2 mb-2">
                        {article.title}
                      </h3>
                      <Badge variant="secondary" className="text-xs">
                        {article.category}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
