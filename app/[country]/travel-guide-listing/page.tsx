import { destinations } from "@/data/destinations";
import Image from "next/image";
import styles from "@/app/index.module.css";
import { notFound } from "next/navigation";
import { CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin } from "lucide-react";
import { categoryIcons } from "../page";




const CountryTravelGuideBlogListing = async ({
  params,
}: {
  params: Promise<{ country: string }>;
}) => {
  const countryName = (await params).country;
  const country = destinations.find((d) => d.slug === countryName);
  const travelGuideBlogs = country?.travelGuideBlogs?.data || [];


  const heading = country?.travelGuideBlogs?.heading || "";
  const image = country?.travelGuideBlogs?.image || "/placeholder.svg";
  const description = country?.travelGuideBlogs?.description || "";
  const overview = country?.travelGuideBlogs?.overview || "";

  if (!country) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <section className="relative w-full">
        <div className="aspect-[6/5] lg:aspect-[14/5] w-full">
          <Image
            src={image}
            alt={country.name}
            width={1200}
            height={100}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className={styles.imageGradientOverlay}></div>
        <div className="absolute inset-0 flex items-end pb-4 px-4 z-20">
          <div className="text-white flex flex-col justify-center items-center w-full">
            <h1 className="text-2xl md:text-5xl font-bold mb-4">
              {heading}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              {description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {heading}
              </h2>
              <p className="text-xl text-gray-600">
                {description}
              </p>
            </div>
          </div>





          {travelGuideBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {travelGuideBlogs.slice(0, 6).map((post, index) => {
                const IconComponent =
                  categoryIcons[post.category as keyof typeof categoryIcons] ||
                  MapPin;
                return (
                  <Link
                    href={`${post.slug}`}
                  >
                    <Card
                      key={post.slug}
                      className="group hover:shadow-lg transition-all duration-300 animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <Image
                            src={
                              post.image ||
                              "/placeholder.svg?height=250&width=400"
                            }
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
                          <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {post.description}
                          </p>
                          <div className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors">
                            Read more
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No blogs available for {country.name} yet.
              </p>
              <p className="text-gray-400 mt-2">
                Check back soon for amazing travel content!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CountryTravelGuideBlogListing;
