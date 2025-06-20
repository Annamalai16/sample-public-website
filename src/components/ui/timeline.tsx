"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  icon: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Refs for each icon
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Track which icon the gradient tip is closest to
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const unsubscribe = heightTransform.on("change", (currentHeight) => {
      // Get the top position of the timeline container
      const containerTop = containerRef.current?.getBoundingClientRect().top ?? 0;
      // Find the icon whose center is just above or closest to the gradient tip
      let closestIdx = -1;
      let minDist = Infinity;
      iconRefs.current.forEach((icon, idx) => {
        if (icon) {
          const iconRect = icon.getBoundingClientRect();
          const iconCenter = iconRect.top + iconRect.height / 2 - containerTop;
          const dist = Math.abs(currentHeight - iconCenter);
          if (iconCenter <= currentHeight && dist < minDist) {
            minDist = dist;
            closestIdx = idx;
          }
        }
      });
      setActiveIndex(closestIdx);
    });
    return () => unsubscribe();
  }, [heightTransform, data.length]);

  return (
    <div
      className="w-full bg-white dark:bg-black font-sans md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-[900px] mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-m lg:max-w-lg md:w-full">
              <div
                ref={el => { iconRefs.current[index] = el; }}
                className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center"
              >
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2">
                  {item.icon}
                </div>
              </div>
              <h3 className={`hidden md:block text-xl md:pl-20 md:text-5xl font-bold transition-colors duration-300 ${
                activeIndex === index
                  ? "text-white"
                  : "text-neutral-500 dark:text-neutral-500"
              }`}>
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className={`md:hidden block text-2xl mb-4 text-left font-bold transition-colors duration-300 ${
                activeIndex === index
                  ? "text-white"
                  : "text-neutral-500 dark:text-neutral-500"
              }`}>
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
