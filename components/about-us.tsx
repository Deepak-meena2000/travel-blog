"use client";
import { useRef, useEffect, useState } from "react";
import { Heart, Camera, Compass } from "lucide-react";

export function AboutUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div
        ref={sectionRef}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-700 ${
          inView ? "animate-fade-in-up-section" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-rose-500 animate-pulse" />
            Our Story
          </h2>
          <div className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto space-y-4">
            <p>
              It all began with a simple backpack and an insatiable curiosity to
              explore the world beyond our comfort zone. What started as
              personal travel journals has blossomed into a vibrant community of
              wanderers, dreamers, and adventure seekers.
            </p>
            <p>
              Through our journey, we've discovered that the most beautiful
              moments often happen when you least expect them - like finding a
              hidden café in Paris, sharing stories with locals in a small
              village in Vietnam, or watching the sunset over the Sahara Desert.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 md:mt-16">
          <div
            className={`p-6 md:p-8 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 shadow-lg transform transition-all duration-500 hover:scale-105 ${
              inView
                ? "animate-card-fade-in-up-scale"
                : "opacity-0 translate-y-10"
            }`}
            style={{ animationDelay: inView ? "0.4s" : "0s" }}
          >
            <div className="flex items-center gap-2">
              <Camera className="w-8 h-8 md:w-12 md:h-12 text-cyan-500 mb-4" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Capturing Moments
              </h3>
            </div>
            <p className="text-sm md:text-base text-gray-600">
              Through our lens, we bring you the world's most breathtaking
              destinations. From detailed photo guides to insider tips on
              capturing the perfect shot, we help you document your journey in
              the most beautiful way possible. Our visual storytelling brings
              destinations to life, inspiring your next adventure.
            </p>
          </div>

          <div
            className={`p-6 md:p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg transform transition-all duration-500 hover:scale-105 ${
              inView
                ? "animate-card-fade-in-up-scale"
                : "opacity-0 translate-y-10"
            }`}
            style={{ animationDelay: inView ? "0.6s" : "0s" }}
          >
            <div className="flex items-center gap-2">
              <Compass className="w-8 h-8 md:w-12 md:h-12 text-amber-500 mb-4" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Your Travel Companion
              </h3>
            </div>
            <p className="text-sm md:text-base text-gray-600">
              We're more than just a travel blog - we're your personal travel
              companion. From detailed itineraries and budget guides to local
              insights and cultural tips, we provide everything you need to plan
              your perfect journey. Let us help you navigate the world with
              confidence and curiosity.
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fade-in-up-section {
          0% {
            opacity: 0;
            transform: translateY(80px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up-section {
          animation: fade-in-up-section 1.1s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @keyframes card-fade-in-up-scale {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          80% {
            opacity: 1;
            transform: translateY(-6px) scale(1.03);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-card-fade-in-up-scale {
          animation: card-fade-in-up-scale 0.55s cubic-bezier(0.77, 0, 0.175, 1)
            both;
        }
      `}</style>
    </section>
  );
}
