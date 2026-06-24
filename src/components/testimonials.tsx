"use client";

import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";
import { MessageSquare } from "lucide-react";

const testimonials = [
  {
    quote:
      "Emmanuella doesn't just write code, she crafts experiences. The attention to detail in every interaction, every transition, every pixel is remarkable. Working with her elevated our entire product.",
    author: "Emmanuel Ayuk",
    role: "Director, ARVYS TECHNOLOGIES",
  },
  {
    quote:
      "What sets Emmanuella apart is her rare combination of engineering precision and design sensibility. She delivered our platform ahead of schedule, and the quality exceeded every expectation.",
    author: "Promise Ogenyi",
    role: "CTO, Phronesis",
  },
  {
    quote:
      "We needed someone who could take a complex dashboard and make it feel intuitive. Emmanuella did exactly that — and made it beautiful in the process. Our users love it.",
    author: "Maxwell Eyo",
    role: "Creative designer ",
  },
];

export function Testimonials() {
  return (
    <section className="relative section-spacing bg-beige/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[35%] left-[-12%] w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-burgundy to-gold opacity-[0.10] blur-[100px] pointer-events-none" />

      <div className="editorial-container">
        <SectionHeading label="Praise" title="Client Feedback" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={0.1 + i * 0.1} className="h-full">
              <div className="glowing-border-card p-6 rounded-lg flex flex-col h-full bg-beige/30 hover:border-burgundy/40 transition-all duration-300">
                {/* Visual quote icon */}
                <div className="text-burgundy mb-4">
                  <MessageSquare size={20} className="opacity-80" />
                </div>

                {/* Quote Text */}
                <blockquote className="body-editorial text-xs md:text-sm leading-relaxed text-muted flex-grow italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="pt-4 border-t border-divider/30">
                  <span className="text-[12px] font-sans font-bold text-charcoal block">
                    {t.author}
                  </span>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-muted block mt-0.5">
                    {t.role}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
