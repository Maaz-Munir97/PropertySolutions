import clsx from "clsx";

type MenuToggleProps = {
  open: boolean;
  onToggle: () => void;
};

const barClass = "absolute h-px w-5 bg-linen transition-transform duration-500 ease-luxe";

export default function MenuToggle({ open, onToggle }: MenuToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className="relative flex size-11 items-center justify-center rounded-full border border-linen/20 lg:hidden"
    >
      <span className={clsx(barClass, open ? "rotate-45" : "-translate-y-1")} />
      <span className={clsx(barClass, open ? "-rotate-45" : "translate-y-1")} />
    </button>
  );
}
