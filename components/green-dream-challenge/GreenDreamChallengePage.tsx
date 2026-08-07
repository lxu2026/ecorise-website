"use client";

import { GreenDreamHeroCarousel } from "@/components/green-dream-challenge/GreenDreamHeroCarousel";
import { Button } from "@/components/ui/Button";
import {
  gdcAbout,
  gdcAboutPhoto,
  gdcContestDay,
  gdcHero,
  gdcHeroBg,
  gdcHighlights,
  gdcJudges,
  gdcPrizes,
  gdcProjectPaths,
  gdcWinners,
  type GdcJudgeEntry,
  type GdcWinnerEntry,
} from "@/lib/green-dream-challenge-data";
import Image from "next/image";

function CalendarIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={`${className} shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function LocationIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={`${className} shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" />
    </svg>
  );
}

function ClockIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={`${className} shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2m6-2a8 8 0 11-16 0 8 8 0 0116 0z" />
    </svg>
  );
}

function AwardIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={`${className} shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  );
}

function PrizeIcon({
  icon,
  place,
}: {
  icon: (typeof gdcPrizes.places)[number]["icon"];
  place: number;
}) {
  if (icon === "trophy") {
    return (
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 4V2h10v2h3a1 1 0 011 1v2a5 5 0 01-4.1 4.9A5.002 5.002 0 0113 17.9V19h3v2H8v-2h3v-1.1A5.002 5.002 0 017.1 11.9 5 5 0 013 7V5a1 1 0 011-1h3zm0 2H5v1a3 3 0 003 3V6zm10 0v4a3 3 0 003-3V6h-3z" />
      </svg>
    );
  }
  if (icon === "star") {
    return (
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.1-1.01L12 2z" />
      </svg>
    );
  }
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-current text-sm font-bold">
      {place}
    </span>
  );
}

