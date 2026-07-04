"use client";

import { missionCarouselPhotos } from "@/lib/site-photos";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export function MissionPhotoCarousel() {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const photoCount = missionCarouselPhotos.length;

  const goTo = useCallback(
    (nextIndex: number) => {
      setIndex((nextIndex + photoCount) % photoCount);
    },
    [photoCount],
  );

  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % photoCount);
    }, 5500);

    return () => window.clearInterval(timer);
  }, [photoCount, prefersReducedMotion]);

  const currentPhoto = missionCarouselPhotos[index];

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-200 shadow-[0_12px_40px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/80">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentPhoto.src}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            fill
            priority={index === 0}
            quality={95}
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </AnimatePresence>

      <button
        type="button"
        onClick={goPrev}
        aria-label="Previous photo"
        className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-xl text-slate-700 shadow-md backdrop-blur-sm transition hover:bg-white sm:left-4 sm:h-11 sm:w-11"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Next photo"
        className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-xl text-slate-700 shadow-md backdrop-blur-sm transition hover:bg-white sm:right-4 sm:h-11 sm:w-11"
      >
        ›
      </button>

      <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2">
        {missionCarouselPhotos.map((photo, dotIndex) => (
          <button
            key={photo.src}
            type="button"
            aria-label={`Show photo ${dotIndex + 1}`}
            aria-current={dotIndex === index ? "true" : undefined}
            onClick={() => goTo(dotIndex)}
            className={`h-2.5 rounded-full transition-all ${
              dotIndex === index
                ? "w-7 bg-white"
                : "w-2.5 bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
