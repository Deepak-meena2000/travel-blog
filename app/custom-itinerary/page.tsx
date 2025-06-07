"use client";

import type React from "react";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
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
  Target,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useCountryCodes, CountryCode } from "../hooks/useCountryCodes";
import { Combobox } from "@/components/ui/combobox";
import { destinations } from "@/data/destinations";

const interests = [
  { id: "adventure", label: "Adventure Sports", icon: Mountain },
  { id: "culture", label: "Cultural Sites", icon: Building },
  { id: "food", label: "Food & Dining", icon: Utensils },
  { id: "beaches", label: "Beaches & Coast", icon: Waves },
  { id: "photography", label: "Photography", icon: Camera },
  { id: "nightlife", label: "Nightlife", icon: Star },
  { id: "nature", label: "Nature & Wildlife", icon: Heart },
  { id: "shopping", label: "Shopping", icon: Building },
];

// Add a list of other countries for the post-success section
const otherCountries = [
  { name: "Japan", image: "/images/japan.jpg" },
  { name: "France", image: "/images/france.jpg" },
  { name: "Brazil", image: "/images/brazil.jpg" },
  { name: "Australia", image: "/images/australia.jpg" },
  { name: "Canada", image: "/images/canada.jpg" },
  { name: "South Africa", image: "/images/southafrica.jpg" },
];

const featureCards = [
  {
    title: "Daily Activities",
    desc: "Plan your perfect day with our curated activities",
    icon: <Target className="w-7 h-7 text-white" />,
    gradient: "from-[#6a0572] to-[#1a1a40]",
  },
  {
    title: "Accommodations",
    desc: "Find the perfect stay for your comfort",
    icon: <Building className="w-7 h-7 text-white" />,
    gradient: "from-[#0f2027] to-[#2c5364]",
  },
  {
    title: "Dining",
    desc: "Discover local cuisine and restaurants",
    icon: <Utensils className="w-7 h-7 text-white" />,
    gradient: "from-[#42275a] to-[#734b6d]",
  },
  {
    title: "Experiences",
    desc: "Add unique experiences to your journey",
    icon: <Star className="w-7 h-7 text-white" />,
    gradient: "from-[#134e5e] to-[#71b280]",
  },
];

const floatingIcons = ["🗺️", "🏖️", "🗼", "🏰", "🌅"];

