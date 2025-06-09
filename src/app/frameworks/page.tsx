"use client";

import { Tabs } from "@/components/ui/tabs";
import { motion } from "motion/react";

export default function Home() {
  const tabs = [
    {
      title: "Impact Navigator",
      value: "konnecture-impact-navigator",
      content: (
        <CardContent
          title="Konnecture Impact Navigator™"
          punchline="Decide what matters. Drop what doesn’t."
          description={`Konnecture filters out the noise by mapping initiatives through its Impact vs. Difficulty Matrix and Must-Have prioritization lens. We identify quick wins, flag resource drains, and spotlight strategic high-impact actions that drive measurable growth. With this clarity, leadership can confidently say “no” to distractions and “yes” to what scales.`}
        />
      ),
    },
    {
      title: "Clarity Grid",
      value: "konnecture-clarity-grid",
      content: (
        <CardContent
          title="Konnecture Clarity Grid™"
          punchline="No overlap. No blind spots. Just pure strategic clarity."
          description={`Our Clarity Grid™ applies MECE rigor to untangle complex business problems with surgical precision. We map every challenge into logical, non-overlapping parts, ensuring your strategy hits every pressure point without wasting effort. It’s clarity that converts confusion into action.`}
        />
      ),
    },
    {
      title: "Strategic Allocation Matrix",
      value: "konnecture-strategic-allocation-matrix",
      content: (
        <CardContent
          title="Konnecture Strategic Allocation Matrix™ (K-SAM)"
          punchline="Put your money where your growth is."
          description={`K-SAM aligns your capital, time, and talent with what truly drives your future. By merging BCG, McKinsey GE, and our Invest-Protect-Harvest-Divest logic, we create a visual roadmap of which business units to scale, fix, or phase out. Growth becomes intentional—not accidental.`}
        />
      ),
    },
    {
      title: "Synergy Framework",
      value: "konnecture-synergy-framework",
      content: (
        <CardContent
          title="Konnecture Synergy Framework™"
          punchline="Internal alignment. External dominance."
          description={`We decode your internal engine using the McKinsey 7S model, aligning structure, culture, and execution. Whether you need to realign teams, update workflows, or harmonize leadership and values, Synergy ensures your people and processes pull in the same direction.`}
        />
      ),
    },
    {
      title: "Market Pulse",
      value: "konnecture-market-pulse",
      content: (
        <CardContent
          title="Konnecture Market Pulse™"
          punchline="See the whole field. Play five moves ahead."
          description={`Konnecture’s Market Pulse™ combines Porter, PESTLE, SWOT, and 3Cs into a 360° radar that senses trends, threats, and untapped potential. It deconstructs external complexity into actionable insights, empowering you to outmaneuver your market in real time.`}
        />
      ),
    },
    {
      title: "Growth Engine",
      value: "konnecture-growth-engine",
      content: (
        <CardContent
          title="Konnecture Growth Engine™"
          punchline="From first sale to market domination - Engineered by Konnecture."
          description={`Built on Ansoff, Blue Ocean, and Lean Startup principles, our Growth Engine™ helps you penetrate new markets, launch differentiated products, and de-risk innovation. We balance short-term wins with long-term disruption using McKinsey’s Three Horizons approach.`}
        />
      ),
    },
    {
      title: "Advantage Blueprint",
      value: "konnecture-advantage-blueprint",
      content: (
        <CardContent
          title="Konnecture Advantage Blueprint™"
          punchline="Build something they can’t copy."
          description={`Using the VRIO framework and UVP design, we distill what makes you irreplaceable. This blueprint uncovers value others can’t replicate and turns it into long-term competitive dominance. No gimmicks—just durable advantage, embedded in your DNA.`}
        />
      ),
    },
    {
      title: "GoalScale",
      value: "konnecture-goalscale",
      content: (
        <CardContent
          title="Konnecture GoalScale™"
          punchline="One team. One vision. One scoreboard."
          description={`GoalScale™ brings radical clarity to performance using OKRs and Balanced Scorecards. We align every metric to your strategy and bring it to life through dashboards, customer funnels, and real-time KPIs. From boardroom to frontlines, everyone knows the goal—and how to win.`}
        />
      ),
    },
    {
      title: "Voice of the Customer",
      value: "konnecture-voice-of-the-customer",
      content: (
        <CardContent
          title="Konnecture Voice of the Customer™ (K-VoC)"
          punchline="Hear what they don’t say. Deliver what they crave."
          description={`Using Jobs-To-Be-Done and the Kano Model, K-VoC reveals what customers really want—what they expect, what delights them, and what drives them to stay. We convert insights into action, optimizing offers, journeys, and retention strategies.`}
        />
      ),
    },
    {
      title: "Growth & Investment Model",
      value: "konnecture-growth-investment-model",
      content: (
        <CardContent
          title="Konnecture Growth & Investment Model™ (K-GIM)"
          punchline="From scale to valuation - Konnecture maximizes every step."
          description={`K-GIM is our flagship capital-to-scale framework, aligning business operations, tech adoption, and investor strategy. From risk mitigation to exit readiness, we craft investable, scalable, and fundable growth paths that command market confidence.`}
        />
      ),
    },
  ];

  return (
    <div className="flex w-full flex-col items-center justify-center mt-20 sm:mt-40 mb-10">
      <motion.h2
        className={"text-[#935e38] text-center font-bold tracking-tighter text-4xl md:text-6xl md:leading-[4rem] mb-5"}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.7 }}
      >
        Frameworks
      </motion.h2>
      <div className="flex flex-col items-center mx-6">
      <Tabs tabs={tabs} contentClassName="w-full max-w-3xl px-4 sm:px-6 md:px-8 p-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl mt-20" />
      </div>
    </div>
  );
}

const CardContent = ({ title, punchline, description }: { title: string, punchline: string, description: string }) => {
  return (
    <div>
      <h3 className="mb-1 text-2xl font-semibold font-raleway text-white">{title}</h3>
      <p className="mb-5 text-white/60">{punchline}</p>
      <p className="text-justify whitespace-pre-line text-white/80 font-raleway">{description}</p>
    </div>
  );
}
