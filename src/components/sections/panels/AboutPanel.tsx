"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Globe, Users, Zap } from "lucide-react";

const stats = [
  { icon: Award, value: "2020", label: "Pitch My APP" },
  { icon: Globe, value: "Paris", label: "Viva Tech" },
  { icon: Users, value: "PM", label: "Manager" },
  { icon: Zap, value: "IA", label: "Engineer" },
];

export default function AboutPanel() {
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
          À <span className="text-gradient">propos</span>
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl">
          Passionné par l&apos;innovation et l&apos;IA. Je conçois des systèmes qui allient{" "}
          <span className="text-white/90 font-medium">rigueur technique</span> et{" "}
          <span className="text-white/90 font-medium">design intuitif</span>.
        </p>
      </motion.div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, delay: 0.1 + i * 0.06 }}
            className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-orange/20 rounded-2xl p-4 text-center transition-all duration-200"
          >
            <stat.icon className="w-5 h-5 text-orange mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="font-heading text-lg sm:text-xl font-bold text-white">{stat.value}</div>
            <div className="text-muted-foreground text-xs mt-0.5">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
