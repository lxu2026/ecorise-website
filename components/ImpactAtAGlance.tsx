"use client";

import { AnimatedNumber } from "@/components/ui/AnimatedCounter";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import {
  impactAtAGlanceContent,
  inTheNewsContent,
  type ImpactGlanceCard,
} from "@/lib/homepage-data";
import Image from "next/image";

type NewsFeature = (typeof inTheNewsContent.features)[number];

function NewsFeatureImages({ feature }: { feature: NewsFeature }) {
  const { images } = feature;

  if ("secondary" in images) {
    return (
      <div className="relative aspect-[4/3] w-full">
        <div className="absolute right-0 top-0 z-10 h-[72%] w-[78%] overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200/80">
          <Image
            src={images.primary.src}
            alt={images.primary.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 90vw, 480px"
          />
        </div>
        <div className="absolute bottom-0 left-0 z-20 h-[52%] w-[62%] overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200/80">
          <Image
            src={images.secondary.src}
            alt={images.secondary.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 70vw, 360px"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200/80">
      <Image
        src={images.primary.src}
        alt={images.primary.alt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 90vw, 480px"
      />
    </div>
  );
}

function NewsFeatureBlock({ feature, delay = 0 }: { feature: NewsFeature; delay?: number }) {
  const imageFirst = feature.imagePosition === "left";

  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
      <AnimateOnScroll
        delay={imageFirst ? 0 : delay}
        className={`relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none ${
          imageFirst ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <NewsFeatureImages feature={feature} />
      </AnimateOnScroll>

      <AnimateOnScroll
        delay={imageFirst ? delay : 0}
        className={`${imageFirst ? "lg:order-2 lg:pl-4" : "lg:order-1 lg:pr-4"}`}
      >
        <h4 className="font-display text-2xl font-bold text-[#1b4332] sm:text-3xl">
          {feature.title}
        </h4>
        <div className="mt-3 h-1 w-24 rounded-full bg-[#1b4332]" />
        <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
          {feature.description}
        </p>
        <Button href={feature.ctaHref} variant="primary" size="lg" className="mt-8">
          {feature.ctaLabel}
        </Button>
      </AnimateOnScroll>
    </div>
  );
}

function ImpactCard({
  card,
  delay = 0,
}: {
  card: ImpactGlanceCard;
  delay?: number;
}) {
  const { value, prefix, suffix, label, description } = card;
  const displayValue = `${prefix ?? ""}${value.toLocaleString()}${suffix ?? ""}`;

  return (
    <AnimateOnScroll delay={delay}>
      <article className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-100 sm:p-7">
        <p className="font-display text-4xl font-bold tracking-tight text-[#1b4332] sm:text-5xl">
          <AnimatedNumber
            value={value}
            prefix={prefix}
            suffix={suffix}
            className="font-display text-4xl font-bold tracking-tight text-[#1b4332] sm:text-5xl"
            ariaLabel={`${displayValue} ${label}`}
          />
        </p>

        <p className="mt-2 text-base font-semibold text-[#ca8a04] sm:text-lg">{label}</p>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem]">
          {description}
        </p>
      </article>
    </AnimateOnScroll>
  );
}

export function ImpactAtAGlance() {
  const { title, subtitle, cards } = impactAtAGlanceContent;
  const dashIndex = subtitle.indexOf("—");
  const subtitleLead = subtitle.slice(0, dashIndex + 1);
  const subtitleRest = subtitle.slice(dashIndex + 1).trim();

  return (
    <section id="impact" className="scroll-mt-24 bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll className="mx-auto max-w-5xl text-center">
          <h2 className="font-display text-4xl font-bold text-[#1b4332] sm:text-5xl">{title}</h2>
          <p className="mt-5 flex flex-col items-center text-lg leading-relaxed text-slate-600 sm:text-xl">
            <span>{subtitleLead}</span>
            <span className="sm:whitespace-nowrap">{subtitleRest}</span>
          </p>
        </AnimateOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {cards.map((card, index) => (
            <ImpactCard key={card.label} card={card} delay={index * 0.08} />
          ))}
        </div>

        <div className="mt-20 border-t border-slate-200 pt-16 lg:mt-24 lg:pt-20">
          <AnimateOnScroll className="mx-auto max-w-3xl text-center">
            <h3 className="font-display text-3xl font-bold text-[#1b4332] sm:text-4xl">
              {inTheNewsContent.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {inTheNewsContent.subtitle}
            </p>
          </AnimateOnScroll>

          <div className="mt-12 space-y-16 lg:mt-16 lg:space-y-24">
            {inTheNewsContent.features.map((feature, index) => (
              <NewsFeatureBlock key={feature.title} feature={feature} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
