"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export function HeroSection() {
  return (
    <section id="home">
      <div className="flex-col w-screen h-screen">
        <div className="w-full flex-col">
          <CardContainer className="inter-var">
            <CardBody className="bg-black p-6 rounded-xl border-gray-800 border-1 lg:w-[35vw] max-w-[90%] h-auto">
              <CardItem translateZ="50" className="w-full">
                <div
                  style={{
                    "--border-width": "1px",
                    "--duration": "6s",
                    backgroundImage:
                      "radial-gradient(transparent, transparent, #A07CFE,#FE8FB5,#FFBE7B, transparent, transparent)",
                    backgroundSize: "300% 300%",
                    animation: "shine var(--duration) linear infinite",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: "var(--border-width)",
                  } as React.CSSProperties}
                  className="pointer-events-none absolute inset-0 size-full will-change-[background-position] animate-shine rounded-xl"
                />
                <img
                  src="/logo.png"
                  height="2000"
                  width="2000"
                  className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
        <div className="-mt-10 sm:-mt-30 w-full flex-col">
          <div className="text-center">
            <h1 className="text-[#935e38] font-bold font-raleway text-6xl sm:text-6xl md:text-9xl">Konnecture</h1>
          </div>
          <div>
            <TextGenerateEffect duration={2} filter={false} className="text-center" words={"Scaling your Business is our Business"} />
          </div>
        </div>
      </div>
    </section>
  );
}