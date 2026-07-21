"use client";

import Image from "next/image";
import { LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { heroCollagePhotos } from "@/lib/homepage-data";

type HeroPhoto = (typeof heroCollagePhotos)[number];

function shufflePhotos(photos: HeroPhoto[]): HeroPhoto[] {
  let next = [...photos];
  for (let attempt = 0; attempt < 8; attempt++) {
    next = [...photos];
    for (let i = next.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [next[i], next[j]] = [next[j], next[i]];
    }
    const sameSlots = next.filter((photo, index) => photo.src === photos[index].src).length;
    if (sameSlots <= 3) return next;
  }
  return next;
}

export function HeroCollage() {
  const prefersReducedMotion = useReducedMotion();
  const [photos, setPhotos] = useState<HeroPhoto[]>(() => [...heroCollagePhotos]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const id = window.setInterval(() => {
      setPhotos((current) => shufflePhotos(current));
    }, 4200);

    return () => window.clearInterval(id);
  }, [prefersReducedMotion]);

  return (
    <div
      className="relative w-full"
      aria-label="EcoRise summer camp session photos"
    >
      <div
        className="pointer-events-none absolute -inset-14 rounded-[2.5rem] bg-[radial-gradient(circle_at_50%_45%,rgba(193,235,132,0.52),rgba(193,235,132,0.20)_55%,rgba(193,235,132,0.08)_78%,transparent_92%)] blur-3xl"
        aria-hidden="true"
      />
      <LayoutGroup>
        <div className="relative grid grid-cols-3 gap-1.5 sm:gap-2">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.src}
              layout
              transition={{
                layout: {
                  type: "spring",
                  stiffness: 160,
                  damping: 24,
                  mass: 1,
                },
              }}
              className="relative z-10 aspect-square overflow-hidden rounded-lg shadow-[0_8px_24px_rgba(27,67,50,0.14)] sm:rounded-xl"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                quality={92}
                className="object-cover"
                style={{ objectPosition: photo.objectPosition }}
                sizes="(max-width: 1024px) 30vw, 150px"
                priority={index < 6}
              />
            </motion.div>
          ))}
        </div>
      </LayoutGroup>
    </div>
  );
}
