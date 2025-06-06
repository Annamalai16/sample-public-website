"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { SectionHeader } from "@/components/general/section-header";
import { IconFileInvoice, IconHeartHandshake, IconRocket, IconSettingsCheck, IconTargetArrow, IconTrendingUp } from "@tabler/icons-react";

export function ProcessSection() {
  const data = [
    {
      icon: (
        <IconFileInvoice className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
      ),
      title: "Assessment",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Every engagement begins with understanding your current landscape — from internal workflows to customer touchpoints. We identify pain points, strengths, and areas of opportunity through research, audits, and stakeholder input.
          </p>
        </div>
      ),
    },
    {
      icon: (
        <IconTargetArrow className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
      ),
      title: "Strategy",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            With clear insights, we build a strategic roadmap tailored to your goals. This includes aligning business objectives with technology, market trends, and performance metrics to set a strong foundation for action.
          </p>
        </div>
      ),
    },
    {
      icon: (
        <IconHeartHandshake className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
      ),
      title: "Partnership",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            You’re never just a client — you’re a collaborator. We form a close working relationship with your team, fostering open communication, transparency, and shared ownership throughout the journey.
          </p>
        </div>
      ),
    },
    {
      icon: (
        <IconTrendingUp className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
      ),
      title: "Growth",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Our strategies are built to scale. Whether it&apos;s improving customer engagement, increasing efficiency, or expanding into new markets — the focus is on measurable, sustainable growth at every stage.
          </p>
        </div>
      ),
    },
    {
      icon: (
        <IconSettingsCheck className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
      ),
      title: "Optimization",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Nothing is left on autopilot. We continuously assess outcomes, collect feedback, and refine approaches to ensure the highest performance across all touchpoints.
          </p>
        </div>
      ),
    },
    {
      icon: (
        <IconRocket className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
      ),
      title: "Execution",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Ideas are only as good as their implementation. Our team executes with precision, transforming strategy into tangible results using proven tools, agile practices, and quality-driven processes.
          </p>
        </div>
      ),
    },
  ];
  return (
    <section id="process">
      <div className="relative w-full overflow-clip">
        <SectionHeader
          className="pb-0"
          title={
            <div>
              <p className="text-white">Our Process, Your Results</p>
              <p className="text-[#935e38] mt-5">In 30 Seconds</p>
            </div>
          }
        />
        <Timeline data={data} />
      </div>
    </section>
  );
}
