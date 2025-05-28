import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MapPin } from "lucide-react"
import { destinations } from "@/data/destinations"

export function PopularDestinations() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-8-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most visited destinations with comprehensive travel guides and tips
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {destinations.slice(0, 4).map((destination, index) => (
           <Link href={`/${destination.slug}`}>
             <Card
              key={destination.slug}
              className="group hover:shadow-lg transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg aspect-[5/4]">
                  <Image
                    src={destination.home_image || "/placeholder.svg"}
                    alt={destination.name}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* <div className="absolute top-4 left-4">
                    <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {destination.country}
                    </span>
                  </div> */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-teal-600 group-hover:text-white transition-colors"
                  >
                    <div >
                      Explore
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
           </Link>
          ))}
        </div>

        <div className="text-center animate-slide-up">
          <Button asChild variant="outline" size="lg">
            <Link href="/countries">
              View All Destinations
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
