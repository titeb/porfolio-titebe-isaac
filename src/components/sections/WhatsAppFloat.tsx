"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const message = encodeURIComponent(
    "Bonjour Isaac, je vous contacte suite à la visite de votre portfolio. J'aimerais discuter d'une opportunité de collaboration."
  );

  return (
    <motion.a
      href={`https://wa.me/243986842924?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter sur WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-24 right-5 md:bottom-8 z-40 group"
    >
      {/* Pulse ring */}
      <motion.span
        animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        className="absolute inset-0 rounded-full bg-green-500 pointer-events-none"
      />

      {/* Button */}
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 group-hover:scale-110">
        <MessageCircle className="w-6 h-6 text-white" />
      </span>

      {/* Tooltip on hover */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-dark-300/95 backdrop-blur-sm border border-white/10 text-white text-xs font-medium px-3 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Me contacter
      </span>
    </motion.a>
  );
}
