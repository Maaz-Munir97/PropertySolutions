import Reveal from "@/components/ui/Reveal";
import type { Outcome } from "@/types/content";

export default function ProjectOutcomes({ outcomes }: { outcomes: Outcome[] }) {
  return (
    <Reveal className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-3">
      {outcomes.map((outcome) => (
        <div key={outcome.label} className="bg-linen p-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-stone uppercase">{outcome.label}</p>
          <p className="display mt-3 text-5xl text-ink">{outcome.value}</p>
        </div>
      ))}
    </Reveal>
  );
}
