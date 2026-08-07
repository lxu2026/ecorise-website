import { sitePhotoUsage } from "@/lib/site-photos";

type GdcHighlightCell =
  | { type: "photo"; src: string; alt: string; objectPosition?: string }
  | { type: "empty" };

export const gdcHero = {
  title: ["GREEN", "DREAM"] as const,
  description:
    "Students presented sustainability ideas, received expert feedback, and earned recognition and cash awards for advocacy and innovation projects that create real community impact.",
  primaryCtaLabel: "Join Us →",
  primaryCtaUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSc8OhPgsSGQQN43J2D6QwYATrytkOBj8eIn8oLQ_v529_Kqlg/viewform?usp=dialog",
  learnMoreHref: "#about-gdc",
  editionBadge: "2026 Edition",
  eventDate: "August 1st, 2026",
  eventLocation: "Benedictine University",
  stats: [
    { value: "50+", label: "Competitors" },
    { value: "25", label: "Volunteers" },
    { value: "11", label: "Judges" },
  ] as const,
};

export const gdcHeroBg = sitePhotoUsage.greenDreamChallengeHeroBg;

export const gdcHeroPhotos = [
  {
    src: sitePhotoUsage.greenDreamChallengeHero[0],
    alt: "Green Dream Challenge winners and organizers posing with trophies and prize checks",
    objectPosition: "center 40%",
  },
  {
    src: sitePhotoUsage.greenDreamChallengeHero[1],
    alt: "Winning team PURELY holding a $250 prize check and first-place trophy",
    objectPosition: "center 35%",
  },
  {
    src: sitePhotoUsage.greenDreamChallengeHero[2],
    alt: "Large group of Green Dream Challenge competitors with certificates and prize checks",
    objectPosition: "center 40%",
  },
] as const;

export const gdcAbout = {
  eyebrow: "The Competition",
  titlePrefix: "What is",
  titleAccent: "Green Dream",
  titleSuffix: "?",
  cardHeading: "Welcome to Green Dream!",
  paragraphs: [
    "Green Dream Challenge gave students a stage to present environmental projects, from advocacy campaigns to innovation builds, and get real feedback from mentors and judges.",
    "On August 1st, 2026 at Benedictine University, competitors shared their ideas, celebrated their wins, and took home trophies, medals, and cash awards totaling $750.",
  ],
  eventDate: "August 1st, 2026",
  eventLocation: "Benedictine University",
};

export const gdcAboutPhoto = {
  src: sitePhotoUsage.greenDreamChallengeAbout,
  alt: "Green Dream Challenge trophies, medals, and prize checks arranged on a table",
  objectPosition: "center center",
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
      "Originality",
      "Technical design",
      "Feasibility",
      "Impact",
    ],
    accentClass: "border-sky-200",
    titleClass: "text-sky-800",
    badgeClass: "border border-sky-200 text-sky-800",
  },
] as const;

export const gdcContestDay = {
  title: "2026 Green Dream Challenge",
  subtitle:
    "A full day of student sustainability presentations, live Q&A with judges, and a celebration of the Top 5 winners.",
  venueLine: "Room 321, Goodwin Hall · 5700 College Rd, Lisle, IL",
  cards: [
    {
      id: "presentations",
      icon: "clock" as const,
      title: "Presentations",
      dateLabel: "August 1st, 2026 · presentations ran morning through afternoon",
      bullets: [
        "The lecture hall filled with competitors, mentors, and judges for a full day of presentations",
        "Students presented solo or in teams of up to 3",
        "Projects spanned advocacy campaigns and innovation builds",
        "Each team got a 5-minute presentation, then 5 minutes of Q&A with the judges",
        "Ideas ranged from community campaigns to hands-on prototypes",
      ],
    },
    {
      id: "awards",
      icon: "award" as const,
      title: "Award Ceremony",
      dateLabel: "August 1st, 2026 · closing celebration",
      bullets: [
        "After the final presentations, judges scored the projects and named the Top 5",
        "Winners were celebrated with trophies, medals, and cash prizes totaling $750",
        "Teams gathered for winner photos and a closing moment with the full room",
        "Students left proud of the environmental projects they’d built and presented",
      ],
    },
  ] as const,
};

/** Official Top 5 prize split — totals $750 (matches about copy; 1st aligns with PURELY $250 check). */
export const gdcPrizes = {
  title: "Prize Structure",
  places: [
    { place: 1, amount: "$250", label: "First Place", icon: "medal" as const },
    { place: 2, amount: "$200", label: "Second Place", icon: "medal" as const },
    { place: 3, amount: "$150", label: "Third Place", icon: "medal" as const },
    { place: 4, amount: "$100", label: "Fourth Place", icon: "trophy" as const },
    { place: 5, amount: "$50", label: "Fifth Place", icon: "star" as const },
  ] as const,
};

