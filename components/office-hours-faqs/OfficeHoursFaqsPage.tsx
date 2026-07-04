"use client";

import { Button } from "@/components/ui/Button";
import {
  officeHoursContact,
  officeHoursFaqs,
  officeHoursHero,
  officeHoursSchedule,
} from "@/lib/office-hours-faqs-data";
import { sitePhotoUsage } from "@/lib/site-photos";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-[#1b4332] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export function OfficeHoursFaqsPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={sitePhotoUsage.officeHoursHero}
            alt="EcoRise student decorating a canvas tote bag with colorful markers"
            fill
            priority
            className="object-cover object-[70%_center]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f2419]/95 via-[#1b4332]/90 to-[#2d5a3d]/85" />
        </div>

        <div className="absolute -bottom-1 left-0 right-0 z-10">
          <svg className="w-full fill-white" viewBox="0 0 1440 150" preserveAspectRatio="none">
            <path d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,101.3C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,150L1392,150C1344,150,1248,150,1152,150C1056,150,960,150,864,150C768,150,672,150,576,150C480,150,384,150,288,150C192,150,96,150,48,150L0,150Z" />
          </svg>
        </div>

        <div className="relative z-20 mx-auto max-w-7xl px-6 pb-32 pt-28 lg:px-8 lg:pt-32">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="text-sm font-medium text-white">{officeHoursHero.eyebrow}</span>
            </div>
            <h1 className="mb-8 text-left">
              <span className="block font-display text-6xl font-extrabold leading-none tracking-tight text-white md:text-7xl">
                {officeHoursHero.title[0]}
              </span>
              <span className="block font-display text-6xl font-extrabold leading-none tracking-tight text-[#ca8a04] md:text-7xl">
                {officeHoursHero.title[1]}
              </span>
            </h1>
            <div className="mb-10 rounded-xl border border-white/10 bg-[#1b4332]/40 p-7 shadow-lg backdrop-blur-sm">
              <p className="text-xl leading-relaxed text-white">{officeHoursHero.description}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href={officeHoursHero.scheduleHref}
                className="inline-flex items-center rounded-xl bg-[#f2c029] px-8 py-4 text-lg font-semibold text-[#1b4332] shadow-lg transition duration-300 hover:shadow-xl"
              >
                View Schedule
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <Link
                href={officeHoursHero.faqsHref}
                className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-[#1b4332] shadow-lg transition duration-300 hover:shadow-xl"
              >
                Read FAQs
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="office-hours" className="relative overflow-hidden bg-white py-16">
        <div className="absolute left-20 top-20 -z-10 h-64 w-64 rounded-full bg-[#1b4332]/5" />
        <div className="absolute bottom-20 right-20 -z-10 h-80 w-80 rounded-full bg-[#1b4332]/5" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-center text-center">
            <div className="mb-3 inline-flex items-center rounded-full bg-[#1b4332]/5 px-4 py-2">
              <span className="font-semibold text-[#1b4332]">{officeHoursSchedule.eyebrow}</span>
            </div>
            <h2 className="mb-4 text-4xl font-bold text-[#1b4332] md:text-5xl">
              {officeHoursSchedule.title}
            </h2>
            <p className="max-w-3xl text-lg text-slate-600">{officeHoursSchedule.description}</p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#1b4332]/10 bg-white shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1b4332]/10 bg-gradient-to-r from-white to-ecorise-mint/20 px-6 py-4">
              <div className="flex flex-wrap gap-3">
                {officeHoursSchedule.locations.map((location) => (
                  <div
                    key={location.name}
                    className="inline-flex items-center rounded-lg border border-[#1b4332]/10 bg-white px-3 py-1.5"
                  >
                    <span
                      className="mr-2 inline-block h-3 w-3 rounded-full"
                      style={{ backgroundColor: location.color }}
                    />
                    <span className="text-sm font-medium text-[#1b4332]">{location.name}</span>
                  </div>
                ))}
              </div>
              <Button href={officeHoursSchedule.sheetEditUrl} variant="secondary" size="md">
                Open Full Schedule →
              </Button>
            </div>
            <div className="relative h-[600px] w-full bg-slate-50">
              <iframe
                title="EcoRise Office Hours Schedule"
                src={officeHoursSchedule.sheetPreviewUrl}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
              />
            </div>
          </div>

          <p className="mt-4 text-center text-sm text-slate-500">
            Can&apos;t see the preview?{" "}
            <a
              href={officeHoursSchedule.sheetEditUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#1b4332] hover:underline"
            >
              View the office hours schedule here
            </a>
            .
          </p>
        </div>
      </section>

      <section
        id="faqs"
        className="relative overflow-hidden bg-gradient-to-b from-white to-ecorise-mint/20 py-16"
      >
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#1b4332]/5" />
        <div className="absolute bottom-40 left-20 h-96 w-96 rounded-full bg-[#1b4332]/5" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-center text-center">
            <div className="mb-3 inline-flex items-center rounded-full bg-[#1b4332]/10 px-4 py-2">
              <span className="font-semibold text-[#1b4332]">{officeHoursFaqs.eyebrow}</span>
            </div>
            <h2 className="mb-4 text-4xl font-bold text-[#1b4332] md:text-5xl">
              {officeHoursFaqs.title}
            </h2>
            <p className="max-w-2xl text-lg text-slate-600">{officeHoursFaqs.description}</p>
          </div>

          <div className="space-y-4">
            {officeHoursFaqs.items.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-2xl border border-[#1b4332]/5 bg-white shadow-md transition-all duration-300"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-slate-50"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span className="pr-4 text-lg font-semibold text-[#1b4332]">{item.question}</span>
                    <ChevronIcon open={isOpen} />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 leading-relaxed text-slate-600">{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 rounded-3xl bg-[#1b4332] p-8 text-center shadow-xl md:p-10">
            <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
              {officeHoursContact.title}
            </h3>
            <p className="mx-auto mb-6 max-w-xl text-white/90">{officeHoursContact.description}</p>
            <Button
              href={`mailto:${officeHoursContact.email}`}
              variant="accent"
              size="lg"
              className="inline-flex items-center"
            >
              Email Us →
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
