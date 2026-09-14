import Image from "next/image";
import Button from "./Button";
import Reveal from "./Reveal";
import { images, site } from "@/lib/content";

export default function CtaBanner({ title = "Curious what your property could earn?" }: { title?: string }) {
  return (
    <section className="pb-24 sm:pb-32">
      <div className="container-x">
        <Reveal className="grain relative overflow-hidden rounded-[2rem] bg-midnight px-6 py-16 text-linen sm:px-14 sm:py-24">
          <Image src={images.city} alt="" fill sizes="100vw" className="object-cover opacity-20" />
          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="eyebrow text-gold-soft">Free, no-obligation</span>
              <h2 className="display mt-5 max-w-2xl text-4xl leading-[1.08] sm:text-5xl">{title}</h2>
              <p className="mt-5 max-w-lg text-linen/65">
                Get an honest rental appraisal from a local Brisbane manager — a straight answer, not a sales pitch.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact">Book an appraisal</Button>
              <Button href={site.phoneHref} variant="outline-light" icon={false}>
                {site.phone}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
