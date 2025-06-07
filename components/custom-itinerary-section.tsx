"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const features = [
  {
    title: "Personalised Itinerary",
    icon: "📝",
    description: "Your Journey, Your Way – A Tailored Itinerary Just for You",
    color: "from-teal-500 to-blue-500",
    gradient: "bg-gradient-to-r from-teal-500/20 to-blue-500/20",
  },
  {
    title: "Free",
    icon: "🎁",
    description: "100% Free Itinerary (But We Won’t Say No to a Souvenir!!",
    color: "from-green-500 to-emerald-500",
    gradient: "bg-gradient-to-r from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Thoroughly Researched",
    icon: "🔍",
    description: "Grounded in Deep, Expert-Led Research for Every Detail That Matters",
    color: "from-purple-500 to-indigo-500",
    gradient: "bg-gradient-to-r from-purple-500/20 to-indigo-500/20",
  },
  {
    title: "Our Experience",
    icon: "🌏",
    description: "Shaped by Genuine Local Experience to Give You an Insider’s Edge",
    color: "from-yellow-500 to-orange-500",
    gradient: "bg-gradient-to-r from-yellow-500/20 to-orange-500/20",
  },
];

export function CustomItinerarySection() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            animate={{
              x: [0, Math.random() * 1000 - 500],
              y: [0, Math.random() * 1000 - 500],
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Create Your Dream Journey
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Design your perfect travel experience with our custom itinerary planner
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Interactive Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative"
                onHoverStart={() => setHoveredFeature(index)}
                onHoverEnd={() => setHoveredFeature(null)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className={`p-6 rounded-2xl bg-black/40 backdrop-blur-lg border border-white/10 cursor-pointer transform transition-all duration-300 ${
                    hoveredFeature === index ? "scale-105" : ""
                  } ${feature.gradient}`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  animate={{
                    boxShadow: hoveredFeature === index
                      ? "0 0 30px rgba(255,255,255,0.1)"
                      : "0 0 0px rgba(255,255,255,0)",
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <motion.span
                      className="text-4xl"
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 10, -10, 0],
                        scale: hoveredFeature === index ? 1.2 : 1,
                      }}
                      transition={{
                        duration: 2 + index * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {feature.icon}
                    </motion.span>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right side - Animated Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              className="bg-black/40 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden h-[500px] relative"
              animate={{
                scale: [1, 1.02, 1],
                rotate: [0, 2, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Decorative Border */}
              <div className="absolute inset-0 border border-white/20 rounded-2xl m-2 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="text-center"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative"
                  >
                    <span className="text-8xl">✈️</span>
                  </motion.div>
                  <motion.h3
                    className="mt-8 text-2xl font-bold text-white"
                    animate={{
                      opacity: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    Your Journey Awaits
                  </motion.h3>
                  <motion.p
                    className="mt-2 text-gray-400"
                    animate={{
                      opacity: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    Start planning your perfect trip
                  </motion.p>
                  <motion.div
                    className="mt-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href="/custom-itinerary"
                      className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                    >
                      Start Planning Now
                    </Link>
                  </motion.div>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <AnimatePresence>
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
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
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  >
                    <span className="text-2xl">
                      {["🗺️", "🏖️", "🗼", "🏰", "🌅"][i]}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
