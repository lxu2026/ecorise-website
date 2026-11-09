import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import {
  communityRecaps,
  communityRecapsContent,
} from "@/lib/community-recaps-data";
import Image from "next/image";
import Link from "next/link";

export function CommunityPreview() {
  const recaps = communityRecaps.slice(0, 3);

  return (
    <section id="community" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold text-[#1b4332] sm:text-5xl">
            {communityRecapsContent.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600 sm:text-xl">
            {communityRecapsContent.subtitle}
          </p>
        </AnimateOnScroll>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {recaps.map((recap, index) => {
            const photo = recap.photos[0];

            return (
              <AnimateOnScroll key={recap.id} delay={index * 0.06} className="h-full">
                <Link
                  href={`/community#${recap.id}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-[#fafaf8] shadow-[0_8px_40px_rgba(27,67,50,0.08)] ring-1 ring-slate-100"
                >
                  {photo ? (
                    <div className="relative aspect-[3/2]">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        style={
                          photo.objectPosition
                            ? { objectPosition: photo.objectPosition }
                            : undefined
                        }
                        sizes="(max-width: 768px) 90vw, 360px"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#315630]">
                      {recap.eyebrow}
                    </p>
                    <h3 className="mt-2 min-h-[2.5em] font-display text-xl font-bold leading-[1.25] text-[#1b4332] transition-colors group-hover:text-ecorise-600">
                      {recap.title}
                    </h3>
                    <div className="mt-3 space-y-1">
                      {recap.date ? (
                        <time className="block text-sm font-semibold leading-5 text-[#1b4332]">
                          {recap.date}
                        </time>
                      ) : null}
                      <p className="text-sm leading-5 text-slate-500">{recap.location}</p>
                      {recap.studentsReached ? (
                        <p className="pt-2 text-sm font-semibold leading-5 text-[#315630]">
                          {recap.studentsReached}+ Students
                        </p>
                      ) : null}
                    </div>
                    <span className="mt-auto pt-4 text-sm font-semibold text-[#315630]">
                      Read the recap
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
