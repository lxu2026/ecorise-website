import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import {
  communityRecaps,
  communityRecapsContent,
  type CommunityRecap,
} from "@/lib/community-recaps-data";
import Image from "next/image";

function RecapArticle({ recap, delay = 0 }: { recap: CommunityRecap; delay?: number }) {
  const [hero, ...gallery] = recap.photos;
  const galleryColumns = gallery.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3";

  return (
    <article
      id={recap.id}
      className="scroll-mt-28 rounded-[1.75rem] bg-[#fafaf8] p-6 shadow-[0_8px_40px_rgba(27,67,50,0.08)] ring-1 ring-slate-100 sm:p-8 lg:p-10"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <AnimateOnScroll delay={delay}>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#315630]">
            {recap.eyebrow}
          </p>
          <h3 className="mt-3 font-display text-2xl font-bold text-[#1b4332] sm:text-3xl">
            {recap.title}
          </h3>
          <div className="mt-3 h-1 w-24 rounded-full bg-[#1b4332]" />

          <div className="mt-6 space-y-1">
            {recap.date ? (
              <time className="block text-sm font-semibold text-[#1b4332]">{recap.date}</time>
            ) : null}
            <p className="text-sm text-slate-500">{recap.location}</p>
            {recap.studentsReached ? (
              <p className="text-sm font-semibold text-[#1b4332]">
                {recap.studentsReached}+ Students
              </p>
            ) : null}
          </div>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            {recap.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </AnimateOnScroll>

        {hero ? (
          <AnimateOnScroll delay={delay + 0.08}>
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200/80">
              <Image
                src={hero.src}
                alt={hero.alt}
                fill
                className="object-cover"
                style={hero.objectPosition ? { objectPosition: hero.objectPosition } : undefined}
                sizes="(max-width: 1024px) 90vw, 560px"
              />
            </div>
          </AnimateOnScroll>
        ) : null}
      </div>

      {gallery.length > 0 ? (
        <div className={`mt-6 grid gap-4 ${galleryColumns}`}>
          {gallery.map((photo, index) => (
            <AnimateOnScroll key={photo.src} delay={delay + 0.12 + index * 0.06}>
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-200/80">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  style={
                    photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined
                  }
                  sizes="(max-width: 640px) 90vw, 30vw"
                />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export function CommunityRecaps({ asPage = false }: { asPage?: boolean }) {
  return (
    <section
      id={asPage ? undefined : "community"}
      className={
        asPage
          ? "scroll-mt-24 bg-white pb-20 pt-32 lg:pb-28 lg:pt-40"
          : "scroll-mt-24 bg-white py-20 lg:py-28"
      }
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold text-[#1b4332] sm:text-5xl">
            {communityRecapsContent.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600 sm:text-xl">
            {communityRecapsContent.subtitle}
          </p>
        </AnimateOnScroll>

        <div className="mt-14 space-y-12">
          {communityRecaps.map((recap, index) => (
            <RecapArticle key={recap.id} recap={recap} delay={index * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
