"use client";

import { useState } from "react";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";
import { LineAccent } from "./ui/line-accent";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

function WhatsappIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.13-1.343a9.957 9.957 0 0 0 4.881 1.282c5.507 0 9.99-4.478 9.99-9.985 0-2.667-1.04-5.176-2.927-7.067C17.186 3.003 14.678 2 12.012 2zm5.727 14.072c-.254.71-1.464 1.365-2.023 1.455-.494.08-1.139.145-3.3-0.745-2.766-1.138-4.524-3.957-4.66-4.142-.138-.185-1.12-1.492-1.12-2.847 0-1.356.708-2.023.958-2.28.25-.257.545-.32.727-.32l.523.007c.172.006.402-.066.628.48.228.556.779 1.9.847 2.04.068.14.114.305.02.49-.09.186-.14.3-.28.463-.136.162-.284.364-.407.49-.136.14-.28.293-.12.567.16.274.71 1.171 1.524 1.898.614.549 1.133.72 1.407.856.273.136.432.114.59-.068.16-.182.682-.796.864-1.07.183-.272.364-.227.614-.136.25.09 1.583.748 1.855.884.272.135.454.204.522.32.068.113.068.658-.186 1.37z" />
    </svg>
  );
}

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
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

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/emmanuellaene0@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative section-spacing overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[40%] right-[-10%] w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-burgundy to-gold opacity-[0.12] blur-[100px] pointer-events-none" />

      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          {/* Left Column — Info */}
          <div className="lg:col-span-5 space-y-8">
            <SectionHeading label="Connect" title="Let's Build Together" />

            <Reveal delay={0.2}>
              <p className="body-editorial text-sm leading-relaxed max-w-md">
                Whether you have a specific project in mind, need a frontend developer to bring designs to life, or just want to chat about web technology — let&apos;s connect.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="space-y-4">
                <a
                  href="mailto:emmanuellaene0@gmail.com"
                  className="flex items-center gap-3 text-muted hover:text-burgundy transition-colors duration-300 group"
                >
                  <Mail size={16} className="text-gold" />
                  <span className="text-sm font-mono">
                    emmanuellaene0@gmail.com
                  </span>
                </a>

                <a
                  href="https://wa.me/2349031225764"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted hover:text-burgundy transition-colors duration-300 group"
                >
                  <WhatsappIcon className="w-4 h-4 text-gold" />
                  <span className="text-sm font-mono">
                    +234 903 122 5764
                  </span>
                </a>

                <div className="flex items-center gap-3 text-muted">
                  <MapPin size={16} className="text-gold" />
                  <span className="text-sm font-mono">Nigeria</span>
                </div>
              </div>
            </Reveal>
 
            <Reveal delay={0.4}>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://github.com/EmmaEne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center w-10 h-10 rounded-full bg-charcoal/5 border border-divider text-muted hover:text-charcoal shadow-[0_0_8px_rgba(250,250,250,0.08)] hover:shadow-[0_0_15px_rgba(250,250,250,0.25)] transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/emmanuella-ene-87b133294"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center w-10 h-10 rounded-full bg-burgundy/10 border border-burgundy/40 text-burgundy shadow-[0_0_10px_rgba(99,102,241,0.2)] hover:shadow-[0_0_18px_rgba(99,102,241,0.4)] transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/2349031225764"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#25d366]/10 border border-[#25d366]/40 text-[#25d366] shadow-[0_0_18px_rgba(37,211,102,0.45)] hover:shadow-[0_0_28px_rgba(37,211,102,0.8)] transition-all duration-300 hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <WhatsappIcon className="w-5 h-5" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column — Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2} direction="right">
              <form onSubmit={handleSubmit} className="glowing-border-card p-8 rounded-lg space-y-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-[10px] font-mono tracking-[0.15em] uppercase text-muted block mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-beige border border-divider/60 focus:border-burgundy focus:ring-1 focus:ring-burgundy/25 rounded outline-none px-4 py-3 font-sans text-sm text-charcoal placeholder:text-muted-light transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-[10px] font-mono tracking-[0.15em] uppercase text-muted block mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-beige border border-divider/60 focus:border-burgundy focus:ring-1 focus:ring-burgundy/25 rounded outline-none px-4 py-3 font-sans text-sm text-charcoal placeholder:text-muted-light transition-all duration-300"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-[10px] font-mono tracking-[0.15em] uppercase text-muted block mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-beige border border-divider/60 focus:border-burgundy focus:ring-1 focus:ring-burgundy/25 rounded outline-none px-4 py-3 font-sans text-sm text-charcoal placeholder:text-muted-light transition-all duration-300 resize-none"
                    placeholder="Describe your project details..."
                  />
                </div>

                {status === "success" && (
                  <p className="text-xs font-mono text-emerald-400 text-center py-2">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-xs font-mono text-rose-500 text-center py-2">
                    Something went wrong. Please try again or email directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full font-mono text-[11px] tracking-[0.15em] uppercase text-offwhite bg-burgundy hover:bg-burgundy-light transition-colors duration-300 py-3.5 px-6 rounded shadow-lg shadow-burgundy/10 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                  {status !== "sending" && <ArrowUpRight size={14} />}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
