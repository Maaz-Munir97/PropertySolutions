import Link from "next/link";
import clsx from "clsx";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={clsx("group flex items-center gap-3 text-linen", className)} aria-label="Property Solutions QLD — home">
      <span className="relative flex size-10 items-center justify-center rounded-full border border-gold/60 transition-colors duration-500 group-hover:bg-gold">
        <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
          <path d="M3 11.5 12 4l9 7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.5 10v9.5h13V10" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M10 19.5v-5h4v5" stroke="#d9bf92" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="leading-none">
        <span className="display block text-lg tracking-tight">Property Solutions</span>
        <span className="mt-1 block text-[0.62rem] font-semibold tracking-[0.35em] text-gold-soft">QUEENSLAND</span>
      </span>
    </Link>
  );
}
