import clsx from "clsx";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  light?: boolean;
  align?: "left" | "split";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
  align = "split",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "grid gap-6",
        align === "split" && "lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16",
        className,
      )}
    >
      <Reveal>
        <span className={clsx("eyebrow", light ? "text-gold-soft" : "text-gold")}>{eyebrow}</span>
        <h2
          className={clsx(
            "display mt-5 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl",
            light ? "text-linen" : "text-ink",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {text && (
        <Reveal delay={0.1}>
          <p className={clsx("max-w-md text-base leading-relaxed sm:text-lg", light ? "text-linen/65" : "text-stone")}>
            {text}
          </p>
        </Reveal>
      )}
    </div>
  );
}
