import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="bg-slate-800 text-white py-20 lg:py-32">
      <div className="max-8-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover Your Next Adventure</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore comprehensive travel guides, insider tips, and customized itineraries for your dream destinations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
              <Link href="/countries">Explore Destinations</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-800"
            >
              <Link href="/custom-itinerary">Plan Your Trip</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
