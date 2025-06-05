"use client";
import React from "react";
import { Compare } from "@/components/ui/compare";
import { SectionHeader } from "@/components/general/section-header";

export function CompareSection() {
  return (
    <section id="compare">
      <div className="flex-col w-screen items-center justify-center">
        <SectionHeader
          title={
            <div>
              <p className="text-white">Clarity Replaces Confusion</p>
              <p className="text-[#935e38] mt-5">Experience the Growth</p>
            </div>
          }
        />
        <div className="flex items-center justify-center my-10 gap-10 pb-20">
          <Compare
            firstImage="/before.png"
            secondImage="/after.png"
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
            slideMode="hover"
          />
        </div>
      </div>
    </section>
  )
}