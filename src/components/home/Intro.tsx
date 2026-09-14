import Image from "next/image";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { images, stats } from "@/lib/content";

export default function Intro() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-x grid gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image src={images.interior} alt="Bright, styled living room" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-8 right-4 w-1/2 overflow-hidden rounded-2xl border-8 border-ivory sm:-right-8">
            <div className="relative aspect-square">
              <Image src={images.living} alt="Modern kitchen and dining area" fill sizes="25vw" className="object-cover" />
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col justify-center">
          <Reveal>
            <span className="eyebrow text-gold">Who we are</span>
            <h2 className="display mt-5 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
              Brisbane isn&apos;t one market. <em className="text-gold">It&apos;s a dozen.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-lg leading-relaxed text-stone">
              Rents, vacancy and buyer demand shift suburb by suburb — what holds true in New Farm rarely holds in
              Ipswich. Being based in Brisbane City means we watch the streets our owners actually hold property in,
              not run reports from interstate.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Button href="/about" variant="outline" className="mt-10 self-start">
              Our story
            </Button>
          </Reveal>

          <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-ink/10 pt-10">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={0.1 * i}>
                <dt className="text-xs font-semibold tracking-[0.18em] text-stone uppercase">{stat.label}</dt>
                <dd className="display mt-2 text-4xl text-ink sm:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
