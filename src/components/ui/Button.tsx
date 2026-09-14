import Link from "next/link";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "dark" | "outline" | "outline-light";
  className?: string;
  icon?: boolean;
};

const variants = {
  gold: "bg-gold text-linen hover:bg-ink",
  dark: "bg-ink text-linen hover:bg-gold",
  outline: "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-linen",
  "outline-light": "border border-linen/30 text-linen hover:border-linen hover:bg-linen hover:text-ink",
};

export default function Button({ href, children, variant = "gold", className, icon = true }: ButtonProps) {
  const external = href.startsWith("tel:") || href.startsWith("mailto:");
  const classes = clsx(
    "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-500 ease-luxe",
    variants[variant],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          className="size-4 transition-transform duration-500 ease-luxe group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      )}
    </>
  );

  return external ? (
    <a href={href} className={classes}>
      {content}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
