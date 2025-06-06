"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
  Plane,
  Globe,
  Compass,
  ArrowRight,
  Sparkles,
  AlertCircle,
  Lock,
  Zap,
  Gift,
  Trophy,
  Crown,
  Diamond,
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
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    groupType: "",
    destination: "",
    departure: "",
    return: "",
    budget: "",
    accommodation: "",
    notes: "",
  })

  const totalSteps = 4

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validatePhone = (phone: string) => {
    return /^\+?[\d\s-]{10,}$/.test(phone)
  }

  const validateDates = (departure: string, returnDate: string) => {
    if (!departure || !returnDate) return false
    const departureDate = new Date(departure)
    const returnDateObj = new Date(returnDate)
    return departureDate < returnDateObj && departureDate >= new Date()
  }

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {}

    switch (step) {
      case 1:
        if (!formData.name.trim()) {
          newErrors.name = "Please enter your name"
        }
        if (!formData.email.trim()) {
          newErrors.email = "Please enter your email"
        } else if (!validateEmail(formData.email)) {
          newErrors.email = "Please enter a valid email address"
        }
        if (!formData.groupType) {
          newErrors.groupType = "Please select your travel group type"
        }
        if (formData.phone && !validatePhone(formData.phone)) {
          newErrors.phone = "Please enter a valid phone number"
        }
        break

      case 2:
        if (!formData.destination) {
          newErrors.destination = "Please select a destination"
        }
        if (!formData.departure) {
          newErrors.departure = "Please select departure date"
        }
        if (!formData.return) {
          newErrors.return = "Please select return date"
        }
        if (formData.departure && formData.return && !validateDates(formData.departure, formData.return)) {
          newErrors.dates = "Return date must be after departure date and departure must be in the future"
        }
        if (!formData.budget) {
          newErrors.budget = "Please select your budget range"
        }
        break

      case 3:
        if (selectedInterests.length === 0) {
          newErrors.interests = "Please select at least one interest"
        }
        break

      default:
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInterestToggle = (interestId: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interestId) ? prev.filter((id) => id !== interestId) : [...prev, interestId],
    )
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const isStepComplete = (step: number) => {
    if (!validateStep(step)) return false

    switch (step) {
      case 1:
        return formData.name && formData.email && formData.groupType
      case 2:
        return formData.destination && formData.departure && formData.return && formData.budget
      case 3:
        return selectedInterests.length > 0
      case 4:
        return true // Final step is optional
      default:
        return false
    }
  }

  useEffect(() => {
    const checkStepCompletion = () => {
      const newCompletedSteps = []
      for (let i = 1; i <= totalSteps; i++) {
        if (isStepComplete(i)) {
          newCompletedSteps.push(i)
        }
      }
      setCompletedSteps(newCompletedSteps)
    }
    checkStepCompletion()
  }, [formData, selectedInterests])

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center"
      >
        <Card className="max-w-md mx-auto text-center shadow-2xl border-0">
          <CardContent className="p-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-teal-600" />
            </motion.div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Adventure Awaits! 🎉
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 mb-8 text-lg"
            >
              Your dream vacation is being crafted! Our travel experts will create your personalized itinerary and get back
              to you within 24 hours.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                onClick={() => setIsSubmitted(false)}
                className="bg-teal-600 hover:bg-teal-700 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Plan Another Adventure
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black relative overflow-hidden font-sans">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-teal-400/40 rounded-full shadow-lg"
            initial={{
              x: Math.random() * window?.innerWidth,
              y: Math.random() * window?.innerHeight,
            }}
            animate={{
              y: [0, -200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Trophy className="w-12 h-12 text-teal-400/30" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Gift className="w-12 h-12 text-teal-400/30" />
        </motion.div>
      </div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative py-20 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Crown className="w-24 h-24 mx-auto text-teal-400 drop-shadow-[0_0_20px_rgba(45,212,191,0.5)]" />
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Diamond className="w-12 h-12 text-teal-400 drop-shadow-[0_0_10px_rgba(45,212,191,0.4)]" />
              </motion.div>
            </div>
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 drop-shadow-[0_2px_16px_rgba(45,212,191,0.2)]"
          >
            Your Dream Journey Awaits
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl text-slate-100/90 max-w-2xl mx-auto font-medium drop-shadow-[0_1px_8px_rgba(45,212,191,0.08)]"
          >
            Let's craft your perfect adventure together. Every detail matters in creating your unforgettable experience.
          </motion.p>
        </div>
      </motion.section>

      {/* Form Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Step 1: Personal Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <Card className="bg-[#10141a]/95 backdrop-blur-2xl border border-teal-700/40 shadow-2xl hover:shadow-teal-400/20 transition-all duration-300 p-8 rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white/90 text-2xl md:text-3xl font-bold">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <Users className="w-7 h-7 text-teal-400" />
                    </motion.div>
                    Tell Us About Yourself
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="space-y-3"
                    >
                      <Label htmlFor="name" className="text-slate-400 text-sm font-medium">Full Name <span className="text-teal-400">*</span></Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className={`bg-[#181c23] border-teal-700/40 text-teal-300 placeholder:text-slate-500 focus:border-teal-400 focus:ring-teal-400/20 text-lg font-semibold px-5 py-4 rounded-xl shadow-inner ${errors.name ? "border-red-400" : ""}`}
                        placeholder="Enter your full name"
                        required
                      />
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-base flex items-center gap-1"
                        >
                          <AlertCircle className="w-5 h-5" />
                          {errors.name}
                        </motion.p>
                      )}
                    </motion.div>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-3"
                    >
                      <Label htmlFor="email" className="text-slate-400 text-sm font-medium">Email Address <span className="text-teal-400">*</span></Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className={`bg-[#181c23] border-teal-700/40 text-teal-300 placeholder:text-slate-500 focus:border-teal-400 focus:ring-teal-400/20 text-lg font-semibold px-5 py-4 rounded-xl shadow-inner ${errors.email ? "border-red-400" : ""}`}
                        placeholder="Enter your email"
                        required
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-base flex items-center gap-1"
                        >
                          <AlertCircle className="w-5 h-5" />
                          {errors.email}
                        </motion.p>
                      )}
                    </motion.div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="space-y-3"
                    >
                      <Label htmlFor="phone" className="text-slate-400 text-sm font-medium">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className={`bg-[#181c23] border-teal-700/40 text-teal-300 placeholder:text-slate-500 focus:border-teal-400 focus:ring-teal-400/20 text-lg font-semibold px-5 py-4 rounded-xl shadow-inner ${errors.phone ? "border-red-400" : ""}`}
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-base flex items-center gap-1"
                        >
                          <AlertCircle className="w-5 h-5" />
                          {errors.phone}
                        </motion.p>
                      )}
                    </motion.div>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="space-y-3"
                    >
                      <Label htmlFor="groupType" className="text-slate-400 text-sm font-medium">Who are you traveling with? <span className="text-teal-400">*</span></Label>
                      <div className="flex gap-2">
                        {["Solo", "Couple", "Friends", "Family"].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => handleInputChange("groupType", type.toLowerCase())}
                            className={`px-4 py-2 rounded-full border transition-all duration-200 text-slate-100 ${
                              formData.groupType === type.toLowerCase()
                                ? "bg-teal-500 border-teal-500"
                                : "bg-[#181c23] border-teal-700/40 hover:border-teal-400"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                      {errors.groupType && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-base flex items-center gap-1"
                        >
                          <AlertCircle className="w-5 h-5" />
                          {errors.groupType}
                        </motion.p>
                      )}
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
              {completedSteps.includes(1) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center bg-teal-400/10 p-4 rounded-lg border border-teal-400/20"
                >
                  <div className="inline-flex items-center gap-2 text-teal-400">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <Sparkles className="w-5 h-5" />
                    </motion.div>
                    <span>Thanks for sharing! Let's plan your dream destination...</span>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Step 2: Trip Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <Card className="bg-[#10141a]/95 backdrop-blur-2xl border border-teal-700/40 shadow-2xl hover:shadow-teal-400/20 transition-all duration-300 p-8 rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white text-2xl md:text-3xl font-extrabold">
                    <MapPin className="w-7 h-7 text-teal-400" />
                    Where Would You Like to Go?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-3"
                  >
                    <Label htmlFor="destination" className="text-slate-400 text-sm font-medium">Dream Destination <span className="text-teal-400">*</span></Label>
                    <Select
                      value={formData.destination}
                      onValueChange={(value) => handleInputChange("destination", value)}
                      required
                    >
                      <SelectTrigger
                        className={`bg-[#181c23] border-teal-700/40 text-teal-300 ${
                          errors.destination ? "border-red-400" : ""
                        }`}
                      >
                        <SelectValue placeholder="Select your dream destination" />
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
                    {errors.destination && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-base flex items-center gap-1"
                      >
                        <AlertCircle className="w-5 h-5" />
                        {errors.destination}
                      </motion.p>
                    )}
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-3"
                    >
                      <Label htmlFor="departure" className="text-slate-400 text-sm font-medium">Departure Date <span className="text-teal-400">*</span></Label>
                      <Input
                        id="departure"
                        type="date"
                        value={formData.departure}
                        onChange={(e) => handleInputChange("departure", e.target.value)}
                        className={`bg-[#181c23] border-teal-700/40 text-teal-300 ${
                          errors.departure || errors.dates ? "border-red-400" : ""
                        }`}
                        required
                      />
                      {(errors.departure || errors.dates) && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-base flex items-center gap-1"
                        >
                          <AlertCircle className="w-5 h-5" />
                          {errors.departure || errors.dates}
                        </motion.p>
                      )}
                    </motion.div>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="space-y-3"
                    >
                      <Label htmlFor="return" className="text-slate-400 text-sm font-medium">Return Date <span className="text-teal-400">*</span></Label>
                      <Input
                        id="return"
                        type="date"
                        value={formData.return}
                        onChange={(e) => handleInputChange("return", e.target.value)}
                        className={`bg-[#181c23] border-teal-700/40 text-teal-300 ${
                          errors.return || errors.dates ? "border-red-400" : ""
                        }`}
                        required
                      />
                      {(errors.return || errors.dates) && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-base flex items-center gap-1"
                        >
                          <AlertCircle className="w-5 h-5" />
                          {errors.return || errors.dates}
                        </motion.p>
                      )}
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-3"
                  >
                    <Label htmlFor="budget" className="text-slate-400 text-sm font-medium">Budget Range (USD) <span className="text-teal-400">*</span></Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) => handleInputChange("budget", value)}
                      required
                    >
                      <SelectTrigger
                        className={`bg-[#181c23] border-teal-700/40 text-teal-300 ${
                          errors.budget ? "border-red-400" : ""
                        }`}
                      >
                        <SelectValue placeholder="Select your budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="budget">Budget ($500 - $1,500)</SelectItem>
                        <SelectItem value="mid">Mid-range ($1,500 - $3,000)</SelectItem>
                        <SelectItem value="luxury">Luxury ($3,000 - $5,000)</SelectItem>
                        <SelectItem value="premium">Premium ($5,000+)</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.budget && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-base flex items-center gap-1"
                      >
                        <AlertCircle className="w-5 h-5" />
                        {errors.budget}
                      </motion.p>
                    )}
                  </motion.div>
                </CardContent>
              </Card>
              {completedSteps.includes(2) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center bg-teal-400/10 p-4 rounded-lg border border-teal-400/20"
                >
                  <div className="inline-flex items-center gap-2 text-teal-400">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <Sparkles className="w-5 h-5" />
                    </motion.div>
                    <span>Perfect! Now let's discover what interests you most...</span>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Step 3: Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <Card className="bg-[#10141a]/95 backdrop-blur-2xl border border-teal-700/40 shadow-2xl hover:shadow-teal-400/20 transition-all duration-300 p-8 rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white text-2xl md:text-3xl font-extrabold">
                    <Heart className="w-7 h-7 text-teal-400" />
                    What Interests You?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-4"
                  >
                    <Label className="text-slate-400 text-sm font-medium">Select Your Interests</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {interests.map((interest, index) => {
                        const IconComponent = interest.icon;
                        const isSelected = selectedInterests.includes(interest.id);
                        return (
                          <motion.div
                            key={interest.id}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => handleInterestToggle(interest.id)}
                            className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg ${
                              isSelected
                                ? "border-teal-400 bg-teal-400/20"
                                : "border-[#181c23] hover:border-teal-400/50"
                            }`}
                          >
                            <div className="flex flex-col items-center text-center space-y-2">
                              <IconComponent
                                className={`w-7 h-7 ${
                                  isSelected ? "text-teal-400" : "text-slate-100/70"
                                }`}
                              />
                              <span
                                className={`text-sm font-medium ${
                                  isSelected ? "text-teal-400" : "text-slate-100/70"
                                }`}
                              >
                                {interest.label}
                              </span>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                    {errors.interests && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-base flex items-center gap-1"
                      >
                        <AlertCircle className="w-5 h-5" />
                        {errors.interests}
                      </motion.p>
                    )}
                  </motion.div>
                </CardContent>
              </Card>
              {completedSteps.includes(3) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center bg-teal-400/10 p-4 rounded-lg border border-teal-400/20"
                >
                  <div className="inline-flex items-center gap-2 text-teal-400">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <Sparkles className="w-5 h-5" />
                    </motion.div>
                    <span>Great! Now let's finalize your itinerary...</span>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Step 4: Finalization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <Card className="bg-[#10141a]/95 backdrop-blur-2xl border border-teal-700/40 shadow-2xl hover:shadow-teal-400/20 transition-all duration-300 p-8 rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white text-2xl md:text-3xl font-extrabold">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <Send className="w-7 h-7 text-teal-400" />
                    </motion.div>
                    Finalize Your Itinerary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-3"
                  >
                    <Label htmlFor="accommodation" className="text-slate-400 text-sm font-medium">Accommodation Preferences</Label>
                    <Textarea
                      id="accommodation"
                      value={formData.accommodation}
                      onChange={(e) => handleInputChange("accommodation", e.target.value)}
                      className={`bg-[#181c23] border-teal-700/40 text-teal-300 placeholder:text-slate-500 focus:border-teal-400 focus:ring-teal-400/20 text-lg font-semibold px-5 py-4 rounded-xl shadow-inner ${errors.accommodation ? "border-red-400" : ""}`}
                      placeholder="Enter your accommodation preferences"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-3"
                  >
                    <Label htmlFor="notes" className="text-slate-400 text-sm font-medium">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => handleInputChange("notes", e.target.value)}
                      className={`bg-[#181c23] border-teal-700/40 text-teal-300 placeholder:text-slate-500 focus:border-teal-400 focus:ring-teal-400/20 text-lg font-semibold px-5 py-4 rounded-xl shadow-inner ${errors.notes ? "border-red-400" : ""}`}
                      placeholder="Enter any additional notes"
                    />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="pt-8 flex justify-center"
            >
              <Button
                type="submit"
                className="bg-gradient-to-r from-teal-400 to-blue-400 text-white px-12 py-8 rounded-full shadow-lg hover:shadow-teal-400/20 transition-all duration-300 text-lg font-semibold"
                onClick={handleSubmit}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="flex items-center gap-3"
                >
                  <span>Submit Your Itinerary Request</span>
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </Button>
            </motion.div>
          </form>
        </div>
      </section>
    </div>
  )
}
