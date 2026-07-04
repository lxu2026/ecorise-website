"use client";

import { AnimatedNumber } from "@/components/ui/AnimatedCounter";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { impactAtAGlanceContent, type ImpactGlanceCard } from "@/lib/homepage-data";

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
      </div>
    </section>
  );
}
