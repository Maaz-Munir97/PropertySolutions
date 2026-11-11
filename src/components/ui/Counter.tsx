"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { easeLuxe } from "@/lib/motion";

type CounterProps = {
  value: number;
  suffix?: string;
};

const format = (n: number, suffix: string) => `${Math.round(n).toLocaleString("en-AU")}${suffix}`;

export default function Counter({ value, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    const node = ref.current;
    if (!inView || !node) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: easeLuxe,
      onUpdate: (v) => {
        node.textContent = format(v, suffix);
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix]);

  return <span ref={ref}>{format(0, suffix)}</span>;
}
