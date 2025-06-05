"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
  IconRobot,
} from "@tabler/icons-react";
import { useRouter, usePathname } from "next/navigation";

export function FloatingDockDemo() {
  const router = useRouter();
  const pathname = usePathname();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      // Already on home, just scroll
      const section = document.getElementById("contact-us");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Go to home with hash, let home handle the scroll
      router.push("/#contact-us");
    }
  };

  const links = [
    {
      title: "Contact Us",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/#contact-us",
      onClick: handleContactClick,
    },
    {
      title: "AI",
      icon: (
        <IconRobot className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/ai",
    },
    {
      title: "Home",
      icon: (
        <img
          src="/logo.png"
          width={20}
          height={20}
          alt="Konnecture Logo"
        />
      ),
      href: "/",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://ca.linkedin.com/company/konnecture",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/konnecture/",
    },
  ];
  return (
    <div className="fixed bottom-[40px] left-0 right-0 flex items-center justify-center w-full z-50 max-sm:justify-end max-sm:right-4 max-sm:left-auto max-sm:w-auto">
      <FloatingDock items={links} />
    </div>
  );
}
export default FloatingDockDemo;