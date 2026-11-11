"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Button from "@/components/ui/Button";
import SplitText from "@/components/ui/SplitText";
import { images } from "@/data/media";
import { easeLuxe } from "@/lib/motion";
import HeroTestimonial from "./HeroTestimonial";
import ScrollCue from "./ScrollCue";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay, ease: easeLuxe },
  });

  return (
    <section ref={ref} className="grain relative flex min-h-svh items-end overflow-hidden bg-midnight">
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        initial={{ clipPath: "inset(12% 12% 12% 12% round 24px)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0% round 0px)" }}
        transition={{ duration: 1.6, ease: easeLuxe }}
        className="absolute inset-0"
      >
        <Image src={images.hero} alt="Modern Brisbane home at dusk" fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/55 to-midnight/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-midnight/70 via-transparent to-transparent" />

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="container-x relative pt-36 pb-14 sm:pb-20">
        <div className="grid items-end gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.9, ease: easeLuxe }}
              className="eyebrow text-gold-soft"
            >
              Australia
            </motion.span>

            <SplitText
              text="Property management, done properly."
              accent={[2, 3]}
              delay={1}
              className="display mt-6 text-[2.9rem] leading-[1] text-linen sm:text-7xl lg:text-8xl"
            />

            <motion.p {...fadeUp(1.5)} className="mt-8 max-w-lg text-base leading-relaxed text-linen/75 sm:text-lg">
              We look after rental homes and investment portfolios across Australia — tenants, maintenance and reporting
              — so owners don&apos;t have to.
            </motion.p>

            <motion.div {...fadeUp(1.7)} className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/contact">Get a free appraisal</Button>
              <Button href="/portfolio" variant="outline-light">
                View our work
              </Button>
            </motion.div>
          </div>

          <HeroTestimonial />
        </div>

        <ScrollCue />
      </motion.div>
    </section>
  );
}
