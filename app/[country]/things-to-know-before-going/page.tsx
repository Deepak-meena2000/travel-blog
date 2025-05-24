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
} from "lucide-react";
import { destinations } from "@/data/destinations";
import { ThankYouSection } from "@/components/thank-you-section";
import styles from "@/app/index.module.css";
import { THINGS_TO_KNOW_BEFORE_GOING } from "@/data/malaysia/data";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type Props = {
  params: { country: string };
};

export const ICON_MAPPING = {
  "1": Plane,
  "2": MapPin,
  "3": DollarSign,
  "4": Calendar,
  "5": Wifi,
  "6": Languages,
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
  const guideData =
    THINGS_TO_KNOW_BEFORE_GOING[
      countryName as keyof typeof THINGS_TO_KNOW_BEFORE_GOING
    ].data;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}

      <section className="relative w-full">
        <div className="aspect-[14/5] w-full">
          <Image
            src={country.country_page_image || "/placeholder.svg"}
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
              Things to Know Before Going to {country.name}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Essential travel tips, information, and advice for your trip to{" "}
              {country.name}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-8-xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sidebar */}
          <div className="space-y-8 w-[65%]">
            <Card className="sticky top-8 animate-fade-in">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Travel Essentials
                </h3>
                <ul className="space-y-3">
                  {guideData?.map((item, index) => {
                    const IconComponent = ICON_MAPPING[item.id as unknown as keyof typeof ICON_MAPPING] || Info;
                    return (
                      <li key={`sidebar-${item.heading}-${index}`}>
                        <Link
                          href={`#${item.heading.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex items-center text-gray-600 hover:text-teal-600 transition-colors"
                        >
                          <IconComponent className="w-4 h-4 mr-2 text-teal-600" />
                          <span>{item.heading}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
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
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <ThankYouSection destination={country.name} />
    </div>
  );
}
