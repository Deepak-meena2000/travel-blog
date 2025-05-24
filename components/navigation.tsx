"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-8-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link target="_blank"  href="/" className="text-xl font-bold text-gray-900">
            Nomadic Memo
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link target="_blank"  href="/" className="text-gray-700 hover:text-teal-600 transition-colors">
              Home
            </Link>
            <Link target="_blank"  href="/countries" className="text-gray-700 hover:text-teal-600 transition-colors">
              Countries
            </Link>
            <Link target="_blank"  href="/about" className="text-gray-700 hover:text-teal-600 transition-colors">
              About Us
            </Link>
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <Link target="_blank"  href="/custom-itinerary">Plan Your Trip</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-teal-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/countries"
                className="block px-3 py-2 text-gray-700 hover:text-teal-600"
                onClick={() => setIsOpen(false)}
              >
                Countries
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-teal-600"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/custom-itinerary"
                className="block px-3 py-2 text-teal-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Plan Your Trip
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
