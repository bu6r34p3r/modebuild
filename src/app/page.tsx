import HeroSection from "@/components/HeroSection";
import SplitCards from "@/components/SplitCards";
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="border-t border-border mx-6" />
      <SplitCards />
      <div className="border-t border-border mx-6" />
      <AboutSection />
      <div className="border-t border-border mx-6" />
      <CtaSection />
    </>
  );
}
