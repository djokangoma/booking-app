import HeroSection from "./hero-section";
import Featured from "./featured"

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <div className="gap-y-12">
        <HeroSection />
      </div>
      <div className="my-20 flex justify-center items-center gap-28">
        <Featured/>
      </div>
    </div>
  );
}
