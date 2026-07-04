import { AboutMissionSection } from "@/components/about/AboutMissionSection";
import { ImpactAtAGlance } from "@/components/ImpactAtAGlance";
import { Team } from "@/components/Team";
import { sitePhotoUsage } from "@/lib/site-photos";
import Image from "next/image";

export function AboutPageContent() {
  return (
    <>
      <section className="relative min-h-[85vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={sitePhotoUsage.aboutHero}
            alt="EcoRise students in a classroom with a presentation screen displaying Thanks For Coming"
            fill
            priority
            className="object-cover object-[center_35%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f2419]/95 via-[#1b4332]/90 to-[#2d5a3d]/85" />
        </div>

        <div className="absolute -bottom-1 left-0 right-0 z-10">
          <svg
            className="w-full fill-white"
            viewBox="0 0 1440 150"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,101.3C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,150L1392,150C1344,150,1248,150,1152,150C1056,150,960,150,864,150C768,150,672,150,576,150C480,150,384,150,288,150C192,150,96,150,48,150L0,150Z" />
          </svg>
        </div>

        <div className="relative z-20 mx-auto flex min-h-[85vh] max-w-4xl flex-col items-center justify-center px-6 pb-32 pt-28 text-center lg:px-8 lg:pt-32">
          <div className="mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="text-sm font-medium text-white">
              501(c)(3) Non-Profit Organization
            </span>
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About{" "}
            <span className="text-[#f2c029]">EcoRise</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white sm:text-xl">
            Inspiring youth to build a sustainable tomorrow through hands-on
            education, youth-led innovation, and community partnerships.
          </p>
        </div>
      </section>

      <AboutMissionSection />

      <ImpactAtAGlance />

      <Team />
    </>
  );
}
