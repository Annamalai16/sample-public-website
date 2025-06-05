import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import TypeWriter from "@/components/ui/typewriter";

const words = ["Future", "AI", "Konnecture"];

export function WelcomeSection() {
  return (
    <section id="welcome">
      <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
        <MacbookScroll
          title={
            <div className=" flex justify-center items-center px-4">
              <div className="text-6xl font-[900] ">
                Welcome to {" "}
                <TypeWriter words={words} />
                <br />
                <span className="block text-3xl text-white/60 max-sm:w-[700px] mt-5">We can get your business up and running with the best solutions tailored for you.</span>
              </div>
            </div>
          }
          src={`/welcome.jpg`}
          showGradient={false}
        />
      </div>
    </section>
  );
}
