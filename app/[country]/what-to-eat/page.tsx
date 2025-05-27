import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
} from "lucide-react";
import { destinations } from "@/data/destinations";
import { ThankYouSection } from "@/components/thank-you-section";
import styles from "@/app/index.module.css";

export default async function FoodGuidePage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const countryName = (await params).country;
  const country = destinations.find((d) => d.slug === countryName);

  if (!country) {
    notFound();
  }

  const foods = country?.whatToEat?.data || [];
  const overview = country?.whatToEat?.overview || "";
  const image = country?.whatToEat?.image || "/placeholder.svg";
  const relatedArticles = country?.whatToEat?.related_articles || [];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              What to Eat in {country.name}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Discover the best local dishes, street food, and culinary
              experiences in {country.name}
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
                  {overview}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-8-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* In This Guide Section */}
              {/* <Card className="mb-8 animate-fade-in bg-slate-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    In This Guide
                  </h3>
                  <ul className="space-y-3">
                    {foods.map((food, index) => (
                      <li key={food.id}>
                        <Link
                          href={`#food-${food.id}`}
                          className="flex items-center text-white hover:text-teal-600 transition-colors"
                        >
                          <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mr-2 text-teal-600 text-sm">
                            {index + 1}
                          </div>
                          <span>{food.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card> */}

              <div className="space-y-12">
                {foods.map((food, index) => (
                  <Card
                    key={food.id}
                    className="overflow-hidden animate-slide-up"
                    id={`food-${food.id}`}
                  >
                    <div className="relative">
                      <Image
                        src={
                          food.image || "/placeholder.svg?height=300&width=500"
                        }
                        alt={food.name}
                        width={800}
                        height={400}
                        className="w-full h-64 object-cover"
                      />
                      {/* <div className="absolute top-4 left-4">
                        <Badge className="bg-teal-600 text-white flex items-center gap-1">
                          <Utensils className="w-3 h-3" />
                          Local Dish
                        </Badge>
                      </div> */}
                    </div>

                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">
                          {index + 1}. {food.name}
                        </h2>
                      </div>
                      <p className="text-gray-600 mb-6">{food.description}</p>

                      <div className="bg-gray-50 p-6 rounded-lg mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                                <MapPin className="w-4 h-4 text-teal-600" />
                              </div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <h3 className="font-semibold text-gray-900">
                                  Where to Try It:
                                </h3>
                                <p className="text-gray-600">
                                  {food.otherInfo.where_to_eat}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                                <DollarSign className="w-4 h-4 text-teal-600" />
                              </div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <h3 className="font-semibold text-gray-900">
                                  Price Range:
                                </h3>
                                <p className="text-gray-600">
                                  {food.otherInfo.range}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                                <Utensils className="w-4 h-4 text-teal-600" />
                              </div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <h3 className="font-semibold text-gray-900">
                                  Vegetarian Available:
                                </h3>
                              </div>
                              <p className="text-gray-600">
                                {food.otherInfo.vegetarian_available
                                  ? "Yes"
                                  : "No"}
                              </p>
                            </div>
                          </div>
                        </div>

                        {food.otherInfo.tips &&
                          food.otherInfo.tips.length > 0 && (
                            <div className="mt-4">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                                  <Info className="w-4 h-4 text-teal-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900">
                                  Tips:
                                </h3>
                              </div>
                              <ul className="list-disc list-inside space-y-1">
                                {food.otherInfo.tips.map((tip, i) => (
                                  <li key={i} className="text-gray-600">
                                    {tip}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
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
                    {relatedArticles?.map((article: any, index: any) => (
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
