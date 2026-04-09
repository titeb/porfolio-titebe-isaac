"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Github, Linkedin, MessageCircle, ArrowUpRight } from "lucide-react";

export default function ContactPanel() {
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
          On <span className="text-gradient">discute</span> ?
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-sm">
          Une idée, un projet ? Contactez-moi directement.
        </p>
      </motion.div>

      {/* Contact cards */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="space-y-3 mb-8"
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/243986842924"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 bg-white/[0.03] hover:bg-green-500/[0.06] border border-white/[0.06] hover:border-green-500/25 rounded-2xl p-4 transition-all duration-200"
        >
          <div className="w-11 h-11 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/15 transition-colors">
            <MessageCircle className="w-5 h-5 text-green-400" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs text-muted-foreground mb-0.5">WhatsApp</p>
            <p className="text-sm text-white font-medium truncate">+243 986 842 924</p>
          </div>
          <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-green-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </a>

        {/* Email */}
        <a
          href="mailto:titebe.henock@gmail.com"
          className="group flex items-center gap-4 bg-white/[0.03] hover:bg-orange/[0.06] border border-white/[0.06] hover:border-orange/25 rounded-2xl p-4 transition-all duration-200"
        >
          <div className="w-11 h-11 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange/15 transition-colors">
            <Mail className="w-5 h-5 text-orange" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs text-muted-foreground mb-0.5">Email</p>
            <p className="text-sm text-white font-medium truncate">titebe.henock@gmail.com</p>
          </div>
          <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/titeb/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/15 rounded-2xl p-4 transition-all duration-200"
        >
          <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
            <Github className="w-5 h-5 text-white/80" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs text-muted-foreground mb-0.5">GitHub</p>
            <p className="text-sm text-white font-medium truncate">github.com/titeb</p>
          </div>
          <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/titebe"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 bg-white/[0.03] hover:bg-blue-500/[0.06] border border-white/[0.06] hover:border-blue-500/25 rounded-2xl p-4 transition-all duration-200"
        >
          <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/15 transition-colors">
            <Linkedin className="w-5 h-5 text-blue-400" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs text-muted-foreground mb-0.5">LinkedIn</p>
            <p className="text-sm text-white font-medium truncate">linkedin.com/in/titebe</p>
          </div>
          <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </a>
      </motion.div>

      {/* Location */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.25 }}
        className="flex items-center gap-1.5 text-muted-foreground text-sm"
      >
        <MapPin className="w-3.5 h-3.5 text-orange" />
        <span>RDCongo</span>
      </motion.div>
    </div>
  );
}
