"use client";

import type { ImageLoaderProps } from "next/image";

/**
 * Unsplash is already an image CDN, so let it resize directly instead of
 * proxying every photo through the Next.js optimizer. Local images pass through.
 */
export default function imageLoader({ src, width, quality }: ImageLoaderProps) {
  if (!src.startsWith("https://images.unsplash.com")) return src;
  const url = new URL(src);
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "crop");
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality ?? 75));
  return url.toString();
}
