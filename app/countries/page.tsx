import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, ArrowRight, Users, Calendar } from "lucide-react"
import { destinations } from "@/data/destinations"
import { SearchInput } from "@/components/search-input"

export const metadata: Metadata = {
  title: "Explore Countries",
  description: "Discover travel guides and itineraries for countries around the world.",
  openGraph: {
    title: "Explore Countries - Nomadic Memo",
    description: "Discover travel guides and itineraries for countries around the world.",
  },
}

export default function CountriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-[90rem] xl:max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Explore Amazing Destinations</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover comprehensive travel guides for the world's most incredible destinations
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchInput />
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-16">
        <div className="max-w-[90rem] xl:max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Card
                key={destination.slug}
                className="group hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={destination.image || "/placeholder.svg?height=250&width=400"}
                      alt={destination.name}
                      width={400}
                      height={250}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      priority={index < 3}
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-teal-600 hover:bg-teal-700 text-white flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {destination.country}
                      </Badge>
                    </div>
                    {destination.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-orange-500 text-white">Popular</Badge>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{destination.name}</h3>
                    <p className="text-gray-600 mb-4">{destination.description}</p>

                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{destination.blogs?.length || 0} articles</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>Popular</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                        <Link href={`/${destination.slug}`}>
                          <MapPin className="w-4 h-4 mr-2" />
                          Explore Destination
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <Link href={`/${destination.slug}/top-things-to-do`}>
                          <ArrowRight className="w-4 h-4 mr-2" />
                          Things to Do
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
