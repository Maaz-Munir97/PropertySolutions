"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function ScrollCue() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.3 }}
      className="mt-14 hidden items-center gap-3 text-xs tracking-[0.2em] text-linen/50 uppercase sm:flex"
    >
      <motion.span
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="flex size-9 items-center justify-center rounded-full border border-linen/20"
      >
        <ArrowDown className="size-4" aria-hidden />
      </motion.span>
      Scroll to explore
    </motion.div>
  );
}
