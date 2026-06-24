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

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:emmanuellaene0@gmail.com?subject=Portfolio Inquiry from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name} (${formData.email})`;
    window.location.href = mailtoLink;
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
              <div className="flex items-center gap-6">
                <a
                  href="https://github.com/EmmaEne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono tracking-[0.15em] uppercase text-muted hover:text-charcoal transition-colors duration-300 inline-flex items-center gap-1"
                >
                  GitHub
                  <ArrowUpRight size={12} />
                </a>
                <a
                  href="https://www.linkedin.com/in/emmanuella-ene-87b133294"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono tracking-[0.15em] uppercase text-muted hover:text-charcoal transition-colors duration-300 inline-flex items-center gap-1"
                >
                  LinkedIn
                  <ArrowUpRight size={12} />
                </a>
                <a
                  href="https://wa.me/2349031225764"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono tracking-[0.15em] uppercase text-muted hover:text-charcoal transition-colors duration-300 inline-flex items-center gap-1"
                >
                  WhatsApp
                  <ArrowUpRight size={12} />
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

                <button
                  type="submit"
                  className="w-full font-mono text-[11px] tracking-[0.15em] uppercase text-offwhite bg-burgundy hover:bg-burgundy-light transition-colors duration-300 py-3.5 px-6 rounded shadow-lg shadow-burgundy/10 flex items-center justify-center gap-2"
                >
                  Send Message
                  <ArrowUpRight size={14} />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
