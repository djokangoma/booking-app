import FeaturedProperties from "./featuredProperties";
import HeroSection from "./hero-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <div className="gap-y-12">
        <HeroSection />
      </div>
      <div className="my-20 flex justify-center items-center gap-28">
        <FeaturedProperties />
      </div>
    </div>
  );
}
