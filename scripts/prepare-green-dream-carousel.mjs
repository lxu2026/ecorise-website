import path from "path";
import { processPhoto, ASSETS } from "./lib/process-photo.mjs";

const PUBLIC = "C:\\ecorise-website\\public\\images\\green-dream";

/**
 * High-res Award Ceremony originals (copied into assets from Drive).
 * Frame is CSS aspect-[4/3] + object-cover — keep full groups in the
 * bitmap; avoid aggressive side crops that shrink subjects.
 */
const slides = [
  {
    // 2700×1520 (~16:9) — object-cover crops wall/carpet, keeps full group width
    input: path.join(ASSETS, "greendream-01-hires.jpg"),
    out: "hero-carousel-1.jpg",
    width: 2700,
    height: 1520,
    position: "centre",
  },
  {
    // Native 4:3
    input: path.join(ASSETS, "greendream-51-hires.jpg"),
    out: "hero-carousel-2.jpg",
    width: 2700,
    height: 2025,
    position: "centre",
  },
  {
    // Native ~4:3 camera original — downscale for web, stay 2400px+
    input: path.join(ASSETS, "IMG_5324-hires.jpg"),
    out: "hero-carousel-3.jpg",
    width: 2800,
    height: 2100,
    position: "north",
  },
];

console.log("Preparing Green Dream hero carousel photos (high-res)…\n");

for (const slide of slides) {
  await processPhoto({
    ...slide,
    out: path.join(PUBLIC, slide.out),
  });
}

console.log("\nDone.");
