"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Plane, Star, Calendar, Users } from "lucide-react";
import { destinations } from "@/data/destinations";

export function PopularDestinations() {
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
    <section className="py-20 bg-gradient-to-br from-white via-teal-50 to-cyan-100 relative overflow-hidden">
      {/* Abstract background shapes */}
      {/* <div className="absolute -top-32 -left-32 w-96 h-96 bg-teal-100 rounded-full opacity-30 blur-3xl z-0" /> */}
      {/* <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-200 rounded-full opacity-20 blur-2xl z-0" /> */}
      <div
        ref={sectionRef}
        className={`max-w-[90rem] xl:max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-700 ${
          inView ? "animate-fade-in-up-section" : "opacity-0 translate-y-20"
        }`}
      >
        <div
          className={`text-center mb-14 ${
            inView ? "animate-heading-fade-in-up" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: inView ? "0.1s" : "0s" }}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold md:font-extrabold text-gray-900 mb-3 flex items-center justify-center gap-3">
            <Plane className="w-6 h-6 md:w-8 md:h-8 text-cyan-500 animate-float" />
            Popular Destinations
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover trending places and hidden gems. Click to explore guides,
            tips, and stories!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {destinations.slice(0, 6).map((destination, index) => (
            <Link
              href={`/${destination.slug}`}
              key={destination.slug}
              className="group block focus:outline-none"
            >
              <div
                className={`relative  shadow-xl bg-white/80 overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl border border-gray-100 cursor-pointer
                  ${
                    inView
                      ? "animate-card-fade-in-up-scale"
                      : "opacity-0 translate-y-10 scale-95"
                  }`}
                style={{
                  animationDelay: inView ? `${0.35 + index * 0.08}s` : "0s",
                  animationFillMode: "both",
                }}
              >
                {/* Image with gradient overlay */}
                <div className="relative h-64 overflow-hidden ">
                  <Image
                    src={destination.home_image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/70 via-cyan-700/20 to-transparent z-10 transition-opacity duration-300 group-hover:from-cyan-800/80" />
                  {/* Country badge */}
                  {/* <span className="absolute top-4 left-4 z-20 bg-white/90 text-cyan-700 font-bold px-4 py-1 rounded-full shadow flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4" /> {destination.country}
                  </span> */}
                  {/* Trending badge for first card */}
                  {/* {index === 0 && (
                    <span className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold px-3 py-1 rounded-full shadow flex items-center gap-1 text-xs animate-pulse">
                      <Star className="w-3 h-3" /> Trending
                    </span>
                  )} */}
                  {/* Floating Explore button */}
                  <Button
                    variant="empty"
                    size="sm"
                    className="absolute z-50 bottom-4 right-4 bg-[#FFF4F3] text-[#96454C] font-bold rounded-full px-5 py-2 transition-all duration-200 opacity-90 group-hover:opacity-100 group-hover:scale-105"
                    style={{
                      boxShadow: "0px 24px 16px -12px rgba(231, 154, 152, 0.24)",
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                    }}
                  >
                    Explore <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
                {/* Card content */}
                <div className="w-full flex flex-col items-center justify-center p-6 pt-4 relative z-20">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 text-center">
                    {destination.name}
                  </h3>

                  <div className="flex items-center gap-5 text-gray-400 text-sm font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />5 articles
                    </span>
                    {/* <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      Popular
                    </span> */}
                  </div>
                  {/* <Button className="w-max rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-base py-3 flex items-center justify-center gap-2 mt-2 shadow-md transition-all duration-200">
                    <MapPin className="w-5 h-5" />
                    Explore
                  </Button> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center animate-slide-up">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="font-semibold group"
          >
            <Link href="/countries">
              View All Destinations
              <ArrowRight className="w-4 h-4 ml-2 arrow-animate transition-transform duration-300" />
            </Link>
          </Button>
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
        @keyframes heading-fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-heading-fade-in-up {
          animation: heading-fade-in-up 0.8s cubic-bezier(0.77, 0, 0.175, 1)
            both;
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
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 2.5s ease-in-out infinite;
        }
        .arrow-animate {
          transition: transform 0.3s cubic-bezier(0.77, 0, 0.175, 1);
        }
        .group:hover .arrow-animate {
          transform: translateX(8px);
        }
      `}</style>
    </section>
  );
}
