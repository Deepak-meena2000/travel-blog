import Image from "next/image";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Clock,
  DollarSign,
  Star,
  Waves,
  Building,
  Binoculars,
  Car,
  Hourglass,
  Check,
} from "lucide-react";
import { destinations } from "@/data/destinations";
import { ThankYouSection } from "@/components/thank-you-section";
import Link from "next/link";
import HeroSection from "./components/hero-section";
import OverViewSection from "../things-to-know-before-going/components/overview";
import CityBlogListing from "../[city]/top-things-to-do/component/blog-listing";
import styles from "@/app/index.module.css";
import MoreAboutSection from "@/components/more-about";

export default async function ThingsToDoPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const countryName = (await params).country;
  const country = destinations.find((d) => d.slug === countryName);

  const topThingsToDo = country?.topThingsToDo;

  if (!country) {
    notFound();
  }

  const {
    data,
    title,
    image,
    related_articles = [],
    more_about_data = [],
  } = topThingsToDo || {};

  return (
    <>
      <section className="relative w-full">
        <div className="aspect-[6/5] lg:aspect-[14/5] w-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={`${title || country.name} Top Things to Do`}
            width={1200}
            height={100}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className={styles.imageGradientOverlay}></div>
        <div className="absolute  inset-0 flex items-end pb-4 px-4 z-20">
          <div className="text-white flex justify-center items-center w-full">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="flex flex-col gap-12 max-w-[90rem] xl:max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <OverViewSection IconName={Building} overview={country.overview} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-12">
                {data?.map((blog: any, index: any) => (
                  <Card
                    key={blog.id}
                    className="overflow-hidden animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    id={`attraction-${blog.id}`}
                  >
                    <div className="w-full p-8 border-l-8 border-teal-600 ">
                      <h2 className="text-2xl font-semibold text-black">
                        {index + 1}. {blog.title}
                      </h2>
                    </div>
                    <div className="relative">
                      <figure className="relative w-full">
                        <Image
                          src={
                            blog.image ||
                            "/placeholder.svg?height=300&width=500"
                          }
                          alt={blog.name}
                          width={800}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                        {blog.imageCreditHTML && (
                          <figcaption className="text-right  text-[8px] opacity-20 pr-4 ">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: blog.imageCreditHTML,
                              }}
                            ></span>
                          </figcaption>
                        )}
                      </figure>

                      <div className="absolute" />
                    </div>

                    <CardContent className="p-8">
                      <p className="text-gray-600 font-normal mb-6">
                        {blog.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-4">
                        {blog.operationalHours && (
                          <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                            <div className="bg-blue-100 p-3 rounded-full">
                              <Clock className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-1">
                                Operational Hours
                              </h4>
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: blog.operationalHours,
                                }}
                                className="text-slate-600"
                              ></p>
                            </div>
                          </div>
                        )}
                        {blog.location && (
                          <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                            <div className="bg-green-100 p-3 rounded-full">
                              <MapPin className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-1">
                                Location
                              </h4>
                              <p className="text-slate-600">{blog.location}</p>
                            </div>
                          </div>
                        )}
                        {blog.price && (
                          <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                            <div className="bg-purple-100 p-3 rounded-full">
                              <DollarSign className="h-5 w-5 text-purple-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-1">
                                Price
                              </h4>
                              <p
                                className="text-slate-600"
                                dangerouslySetInnerHTML={{
                                  __html: blog.price,
                                }}
                              />
                            </div>
                          </div>
                        )}
                        {blog.duration && (
                          <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                            <div className="bg-orange-100 p-3 rounded-full">
                              <Hourglass className="h-5 w-5 text-orange-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-1">
                                Duration
                              </h4>
                              <p className="text-slate-600">{blog.duration}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      {blog?.tips && blog.tips.length > 0 && (
                        <div className="mt-6">
                          <div className="flex items-center mb-3">
                            <div className="bg-teal-100 p-2 rounded-full mr-3">
                              <Star className="h-4 w-4 text-teal-600" />
                            </div>
                            <h4 className="font-semibold text-slate-800">
                              Quick Tips
                            </h4>
                          </div>
                          <div className="space-y-2">
                            {blog.tips.map((tip: any, i: any) => {
                              return (
                                <div
                                  key={i}
                                  className="flex items-start space-x-3"
                                >
                                  <Check className="h-3 w-3 text-teal-500 mt-1.5 flex-shrink-0" />
                                  <p className="text-sm text-slate-600">
                                    {tip}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
                {/* Card Listing */}
              </div>
            </div>

            {related_articles?.length > 0 ? (
              <div className="space-y-8">
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
                            className="w-32 h-15 object-cover rounded-lg flex-shrink-0"
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

                    {/* <div className="mt-6 p-4 bg-gray-50 rounded-lg text-center">
              <p className="text-sm text-gray-500 mb-2">ADVERTISEMENT</p>
              <div className="h-32 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-400">Sidebar Ad</span>
              </div>
            </div> */}
                  </CardContent>
                </Card>
              </div>
            ) : null}
          </div>
        </div>
        <MoreAboutSection
          more_about_data={more_about_data}
          heading={country.name}
        />
        <ThankYouSection destination={country.name} />
      </section>
    </>
  );
}
