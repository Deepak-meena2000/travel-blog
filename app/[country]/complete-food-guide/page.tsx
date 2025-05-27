"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  ArrowRight,
  Utensils,
  DollarSign,
  Star,
  Info,
  Clock,
  Coffee,
  IceCream,
  Salad,
  Soup,
  Sandwich,
} from "lucide-react";
import { destinations } from "@/data/destinations";
import { ThankYouSection } from "@/components/thank-you-section";
import styles from "@/app/index.module.css";

interface FoodItem {
  id: number;
  name: string;
  description: string;
  image: string;
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
  best_places: {
    [key: string]: BestPlaces;
  };
  quick_tips: string[];
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

const globalStyles = `
  @keyframes bounce-subtle {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .animate-bounce-subtle {
    animation: bounce-subtle 2s ease-in-out infinite;
  }
`;

export default function CompleteFoodGuidePage({
  params,
}: {
  params: { country: string };
}) {
  const countryName = params.country;
  const country = destinations.find((d) => d.slug === countryName);

  if (!country) {
    // Optionally, render a fallback UI or redirect
    return <div>Country not found.</div>;
  }

  const foodGuide = country?.complete_food_guide;
  const relatedArticles = country?.whatToEat?.related_articles || [];

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case "breakfast":
        return <Coffee className="w-5 h-5" />;
      case "lunch-dinner":
        return <Utensils className="w-5 h-5" />;
      case "street-food":
        return <Sandwich className="w-5 h-5" />;
      case "vegetarian":
        return <Salad className="w-5 h-5" />;
      case "drinks":
        return <Soup className="w-5 h-5" />;
      case "desserts":
        return <IceCream className="w-5 h-5" />;
      case "sides":
        return <Star className="w-5 h-5" />;
      default:
        return <Utensils className="w-5 h-5" />;
    }
  };

  // Smooth scroll for anchor links
  useEffect(() => {
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
            src={foodGuide?.image || "/placeholder.svg"}
            alt={foodGuide?.heading || "Food Guide"}
            width={1200}
            height={100}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className={styles.imageGradientOverlay}></div>
        <div className="absolute inset-0 flex items-end pb-4 px-4 z-20">
          <div className="text-white flex flex-col justify-center items-center w-full">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {foodGuide?.heading}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl text-center">
              {foodGuide?.description}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-lg border bg-teal-600/75 shadow-md">
            <div className="flex items-center">
              <div className="flex flex-col gap-4">
                <span className="text-lg text-white font-normal">
                  {foodGuide?.overview}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Table of Contents */}
              <Card className="w-full max-w-2xl mb-8 bg-white border border-gray-200 shadow-sm rounded-xl">
                <CardContent className="p-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-6 tracking-wider uppercase">
                    Table of Contents
                  </h3>
                  <div className="space-y-3">
                    {foodGuide?.data.map((category: FoodCategory, idx: number) => (
                      <a
                        key={category.id}
                        href={`#${category.id}`}
                        className="block text-base text-gray-800 font-medium px-2 py-1 rounded transition-colors duration-150 hover:underline hover:text-teal-700 focus:underline focus:text-teal-800 outline-none"
                      >
                        <span className="mr-2 text-gray-500">{idx + 1}.</span>{category.title}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Food Categories */}
              <div className="space-y-16">
                {foodGuide?.data.map((category: FoodCategory) => (
                  <div key={category.id} id={category.id} className="relative">
                    {/* Category Header with Background */}
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-teal-50 rounded-lg transform -skew-y-1"></div>
                      <div className="relative flex items-center gap-4 p-6">
                        <div className="p-3 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white">
                          {getCategoryIcon(category.id)}
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900">
                            {category.title}
                          </h2>
                          <p className="text-gray-600 mt-1">
                            {category.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Food Items Grid */}
                    <div className="grid grid-cols-1 gap-6">
                      {category.items.map((food: FoodItem) => (
                        <Card
                          key={food.id}
                          className="overflow-hidden animate-slide-up hover:shadow-lg transition-shadow duration-300 food-card"
                          id={`${category.id}-item-${food.id}`}
                        >
                          <div className="relative">
                            <Image
                              src={food.image || "/placeholder.svg"}
                              alt={food.name}
                              width={800}
                              height={400}
                              className="w-full h-64 object-cover"
                            />
                          </div>
                          <CardContent className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                              {food.name}
                            </h3>
                            <p className="text-gray-600">
                              {food.description}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    {/* Category Separator */}
                    {/* ... existing code ... */}
                  </div>
                ))}
              </div>

              {/* Best Places to Eat */}
              <div className="mt-24">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-slate-50 rounded-lg transform -skew-y-1"></div>
                  <div className="relative p-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Best Places to Eat
                    </h2>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  {Object.entries(foodGuide?.best_places || {}).map(
                    ([city, info]) => (
                      <Card
                        key={city}
                        className="hover:shadow-lg transition-shadow duration-300"
                      >
                        <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
                          <Image
                            src={info.image || "/placeholder.svg"}
                            alt={info.title}
                            fill
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <CardContent className="p-6">
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {info.title}
                          </h4>
                          <p className="text-sm text-gray-600 mb-4">
                            {info.description}
                          </p>
                          <ul className="list-disc list-inside text-sm text-gray-600">
                            {info.highlights.map((highlight: string, i: number) => (
                              <li key={i}>{highlight}</li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    )
                  )}
                </div>
              </div>

              {/* Quick Tips */}
              <div className="mt-16">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-slate-50 rounded-lg transform -skew-y-1"></div>
                  <div className="relative p-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Quick Tips
                    </h2>
                  </div>
                </div>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <ul className="grid grid-cols-1 gap-4">
                      {foodGuide?.quick_tips.map((tip: string, i: number) => (
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

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {relatedArticles?.map((article, index) => (
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
                    ))}
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
