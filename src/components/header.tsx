"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-offwhite/95 backdrop-blur-sm border-b border-divider"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="editorial-container">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#"
              className="font-sans text-lg md:text-xl font-bold tracking-tight text-charcoal hover:text-burgundy transition-colors duration-300"
            >
              Emmanuella<span className="text-gold">.</span>
            </a>

            {/* Desktop Nav — Centered */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative group text-[11px] font-mono font-medium tracking-[0.15em] uppercase text-muted hover:text-charcoal transition-colors duration-300"
                >
                  <span className="text-burgundy mr-1 font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300">&lt;</span>
                  {link.label}
                  <span className="text-burgundy ml-1 font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300">/&gt;</span>
                </a>
              ))}
            </div>

            {/* Contact CTA */}
            <a
              href="#contact"
              className="hidden md:inline-block text-[11px] font-mono font-medium tracking-[0.15em] uppercase text-charcoal border border-burgundy/40 px-4 py-2 hover:border-burgundy hover:bg-burgundy/10 transition-all duration-300 rounded"
            >
              Let&apos;s Talk
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-charcoal p-1"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-offwhite flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="font-sans text-3xl font-bold tracking-tight text-charcoal hover:text-burgundy transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans text-3xl font-bold tracking-tight text-burgundy"
              >
                Contact
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
