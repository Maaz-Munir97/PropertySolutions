"use client";

import { motion } from "motion/react";
import clsx from "clsx";

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  /** Words (by index) to render in the accent style. */
  accent?: number[];
  as?: "h1" | "h2" | "p";
};

/** Reveals a heading word by word, each word sliding up from behind a mask. */
export default function SplitText({ text, className, delay = 0, accent = [], as = "h1" }: SplitTextProps) {
  const Tag = motion[as];
  const words = text.split(" ");

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.06, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.12em] align-top">
          <motion.span
            className={clsx("inline-block", accent.includes(i) && "italic text-gold")}
            variants={{
              hidden: { y: "110%" },
              show: { y: "0%", transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            {word}
            {i < words.length - 1 && " "}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
