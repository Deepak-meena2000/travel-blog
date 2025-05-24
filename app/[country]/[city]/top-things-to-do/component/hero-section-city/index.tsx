import Image from "next/image";
import styles from "@/app/index.module.css";
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
      <div className={styles.imageGradientOverlay}></div>
      <div className="absolute  inset-0 flex items-end pb-4 px-4 z-20">
        <div className="text-white flex justify-center items-center w-full">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {cityData.name}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionCity;
