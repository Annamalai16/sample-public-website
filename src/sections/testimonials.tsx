"use client";
import { SectionHeader } from "@/components/general/section-header";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "/testimonials/img-1.jpeg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "/testimonials/img-2.jpeg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src:  "/testimonials/img-3.jpeg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}

export function TestimonialSection() {
  return (
    <section id="testimonials">
      <div className="flex flex-col items-center justify-center w-full py-20 dark:bg-[#0B0B0F]">
        <SectionHeader
          className="pb-0"
          title={
            <div>
              <p className="text-[#935e38]">Voice of Trust</p>
              <p className="mt-5 text-4xl text-white/60 tracking-normal">
                Their words reflect the impact we deliver.
              </p>
            </div>
          }
        />
        <AnimatedTestimonialsDemo />
      </div>
    </section>
  );
}