const [
  h01,
  h02,
  h03,
  h04,
  h05,
  h06,
  h07,
  h08,
  h09,
  h10,
  h11,
  h12,
  h13,
  h14,
  h15,
  h16,
] = sitePhotoUsage.greenDreamChallengeHighlights;

/**
 * 4×4 gallery — variety order (no adjacent banner photos; presentations/judges/audience interleaved).
 * Grid: group → audience → presentation → judges → medals → presentation → banner → audience →
 * presentation → judges → reaction → presentation → sponsor → presentation → banner → presentation
 */
export const gdcHighlights = {
  title: "Green Dream 2026 Highlights",
  subtitle: "Moments from this year’s competition.",
  cells: [
    { type: "photo", src: h01, alt: "Green Dream winners and competitors posing with certificates and prize checks", objectPosition: "center 40%" },
    { type: "photo", src: h02, alt: "Audience seated in the lecture hall during Green Dream presentations", objectPosition: "center 45%" },
    { type: "photo", src: h03, alt: "Student presenting a safety and sustainability project at the podium", objectPosition: "center 25%" },
    { type: "photo", src: h06, alt: "Judges panel seated at the front table during presentations", objectPosition: "center 45%" },
    { type: "photo", src: h12, alt: "Mentors placing medals on three Green Dream competitors", objectPosition: "center 40%" },
    { type: "photo", src: h13, alt: "Student presenting Naperville greenhouse gas graphs at the podium", objectPosition: "center 20%" },
    { type: "photo", src: h08, alt: "Group of five posing by the EcoRise Green Dream banner", objectPosition: "center 35%" },
    { type: "photo", src: h10, alt: "Two boys in suits with medals clapping in the lecture hall audience", objectPosition: "center 45%" },
    { type: "photo", src: h04, alt: "Competitor presenting a Who is Affected poster to the room", objectPosition: "center 20%" },
    { type: "photo", src: h07, alt: "Judges reviewing notes at the Green Dream judging table", objectPosition: "center 40%" },
    { type: "photo", src: h16, alt: "Young woman giving a thumbs up in the lecture hall", objectPosition: "center 40%" },
    { type: "photo", src: h14, alt: "Student in a blazer presenting a farmer packaging project slide", objectPosition: "center 25%" },
    { type: "photo", src: h11, alt: "Teen with glasses posing by the Green Dream sponsor board", objectPosition: "center 40%" },
    { type: "photo", src: h05, alt: "Student presenting an innovation prototype with a breadboard", objectPosition: "center 40%" },
    { type: "photo", src: h09, alt: "Two women posing by the EcoRise Green Dream banner", objectPosition: "center 35%" },
    { type: "photo", src: h15, alt: "Student presenting a Don’t Be Bitter, Stop the Litter advocacy slide", objectPosition: "center 25%" },
  ] as const satisfies readonly GdcHighlightCell[],
};

export type GdcWinnerEntry = {
  place: number;
  placeLabel: string;
  projectName: string;
  teamNames: string;
  description: string;
  /** Set when a winner photo is ready; null shows an empty photo slot. */
  imageSrc: string | null;
  imageAlt: string;
};

/**
 * 2026 winners — replace imageSrc + expand descriptions when photos/blurbs arrive.
 * Per place send: photo, projectName, teamNames, description.
 */
