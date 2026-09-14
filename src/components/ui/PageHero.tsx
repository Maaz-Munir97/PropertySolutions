"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import SplitText from "./SplitText";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  accent?: number[];
  text: string;
  image: string;
};

/** Shared hero banner for inner pages, with a parallax background image. */
export default function PageHero({ eyebrow, title, accent, text, image }: PageHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={ref} className="grain relative flex min-h-[72svh] items-end overflow-hidden bg-midnight pb-16 pt-40 sm:pb-24">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-45" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/70 to-midnight/30" />

      <div className="container-x relative">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow text-gold-soft"
        >
          {eyebrow}
        </motion.span>
        <SplitText
          text={title}
          accent={accent}
          delay={0.15}
          className="display mt-6 max-w-4xl text-5xl leading-[1.02] text-linen sm:text-6xl lg:text-7xl"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-linen/70"
        >
          {text}
        </motion.p>
      </div>
    </section>
  );
}
