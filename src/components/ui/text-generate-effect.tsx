"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 }); // triggers when 50% is visible

  let wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.2),
        }
      );
    } else {
      animate(
        "span",
        {
          opacity: 0,
          filter: filter ? "blur(10px)" : "none",
        },
        { duration: 0 }
      );
    }
  }, [isInView, animate, filter, duration]);

  const renderWords = () => (
    <motion.div ref={scope}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="dark:text-white/60 text-black opacity-0"
          style={{
            filter: filter ? "blur(10px)" : "none",
          }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div ref={ref} className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" dark:text-white/60 text-black sm:text-3xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
