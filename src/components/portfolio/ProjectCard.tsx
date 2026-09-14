import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Bath, BedDouble } from "lucide-react";
import clsx from "clsx";
import type { Project } from "@/lib/content";

type ProjectCardProps = {
  project: Project;
  className?: string;
  sizes?: string;
  tall?: boolean;
};

export default function ProjectCard({ project, className, sizes = "(min-width: 1024px) 33vw, 100vw", tall }: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${project.slug}`} className={clsx("group block", className)}>
      <div className={clsx("relative overflow-hidden rounded-3xl bg-sand", tall ? "aspect-[3/4]" : "aspect-[4/3]")}>
        <Image
          src={project.image}
          alt={`${project.title} in ${project.suburb}`}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-[1.4s] ease-luxe group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-100" />

        <span className="absolute left-5 top-5 rounded-full bg-linen/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
          {project.category}
        </span>
        <span className="absolute right-5 top-5 flex size-11 scale-75 items-center justify-center rounded-full bg-gold text-linen opacity-0 transition-all duration-500 ease-luxe group-hover:scale-100 group-hover:opacity-100">
          <ArrowUpRight className="size-5" aria-hidden />
        </span>

        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-linen">
          <span className="rounded-full border border-linen/30 bg-midnight/30 px-3 py-1 text-xs backdrop-blur">
            {project.result}
          </span>
          {project.beds && (
            <span className="flex items-center gap-3 text-xs text-linen/85">
              <span className="flex items-center gap-1">
                <BedDouble className="size-4" aria-hidden /> {project.beds}
              </span>
              <span className="flex items-center gap-1">
                <Bath className="size-4" aria-hidden /> {project.baths}
              </span>
            </span>
          )}
        </div>
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="display text-2xl transition-colors duration-500 group-hover:text-gold">{project.title}</h3>
        <span className="text-sm text-stone">{project.suburb}</span>
      </div>
    </Link>
  );
}
