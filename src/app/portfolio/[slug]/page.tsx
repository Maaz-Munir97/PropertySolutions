import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import ProjectFacts from "@/components/portfolio/ProjectFacts";
import ProjectGallery from "@/components/portfolio/ProjectGallery";
import ProjectOutcomes from "@/components/portfolio/ProjectOutcomes";
import ProjectStory from "@/components/portfolio/ProjectStory";
import RelatedProjects from "@/components/portfolio/RelatedProjects";
import CtaBanner from "@/components/ui/CtaBanner";
import PageHero from "@/components/ui/PageHero";
import { findProjectIndex, projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

const RELATED_COUNT = 2;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[findProjectIndex(slug)];
  return project ? { title: `${project.title}, ${project.suburb}`, description: project.summary } : {};
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = findProjectIndex(slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, RELATED_COUNT);

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
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-stone transition-colors hover:text-gold"
          >
            <ArrowLeft className="size-4" aria-hidden /> All projects
          </Link>

          <ProjectOutcomes outcomes={project.outcomes} />

          <div className="mt-20 grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <ProjectFacts project={project} />
            <ProjectStory project={project} />
          </div>

          <ProjectGallery project={project} />
        </div>
      </section>

      <RelatedProjects next={next} related={related} />
      <CtaBanner />
    </>
  );
}
