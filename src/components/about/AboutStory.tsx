import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import StatList from "@/components/ui/StatList";
import { images } from "@/data/media";

export default function AboutStory() {
  return (
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
            Too many owners hand their property to a national agency and become a number on a portfolio report. Rent
            reviews get missed, maintenance drifts and the relationship feels transactional.
          </p>
          <p>
            We work the other way. Based in Australia, we keep our portfolio focused so every owner has a manager
            who knows the property, the tenants and the suburb — and who gives a straight answer when you ask a
            question.
          </p>
        </Reveal>
      </div>

      <div className="container-x mt-20">
        <Reveal className="relative aspect-[16/9] overflow-hidden rounded-[2rem] sm:aspect-[21/9]">
          <Image src={images.city} alt="Brisbane city skyline" fill sizes="100vw" className="object-cover" />
        </Reveal>
        <StatList variant="wide" className="mt-14" />
      </div>
    </section>
  );
}
