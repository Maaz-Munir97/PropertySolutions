"use client";

import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import clsx from "clsx";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/content";

const filters = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All");

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={clsx(
                "relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300",
                filter === f ? "text-linen" : "text-ink/70 hover:text-ink",
              )}
            >
              {filter === f && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-ink"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{f}</span>
            </button>
          ))}
        </div>
        <p className="text-sm text-stone">
          Showing <span className="font-semibold text-ink">{visible.length}</span> of {projects.length} projects
        </p>
      </div>

      <motion.div layout className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
