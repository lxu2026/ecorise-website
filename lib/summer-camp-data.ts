export type CampSpeaker = {
  name: string;
  title: string;
  talkTitle: string;
  talkDescription: string;
  quote?: string;
  photoLabel?: string;
  photo?: string;
};

import { sitePhotoUsage } from "@/lib/site-photos";
import { threePhotoHeroCollageFrames } from "@/lib/hero-collage-layout";

export type CampWeek = {
  id: string;
  week: number;
  shortLabel: string;
  title: string;
  date: string;
  location: string;
  summary: string;
  speakerLabel?: string;
  guestSpeakers: CampSpeaker[];
  /** When "below", speakers render under the gallery (e.g. Week 5). Default: right sidebar. */
  speakerPlacement?: "sidebar" | "below";
  heroImage?: string;
  galleryImages?: { src: string; alt: string }[];
  photoLabel: string;
  photoGradient: string;
};

export const campHero = {
  eyebrow: "Summer 2026",
  titleMain: "EcoRise",
  titleAccent: "Camp",
  description:
    "Our five-part sustainability journey takes students from environmental discovery to community-ready projects through hands-on workshops, field activities, and expert mentorship.",
  registerUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfb8ECoXsXSvHCHpQqemmrbpkM1YUd8-4ovnQjgA5_v8HLELQ/viewform?usp=header",
  registerLabel: "Join 2027 Waitlist",
  stats: [
    { value: "5", label: "Camp Weeks" },
    { value: "8", label: "Guest Speakers" },
    { value: "100+", label: "Students Taught" },
  ],
};

export const campHeroPhotos = [
  {
    src: sitePhotoUsage.summerCampHeroCollage[0],
    alt: "EcoRise summer camp students and mentors gathered around a workshop table",
    ...threePhotoHeroCollageFrames[0],
  },
  {
    src: sitePhotoUsage.summerCampHeroCollage[1],
    alt: "Students collaborating on a sustainability activity during EcoRise camp",
    ...threePhotoHeroCollageFrames[1],
  },
  {
    src: sitePhotoUsage.summerCampHeroCollage[2],
    alt: "Students working on creative sustainability projects at EcoRise camp",
    ...threePhotoHeroCollageFrames[2],
  },
] as const;

export const campIntro = {
  title: "2026 Sustainability Camp",
  description:
    "Each camp session builds on the previous one, creating a comprehensive environmental leadership journey that takes K–8th grade students from exploring local ecosystems to presenting at the Green Dream Showcase.",
};

