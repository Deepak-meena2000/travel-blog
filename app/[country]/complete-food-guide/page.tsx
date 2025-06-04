"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Utensils,
  Star,
  Info,
  Coffee,
  IceCream,
  Salad,
  Soup,
  Sandwich,
} from "lucide-react";
import { destinations } from "@/data/destinations";
import { ThankYouSection } from "@/components/thank-you-section";
import styles from "@/app/index.module.css";
import OverViewSection from "../things-to-know-before-going/components/overview";
import { notFound } from "next/navigation";
import TableOfContent from "../things-to-know-before-going/components/table-of-content";
import { ICONS } from "@/constants/icon";

interface FoodItem {
  id: number;
  name: string;
  description: string;
  image?: string;
  imageCreditHTML?: string;
}

interface FoodCategory {
  id: string;
  title: string;
  description: string;
  items: FoodItem[];
}

interface BestPlaces {
  title: string;
  description: string;
  highlights: string[];
  image?: string;
}

interface CompleteFoodGuide {
  heading: string;
  image: string;
  description: string;
  overview: string;
  data: FoodCategory[];
  best_places?: {
    [key: string]: BestPlaces;
  };
  quick_tips: string[];
  alcohol_info?: string;
}

interface Destination {
  slug: string;
  name: string;
  complete_food_guide: CompleteFoodGuide;
  whatToEat?: {
    related_articles: Array<{
      slug: string;
      title: string;
      image: string;
      category: string;
    }>;
  };
}

