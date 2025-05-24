import Image from "next/image";

const HeroSection = ({ country }: { country: any }) => {
  return (
    <section className="relative h-96 bg-slate-800">
      <Image
        src={country.image || "/placeholder.svg"}
        alt={country.name}
        fill
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-slate-800/60" />
      <div className="relative max-8-xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Top Things to Do in {country.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
            Discover the best attractions, activities, and experiences that{" "}
            {country.name} has to offer
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
