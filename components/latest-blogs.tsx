import Image from "next/image"
import Link from "next/link"
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
  return (
    <section className="py-16">
      <div className="max-8-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
            <p className="text-xl text-gray-600">Travel tips, guides, and inspiration for your next adventure</p>
          </div>
          <Button asChild variant="outline" className="hidden md:flex">
            <Link href="/blog">
              View all articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 6).map((post, index) => {
            const IconComponent = categoryIcons[post.category as keyof typeof categoryIcons] || MapPin
            return (
              <Card
                key={post.slug}
                className="group hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-teal-600 hover:bg-teal-700 text-white flex items-center gap-1">
                        <IconComponent className="w-3 h-3" />
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                      <Link href={`/${post.country}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    <Link
                      href={`/${post.country}`}
                      className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors"
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

        <div className="text-center mt-12 md:hidden">
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">
              View all articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
