"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail, FileDown } from "lucide-react";

export default function Hero() {
  const navigate = (tab: string) => {
    window.dispatchEvent(new CustomEvent("portfolio:navigate", { detail: tab }));
    const el = document.getElementById("portfolio");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollDown = () => {
    const el = document.getElementById("portfolio");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] sm:min-h-[85vh] flex items-center overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-orange/[0.07] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 w-full pt-28 sm:pt-24 pb-16 sm:pb-12">
        {/* Mobile: photo on top, text below. Desktop: text left, photo right */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">

          {/* ── Text Content ── */}
          <div className="text-center lg:text-left flex-1 min-w-0">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange/10 border border-orange/15 rounded-full mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs text-orange font-medium">Disponible</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold leading-[1.08] mb-3"
            >
              <span className="text-white">H. Isaac </span>
              <span className="text-gradient">Titebe</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-6 sm:mb-8"
            >
              Fullstack Dev &amp; AI Engineer
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-center lg:justify-start mb-6 sm:mb-8"
            >
              <button
                onClick={() => navigate("projects")}
                className="group flex items-center gap-2 bg-orange hover:bg-orange-600 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all btn-shine glow-orange w-full sm:w-auto justify-center"
              >
                Voir mes projets
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <a
                href="https://drive.google.com/file/d/1EXAMPLE/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-xl text-sm font-semibold border border-white/10 hover:border-orange/30 transition-all w-full sm:w-auto justify-center"
              >
                <FileDown className="w-4 h-4 text-orange" />
                Télécharger CV
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: "https://github.com/titeb/", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/titebe", label: "LinkedIn" },
                { icon: Mail, href: "mailto:titebe.henock@gmail.com", label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-orange/15 border border-white/10 hover:border-orange/30 flex items-center justify-center text-muted-foreground hover:text-orange transition-all duration-200"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Photo (stacked cards effect) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-60 md:h-60 lg:w-72 lg:h-72 mx-auto">
              {/* Soft glow behind */}
              <div className="absolute inset-[-12%] rounded-3xl bg-gradient-to-br from-orange/15 via-orange/5 to-transparent blur-2xl" />

              {/* Back card — orange gradient, slightly rotated, floating */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-br from-orange to-orange-400 rounded-3xl rotate-3 opacity-15 shadow-xl"
              />

              {/* Mid card — subtle overlay, different offset */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-orange/20 to-transparent rounded-3xl -rotate-1 opacity-40"
              />

              {/* Front card — the actual photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50"
              >
                <Image
                  src="/profile.jpg"
                  alt="H. Isaac Titebe"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 208px, (max-width: 1024px) 240px, 288px"
                />
                {/* Bottom gradient overlay with name */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent p-4 sm:p-5">
                  <div className="font-heading text-lg sm:text-xl font-bold text-white">H. ISAAC</div>
                  <div className="text-orange text-xs sm:text-sm font-medium">TITEBE</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator (desktop only) */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollDown}
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/50 hover:text-orange transition-colors"
        aria-label="Défiler"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-current rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-current rounded-full" />
        </motion.div>
      </motion.button>
    </section>
  );
}
