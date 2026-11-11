"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Phone } from "lucide-react";
import { site } from "@/data/site";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { easeLuxe } from "@/lib/motion";
import DesktopNav from "./DesktopNav";
import Logo from "./Logo";
import MenuToggle from "./MenuToggle";
import MobileMenu from "./MobileMenu";

const SCROLLED_OFFSET = 40;
const HIDE_AFTER = 400;

export default function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > SCROLLED_OFFSET);
    setHidden(latest > previous && latest > HIDE_AFTER && !open);
  });

  useEffect(() => setOpen(false), [pathname]);
  useLockBodyScroll(open);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const solid = scrolled || open;

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.5, ease: easeLuxe }}
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
          <DesktopNav isActive={isActive} />

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
            <MenuToggle open={open} onToggle={() => setOpen((o) => !o)} />
          </div>
        </div>
      </motion.header>

      <AnimatePresence>{open && <MobileMenu isActive={isActive} />}</AnimatePresence>
    </>
  );
}
