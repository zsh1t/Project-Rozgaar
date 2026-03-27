import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramSection from "@/components/ProgramSection";
import ImpactSection from "@/components/ImpactSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <ImpactSection />
      <SustainabilitySection />
      <CTASection />
    </div>
  );
};

export default Index;
