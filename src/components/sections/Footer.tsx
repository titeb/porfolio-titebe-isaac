"use client";

import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-6 pb-24 md:pb-6">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Social row */}
        <div className="flex items-center justify-center gap-3 mb-4">
          {[
            { icon: Github, href: "https://github.com/titeb/", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/titebe", label: "LinkedIn" },
            { icon: Mail, href: "mailto:titebe.henock@gmail.com", label: "Email" },
            { icon: MessageCircle, href: "https://wa.me/243986842924", label: "WhatsApp" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") || s.href.startsWith("https://wa.me") ? undefined : "_blank"}
              rel={
                s.href.startsWith("mailto") || s.href.startsWith("https://wa.me")
                  ? undefined
                  : "noopener noreferrer"
              }
              aria-label={s.label}
              className="w-8 h-8 rounded-lg bg-white/[0.03] hover:bg-orange/10 border border-white/[0.06] hover:border-orange/20 flex items-center justify-center text-muted-foreground hover:text-orange transition-all duration-200"
            >
              <s.icon className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-muted-foreground/60">
          &copy; 2026 H. Isaac Titebe
        </p>
      </div>
    </footer>
  );
}
