import Image from "next/image";
import clsx from "clsx";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import type { Service } from "@/types/content";

type ServiceDetailProps = {
  service: Service;
  reversed: boolean;
};

export default function ServiceDetail({ service, reversed }: ServiceDetailProps) {
  return (
    <article id={service.slug} className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-20">
      <Reveal className={clsx(reversed && "lg:order-2")}>
        <div className="relative aspect-[5/4] overflow-hidden rounded-3xl">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <span className="display absolute top-4 left-6 text-8xl text-linen/90 drop-shadow-lg">{service.number}</span>
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
  );
}
