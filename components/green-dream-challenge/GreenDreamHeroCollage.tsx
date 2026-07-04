import { gdcHeroPhotos } from "@/lib/green-dream-challenge-data";
import Image from "next/image";

export function GreenDreamHeroCollage() {
  return (
    <div
      className="relative mx-auto aspect-[4/5] w-full max-w-md sm:aspect-[5/6] lg:max-w-none"
      aria-label="Green Dream Challenge student project photos"
    >
      <div className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_50%_45%,rgba(193,235,132,0.4),transparent_68%)] blur-2xl sm:-inset-8" />
      <div className="absolute -inset-3 rounded-[2rem] bg-[radial-gradient(circle_at_70%_20%,rgba(202,138,4,0.15),transparent_55%)] blur-xl" />

      {gdcHeroPhotos.map((photo, index) => (
        <div
          key={photo.src}
          className={`absolute overflow-hidden rounded-2xl border-[3px] border-white bg-white shadow-[0_16px_48px_rgba(0,0,0,0.35)] transition-transform duration-500 hover:scale-[1.02] sm:rounded-[1.25rem] ${photo.className}`}
          style={{ transform: `rotate(${photo.rotate}deg)` }}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            quality={92}
            className="object-cover"
            style={{ objectPosition: photo.objectPosition }}
            sizes="(max-width: 1024px) 55vw, 480px"
            priority={index === 0}
          />
        </div>
      ))}

      <div
        className="pointer-events-none absolute -bottom-2 -right-2 z-40 rounded-full border-2 border-white/90 bg-[#ca8a04] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg sm:px-4 sm:text-xs"
        aria-hidden="true"
      >
        Student Projects
      </div>
    </div>
  );
}
