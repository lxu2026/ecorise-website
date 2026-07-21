import { programShowcaseCards } from "@/lib/programs-showcase-data";
import Image from "next/image";
import Link from "next/link";

export function OurPrograms() {
  return (
    <div id="programs" className="scroll-mt-24 mt-14 border-t border-slate-200 pt-16 sm:mt-16 lg:mt-20 lg:pt-20">
      <div className="text-center">
        <h3 className="font-display text-5xl font-bold text-[#1b4332] sm:text-6xl">
          Our Programs
        </h3>
        <p className="mx-auto mt-5 max-w-2xl text-xl text-slate-600 sm:text-2xl">
          Explore hands-on sustainability programs for K–12 students
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
        {programShowcaseCards.map((program) => (
          <Link
            key={program.title}
            href={program.href}
            aria-label={`${program.title}. ${program.hoverDescription}`}
            className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-200/80 transition-[box-shadow,ring-color] duration-300 hover:shadow-lg hover:ring-2 hover:ring-[#4a7c44]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4a7c44] focus-visible:ring-offset-2"
          >
            <Image
              src={program.image}
              alt=""
              fill
              quality={92}
              className="object-cover"
              style={{ objectPosition: program.objectPosition ?? "center center" }}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
              priority={program.title === "Summer Camp"}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/5 to-transparent transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0" />

            <div className="absolute inset-0 bg-black/65 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />

            <div className="absolute inset-x-0 top-0 p-6 sm:p-7">
              <h4 className="font-display text-3xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-white/85 group-focus-visible:text-white/85 sm:text-4xl">
                {program.title}
              </h4>
            </div>

            <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 sm:p-8">
              <p className="max-w-[90%] text-center text-lg leading-relaxed text-white sm:text-xl">
                {program.hoverDescription}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
