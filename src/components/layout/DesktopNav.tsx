"use client";

import Link from "next/link";
import { motion } from "motion/react";
import clsx from "clsx";
import { nav } from "@/data/site";
import { springPill } from "@/lib/motion";

export default function DesktopNav({ isActive }: { isActive: (href: string) => boolean }) {
  return (
    <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
      {nav.map((item) => {
        const active = isActive(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={clsx(
              "relative rounded-full px-4 py-2 text-sm transition-colors duration-300",
              active ? "text-linen" : "text-linen/60 hover:text-linen",
            )}
          >
            {active && (
              <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-linen/10" transition={springPill} />
            )}
            <span className="relative">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
