"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Smartphone,
  Globe,
  Database,
  Palette,
  MessageSquare,
  Search,
  Brain,
  BarChart3,
} from "lucide-react";

const fullstack = [
  { icon: Smartphone, title: "Mobile", sub: "Flutter & Dart", level: "Expert" },
  { icon: Globe, title: "Web & Backend", sub: "Node.js, Go, PHP", level: "Avancé" },
  { icon: Database, title: "Cloud & DB", sub: "Firebase, APIs", level: "Expert" },
  { icon: Palette, title: "UI/UX", sub: "Figma, Design", level: "Avancé" },
];

const ai = [
  { icon: MessageSquare, title: "LLM" },
  { icon: Search, title: "Scraping" },
  { icon: Brain, title: "Prompt Eng." },
  { icon: BarChart3, title: "Data" },
];

const techs = [
  "Flutter",
  "Dart",
  "Firebase",
  "Node.js",
  "Python",
  "Go",
  "PHP",
  "OpenAI",
  "Figma",
  "Git",
];

export default function SkillsPanel() {
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
          Le <span className="text-gradient">Stack</span>
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base">
          Fullstack + IA
        </p>
      </motion.div>

      {/* Fullstack cards */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        {fullstack.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, delay: 0.08 + i * 0.06 }}
            className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-orange/20 rounded-2xl p-3.5 sm:p-4 transition-all duration-200"
          >
            <skill.icon className="w-5 h-5 text-orange mb-2.5 sm:mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-heading text-sm font-semibold text-white mb-0.5 sm:mb-1">
              {skill.title}
            </h3>
            <p className="text-muted-foreground text-[11px] sm:text-xs mb-2.5 sm:mb-3">{skill.sub}</p>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange/10 border border-orange/15 text-orange text-[10px] font-medium">
              {skill.level}
            </span>
          </motion.div>
        ))}
      </div>

      {/* AI skills */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.35 }}
        className="mb-8"
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="w-6 h-0.5 bg-orange rounded-full" />
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Intelligence Artificielle
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {ai.map((skill, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-3.5 py-2 bg-white/[0.03] border border-white/[0.06] rounded-xl hover:border-orange/20 transition-colors"
            >
              <skill.icon className="w-4 h-4 text-orange" />
              <span className="text-sm text-white/90 font-medium">{skill.title}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Tech tags */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap gap-2"
      >
        {techs.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-white/[0.03] border border-white/[0.06] rounded-lg text-xs text-muted-foreground hover:text-white hover:border-orange/20 transition-colors cursor-default"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
