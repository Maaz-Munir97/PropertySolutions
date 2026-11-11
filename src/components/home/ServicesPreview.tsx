"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import ServicePreviewImage from "./ServicePreviewImage";
import ServicePreviewItem from "./ServicePreviewItem";

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
                <ServicePreviewItem service={service} active={active === i} onActivate={() => setActive(i)} />
              </Reveal>
            ))}
          </ul>

          <ServicePreviewImage service={services[active]} />
        </div>
      </div>
    </section>
  );
}
