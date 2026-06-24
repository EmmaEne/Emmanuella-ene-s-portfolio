"use client";

import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";

const experiences = [
  {
    period: "2023 — Present",
    company: "Arvys Technologies",
    role: "Lead Frontend Engineer",
    description:
      "Architecting and building the AI-powered IT Logbook platform from the ground up. Leading frontend architecture decisions, design system creation, and delivering a product focused on speed and intelligent automation.",
  },
  {
    period: "2022 — 2023",
    company: "Freelance",
    role: "Senior Frontend Developer",
    description:
      "Delivered high-quality web applications for diverse clients across education, healthcare, and enterprise sectors. Specialized in React, Next.js, and design-driven development.",
  },
  {
    period: "2021 — 2022",
    company: "Contract Work",
    role: "Frontend Developer",
    description:
      "Built responsive, accessible, and performant web interfaces for startups and growing businesses. Focused on component architecture and pixel-perfect implementations.",
  },
  {
    period: "2019 — 2021",
    company: "Self-Directed",
    role: "Junior Developer & Designer",
    description:
      "Honed skills across the full frontend spectrum — from HTML/CSS fundamentals to React and modern JavaScript. Developed a deep understanding of UI/UX principles through hands-on projects.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative section-spacing bg-beige/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[30%] left-[-12%] w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-burgundy to-gold opacity-[0.10] blur-[100px] pointer-events-none" />

      <div className="editorial-container">
        <SectionHeading label="Career" title="Experience" />

        <div className="relative mt-12">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[1px] bg-divider" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <Reveal key={exp.company} delay={0.1 + i * 0.1}>
                <div className="relative pl-8 md:pl-20 group">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-1.5 w-3 h-3 rounded-full bg-offwhite border-2 border-burgundy -translate-x-[5.5px] group-hover:bg-gold transition-colors duration-300 z-10 shadow-sm" />

                  {/* Date */}
                  <span className="text-[10px] font-mono font-medium tracking-[0.2em] uppercase text-gold block mb-2">
                    {exp.period}
                  </span>

                  {/* Experience Card */}
                  <div className="glowing-border-card p-6 rounded-lg bg-beige/35 hover:border-burgundy/40 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                      <h3 className="font-sans text-lg font-bold text-charcoal tracking-tight">
                        {exp.company}
                      </h3>
                      <span className="text-[11px] font-mono tracking-[0.1em] uppercase text-muted">
                        {exp.role}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="body-editorial text-xs md:text-sm max-w-2xl leading-relaxed text-muted">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