export default function CompleteFoodGuidePage({
  params,
}: {
  params: { country: string };
}) {
  const countryName = params.country;
  const country = destinations.find((d) => d.slug === countryName);

  if (!country) {
    notFound();
  }

  const { complete_food_guide } = country;
  const { heading, image, description, overview, data, quick_tips } =
    complete_food_guide;

  // Transform data for table of contents using useMemo
  const tableOfContentItems = useMemo(() => {
    const items =
      data?.map((category) => ({
        heading: category.title,
        description: category.description,
        icon: category.id as keyof typeof ICONS,
        id: category.id,
      })) || [];

    // Add Quick Tips to table of contents
    return [
      ...items,
      {
        heading: "Quick Tips",
        description: "Essential tips for the best food experience",
        icon: "QUICK_TIPS",
        id: "quick-tips",
      },
    ];
  }, [data]);

  useEffect(() => {
    // Handle smooth scrolling
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
    return () => {
      if (typeof window !== "undefined") {
        document.documentElement.style.scrollBehavior = "auto";
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="aspect-[6/5] lg:aspect-[14/5] w-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={`${heading || country.name} Food Guide`}
            width={1200}
            height={100}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className={styles.imageGradientOverlay}></div>
        <div className="absolute inset-0 flex items-end pb-4 px-4 z-20">
          <div className="text-white flex justify-center items-center w-full">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{heading}</h1>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-8 bg-white">
        <div className="max-w-[90rem] xl:max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <OverViewSection IconName={Utensils} overview={overview} />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-[90rem] xl:max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Table of Contents Section */}
              <Card
                className="mb-8 animate-fade-in"
                style={{
                  background: "linear-gradient(90deg, #ffe5d0 0%, #fff 100%)",
                  border: "1px solid #e0e7ff",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                }}
              >
                <CardContent className="p-6">
                  <TableOfContent
                    heading={`${country.name} Food Guide`}
                    items={tableOfContentItems}
                  />
                </CardContent>
              </Card>

              {/* Food Categories */}
              <div className="space-y-12">
                {data.map((category) => {
                  const IconComponent =
                    ICONS[category.id as keyof typeof ICONS] || Info;
                  return (
                    <div
                      key={category.id}
                      id={category.title.toLowerCase().replace(/\s+/g, "-")}
                      className="scroll-mt-24"
                    >
                      {/* Category Header with Background */}
                      <div className="relative mb-8">
                        <div className="absolute inset-0 bg-teal-50 rounded-lg transform -skew-y-1"></div>
                        <div className="relative flex items-center gap-4 p-6">
                          <div className="p-3 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-gray-900">
                              {category.title}
                            </h2>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: category.description,
                              }}
                              className={`${styles.list_style} text-gray-600 mt-1`}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Food Items Grid */}
                      <div className="grid grid-cols-1 gap-6">
                        {category.items.map((food, index) => (
                          <Card
                            key={food.id}
                            className="overflow-hidden animate-slide-up hover:shadow-lg transition-shadow duration-300 food-card"
                            id={`item-${food.id}`}
                          >
                            <div className="w-full p-8 border-l-8 border-teal-600 ">
                              <h2 className="text-2xl font-semibold text-black">
                                {index + 1}. {food.name}
                              </h2>
                            </div>
                            <div className="relative">
                              <figure className="relative w-full">
                                <Image
                                  src={
                                    food.image ||
                                    "/placeholder.svg?height=300&width=500"
                                  }
                                  alt={food.name}
                                  width={800}
                                  height={400}
                                  className="w-full h-full object-cover"
                                />
                                {food.imageCreditHTML && (
                                  <figcaption className="text-right  text-[8px] opacity-20 pr-4 ">
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: food.imageCreditHTML,
                                      }}
                                    ></span>
                                  </figcaption>
                                )}
                              </figure>

                              <div className="absolute" />
                            </div>
                            <CardContent className="p-6">
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: food.description,
                                }}
                                className={`${styles.list_style} text-gray-600`}
                              />
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  );
                })}

                {/* Best Places to Eat */}
                {/* <div id="best-places" className="relative">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-teal-50 rounded-lg transform -skew-y-1"></div>
                    <div className="relative flex items-center gap-4 p-6">
                      <div className="p-3 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white">
                        <Star className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                          Best Places to Eat
                        </h2>
                        <p className="text-gray-600 mt-1">
                          Discover the finest dining spots across different
                          cities
                        </p>
                      </div>
                    </div>
                  </div>

 <div className="grid grid-cols-1 gap-6">
                    {Object.entries(foodGuide?.best_places || {}).map(
                      ([city, info]) => (
                        <Card
                          key={city}
                          className="overflow-hidden animate-slide-up hover:shadow-lg transition-shadow duration-300"
                        >
                          <div className="relative">
                            <figure className="relative w-full">
                              <Image
                                src={info.image || "/placeholder.svg"}
                                alt={info.title}
                                width={800}
                                height={400}
                                className="w-full h-full object-cover"
                              />
                            </figure>
                          </div>
                          <CardContent className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                              {info.title}
                            </h3>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: info.description,
                              }}
                              className={`${styles.list_style} text-gray-600 mb-4`}
                            />

                            <ul className="list-disc list-inside text-gray-600">
                              {info.highlights.map(
                                (highlight: string, i: number) => (
                                  <li key={i}>{highlight}</li>
                                )
                              )}
                            </ul>
                          </CardContent>
                        </Card>
                      )
                    )}
                  </div>
                </div> */}

                {/* Quick Tips */}
                <div id="quick-tips" className="relative">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-teal-50 rounded-lg transform -skew-y-1"></div>
                    <div className="relative flex items-center gap-4 p-6">
                      <div className="p-3 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white">
                        <Info className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                          Quick Tips
                        </h2>
                        <p className="text-gray-600 mt-1">
                          Essential tips for the best food experience
                        </p>
                      </div>
                    </div>
                  </div>

                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <ul className="grid grid-cols-1 gap-4">
                        {quick_tips.map((tip: string, i: number) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <Info className="w-4 h-4 text-teal-600" />
                            </div>
                            <span className="text-gray-600">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {country?.whatToEat?.related_articles?.map(
                      (article, index) => (
                        <Link
                          key={index}
                          href={`/${countryName}/${article.slug}`}
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
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <ThankYouSection destination={country.name} />
    </div>
  );
}
