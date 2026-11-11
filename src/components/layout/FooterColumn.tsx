type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

export default function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-xs font-semibold tracking-[0.2em] text-linen/40 uppercase">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm text-linen/75">{children}</ul>
    </div>
  );
}