export const campWeeks: CampWeek[] = [
  {
    id: "week-1",
    week: 1,
    shortLabel: "Sustainability & Carbon Footprint",
    title: "Sustainability & Carbon Footprint",
    date: "June 13, 2026",
    location: "95th Street Library, Naperville",
    summary:
      "In Session 1, students kicked off EcoRise Summer Camp by learning what sustainability means and how everyday choices shape our carbon footprint. After exploring emissions, energy use, and personal impact with camp instructors, students built simple action plans to live more sustainably at home and school.",
    speakerLabel: "Guest Speaker",
    guestSpeakers: [
      {
        name: "Ben Mjolsness",
        title: "Sustainability Manager, City of Naperville",
        talkTitle: "",
        talkDescription: "",
        quote:
          "It's exciting to see the youth change the world for the better.",
        photo: "/images/summer-camp/week-1/ben-mjolsness.jpg",
      },
    ],
    heroImage: "/images/summer-camp/week-1/hero-instructor.jpg",
    galleryImages: [
      {
        src: "/images/summer-camp/week-1/workshop-1.jpg",
        alt: "Students working together during a sustainability workshop",
      },
      {
        src: "/images/summer-camp/week-1/workshop-2.jpg",
        alt: "Students collaborating on a camp activity",
      },
      {
        src: "/images/home/hero/camp-mentor.jpg",
        alt: "EcoRise camp mentor guiding students during a session",
      },
      {
        src: "/images/summer-camp/week-1/workshop-4.jpg",
        alt: "Students reviewing materials during camp",
      },
    ],
    photoLabel: "Week 1 — Carbon Footprint",
    photoGradient: "from-ecorise-400 to-ecorise-700",
  },
  {
    id: "week-2",
    week: 2,
    shortLabel: "Carbon Cycle & Climate Change",
    title: "Carbon Cycle & Climate Change",
    date: "June 20, 2026",
    location: "95th Street Library, Naperville",
    summary:
      "In Session 2, students explored the carbon cycle and learned how it connects to climate change in our atmosphere, oceans, and ecosystems. After building models and discussing greenhouse gases with camp instructors, students investigated local climate impacts and brainstormed community solutions.",
    speakerLabel: "Guest Speaker",
    guestSpeakers: [
      {
        name: "Catherine Clarkin",
        title: "Executive Director of Accelerate Climate Solutions",
        talkTitle: "",
        talkDescription: "",
        quote: "It's more important than ever to build knowledge and skills to tackle climate change and biodiversity loss.",
        photo: "/images/summer-camp/week-2/catherine-clarkin-headshot.png",
      },
    ],
    heroImage: "/images/summer-camp/week-2/hero-microphone.jpg",
    galleryImages: [
      {
        src: "/images/summer-camp/week-2/workshop-1.jpg",
        alt: "Students holding Compost Is Cool posters",
      },
      {
        src: "/images/summer-camp/week-2/week-2-save-the-planet.jpg",
        alt: "Student holding a Save the Planet poster at camp",
      },
      {
        src: "/images/summer-camp/week-2/workshop-3.jpg",
        alt: "Student presenting a Follow the 3 Rs poster",
      },
      {
        src: "/images/summer-camp/week-2/workshop-4.jpg",
        alt: "Camp mentor with a student and Save Turtles artwork",
      },
    ],
    photoLabel: "Week 2 — Climate Change",
    photoGradient: "from-[#c1eb84] to-ecorise-600",
  },
  {
    id: "week-3",
    week: 3,
    shortLabel: "Reduce, Reuse & Recycle",
    title: "Reduce, Reuse & Recycle",
    date: "June 27, 2026",
    location: "95th Street Library, Naperville",
    summary:
      "In Session 3, students learned the reduce, reuse, and recycle hierarchy through hands-on sorting activities and creative upcycling projects. After decorating reusable tote bags and designing zero-waste solutions with camp instructors, students planned ways to share what they learned back at school.",
    speakerLabel: "Guest Speaker",
    guestSpeakers: [
      {
        name: "Elizabeth McDermott",
        title: "Sustainability and Conservation Professional, The Morton Arboretum",
        talkTitle: "",
        talkDescription: "",
        quote:
          "Trees do a lot for us because they protect the environment and make our communities safer places to live.",
        photo: "/images/summer-camp/week-3/elizabeth-mcdermott-headshot.png",
      },
    ],
    heroImage: "/images/summer-camp/week-3/hero-podium.jpg",
    galleryImages: [
      {
        src: "/images/summer-camp/week-3/week-3-hand-raised-podium.jpg",
        alt: "Student raising their hand during a guest speaker session at Session 3",
      },
      {
        src: "/images/summer-camp/week-3/gallery-group.jpg",
        alt: "EcoRise summer camp students gathered during Session 3",
      },
      {
        src: "/images/summer-camp/week-3/workshop-3.jpg",
        alt: "Student decorating a tote bag with Posca markers",
      },
      {
        src: "/images/summer-camp/week-3/workshop-4.jpg",
        alt: "Close-up of a student drawing on a reusable tote bag",
      },
    ],
    photoLabel: "Week 3 — Reduce, Reuse, Recycle",
    photoGradient: "from-ecorise-300 to-ecorise-800",
  },
  {
    id: "week-4",
    week: 4,
    shortLabel: "Green Dream Workshop",
    title: "Green Dream Workshop",
    date: "July 10, 2026",
    location: "95th Street Library, Naperville",
    summary:
      "In Session 4, students dived into the Green Dream competition by identifying real-world sustainability challenges right here in Naperville. Working in a hands-on workshop environment with camp instructors, students brainstormed impactful ideas and began developing practical solutions for their community-focused projects. By the end of the session, students gained the foundational skills needed to research, structure, and pitch their unique sustainability goals.",
    speakerLabel: "Guest Speaker",
    guestSpeakers: [
      {
        name: "Daniel Randolph",
        title: "Director of Public Works, City of Naperville",
        talkTitle: "",
        talkDescription: "",
        quote: "Powering Tomorrow with Clean Energy",
        photo: "/images/summer-camp/week-4/daniel-randolph.jpg",
      },
      {
        name: "Brook McDonald",
        title: "President and CEO of The Conservation Foundation",
        talkTitle: "",
        talkDescription: "",
        photo: "/images/summer-camp/week-4/brook-mcdonald.jpg",
      },
    ],
    heroImage: "/images/summer-camp/week-4/hero-guest-speaker.jpg",
    galleryImages: [
      {
        src: "/images/summer-camp/week-4/workshop-1.jpg",
        alt: "Guest speaker presenting on renewable energy and community planning to EcoRise camp students",
      },
      {
        src: "/images/summer-camp/week-4/workshop-2.jpg",
        alt: "Students and instructors collaborating during a renewable energy workshop",
      },
      {
        src: "/images/summer-camp/week-4/workshop-3.jpg",
        alt: "EcoRise camp mentor working with students at a workshop table",
      },
      {
        src: "/images/summer-camp/week-4/workshop-collaboration.jpg",
        alt: "Students collaborating on a Developing a Solution project during EcoRise camp",
      },
    ],
    photoLabel: "Week 4 — Green Dream Workshop",
    photoGradient: "from-ecorise-500 to-ecorise-900",
  },
  {
    id: "week-5",
    week: 5,
    shortLabel: "Green Dream Preparation",
    title: "Green Dream Preparation",
    date: "July 18, 2026",
    location: "95th Street Library, Naperville",
    summary:
      "In Session 5, students prepared for the Green Dream competition with a competitive round of trivia that reviewed what they learned over the past couple of weeks. Teams then worked with camp instructors to refine their community projects and action plans, with guest speakers helping them bring their ideas to life.",
    speakerLabel: "Guest Speaker",
    speakerPlacement: "below",
    guestSpeakers: [
      {
        name: "Walter Willis",
        title: "Executive Director of the Solid Waste Agency of Lake County (SWALCO)",
        talkTitle: "",
        talkDescription: "",
        photo: "/images/summer-camp/week-5/walter-willis.jpg",
      },
      {
        name: "Laura Ellman",
        title: "Illinois State Senator,\n21st District",
        talkTitle: "",
        talkDescription: "",
        photo: "/images/summer-camp/week-5/laura-ellman.jpg",
      },
      {
        name: "Briana Moore",
        title: "Recycling Program Specialist, Will County Land Use Department",
        talkTitle: "",
        talkDescription: "",
        photo: "/images/summer-camp/week-5/briana-moore.jpg",
      },
    ],
    heroImage: "/images/summer-camp/week-5/workshop-1.jpg",
    galleryImages: [
      {
        src: "/images/summer-camp/week-5/hero-guest-speaker.jpg",
        alt: "Walter Willis of SWALCO presenting to EcoRise camp students during Session 5",
      },
      {
        src: "/images/summer-camp/week-5/workshop-3.jpg",
        alt: "Student writing and refining a Green Dream Showcase presentation at camp",
      },
      {
        src: "/images/summer-camp/week-5/workshop-engagement.jpg",
        alt: "EcoRise camp students raising their hands during the Green Dream Preparation session",
      },
      {
        src: "/images/summer-camp/week-5/workshop-2.jpg",
        alt: "Guest speaker Briana Moore presenting to EcoRise camp students during Session 5",
      },
    ],
    photoLabel: "Week 5 — Green Dream Preparation",
    photoGradient: "from-[#c1eb84] to-ecorise-500",
  },
];
