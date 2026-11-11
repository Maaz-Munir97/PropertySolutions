export default function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path d="M3 11.5 12 4l9 7.5" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 10v9.5h13V10" stroke="currentColor" strokeWidth={1.4} strokeLinejoin="round" />
      <path
        d="M7.5 16.5c1.5-1.2 3-1.2 4.5 0s3 1.2 4.5 0"
        stroke="var(--color-gold-soft)"
        strokeWidth={1.4}
        strokeLinecap="round"
      />
    </svg>
  );
}
