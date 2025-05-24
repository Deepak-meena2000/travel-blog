import { notFound } from "next/navigation";
import { destinations } from "@/data/destinations";
import { ThankYouSection } from "@/components/thank-you-section";
import HeroSectionCity from "./component/hero-section-city";
import OverViewCity from "./component/overview";
import CityBlogListing from "./component/blog-listing";


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
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <OverViewCity cityData={cityData} />
          <CityBlogListing countryName={countryName} cityData={cityData} />
        </div>
      </section>

      {/* Thank You Section */}
      {/* <ThankYouSection destination={cityData?.name} /> */}
    </>
  );
}
