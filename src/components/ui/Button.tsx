import Link from "next/link";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";

type ButtonVariant = "gold" | "dark" | "outline" | "outline-light";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  icon?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  gold: "bg-gold text-linen hover:bg-ink",
  dark: "bg-ink text-linen hover:bg-gold",
  outline: "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-linen",
  "outline-light": "border border-linen/30 text-linen hover:border-linen hover:bg-linen hover:text-ink",
};

const baseClass =
  "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-500 ease-luxe";

const isExternal = (href: string) => href.startsWith("tel:") || href.startsWith("mailto:");

export default function Button({ href, children, variant = "gold", className, icon = true }: ButtonProps) {
  const classes = clsx(baseClass, variants[variant], className);

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

  if (isExternal(href)) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
