"use client";
import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Users,
  Award,
  Globe,
  Heart,
  Star,
  Sparkles,
  Compass,
  Mountain,
  Coffee,
  Plane,
  Camera,
  BookOpen,
  Palette,
  Music,
  Gift,
  Lightbulb,
  Rocket,
  Sun,
  Moon,
} from "lucide-react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import lottieCatAnimation from "@/public/images/lottie/cute_cat.json";
import lottieSleepingCatAnimation from "@/public/images/lottie/sleeping_cat.json";
import CatLogo from "@/public/images/cat.svg";

// export const metadata: Metadata = {
//   title: "About QTG - Your Travel Companion",
//   description:
//     "Discover the story behind QTG - your trusted travel companion. Learn about our journey, values, and mission to make travel magical.",
//   openGraph: {
//     title: "About QTG - Your Travel Companion",
//     description:
//       "Join us on our journey of making travel magical. Learn about our story, values, and mission to inspire your next adventure.",
//   },
// }

const values = [
  {
    icon: Rocket,
    title: "Passion for Travel",
    description:
      "We believe every journey should be filled with wonder and excitement.",
  },
  {
    icon: Camera,
    title: "Adventure Awaits",
    description: "Discover hidden gems and create unforgettable memories.",
  },
  {
    icon: Palette,
    title: "Nature's Beauty",
    description: "Celebrating the world's most breathtaking landscapes.",
  },
  {
    icon: Music,
    title: "Local Experiences",
    description: "Immerse yourself in authentic cultural experiences.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-teal-50 to-white overflow-hidden">
        {/* <div className="absolute inset-0 z-0">
          <Image
            src="/images/about_us_banner.jpg"
            alt="About QTG"
            className="object-cover opacity-20"
            fill
            priority
          />
        </div> */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-7"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-teal-800 mb-4 flex flex-col items-center gap-2">
              <span className="inline-flex items-center gap-3">
                <span className="tracking-tight">Quick Thrill Guide</span>
                <span className="text-2xl md:text-4xl font-bold text-teal-500 bg-teal-100 px-3 py-1 rounded-full shadow-sm ml-2">
                  QTG
                </span>

                <Image src={CatLogo} alt="Cat Logo" width={100} height={100} />
              </span>
            </h1>
            <div className="flex flex-col items-center gap-2 mt-2">
              <span className="text-lg md:text-xl text-gray-700 font-semibold italic tracking-tight">
                No Guesswork, Just Great Guides — Everything You Need to Travel
                Right
              </span>
              <div className="w-24 h-1 bg-teal-400 rounded-full mt-1" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About QTG Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center md:text-left">
              About QTG <span className="text-teal-600">✨</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 bg-teal-50/60 rounded-2xl p-6 md:p-8 shadow-md">
              {/* Left: Text */}
              <div className="flex-1 space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-lg text-gray-600 leading-relaxed"
                >
                  <span className="font-semibold text-teal-600">
                    QTG (Quick Thrill Guide)
                  </span>{" "}
                  is your all-in-one Cute travel companion designed to simplify
                  trip planning and make your journeys better, smarter, explore
                  deeper and enjoyable.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-lg text-gray-600 leading-relaxed"
                >
                  From detailed travel guides and curated things-to-do lists to
                  full-blown itineraries and food trails, we dig out the gems so
                  you don't have to. We include the kind of information that
                  matters when you're planning — like entry costs, best times to
                  visit, how much time to spend, what to expect, and what to
                  avoid.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white/80 p-6 rounded-lg border border-teal-100"
                >
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our goal is simple: to bring you the essentials in a clear,
                    helpful way so you can focus on exploring, not overthinking.
                    Our QTG is here to guide you through it — one destination at
                    a time.
                  </p>
                </motion.div>
              </div>
              {/* Right: Lottie + Cat caption */}
              <div className="flex flex-col items-center justify-center w-full md:w-80 mt-6 md:mt-0">
                {/* Lottie Animation (larger, less margin) */}
                <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] flex items-center justify-center">
                  <Lottie
                    animationData={lottieCatAnimation}
                    loop={true}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="text-center mt-2">
                  <span className="text-base font-semibold text-teal-700">
                    Meet our QTG!!
                  </span>
                  <div className="mt-1 text-xs text-gray-500 italic">
                    Your purr-fect travel buddy
                  </div>
                </div>
                {/* Optional: Speech bubble */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                  className="mt-2 bg-white border-2 border-teal-200 rounded-xl px-3 py-1 text-teal-700 text-xs font-semibold shadow"
                  style={{ whiteSpace: "nowrap" }}
                >
                  "Let's make travel fun & easy!"
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 bg-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Journey
              <span className="text-teal-600"> 🌟</span>
            </h2>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We've always loved to travel — the kind of love that has us
                booking flights before we've even finished packing for the last
                trip. Along the way, we found ourselves enjoying something else
                just as much: putting together detailed itineraries for friends
                and family to help make their trips easier. But one thing became
                clear fast, planning a trip isn't always simple.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                You know the drill: one tab open for "top things to do," another
                for "visa requirements," a third for "how to get from the
                airport," and five more trying to figure out how much this
                attraction ticket actually costs. Add in the uncertainty of
                currency exchange, ideal travel time, whether that beach is
                really worth the hype, or if you're going to miss the last bus —
                and suddenly, the thrill of travel turns into a full-time
                research project.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-teal-50 to-white p-8 rounded-xl border border-teal-100"
            >
              <h3 className="text-2xl font-bold text-teal-600 mb-4">
                That's where our QTG – Quick Thrill Guide came in.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We created QTG to be the guide we wish we had, a place where
                everything you need to plan your trip is sorted, simplified, and
                stripped of the stress. Real prices, real suggestions, and all
                those small-but-crucial quick tips that actually make a
                difference when you're out there exploring.
              </p>
              <p className="text-xl font-semibold text-gray-700 italic">
                All the answers in one place, so you can go places.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gradient-to-b from-[#18181b] to-[#23272f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3 drop-shadow-lg mb-3">
              Our Values{" "}
              {/* <div className="w-16 h-16 inline-block align-middle">
                <Lottie
                  animationData={lottieSleepingCatAnimation}
                  loop={true}
                  style={{ width: "100%", height: "100%" }}
                />
              </div> */}
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              What makes QTG special? Our values guide every guide, tip, and
              itinerary we create.
            </p>
          </motion.div>

          {/* Horizontal Value Cards */}
          <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center w-full">
            {/* Real Experiences */}
            <motion.div
              whileHover={{
                scale: 1.06,
                rotate: -2,
                boxShadow: "0 8px 32px 0 rgba(0,0,0,0.35)",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="flex-1 min-w-[220px] max-w-xs bg-gradient-to-br from-[#23272f] to-[#2d313a] rounded-2xl p-6 shadow-xl border border-[#23272f] backdrop-blur-md glass-card group relative overflow-hidden"
            >
              <span className="w-10 md:w-12 h-10 md:h-12 mb-3 mx-auto flex items-center justify-center">
                <Image src={CatLogo} alt="Cat Logo" width={40} height={40} />
              </span>
              <h3 className="text-lg font-bold text-teal-300 mb-2 tracking-tight">
                Real Experiences
              </h3>
              <p className="text-gray-200 text-sm">
                We rely on our own travel experiences — plus the journeys of
                friends and family we've helped by crafting itineraries — to
                bring you trusted, firsthand insights.
              </p>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-teal-400/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
            </motion.div>

            {/* Thorough Research */}
            <motion.div
              whileHover={{
                scale: 1.06,
                rotate: 2,
                boxShadow: "0 8px 32px 0 rgba(0,0,0,0.35)",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 18,
                delay: 0.08,
              }}
              className="flex-1 min-w-[220px] max-w-xs bg-gradient-to-br from-[#2a233a] to-[#3a2d4a] rounded-2xl p-6 shadow-xl border border-[#2a233a] backdrop-blur-md glass-card group relative overflow-hidden"
            >
              <span className="text-3xl md:text-4xl mb-3 block">🔍</span>
              <h3 className="text-lg font-bold text-purple-300 mb-2 tracking-tight">
                Thorough Research
              </h3>
              <p className="text-gray-200 text-sm">
                Every guide, tip, and recommendation is backed by detailed
                research and cross-checked facts — so you spend less time
                figuring things out, and more time enjoying the journey.
              </p>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-400/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
            </motion.div>

            {/* Passion for Travel */}
            <motion.div
              whileHover={{
                scale: 1.06,
                rotate: -2,
                boxShadow: "0 8px 32px 0 rgba(0,0,0,0.35)",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 18,
                delay: 0.16,
              }}
              className="flex-1 min-w-[220px] max-w-xs bg-gradient-to-br from-[#2a2d3a] to-[#3a2d2a] rounded-2xl p-6 shadow-xl border border-[#2a2d3a] backdrop-blur-md glass-card group relative overflow-hidden"
            >
              <span className="text-3xl md:text-4xl mb-3 block">✈️</span>
              <h3 className="text-lg font-bold text-pink-300 mb-2 tracking-tight">
                Passion for Travel
              </h3>
              <p className="text-gray-200 text-sm">
                Travel isn't just a topic for us — it's what drives us. That
                passion fuels every piece of content we create, from the
                smallest tips to full itineraries.
              </p>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-pink-400/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
            </motion.div>

            {/* Helping You Travel Better */}
            <motion.div
              whileHover={{
                scale: 1.06,
                rotate: 2,
                boxShadow: "0 8px 32px 0 rgba(0,0,0,0.35)",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 18,
                delay: 0.24,
              }}
              className="flex-1 min-w-[220px] max-w-xs bg-gradient-to-br from-[#2a3a2d] to-[#3a4a2d] rounded-2xl p-6 shadow-xl border border-[#2a3a2d] backdrop-blur-md glass-card group relative overflow-hidden"
            >
              <span className="text-3xl md:text-4xl mb-3 block">🤝</span>
              <h3 className="text-lg font-bold text-yellow-200 mb-2 tracking-tight">
                Helping You Travel Better
              </h3>
              <p className="text-gray-200 text-sm">
                Our ultimate goal is to make your trips smoother, smarter, and
                more enjoyable — whether it's your first getaway or your
                fiftieth.
              </p>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-yellow-300/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
            </motion.div>

            {/* Feedback-Driven */}
            <motion.div
              whileHover={{
                scale: 1.06,
                rotate: -2,
                boxShadow: "0 8px 32px 0 rgba(0,0,0,0.35)",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 18,
                delay: 0.32,
              }}
              className="flex-1 min-w-[220px] max-w-xs bg-gradient-to-br from-[#233a3a] to-[#2d4a4a] rounded-2xl p-6 shadow-xl border border-[#233a3a] backdrop-blur-md glass-card group relative overflow-hidden"
            >
              <span className="text-3xl md:text-4xl mb-3 block">💬</span>
              <h3 className="text-lg font-bold text-blue-200 mb-2 tracking-tight">
                Feedback-Driven
              </h3>
              <p className="text-gray-200 text-sm">
                We listen to our community and continuously improve based on
                your feedback — because your travel needs come first.
              </p>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-blue-400/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section - Split Two Halves */}
      <section className="relative py-0 bg-[#18181b] overflow-hidden">
        {/* Wavy SVG top border for visual separation */}
        <div className="absolute -top-1 left-0 w-full overflow-hidden leading-none z-10">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-16"
          >
            <path
              fill="#23272f"
              d="M0,32 C360,80 1080,0 1440,48 L1440,0 L0,0 Z"
            />
          </svg>
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3 drop-shadow-lg">
              Ready for your next journey?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Pick your path: explore the world or let us craft your perfect
              adventure. Your next story starts here!
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-0 md:gap-0 rounded-3xl overflow-hidden shadow-2xl border border-[#23272f] bg-gradient-to-r from-[#23272f] to-[#23272f]">
            {/* Left: Explore All Destinations */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 90 }}
              className="flex-1 flex flex-col justify-center items-center px-6 md:px-8 py-10 md:py-14 bg-gradient-to-br from-[#1e293b] via-[#223] to-[#23272f] relative group md:hover:z-20 md:transition-transform md:duration-300 md:will-change-transform"
              whileHover={
                typeof window !== "undefined" && window.innerWidth >= 768
                  ? { scale: 1.04 }
                  : {}
              }
              onHoverStart={(_, info) => {
                if (window.innerWidth >= 768) {
                  document
                    .getElementById("cta-right")
                    ?.classList.add("md:scale-95");
                }
              }}
              onHoverEnd={(_, info) => {
                if (window.innerWidth >= 768) {
                  document
                    .getElementById("cta-right")
                    ?.classList.remove("md:scale-95");
                }
              }}
            >
              <span className="text-4xl md:text-5xl mb-4 animate-bounce-slow">
                🌍
              </span>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-teal-300 mb-2 text-center">
                Dream. Discover. Explore!
              </h3>
              <p className="text-gray-200 text-base md:text-lg mb-6 md:mb-8 text-center max-w-md font-medium md:font-normal">
                Dive into a world of destinations, guides, and hidden gems.
                Where will you go next?
              </p>
              <a
                href="/countries"
                className="inline-block bg-teal-500 hover:bg-teal-400 text-white text-base md:text-lg font-bold px-6 md:px-8 py-3 md:py-4 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-teal-300 animate-glow"
              >
                Explore All Destinations
              </a>
              {/* Decorative floating accent */}
              <div className="absolute -top-8 -left-8 w-24 md:w-32 h-24 md:h-32 bg-teal-400/20 rounded-full blur-2xl animate-float" />
            </motion.div>
            {/* Vertical separator (hidden on mobile) */}
            <div className="hidden md:block w-1 bg-gradient-to-b from-transparent via-gray-700/40 to-transparent" />
            {/* Right: Custom Itinerary */}
            <motion.div
              id="cta-right"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 90,
                delay: 0.1,
              }}
              className="flex-1 flex flex-col justify-center items-center px-6 md:px-8 py-10 md:py-14 bg-gradient-to-br from-[#312e81] via-[#581c87] to-[#23272f] relative group md:transition-transform md:duration-300 md:will-change-transform"
              whileHover={
                typeof window !== "undefined" && window.innerWidth >= 768
                  ? { scale: 1.04 }
                  : {}
              }
              onHoverStart={(_, info) => {
                if (window.innerWidth >= 768) {
                  document
                    .querySelector(".cta-left")
                    ?.classList.add("md:scale-95");
                }
              }}
              onHoverEnd={(_, info) => {
                if (window.innerWidth >= 768) {
                  document
                    .querySelector(".cta-left")
                    ?.classList.remove("md:scale-95");
                }
              }}
            >
              <span className="text-4xl md:text-5xl mb-4 animate-wiggle">
                🪄
              </span>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-pink-300 mb-2 text-center">
                Your Trip, Your Way
              </h3>
              <p className="text-gray-200 text-base md:text-lg mb-6 md:mb-8 text-center max-w-md font-medium md:font-normal">
                Let us craft a magical itinerary just for you. Every detail,
                personalized for your dream adventure.
              </p>
              <a
                href="/custom-itinerary"
                className="inline-block bg-pink-500 hover:bg-pink-400 text-white text-base md:text-lg font-bold px-6 md:px-8 py-3 md:py-4 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-pink-300 animate-glow"
              >
                Get a Custom Itinerary
              </a>
              {/* Decorative floating accent */}
              <div className="absolute -bottom-8 -right-8 w-24 md:w-32 h-24 md:h-32 bg-pink-400/20 rounded-full blur-2xl animate-float" />
            </motion.div>
          </div>
        </div>
        {/* Custom keyframes for fun animations */}
        <style jsx>{`
          @keyframes bounce-slow {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-16px);
            }
          }
          .animate-bounce-slow {
            animation: bounce-slow 2.2s infinite;
          }
          @keyframes wiggle {
            0%,
            100% {
              transform: rotate(-8deg);
            }
            50% {
              transform: rotate(8deg);
            }
          }
          .animate-wiggle {
            animation: wiggle 1.6s infinite;
          }
          @keyframes float {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-18px);
            }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          @keyframes glow {
            0%,
            100% {
              box-shadow: 0 0 24px 0 rgba(34, 211, 238, 0.18);
            }
            50% {
              box-shadow: 0 0 36px 8px rgba(34, 211, 238, 0.28);
            }
          }
          .animate-glow {
            animation: glow 2.5s ease-in-out infinite;
          }
        `}</style>
      </section>
    </div>
  );
}
