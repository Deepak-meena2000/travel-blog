import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  ArrowRight,
  Info,
  Calendar,
  DollarSign,
  Plane,
  Wifi,
  Shield,
  Utensils,
  Globe,
  AlertTriangle,
  Check,
  LucideProps,
  Currency,
  SpeakerIcon,
  Languages,
  Bike,
  BookOpenCheck,
  FerrisWheel,
  Pyramid,
  Soup,
  TrainFront,
  ListTodo,
} from "lucide-react";
import { destinations } from "@/data/destinations";
import { ThankYouSection } from "@/components/thank-you-section";
import styles from "@/app/index.module.css";
import { THINGS_TO_KNOW_BEFORE_GOING } from "@/data/malaysia/data";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import OverViewSection from "./components/overview";
import { Badge } from "@/components/ui/badge";

type Props = {
  params: { country: string };
};

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
  "13": BookOpenCheck,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const countryName = (await params).country;
  const country = destinations.find((d) => d.slug === countryName);

  if (!country) {
    return {
      title: "Travel Guide Not Found",
    };
  }

  return {
    title: `Things to Know Before Going to ${country.name}`,
    description: `Essential travel tips, information, and advice for your trip to ${country.name}. Visa requirements, best time to visit, currency, safety tips and more.`,
    openGraph: {
      title: `${country.name} Travel Guide - Things to Know Before Going`,
      description: `Essential travel tips, information, and advice for your trip to ${country.name}.`,
    },
  };
}

export async function generateStaticParams() {
  return destinations.map((destination) => ({
    country: destination.slug,
  }));
}

// Mock data for travel guide

export default async function TravelGuidePage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const countryName = (await params).country;
  const country = destinations.find((d) => d.slug === countryName);

  if (!country) {
    notFound();
  }

  // Get travel guide data or use default
  const countryData =
    THINGS_TO_KNOW_BEFORE_GOING[
      countryName as keyof typeof THINGS_TO_KNOW_BEFORE_GOING
    ];
  const guideData = countryData?.data || [];
  const heading = countryData?.heading || "";
  const image = countryData?.image || "/placeholder.svg";
  const overview = countryData?.overview || "";
  const tableOfContentHeading = countryData?.tableOfContentHeading || "";

  const countryRelatedArticles = countryData?.related_articles || [];

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
            <h1 className="text-2xl md:text-5xl font-bold mb-4">{heading}</h1>
            {/* <p className="text-xl text-gray-200 max-w-2xl">
              {description}
            </p> */}
          </div>
        </div>
      </section>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <OverViewSection IconName={ListTodo} overview={overview} />
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Travel Essentials Section */}
              <Card
                className="mb-8 animate-fade-in"
                style={{
                  background: "linear-gradient(90deg, #ffe5d0 0%, #fff 100%)",
                  border: "1px solid #e0e7ff",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {/* <ListTodo className="w-7 h-7 text-blue-600 mr-2" /> */}
                    <h3 className="text-xl font-bold text-gray-900">
                      {tableOfContentHeading}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {guideData?.map((item, index) => {
                      const IconComponent =
                        ICON_MAPPING[
                          item.id as unknown as keyof typeof ICON_MAPPING
                        ] || Info;
                      return (
                        <li key={`sidebar-${item.heading}-${index}`}>
                          <Link
                            href={`#${item.heading
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="flex items-center text-gray-800 hover:text-gray-500 hover:underline transition-colors font-medium"
                          >
                            <span className="w-8 h-8 flex items-center justify-center rounded-full mr-2 !bg-white">
                              <IconComponent className="w-5 h-5 text-[#ff9776]" />
                            </span>
                            <span>{item.heading}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
              </Card>

              <Tabs defaultValue="essentials" className="animate-fade-in">
                <TabsContent
                  value="essentials"
                  className="space-y-8 animate-slide-up"
                >
                  {guideData?.map((item, index) => {
                    const IconComponent =
                      ICON_MAPPING[
                        item.id as unknown as keyof typeof ICON_MAPPING
                      ] || Info;
                    return (
                      <Card
                        key={`${item.heading}-${index}`}
                        id={item.heading.toLowerCase().replace(/\s+/g, "-")}
                        className="scroll-mt-24"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <IconComponent className="w-5 h-5 text-[#ff9776]" />
                            </div>
                            <h2 className="text-xl font-bold">
                              {item.heading}
                            </h2>
                          </div>
                          <ul
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                            className={styles.list_style}
                          />
                        </CardContent>
                      </Card>
                    );
                  })}
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {countryRelatedArticles.map((article: any, index: any) => (
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
