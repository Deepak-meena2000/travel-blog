import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { PopularDestinations } from "@/components/popular-destinations"
import { LatestBlogs } from "@/components/latest-blogs"

export const metadata: Metadata = {
  title: "Home",
  description: "Discover amazing destinations and plan your perfect travel itinerary with our comprehensive guides.",
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PopularDestinations />
      <LatestBlogs />
    </>
  )
}
