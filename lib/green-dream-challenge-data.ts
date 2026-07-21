import { sitePhotoUsage } from "@/lib/site-photos";
import { threePhotoHeroCollageFrames } from "@/lib/hero-collage-layout";

export const gdcHero = {
  eyebrow: "Student Competition",
  title: ["Green Dream", "Challenge"],
  description: "Let's make our community more sustainable!",
  summary:
    "Students pitch sustainability ideas, receive expert feedback, and compete for resources to turn advocacy and innovation projects into real community impact.",
  registerUrl:
    "https://docs.google.com/forms/d/1YskZjiVPIxnXGNDMdZixWNu1XVTIyWyZV6T69RriiQQ/viewform",
  registerTitle: "Sign Up Green Dream Challenge",
  eventDate: "August 1st, 2026",
  eventLocation: "Benedictine University",
};

export const gdcHeroPhotos = [
  {
    src: sitePhotoUsage.greenDreamChallengeHero[0],
    alt: "EcoRise students collaborating at a table during a Green Dream Challenge workshop",
    ...threePhotoHeroCollageFrames[0],
    objectPosition: "58% 40%",
  },
  {
    src: sitePhotoUsage.greenDreamChallengeHero[1],
    alt: "Student presenting a sustainability project on paper during Green Dream Challenge",
    ...threePhotoHeroCollageFrames[1],
    objectPosition: "center 30%",
  },
  {
    src: sitePhotoUsage.greenDreamChallengeHero[2],
    alt: "Students collaborating during a sustainability workshop",
    ...threePhotoHeroCollageFrames[2],
    objectPosition: "58% 40%",
  },
] as const;

export const gdcAbout = {
  title: "What is Green Dream Challenge?",
  intro: [
    "Green Dream Challenge invites students to turn sustainability ideas into real projects.",
    "Compete solo or with a team of up to 3 members and choose the path that fits your strengths.",
  ],
};

export const gdcProjectPaths = [
  {
    id: "advocacy",
    title: "Advocacy",
    description:
      "Posters, art, photography, video, podcasts, poems, campaigns, and more.",
    judgingCriteria: [
      "Creativity",
      "Educational value",
      "Message clarity",
      "Potential impact",
    ],
    accentClass: "border-orange-200",
    titleClass: "text-orange-700",
    badgeClass: "border border-orange-200 text-orange-800",
  },
  {
    id: "innovation",
    title: "Innovation",
    description:
      "Apps, solar ideas, smart recycling bins, water-saving devices, waste-sorting tools, pond cleanup robots, and more.",
    judgingCriteria: [
      "Innovation",
      "Technical design",
      "Feasibility",
      "Impact",
    ],
    accentClass: "border-sky-200",
    titleClass: "text-sky-800",
    badgeClass: "border border-sky-200 text-sky-800",
  },
] as const;

export const gdcOfficeHours = {
  title: "Don't Miss Office Hours!",
  description:
    "Need help getting started? Already signed up? Office Hours are the best way to strengthen your project.",
  bullets: [
    "Brainstorm with sustainability professionals and high school students",
    "Get feedback on your idea",
    "Bring your team of up to 3 members",
    "You do NOT need a finished idea to attend",
  ],
  signupTitle: "Join Office Hours",
  signupUrl:
    "https://docs.google.com/spreadsheets/d/1W-_dEzlLDpQ63LwF3eQXvaBQwa-ByD07TWt7ZegUkes/edit?gid=2018078811#gid=2018078811",
};

export const gdcSteps = [
  {
    step: 1,
    title: "Sign Up Online",
    description:
      "Register for Green Dream Challenge and let us know whether you're competing solo or with a team of up to 3.",
  },
  {
    step: 2,
    title: "Choose Your Project Path",
    description:
      "Decide between Advocacy or Innovation and start shaping a project that makes your community more sustainable.",
  },
  {
    step: 3,
    title: "Join Office Hours",
    description:
      "Meet with EcoRise mentors and sustainability professionals to brainstorm, refine your idea, and prepare your submission.",
  },
  {
    step: 4,
    title: "Compete for Cash Awards",
    description:
      "Present your project and compete for a share of $750 in total cash awards.",
  },
] as const;
