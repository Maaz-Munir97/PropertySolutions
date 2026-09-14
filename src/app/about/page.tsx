import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import SectionHeading from "@/components/ui/SectionHeading";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/ui/CtaBanner";
import { images, stats, suburbs, values } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "A local Brisbane property management team — professional and down to earth.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Local people, looking after local property."
        accent={[4, 5]}
        text="Property Solutions QLD was built on a simple idea: owners deserve a manager who picks up the phone and knows their street."
        image={images.about}
      />

      <section className="py-24 sm:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <span className="eyebrow text-gold">Our story</span>
            <h2 className="display mt-5 text-4xl leading-[1.08] sm:text-5xl">
              Professional where it counts. <em className="text-gold">Down to earth</em> everywhere else.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-stone">
            <p>
              Too many owners hand their property to a national agency and become a number on a portfolio report.
              Rent reviews get missed, maintenance drifts and the relationship feels transactional.
            </p>
            <p>
              We work the other way. Based in Brisbane City, we keep our portfolio focused so every owner has a
              manager who knows the property, the tenants and the suburb — and who gives a straight answer when
              you ask a question.
            </p>
          </Reveal>
        </div>

        <div className="container-x mt-20">
          <Reveal className="relative aspect-[16/9] overflow-hidden rounded-[2rem] sm:aspect-[21/9]">
            <Image src={images.city} alt="Brisbane city skyline" fill sizes="100vw" className="object-cover" />
          </Reveal>
          <dl className="mt-14 grid grid-cols-2 gap-10 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08} className="flex flex-col-reverse border-t border-ink/10 pt-6">
                <dt className="mt-2 text-sm text-stone">{stat.label}</dt>
                <dd className="display text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

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
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 0.1}
                className="group rounded-3xl border border-linen/10 bg-linen/[0.03] p-8 transition-colors duration-500 hover:border-gold/50 hover:bg-linen/[0.06] sm:p-10"
              >
                <span className="display text-5xl text-gold-soft/70">0{i + 1}</span>
                <h3 className="display mt-8 text-3xl">{v.title}</h3>
                <p className="mt-4 leading-relaxed text-linen/60">{v.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20">
            <p className="text-xs font-semibold tracking-[0.2em] text-linen/40 uppercase">Suburbs we know well</p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {suburbs.map((s) => (
                <li key={s} className="rounded-full border border-linen/15 px-4 py-2 text-sm text-linen/80">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Testimonials />
      <CtaBanner />
    </>
  );
}
