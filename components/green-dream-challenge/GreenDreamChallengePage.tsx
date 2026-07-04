"use client";

import { GreenDreamHeroCollage } from "@/components/green-dream-challenge/GreenDreamHeroCollage";
import { Button } from "@/components/ui/Button";
import {
  gdcAbout,
  gdcHero,
  gdcOfficeHours,
  gdcProjectPaths,
  gdcSteps,
} from "@/lib/green-dream-challenge-data";

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

export function GreenDreamChallengePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1b4332] via-[#2d5a3d] to-[#4a7c44] pb-28 pt-28 text-white lg:pb-36 lg:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(193,235,132,0.2),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(202,138,4,0.1),transparent_45%)]" />
        <div className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-[#c1eb84]/10 blur-3xl" aria-hidden="true" />
        <div className="absolute -left-16 bottom-24 h-56 w-56 rounded-full bg-[#ca8a04]/10 blur-3xl" aria-hidden="true" />

        <div className="absolute -bottom-1 left-0 right-0 z-10">
          <svg className="w-full fill-white" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,48L48,56C96,64,192,80,288,80C384,80,480,64,576,58.7C672,53,768,59,864,69.3C960,80,1056,96,1152,96C1248,96,1344,80,1392,72L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
          </svg>
        </div>

        <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 xl:gap-16">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#c1eb84]/35 bg-white/5 px-4 py-2 text-sm font-semibold tracking-wide text-[#c1eb84] backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c1eb84]" aria-hidden="true" />
                {gdcHero.eyebrow}
              </span>

              <h1 className="mt-6 font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl lg:leading-[1.02]">
                <span className="block text-white sm:inline">{gdcHero.title[0]}</span>{" "}
                <span className="block text-[#ca8a04] sm:inline">{gdcHero.title[1]}</span>
              </h1>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-6">
                <p className="text-lg leading-relaxed text-white/95 sm:text-xl">
                  {gdcHero.description}
                </p>
                <p className="mt-3 text-base leading-relaxed text-white/80 sm:text-lg">
                  {gdcHero.summary}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button href="#about-gdc" variant="inverseOutline" size="lg">
                  Learn More ↓
                </Button>
                <Button href={gdcHero.registerUrl} variant="accent" size="lg">
                  Sign Up →
                </Button>
              </div>

              <div className="mt-8 inline-flex max-w-full flex-col gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur-sm sm:flex-row sm:items-center sm:gap-5 sm:px-5">
                <span className="inline-flex items-center gap-2 text-sm font-medium">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f2c029] text-[#1b4332]">
                    <CalendarIcon />
                  </span>
                  {gdcHero.eventDate}
                </span>
                <span className="hidden h-1 w-1 shrink-0 rounded-full bg-white/60 sm:block" />
                <span className="inline-flex items-center gap-2 text-sm font-medium">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f2c029] text-[#1b4332]">
                    <LocationIcon />
                  </span>
                  {gdcHero.eventLocation}
                </span>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end lg:pl-4">
              <div className="w-full max-w-md lg:max-w-[32rem] xl:max-w-[36rem]">
                <GreenDreamHeroCollage />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-gdc" className="scroll-mt-24 bg-white pt-20 pb-10 lg:pt-28 lg:pb-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#1b4332] sm:text-4xl">
              {gdcAbout.title}
            </h2>
            <div className="mt-4 space-y-3">
              {gdcAbout.intro.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-pretty text-sm leading-relaxed text-slate-600 sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {gdcProjectPaths.map((path) => (
              <div
                key={path.id}
                className={`rounded-2xl border-2 p-8 shadow-sm ${path.accentClass}`}
              >
                <h3 className={`text-2xl font-bold uppercase tracking-[0.12em] sm:text-3xl ${path.titleClass}`}>
                  {path.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-700">{path.description}</p>
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

      <section className="bg-white pt-10 pb-20 lg:pt-14 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-3xl border-2 border-slate-200 p-8 shadow-sm sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1b4332] sm:text-4xl">How It Works</h2>
                <div className="mt-10 space-y-8">
                  {gdcSteps.map((item) => (
                    <div key={item.step} className="flex gap-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1b4332] text-sm font-bold text-white">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#1b4332]">{item.title}</h3>
                        <p className="mt-2 text-base leading-relaxed text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-slate-200 pt-8 text-center lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
                <p className="text-2xl font-bold text-[#1b4332] sm:text-3xl">
                  {gdcHero.registerTitle}
                </p>
                <Button href={gdcHero.registerUrl} variant="accent" size="lg" className="mt-6">
                  Sign Up →
                </Button>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-5xl rounded-3xl border-2 border-slate-200 p-8 shadow-sm sm:p-10 lg:mt-16">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <h3 className="text-2xl font-bold text-[#1b4332] sm:text-3xl">
                  {gdcOfficeHours.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {gdcOfficeHours.description}
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {gdcOfficeHours.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full border border-[#1b4332]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-slate-200 pt-8 text-center lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
                <p className="text-2xl font-bold text-[#1b4332] sm:text-3xl">
                  {gdcOfficeHours.signupTitle}
                </p>
                <Button href={gdcOfficeHours.signupUrl} variant="accent" size="lg" className="mt-6">
                  Sign Up →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
