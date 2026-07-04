import { MissionPhotoCarousel } from "@/components/MissionPhotoCarousel";
import { OurPrograms } from "@/components/OurPrograms";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { missionFullText } from "@/lib/programs-showcase-data";

export function Mission() {
  return (
    <section id="mission" className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-10 xl:px-14">
        <div className="grid items-center gap-10 pb-4 lg:grid-cols-2 lg:gap-14 lg:pb-0 xl:gap-16">
          <AnimateOnScroll className="relative order-2 lg:order-1">
            <MissionPhotoCarousel />
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1} className="order-1 lg:order-2 lg:max-w-xl xl:max-w-2xl">
            <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-[2.75rem] lg:leading-[1.1] xl:text-5xl">
              <span className="text-[#1b4332]">Learn Green.</span>{" "}
              <span className="text-[#ca8a04]">Lead Bold.</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-700 sm:mt-6 sm:text-lg sm:leading-8">
              {missionFullText}
            </p>

            <p className="mt-5 text-lg font-semibold text-[#1b4332] sm:mt-6 sm:text-xl">
              Let&apos;s turn passion into planet-positive action.
            </p>
          </AnimateOnScroll>
        </div>

        <OurPrograms />
      </div>
    </section>
  );
}
