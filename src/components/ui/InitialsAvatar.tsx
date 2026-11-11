import clsx from "clsx";
import { initialsOf } from "@/lib/initials";

export default function InitialsAvatar({ name, className }: { name: string; className?: string }) {
  return (
    <span
      aria-hidden
      className={clsx(
        "display flex size-14 shrink-0 items-center justify-center rounded-full bg-midnight text-lg text-gold-soft",
        className,
      )}
    >
      {initialsOf(name)}
    </span>
  );
}
