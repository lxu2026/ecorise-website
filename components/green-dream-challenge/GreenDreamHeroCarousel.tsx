"use client";

import { gdcHero, gdcHeroPhotos } from "@/lib/green-dream-challenge-data";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export function GreenDreamHeroCarousel() {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const photoCount = gdcHeroPhotos.length;

  const goTo = useCallback(
    (nextIndex: number) => {
      setIndex((nextIndex + photoCount) % photoCount);
    },
    [photoCount],
  );

  useEffect(() => {
    if (prefersReducedMotion || paused) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % photoCount);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [photoCount, prefersReducedMotion, paused]);

  const currentPhoto = gdcHeroPhotos[index];

  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] bg-[#4a7c44] shadow-[0_20px_50px_rgba(49,86,48,0.22)] sm:rounded-[2rem]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Green Dream Challenge event photos"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentPhoto.src}
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            fill
            priority={index === 0}
            quality={95}
            className="object-cover"
            style={{ objectPosition: currentPhoto.objectPosition }}
            sizes="(max-width: 1024px) 92vw, (max-width: 1536px) 55vw, 800px"
          />
        </motion.div>
      </AnimatePresence>

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/5"
        aria-hidden="true"
      />

      <div className="absolute right-4 top-4 z-10 rounded-full bg-[#f2c029] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1b4332] shadow-md sm:right-5 sm:top-5 sm:px-4 sm:text-xs">
        {gdcHero.editionBadge}
      </div>

      <div className="absolute bottom-4 left-4 z-10 max-w-[70%] text-white sm:bottom-5 sm:left-5">
        <p className="text-sm font-semibold sm:text-base">{gdcHero.eventDate}</p>
        <p className="mt-0.5 text-xs text-white/85 sm:text-sm">{gdcHero.eventLocation}</p>
      </div>

      <div className="absolute bottom-4 right-4 z-10 flex gap-2 sm:bottom-5 sm:right-5">
        {gdcHeroPhotos.map((photo, dotIndex) => (
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
