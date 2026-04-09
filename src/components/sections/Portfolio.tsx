"use client";

import { useState, useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Code2, FolderKanban, Send } from "lucide-react";
import { cn } from "@/lib/utils";

import AboutPanel from "./panels/AboutPanel";
import SkillsPanel from "./panels/SkillsPanel";
import ProjectsPanel from "./panels/ProjectsPanel";
import ContactPanel from "./panels/ContactPanel";

const tabs = [
  { id: "about", label: "À propos", icon: User },
  { id: "skills", label: "Stack", icon: Code2 },
  { id: "projects", label: "Projets", icon: FolderKanban },
  { id: "contact", label: "Contact", icon: Send },
] as const;

const panels: Record<string, () => ReactNode> = {
  about: () => <AboutPanel />,
  skills: () => <SkillsPanel />,
  projects: () => <ProjectsPanel />,
  contact: () => <ContactPanel />,
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about");

  // Listen for navigation events from Header
  useEffect(() => {
    const handler = (e: Event) => {
      const tab = (e as CustomEvent).detail;
      if (tab && panels[tab]) setActiveTab(tab);
    };
    window.addEventListener("portfolio:navigate", handler);
    return () => window.removeEventListener("portfolio:navigate", handler);
  }, []);

  return (
    <section id="portfolio" className="relative pb-24 md:pb-16">
      {/* Desktop tab triggers */}
      <div className="hidden md:flex justify-center gap-2 mb-12 px-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
              activeTab === tab.id
                ? "bg-orange text-white shadow-lg shadow-orange/20"
                : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white border border-white/5"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {panels[activeTab]?.()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile bottom navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-dark-600/95 backdrop-blur-lg border-t border-white/8 safe-area-pb">
        <div className="flex justify-around items-center h-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                const el = document.getElementById("portfolio");
                if (el) {
                  const rect = el.getBoundingClientRect();
                  if (rect.top > 80) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }
              }}
              className={cn(
                "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-200 min-w-[3.5rem]",
                activeTab === tab.id
                  ? "text-orange"
                  : "text-muted-foreground/60 active:text-muted-foreground"
              )}
              aria-label={tab.label}
            >
              <tab.icon className="w-5 h-5" />
              <span className="text-[10px] font-medium leading-none">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </section>
  );
}
