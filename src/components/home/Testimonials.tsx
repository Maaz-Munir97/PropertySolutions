"use client";

import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import TestimonialControls from "./TestimonialControls";
import TestimonialSlide from "./TestimonialSlide";

const AUTOPLAY_MS = 7000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, count]);

  const step = (direction: number) => setIndex((i) => (i + direction + count) % count);

  return (
    <section className="py-24 sm:py-32" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] bg-linen px-6 py-14 shadow-[0_40px_120px_-40px_rgba(15,29,46,0.25)] sm:px-14 sm:py-20 lg:px-24">
          <Quote className="absolute top-8 right-8 size-24 text-gold/15 sm:size-40" aria-hidden />
          <span className="eyebrow text-gold">Owners say</span>

          <div className="mt-10 min-h-[260px] sm:min-h-[220px]" aria-live="polite">
            <AnimatePresence mode="wait">
              <TestimonialSlide key={index} testimonial={testimonials[index]} />
            </AnimatePresence>
          </div>

          <TestimonialControls
            count={count}
            index={index}
            onSelect={setIndex}
            onPrevious={() => step(-1)}
            onNext={() => step(1)}
          />
        </div>
      </div>
    </section>
  );
}
