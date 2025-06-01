import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Nomadic Memo</h3>
            <p className="text-gray-300 text-sm">
              Discover amazing destinations and plan your perfect travel itinerary with our comprehensive guides.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-teal-400 transition-colors text-sm">
                Home
              </Link>
              <Link href="/countries" className="block text-gray-300 hover:text-teal-400 transition-colors text-sm">
                Countries
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-teal-400 transition-colors text-sm">
                About Us
              </Link>
              <Link
                href="/custom-itinerary"
                className="block text-gray-300 hover:text-teal-400 transition-colors text-sm"
              >
                Plan Your Trip
              </Link>
            </div>
          </div>

          {/* Popular Destinations */}
          <div className="space-y-4">
            <h4 className="font-semibold">Popular Destinations</h4>
            <div className="space-y-2">
              <Link href="/bali" className="block text-gray-300 hover:text-teal-400 transition-colors text-sm">
                Bali, Indonesia
              </Link>
              <Link href="/paris" className="block text-gray-300 hover:text-teal-400 transition-colors text-sm">
                Paris, France
              </Link>
              <Link href="/kyoto" className="block text-gray-300 hover:text-teal-400 transition-colors text-sm">
                Kyoto, Japan
              </Link>
              <Link href="/countries" className="block text-gray-300 hover:text-teal-400 transition-colors text-sm">
                View All Destinations
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold">Subscribe</h4>
            <p className="text-gray-300 text-sm">Get the latest travel tips and destination guides in your inbox.</p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
              />
              <Button className="bg-teal-600 hover:bg-teal-700">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Nomadic Memo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
