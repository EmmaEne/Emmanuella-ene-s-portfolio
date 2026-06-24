"use client";

import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";
import { LineAccent } from "./ui/line-accent";
import { ArrowUpRight } from "lucide-react";

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    number: "01",
    title: "Arvys Technologies",
    category: "AI Platform",
    description:
      "An Edu tech establishment teaching practical tech skills, centered on collaborating with universitys to train tertiary students for the real job market",
    tech: ["Html", "Bootstrap", "JavaScript"],
    image: "/arvys-preview.png",
    liveUrl: "https://arvystech.com",
    githubUrl: "https://github.com/EmmaEne/ARVYS",
  },
  {
    number: "02",
    title: "Denmatrix Dashboard",
    category: "Enterprise Dashboard",
    description:
      "This is a content marketing system for Dental practitioners",
    tech: ["React", "TypeScript", "Chart.js", "REST API"],
    image: "/denmatrix-preview.png",
    liveUrl: "https://denmatrix-dashboard-ii.vercel.app/",
    githubUrl: "https://github.com/EmmaEne/Denmatrix-dashboard-II",
  },
  {
    number: "03",
    title: "Havilla University",
    category: "Education Platform",
    description:
      "A modern university learning management system with elegant authentication, student portals, and a warm academic design language.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "/havilla-preview.png",
    liveUrl: "https://havilla-university.vercel.app/login",
    githubUrl: "https://github.com/EmmaEne/Havilla-university",
  },
];

function GithubIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function Projects() {
  return (
    <section id="work" className="relative section-spacing overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[45%] right-[-10%] w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-burgundy to-gold opacity-[0.12] blur-[120px] pointer-events-none" />

      <div className="editorial-container">
        <SectionHeading label="Portfolio" title="Selected Work" />

        <LineAccent direction="horizontal" color="divider" className="w-full mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={0.1 + i * 0.1} className="h-full">
              <div className="glowing-border-card flex flex-col h-full rounded-lg overflow-hidden group">
                {/* Mockup Preview Container */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-[16/10] overflow-hidden bg-beige border-b border-divider/40"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                  />
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </a>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-wider text-gold uppercase">
                      {project.category}
                    </span>
                    <h3 className="font-sans text-lg font-bold text-charcoal tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  <p className="body-editorial text-xs leading-relaxed flex-grow text-muted">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-mono tracking-wider text-muted border border-divider/50 px-2.5 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-divider/30 text-xs">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] text-burgundy hover:text-burgundy-light font-bold"
                    >
                      Live Demo <ArrowUpRight size={12} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted hover:text-charcoal"
                    >
                      <GithubIcon className="w-3.5 h-3.5" /> Source
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
