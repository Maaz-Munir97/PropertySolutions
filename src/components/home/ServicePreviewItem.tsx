import Link from "next/link";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/types/content";

type ServicePreviewItemProps = {
  service: Service;
  active: boolean;
  onActivate: () => void;
};

export default function ServicePreviewItem({ service, active, onActivate }: ServicePreviewItemProps) {
  return (
    <Link
      href={`/services#${service.slug}`}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      className="group flex items-start gap-6 py-8 sm:py-10"
    >
      <span className={clsx("pt-2 text-sm transition-colors duration-500", active ? "text-gold-soft" : "text-linen/35")}>
        {service.number}
      </span>
      <div className="flex-1">
        <h3
          className={clsx(
            "display text-3xl transition-all duration-500 ease-luxe sm:text-5xl",
            active ? "translate-x-2 text-linen" : "text-linen/50",
          )}
        >
          {service.title}
        </h3>
        <p className="mt-3 max-w-md text-linen/60">{service.summary}</p>
      </div>
      <span
        className={clsx(
          "mt-2 flex size-12 shrink-0 items-center justify-center rounded-full border transition-all duration-500",
          active ? "border-gold bg-gold text-linen" : "border-linen/20 text-linen/50",
        )}
      >
        <ArrowUpRight className="size-5" aria-hidden />
      </span>
    </Link>
  );
}
