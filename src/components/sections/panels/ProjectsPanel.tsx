"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Smartphone, Car, Bot, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "WEMA",
    sub: "App Mobile Primée",
    tags: ["Flutter", "Firebase"],
    icon: Smartphone,
    badge: { text: "Lauréat 2020", color: "orange" },
    link: null,
  },
  {
    title: "YAZZ",
    sub: "IoT Véhicules",
    tags: ["IoT", "Flutter", "GPS"],
    icon: Car,
    badge: { text: "En cours", color: "muted" },
    link: null,
  },
  {
    title: "AI Agent",
    sub: "Agent IA Autonome",
    tags: ["Python", "OpenAI"],
    icon: Bot,
    badge: { text: "Perso", color: "muted" },
    link: null,
  },
  {
    title: "GGMart",
    sub: "E-commerce",
    tags: ["Next.js", "UX"],
    icon: ShoppingCart,
    badge: { text: "Live", color: "green" },
    link: "https://ggmarttesty.vercel.app/",
  },
];

export default function ProjectsPanel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="py-8 sm:py-12">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="mb-8 sm:mb-10"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
          Projets <span className="text-gradient">phares</span>
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base">
          Solutions concrètes pour des problèmes réels.
        </p>
      </motion.div>

      {/* Project grid */}
      <div className="grid sm:grid-cols-2 gap-3 mb-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, delay: 0.08 + i * 0.08 }}
            className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-orange/20 rounded-2xl p-4 sm:p-5 transition-all duration-200"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-2.5 sm:mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange/80 to-orange-400/80 flex items-center justify-center shadow-lg shadow-orange/10">
                  <project.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-xs mt-0.5">{project.sub}</p>
                </div>
              </div>
              <span
                className={cn(
                  "px-2 py-0.5 rounded-full text-[10px] font-medium border flex-shrink-0",
                  project.badge.color === "orange" &&
                    "bg-orange/10 border-orange/25 text-orange",
                  project.badge.color === "green" &&
                    "bg-green-500/10 border-green-500/25 text-green-400",
                  project.badge.color === "muted" &&
                    "bg-white/[0.03] border-white/[0.08] text-muted-foreground"
                )}
              >
                {project.badge.text}
              </span>
            </div>

            {/* Tags + link */}
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-white/[0.04] rounded text-[10px] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-orange hover:text-orange-400 text-xs font-medium transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* GitHub link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <a
          href="https://github.com/titeb/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-orange/20 rounded-xl text-sm text-muted-foreground hover:text-white transition-all group"
        >
          <Github className="w-4 h-4" />
          <span className="font-medium">GitHub</span>
          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </motion.div>
    </div>
  );
}
