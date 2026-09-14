"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import clsx from "clsx";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 7000);
    return () => clearInterval(id);
  }, [paused, count]);

  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);
  const t = testimonials[index];

  return (
    <section
      className="py-24 sm:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] bg-linen px-6 py-14 shadow-[0_40px_120px_-40px_rgba(15,29,46,0.25)] sm:px-14 sm:py-20 lg:px-24">
          <Quote className="absolute right-8 top-8 size-24 text-gold/15 sm:size-40" aria-hidden />
          <span className="eyebrow text-gold">Owners say</span>

          <div className="mt-10 min-h-[260px] sm:min-h-[220px]" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <blockquote className="display max-w-4xl text-3xl leading-snug sm:text-4xl lg:text-5xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-4">
                  <span className="relative size-14 overflow-hidden rounded-full">
                    <Image src={t.avatar} alt="" fill sizes="56px" className="object-cover" />
                  </span>
                  <span>
                    <span className="block font-semibold">{t.name}</span>
                    <span className="text-sm text-stone">{t.role}</span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-12 flex items-center justify-between gap-6">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={clsx(
                    "h-1.5 rounded-full transition-all duration-500",
                    i === index ? "w-10 bg-gold" : "w-4 bg-ink/15 hover:bg-ink/30",
                  )}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="flex size-12 items-center justify-center rounded-full border border-ink/15 transition-colors hover:bg-ink hover:text-linen"
              >
                <ArrowLeft className="size-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="flex size-12 items-center justify-center rounded-full border border-ink/15 transition-colors hover:bg-ink hover:text-linen"
              >
                <ArrowRight className="size-5" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
