"use client";

import { Fragment } from "react";
import { motion } from "motion/react";
import clsx from "clsx";
import { easeLuxe } from "@/lib/motion";

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  accent?: number[];
  as?: "h1" | "h2" | "p";
};

const wordVariants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 1, ease: easeLuxe } },
};

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
        <Fragment key={`${word}-${i}`}>
          <span aria-hidden className="inline-block overflow-hidden pb-[0.12em] align-top">
            <motion.span
              className={clsx("inline-block", accent.includes(i) && "text-gold italic")}
              variants={wordVariants}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 && " "}
        </Fragment>
      ))}
    </Tag>
  );
}
