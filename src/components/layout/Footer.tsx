import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { nav, site } from "@/data/site";
import FooterColumn from "./FooterColumn";
import Logo from "./Logo";

const linkClass = "transition-colors hover:text-gold-soft";

export default function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-midnight text-linen">
      <div className="container-x relative pt-20 sm:pt-28">
        <div className="flex flex-col justify-between gap-10 border-b border-linen/10 pb-16 lg:flex-row lg:items-end">
          <h2 className="display max-w-2xl text-4xl leading-[1.05] sm:text-6xl">
            Let&apos;s make your property <em className="text-gold-soft">work harder.</em>
          </h2>
          <Link
            href="/contact"
            className="group flex size-36 shrink-0 items-center justify-center rounded-full bg-gold text-center text-sm font-semibold transition-transform duration-700 ease-luxe hover:scale-105 sm:size-44"
          >
            <span className="flex flex-col items-center gap-2">
              Book a free
              <br />
              appraisal
              <ArrowUpRight className="size-5 transition-transform duration-500 group-hover:rotate-45" aria-hidden />
            </span>
          </Link>
        </div>

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-linen/55">{site.tagline}</p>
          </div>

          <FooterColumn title="Explore">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Services">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services#${service.slug}`} className={linkClass}>
                  {service.title}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Visit">
            <li>
              <a href={site.phoneHref} className={linkClass}>
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className={`${linkClass} break-all`}>
                {site.email}
              </a>
            </li>
            <li>{site.address}</li>
            <li>{site.hours}</li>
          </FooterColumn>
        </div>

        <div className="flex flex-col gap-3 border-t border-linen/10 py-8 text-xs text-linen/40 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Concept website · fictional company created for portfolio purposes</p>
        </div>
      </div>

      <p
        aria-hidden
        className="display pointer-events-none -mb-[0.22em] text-center text-[19vw] leading-none whitespace-nowrap text-linen/[0.04] select-none"
      >
        Click&amp;Get
      </p>
    </footer>
  );
}
