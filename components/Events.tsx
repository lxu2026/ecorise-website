import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { events } from "@/lib/homepage-data";

export function Events() {
  return (
    <section id="events" className="bg-ecorise-mint py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll className="mx-auto mb-16 flex justify-center">
          <SectionHeading
            eyebrow="Upcoming Events"
            title="Join Us at Our Next Gathering"
            description="Connect with students, educators, and community partners at fairs, competitions, and registration events throughout the year."
          />
        </AnimateOnScroll>

        <div className="grid gap-6 lg:grid-cols-3">
          {events.map((event, index) => (
            <AnimateOnScroll key={event.title} delay={index * 0.1}>
              <article className="flex h-full flex-col rounded-2xl border border-ecorise-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-ecorise-500 to-ecorise-700 text-white">
                    <span className="text-[10px] font-bold uppercase leading-none">
                      {event.date.split(" ")[0].slice(0, 3)}
                    </span>
                    <span className="text-sm font-bold leading-none">
                      {event.date.split(" ")[1]?.replace(",", "")}
                    </span>
                  </div>
                  <div>
                    <time className="text-xs font-medium uppercase tracking-wide text-ecorise-600">
                      {event.date}
                    </time>
                    <p className="text-xs text-slate-500">{event.location}</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-ecorise-900">{event.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {event.description}
                </p>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
