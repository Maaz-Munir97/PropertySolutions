import type { Metadata } from "next";
import Image from "next/image";
import clsx from "clsx";
import { Check } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CtaBanner from "@/components/ui/CtaBanner";
import Process from "@/components/home/Process";
import { images, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: "Property management, asset oversight and investment advisory for Brisbane owners.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="One team for every part of owning property."
        accent={[5, 6]}
        text="Whether you own one apartment or a growing portfolio, we handle the detail so your property keeps performing."
        image={images.office}
      />

      <section className="py-20 sm:py-28">
        <div className="container-x space-y-24 sm:space-y-32">
          {services.map((service, i) => (
            <article
              key={service.slug}
              id={service.slug}
              className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-20"
            >
              <Reveal className={clsx(i % 2 === 1 && "lg:order-2")}>
                <div className="relative aspect-[5/4] overflow-hidden rounded-3xl">
                  <Image src={service.image} alt={service.title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                  <span className="display absolute left-6 top-4 text-8xl text-linen/90 drop-shadow-lg">{service.number}</span>
                </div>
              </Reveal>

              <div>
                <Reveal>
                  <span className="eyebrow text-gold">Service {service.number}</span>
                  <h2 className="display mt-5 text-4xl sm:text-5xl">{service.title}</h2>
                  <p className="mt-6 text-lg leading-relaxed text-stone">{service.description}</p>
                </Reveal>
                <Reveal delay={0.1}>
                  <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 rounded-2xl border border-ink/10 bg-linen p-4 text-sm">
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                          <Check className="size-3.5" aria-hidden />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact" variant="dark" className="mt-10">
                    Enquire about this service
                  </Button>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Process />
      <div className="pt-24 sm:pt-32">
        <CtaBanner />
      </div>
    </>
  );
}
