import Link from "next/link"
import { Card, CardContent } from "./ui/card"
import {  MapPin } from "lucide-react"
import Image from "next/image"
import { Badge } from "./ui/badge"

const MoreAboutSection = ({more_about_data, heading} : any) => {
    return  more_about_data?.length > 0 ? (
        <section className="py-16">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              More About {heading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {more_about_data.map((article: any, index: any) => (
                <Link key={index} href={`${article.slug}`} className="h-full">
                  <Card
                    className="group hover:shadow-lg transition-all duration-300 cursor-pointer animate-scale-in h-full flex flex-col"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-0 h-full flex flex-col">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          width={300}
                          height={200}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-teal-600 text-white text-xs flex items-center gap-1">
                            <MapPin className="w-2 h-2" />
                            {article.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-4 flex flex-col flex-1">
                        <h3 className="font-medium text-gray-900 text-sm group-hover:text-teal-600 transition-colors line-clamp-2 mb-2">
                          {article.title}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

export default MoreAboutSection;
