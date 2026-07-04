"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useRef } from "react";

type AnimatedNumberProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  /** Accessible label describing the final stat (e.g. "131 Students Taught"). */
  ariaLabel?: string;
};

function formatAnimatedValue(value: number, prefix = "", suffix = "") {
  return `${prefix}${Math.round(value).toLocaleString()}${suffix}`;
}

export function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  className = "text-4xl font-bold tracking-tight text-[#1b4332] sm:text-5xl",
  ariaLabel,
}: AnimatedNumberProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const displayRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });
  const prefersReducedMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 2000, bounce: 0 });

  const finalText = formatAnimatedValue(value, prefix, suffix);

  useEffect(() => {
    if (prefersReducedMotion) {
      if (displayRef.current) {
        displayRef.current.textContent = finalText;
      }
      return;
    }

    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value, prefersReducedMotion, finalText]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const unsubscribe = spring.on("change", (latest) => {
      if (displayRef.current) {
        displayRef.current.textContent = formatAnimatedValue(latest, prefix, suffix);
      }
    });
    return unsubscribe;
  }, [spring, prefix, suffix, prefersReducedMotion]);

  return (
    <span ref={containerRef} aria-label={ariaLabel}>
      <span ref={displayRef} className={className} aria-hidden={ariaLabel ? true : undefined}>
        {prefersReducedMotion ? finalText : formatAnimatedValue(0, prefix, suffix)}
      </span>
    </span>
  );
}

type AnimatedCounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export function AnimatedCounter({ value, suffix = "", label, prefix = "" }: AnimatedCounterProps) {
  const finalText = formatAnimatedValue(value, prefix, suffix);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-2 text-center"
    >
      <AnimatedNumber
        value={value}
        prefix={prefix}
        suffix={suffix}
        ariaLabel={`${finalText} ${label}`}
      />
      <span className="text-sm font-medium uppercase tracking-wider text-[#315630]">
        {label}
      </span>
    </motion.div>
  );
}
