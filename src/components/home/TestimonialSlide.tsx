"use client";

import { motion } from "motion/react";
import InitialsAvatar from "@/components/ui/InitialsAvatar";
import { easeLuxe } from "@/lib/motion";
import type { Testimonial } from "@/types/content";

export default function TestimonialSlide({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: easeLuxe }}
    >
      <blockquote className="display max-w-4xl text-3xl leading-snug sm:text-4xl lg:text-5xl">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-10 flex items-center gap-4">
        <InitialsAvatar name={testimonial.name} />
        <span>
          <span className="block font-semibold">{testimonial.name}</span>
          <span className="text-sm text-stone">{testimonial.role}</span>
        </span>
      </figcaption>
    </motion.figure>
  );
}