export const gdcWinners = {
  title: "2026 Green Dream Challenge Winners",
  titleAccent: "Winners",
  introBefore: "Celebrating the students who presented ",
  introAccent: "sustainability",
  introAfter:
    " ideas on contest day, from advocacy campaigns to innovation builds that earned Top 10 recognition and Rising Star awards.",
  firstPlace: {
    place: 1,
    placeLabel: "1st Place",
    projectName: "Purely",
    teamNames: "Shanvitha Palakurthi",
    description:
      "Purely is an all-natural, chemical-free, and affordable dishwasher detergent tablet created to replace conventional pods wrapped in microplastic-releasing PVA plastic film. By completely eliminating plastic packaging, Purely cleans dishes effectively without harsh odors, providing a safe solution for families while protecting aquatic life and keeping microplastics out of local water systems and Lake Michigan.",
    imageSrc: sitePhotoUsage.greenDreamChallengeWinners.firstPurely,
    imageAlt: "Shanvitha Palakurthi with the Purely first-place trophy and $250 prize check",
  } satisfies GdcWinnerEntry,
  runnerUps: [
    {
      place: 2,
      placeLabel: "2nd Place",
      projectName: "AquaFilter",
      teamNames: "Ethan Chen",
      description:
        "AquaFilter is a multi-stage filtration system that captures and purifies air conditioner condensate water. It removes debris and chemicals so the water can be reused for daily tasks, cutting waste.",
      imageSrc: sitePhotoUsage.greenDreamChallengeWinners.secondAquaFilter,
      imageAlt: "Ethan Chen with the AquaFilter second-place trophy and $200 prize check",
    },
    {
      place: 3,
      placeLabel: "3rd Place",
      projectName: "Compost Connect",
      teamNames: "Anika Tiwari",
      description:
        "Compost Connect is a prototype app that reduces restaurant food waste in Naperville by grouping nearby pickup requests. Efficient truck collection diverts scraps from landfills into healthy soil.",
      imageSrc: sitePhotoUsage.greenDreamChallengeWinners.thirdCompostConnect,
      imageAlt: "Anika Tiwari with the Compost Connect third-place trophy and $150 prize check",
    },
    {
      place: 4,
      placeLabel: "4th Place",
      projectName: "Discarding Batteries",
      teamNames: "Vikashni Selvaraj, Kayal Prabhu, & Kavinaya Sureshkumar",
      description:
        "Discarding Batteries The Right Way is an educational guide on proper battery disposal and recycling. It covers environmental hazards, fire risks, and safe local recycling options.",
      imageSrc: sitePhotoUsage.greenDreamChallengeWinners.fourthDisposingBatteries,
      imageAlt:
        "Vikashni Selvaraj, Kayal Prabhu, and Kavinaya Sureshkumar with the Discarding Batteries fourth-place trophy and $100 prize check",
    },
    {
      place: 5,
      placeLabel: "5th Place",
      projectName: "Auto Unplug",
      teamNames: "Michael Nie",
      description:
        "Auto Unplug is a smart device that eliminates phantom energy waste by cutting power once connected devices are fully charged. It saves electricity and lowers household energy costs.",
      imageSrc: sitePhotoUsage.greenDreamChallengeWinners.fifthAutoUnplug,
      imageAlt: "Michael Nie holding the Auto Unplug fifth-place trophy and $50 prize check",
    },
  ] satisfies readonly GdcWinnerEntry[],
  finalistsHeading: "Finalists",
  finalists: [
    {
      place: 6,
      placeLabel: "6th Place",
      projectName: "BuzBomb",
      teamNames: "Abdurahman Yuldash, Soleha Yuldash, & Abdullah Yuldash",
      description:
        "BuzBomb launches native seed balls through play, helping kids rebuild local pollinator habitats.",
      imageSrc: sitePhotoUsage.greenDreamChallengeWinners.sixthBuzBomb,
      imageAlt:
        "Abdurahman Yuldash, Soleha Yuldash, and Abdullah Yuldash with medals for BuzBomb sixth place, with mentors standing behind",
    },
    {
      place: 7,
      placeLabel: "7th Place",
      projectName: "Reducing Litter",
      teamNames: "Shaanvi Mokshagundam",
      description:
        "An advocacy project that cuts waste through community education and cleaner disposal habits.",
      imageSrc: sitePhotoUsage.greenDreamChallengeWinners.seventhReducingLitter,
      imageAlt:
        "Shaanvi Mokshagundam with a medal for Reducing Litter seventh place, with mentors standing behind",
    },
    {
      place: 8,
      placeLabel: "8th Place",
      projectName: "GreenLens",
      teamNames: "Adhi Deshkar & Aryan Kushwaha",
      description:
        "A website that teaches plant identification and recycling to support greener everyday choices.",
      imageSrc: sitePhotoUsage.greenDreamChallengeWinners.eighthGreenlens,
      imageAlt:
        "Adhi Deshkar and Aryan Kushwaha with medals for GreenLens eighth place, with mentors standing beside them",
    },
    {
      place: 9,
      placeLabel: "9th Place",
      projectName: "Blue Rover",
      teamNames: "Vincent Zhang & Roberto Davila",
      description:
        "An autonomous robot that detects and collects litter in community spaces.",
      imageSrc: sitePhotoUsage.greenDreamChallengeWinners.ninthBlueRover,
      imageAlt:
        "Vincent Zhang and Roberto Davila with medals for Blue Rover ninth place, with mentors standing behind",
    },
    {
      place: 10,
      placeLabel: "10th Place",
      projectName: "LitterLess",
      teamNames: "Anna Wu",
      description:
        "Promotes cleaner communities through education and simple everyday actions against litter.",
      imageSrc: sitePhotoUsage.greenDreamChallengeWinners.tenthLittering,
      imageAlt:
        "Anna Wu with a medal for LitterLess tenth place, with mentors standing beside her",
    },
  ] satisfies readonly GdcWinnerEntry[],
  risingStarsHeading: "Rising Star Awards",
  /** Peer awards — no ranking between Rising Stars. */
  risingStars: [
    {
      place: 0,
      placeLabel: "Rising Star",
      projectName: "Go Green",
      teamNames: "Riya Bhanji",
      description:
        "Inspires peers to reuse, donate, recycle, and plant with simple sustainable habits.",
      imageSrc: sitePhotoUsage.greenDreamChallengeWinners.risingStarRiyaBhanji,
      imageAlt: "Riya Bhanji, Rising Star award winner for Go Green",
    },
    {
      place: 0,
      placeLabel: "Rising Star",
      projectName: "Nosepickers",
      teamNames: "Richie Parab",
      description:
        "Organizes community cleanups that reduce litter and care for shared outdoor spaces.",
      imageSrc: sitePhotoUsage.greenDreamChallengeWinners.risingStarRichieParab,
      imageAlt: "Richie Parab, Rising Star award winner for Nosepickers",
    },
  ] satisfies readonly GdcWinnerEntry[],
};

