import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import type { Project } from "@/types/content";

export default function ProjectGallery({ project }: { project: Project }) {
  return (
    <div className="mt-24 grid gap-6 sm:grid-cols-2">
      {project.gallery.map((src, i) => (
        <Reveal key={src} delay={i * 0.1} className={i === 0 ? "sm:translate-y-12" : undefined}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src={src}
              alt={`${project.title} interior ${i + 1}`}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      ))}
    </div>
  );
}
