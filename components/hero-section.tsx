import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex justify-center bg-slate-800 text-white overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Background Image */}
      <Image
        src="/images/country/malaysia/home_banner.jpg"
        alt="Travel Banner"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        fill
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/30 z-10" />
      {/* Content */}
      <div className="absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full max-w-[90rem] xl:max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover Your Next Adventure</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore comprehensive travel guides, insider tips, and customized itineraries for your dream destinations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
              <Link href="/countries">Explore Destinations</Link>
            </Button>
            {/* <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-black hover:text-slate-800"
            >
              <Link href="/custom-itinerary">Plan Your Trip</Link>
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  )
}
