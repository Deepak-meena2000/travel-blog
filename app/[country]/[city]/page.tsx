import { ArrowRightCircle, Flag } from "lucide-react";
import Image from "next/image";
import styles from "@/app/index.module.css";
import { destinations } from "@/data/destinations";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ThankYouSection } from "@/components/thank-you-section";

// New itinerary structure: each day has a heading and an array of sections

const ASPECT_RATIO = "aspect-[4/3]"; // 4:3 aspect ratio for all images

function chunkArray(array: any[], size: number): any[][] {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

const ALLOWED_CITY_SLUGS = ["9-days-itinerary", "16-days-itinerary"];

const ItineraryPage = async ({
  params,
}: {
  params: Promise<{ country: string; city: string }>;
}) => {
  const { country: countryName, city } = await params;

  if (!ALLOWED_CITY_SLUGS.includes(city)) {
    notFound();
  }

  const countryData = destinations.find((d) => d.slug === countryName);
  if (!countryData) {
    notFound();
  }

  let itinerary: any[] = [];
  let relatedArticles: any[] = [];
  let bannerImage = "";
  let title = "";
  let overviewText = "";

  if (city === "9-days-itinerary") {
    const nine = countryData.nine_days_itinerary;
    itinerary = nine?.data || [];
    bannerImage = nine?.image || "/placeholder.svg?height=400&width=800";
    title = nine?.heading || "9-Day Itinerary";
    overviewText = nine?.overview || nine?.description || "";
    if (
      nine &&
      typeof nine === "object" &&
      "related_articles" in nine &&
      Array.isArray((nine as any).related_articles)
    ) {
      relatedArticles = (nine as any).related_articles;
    } else {
      relatedArticles = [];
    }
  } else if (
    city === "16-days-itinerary" &&
    (countryData as any).sixteen_days_itinerary
  ) {
    const fifteen = (countryData as any).sixteen_days_itinerary;
    itinerary = fifteen?.data || [];
    bannerImage = fifteen?.image || "/placeholder.svg?height=400&width=800";
    title = fifteen?.heading || "16-Day Itinerary";
    overviewText = fifteen?.overview || fifteen?.description || "";
    if (
      fifteen &&
      typeof fifteen === "object" &&
      "related_articles" in fifteen &&
      Array.isArray(fifteen.related_articles)
    ) {
      relatedArticles = fifteen.related_articles;
    } else {
      relatedArticles = [];
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <section className="relative w-full">
        <div className="aspect-[6/5] lg:aspect-[14/5] w-full">
          <Image
            src={bannerImage || "/placeholder.svg?height=400&width=800"}
            alt={title}
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
              {title}
            </h1>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl my-12 mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-700 text-base sm:text-lg">
          {overviewText}
        </p>
      </section>

      {/* Main Content + Sidebar */}
      <section className="max-w-[90rem] xl:max-w-[95rem] mx-auto px-2 sm:px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="space-y-12 sm:space-y-20">
            {itinerary.map((day: any, idx: number) => (
              <div key={day.heading} className="">
                {/* Day Heading */}
                <h2 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-6 border-b text-center border-gray-200 pb-1 sm:pb-2">
                  {day.heading}
                </h2>
                {/* Sections */}
                {day.sections.map((section: any, sidx: number) => {
                  if (section.type === "content" && section.text) {
                    return (
                      <div
                        key={sidx}
                        className="prose prose-base sm:prose-xl text-lg max-w-none mb-4 sm:mb-6 font-normal leading-loose"
                        dangerouslySetInnerHTML={{ __html: section.text }}
                      />
                    );
                  }
                  if (
                    section.type === "images" &&
                    Array.isArray(section.images) &&
                    section.images.length > 0
                  ) {
                    return (
                      <div key={sidx} className="mb-6 sm:mb-8">
                        <div className="grid gap-3 sm:gap-4">
                          <div className={`grid ${section.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'} gap-3 sm:gap-4`}>
                            {section.images.map((img: any, i: number) => (
                              <div key={i}>
                                <div className={`w-full ${ASPECT_RATIO} relative rounded-lg overflow-hidden`}>
                                  <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover w-full h-full"
                                    sizes="(max-width: 768px) 100vw, 400px"
                                  />
                                </div>
                                {img.imageCreditHTML && (
                                  <div className="text-right mt-1">
                                    <span
                                      className="text-xs text-gray-500"
                                      dangerouslySetInnerHTML={{
                                        __html: img.imageCreditHTML,
                                      }}
                                    ></span>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return null;
                })}
                {/* Separator between days */}
                {idx < itinerary.length - 1 ? (
                  <div className="flex items-center justify-center my-8 sm:my-16">
                    <div className="flex items-center gap-2 text-teal-700 font-semibold text-base sm:text-lg">
                      <span className="h-px w-8 sm:w-12 bg-teal-200 inline-block align-middle"></span>
                      <ArrowRightCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span>Next Day</span>
                      <span className="h-px w-8 sm:w-12 bg-teal-200 inline-block align-middle"></span>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center my-8 sm:my-16">
                    <div className="flex items-center gap-2 text-green-700 font-semibold text-base sm:text-lg">
                      <span className="h-px w-6 sm:w-10 bg-green-200 inline-block align-middle"></span>
                      <Flag className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span>Your journey ends here. Safe travels!</span>
                      <span className="h-px w-6 sm:w-10 bg-green-200 inline-block align-middle"></span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Related Articles Sidebar */}
        {relatedArticles.length > 0 && (
          <aside className="hidden lg:block sticky top-24 self-start">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Related Articles
                </h3>
                <div className="space-y-4">
                  {relatedArticles.map((article: any, index: number) => (
                    <Link
                      key={index}
                      href={article.slug}
                      className="flex gap-3 group cursor-pointer"
                    >
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        width={80}
                        height={60}
                        className="w-32 h-15 object-cover rounded-lg flex-shrink-0"
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
          </aside>
        )}
      </section>
      <ThankYouSection destination={title || ""} />
    </div>
  );
};

export default ItineraryPage;
