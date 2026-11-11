"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { easeLuxe } from "@/lib/motion";
import type { Service } from "@/types/content";

export default function ServicePreviewImage({ service }: { service: Service }) {
  return (
    <div className="relative hidden aspect-[4/5] overflow-hidden rounded-3xl lg:block">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={service.slug}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: easeLuxe }}
          className="absolute inset-0"
        >
          <Image src={service.image} alt={service.title} fill sizes="40vw" className="object-cover" />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-midnight/90 to-transparent p-8">
        <ul className="space-y-2 text-sm text-linen/80">
          {service.points.map((point) => (
            <li key={point} className="flex items-center gap-3">
              <span className="h-px w-4 bg-gold-soft" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
