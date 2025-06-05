"use client";
import { cn } from "@/lib/utils";
import {
  IconBriefcase2,
  IconBuildingBank,
  IconChefHat,
  IconCrane,
  IconDeviceLaptop,
  IconStethoscope,
  IconTruck,
  IconWorld,
} from "@tabler/icons-react";
import { SectionHeader } from "@/components/general/section-header";

function Industries() {
  const features = [
    {
      title: "Technology, Media and Telecommunications",
      description: "",
      icon: <IconDeviceLaptop size={60} />,
    },
    {
      title: "Healthcare & Lifesciences",
      description: "",
      icon: <IconStethoscope size={60} />,
    },
    {
      title: "Travel & Hospitality",
      description: "",
      icon: <IconBriefcase2 size={60} />,
    },
    {
      title: "Banking & Financial Services",
      description: "",
      icon: <IconBuildingBank size={60} />,
    },
    {
      title: "Retail & Logistics",
      description: "",
      icon: <IconTruck size={60} />,
    },
    {
      title: "Social & Public Sector",
      description: "",
      icon: <IconWorld size={60} />,
    },
    {
      title: "Infrastructure & Construction",
      description: "",
      icon: <IconCrane size={60} />,
    },
    {
      title: "Consumer Goods & Services",
      description: "",
      icon: <IconChefHat size={60} />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto ">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-[#935e38]/50 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-[#935e38]/50 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export function IndustrySectorsSection() {
  return (
    <section id="industry-sectors" className="dark:bg-[#0B0B0F] pb-10 text-white">
      <div>
        <SectionHeader
          className="pb-10"
          title={
            <div>
              <p className="text-[#935e38]">Industries served</p>
              <p className="mt-5 text-4xl text-white/60 tracking-normal">
                Driving impact across every industry we touch.
              </p>
            </div>
          }
        />
      </div>
      <Industries />
    </section>
  )
}
