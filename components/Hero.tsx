"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { HeroCollage } from "@/components/HeroCollage";
import { heroContent } from "@/lib/homepage-data";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: "easeOut" as const },
        };

  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 xl:gap-20">
          <div className="max-w-xl">
            <motion.span
              {...fadeUp(0)}
              className="inline-block rounded-full bg-[#1b4332]/8 px-4 py-2 text-sm font-medium text-[#1b4332] sm:px-5 sm:text-base"
            >
              {heroContent.nonprofitBadge}
            </motion.span>

            <motion.h1
              {...fadeUp(0.08)}
              className="mt-6 font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl lg:leading-[0.95]"
            >
              <span className="text-[#1b4332]">Eco</span>
              <span className="text-[#ca8a04]">Rise</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.16)}
              className="mt-6 text-xl leading-snug text-slate-600 sm:text-2xl lg:text-3xl lg:leading-tight"
            >
              Inspiring youth to build a{" "}
              <span className="font-semibold text-[#4a7c44]">sustainable</span>{" "}
              <span className="font-semibold text-[#ca8a04]">tomorrow</span>.
            </motion.p>

            <motion.div
              {...fadeUp(0.24)}
              className="mt-8 flex flex-wrap items-center gap-5 sm:mt-10 sm:gap-6"
            >
              <Button href={heroContent.learnMoreHref} variant="secondary" size="lg">
                Learn More
              </Button>
              <Link
                href={heroContent.viewProgramsHref}
                className="inline-flex items-center gap-2 text-base font-semibold text-slate-700 transition-colors hover:text-[#1b4332] sm:text-lg"
              >
                View Programs
                <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            {...fadeUp(0.12)}
            className="flex w-full justify-center lg:justify-end"
          >
            <div className="w-full max-w-md lg:max-w-[28rem]">
              <HeroCollage />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
