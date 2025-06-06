import { WelcomeSection } from "@/sections/welcome";
import { HeroSection } from "@/sections/hero";
import { CompareSection } from "@/sections/compare";
import { ProcessSection } from "@/sections/process";
import { TestimonialSection } from "@/sections/testimonials";
import { IndustrySectorsSection } from "@/sections/industry-sectors";
import { ContactUsSection } from "@/sections/contact-us";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <ProcessSection />
      <IndustrySectorsSection />
      <CompareSection />
      <TestimonialSection />
      <ContactUsSection />
      <div className="h-[100px]" />
    </>
  );
}

