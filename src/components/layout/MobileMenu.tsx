"use client";

import Link from "next/link";
import { motion } from "motion/react";
import clsx from "clsx";
import { nav, site } from "@/data/site";
import { easeCurtain, easeLuxe } from "@/lib/motion";

export default function MobileMenu({ isActive }: { isActive: (href: string) => boolean }) {
  return (
    <motion.div
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      animate={{ clipPath: "inset(0 0 0% 0)" }}
      exit={{ clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: 0.7, ease: easeCurtain }}
      className="fixed inset-0 z-40 flex flex-col bg-midnight pt-28 lg:hidden"
    >
      <nav className="container-x flex flex-1 flex-col gap-2" aria-label="Mobile">
        {nav.map((item, i) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 + i * 0.06, duration: 0.6, ease: easeLuxe }}
          >
            <Link
              href={item.href}
              className={clsx(
                "display flex items-baseline gap-4 border-b border-linen/10 py-4 text-4xl",
                isActive(item.href) ? "text-gold-soft" : "text-linen",
              )}
            >
              <span className="font-sans text-xs text-linen/40">0{i + 1}</span>
              {item.label}
            </Link>
          </motion.div>
        ))}
      </nav>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="container-x space-y-1 pb-10 text-sm text-linen/60"
      >
        <a href={site.phoneHref} className="block text-lg text-linen">
          {site.phone}
        </a>
        <p>{site.address}</p>
      </motion.div>
    </motion.div>
  );
}
