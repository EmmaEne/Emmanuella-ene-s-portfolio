"use client";

import { motion } from "framer-motion";
import { Reveal, RevealText } from "./ui/reveal";
import { ArrowDown, Code, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 md:pt-0 overflow-hidden bg-offwhite"
    >
      {/* Tech Grid Background Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-overlay">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* Glow Behind Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-gradient-to-tr from-burgundy to-gold opacity-[0.18] blur-[80px] pointer-events-none" />

      <div className="editorial-container w-full relative z-10">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center space-y-8">

          {/* Headline */}
          <div className="w-full">
            <RevealText delay={0.2}>
              <h1 className="font-serif text-[clamp(2rem,3.8vw,4.8rem)] font-extrabold leading-[1.12] text-muted tracking-tight">
                Your website is the first thing
                <br />
                a client judges you by.
                <br />
              </h1>
            </RevealText>
          </div>

          {/* Subtitle */}
          <Reveal delay={0.4}>
            <h1 className="font-serif text-[clamp(4.4rem,4.2vw,7rem)] font-extrabold leading-[1.12] text-charcoal tracking-tight">
              I make sure you <span className="text-gradient-indigo-cyan">WIN</span>
            </h1>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-[11px] font-mono font-medium tracking-[0.15em] uppercase text-offwhite bg-burgundy hover:bg-burgundy-light px-8 py-4 transition-all duration-300 rounded shadow-lg shadow-burgundy/10"
              >
                <Code size={14} />
                Explore Projects
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-[11px] font-mono font-medium tracking-[0.15em] uppercase text-charcoal hover:text-burgundy border border-burgundy/40 px-8 py-4 transition-all duration-300 group"
              >
                Get in Touch
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-light">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={12} className="text-muted-light" />
        </motion.div>
      </motion.div>
    </section>
  );
}
