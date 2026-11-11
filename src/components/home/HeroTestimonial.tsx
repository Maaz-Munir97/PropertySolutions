"use client";

import { motion } from "motion/react";
import StarRating from "@/components/ui/StarRating";
import { featuredTestimonial } from "@/data/testimonials";
import { easeLuxe } from "@/lib/motion";

export default function HeroTestimonial() {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, delay: 1.9, ease: easeLuxe }}
      className="hidden justify-self-end rounded-2xl border border-linen/15 bg-linen/10 p-6 backdrop-blur-md sm:block lg:max-w-xs"
    >
      <StarRating className="text-gold-soft" />
      <blockquote className="display mt-4 text-xl leading-snug text-linen italic">
        &ldquo;{featuredTestimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4 text-xs tracking-wide text-linen/55">
        {featuredTestimonial.name} — {featuredTestimonial.role}
      </figcaption>
    </motion.figure>
  );
}
