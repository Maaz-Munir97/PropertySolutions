import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Bath, BedDouble, Check, MapPin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import CtaBanner from "@/components/ui/CtaBanner";
import ProjectCard from "@/components/portfolio/ProjectCard";
import { projects } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return project ? { title: `${project.title}, ${project.suburb}`, description: project.summary } : {};
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={`${project.category} · ${project.suburb}`}
        title={project.title}
        accent={[project.title.split(" ").length - 1]}
        text={project.summary}
        image={project.image}
      />

      <section className="py-20 sm:py-28">
        <div className="container-x">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-stone transition-colors hover:text-gold">
            <ArrowLeft className="size-4" aria-hidden /> All projects
          </Link>

          {/* Key facts */}
          <Reveal className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-3">
            {project.outcomes.map((o) => (
              <div key={o.label} className="bg-linen p-8">
                <p className="text-xs font-semibold tracking-[0.18em] text-stone uppercase">{o.label}</p>
                <p className="display mt-3 text-5xl text-ink">{o.value}</p>
              </div>
            ))}
          </Reveal>

          <div className="mt-20 grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <Reveal>
              <dl className="space-y-5 border-t border-ink/10 pt-8 text-sm">
                <div className="flex items-center justify-between">
                  <dt className="text-stone">Location</dt>
                  <dd className="flex items-center gap-2 font-medium">
                    <MapPin className="size-4 text-gold" aria-hidden /> {project.suburb}, QLD
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-stone">Type</dt>
                  <dd className="font-medium">{project.category}</dd>
                </div>
                {project.beds && (
                  <div className="flex items-center justify-between">
                    <dt className="text-stone">Layout</dt>
                    <dd className="flex items-center gap-4 font-medium">
                      <span className="flex items-center gap-1.5">
                        <BedDouble className="size-4 text-gold" aria-hidden /> {project.beds} bed
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Bath className="size-4 text-gold" aria-hidden /> {project.baths} bath
                      </span>
                    </dd>
                  </div>
                )}
                <div className="flex items-center justify-between border-b border-ink/10 pb-8">
                  <dt className="text-stone">Result</dt>
                  <dd className="font-medium text-gold">{project.result}</dd>
                </div>
              </dl>
            </Reveal>

            <div className="space-y-14">
              <Reveal>
                <span className="eyebrow text-gold">The challenge</span>
                <p className="display mt-5 text-3xl leading-snug sm:text-4xl">{project.challenge}</p>
              </Reveal>
              <Reveal>
                <span className="eyebrow text-gold">Our approach</span>
                <ul className="mt-6 space-y-4">
                  {project.approach.map((step) => (
                    <li key={step} className="flex items-start gap-4 text-lg text-stone">
                      <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                        <Check className="size-3.5" aria-hidden />
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>

          {/* Gallery */}
          <div className="mt-24 grid gap-6 sm:grid-cols-2">
            {project.gallery.map((src, i) => (
              <Reveal key={src} delay={i * 0.1} className={i === 0 ? "sm:translate-y-12" : ""}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                  <Image src={src} alt={`${project.title} interior ${i + 1}`} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="border-t border-ink/10 py-20 sm:py-28">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="display text-4xl sm:text-5xl">More of our work</h2>
            <Link href={`/portfolio/${next.slug}`} className="text-sm font-semibold text-gold hover:underline">
              Next project: {next.title} →
            </Link>
          </div>
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {related.map((p) => (
              <ProjectCard key={p.slug} project={p} sizes="(min-width: 640px) 50vw, 100vw" />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