function WinnerPhotoSlot({
  entry,
  className,
  sizes,
  quality = 92,
}: {
  entry: GdcWinnerEntry;
  className?: string;
  sizes: string;
  quality?: 75 | 92 | 95;
}) {
  if (entry.imageSrc) {
    return (
      <div
        className={`relative overflow-hidden bg-[#e8f0ea] ${className ?? ""}`}
      >
        <Image
          src={entry.imageSrc}
          alt={entry.imageAlt}
          fill
          quality={quality}
          className="object-cover object-center"
          sizes={sizes}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center border border-dashed border-[#1b4332]/20 bg-[#eef5f0] ${className ?? ""}`}
      aria-label={`${entry.projectName} photo coming soon`}
    >
      <span className="px-3 text-center text-xs font-medium uppercase tracking-wide text-[#1b4332]/45">
        Photo TBA
      </span>
    </div>
  );
}

function PlaceBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex w-fit max-w-max shrink-0 self-start rounded-full bg-[#f2c029] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#1b4332]">
      {label}
    </span>
  );
}

function JudgeCard({ judge }: { judge: GdcJudgeEntry }) {
  return (
    <article className="w-full overflow-hidden rounded-2xl border border-[#1b4332]/10 bg-white shadow-[0_12px_36px_rgba(27,67,50,0.08)] sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3.75rem)/4)]">
      <div className="relative">
        {judge.imageSrc ? (
          <div className="relative aspect-[4/5] overflow-hidden bg-[#e8f0ea]">
            <Image
              src={judge.imageSrc}
              alt={judge.imageAlt ?? judge.name}
              fill
              quality={92}
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
        ) : (
          <div
            className={`flex aspect-[4/5] items-center justify-center bg-gradient-to-br ${judge.photoGradient}`}
            aria-hidden="true"
          >
            <span className="text-4xl font-bold tracking-wide text-white/95 sm:text-5xl">
              {judge.initials}
            </span>
          </div>
        )}
        <div className="absolute left-3 top-3">
          <span className="inline-flex rounded-md bg-[#f2c029] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#1b4332] sm:text-[11px]">
            {judge.badge}
          </span>
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <h4 className="text-lg font-bold text-[#1b4332]">{judge.name}</h4>
        <p className="mt-1 text-sm font-medium text-[#ca8a04]">{judge.title}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{judge.bio}</p>
      </div>
    </article>
  );
}

export function GreenDreamChallengePage() {
  return (
    <>
      <section className="relative overflow-hidden pb-28 pt-28 text-white lg:pb-36 lg:pt-32">
        {/* Solid EcoRise green base — stable contrast under headline/stats */}
        <div className="absolute inset-0 bg-[#1b4332]" aria-hidden="true" />
        {/* Crisp bg photo, low opacity, weighted to the right — not behind text */}
        <Image
          src={gdcHeroBg}
          alt=""
          fill
          priority
          quality={95}
          className="object-cover object-right opacity-[0.28]"
          sizes="100vw"
          aria-hidden="true"
        />
        {/* Strong left solid scrim → soft fade toward carousel side */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#1b4332] via-[#1b4332]/92 to-[#1b4332]/55"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#245c3e]/80 via-transparent to-[#16382a]/50"
          aria-hidden="true"
        />

        <div className="absolute -bottom-1 left-0 right-0 z-10">
          <svg
            className="w-full fill-white"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M0,48L48,56C96,64,192,80,288,80C384,80,480,64,576,58.7C672,53,768,59,864,69.3C960,80,1056,96,1152,96C1248,96,1344,80,1392,72L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
          </svg>
        </div>

        <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.2fr)] lg:gap-10 xl:gap-12">
            <div className="max-w-xl lg:max-w-none">
              <h1 className="font-display text-5xl font-bold uppercase tracking-tight sm:text-6xl lg:text-7xl lg:leading-[0.98] xl:text-[5.5rem]">
                <span className="block text-white sm:inline">{gdcHero.title[0]}</span>{" "}
                <span className="block text-[#f2c029] sm:inline drop-shadow-sm">{gdcHero.title[1]}</span>
              </h1>

              <div className="mt-6 rounded-2xl border border-white/15 bg-black/30 p-5 sm:p-6">
                <p className="text-base leading-relaxed text-white sm:text-lg">
                  {gdcHero.description}
                </p>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {gdcHero.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/15 bg-black/30 px-2 py-4 text-center sm:px-3 sm:py-5"
                  >
                    <p className="font-display text-2xl font-bold text-[#f2c029] sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[11px] font-medium text-white sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button href={gdcHero.learnMoreHref} variant="inverseOutline" size="lg">
                  Learn More ↓
                </Button>
                <Button href={gdcHero.primaryCtaUrl} variant="accent" size="lg">
                  {gdcHero.primaryCtaLabel}
                </Button>
              </div>
            </div>

            <div className="w-full min-w-0">
              <GreenDreamHeroCarousel />
            </div>
          </div>
        </div>
      </section>

      <section id="about-gdc" className="scroll-mt-24 bg-white pt-20 pb-10 lg:pt-28 lg:pb-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-[#f2c029]/25 px-4 py-1.5 text-sm font-semibold text-[#1b4332]">
              {gdcAbout.eyebrow}
            </span>
            <h2 className="mt-5 text-3xl font-bold text-[#1b4332] sm:text-4xl lg:text-5xl">
              {gdcAbout.titlePrefix}{" "}
              <span className="text-[#ca8a04]">{gdcAbout.titleAccent}</span>
              {gdcAbout.titleSuffix}
            </h2>
          </div>

          <div className="relative mx-auto mt-10 min-h-[20rem] max-w-5xl overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(27,67,50,0.18)] sm:mt-12 sm:min-h-[22rem]">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={gdcAboutPhoto.src}
                alt=""
                fill
                quality={95}
                className="object-cover object-center"
                style={{ objectPosition: gdcAboutPhoto.objectPosition }}
                sizes="(max-width: 1024px) 100vw, 1024px"
                aria-hidden="true"
              />
              {/* Light left scrim so awards stay visible and white text stays readable */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent"
                aria-hidden="true"
              />
            </div>

            <div className="relative z-10 flex min-h-[20rem] flex-col justify-center px-6 py-10 text-white sm:min-h-[22rem] sm:px-10 sm:py-12 lg:px-12 lg:py-14">
              <div className="max-w-xl border-l-4 border-[#f2c029] pl-5 sm:pl-6">
                <h3 className="text-xl font-bold sm:text-2xl">{gdcAbout.cardHeading}</h3>
                <div className="mt-4 space-y-3">
                  {gdcAbout.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-pretty text-sm leading-relaxed text-white/90 sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
                <span className="inline-flex items-center gap-2 text-sm font-medium">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f2c029] text-[#1b4332]">
                    <CalendarIcon />
                  </span>
                  {gdcAbout.eventDate}
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-medium">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f2c029] text-[#1b4332]">
                    <LocationIcon />
                  </span>
                  {gdcAbout.eventLocation}
                </span>
              </div>
            </div>

            <span className="sr-only">{gdcAboutPhoto.alt}</span>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {gdcProjectPaths.map((path) => (
              <div
                key={path.id}
                className={`rounded-2xl border-2 p-8 shadow-sm ${path.accentClass}`}
              >
                <h3
                  className={`text-2xl font-bold uppercase tracking-[0.12em] sm:text-3xl ${path.titleClass}`}
                >
                  {path.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-700">
                  {path.description}
                </p>
                <p className="mt-6 text-sm font-semibold text-[#1b4332]">Judged on:</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {path.judgingCriteria.map((criterion) => (
                    <li
                      key={criterion}
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${path.badgeClass}`}
                    >
                      {criterion}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-[#f7faf5] to-white pt-10 pb-20 lg:pt-14 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#1b4332] sm:text-4xl lg:text-5xl">
              {gdcContestDay.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {gdcContestDay.subtitle}
            </p>
            <p className="mt-3 inline-flex items-center justify-center gap-2 text-sm font-medium text-[#1b4332]/80">
              <LocationIcon className="h-4 w-4 text-[#ca8a04]" />
              {gdcContestDay.venueLine}
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:mt-14">
            {gdcContestDay.cards.map((card) => (
              <article
                key={card.id}
                className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[0_12px_40px_rgba(27,67,50,0.08)] sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f2c029] text-[#1b4332]">
                    {card.icon === "clock" ? <ClockIcon /> : <AwardIcon />}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-[#1b4332] sm:text-2xl">{card.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{card.dateLabel}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#f2c029]" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl bg-[#f2c029] px-5 py-8 shadow-[0_16px_48px_rgba(242,192,41,0.35)] sm:mt-12 sm:px-8 sm:py-10 lg:px-10">
            <h3 className="text-center text-2xl font-bold text-[#1b4332] sm:text-3xl">
              {gdcPrizes.title}
            </h3>
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
              {gdcPrizes.places.map((prize) => (
                <div
                  key={prize.place}
                  className="flex flex-col items-center rounded-2xl bg-[#e5b025] px-3 py-5 text-center text-[#1b4332] sm:px-4 sm:py-6"
                >
                  <PrizeIcon icon={prize.icon} place={prize.place} />
                  <p className="mt-3 font-display text-2xl font-bold sm:text-3xl">{prize.amount}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide sm:text-sm">
                    {prize.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pt-6 pb-20 lg:pt-10 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#1b4332] sm:text-4xl lg:text-5xl">
              {gdcHighlights.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {gdcHighlights.subtitle}
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-4 sm:gap-4">
            {gdcHighlights.cells.map((cell, index) =>
              cell.type === "photo" ? (
                <div
                  key={cell.src}
                  className="relative aspect-square overflow-hidden rounded-xl bg-slate-100 sm:rounded-2xl"
                >
                  <Image
                    src={cell.src}
                    alt={cell.alt}
                    fill
                    quality={92}
                    className="object-cover"
                    style={
                      cell.objectPosition
                        ? { objectPosition: cell.objectPosition }
                        : undefined
                    }
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 240px"
                  />
                </div>
              ) : (
                <div
                  key={`empty-${index}`}
                  className="aspect-square rounded-xl border border-dashed border-slate-200/90 bg-slate-50/80 sm:rounded-2xl"
                  aria-hidden="true"
                />
              ),
            )}
          </div>
        </div>
      </section>

      <section
        id="winners"
        className="scroll-mt-24 bg-gradient-to-b from-[#f4f8f5] via-white to-[#f7faf5] pt-16 pb-20 lg:pt-24 lg:pb-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#1b4332] sm:text-4xl lg:text-5xl">
              2026 Green Dream Challenge{" "}
              <span className="text-[#ca8a04]">{gdcWinners.titleAccent}</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {gdcWinners.introBefore}
              <span className="font-semibold text-[#ca8a04]">{gdcWinners.introAccent}</span>
              {gdcWinners.introAfter}
            </p>
          </div>

          {/* Featured 1st place */}
          <article className="mx-auto mt-12 overflow-hidden rounded-3xl border border-[#1b4332]/10 bg-white shadow-[0_16px_48px_rgba(27,67,50,0.1)] lg:mt-14">
            <div className="grid lg:grid-cols-2">
              <WinnerPhotoSlot
                entry={gdcWinners.firstPlace}
                className="aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[320px]"
                sizes="(max-width: 1024px) 100vw, 720px"
                quality={95}
              />
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <PlaceBadge label={gdcWinners.firstPlace.placeLabel} />
                <h3 className="mt-4 text-2xl font-bold text-[#1b4332] sm:text-3xl lg:text-4xl">
                  {gdcWinners.firstPlace.projectName}
                </h3>
                <p className="mt-2 text-sm font-medium text-[#1b4332]/75 sm:text-base">
                  {gdcWinners.firstPlace.teamNames}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {gdcWinners.firstPlace.description}
                </p>
              </div>
            </div>
          </article>

          {/* Runner-ups 2–5 */}
          <h3 className="mt-14 text-center text-2xl font-bold text-[#1b4332] sm:mt-16 sm:text-3xl">
            Runner-Ups
          </h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {gdcWinners.runnerUps.map((entry) => (
              <article
                key={entry.place}
                className="overflow-hidden rounded-2xl border border-[#1b4332]/10 bg-white shadow-[0_12px_36px_rgba(27,67,50,0.08)]"
              >
                <div className="relative">
                  <WinnerPhotoSlot
                    entry={entry}
                    className="aspect-[4/5]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                  />
                  <div className="absolute left-3 top-3">
                    <PlaceBadge label={entry.placeLabel} />
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <h4 className="text-lg font-bold text-[#1b4332]">{entry.projectName}</h4>
                  <p className="mt-1 text-sm font-medium text-[#1b4332]/70">{entry.teamNames}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{entry.description}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Finalists 6–10 */}
          <h3 className="mt-14 text-center text-2xl font-bold text-[#1b4332] sm:mt-16 sm:text-3xl">
            {gdcWinners.finalistsHeading}
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {gdcWinners.finalists.map((entry) => (
              <article
                key={entry.place}
                className="overflow-hidden rounded-2xl border border-[#1b4332]/10 bg-white shadow-[0_10px_28px_rgba(27,67,50,0.07)]"
              >
                <div className="relative">
                  <WinnerPhotoSlot
                    entry={entry}
                    className="aspect-[4/3]"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 360px"
                  />
                  <div className="absolute left-2.5 top-2.5">
                    <PlaceBadge label={entry.placeLabel} />
                  </div>
                </div>
                <div className="p-3.5 sm:p-4">
                  <h4 className="text-base font-bold text-[#1b4332]">{entry.projectName}</h4>
                  <p className="mt-1 text-xs font-medium leading-snug text-[#1b4332]/70 sm:text-sm">
                    {entry.teamNames}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {entry.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Rising Stars — equal peer awards, no ordinal ranking */}
          <div className="mt-14 text-center sm:mt-16">
            <h3 className="text-2xl font-bold text-[#1b4332] sm:text-3xl">
              {gdcWinners.risingStarsHeading}
            </h3>
            <p className="mt-2 text-sm text-slate-500 sm:text-base">
              Special recognition for younger students with outstanding environmental
              projects.
            </p>
          </div>
          <div className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-5">
            {gdcWinners.risingStars.map((entry) => (
              <article
                key={entry.projectName}
                className="flex w-full gap-4 overflow-hidden rounded-2xl border border-[#1b4332]/10 bg-white p-4 shadow-[0_10px_28px_rgba(27,67,50,0.07)] sm:w-[calc((100%-1.25rem)/2)] sm:p-5"
              >
                <WinnerPhotoSlot
                  entry={entry}
                  className="h-24 w-24 shrink-0 rounded-xl sm:h-28 sm:w-28"
                  sizes="(max-width: 640px) 40vw, 280px"
                />
                <div className="min-w-0 flex-1 self-center">
                  <span className="inline-flex rounded-full bg-[#f2c029] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#1b4332]">
                    Rising Star
                  </span>
                  <h4 className="mt-2 text-lg font-bold text-[#1b4332]">{entry.projectName}</h4>
                  <p className="mt-1 text-sm font-medium text-[#1b4332]/70">{entry.teamNames}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{entry.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="judges"
        className="scroll-mt-24 bg-white pt-16 pb-20 lg:pt-24 lg:pb-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#1b4332] sm:text-4xl lg:text-5xl">
              {gdcJudges.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {gdcJudges.subtitle}
            </p>
          </div>

          {gdcJudges.groups.map((group, groupIndex) => (
            <div
              key={group.id}
              className={groupIndex === 0 ? "mt-12 lg:mt-14" : "mt-14 sm:mt-16"}
            >
              <div className="mx-auto max-w-2xl text-center">
                <h3 className="text-2xl font-bold text-[#1b4332] sm:text-3xl">
                  {group.heading}
                </h3>
                <p className="mt-2 text-sm text-slate-500 sm:text-base">{group.subtitle}</p>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-5">
                {group.judges.map((judge) => (
                  <JudgeCard key={judge.name} judge={judge} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
