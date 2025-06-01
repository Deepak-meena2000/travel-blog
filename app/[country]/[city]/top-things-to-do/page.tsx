import { notFound } from "next/navigation";
import { destinations } from "@/data/destinations";
import { ThankYouSection } from "@/components/thank-you-section";
import HeroSectionCity from "./component/hero-section-city";
import CityBlogListing from "./component/blog-listing";
import OverViewSection from "../../things-to-know-before-going/components/overview";
import { Activity, Binoculars, Car } from "lucide-react";

export default async function CityThingsToDoPage({
  params,
}: {
  params: Promise<{ country: string; city: string }>;
}) {
  const { country: countryName, city } = await params;

  const country = destinations.find((d) => {
    return d.slug === countryName;
  });

  const cityData = country?.cities.find((c) => {
    return c.slug === city;
  });

  if (!country) {
    notFound();
  }

  return (
    <>
      <HeroSectionCity cityData={cityData} />
      <section className="py-8">
        <div className="flex flex-col gap-12 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <OverViewSection  IconName={Binoculars} overview={cityData?.overview || ""} />
          <CityBlogListing countryName={countryName} cityData={cityData} />
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-blue-50 mt-12 py-6  px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="lucide lucide-circle-check-big w-10 h-10 text-teal-600"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Thank You for Reading!
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We hope you found this guide helpful in planning your amazing trip
              to {cityData?.placeName}, {countryName}. Safe travels and create
              unforgettable memories!
            </p>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-lg transition-all duration-300 animate-scale-in"
                data-v0-t="card"
              >
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="lucide lucide-heart w-6 h-6 text-pink-600"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Loved this guide?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Share it with fellow travelers
                  </p>
                </div>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: "0.1s" }}
                data-v0-t="card"
              >
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="lucide lucide-share2 w-6 h-6 text-blue-600"
                    >
                      <circle cx="18" cy="5" r="3"></circle>
                      <circle cx="6" cy="12" r="3"></circle>
                      <circle cx="18" cy="19" r="3"></circle>
                      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Stay connected
                  </h3>
                  <p className="text-sm text-gray-600">
                    Follow us for more travel tips
                  </p>
                </div>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: "0.2s" }}
                data-v0-t="card"
              >
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="lucide lucide-book-open w-6 h-6 text-green-600"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    More guides
                  </h3>
                  <p className="text-sm text-gray-600">
                    Explore other destinations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      {/* <ThankYouSection destination={cityData?.name} /> */}
    </>
  );
}
