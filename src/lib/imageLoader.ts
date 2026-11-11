"use client";

import type { ImageLoaderProps } from "next/image";

const UNSPLASH_HOST = "https://images.unsplash.com";
const DEFAULT_QUALITY = 75;

export default function imageLoader({ src, width, quality }: ImageLoaderProps) {
  if (!src.startsWith(UNSPLASH_HOST)) return src;
  const url = new URL(src);
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "crop");
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality ?? DEFAULT_QUALITY));
  return url.toString();
}
