'use client'
import Image from "next/image"
import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, MapPin, Utensils, Camera, Star } from "lucide-react"
import { blogPosts } from "@/data/blog-posts"

const categoryIcons = {
  Activities: Camera,
  "City Guide": MapPin,
  Culture: Star,
  Food: Utensils,
  Beaches: MapPin,
  Travel: MapPin,
}

export function LatestBlogs() {
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
      <div
        ref={sectionRef}
        className={`max-w-[90rem] xl:max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-700 ${
          inView ? "animate-fade-in-up-section" : "opacity-0 translate-y-20"
        }`}
      >
        <div className={`text-center mb-14 ${inView ? "animate-heading-fade-in-up" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: inView ? '0.1s' : '0s' }}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold md:font-extrabold text-gray-900 mb-3 flex items-center justify-center gap-3">
            <Star className="w-6 h-6 md:w-8 md:h-8 text-teal-500 animate-float" />
            Latest from Our Blog
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Travel tips, guides, and inspiration for your next adventure
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {blogPosts.slice(0, 6).map((post, index) => {
            const IconComponent = categoryIcons[post.category as keyof typeof categoryIcons] || MapPin
            return (
              <Card
                key={post.slug}
                className={`group hover:shadow-2xl transition-all duration-300 border border-gray-100 bg-white/80 rounded-3xl overflow-hidden ${
                  inView ? "animate-card-fade-in-up-scale" : "opacity-0 translate-y-10 scale-95"
                }`}
                style={{ animationDelay: inView ? `${0.35 + index * 0.08}s` : '0s', animationFillMode: 'both' }}
              >
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <Badge className="bg-teal-600 hover:bg-teal-700 text-white flex items-center gap-1">
                        <IconComponent className="w-3 h-3" />
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6 pt-4 relative z-20">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                      <Link href={`/${post.country}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 min-h-[2.5em]">{post.excerpt}</p>
                    <Link
                      href={`/${post.country}`}
                      className="text-sm lg:text-base inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors"
                    >
                      Read more
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <div className="text-center animate-slide-up">
          <Button asChild variant="outline" size="lg" className="font-semibold group">
            <Link href="/blog">
              View all articles
              <ArrowRight className="w-4 h-4 ml-2 arrow-animate transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </div>
      <style jsx global>{`
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
          animation: heading-fade-in-up 0.8s cubic-bezier(0.77, 0, 0.175, 1) both;
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
          animation: card-fade-in-up-scale 0.55s cubic-bezier(0.77, 0, 0.175, 1) both;
        }
        @keyframes float {
          0%, 100% {
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
  )
}
