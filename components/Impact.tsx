import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { impactStats } from "@/lib/homepage-data";

export function Impact() {
  return (
    <section id="impact" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll className="mx-auto mb-16 flex justify-center">
          <SectionHeading
            eyebrow="Our Impact"
            title="Measurable Change in Communities Nationwide"
            description="Every program, project, and partnership contributes to a growing movement of environmentally conscious young leaders."
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {impactStats.map((stat, index) => (
            <AnimateOnScroll key={stat.label} delay={index * 0.1}>
              <div className="rounded-2xl bg-ecorise-mint px-4 py-8 shadow-sm ring-1 ring-[#1b4332]/5">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
