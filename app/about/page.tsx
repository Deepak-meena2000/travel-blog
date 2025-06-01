import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Award, Globe, Heart, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Nomadic Memo's mission to help travelers discover amazing destinations and create unforgettable memories around the world.",
  openGraph: {
    title: "About Nomadic Memo - Our Story and Mission",
    description:
      "Learn about our passionate team of travel experts and our mission to provide authentic travel experiences.",
  },
}

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & Travel Expert",
    image: "/placeholder.svg?height=300&width=300",
    bio: "With over 10 years of travel experience across 50+ countries, Sarah founded Nomadic Memo to help others discover the world's hidden gems.",
  },
  {
    name: "Marie Dubois",
    role: "Europe Specialist",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Born in Paris, Marie brings insider knowledge of European destinations and culture to our travel guides.",
  },
  {
    name: "Takeshi Yamamoto",
    role: "Asia Pacific Expert",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Based in Tokyo, Takeshi specializes in authentic Asian travel experiences and cultural immersion.",
  },
]

const stats = [
  { icon: Globe, label: "Countries Covered", value: "50+" },
  { icon: Users, label: "Happy Travelers", value: "10,000+" },
  { icon: MapPin, label: "Destinations", value: "200+" },
  { icon: Award, label: "Years Experience", value: "10+" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Nomadic Memo</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're passionate travelers dedicated to helping you discover amazing destinations and create unforgettable
              memories around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Nomadic Memo, we believe that travel has the power to transform lives, broaden perspectives, and create
              lasting connections. Our mission is to provide comprehensive, authentic travel guides that help you
              explore the world with confidence and discover experiences that go beyond the typical tourist path.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card
                  key={stat.label}
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                    <p className="text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-[90rem] xl:max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team of passionate travelers and local experts work together to bring you the most authentic and
              comprehensive travel guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className="group hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <Image
                      src={member.image || "/placeholder.svg?height=200&width=200"}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-teal-600 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Expert
                      </Badge>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-teal-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="animate-slide-up">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Authentic Experiences</h3>
                </div>
                <p className="text-gray-600">
                  We focus on genuine, local experiences that connect you with the true spirit of each destination,
                  going beyond surface-level tourism.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Community First</h3>
                </div>
                <p className="text-gray-600">
                  We believe in supporting local communities and promoting responsible tourism that benefits both
                  travelers and destinations.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <Globe className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Sustainable Travel</h3>
                </div>
                <p className="text-gray-600">
                  We promote environmentally conscious travel practices and encourage travelers to minimize their impact
                  while maximizing their positive contribution.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Expert Knowledge</h3>
                </div>
                <p className="text-gray-600">
                  Our team combines personal travel experience with extensive research to provide accurate, up-to-date,
                  and practical travel information.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
