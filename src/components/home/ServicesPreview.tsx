"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/lib/content";

export default function ServicesPreview() {
  const [active, setActive] = useState(0);

  return (
    <section className="grain relative overflow-hidden bg-midnight py-24 text-linen sm:py-32">
      <div className="container-x relative">
        <SectionHeading
          light
          eyebrow="What we handle"
          title={
            <>
              Everything between owning a property and it <em className="text-gold-soft">running itself.</em>
            </>
          }
          text="Three areas of work, one point of contact — so nothing falls between tenants, trades and paperwork."
        />

        <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <ul className="border-t border-linen/10">
            {services.map((service, i) => (
              <Reveal as="li" key={service.slug} delay={i * 0.08} className="border-b border-linen/10">
                  <Link
                    href={`/services#${service.slug}`}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="group flex items-start gap-6 py-8 sm:py-10"
                  >
                    <span
                      className={clsx(
                        "pt-2 text-sm transition-colors duration-500",
                        active === i ? "text-gold-soft" : "text-linen/35",
                      )}
                    >
                      {service.number}
                    </span>
                    <div className="flex-1">
                      <h3
                        className={clsx(
                          "display text-3xl transition-all duration-500 ease-luxe sm:text-5xl",
                          active === i ? "translate-x-2 text-linen" : "text-linen/50",
                        )}
                      >
                        {service.title}
                      </h3>
                      <p className="mt-3 max-w-md text-linen/60">{service.summary}</p>
                    </div>
                    <span
                      className={clsx(
                        "mt-2 flex size-12 shrink-0 items-center justify-center rounded-full border transition-all duration-500",
                        active === i ? "border-gold bg-gold text-linen" : "border-linen/20 text-linen/50",
                      )}
                    >
                      <ArrowUpRight className="size-5" aria-hidden />
                    </span>
                  </Link>
              </Reveal>
            ))}
          </ul>

          <div className="relative hidden aspect-[4/5] overflow-hidden rounded-3xl lg:block">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={services[active].image}
                  alt={services[active].title}
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-midnight/90 to-transparent p-8">
              <ul className="space-y-2 text-sm text-linen/80">
                {services[active].points.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <span className="h-px w-4 bg-gold-soft" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
