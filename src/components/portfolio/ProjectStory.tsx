import { Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import type { Project } from "@/types/content";

export default function ProjectStory({ project }: { project: Project }) {
  return (
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
  );
}
