"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Users,
  Camera,
  Utensils,
  Mountain,
  Waves,
  Building,
  Heart,
  Star,
  Send,
  CheckCircle,
} from "lucide-react"

const interests = [
  { id: "adventure", label: "Adventure Sports", icon: Mountain },
  { id: "culture", label: "Cultural Sites", icon: Building },
  { id: "food", label: "Food & Dining", icon: Utensils },
  { id: "beaches", label: "Beaches & Coast", icon: Waves },
  { id: "photography", label: "Photography", icon: Camera },
  { id: "nightlife", label: "Nightlife", icon: Star },
  { id: "nature", label: "Nature & Wildlife", icon: Heart },
  { id: "shopping", label: "Shopping", icon: Building },
]

export default function CustomItineraryPage() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInterestToggle = (interestId: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interestId) ? prev.filter((id) => id !== interestId) : [...prev, interestId],
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Here you would typically send the data to your backend
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto text-center animate-scale-in">
          <CardContent className="p-8">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-teal-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Request Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your interest! Our travel experts will create a personalized itinerary for you and get back
              to you within 24 hours.
            </p>
            <Button onClick={() => setIsSubmitted(false)} className="bg-teal-600 hover:bg-teal-700">
              Create Another Itinerary
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Plan Your Perfect Trip</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let our travel experts create a personalized itinerary tailored to your interests, budget, and travel
              style
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <Card className="animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-teal-600" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="Enter your full name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="Enter your email" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="travelers">Number of Travelers *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select number of travelers" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Traveler</SelectItem>
                        <SelectItem value="2">2 Travelers</SelectItem>
                        <SelectItem value="3">3 Travelers</SelectItem>
                        <SelectItem value="4">4 Travelers</SelectItem>
                        <SelectItem value="5+">5+ Travelers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trip Details */}
            <Card className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-teal-600" />
                  Trip Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="destination">Preferred Destination *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your destination" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bali">Bali, Indonesia</SelectItem>
                      <SelectItem value="paris">Paris, France</SelectItem>
                      <SelectItem value="kyoto">Kyoto, Japan</SelectItem>
                      <SelectItem value="thailand">Thailand</SelectItem>
                      <SelectItem value="italy">Italy</SelectItem>
                      <SelectItem value="greece">Greece</SelectItem>
                      <SelectItem value="other">Other (specify in notes)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="departure">Departure Date *</Label>
                    <Input id="departure" type="date" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="return">Return Date *</Label>
                    <Input id="return" type="date" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range (USD) *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="budget">Budget ($500 - $1,500)</SelectItem>
                      <SelectItem value="mid">Mid-range ($1,500 - $3,000)</SelectItem>
                      <SelectItem value="luxury">Luxury ($3,000 - $5,000)</SelectItem>
                      <SelectItem value="premium">Premium ($5,000+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Interests & Preferences */}
            <Card className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-teal-600" />
                  Interests & Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Label>What interests you most? (Select all that apply)</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {interests.map((interest) => {
                      const IconComponent = interest.icon
                      const isSelected = selectedInterests.includes(interest.id)
                      return (
                        <div
                          key={interest.id}
                          onClick={() => handleInterestToggle(interest.id)}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${
                            isSelected ? "border-teal-600 bg-teal-50" : "border-gray-200 hover:border-teal-300"
                          }`}
                        >
                          <div className="flex flex-col items-center text-center space-y-2">
                            <IconComponent className={`w-6 h-6 ${isSelected ? "text-teal-600" : "text-gray-500"}`} />
                            <span className={`text-sm font-medium ${isSelected ? "text-teal-600" : "text-gray-700"}`}>
                              {interest.label}
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="accommodation">Accommodation Preference</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select accommodation type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hotel">Hotels</SelectItem>
                      <SelectItem value="resort">Resorts</SelectItem>
                      <SelectItem value="boutique">Boutique Hotels</SelectItem>
                      <SelectItem value="hostel">Hostels</SelectItem>
                      <SelectItem value="airbnb">Vacation Rentals</SelectItem>
                      <SelectItem value="mixed">Mix of Options</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Special Requests or Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Tell us about any special requirements, dietary restrictions, accessibility needs, or specific experiences you'd like to include..."
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Selected Interests Display */}
            {selectedInterests.length > 0 && (
              <Card className="animate-scale-in">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Your Selected Interests:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedInterests.map((interestId) => {
                      const interest = interests.find((i) => i.id === interestId)
                      const IconComponent = interest?.icon || Heart
                      return (
                        <Badge key={interestId} className="bg-teal-100 text-teal-800 hover:bg-teal-200">
                          <IconComponent className="w-3 h-3 mr-1" />
                          {interest?.label}
                        </Badge>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Submit Button */}
            <div className="text-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Button type="submit" size="lg" className="bg-teal-600 hover:bg-teal-700 px-8">
                <Send className="w-4 h-4 mr-2" />
                Create My Custom Itinerary
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                Our travel experts will review your preferences and create a personalized itinerary within 24 hours
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