export type GdcJudgeEntry = {
  name: string;
  title: string;
  bio: string;
  initials: string;
  /** Tailwind gradient classes for initials placeholder when imageSrc is absent. */
  photoGradient: string;
  badge: string;
  imageSrc?: string;
  imageAlt?: string;
};

/**
 * 2026 judges — split by role (not prelims/finals; Green Dream was one day).
 * Photos optional: UI shows imageSrc when set, otherwise initials via photoGradient.
 */
export const gdcJudges = {
  title: "2026 Judges",
  subtitle:
    "Community leaders, industry experts, and standout students who scored Green Dream Challenge 2026 presentations.",
  groups: [
    {
      id: "professionals",
      heading: "Professionals",
      subtitle: "Professionals who scored presentations with real-world sustainability experience.",
      judges: [
        {
          name: "Payton Schield",
          title: "Sustainability Specialist, City of Naperville",
          bio: "Payton brings municipal climate policy and community engagement experience from Naperville, with a background in environmental studies and local agricultural management.",
          initials: "PS",
          photoGradient: "from-ecorise-400 to-ecorise-700",
          badge: "Professional",
          imageSrc: sitePhotoUsage.greenDreamChallengeJudges.paytonSchield,
          imageAlt: "Payton Schield, Sustainability Specialist for the City of Naperville",
        },
        {
          name: "Daliana Vargas",
          title: "Sustainability Manager, Navistar / International Motors",
          bio: "At International Motors (formerly Navistar), Daliana draws on chemistry, applied statistics, and sustainable procurement to judge projects on feasibility, circularity, and impact.",
          initials: "DV",
          photoGradient: "from-[#c1eb84] to-ecorise-600",
          badge: "Professional",
          imageSrc: sitePhotoUsage.greenDreamChallengeJudges.dalianaVargas,
          imageAlt: "Daliana Vargas, Sustainability Manager at Navistar / International Motors",
        },
        {
          name: "Ryan Havlick",
          title: "Co-Founder & Managing Partner, Multimodal Ventures",
          bio: "A Multimodal Ventures co-founder with deep tech, robotics, and exited Health IT experience, Ryan weighs technical design, feasibility, and real-world environmental impact.",
          initials: "RH",
          photoGradient: "from-ecorise-300 to-ecorise-800",
          badge: "Professional",
          imageSrc: sitePhotoUsage.greenDreamChallengeJudges.ryanHavlick,
          imageAlt: "Ryan Havlick, Co-Founder and Managing Partner at Multimodal Ventures",
        },
        {
          name: "Ellen Finegan",
          title: "DuPage Master Gardener",
          bio: "A DuPage Master Gardener with University of Illinois Extension, Ellen brings hundreds of volunteer hours in sustainable gardening, stewardship, and community greening.",
          initials: "EF",
          photoGradient: "from-[#a0be8b] to-ecorise-700",
          badge: "Professional",
          imageSrc: sitePhotoUsage.greenDreamChallengeJudges.ellenFinegan,
          imageAlt: "Ellen Finegan, DuPage Master Gardener",
        },
        {
          name: "Roselynne Orrala",
          title: "Environmental Policy and Public Relations Specialist",
          bio: "Roselynne is a North Central College student journalist and Accelerate Climate Solutions intern who judges projects on message clarity, educational value, and advocacy potential.",
          initials: "RO",
          photoGradient: "from-ecorise-500 to-ecorise-900",
          badge: "Professional",
          imageSrc: sitePhotoUsage.greenDreamChallengeJudges.roselynneOrrala,
          imageAlt: "Roselynne Orrala, Environmental Policy and Public Relations Specialist",
        },
        {
          name: "Owen Christy",
          title: "Lead Climate Intern, Accelerate Climate Solutions",
          bio: "Owen is a North Central College student-athlete in Environmental Business and Science with experience in ecological restoration, research, and youth mentorship.",
          initials: "OC",
          photoGradient: "from-ecorise-mint to-ecorise-600",
          badge: "Professional",
          imageSrc: sitePhotoUsage.greenDreamChallengeJudges.owenChristy,
          imageAlt: "Owen Christy, Lead Climate Intern at Accelerate Climate Solutions",
        },
        {
          name: "Jack Ma",
          title: "Organic Farming Intern, The Conservation Foundation",
          bio: "An incoming UIUC Agricultural & Consumer Economics student, Jack brings organic farming and climate communications internship experience to judging innovation projects.",
          initials: "JM",
          photoGradient: "from-ecorise-400 to-ecorise-800",
          badge: "Professional",
          imageSrc: sitePhotoUsage.greenDreamChallengeJudges.jackMa,
          imageAlt: "Jack Ma, Organic Farming Intern at The Conservation Foundation",
        },
      ] satisfies readonly GdcJudgeEntry[],
    },
    {
      id: "student-leaders",
      heading: "Student Leaders",
      subtitle: "Student peers and scholars who helped score Green Dream 2026 alongside the panel.",
      judges: [
        {
          name: "Allen Xu",
          title: "Incoming Student @ UPenn & HF0 Resident Fellow",
          bio: "Allen is an incoming Wharton Finance and Computer Science student, HF0 Resident Fellow, and BizBuzz NFP co-founder who judges business viability and scalability.",
          initials: "AX",
          photoGradient: "from-ecorise-300 to-ecorise-700",
          badge: "Student Leader",
          imageSrc: sitePhotoUsage.greenDreamChallengeJudges.allenXu,
          imageAlt: "Allen Xu, Incoming Student at UPenn and HF0 Resident Fellow",
        },
        {
          name: "Steven He",
          title: "Incoming Student @ Yale & Congressional App Challenge Winner",
          bio: "An incoming Yale student and Congressional App Challenge winner, Steven co-developed EcoSense, a recycling app with a garbage classifier camera.",
          initials: "SH",
          photoGradient: "from-ecorise-500 to-ecorise-800",
          badge: "Student Leader",
          imageSrc: sitePhotoUsage.greenDreamChallengeJudges.stevenHe,
          imageAlt: "Steven He, Incoming Student at Yale and Congressional App Challenge Winner",
        },
        {
          name: "Alice Ho",
          title: "Incoming Student @ Harvard & Award-Winning Artist",
          bio: "Alice is an incoming Harvard student and award-winning artist who judges projects on design innovation, aesthetic appeal, and creative campaign presentation.",
          initials: "AH",
          photoGradient: "from-[#a8dc78] to-ecorise-700",
          badge: "Student Leader",
          imageSrc: sitePhotoUsage.greenDreamChallengeJudges.aliceHo,
          imageAlt: "Alice Ho, Incoming Student at Harvard and Award-Winning Artist",
        },
        {
          name: "Idhant Ranjan",
          title: "Pete Conrad Scholar & Naperville Riverwalk Commissioner",
          bio: "Idhant is a Pete Conrad Scholar and Naperville Riverwalk Student Commissioner with AI/ML research affiliations, judging technical feasibility and community impact.",
          initials: "IR",
          photoGradient: "from-[#c1eb84] to-ecorise-700",
          badge: "Student Leader",
          imageSrc: sitePhotoUsage.greenDreamChallengeJudges.idhantRanjan,
          imageAlt: "Idhant Ranjan, Pete Conrad Scholar and Naperville Riverwalk Commissioner",
        },
      ] satisfies readonly GdcJudgeEntry[],
    },
  ] as const,
};

/** Kept for next-cycle signup flows. */
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
    title: "Present for Cash Awards",
    description:
      "Share your environmental project and earn recognition toward a share of $750 in total cash awards.",
  },
] as const;

export const gdcRegister = {
  title: "Sign Up Green Dream Challenge",
  url: "https://docs.google.com/forms/d/1YskZjiVPIxnXGNDMdZixWNu1XVTIyWyZV6T69RriiQQ/viewform",
};
