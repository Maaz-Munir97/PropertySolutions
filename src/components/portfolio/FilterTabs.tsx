"use client";

import { motion } from "motion/react";
import clsx from "clsx";
import { springPill } from "@/lib/motion";

type FilterTabsProps<T extends string> = {
  options: readonly T[];
  value: T;
  onChange: (value: T) => void;
};

export default function FilterTabs<T extends string>({ options, value, onChange }: FilterTabsProps<T>) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
      {options.map((option) => {
        const selected = value === option;
        return (
          <button
            key={option}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(option)}
            className={clsx(
              "relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300",
              selected ? "text-linen" : "text-ink/70 hover:text-ink",
            )}
          >
            {selected && (
              <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-ink" transition={springPill} />
            )}
            <span className="relative">{option}</span>
          </button>
        );
      })}
    </div>
  );
}
