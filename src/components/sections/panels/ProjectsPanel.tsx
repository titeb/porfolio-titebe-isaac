"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ExternalLink, Github, Smartphone, Car, Bot, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
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
];

/* Group projects by pairs for mobile carousel slides */
const projectPairs: typeof projects[] = [];
for (let i = 0; i < projects.length; i += 2) {
  projectPairs.push(projects.slice(i, i + 2));
}

/* ── Single project card (reused in grid & carousel) ── */
function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[number];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35, delay: 0.08 + index * 0.08 }}
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
  );
}

export default function ProjectsPanel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  /* ── Carousel (mobile/tablet only) ── */
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedSnapIndex());
  }, [emblaApi]);

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const updateState = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      setSelectedIndex(emblaApi.selectedSnapIndex());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };
    // Call immediately — "init" may have already fired before this effect runs
    updateState();
    emblaApi.on("init", updateState);
    emblaApi.on("reInit", updateState);
    emblaApi.on("select", updateState);
    return () => {
      emblaApi.off("init", updateState);
      emblaApi.off("reInit", updateState);
      emblaApi.off("select", updateState);
    };
  }, [emblaApi]);

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

      {/* ── Mobile/tablet: carousel (2 per slide, stacked vertically) ── */}
      <div className="md:hidden mb-6">
        <div className="relative">
          {/* Carousel container – overflow-hidden is REQUIRED by Embla */}
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-3">
              {projectPairs.map((pair, slideIdx) => (
                <div
                  key={slideIdx}
                  className="flex-[0_0_100%] min-w-0"
                >
                  <div className="flex flex-col gap-3">
                    {pair.map((project, cardIdx) => (
                      <ProjectCard
                        key={project.title}
                        project={project}
                        index={slideIdx * 2 + cardIdx}
                        isInView={isInView}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Overlaid arrows – always visible, centered vertically */}
          {projectPairs.length > 1 && (
            <>
              {/* Left arrow */}
              <button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                aria-label="Slide précédent"
                className={cn(
                  "absolute left-1 top-1/2 -translate-y-1/2 z-20",
                  "w-9 h-9 rounded-full flex items-center justify-center",
                  "transition-all duration-200 ease-out",
                  "border backdrop-blur-sm shadow-lg",
                  canScrollPrev
                    ? "bg-black/50 hover:bg-orange border-white/15 hover:border-orange text-white/80 hover:text-white active:scale-90 cursor-pointer"
                    : "bg-black/20 border-transparent text-white/10 cursor-not-allowed pointer-events-none"
                )}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Right arrow */}
              <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                aria-label="Slide suivant"
                className={cn(
                  "absolute right-1 top-1/2 -translate-y-1/2 z-20",
                  "w-9 h-9 rounded-full flex items-center justify-center",
                  "transition-all duration-200 ease-out",
                  "border backdrop-blur-sm shadow-lg",
                  canScrollNext
                    ? "bg-black/50 hover:bg-orange border-white/15 hover:border-orange text-white/80 hover:text-white active:scale-90 cursor-pointer"
                    : "bg-black/20 border-transparent text-white/10 cursor-not-allowed pointer-events-none"
                )}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Slide counter – below carousel */}
        {projectPairs.length > 1 && (
          <div className="flex justify-center mt-4">
            <span className="text-[11px] text-muted-foreground/50 font-medium tabular-nums tracking-wide">
              {selectedIndex + 1}{" "}<span className="text-white/15">/</span>{" "}{scrollSnaps.length || projectPairs.length}
            </span>
          </div>
        )}
      </div>

      {/* ── Desktop: grid (unchanged) ── */}
      <div className="hidden md:grid grid-cols-2 gap-3 mb-8">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={i}
            isInView={isInView}
          />
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
