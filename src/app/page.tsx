import { WelcomeSection } from "@/sections/welcome";
import { HeroSection } from "@/sections/hero";
import { CompareSection } from "@/sections/compare";
import { ProcessSection } from "@/sections/process";
import { TestimonialSection } from "@/sections/testimonials";
import { IndustrySectorsSection } from "@/sections/industry-sectors";
import { SignupFormDemo } from "@/sections/contact-us";

export default function ThreeDCardDemo() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <ProcessSection />
      <IndustrySectorsSection />
      <CompareSection />
      <TestimonialSection />
      <SignupFormDemo />
      <div className="h-[100px]" />
    </>
  );
}

