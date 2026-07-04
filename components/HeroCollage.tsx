import Image from "next/image";
import { heroCollagePhotos } from "@/lib/homepage-data";

export function HeroCollage() {
  return (
    <div
      className="relative mx-auto aspect-[4/5] w-full max-w-md sm:aspect-[5/6]"
      aria-label="EcoRise summer camp session photos"
    >
      <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_50%_50%,rgba(193,235,132,0.45),transparent_72%)] blur-xl sm:-inset-5" />

      {heroCollagePhotos.map((photo, index) => (
        <div
          key={photo.src}
          className={`absolute overflow-hidden rounded-2xl border-[3px] border-white bg-white shadow-[0_12px_40px_rgba(27,67,50,0.18)] ${photo.className}`}
          style={{
            transform:
              "rotate" in photo ? `rotate(${photo.rotate}deg)` : undefined,
          }}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            quality={95}
            className="object-cover"
            style={{ objectPosition: photo.objectPosition }}
            sizes="(max-width: 1024px) 55vw, 640px"
            priority={index < 3}
          />
        </div>
      ))}
    </div>
  );
}
