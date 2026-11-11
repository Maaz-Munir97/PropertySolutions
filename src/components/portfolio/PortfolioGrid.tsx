"use client";

import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { projectCategories, projects } from "@/data/projects";
import { easeLuxe } from "@/lib/motion";
import type { ProjectCategory } from "@/types/content";
import FilterTabs from "./FilterTabs";
import ProjectCard from "./ProjectCard";

type Filter = "All" | ProjectCategory;

const filters: Filter[] = ["All", ...projectCategories];

export default function PortfolioGrid() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-6">
        <FilterTabs options={filters} value={filter} onChange={setFilter} />
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
              transition={{ duration: 0.6, delay: i * 0.05, ease: easeLuxe }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
