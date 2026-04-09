"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "À propos", tab: "about" },
  { label: "Stack", tab: "skills" },
  { label: "Projets", tab: "projects" },
  { label: "Contact", tab: "contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (tab: string) => {
    window.dispatchEvent(new CustomEvent("portfolio:navigate", { detail: tab }));
    const el = document.getElementById("portfolio");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-dark/90 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 h-14 flex items-center justify-between">
        {/* Logo */}
        <button onClick={goTop} className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange to-orange-400 flex items-center justify-center transition-transform group-hover:scale-105">
            <span className="font-heading font-bold text-white text-sm">H</span>
          </div>
          <span className="font-heading font-semibold text-white text-sm hidden sm:block tracking-tight">
            ISAAC <span className="text-orange">TITEBE</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.tab}
              onClick={() => navigate(item.tab)}
              className="px-4 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:text-white hover:bg-white/5 transition-all uppercase tracking-wider"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-1.5 text-muted-foreground hover:text-white transition-colors"
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-400/95 backdrop-blur-md border-t border-white/5"
          >
            <nav className="flex flex-col py-2 px-4">
              {navItems.map((item) => (
                <button
                  key={item.tab}
                  onClick={() => navigate(item.tab)}
                  className="py-3 text-left text-sm text-muted-foreground hover:text-orange font-medium border-b border-white/5 last:border-0 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
