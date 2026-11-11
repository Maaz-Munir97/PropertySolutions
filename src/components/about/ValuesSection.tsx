import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { suburbs, values } from "@/data/company";

export default function ValuesSection() {
  return (
    <section className="grain relative overflow-hidden bg-midnight py-24 text-linen sm:py-32">
      <div className="container-x relative">
        <SectionHeading
          light
          eyebrow="What we stand for"
          title={
            <>
              The way we <em className="text-gold-soft">work.</em>
            </>
          }
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {values.map((value, i) => (
            <Reveal
              key={value.title}
              delay={i * 0.1}
              className="group rounded-3xl border border-linen/10 bg-linen/[0.03] p-8 transition-colors duration-500 hover:border-gold/50 hover:bg-linen/[0.06] sm:p-10"
            >
              <span className="display text-5xl text-gold-soft/70">0{i + 1}</span>
              <h3 className="display mt-8 text-3xl">{value.title}</h3>
              <p className="mt-4 leading-relaxed text-linen/60">{value.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <p className="text-xs font-semibold tracking-[0.2em] text-linen/40 uppercase">Suburbs we know well</p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {suburbs.map((suburb) => (
              <li key={suburb} className="rounded-full border border-linen/15 px-4 py-2 text-sm text-linen/80">
                {suburb}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
