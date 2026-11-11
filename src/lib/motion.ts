export const easeLuxe = [0.22, 1, 0.36, 1] as const;

export const easeCurtain = [0.76, 0, 0.24, 1] as const;

export const springPill = { type: "spring", stiffness: 380, damping: 32 } as const;

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
