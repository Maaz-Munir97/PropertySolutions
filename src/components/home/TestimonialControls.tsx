import clsx from "clsx";
import { ArrowLeft, ArrowRight } from "lucide-react";

type TestimonialControlsProps = {
  count: number;
  index: number;
  onSelect: (index: number) => void;
  onPrevious: () => void;
  onNext: () => void;
};

const arrowClass =
  "flex size-12 items-center justify-center rounded-full border border-ink/15 transition-colors hover:bg-ink hover:text-linen";

export default function TestimonialControls({ count, index, onSelect, onPrevious, onNext }: TestimonialControlsProps) {
  return (
    <div className="mt-12 flex items-center justify-between gap-6">
      <div className="flex gap-2">
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onSelect(i)}
            aria-label={`Show testimonial ${i + 1}`}
            aria-current={i === index}
            className={clsx(
              "h-1.5 rounded-full transition-all duration-500",
              i === index ? "w-10 bg-gold" : "w-4 bg-ink/15 hover:bg-ink/30",
            )}
          />
        ))}
      </div>
      <div className="flex gap-3">
        <button type="button" onClick={onPrevious} aria-label="Previous testimonial" className={arrowClass}>
          <ArrowLeft className="size-5" aria-hidden />
        </button>
        <button type="button" onClick={onNext} aria-label="Next testimonial" className={arrowClass}>
          <ArrowRight className="size-5" aria-hidden />
        </button>
      </div>
    </div>
  );
}
