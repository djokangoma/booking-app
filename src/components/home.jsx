import Hotels from "../pages/hotels";
import HeroSection from "./hero-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <div className="gap-y-12">
        <HeroSection />
      </div>
      <div className="gap-y-12">
        <Hotels />
      </div>
    </div>
  );
}
