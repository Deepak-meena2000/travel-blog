import Image from "next/image";
const HeroSectionCity = ({ cityData }: { cityData: any }) => {
  return (
    <section className="relative w-full">
      <div className="h-[40vh] w-full">
        <Image
          src={cityData.image || "/placeholder.svg"}
          alt={cityData.name}
          width={1200}
          height={100}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 flex items-end pb-8 px-4 z-20">
        <h1 className="text-2xl md:text-4xl font-bold text-white px-4 py-2 rounded animate-fade-in">
          Top Things to Do in {cityData.name}
        </h1>
      </div>
    </section>
  );
};

export default HeroSectionCity;
