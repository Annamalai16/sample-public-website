"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/text-area";
import { Select } from "@/components/ui/select";

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <section id="contact-us" className="h-screen flex items-center justify-center">
      <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black shadow-xl border-gray-800 border-1">
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
          Contact Us
        </h2>
        <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
          Tell us a bit about your business and what you’d like help with. We’ll reach out as soon as we can.
        </p>

        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" placeholder="Tyler" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" placeholder="Durden" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="businessName">Business Name</Label>
            <Input id="businessName" placeholder="Konnecture Inc." type="text" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="indistry">Industry / Vertical</Label>
            <Input id="indistry" placeholder="Saas • e-Commerce • FinTech" type="indistry" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="needHelp">How can we help you?</Label>
            <Select name="needHelp" id="needHelp" required defaultValue="">
              <option value="" disabled>
                — Select an option —
              </option>
              <option>Increasing revenues and earnings</option>
              <option>Finding right partners or vendors</option>
              <option>Eliminating unnecessary expenses</option>
              <option>Automating with KonquarAI</option>
              <option>Raising capital through venture capital</option>
              <option>Investing in successful businesses</option>
              <option>Offering partnership with your clients</option>
              <option>Initial meeting with your team</option>
              <option>Others</option>
            </Select>
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="story">Tell us about your story</Label>
            <Textarea name="story" id="story" className="resize-none" rows={5} />
          </LabelInputContainer>
          <button
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            type="submit"
          >
            Submit &rarr;
          </button>
        </form>
      </div>
    </section>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
