import { suburbs } from "@/data/company";

export default function SuburbMarquee() {
  const items = [...suburbs, ...suburbs];

  return (
    <div className="overflow-hidden border-y border-ink/10 bg-linen py-6" aria-label="Suburbs we manage in">
      <div className="animate-marquee flex w-max items-center">
        {items.map((suburb, i) => (
          <span
            key={`${suburb}-${i}`}
            aria-hidden={i >= suburbs.length}
            className="display flex items-center text-2xl text-ink/80 sm:text-3xl"
          >
            <span className="px-8">{suburb}</span>
            <span className="size-1.5 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}
