"use client";

import { motion, useScroll } from "motion/react";
import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { process } from "@/lib/content";

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });

  return (
    <section className="bg-sand/60 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              Four steps to a <em className="text-gold">hands-off</em> investment.
            </>
          }
          text="Switching managers or leasing for the first time? We make the move simple and keep you informed at every step."
        />

        <div ref={ref} className="relative mt-16 lg:mt-24">
          {/* animated progress line */}
          <div className="absolute left-5 top-0 h-full w-px bg-ink/10 lg:left-0 lg:top-5 lg:h-px lg:w-full">
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="h-full w-full origin-top bg-gold lg:hidden"
            />
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="hidden h-full w-full origin-left bg-gold lg:block"
            />
          </div>

          <ol className="grid gap-12 lg:grid-cols-4 lg:gap-8">
            {process.map((item, i) => (
              <Reveal as="li" key={item.step} delay={i * 0.1} className="relative pl-16 lg:pl-0 lg:pt-16">
                  <span className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-full border border-gold bg-ivory text-xs font-semibold text-gold">
                    {item.step}
                  </span>
                  <h3 className="display text-2xl sm:text-3xl">{item.title}</h3>
                  <p className="mt-3 max-w-xs leading-relaxed text-stone">{item.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
