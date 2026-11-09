import { sitePhotoUsage } from "@/lib/site-photos";

export type CommunityRecapPhoto = {
  src: string;
  alt: string;
  objectPosition?: string;
};

export type CommunityRecap = {
  id: string;
  eyebrow: string;
  title: string;
  date?: string;
  location: string;
  studentsReached?: number;
  paragraphs: string[];
  photos: CommunityRecapPhoto[];
};

export const communityRecapsContent = {
  title: "In the Community",
  subtitle:
    "Highlights from school visits, summits, fairs, and workshops where EcoRise youth leaders connect with students and families across Naperville.",
} as const;

export const communityRecaps: CommunityRecap[] = [
  {
    id: "finance-summit",
    eyebrow: "Event Recap",
    title: "Neuqua Valley Finance Summit",
    location: "Neuqua Valley High School",
    studentsReached: 50,
    paragraphs: [
      "EcoRise joined the Neuqua Valley Finance Summit to share our journey, results from past programs, and ways students can get involved.",
      "We met peers looking to join and student organizations interested in working together.",
    ],
    photos: [
      {
        src: sitePhotoUsage.aboutFinanceSummit[0],
        alt: "EcoRise presenters speaking at the Neuqua Valley Finance Summit, with the EcoRise slide behind them and students seated in the audience",
      },
      {
        src: sitePhotoUsage.aboutFinanceSummit[1],
        alt: "An EcoRise presenter giving the Finance Summit pitch beside a slide about the mission, impact, and volunteer opportunities",
      },
      {
        src: sitePhotoUsage.aboutFinanceSummit[2],
        alt: "Two EcoRise presenters in suits standing in front of the Neuqua Valley crest",
      },
    ],
  },
  {
    id: "mission-shanti-2026",
    eyebrow: "Event Recap",
    title: "Mission Shanti Passion Project Networking Fair",
    date: "Sunday, September 20, 2026",
    location: "Naperville Alive Center",
    studentsReached: 20,
    paragraphs: [
      "EcoRise was proud to participate in Mission Shanti's Passion Project Networking Fair at the Naperville Alive Center.",
      "At the fair, EcoRise hosted an interactive booth where students and families connected with our team, participated in a quick hands-on activity, and learned how youth leaders are driving environmental advocacy and sustainability education across Naperville.",
      "Thank you to everyone who stopped by our booth and to Mission Shanti for hosting a wonderful event!",
    ],
    photos: [
      {
        src: sitePhotoUsage.aboutMissionShanti[0],
        alt: "EcoRise team members smiling beside the EcoRise banner at the Mission Shanti Passion Project Networking Fair",
        objectPosition: "center 35%",
      },
      {
        src: sitePhotoUsage.aboutMissionShanti[1],
        alt: "EcoRise volunteer presenting the booth laptop and QR code at the Naperville Alive Center",
        objectPosition: "center 40%",
      },
      {
        src: sitePhotoUsage.aboutMissionShanti[2],
        alt: "EcoRise volunteer speaking with a visitor at the Passion Project Networking Fair booth",
        objectPosition: "center 35%",
      },
      {
        src: sitePhotoUsage.aboutMissionShanti[3],
        alt: "EcoRise volunteers talking with a student next to the EcoRise banner",
        objectPosition: "center 40%",
      },
    ],
  },
  {
    id: "nveco-talk",
    eyebrow: "Event Recap",
    title: "NVeco Talk",
    location: "Neuqua Valley High School",
    studentsReached: 25,
    paragraphs: [
      "EcoRise visited Neuqua Valley's Environmental Club, NVeco, to introduce our nonprofit and share Summer Camp and the Green Dream Challenge.",
      "We talked about volunteer opportunities and led an Environmental Taboo game. The visit also opened up future work with NVeco and Interact.",
    ],
    photos: [
      {
        src: sitePhotoUsage.aboutNveco[0],
        alt: "EcoRise presenters speaking to Neuqua Valley students during the NVeco visit, with a Who We Are slide on the screen",
        objectPosition: "center center",
      },
      {
        src: sitePhotoUsage.aboutNveco[1],
        alt: "Two EcoRise presenters in front of a Who We Are slide at Neuqua Valley High School",
        objectPosition: "center center",
      },
      {
        src: sitePhotoUsage.aboutNveco[2],
        alt: "An EcoRise presenter with a smiling student during the Environmental Taboo game",
        objectPosition: "center center",
      },
      {
        src: sitePhotoUsage.aboutNveco[3],
        alt: "An EcoRise presenter speaking to the class with the Green Dream Challenge slide behind him",
        objectPosition: "center center",
      },
    ],
  },
];
