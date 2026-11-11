import { Clock, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/data/site";

type Detail = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
};

const details: Detail[] = [
  { icon: Phone, label: "Call us", value: site.phone, href: site.phoneHref },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Office", value: site.address },
  { icon: Clock, label: "Hours", value: site.hours },
];

export default function ContactDetails() {
  return (
    <ul className="mt-12 space-y-4">
      {details.map(({ icon: Icon, label, value, href }, i) => (
        <Reveal
          as="li"
          key={label}
          delay={i * 0.08}
          className="flex items-center gap-5 rounded-2xl border border-ink/10 p-5 transition-colors duration-500 hover:border-gold/50 hover:bg-linen"
        >
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-midnight text-gold-soft">
            <Icon className="size-5" aria-hidden />
          </span>
          <span className="min-w-0">
            <span className="block text-xs font-semibold tracking-[0.16em] text-stone uppercase">{label}</span>
            {href ? (
              <a href={href} className="mt-1 block font-medium break-words transition-colors hover:text-gold">
                {value}
              </a>
            ) : (
              <span className="mt-1 block font-medium">{value}</span>
            )}
          </span>
        </Reveal>
      ))}
    </ul>
  );
}
