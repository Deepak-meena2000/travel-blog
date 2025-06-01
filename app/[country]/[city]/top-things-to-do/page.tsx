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
        <div className="flex flex-col gap-12 max-w-[90rem] xl:max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <OverViewSection
            IconName={Binoculars}
            overview={cityData?.overview || ""}
          />
          <CityBlogListing countryName={countryName} cityData={cityData} />
        </div>

        <ThankYouSection destination={cityData?.name || ""} />
      </section>

      {/* Thank You Section */}
      {/* <ThankYouSection destination={cityData?.name} /> */}
    </>
  );
}
