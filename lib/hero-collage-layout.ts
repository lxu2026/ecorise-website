/** Shared 3-photo hero collage frame layout (Green Dream & Summer Camp). */
export const threePhotoHeroCollageFrames = [
  {
    className: "left-0 top-0 z-30 h-[48%] w-[62%]",
    objectPosition: "center 40%",
    rotate: -3.5,
  },
  {
    className: "right-0 top-[2%] z-20 h-[36%] w-[48%]",
    objectPosition: "center 35%",
    rotate: 4,
  },
  {
    className: "bottom-[5%] left-[14%] z-10 h-[44%] w-[58%]",
    objectPosition: "center 35%",
    rotate: -1.5,
  },
] as const;

export const heroCollageWrapperClassName =
  "flex justify-center lg:justify-end lg:pl-4";

export const heroCollageInnerClassName =
  "w-full max-w-md lg:max-w-[32rem] xl:max-w-[36rem]";

export const heroCollageGridClassName =
  "grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 xl:gap-16";
