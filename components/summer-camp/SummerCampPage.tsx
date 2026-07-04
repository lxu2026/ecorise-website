"use client";

import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { campHero, campIntro, campWeeks, type CampWeek } from "@/lib/summer-camp-data";
import Image from "next/image";

function CalendarIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" />
    </svg>
  );
}

function SpeakerSidebar({
  label,
  speaker,
  compact = false,
}: {
  label: string;
  speaker: CampWeek["featuredSpeaker"];
  compact?: boolean;
}) {
  if (compact) {
    return (
      <div className="rounded-2xl bg-white p-4 shadow-lg ring-1 ring-slate-100 sm:p-5">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.15em] text-[#1b4332]">
          {label}
        </p>

        <div className="mx-auto mt-4 w-fit rounded-full border-[4px] border-[#c1eb84] p-[2px]">
          <div className="rounded-full border-[3px] border-[#1e3a5f] p-[2px]">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-white bg-slate-100">
              {speaker.photo ? (
                <Image
                  src={speaker.photo}
                  alt={speaker.name}
                  fill
                  className="object-cover object-center"
                  sizes="96px"
                />
              ) : (
                <PlaceholderImage
                  label={speaker.photoLabel ?? speaker.name}
                  gradient="from-ecorise-300 to-ecorise-700"
                  aspect="square"
                  className="h-full w-full rounded-full"
                />
              )}
            </div>
          </div>
        </div>

        <h4 className="mt-3 text-center text-lg font-bold text-[#1b4332]">{speaker.name}</h4>
        <p className="mt-0.5 text-center text-xs text-ecorise-600 sm:text-sm">{speaker.title}</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-100 sm:p-7">
      <p className="text-center text-xs font-bold uppercase tracking-[0.15em] text-[#1b4332]">
        {label}
      </p>

      <div className="mx-auto mt-5 w-fit rounded-full border-[5px] border-[#c1eb84] p-[3px]">
        <div className="rounded-full border-[4px] border-[#1e3a5f] p-[2px]">
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-white bg-slate-100">
            {speaker.photo ? (
              <Image
                src={speaker.photo}
                alt={speaker.name}
                fill
                className="object-cover object-center"
                sizes="128px"
              />
            ) : (
              <PlaceholderImage
                label={speaker.photoLabel ?? speaker.name}
                gradient="from-ecorise-300 to-ecorise-700"
                aspect="square"
                className="h-full w-full rounded-full"
              />
            )}
          </div>
        </div>
      </div>

      <h4 className="mt-5 text-center text-xl font-bold text-[#1b4332] sm:text-2xl">{speaker.name}</h4>
      <p className="mt-1 text-center text-sm text-ecorise-600">{speaker.title}</p>

      {speaker.quote ? (
        <div className="mt-5 rounded-xl bg-[#1b4332] p-5 text-center text-white">
          <p className="text-sm leading-relaxed sm:text-base">
            <span className="mr-1 align-top font-serif text-2xl leading-none text-[#c1eb84]">
              &ldquo;
            </span>
            {speaker.quote}
            <span className="ml-1 align-bottom font-serif text-2xl leading-none text-[#c1eb84]">
              &rdquo;
            </span>
          </p>
        </div>
      ) : (
        <>
          <p className="mx-auto mt-5 w-fit rounded-full bg-ecorise-100 px-4 py-2 text-center text-sm font-semibold text-[#1b4332]">
            &ldquo;{speaker.talkTitle}&rdquo;
          </p>
          {speaker.talkDescription ? (
            <p className="mt-4 text-center text-sm italic leading-relaxed text-slate-600">
              {speaker.talkDescription}
            </p>
          ) : null}
        </>
      )}
    </div>
  );
}

function WeekGallery({ week }: { week: CampWeek }) {
  if (week.heroImage && week.galleryImages && week.galleryImages.length >= 3) {
    return (
      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-[1.25fr_1fr] sm:gap-4">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-auto sm:min-h-[320px]">
          <Image
            src={week.heroImage}
            alt={`${week.title} group photo`}
            fill
            quality={92}
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 600px"
            priority={week.week === 1}
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-3">
          {week.galleryImages.slice(0, 4).map((image) => (
            <div key={image.src} className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                quality={92}
                className="object-cover"
                sizes="(max-width: 640px) 45vw, 300px"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (week.heroImage) {
    return (
      <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-xl sm:min-h-[280px]">
        <Image
          src={week.heroImage}
          alt={`${week.title} session photo`}
          fill
          quality={92}
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 800px"
        />
      </div>
    );
  }

  return (
    <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-[1.25fr_1fr] sm:gap-4">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-auto sm:min-h-[320px]">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${week.photoGradient}`}
          role="img"
          aria-label={week.photoLabel}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_50%)]" />
          <div className="absolute inset-0 flex items-end p-5">
            <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
              {week.photoLabel}
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={`aspect-square rounded-xl bg-gradient-to-br ${week.photoGradient} opacity-75`}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}

function CampWeekSection({ week }: { week: CampWeek }) {
  return (
    <article
      id={week.id}
      className="scroll-mt-28 border-t border-slate-200 pt-16 first:border-t-0 first:pt-0"
    >
      <div className="mb-8 flex gap-4 sm:gap-5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-ecorise-300 text-xl font-bold text-white shadow-md sm:h-16 sm:w-16 sm:text-2xl">
          {week.week}
        </div>
        <div className="min-w-0">
          <h3 className="text-2xl font-bold text-[#1b4332] sm:text-3xl">{week.title}</h3>
          <div className="mt-2 flex flex-col gap-2 text-sm font-medium text-ecorise-600 sm:flex-row sm:flex-wrap sm:gap-x-6">
            <span className="inline-flex items-center gap-2">
              <CalendarIcon />
              {week.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <LocationIcon />
              {week.location}
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-start lg:gap-10 xl:gap-12">
        <div>
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">{week.summary}</p>
          <WeekGallery week={week} />
        </div>

        <div className={week.guestSpeaker ? "space-y-4 lg:sticky lg:top-28" : "lg:sticky lg:top-28"}>
          <SpeakerSidebar
            label={week.speakerLabel ?? (week.guestSpeaker ? "Featured Speaker" : "Guest Speaker")}
            speaker={week.featuredSpeaker}
            compact={Boolean(week.guestSpeaker)}
          />
          {week.guestSpeaker && (
            <SpeakerSidebar
              label="Guest Speaker"
              speaker={week.guestSpeaker}
              compact
            />
          )}
        </div>
      </div>
    </article>
  );
}

export function SummerCampPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1b4332] via-[#2d5a3d] to-[#4a7c44] pb-16 pt-28 text-white lg:pb-20 lg:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(193,235,132,0.18),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,42rem)_1fr] lg:gap-14 xl:gap-16">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#c1eb84]/35 bg-white/5 px-4 py-2 text-sm font-semibold tracking-wide text-[#c1eb84]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c1eb84]" aria-hidden="true" />
                {campHero.eyebrow}
              </span>

              <h1 className="mt-6 font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl lg:leading-[1.05] xl:text-[5.25rem]">
                <span className="text-white">{campHero.titleMain}</span>{" "}
                <span className="text-[#c1eb84]">{campHero.titleAccent}</span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl lg:mt-10 lg:max-w-lg lg:text-[1.35rem] lg:leading-[1.65]">
                {campHero.description}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:mt-12">
                <Button
                  href="#camp-sessions"
                  variant="accent"
                  size="lg"
                  className="px-8 py-4 text-base sm:text-lg"
                >
                  Explore Camp →
                </Button>
                <Button
                  href={campHero.registerUrl}
                  variant="inverseOutline"
                  size="lg"
                  className="px-8 py-4 text-base sm:text-lg"
                >
                  Register Now →
                </Button>
              </div>

              <div className="mt-14 grid max-w-xl grid-cols-3 gap-4 border-t border-white/15 pt-10 sm:gap-6 lg:mt-16">
                {campHero.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold sm:text-4xl lg:text-5xl">{stat.value}</p>
                    <p className="mt-1.5 text-sm text-white/75 sm:text-base">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center lg:ml-8 xl:ml-12">
              {campHero.heroCollages.map((src, index) => (
                <div
                  key={src}
                  className="overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10 sm:rounded-2xl"
                >
                  <Image
                    src={src}
                    alt={`EcoRise Summer Camp photo collage ${index + 1}`}
                    width={640}
                    height={853}
                    className="h-auto max-h-[24rem] w-full object-contain sm:max-h-[29rem] lg:max-h-[34rem]"
                    priority={index === 0}
                    sizes="(max-width: 1024px) 90vw, 40vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="camp-sessions" className="scroll-mt-24 bg-white pb-20 pt-12 lg:pb-28 lg:pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#1b4332] sm:text-4xl">
              {campIntro.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {campIntro.description}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4 lg:mt-12 lg:flex-nowrap lg:gap-3 xl:gap-4">
            {campWeeks.map((week) => (
              <a
                key={week.id}
                href={`#${week.id}`}
                className="flex min-w-[8.75rem] flex-1 flex-col items-center justify-center rounded-2xl bg-slate-100 px-4 py-4 text-center transition-colors hover:bg-ecorise-100 hover:text-ecorise-800 sm:max-w-[11.5rem] lg:min-w-0 lg:max-w-none"
              >
                <span className="text-sm font-bold text-[#1b4332] sm:text-base">Week {week.week}</span>
                <span className="mt-1 text-[11px] font-medium leading-snug text-slate-600 sm:text-xs">
                  {week.shortLabel}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-14 space-y-16 lg:mt-16">
            {campWeeks.map((week) => (
              <CampWeekSection key={week.id} week={week} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
