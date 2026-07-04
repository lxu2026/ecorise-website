import {
  schoolLogosBottomRow,
  schoolLogosTopRow,
  type SchoolLogo,
} from "@/lib/school-logos-data";
import Image from "next/image";

type MarqueeRowProps = {
  logos: SchoolLogo[];
  direction: "left" | "right";
};

function MarqueeRow({ logos, direction }: MarqueeRowProps) {
  const animationClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  const renderLogo = (logo: SchoolLogo, index: number, hidden: boolean) => (
    <div
      key={`${logo.src}-${hidden ? "dup" : "orig"}-${index}`}
      className="flex h-16 w-36 shrink-0 items-center justify-center sm:h-20 sm:w-44"
      aria-hidden={hidden || undefined}
    >
      <Image
        src={logo.src}
        alt={hidden ? "" : logo.alt}
        width={176}
        height={80}
        className="max-h-full max-w-full object-contain"
        draggable={false}
      />
    </div>
  );

  return (
    <div className="relative flex overflow-hidden">
      <div
        className={`flex w-max shrink-0 items-center gap-8 py-2 sm:gap-10 ${animationClass}`}
      >
        {logos.map((logo, index) => renderLogo(logo, index, false))}
        {logos.map((logo, index) => renderLogo(logo, index, true))}
      </div>
    </div>
  );
}

export function SchoolLogosMarquee() {
  return (
    <section
      aria-label="Partner schools"
      className="relative overflow-hidden border-b border-slate-100 bg-white py-10 sm:py-12"
    >
      <div className="relative space-y-4 sm:space-y-5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24"
        />

        <MarqueeRow logos={schoolLogosTopRow} direction="left" />
        <MarqueeRow logos={schoolLogosBottomRow} direction="right" />
      </div>
    </section>
  );
}
