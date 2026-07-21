/**
 * Site-wide photo assignments. Each path may appear in exactly one location.
 * Update this file when adding or moving photos.
 */
export const sitePhotoUsage = {
  homeHeroCollage: [
    "/images/mission/classroom-activity.jpg",
    "/images/home/hero/hero-grid-5.jpg",
    "/images/home/hero/hero-grid-14.jpg",
    "/images/home/hero/hero-grid-12.jpg",
    "/images/home/hero/hero-grid-13.jpg",
    "/images/home/hero/hero-grid-10.jpg",
    "/images/home/hero/hero-grid-18.jpg",
    "/images/home/hero/hero-grid-21.jpg",
    "/images/home/hero/hero-grid-22.jpg",
  ],
  missionCarousel: [
    "/images/mission/hands-raised-classroom.jpg",
    "/images/mission/workshop-colored-pencils.jpg",
    "/images/mission/workshop-activity-2.jpg",
  ],
  programCards: {
    summerCamp: "/images/home/programs/summer-camp-table-collab.jpg",
    greenDream: "/images/home/programs/green-dream-tote-decorating.jpg",
    officeHours: "/images/home/programs/office-hours-study-table.jpg",
  },
  greenDreamChallengeHero: [
    "/images/green-dream/collaborative-workshop.jpg",
    "/images/green-dream/student-presentation.jpg",
    "/images/home/hero/workshop.jpg",
  ],
  aboutHero: "/images/about/thanks-for-coming-hero.jpg",
  aboutInTheNews: [
    "/images/about/95th-street-library.jpg",
    "/images/about/daily-herald-sign.jpg",
    "/images/about/white-eagle-elementary.jpg",
  ],
  aboutMission: "/images/mission-tote-bag.png",
  officeHoursHero: "/images/office-hours/tote-decorating-hero.jpg",
  summerCampHeroCollage: [
    "/images/summer-camp/hero/group-at-table.jpg",
    "/images/summer-camp/hero/table-session.jpg",
    "/images/summer-camp/hero/workshop-activity.jpg",
  ],
  summerCampWeeks: {
    week1: {
      hero: "/images/summer-camp/week-1/hero-instructor.jpg",
      gallery: [
        "/images/summer-camp/week-1/workshop-1.jpg",
        "/images/summer-camp/week-1/workshop-2.jpg",
        "/images/home/hero/camp-mentor.jpg",
        "/images/summer-camp/week-1/workshop-4.jpg",
      ],
      speaker: "/images/summer-camp/week-1/ben-mjolsness.jpg",
    },
    week2: {
      hero: "/images/summer-camp/week-2/hero-microphone.jpg",
      gallery: [
        "/images/summer-camp/week-2/workshop-1.jpg",
        "/images/summer-camp/week-2/week-2-save-the-planet.jpg",
        "/images/summer-camp/week-2/workshop-3.jpg",
        "/images/summer-camp/week-2/workshop-4.jpg",
      ],
      speaker: "/images/summer-camp/week-2/catherine-clarkin-headshot.png",
    },
    week3: {
      hero: "/images/summer-camp/week-3/hero-podium.jpg",
      gallery: [
        "/images/summer-camp/week-3/week-3-hand-raised-podium.jpg",
        "/images/summer-camp/week-3/gallery-group.jpg",
        "/images/summer-camp/week-3/workshop-3.jpg",
        "/images/summer-camp/week-3/workshop-4.jpg",
      ],
      speaker: "/images/summer-camp/week-3/elizabeth-mcdermott-headshot.png",
    },
    week4: {
      hero: "/images/summer-camp/week-4/hero-guest-speaker.jpg",
      gallery: [
        "/images/summer-camp/week-4/workshop-1.jpg",
        "/images/summer-camp/week-4/workshop-2.jpg",
        "/images/summer-camp/week-4/workshop-3.jpg",
        "/images/summer-camp/week-4/workshop-collaboration.jpg",
      ],
      speakers: [
        "/images/summer-camp/week-4/daniel-randolph.jpg",
        "/images/summer-camp/week-4/brook-mcdonald.jpg",
      ],
    },
    week5: {
      hero: "/images/summer-camp/week-5/workshop-1.jpg",
      gallery: [
        "/images/summer-camp/week-5/hero-guest-speaker.jpg",
        "/images/summer-camp/week-5/workshop-3.jpg",
        "/images/summer-camp/week-5/workshop-2.jpg",
      ],
      speakers: [
        "/images/summer-camp/week-5/walter-willis.jpg",
        "/images/summer-camp/week-5/laura-ellman.jpg",
        "/images/summer-camp/week-5/briana-moore.jpg",
      ],
    },
  },
} as const;

export type MissionCarouselPhoto = {
  src: string;
  alt: string;
  objectPosition?: string;
};

export const missionCarouselPhotos: MissionCarouselPhoto[] = [
  {
    src: sitePhotoUsage.missionCarousel[0],
    alt: "EcoRise camp students raising their hands during a classroom session",
    objectPosition: "65% 42%",
  },
  {
    src: sitePhotoUsage.missionCarousel[1],
    alt: "EcoRise student working with colored pencils during a workshop",
    objectPosition: "center 45%",
  },
  {
    src: sitePhotoUsage.missionCarousel[2],
    alt: "EcoRise students collaborating on worksheets at a workshop table",
    objectPosition: "center 45%",
  },
];

/** Processed files not yet assigned to a page — safe for your next uploads/swaps. */
export const unassignedPhotos = [
  "/images/home/hero/hero-grid-8.jpg",
  "/images/home/hero/hero-grid-17.jpg",
  "/images/home/hero/camp-friends-duo.jpg",
  "/images/mission/advocacy-workshop.jpg",
  "/images/home/programs/summer-camp-instructor-microphone.jpg",
  "/images/about-community.jpg",
  "/images/about/group-photo-hero.jpg",
  "/images/green-dream/classroom-engagement.jpg",
  "/images/home/hero/presentation.jpg",
  "/images/home/hero/networking-bingo.jpg",
  "/images/summer-camp/week-3/guest-speaker-thanks.jpg",
  "/images/summer-camp/week-3/guest-speaker-session.jpg",
  "/images/home/hero/compost-posters.jpg",
  "/images/home/hero/save-turtles.jpg",
  "/images/home/hero/mentor-volunteer.jpg",
  "/images/home/hero/mentorship.jpg",
  "/images/home/hero/team-celebration.jpg",
  "/images/home/hero/hero-grid-4.jpg",
  "/images/home/hero/hero-grid-9.jpg",
  "/images/home/hero/hero-grid-11.jpg",
  "/images/home/hero/student-presenting.jpg",
  "/images/home/hero/student-engagement.jpg",
  "/images/home/hero/decorating-tote.jpg",
  "/images/home/hero/guest-speaker.jpg",
  "/images/home/hero/camp-friends.jpg",
  "/images/summer-camp/week-1/guest-speaker-session.jpg",
  "/images/summer-camp/week-1/group-photo.jpg",
  "/images/summer-camp/week-2/group-photo.jpg",
  "/images/summer-camp/week-2/student-artwork-thumbs-up.jpg",
  "/images/summer-camp/week-2/week-2-student-thumbs-up.jpg",
  "/images/summer-camp/week-2/workshop-2.jpg",
  "/images/summer-camp/week-3/group-photo.jpg",
  "/images/summer-camp/week-3/workshop-1.jpg",
  "/images/summer-camp/week-3/workshop-2.jpg",
  "/images/summer-camp/week-1/workshop-3.jpg",
  "/images/ecorise-post-sample.jpg",
] as const;
