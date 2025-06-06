"use client";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, ArrowRight, Users, Calendar, Plane } from "lucide-react";
import { destinations } from "@/data/destinations";
import { SearchInput } from "@/components/search-input";

// export const metadata: Metadata = {
//   title: "Explore Countries",
//   description: "Discover travel guides and itineraries for countries around the world.",
//   openGraph: {
//     title: "Explore Countries - Nomadic Memo",
//     description: "Discover travel guides and itineraries for countries around the world.",
//   },
// }

export default function CountriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-teal-50 to-cyan-100">
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-[90rem] xl:max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3">
              <Plane className="w-8 h-8 text-cyan-500 animate-float" />
              Explore Amazing Destinations
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover comprehensive travel guides for the world's most
              incredible destinations
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      {/* <section className="py-8 bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchInput />
        </div>
      </section> */}

      {/* Countries Grid */}
      <section className="py-16">
        <div className="max-w-[90rem] xl:max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {destinations.map((destination, index) => (
              <Link
                href={`/${destination.slug}`}
                key={destination.slug}
                className="group block focus:outline-none"
              >
                <div
                  className="relative shadow-xl bg-white/80 overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl border border-gray-100 cursor-pointer animate-card-fade-in-up-scale"
                  style={{
                    animationDelay: `${0.35 + index * 0.08}s`,
                    animationFillMode: "both",
                  }}
                >
                  {/* Image with gradient overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={destination.country_page_image || "/placeholder.svg"}
                      alt={destination.name}
                      fill
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/70 via-cyan-700/20 to-transparent z-10 transition-opacity duration-300 group-hover:from-cyan-800/80" />
                    {/* <Badge className="absolute top-4 left-4 z-20 bg-white/90 text-cyan-700 font-bold px-4 py-1 rounded-full shadow flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4" /> {destination.country}
                    </Badge> */}
                    {/* {destination.featured && (
                      <Badge className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold px-3 py-1 rounded-full shadow flex items-center gap-1 text-xs">
                        Popular
                      </Badge>
                    )} */}
                    <Button
                      variant="empty"
                      size="sm"
                      className="absolute z-50 bottom-4 right-4 bg-[#FFF4F3] text-[#96454C] font-bold rounded-full px-5 py-2 transition-all duration-200 opacity-90 group-hover:opacity-100 group-hover:scale-105"
                      style={{
                        boxShadow:
                          "0px 24px 16px -12px rgba(231, 154, 152, 0.24)",
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
                    {/* <p className="text-gray-600 mb-4 text-center">{destination.description}</p> */}
                    <div className="flex items-center gap-5 mb-5 text-gray-400 text-sm font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {destination.blogs?.length || 0} articles
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        Popular
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
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
      `}</style>
    </div>
  );
}
