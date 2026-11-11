import { Bath, BedDouble, MapPin } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import type { Project } from "@/types/content";

function FactRow({ label, children, last }: { label: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div className={last ? "flex items-center justify-between border-b border-ink/10 pb-8" : "flex items-center justify-between"}>
      <dt className="text-stone">{label}</dt>
      <dd className="flex items-center gap-2 font-medium">{children}</dd>
    </div>
  );
}

export default function ProjectFacts({ project }: { project: Project }) {
  return (
    <Reveal>
      <dl className="space-y-5 border-t border-ink/10 pt-8 text-sm">
        <FactRow label="Location">
          <MapPin className="size-4 text-gold" aria-hidden /> {project.suburb}, QLD
        </FactRow>
        <FactRow label="Type">{project.category}</FactRow>
        {project.beds && (
          <FactRow label="Layout">
            <span className="flex items-center gap-1.5">
              <BedDouble className="size-4 text-gold" aria-hidden /> {project.beds} bed
            </span>
            <span className="ml-2 flex items-center gap-1.5">
              <Bath className="size-4 text-gold" aria-hidden /> {project.baths} bath
            </span>
          </FactRow>
        )}
        <FactRow label="Result" last>
          <span className="text-gold">{project.result}</span>
        </FactRow>
      </dl>
    </Reveal>
  );
}
