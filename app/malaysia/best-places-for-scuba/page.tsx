import { destinations } from "@/data/destinations";
import Image from "next/image";
import OverViewSection from "@/app/[country]/things-to-know-before-going/components/overview";
import { Binoculars, Check, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import styles from "@/app/index.module.css";
import { ThankYouSection } from "@/components/thank-you-section";

const BestPlacesForScubaPage = () => {
  const country = destinations.find((d) => {
    return d.slug === "malaysia";
  });

  const scubaBlog = country?.scuba_blog;
  const { heading, image, description, overview, data } = scubaBlog;

  return (
    <>
      <section className="relative w-full">
        <div className="aspect-[6/5] lg:aspect-[14/5] w-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={heading}
            width={1200}
            height={100}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className={styles.imageGradientOverlay}></div>
        <div className="absolute  inset-0 flex items-end pb-4 px-4 z-20">
          <div className="text-white flex justify-center items-center w-full">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{heading}</h1>
          </div>
        </div>
      </section>
      {overview ? (
        <div className="max-w-[90rem] xl:max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <OverViewSection IconName={Binoculars} overview={overview} />
        </div>
      ) : null}

      <section className="py-16">
        <div className="max-w-[90rem] xl:max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Travel Essentials Section */}
              {data?.map((blog: any, index: number) => {
                return (
                  <Card
                    key={blog.id}
                    className="overflow-hidden animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-full p-8 border-l-8 border-teal-600 ">
                      <h2 className="text-2xl font-semibold text-black">
                        {index + 1}. {blog.title}
                      </h2>
                    </div>
                    <div className="relative">
                      <figure className="relative w-full">
                        <Image
                          src={
                            blog.image ||
                            "/placeholder.svg?height=300&width=500"
                          }
                          alt={blog.name}
                          width={800}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                        {blog.imageCreditHTML && (
                          <figcaption className="text-right text-[8px] opacity-20 pr-4 ">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: blog.imageCreditHTML,
                              }}
                            ></span>
                          </figcaption>
                        )}
                      </figure>
                    </div>

                    <CardContent className="p-8">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: blog.description,
                        }}
                        className="text-gray-600 font-normal mb-6"
                      />

                      {blog?.tips && blog.tips.length > 0 && (
                        <div className="mt-6">
                          <div className="flex items-center mb-3">
                            <div className="bg-teal-100 p-2 rounded-full mr-3">
                              <Star className="h-4 w-4 text-teal-600" />
                            </div>
                            <h4 className="font-semibold text-slate-800">
                              Quick Tips
                            </h4>
                          </div>
                          <div className="space-y-2">
                            {blog?.tips?.map((tip: any, i: any) => {
                              return (
                                <div
                                  key={i}
                                  className="flex items-start space-x-3"
                                >
                                  <Check className="h-3 w-3 text-teal-500 mt-1.5 flex-shrink-0" />
                                  <ul
                                    dangerouslySetInnerHTML={{
                                      __html: tip,
                                    }}
                                    className={`${styles.list_style} text-sm lg:text-base leading-relaxed text-slate-600`}
                                  />
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* <div className="grid md:grid-cols-2 gap-4">
                        {blog.operationalHours && (
                          <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                            <div className="bg-blue-100 p-3 rounded-full">
                              <Clock className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-1">
                                Operational Hours
                              </h4>
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: blog.operationalHours,
                                }}
                                className="text-slate-600"
                              ></p>
                            </div>
                          </div>
                        )}
                        {blog.location && (
                          <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                            <div className="bg-green-100 p-3 rounded-full">
                              <MapPin className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-1">
                                Location
                              </h4>
                              <p dangerouslySetInnerHTML={{
                                __html : blog.location
                              }} className="text-slate-600"/>
                            </div>
                          </div>
                        )}
                        {blog.price && (
                          <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                            <div className="bg-purple-100 p-3 rounded-full">
                              <DollarSign className="h-5 w-5 text-purple-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-1">
                                Price
                              </h4>
                              <ul
                            dangerouslySetInnerHTML={{
                              __html: blog.price,
                            }}
                            className={`${styles.list_style} text-sm lg:text-base leading-relaxed text-slate-600`}
                          />
                            </div>
                          </div>
                        )}
                        {blog.duration && (
                          <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                            <div className="bg-orange-100 p-3 rounded-full">
                              <Hourglass className="h-5 w-5 text-orange-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-1">
                                Duration
                              </h4>
                              <p className="text-slate-600">{blog.duration}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      {blog?.tips && blog.tips.length > 0 && (
                        <div className="mt-6">
                          <div className="flex items-center mb-3">
                            <div className="bg-teal-100 p-2 rounded-full mr-3">
                              <Star className="h-4 w-4 text-teal-600" />
                            </div>
                            <h4 className="font-semibold text-slate-800">
                              Quick Tips
                            </h4>
                          </div>
                          <div className="space-y-2">
                            {blog.tips.map((tip: any, i: any) => {
                              return (
                                <div
                                  key={i}
                                  className="flex items-start space-x-3"
                                >
                                  <Check className="h-3 w-3 text-teal-500 mt-1.5 flex-shrink-0" />
                                  <p dangerouslySetInnerHTML={{
                                    __html : tip
                                  }} className="text-sm text-slate-600"/>

                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )} */}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* {related_articles?.length > 0 ? (
              <div className="lg:col-span-1">
                <Card className="sticky top-20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Related Articles
                    </h3>
                    <div className="space-y-4">
                      {related_articles?.map((article: any, index: any) => (
                        <Link
                          key={index}
                          href={`${article.slug}`}
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
            ) : null} */}
          </div>
        </div>
      </section>
      <ThankYouSection destination={"Malaysia"} />
    </>
  );
};

export default BestPlacesForScubaPage;
