import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Calendar,
  ArrowRight,
  Utensils,
  Camera,
  Star,
  Users,
} from "lucide-react";
import { destinations } from "@/data/destinations";
import { blogPosts } from "@/data/blog-posts";

const categoryIcons = {
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

export default async function CountryPage({ params }: Props) {
  const countryDetails = (await params).country;

  const country = destinations.find((d) => d.slug === countryDetails);

  if (!country) {
    notFound();
  }

  const countryBlogs = country.blogs;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full aspect-[14/5] ">
        <Image
          src={
            country.country_page_image ||
            "/placeholder.svg?height=400&width=800"
          }
          alt={country.name}
          fill
          className="h-full w-full object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-end pb-8 px-4 z-20">
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {country.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
              {country.description}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8 bg-white border-b">
        <div className="max-8-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <Link href={`/${countryDetails}/top-things-to-do`}>
                <Camera className="w-4 h-4 mr-2" />
                Things to Do
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={`/${countryDetails}/things-to-know-before-going`}>
                <MapPin className="w-4 h-4 mr-2" />
                Travel Guide
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={`/${countryDetails}/what-to-eat`}>
                <Utensils className="w-4 h-4 mr-2" />
                Food Guide
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/custom-itinerary">
                <Users className="w-4 h-4 mr-2" />
                Plan Trip
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="py-16 bg-gray-50">
        <div className="max-8-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest Blogs about {country.name}
              </h2>
              <p className="text-xl text-gray-600">
                Discover the best travel tips and guides for your {country.name}{" "}
                adventure
              </p>
            </div>
          </div>

          {countryBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {countryBlogs.slice(0, 6).map((post, index) => {
                const IconComponent =
                  categoryIcons[post.category as keyof typeof categoryIcons] ||
                  MapPin;
                return (
                  <Link href={`/${countryDetails}/${post.slug}`}>
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
}
