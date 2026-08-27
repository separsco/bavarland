import { AboutPreview } from "@/components/home/AboutPreview";
import { ConsultantsBanner } from "@/components/home/ConsultantsBanner";
import { ContactSection } from "@/components/home/ContactSection";
import { Hero } from "@/components/home/Hero";
import { PricingSection } from "@/components/home/PricingSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { StepsSection } from "@/components/home/StepsSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ConsultantsBanner />
      <AboutPreview />
      <StepsSection />
      <StatsSection />
      <PricingSection />
      <ContactSection />
    </>
  );
}
