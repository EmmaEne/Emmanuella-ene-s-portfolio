"use client";

import { Reveal } from "./reveal";

interface SectionHeadingProps {
  label: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-16 md:mb-24 ${align === "center" ? "text-center" : ""} ${className}`}
    >
      <Reveal delay={0}>
        <div
          className={`flex items-center gap-4 mb-6 ${align === "center" ? "justify-center" : ""}`}
        >
          <div className="w-8 h-[1px] bg-gold" />
          <span className="text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-gold">
            {label}
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="heading-editorial text-3xl md:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
