"use client";

import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";

const skillCategories = [
  {
    number: "01",
    name: "Frontend Architecture",
    skills: [
      "React & Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML5 & CSS3",
      "JavaScript ES6+",
    ],
  },
  {
    number: "02",
    name: "Backend & Databases",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
    ],
  },
  {
    number: "03",
    name: "Design & UX/UI",
    skills: [
      "Figma",
      "UI/UX Design",
      "Design Systems",
      "Responsive Layouts",
      "Interactive Prototyping",
      "Typography",
    ],
  },
  {
    number: "04",
    name: "AI & Productivity",
    skills: [
      "GitHub Copilot",
      "ChatGPT",
      "Prompt Engineering",
      "AI API Integration",
      "Workflow Automation",
      "LLM Architectures",
    ],
  },
  {
    number: "05",
    name: "DevOps & Cloud",
    skills: [
      "Vercel",
      "Docker Services",
      "CI/CD Pipelines",
      "Git & GitHub Flow",
      "AWS Cloud Basics",
      "Performance Benchmarking",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative section-spacing overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[40%] right-[-10%] w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-burgundy to-gold opacity-[0.12] blur-[100px] pointer-events-none" />

      <div className="editorial-container">
        <SectionHeading label="Expertise" title="Skills & Tools" />

        <div className="space-y-0 mt-8">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.name} delay={0.05 + i * 0.08}>
              <div className="border-t border-divider py-8 md:py-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                  {/* Number & Name */}
                  <div className="md:col-span-4 flex items-center gap-3">
                    <span className="font-mono text-xs text-gold font-bold">
                      {cat.number}
                    </span>
                    <h3 className="font-sans text-lg font-bold text-charcoal tracking-tight">
                      {cat.name}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="md:col-span-8">
                    <div className="flex flex-wrap gap-2.5">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-mono tracking-wider text-muted border border-divider hover:border-burgundy/40 hover:text-charcoal hover:bg-burgundy/5 px-3 py-1.5 rounded transition-all duration-300 cursor-default select-none"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-divider" />
        </div>
      </div>
    </section>
  );
}
