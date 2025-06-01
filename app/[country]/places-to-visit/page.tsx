import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/data/destinations";
import { MALAYSIA_PLACES_TO_VISIT } from "@/data/malaysia";
import { Card, CardContent } from "@/components/ui/card";
import { ThankYouSection } from "@/components/thank-you-section";
import styles from "@/app/index.module.css";
import OverViewSection from "../things-to-know-before-going/components/overview";
import { MapPin } from "lucide-react";

export default async function PlacesToVisitPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const countryName = (await params).country;
  const country = destinations.find((d) => d.slug === countryName);
  const overview = country?.places_to_visit?.overview || "";
  const description = country?.places_to_visit?.description || "";
  const image = country?.places_to_visit?.image || "/placeholder.svg";
  const places = country?.places_to_visit?.data || [];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="aspect-[6/5] lg:aspect-[14/5] w-full">
          <Image
            src={image}
            alt={country?.places_to_visit?.heading || "Best Places to Visit"}
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
              {country?.places_to_visit?.heading}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl text-center">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-8 bg-white">
        <div className="max-w-[90rem] xl:max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <OverViewSection IconName={MapPin} overview={overview} />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-[90rem] xl:max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Table of Contents */}
              {/* <Card className="mb-8 animate-fade-in bg-white border-none shadow-none">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">
                    Table of Contents
                  </h3>
                  <div className="space-y-3">
                    {places.map((place, idx) => (
                      <a
                        key={place.id}
                        href={`#place-${place.id}`}
                        className="block text-base text-gray-800 font-medium px-2 py-1 rounded transition-colors duration-150 hover:underline hover:text-teal-700 focus:underline focus:text-teal-800 outline-none"
                      >
                        <span className="mr-2 text-gray-500">{idx + 1}.</span>
                        {place.name}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card> */}

              {/* Places Listing */}
              <div className="space-y-12">
                {places.map((place, idx) => (
                  <Card
                    key={place.id}
                    className="overflow-hidden animate-slide-up"
                    id={`place-${place.id}`}
                  >
                    <div className="w-full p-8 ">
                      <h2 className="text-xl lg:text-2xl font-semibold text-black">
                        {idx + 1}. {place.name}
                      </h2>
                    </div>
                    <div className="relative">
                      <Image
                        src={place.image || "/placeholder.svg"}
                        alt={place.name}
                        width={800}
                        height={400}
                        className="w-full h-80 object-cover"
                      />
                    </div>
                    <CardContent className="p-4 lg:p-8">
                      <p className="text-sm lg:text-base leading-relaxed text-gray-600 mb-6">
                        {place.description}
                      </p>
                      {place.otherInfo && (
                        <div className="bg-gray-50 p-4 lg:p-6 rounded-lg mb-6">
                          <div className="grid grid-cols-1 gap-4">
                            {place.otherInfo.must_do && (
                              <div>
                                <h3 className="text-sm lg:text-base font-semibold text-gray-900 mb-1">
                                  Must do Things:
                                </h3>
                                <p
                                  dangerouslySetInnerHTML={{
                                    __html: place.otherInfo.must_do,
                                  }}
                                  className="text-sm lg:text-base text-gray-600"
                                />
                              </div>
                            )}
                            {place.otherInfo.time_to_visit && (
                              <div>
                                <h3 className="text-sm lg:text-base font-semibold text-gray-900 mb-1">
                                  Time to Visit:
                                </h3>
                                <p className="text-sm lg:text-base text-gray-600">
                                  {place.otherInfo.time_to_visit}
                                </p>
                              </div>
                            )}
                            {place.otherInfo.how_to_reach && (
                              <div>
                                <h3 className="text-sm lg:text-base font-semibold text-gray-900 mb-1">
                                  How to Reach:
                                </h3>
                                <p className="text-sm lg:text-base text-gray-600">
                                  {place.otherInfo.how_to_reach}
                                </p>
                              </div>
                            )}
                            {place.otherInfo.guide_link &&
                              place.otherInfo.guide_text && (
                                <div>
                                  <h3 className="text-sm lg:text-base font-semibold text-gray-900 mb-1">
                                    Detailed Guide:
                                  </h3>
                                  <Link
                                    href={place.otherInfo.guide_link}
                                    className="text-teal-600 underline font-medium"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {place.otherInfo.guide_text}
                                  </Link>
                                </div>
                              )}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar (optional, can add related articles or tips) */}
            <div className="lg:col-span-1">
              {/* You can add a related articles or tips section here if needed */}
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <ThankYouSection destination="Malaysia" />
    </div>
  );
}
