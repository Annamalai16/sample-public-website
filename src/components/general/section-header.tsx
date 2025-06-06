import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function SectionHeader({
  title,
  className = "",
}: {
  title: string | React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Fade out smoothly as you scroll down
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <div ref={ref} className={cn( "pt-20 pb-20", className)}>
      <motion.h2
        style={{
          opacity: textOpacity,
        }}
        transition={{ ease: "easeInOut", duration: 1.2 }}
        className="text-[#935e38] text-center font-raleway font-bold tracking-tighter text-4xl md:text-6xl md:leading-[4rem]"
      >
        {title}
      </motion.h2>
    </div>
  );
}