export default function CustomItineraryPage() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const {
    countryCodes,
    selectedCountry,
    phoneNumber,
    isValid: isPhoneValid,
    handleCountryChange,
    handlePhoneChange
  } = useCountryCodes();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    phoneCountryCode: countryCodes[0].dialCode,
    countryOfOrigin: "",
    groupType: "",
    destination: "",
    days: "",
    budget: "",
    accommodation: "",
    notes: "",
  });
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });
  const [bgDots, setBgDots] = useState<{ x: number; y: number }[]>([]);
  const [showPlaneAnim, setShowPlaneAnim] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();

  const totalSteps = 4;

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return isPhoneValid;
  };

  const validateDates = (departure: string, returnDate: string) => {
    if (!departure || !returnDate) return false;
    const departureDate = new Date(departure);
    const returnDateObj = new Date(returnDate);
    return departureDate < returnDateObj && departureDate >= new Date();
  };

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (!formData.name.trim()) {
          newErrors.name = "Please enter your name";
        }
        if (!formData.email.trim()) {
          newErrors.email = "Please enter your email";
        } else if (!validateEmail(formData.email)) {
          newErrors.email = "Please enter a valid email address";
        }
        if (!formData.countryOfOrigin.trim()) {
          newErrors.countryOfOrigin = "Please enter your country";
        }
        if (!formData.groupType) {
          newErrors.groupType = "Please select your travel group type";
        }
        if (formData.phone && !validatePhone(formData.phone)) {
          newErrors.phone = "Please enter a valid phone number";
        }
        break;

      case 2:
        if (!formData.destination) {
          newErrors.destination = "Please select a destination";
        }
        if (!formData.days) {
          newErrors.days = "Please enter number of days";
        } else if (isNaN(Number(formData.days)) || Number(formData.days) <= 0) {
          newErrors.days = "Please enter a valid number of days";
        }
        if (!formData.budget) {
          newErrors.budget = "Please select your budget range";
        }
        break;

      case 3:
        if (selectedInterests.length === 0) {
          newErrors.interests = "Please select at least one interest";
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInterestToggle = (interestId: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interestId)
        ? prev.filter((id) => id !== interestId)
        : [...prev, interestId]
    );
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submissionData = {
      ...formData,
      phoneCountryCode: selectedCountry.dialCode,
      phone: phoneNumber,
      selectedInterests,
    };
    console.log('Submission Data:', submissionData);
    setShowPlaneAnim(true);
    setTimeout(() => {
      setShowPlaneAnim(false);
      setIsSubmitted(true);
      setShowSuccess(true);
    }, 2000); // match animation duration
  };

  const isStepComplete = (step: number) => {
    if (!validateStep(step)) return false;

    switch (step) {
      case 1:
        return formData.name && formData.email && formData.countryOfOrigin && formData.groupType;
      case 2:
        return formData.destination && formData.days && formData.budget;
      case 3:
        return selectedInterests.length > 0;
      case 4:
        return true; // Final step is optional
      default:
        return false;
    }
  };

  useEffect(() => {
    const checkStepCompletion = () => {
      const newCompletedSteps = [];
      for (let i = 1; i <= totalSteps; i++) {
        if (isStepComplete(i)) {
          newCompletedSteps.push(i);
        }
      }
      setCompletedSteps(newCompletedSteps);
    };
    checkStepCompletion();
  }, [formData, selectedInterests]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  useEffect(() => {
    // Generate random positions for background dots on the client
    const arr = Array.from({ length: 30 }, () => ({
      x: Math.random() * windowSize.width,
      y: Math.random() * windowSize.height,
    }));
    setBgDots(arr);
  }, [windowSize]);

  // After showing the success message, redirect after 3 seconds
  useEffect(() => {
    if (isSubmitted && showSuccess) {
      const slug = formData.destination || "";
      if (slug) {
        const timeout = setTimeout(() => {
          router.push(`/${slug}`);
        }, 3000);
        return () => clearTimeout(timeout);
      }
    }
  }, [isSubmitted, showSuccess, formData.destination, router]);

  if (showPlaneAnim) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
        {/* Floating travel icons */}
        <AnimatePresence>
          {floatingIcons.map((icon, i) => (
            <motion.div
              key={i}
              className="absolute text-3xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 200 - 100],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              style={{
                left: `${40 + Math.random() * 20}%`,
                top: `${40 + Math.random() * 20}%`,
              }}
            >
              {icon}
            </motion.div>
          ))}
        </AnimatePresence>
        {/* Animated Plane Emoji */}
        <motion.div
          initial={{ scale: 1, y: 0, rotate: 0, opacity: 1 }}
          animate={{
            scale: [1, 1.15, 1],
            y: [0, -20, 0, 20, 0],
            rotate: [0, 8, -8, 0],
            opacity: 1,
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center justify-center z-10"
        >
          <span className="text-[7rem] md:text-[10rem]">✈️</span>
        </motion.div>
      </div>
    );
  }

  if (isSubmitted && showSuccess) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4">
        <div className="max-w-md w-full bg-[#181c23] rounded-2xl shadow-xl p-10 flex flex-col items-center text-center">
          <div className="text-4xl mb-6">✨</div>
          <div className="text-2xl font-bold text-white mb-2">We've received your request!</div>
          <div className="text-slate-300 text-base mb-8">
            Our travel experts are working on your dream itinerary.<br />
            You'll hear from us soon!
          </div>
          <Button
            onClick={() => { setIsSubmitted(false); setShowSuccess(false); }}
            className="bg-gradient-to-r from-blue-500 to-teal-400 text-white text-base font-semibold px-8 py-3 rounded-full hover:scale-105 transition-all"
          >
            Plan Another Adventure
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-sans">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {bgDots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-teal-400/40 rounded-full shadow-lg"
            initial={{
              x: dot.x,
              y: dot.y,
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
      <section className="py-16 bg-transparent relative overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.5, scale: [0.9, 1.05, 0.95, 1] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[340px] bg-gradient-to-tr from-teal-500/30 via-blue-500/20 to-purple-500/30 blur-3xl rounded-full"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Animated Plane Emoji */}
          <motion.div
            initial={{ y: -10, scale: 0.95 }}
            animate={{ y: [0, -18, 0, 12, 0], scale: [0.95, 1.1, 0.98, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="mb-2"
          >
            <span className="text-[4rem] md:text-[5rem] select-none">✈️</span>
          </motion.div>
          {/* Heading with animated sparkle */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-slate-100 drop-shadow-lg inline-block relative">
            Your Journey, Crafted by Experts
            <motion.span
              initial={{ opacity: 0, scale: 0.7, x: -10 }}
              animate={{ opacity: [0, 1, 0.7, 1], scale: [0.7, 1.2, 1], x: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
              className="inline-block align-middle ml-2"
            >
              <span className="text-2xl md:text-3xl">✨</span>
            </motion.span>
          </h1>
          {/* Animated intro text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto font-normal"
          >
            We're passionate travelers and seasoned planners who believe every trip should be as unique as you are. Our team combines years of travel expertise, deep research, and a love for discovery to create truly personalized itineraries—free of cost. <span className="text-teal-300 font-semibold">Trust us to help you skip the overwhelm, avoid tourist traps, and unlock authentic experiences.</span> Let us do the work, so you can focus on making memories.
          </motion.p>
        </div>
      </section>

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
                  <CardTitle className="flex items-center gap-2 text-white/90 text-lg lg:text-xl font-bold">
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
                      <Label
                        htmlFor="name"
                        className="text-slate-400 text-lg font-medium"
                      >
                        Full Name <span className="text-teal-400">*</span>
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        className={`bg-[#181c23] border-teal-700/40 text-teal-300 placeholder:text-[#36e3c0]  text-lg font-semibold px-5 py-4 rounded-xl shadow-inner ${
                          errors.name ? "border-red-400" : ""
                        }`}
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
                      <Label
                        htmlFor="email"
                        className="text-slate-400 text-lg font-medium"
                      >
                        Email Address <span className="text-teal-400">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className={`bg-[#181c23] border-teal-700/40 text-teal-300 placeholder:text-[#36e3c0]  text-lg font-semibold px-5 py-4 rounded-xl shadow-inner ${
                          errors.email ? "border-red-400" : ""
                        }`}
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
                      <Label
                        htmlFor="phone"
                        className="text-slate-400 text-lg font-medium"
                      >
                        Phone Number
                      </Label>
                      <div className="flex gap-2">
                        <Combobox
                          options={countryCodes.map((country) => ({
                            value: country.code,
                            label: (
                              <span className="flex items-center gap-2 whitespace-nowrap">
                                <span>{country.flag}</span>
                                <span>{country.name}</span>
                                <span className="text-teal-400">{country.dialCode}</span>
                              </span>
                            ),
                            flag: country.flag,
                            dialCode: country.dialCode,
                          }))}
                          value={selectedCountry.code}
                          onChange={handleCountryChange}
                          placeholder="Select country code"
                          className="w-[110px] min-w-[110px] max-w-[180px] bg-[#181c23] border-teal-700/40 text-teal-300"
                          renderValue={({ flag, dialCode }: any) => (
                            <span className="flex items-center gap-2">
                              <span>{flag}</span>
                              <span className="text-teal-400 font-semibold">{dialCode}</span>
                            </span>
                          )}
                        />
                        <Input
                          id="phone"
                          value={phoneNumber}
                          onChange={(e) => handlePhoneChange(e.target.value)}
                          className={`flex-1 bg-[#181c23] border-teal-700/40 text-teal-300 placeholder:text-[#36e3c0] text-lg font-semibold px-5 py-4 rounded-xl shadow-inner ${
                            phoneNumber && !isPhoneValid ? "border-red-400" : ""
                          }`}
                          placeholder={selectedCountry.placeholder}
                          maxLength={selectedCountry.maxLength}
                        />
                      </div>
                      {phoneNumber && !isPhoneValid && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-base flex items-center gap-1"
                        >
                          <AlertCircle className="w-5 h-5" />
                          Please enter a valid phone number for {selectedCountry.name}
                        </motion.p>
                      )}
                    </motion.div>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="space-y-3"
                    >
                      <Label
                        htmlFor="countryOfOrigin"
                        className="text-slate-400 text-lg font-medium"
                      >
                        Where are you traveling from? <span className="text-teal-400">*</span>
                      </Label>
                      <Input
                        id="countryOfOrigin"
                        value={formData.countryOfOrigin}
                        onChange={(e) => handleInputChange("countryOfOrigin", e.target.value)}
                        className={`bg-[#181c23] border-teal-700/40 text-teal-300 placeholder:text-[#36e3c0] text-lg font-semibold px-5 py-4 rounded-xl shadow-inner ${errors.countryOfOrigin ? "border-red-400" : ""}`}
                        placeholder="Enter your country"
                        required
                      />
                      {errors.countryOfOrigin && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-base flex items-center gap-1"
                        >
                          <AlertCircle className="w-5 h-5" />
                          {errors.countryOfOrigin}
                        </motion.p>
                      )}
                    </motion.div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="space-y-3"
                    >
                      <Label
                        htmlFor="groupType"
                        className="text-slate-400 text-lg font-medium"
                      >
                        Travel Group Type <span className="text-teal-400">*</span>
                      </Label>
                      <Select
                        value={formData.groupType}
                        onValueChange={(value) =>
                          handleInputChange("groupType", value)
                        }
                        required
                      >
                        <SelectTrigger
                          className={`bg-[#181c23] border-teal-700/40 text-teal-300 ${
                            errors.groupType ? "border-red-400" : ""
                          }`}
                        >
                          <SelectValue placeholder="Select your group type" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#181c23] text-white border border-teal-700/40">
                          <SelectItem value="solo" className="text-white">
                            Solo Traveler
                          </SelectItem>
                          <SelectItem value="couple" className="text-white">
                            Couple
                          </SelectItem>
                          <SelectItem value="family" className="text-white">
                            Family
                          </SelectItem>
                          <SelectItem value="friends" className="text-white">
                            Friends
                          </SelectItem>
                        </SelectContent>
                      </Select>
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
                    <span>
                      Thanks for sharing! Let's plan your dream destination...
                    </span>
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
                  <CardTitle className="flex items-center gap-2 text-white text-lg lg:text-xl font-bold">
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
                    <Label
                      htmlFor="destination"
                      className="text-slate-400 text-lg font-medium"
                    >
                      Dream <span className="text-teal-400">*</span>
                    </Label>
                    <Select
                      value={formData.destination}
                      onValueChange={(value) =>
                        handleInputChange("destination", value)
                      }
                      required
                    >
                      <SelectTrigger
                        className={`bg-[#181c23] border-teal-700/40 text-teal-300 ${
                          errors.destination ? "border-red-400" : ""
                        }`}
                      >
                        <SelectValue placeholder="Select your destination" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#181c23] text-white border border-teal-700/40">
                        {destinations.map(dest => (
                          <SelectItem key={dest.slug} value={dest.country}>
                            {dest.country}
                          </SelectItem>
                        ))}
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

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-3"
                  >
                    <Label htmlFor="days" className="text-slate-400 text-lg font-medium">
                      Number of Days <span className="text-teal-400">*</span>
                    </Label>
                    <Input
                      id="days"
                      type="number"
                      min="1"
                      value={formData.days}
                      onChange={(e) => handleInputChange("days", e.target.value)}
                      className={`bg-[#181c23] border-teal-700/40 text-teal-300 placeholder:text-[#36e3c0]  text-lg font-semibold px-5 py-4 rounded-xl shadow-inner ${errors.days ? "border-red-400" : ""}`}
                      placeholder="Enter number of days"
                      required
                    />
                    {errors.days && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-base flex items-center gap-1"
                      >
                        <AlertCircle className="w-5 h-5" />
                        {errors.days}
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-3"
                  >
                    <Label
                      htmlFor="budget"
                      className="text-slate-400 text-lg font-medium"
                    >
                      Budget Range (USD){" "}
                      <span className="text-teal-400">*</span>
                    </Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) =>
                        handleInputChange("budget", value)
                      }
                      required
                    >
                      <SelectTrigger
                        className={`bg-[#181c23] border-teal-700/40 text-teal-300 ${
                          errors.budget ? "border-red-400" : ""
                        }`}
                      >
                        <SelectValue placeholder="Select your budget range" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#181c23] text-white border border-teal-700/40">
                        <SelectItem
                          value="budget"
                          className="  text-white"
                        >
                          Budget ($500 - $1,500)
                        </SelectItem>
                        <SelectItem
                          value="mid"
                          className="  text-white"
                        >
                          Mid-range ($1,500 - $3,000)
                        </SelectItem>
                        <SelectItem
                          value="luxury"
                          className="  text-white"
                        >
                          Luxury ($3,000 - $5,000)
                        </SelectItem>
                        <SelectItem
                          value="premium"
                          className="  text-white"
                        >
                          Premium ($5,000+)
                        </SelectItem>
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
                    <span>
                      Perfect! Now let's discover what interests you most...
                    </span>
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
                  <CardTitle className="flex items-center gap-2 text-white text-lg lg:text-xl font-bold">
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
                    <Label className="text-slate-400 text-lg font-medium">
                      Select Your Interests (You can select multiple)
                    </Label>
                    <div className="text-sm text-teal-400 mb-2">Tip: Click on all that apply!</div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {interests.map((interest, index) => {
                        const IconComponent = interest.icon;
                        const isSelected = selectedInterests.includes(
                          interest.id
                        );
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
                            } relative`}
                          >
                            {isSelected && (
                              <span className="absolute top-2 right-2 text-teal-400">
                                <CheckCircle className="w-5 h-5" />
                              </span>
                            )}
                            <div className="flex flex-col items-center text-center space-y-2">
                              <IconComponent
                                className={`w-7 h-7 ${
                                  isSelected
                                    ? "text-teal-400"
                                    : "text-slate-100/70"
                                }`}
                              />
                              <span
                                className={`text-lg font-medium ${
                                  isSelected
                                    ? "text-teal-400"
                                    : "text-slate-100/70"
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
                  <CardTitle className="flex items-center gap-2 text-white text-lg lg:text-xl font-bold">
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
                  {/* <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-3"
                  >
                    <Label
                      htmlFor="accommodation"
                      className="text-slate-400 text-lg font-medium"
                    >
                      Accommodation Preferences
                    </Label>
                    <Textarea
                      id="accommodation"
                      value={formData.accommodation}
                      onChange={(e) =>
                        handleInputChange("accommodation", e.target.value)
                      }
                      className={`bg-[#181c23] border-teal-700/40 text-teal-300 placeholder:text-[#36e3c0]  text-lg font-semibold px-5 py-4 rounded-xl shadow-inner ${
                        errors.accommodation ? "border-red-400" : ""
                      }`}
                      placeholder="Enter your accommodation preferences"
                    />
                  </motion.div> */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-3"
                  >
                    <Label
                      htmlFor="notes"
                      className="text-slate-400 text-lg font-medium"
                    >
                      Additional Notes
                    </Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) =>
                        handleInputChange("notes", e.target.value)
                      }
                      className={`bg-[#181c23] border-teal-700/40 text-teal-300 placeholder:text-[#36e3c0]  text-lg font-semibold px-5 py-4 rounded-xl shadow-inner ${
                        errors.notes ? "border-red-400" : ""
                      }`}
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
                className="relative bg-gradient-to-r from-[#10141a] via-[#181c23] to-[#10141a] border-2 border-teal-400 text-white text-lg font-bold px-10 py-5 rounded-full shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_5px_#36e3c0] hover:border-[#36e3c0] hover:text-[#36e3c0] group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Submit Your Itinerary Request
                  <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-[#36e3c0]" />
                </span>
                <span className="absolute inset-0 rounded-full bg-[#36e3c0] opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
              </Button>
            </motion.div>
          </form>
        </div>
      </section>
    </div>
  );
}
