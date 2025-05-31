import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  MapPin,
  ArrowRight,
  Utensils,
  Camera,
  Star,
  Users,
  Newspaper,
} from "lucide-react";
import { destinations } from "@/data/destinations";
import styles from "@/app/index.module.css";

export const categoryIcons = {
  Activities: Camera,
  "City Guide": MapPin,
  Culture: Star,
  Food: Utensils,
  Beaches: MapPin,
  Travel: MapPin,
};

type Props = {
  params: Promise<{ country: string }>;
};

type BlogPost = {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
};

type TravelGuidePost = {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
};

type FoodItem = {
  id: number;
  name: string;
  description: string;
  image: string;
  whereToTry: {
    name: string;
    location: string;
    priceRange: string;
  }[];
};

type WhatToEat = {
  heading: string;
  image: string;
  description: string;
  overview: string;
  data: FoodItem[];
  related_articles: {
    slug: string;
    title: string;
    image: string;
    category: string;
  }[];
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const countryDetails = (await params).country;
  const country = destinations.find((d) => d.slug === countryDetails);

  if (!country) {
    return {
      title: "Country Not Found",
    };
  }

  return {
    title: country.name,
    description: `Discover ${country.name} with our comprehensive travel guide. ${country.description}`,
    openGraph: {
      title: `${country.name} Travel Guide - Nomadic Memo`,
      description: `Discover ${country.name} with our comprehensive travel guide. ${country.description}`,
      images: [
        {
          url:
            country.country_page_image ||
            "/placeholder.svg?height=250&width=400",
          width: 400,
          height: 250,
          alt: country.name,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return destinations.map((destination) => ({
    country: destination.slug,
  }));
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const countryDetails = (await params).country;
  const country = destinations.find((d) => d.slug === countryDetails);

  if (!country) {
    notFound();
  }

  const countryBlogs = country.blogs as BlogPost[];
  const travelGuideBlogs = (country.travelGuideBlogs?.data ||
    []) as TravelGuidePost[];
  const foodBlogs = country.foodBlogs as BlogPost[];

  const latestBlogs = country.latestBlogs as BlogPost[];

  const otherBlogs = country.other_blogs as BlogPost[];

  return (
    <div className="min-h-screen">
      <section className="relative w-full">
        <div className="aspect-[6/5] lg:aspect-[14/5] w-full">
          <Image
            src={
              country.country_page_image ||
              "/placeholder.svg?height=400&width=800"
            }
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
            <h1 className="text-3xl md:text-5xl font-bold mb-2 lg:mb-4">
              {country.name}
            </h1>
            <p className="text-base text-gray-200 max-w-2xl">
              {country.description}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions as Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-8-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-4 mb-0">
              <TabsTrigger
                value="all"
                className="flex items-center justify-center w-full border border-teal-600 text-teal-600 bg-white data-[state=active]:bg-teal-600 data-[state=active]:text-white data-[state=active]:border-teal-600 data-[state=active]:hover:bg-teal-700 transition-colors"
              >
                <Newspaper className="w-4 h-4 mr-2" />
                All
              </TabsTrigger>
              <TabsTrigger
                value="things-to-do"
                className="flex items-center justify-center w-full border border-teal-600 text-teal-600 bg-white data-[state=active]:bg-teal-600 data-[state=active]:text-white data-[state=active]:border-teal-600 data-[state=active]:hover:bg-teal-700 transition-colors"
              >
                <Camera className="w-4 h-4 mr-2" />
                Things to Do
              </TabsTrigger>
              <TabsTrigger
                value="travel-guide"
                className="flex items-center justify-center w-full border border-teal-600 text-teal-600 bg-white data-[state=active]:bg-teal-600 data-[state=active]:text-white data-[state=active]:border-teal-600 data-[state=active]:hover:bg-teal-700 transition-colors"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Travel Guide
              </TabsTrigger>
              <TabsTrigger
                value="food-guide"
                className="flex items-center justify-center w-full border border-teal-600 text-teal-600 bg-white data-[state=active]:bg-teal-600 data-[state=active]:text-white data-[state=active]:border-teal-600 data-[state=active]:hover:bg-teal-700 transition-colors"
              >
                <Utensils className="w-4 h-4 mr-2" />
                Food Guide
              </TabsTrigger>
              <TabsTrigger
                value="other-blogs"
                className="flex items-center justify-center w-full border border-teal-600 text-teal-600 bg-white data-[state=active]:bg-teal-600 data-[state=active]:text-white data-[state=active]:border-teal-600 data-[state=active]:hover:bg-teal-700 transition-colors"
              >
                <Users className="w-4 h-4 mr-2" />
                Itinerary's and more
              </TabsTrigger>
            </TabsList>

            {/* Content Section with Tabs */}
            <section
              id="content"
              className="my-[7rem] lg:my-0 lg:py-16 bg-gray-50"
            >
              <div className="max-8-xl mx-auto px-2 sm:px-6 lg:px-8">
                <TabsContent value="all">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {latestBlogs?.map((post, index) => {
                      const IconComponent =
                        categoryIcons[
                          post.category as keyof typeof categoryIcons
                        ] || MapPin;
                      return (
                        <Link
                          target="_blank"
                          key={post.slug}
                          href={`${post.slug}`}
                        >
                          <Card
                            className="group hover:shadow-lg transition-all duration-300 animate-scale-in h-full flex flex-col"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <CardContent className="p-0 flex flex-col h-full">
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
                              <div className="flex flex-col flex-1 p-6 min-h-[160px]">
                                <div>
                                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                                    {post.title}
                                  </h3>
                                  <p className="text-gray-600 mb-4 line-clamp-2">
                                    {post.description}
                                  </p>
                                </div>
                                <div className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors mt-auto">
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
                </TabsContent>

                <TabsContent value="things-to-do">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {countryBlogs
                      .filter((post) => post.category === "Activities")
                      .map((post, index) => {
                        const IconComponent = Camera;
                        return (
                          <Link
                            target="_blank"
                            key={post.slug}
                            href={`/${countryDetails}/${post.slug}`}
                          >
                            <Card
                              className="group hover:shadow-lg transition-all duration-300 animate-scale-in h-full flex flex-col"
                              style={{ animationDelay: `${index * 0.1}s` }}
                            >
                              <CardContent className="p-0 flex flex-col h-full">
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
                                <div className="flex flex-col flex-1 p-6 min-h-[160px]">
                                  <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                                      {post.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                      {post.description}
                                    </p>
                                  </div>
                                  <div className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors mt-auto">
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
                </TabsContent>

                <TabsContent value="travel-guide">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {travelGuideBlogs.map((post, index) => {
                      const IconComponent = MapPin;
                      return (
                        <Link target="_blank" key={post.slug} href={post.slug}>
                          <Card
                            className="group hover:shadow-lg transition-all duration-300 animate-scale-in h-full flex flex-col"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <CardContent className="p-0 flex flex-col h-full">
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
                                    Travel Guide
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex flex-col flex-1 p-6 min-h-[160px]">
                                <div>
                                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                                    {post.title}
                                  </h3>
                                  <p className="text-gray-600 mb-4 line-clamp-2">
                                    {post.description}
                                  </p>
                                </div>
                                <div className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors mt-auto">
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
                </TabsContent>

                <TabsContent value="food-guide">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {foodBlogs.map((post, index) => {
                      const IconComponent = Utensils;
                      return (
                        <Link target="_blank" key={post.slug} href={post.slug}>
                          <Card
                            className="group hover:shadow-lg transition-all duration-300 animate-scale-in h-full flex flex-col"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <CardContent className="p-0 flex flex-col h-full">
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
                                    Food Guide
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex flex-col flex-1 p-6 min-h-[160px]">
                                <div>
                                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                                    {post.title}
                                  </h3>
                                  <p className="text-gray-600 mb-4 line-clamp-2">
                                    {post.description}
                                  </p>
                                </div>
                                <div className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors mt-auto">
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
                </TabsContent>

                <TabsContent value="other-blogs">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {otherBlogs.map((post, index) => {
                      const IconComponent =
                        categoryIcons[
                          post.category as keyof typeof categoryIcons
                        ] || MapPin;
                      return (
                        <Link
                          target="_blank"
                          key={post.slug}
                          href={`${post.slug}`}
                        >
                          <Card
                            className="group hover:shadow-lg transition-all duration-300 animate-scale-in h-full flex flex-col"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <CardContent className="p-0 flex flex-col h-full">
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
                              <div className="flex flex-col flex-1 p-6 min-h-[160px]">
                                <div>
                                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                                    {post.title}
                                  </h3>
                                  <p className="text-gray-600 mb-4 line-clamp-2">
                                    {post.description}
                                  </p>
                                </div>
                                <div className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors mt-auto">
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
                </TabsContent>
              </div>
            </section>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
