"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown, Star } from "lucide-react";
import Button from "@/components/ui/Button";
import SplitText from "@/components/ui/SplitText";
import { images, site } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="grain relative flex min-h-svh items-end overflow-hidden bg-midnight">
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        initial={{ clipPath: "inset(12% 12% 12% 12% round 24px)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0% round 0px)" }}
        transition={{ duration: 1.6, ease }}
        className="absolute inset-0"
      >
        <Image
          src={images.hero}
          alt="Modern Brisbane home at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/55 to-midnight/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-midnight/70 via-transparent to-transparent" />

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="container-x relative pb-14 pt-36 sm:pb-20">
        <div className="grid items-end gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.9, ease }}
              className="eyebrow text-gold-soft"
            >
              Brisbane City · Queensland
            </motion.span>

            <SplitText
              text="Property management, done properly."
              accent={[2, 3]}
              delay={1}
              className="display mt-6 text-[2.9rem] leading-[1] text-linen sm:text-7xl lg:text-8xl"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5, ease }}
              className="mt-8 max-w-lg text-base leading-relaxed text-linen/75 sm:text-lg"
            >
              We look after rental homes and investment portfolios across Brisbane — tenants, maintenance and
              reporting — so owners don&apos;t have to.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.7, ease }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button href="/contact">Get a free appraisal</Button>
              <Button href="/portfolio" variant="outline-light">
                View our work
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.9, ease }}
            className="hidden justify-self-end rounded-2xl border border-linen/15 bg-linen/10 p-6 backdrop-blur-md sm:block lg:max-w-xs"
          >
            <div className="flex gap-1 text-gold-soft" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" aria-hidden />
              ))}
            </div>
            <p className="display mt-4 text-xl leading-snug text-linen italic">
              &ldquo;{site.tagline}&rdquo;
            </p>
            <p className="mt-4 text-xs tracking-wide text-linen/55">Thomas L. Moss — Property owner</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3 }}
          className="mt-14 hidden items-center gap-3 text-xs tracking-[0.2em] text-linen/50 uppercase sm:flex"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex size-9 items-center justify-center rounded-full border border-linen/20"
          >
            <ArrowDown className="size-4" aria-hidden />
          </motion.span>
          Scroll to explore
        </motion.div>
      </motion.div>
    </section>
  );
}
