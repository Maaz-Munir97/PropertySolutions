import Link from "next/link";
import clsx from "clsx";
import { site } from "@/data/site";
import LogoMark from "./LogoMark";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={clsx("group flex items-center gap-3 text-linen", className)}
    >
      <span className="relative flex size-10 items-center justify-center rounded-full border border-gold/60 transition-colors duration-500 group-hover:bg-gold">
        <LogoMark className="size-5" />
      </span>
      <span className="leading-none">
        <span className="display block text-xl tracking-tight">{site.shortName}</span>
        <span className="mt-1 block text-[0.58rem] font-semibold tracking-[0.3em] text-gold-soft">
          {site.wordmarkSub}
        </span>
      </span>
    </Link>
  );
}
