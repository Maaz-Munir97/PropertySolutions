"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Phone } from "lucide-react";
import { nav, site } from "@/lib/content";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 40);
    setHidden(latest > prev && latest > 400 && !open);
  });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          solid ? "bg-midnight/85 backdrop-blur-xl" : "bg-transparent",
        )}
      >
        <div
          className={clsx(
            "container-x flex items-center justify-between transition-[padding] duration-500",
            scrolled ? "py-4" : "py-6",
          )}
        >
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {nav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "relative rounded-full px-4 py-2 text-sm transition-colors duration-300",
                    active ? "text-linen" : "text-linen/60 hover:text-linen",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-linen/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 text-sm text-linen/70 transition-colors hover:text-gold-soft xl:flex"
            >
              <Phone className="size-4" aria-hidden />
              {site.phone}
            </a>
            <Link
              href="/contact"
              className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-linen transition-colors duration-500 hover:bg-linen hover:text-ink sm:inline-flex"
            >
              Free appraisal
            </Link>

            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="relative flex size-11 items-center justify-center rounded-full border border-linen/20 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span
                className={clsx(
                  "absolute h-px w-5 bg-linen transition-transform duration-500 ease-luxe",
                  open ? "rotate-45" : "-translate-y-1",
                )}
              />
              <span
                className={clsx(
                  "absolute h-px w-5 bg-linen transition-transform duration-500 ease-luxe",
                  open ? "-rotate-45" : "translate-y-1",
                )}
              />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-midnight pt-28 lg:hidden"
          >
            <nav className="container-x flex flex-1 flex-col gap-2" aria-label="Mobile">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.href}
                    className={clsx(
                      "display flex items-baseline gap-4 border-b border-linen/10 py-4 text-4xl",
                      pathname === item.href ? "text-gold-soft" : "text-linen",
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
        )}
      </AnimatePresence>
    </>
  );
}
