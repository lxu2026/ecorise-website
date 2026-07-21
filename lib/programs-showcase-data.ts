import { sitePhotoUsage } from "@/lib/site-photos";

export type ProgramShowcaseCard = {
  title: string;
  href: string;
  image: string;
  hoverDescription: string;
  objectPosition?: string;
};

export const programShowcaseCards: ProgramShowcaseCard[] = [
  {
    title: "Summer Camp",
    href: "/summer-camp",
    image: sitePhotoUsage.programCards.summerCamp,
    objectPosition: "62% 42%",
    hoverDescription:
      "Five weeks of hands-on sustainability workshops, field activities, and guest speakers for grades K–8. Students explore local ecosystems, build environmental leadership skills, and cap the journey at the Green Dream Showcase.",
  },
  {
    title: "Green Dream",
    href: "/green-dream-challenge",
    image: sitePhotoUsage.programCards.greenDream,
    objectPosition: "center 35%",
    hoverDescription:
      "Students pitch bold environmental ideas, receive expert feedback, and compete for resources to turn advocacy and innovation projects into real community impact. Compete solo or in teams of up to three.",
  },
  {
    title: "Office Hours",
    href: "/office-hours-faqs",
    image: sitePhotoUsage.programCards.officeHours,
    objectPosition: "center 40%",
    hoverDescription:
      "Drop in for personalized mentorship on your sustainability project. Check our live schedule for drop-in sessions at local libraries—spots are first-come, first-served.",
  },
];

export const missionFullText =
  "EcoRise is founded on the belief that every student deserves access to sustainability education that brings their ideas—and their passion for the planet—to life. Through hands-on learning, creative projects, and community partnerships, we help K–12 students build critical thinking, problem-solving, and leadership skills that last a lifetime. The next generation of environmental leaders is ready to make an impact—we give them the platform to do it.";

export const missionShortText =
  "We empower K–12 students through hands-on sustainability education, creative innovation, and community partnerships.";

export { missionCarouselPhotos } from "@/lib/site-photos";
export type { MissionCarouselPhoto } from "@/lib/site-photos";
