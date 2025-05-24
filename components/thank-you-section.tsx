import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Heart, Share2, BookOpen } from "lucide-react"

interface ThankYouSectionProps {
  destination: string
}

export function ThankYouSection({ destination }: ThankYouSectionProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-teal-600" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Thank You for Reading!</h2>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We hope you found this guide helpful in planning your amazing trip to {destination}. Safe travels and create
            unforgettable memories!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="group hover:shadow-lg transition-all duration-300 animate-scale-in">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Loved this guide?</h3>
                <p className="text-sm text-gray-600">Share it with fellow travelers</p>
              </CardContent>
            </Card>

            <Card
              className="group hover:shadow-lg transition-all duration-300 animate-scale-in"
              style={{ animationDelay: "0.1s" }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Share2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Stay connected</h3>
                <p className="text-sm text-gray-600">Follow us for more travel tips</p>
              </CardContent>
            </Card>

            <Card
              className="group hover:shadow-lg transition-all duration-300 animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">More guides</h3>
                <p className="text-sm text-gray-600">Explore other destinations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
