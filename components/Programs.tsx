import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { programs, programAnchors } from "@/lib/homepage-data";
import Link from "next/link";

export function Programs() {
  return (
    <section id="programs" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll className="mx-auto mb-16 flex justify-center">
          <SectionHeading
            eyebrow="Featured Programs"
            title="Learn, Innovate, and Take Action"
            description="From summer adventures to year-round workshops, our programs meet students where they are and inspire them to become changemakers."
          />
        </AnimateOnScroll>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <AnimateOnScroll key={program.title} delay={index * 0.1}>
              <article
                id={
                  program.title in programAnchors
                    ? programAnchors[program.title as keyof typeof programAnchors]
                    : undefined
                }
                className="group flex h-full scroll-mt-24 flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ecorise-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ecorise-600/5"
              >
                <PlaceholderImage
                  label={program.title}
                  gradient={program.gradient}
                  aspect="video"
                  className="rounded-none rounded-t-2xl"
                />
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-3 inline-flex w-fit rounded-full bg-ecorise-mint px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ecorise-700">
                    {program.tag}
                  </span>
                  <h3 className="text-xl font-bold text-ecorise-900">{program.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {program.description}
                  </p>
                  <Link
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-ecorise-600 transition-colors group-hover:text-ecorise-700"
                  >
                    Learn more
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
