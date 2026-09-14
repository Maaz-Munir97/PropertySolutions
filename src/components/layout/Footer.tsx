import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { nav, services, site } from "@/lib/content";
import Logo from "./Logo";

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

          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-linen/40 uppercase">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-linen/75 transition-colors hover:text-gold-soft">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-linen/40 uppercase">Services</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`} className="text-linen/75 transition-colors hover:text-gold-soft">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-linen/40 uppercase">Visit</h3>
            <ul className="mt-5 space-y-3 text-sm text-linen/75">
              <li>
                <a href={site.phoneHref} className="transition-colors hover:text-gold-soft">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="break-all transition-colors hover:text-gold-soft">
                  {site.email}
                </a>
              </li>
              <li>{site.address}</li>
              <li>{site.hours}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-linen/10 py-8 text-xs text-linen/40 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Demo site — built as a preview</p>
        </div>
      </div>

      <p
        aria-hidden
        className="display pointer-events-none -mb-[0.22em] select-none whitespace-nowrap text-center text-[19vw] leading-none text-linen/[0.04]"
      >
        Brisbane
      </p>
    </footer>
  );
}
