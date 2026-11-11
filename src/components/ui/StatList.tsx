import clsx from "clsx";
import { stats } from "@/data/company";
import Counter from "./Counter";
import Reveal from "./Reveal";

type StatListProps = {
  variant?: "compact" | "wide";
  className?: string;
};

export default function StatList({ variant = "compact", className }: StatListProps) {
  const wide = variant === "wide";

  return (
    <dl className={clsx("grid", wide ? "grid-cols-2 gap-10 lg:grid-cols-4" : "grid-cols-2 gap-x-8 gap-y-10", className)}>
      {stats.map((stat, i) => (
        <Reveal
          key={stat.label}
          delay={(wide ? 0.08 : 0.1) * i}
          className={clsx(wide && "flex flex-col-reverse border-t border-ink/10 pt-6")}
        >
          <dt className={clsx(wide ? "mt-2 text-sm text-stone" : "text-xs font-semibold tracking-[0.18em] text-stone uppercase")}>
            {stat.label}
          </dt>
          <dd className={clsx("display", wide ? "text-5xl" : "mt-2 text-4xl text-ink sm:text-5xl")}>
            <Counter value={stat.value} suffix={stat.suffix} />
          </dd>
        </Reveal>
      ))}
    </dl>
  );
}
