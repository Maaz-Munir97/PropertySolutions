import Link from "next/link";
import type { Project } from "@/types/content";
import ProjectCard from "./ProjectCard";

type RelatedProjectsProps = {
  next: Project;
  related: Project[];
};

export default function RelatedProjects({ next, related }: RelatedProjectsProps) {
  return (
    <section className="border-t border-ink/10 py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="display text-4xl sm:text-5xl">More of our work</h2>
          <Link href={`/portfolio/${next.slug}`} className="text-sm font-semibold text-gold hover:underline">
            Next project: {next.title} →
          </Link>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {related.map((project) => (
            <ProjectCard key={project.slug} project={project} sizes="(min-width: 640px) 50vw, 100vw" />
          ))}
        </div>
      </div>
    </section>
  );
}
