import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, ArrowRight, Info, Calendar, Plane, Utensils, Shield, Check, DollarSign, Wifi, Languages, Pyramid, TrainFront, Bike, Soup, FerrisWheel, BookOpenCheck } from "lucide-react"
import { destinations } from "@/data/destinations"
import { ThankYouSection } from "@/components/thank-you-section"
import styles from "@/app/index.module.css"
import { Badge } from "@/components/ui/badge"

export const ICON_MAPPING = {
  "1": Pyramid,
  "2": Plane,
  "3": MapPin,
  "4": DollarSign,
  "5": Calendar,
  "6": Wifi,
  "7": Languages,
  "8": TrainFront,
  "9": Bike,
  "10": Soup,
  "11": Shield,
  "12": FerrisWheel,
  "13": BookOpenCheck
};



export default async function CityTravelGuidePage({ params }: { params: { country: string; city: string } }) {
  const {country, city} = (await params)
  const countryData = destinations.find((d) => d.slug === country);

  if (!countryData) {
    notFound()
  }

  const cityData = countryData?.cities?.find((c) => c.slug === city)
  const cityTravelGuide = cityData?.travel_guide
  const {title, image, slug, data,related_articles} = cityTravelGuide || {}


  if (!data) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="aspect-[6/5] lg:aspect-[14/5] w-full">
          <Image
            src={image || "/placeholder.svg?height=300&width=500"}
            alt={title || "Travel Guide"}
            width={1200}
            height={100}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className={styles.imageGradientOverlay}></div>
        <div className="absolute inset-0 flex items-end pb-4 px-4 z-20">
          <div className="text-white flex flex-col justify-center items-center w-full">
            <div className="flex items-center text-sm mb-2">
              {/* <Link href={`/${country}`} className="text-gray-300 hover:text-white transition-colors">
                {countryData.name}
              </Link>
              <span className="mx-2">/</span>
              <span>{title}</span> */}
            </div>
            <h1 className="text-2xl md:text-5xl font-bold mb-4">{title}</h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Travel Essentials Section */}
              <Card className="mb-8 animate-fade-in bg-slate-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {title}
                  </h3>
                  <ul className="space-y-3">
                    {data.map((item, index) => {
                      const IconComponent = ICON_MAPPING[item.id as unknown as keyof typeof ICON_MAPPING] || Info;
                      return (
                        <li key={`sidebar-${item.heading}-${index}`}>
                          <Link
                            href={`#${item.heading.toLowerCase().replace(/\s+/g, '-')}`}
                            className="flex items-center text-white hover:text-teal-600 transition-colors"
                          >
                            <IconComponent className="w-4 h-4 mr-2 text-white" />
                            <span>{item.heading}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
              </Card>

              <Tabs defaultValue="essentials" className="animate-fade-in">
                <TabsContent value="essentials" className="space-y-8 animate-slide-up">
                  {data.map((item, index) => {
                    const IconComponent = ICON_MAPPING[item.id as unknown as keyof typeof ICON_MAPPING] || Info;
                    return (
                      <Card
                        key={`${item.heading}-${index}`}
                        id={item.heading.toLowerCase().replace(/\s+/g, '-')}
                        className="scroll-mt-24"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <IconComponent className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-xl font-bold">
                              {item.heading}
                            </h2>
                          </div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                            className="text-gray-600 mb-4"
                          />
                        </CardContent>
                      </Card>
                    );
                  })}
                </TabsContent>
              </Tabs>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {related_articles?.map((article: any, index: any) => (
                      <Link
                        key={index}
                        href={`${article.slug}`}
                        className="flex gap-3 group cursor-pointer"
                      >
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          width={80}
                          height={60}
                          className="w-32 h-20 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-sm group-hover:text-teal-600 transition-colors line-clamp-2">
                            {article.title}
                          </h4>
                          <Badge variant="secondary" className="text-xs mt-1">
                            {article.category}
                          </Badge>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <ThankYouSection destination={title || ""} />
    </div>
  )
}
