"use client";

import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";
import { LineAccent } from "./ui/line-accent";
import { Terminal, Cpu } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative section-spacing overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[35%] left-[-10%] w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-burgundy to-gold opacity-[0.12] blur-[100px] pointer-events-none" />

      <div className="editorial-container">
        <SectionHeading label="Introduction" title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Biography text */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal delay={0.1}>
              <h3 className="font-sans text-xl md:text-2xl font-bold text-charcoal">
                I'm Emmanuella Ene. I build websites that look expensive, feel effortless, and actually bring in business.
              </h3>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-4">
                <p className="body-editorial text-sm md:text-base leading-relaxed">
                  Most websites look nice and do nothing. I got tired of seeing businesses lose customers to a bad first impression, so I made fixing that my job.
                </p>
                <p className="body-editorial text-sm md:text-base leading-relaxed">
                  I've built platforms for universities, AI startups, and enterprise businesses. Every single one looked and performed like it cost double what it did.
                </p>
                <p className="body-editorial text-sm md:text-base leading-relaxed">
                  I use AI to move faster, but the thinking, the strategy, and the craft are entirely mine. With me, you're not getting a template. You're getting someone who genuinely cares what your business looks like online.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Developer Shell Dashboard */}
          <div className="lg:col-span-6">
            <Reveal delay={0.3} direction="right">
              <div className="terminal-box shadow-xl relative overflow-hidden border border-divider/40">
                {/* Header Window Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#131316] border-b border-[#1f1f23]">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="text-[10px] font-mono text-muted-light select-none flex items-center gap-1.5">
                    <Terminal size={10} className="text-gold" />
                    about-shell.sh
                  </div>
                  <div className="w-8" />
                </div>

                {/* Shell Contents */}
                <div className="p-5 font-mono text-[12px] space-y-5 text-muted">
                  <div>
                    <span className="text-gold">$</span> <span className="text-charcoal font-bold">whoami</span>
                    <p className="text-muted-light mt-1">emmanuella_ene (Frontend Engineer / Web developer)</p>
                  </div>

                  <div>
                    <span className="text-gold">$</span> <span className="text-charcoal font-bold">cat focus.json</span>
                    <div className="text-[#34d399] mt-1 whitespace-pre">
                      &#123;{"\n"}
                      {"  "}&quot;role&quot;: &quot;Lead Frontend Engineer&quot;,{"\n"}
                      {"  "}&quot;experience&quot;: &quot;5+ Years&quot;,{"\n"}
                      {"  "}&quot;specialty&quot;: &quot;React & Next.js&quot;{"\n"}
                      &#125;
                    </div>
                  </div>

                  <div>
                    <span className="text-gold">$</span> <span className="text-charcoal font-bold">curl -s portfolio-stats.api</span>
                    <div className="grid grid-cols-2 gap-4 mt-2 border-t border-[#1f1f23] pt-3 text-[11px]">
                      <div>
                        <span className="text-burgundy font-bold uppercase tracking-wider block text-[10px]">Experience</span>
                        <p className="text-charcoal font-bold text-sm">5+ Years</p>
                      </div>
                      <div>
                        <span className="text-burgundy font-bold uppercase tracking-wider block text-[10px]">Delivered</span>
                        <p className="text-charcoal font-bold text-sm">50+ Projects</p>
                      </div>
                      <div>
                        <span className="text-burgundy font-bold uppercase tracking-wider block text-[10px]">Satisfaction</span>
                        <p className="text-charcoal font-bold text-sm">99% Client</p>
                      </div>
                      <div>
                        <span className="text-burgundy font-bold uppercase tracking-wider block text-[10px]">Commit Rate</span>
                        <p className="text-charcoal font-bold text-sm">High / Active</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="flex items-center justify-between px-4 py-1.5 bg-[#131316] border-t border-[#1f1f23] text-[9px] text-muted-light select-none">
                  <span className="flex items-center gap-1">
                    <Cpu size={10} />
                    System Check Passed
                  </span>
                  <span>v1.0.0</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
