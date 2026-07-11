export type NavItem =
  | { label: string; href: string; hasDropdown?: false }
  | {
      label: string;
      href: string;
      hasDropdown: true;
      dropdownItems: { label: string; href: string }[];
    };

export const navItems: NavItem[] = [
  { label: "Camp", href: "/summer-camp" },
  { label: "Green Dream", href: "/green-dream-challenge" },
  { label: "Office Hours & FAQs", href: "/office-hours-faqs" },
  { label: "About Us", href: "/about" },
  { label: "Sponsors", href: "/sponsors" },
];

/** @deprecated Use navItems */
export const navLinks = navItems.flatMap((item) =>
  item.hasDropdown
    ? item.dropdownItems.map((d) => ({ label: d.label, href: d.href }))
    : [{ label: item.label, href: item.href }],
);

export const heroContent = {
  nonprofitBadge: "501(c)(3) Non-Profit Organization",
  learnMoreHref: "/about",
  viewProgramsHref: "/#programs",
} as const;

export const heroCollagePhotos = [
  {
    src: "/images/home/hero/group-photo.jpg",
    alt: "EcoRise summer camp group photo with City of Naperville Sustainability",
    className: "left-0 top-0 z-20 h-[46%] w-[62%]",
    objectPosition: "center center",
  },
  {
    src: "/images/home/hero/tote-bag-showcase.jpg",
    alt: "Student proudly showing a hand-decorated reusable tote bag",
    className: "right-0 top-[4%] z-30 h-[28%] w-[40%]",
    objectPosition: "center center",
    rotate: 2,
  },
  {
    src: "/images/home/hero/decorating-tote.jpg",
    alt: "Student decorating a reusable tote bag with sustainability artwork",
    className: "right-[2%] top-[34%] z-20 h-[30%] w-[44%]",
    objectPosition: "center center",
    rotate: -1.5,
  },
  {
    src: "/images/home/hero/student-engagement.jpg",
    alt: "Student raising their hand during an EcoRise camp session",
    className: "left-[4%] top-[48%] z-30 h-[24%] w-[34%]",
    objectPosition: "center center",
    rotate: -2,
  },
  {
    src: "/images/home/hero/team-celebration.jpg",
    alt: "Students celebrating together with a group high-five",
    className: "left-[38%] top-[58%] z-10 h-[26%] w-[36%]",
    objectPosition: "center center",
    rotate: 1.5,
  },
  {
    src: "/images/home/hero/guest-speaker.jpg",
    alt: "Guest speaker presenting to EcoRise summer camp students",
    className: "right-0 top-[66%] z-20 h-[24%] w-[38%]",
    objectPosition: "center center",
    rotate: 2.5,
  },
  {
    src: "/images/home/hero/camp-friends.jpg",
    alt: "EcoRise camp students smiling together",
    className: "left-0 top-[74%] z-30 h-[22%] w-[34%]",
    objectPosition: "center center",
    rotate: -1,
  },
] as const;

export const programs = [
  {
    title: "Summer Camp",
    description:
      "Hands-on outdoor learning where students explore ecosystems, renewable energy, and sustainable design through immersive week-long adventures.",
    tag: "Seasonal",
    gradient: "from-ecorise-400 to-ecorise-700",
  },
  {
    title: "Green Dream Challenge",
    description:
      "A student-led innovation competition empowering teams to pitch real-world solutions for climate resilience, waste reduction, and green technology.",
    tag: "Competition",
    gradient: "from-ecorise-300 to-ecorise-600",
  },
  {
    title: "Community Workshops",
    description:
      "Interactive sessions for families and educators covering composting, urban gardening, water conservation, and STEM-based environmental projects.",
    tag: "Year-round",
    gradient: "from-[#c1eb84] to-ecorise-600",
  },
] as const;

export const impactStats = [
  { label: "Students Served", value: 4200, suffix: "+" },
  { label: "Community Projects", value: 186, suffix: "+" },
  { label: "Volunteer Hours", value: 12500, suffix: "+" },
  { label: "Partner Organizations", value: 48, suffix: "+" },
] as const;

export type ImpactGlanceCard = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
};

export const impactAtAGlanceContent = {
  title: "Impact at a Glance",
  subtitle:
    "EcoRise connects students, schools, and sponsors to build a greener future—turning classroom curiosity into real-world sustainability action across our community.",
  cards: [
    {
      value: 147,
      label: "Students Taught",
      description:
        "Young leaders inspired through camps, workshops, and hands-on sustainability experiences.",
    },
    {
      value: 34,
      label: "Schools Represented",
      description:
        "Students from 34 schools participated in EcoRise programs across the community.",
    },
    {
      value: 3000,
      prefix: "$",
      suffix: "+",
      label: "Funding Raised",
      description:
        "Community support, grants, and sponsorships helping provide free environmental education programs.",
    },
    {
      value: 41,
      label: "Student Leaders",
      description:
        "High school mentors and camp leaders empowering younger students while developing leadership skills.",
    },
  ] satisfies ImpactGlanceCard[],
} as const;

export const events = [
  {
    title: "Spring Sustainability Fair",
    date: "April 12, 2026",
    location: "Riverside Community Center",
    description:
      "Student showcases, eco-vendor booths, and live STEM demonstrations open to all families.",
  },
  {
    title: "Green Dream Challenge Finals",
    date: "May 24, 2026",
    location: "EcoRise Innovation Hub",
    description:
      "Top student teams present their environmental solutions to a panel of educators and industry mentors.",
  },
  {
    title: "Summer Camp Registration Opens",
    date: "June 1, 2026",
    location: "Online & In-Person",
    description:
      "Secure your spot for our flagship summer program — limited scholarships available.",
  },
] as const;

export const programAnchors = {
  "Summer Camp": "summer-camp",
  "Green Dream Challenge": "green-dream-challenge",
} as const;

export type SponsorTier = "gold" | "silver" | "bronze";

export type CurrentSponsor = {
  name: string;
  amount: number;
  tier: SponsorTier;
  logo: string;
  url: string;
  logoWide?: boolean;
  description?: string;
  year?: number;
};

export const sponsorsPage = {
  heroEyebrow: "Powered by our community",
  heroTitleLead: "The people behind",
  heroDescription: [
    "EcoRise is powered by the generosity of businesses, families, and community",
    "partners who believe in the next generation. Every donation helps provide hands-on",
    "sustainability education, leadership opportunities, and environmental programs for students.",
  ],
  ctaLabel: "See perks of becoming a sponsor",
  ctaHref: "#sponsorship-tiers",
} as const;

export const currentSponsors: CurrentSponsor[] = [
  {
    name: "AT&T",
    amount: 2000,
    tier: "gold",
    logo: "/images/sponsors/att.png",
    url: "https://www.att.com",
    year: 2026,
    description:
      "Supporting venue rental to provide students with a welcoming space for the EcoRise Summer Camp and Green Dream Challenge.",
  },
  {
    name: "Oxy",
    amount: 1000,
    tier: "gold",
    logo: "/images/sponsors/oxy.png",
    url: "https://www.oxy.com",
    year: 2026,
    description:
      "Supporting Green Dream Challenge awards that recognize outstanding student sustainability projects and innovation.",
  },
  {
    name: "Rockwell Automation",
    amount: 200,
    tier: "bronze",
    logo: "/images/sponsors/rockwell-automation.png",
    url: "https://www.rockwellautomation.com",
    year: 2026,
    description:
      "Supporting Summer Camp supplies, hands-on activities, and educational materials for EcoRise students.",
  },
  {
    name: "Costco",
    amount: 100,
    tier: "bronze",
    logo: "/images/sponsors/costco-wholesale.png",
    url: "https://www.costco.com",
    logoWide: true,
    year: 2026,
    description:
      "Supporting Summer Camp printing, educational materials, and student activity supplies.",
  },
];

export const sponsorshipTiers = [
  {
    id: "gold" as SponsorTier,
    label: "Gold",
    range: "$1,000+",
    description:
      "Everything in Silver, plus premium logo placement at Summer Camp and Green Dream Challenge, a featured spotlight on our website homepage, and recognition on event banners and materials.",
    badgeClass: "bg-amber-100 text-amber-900",
    priceClass: "text-amber-500",
    borderClass: "border-amber-300 shadow-amber-100/40 ring-1 ring-amber-200/60",
  },
  {
    id: "silver" as SponsorTier,
    label: "Silver",
    range: "$250 – $999",
    description:
      "Everything in Bronze, plus logo placement on our website sponsors page, recognition at community events, and distribution of your promotional materials at workshops.",
    badgeClass: "bg-slate-200 text-slate-700",
    priceClass: "text-slate-500",
    borderClass: "border-slate-200 ring-1 ring-slate-100",
  },
  {
    id: "bronze" as SponsorTier,
    label: "Bronze",
    range: "Up to $250",
    description:
      "Your organization listed on the EcoRise website and recognized at community workshops and program events throughout the year.",
    badgeClass: "bg-orange-100 text-orange-900",
    priceClass: "text-orange-700",
    borderClass: "border-orange-200 ring-1 ring-orange-100",
  },
] as const;

export const inKindDonors = [
  { name: "MOD Pizza", logo: "/images/sponsors/mod-pizza.svg", url: "https://modpizza.com" },
  { name: "Chicago White Sox", logo: "/images/sponsors/white-sox.png", url: "https://www.mlb.com/whitesox", logoClassName: "max-h-14 sm:max-h-16" },
  { name: "Kane County Cougars", logo: "/images/sponsors/kane-county-cougars.png", url: "https://www.milb.com/kane-county" },
  { name: "Culver's", logo: "/images/sponsors/culvers.svg", url: "https://www.culvers.com" },
  { name: "Smashburger", logo: "/images/sponsors/smashburger.svg", url: "https://smashburger.com" },
  { name: "Andy's Frozen Custard", logo: "/images/sponsors/andys-frozen-custard.png", url: "https://www.eatandys.com" },
  { name: "Avocado Theory", logo: "/images/sponsors/avocado-theory.png", url: "https://avocadotheory.com" },
  { name: "Lou Malnati's Pizzeria", logo: "/images/sponsors/lou-malnatis.png", url: "https://www.loumalnatis.com" },
  { name: "Trader Joe's", logo: "/images/sponsors/trader-joes.png", url: "https://www.traderjoes.com", logoClassName: "max-w-[90px] sm:max-w-[100px]" },
  { name: "zzcamellia", logo: "/images/sponsors/zzcamellia.png", url: "https://zzcamellia.com/", logoClassName: "max-w-[90px] sm:max-w-[100px]" },
  { name: "Insomnia Cookies", logo: "/images/sponsors/insomnia-cookies.png", url: "https://insomniacookies.com" },
  { name: "LUSH", logo: "/images/sponsors/lush.png", url: "https://www.lush.com" },
  { name: "Red Mango", logo: "/images/sponsors/red-mango.png", url: "https://www.redmangousa.com" },
  { name: "Egg Harbor Cafe", logo: "/images/sponsors/egg-harbor-cafe.png", url: "https://www.eggharborcafe.com" },
] as const;

/** @deprecated Use currentSponsors */
export const sponsors = currentSponsors.map((s) => s.name);

export const galleryItems = [
  { label: "Garden Project", gradient: "from-[#c1eb84] to-ecorise-500" },
  { label: "Solar Workshop", gradient: "from-ecorise-mint to-ecorise-600" },
  { label: "Water Testing Lab", gradient: "from-[#c1eb84] to-ecorise-400" },
  { label: "Recycling Drive", gradient: "from-ecorise-400 to-ecorise-700" },
  { label: "Nature Field Trip", gradient: "from-ecorise-300 to-ecorise-800" },
  { label: "Student Showcase", gradient: "from-ecorise-200 to-ecorise-600" },
] as const;

export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "Camp", href: "/summer-camp" },
  { label: "Green Dream", href: "/green-dream-challenge" },
  { label: "Office Hours", href: "/office-hours-faqs" },
  { label: "About Us", href: "/about" },
  { label: "Sponsors", href: "/sponsors" },
] as const;

export const footerSocialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ecorisenfp/",
    icon: "instagram",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/ecorisenfp/?viewAsMember=true",
    icon: "linkedin",
  },
  {
    label: "Discord",
    href: "https://discord.gg/88CFQUDQD8",
    icon: "discord",
  },
] as const;

/** @deprecated Use footerQuickLinks */
export const footerLinks = {
  programs: [
    { label: "Camp", href: "/summer-camp" },
    { label: "Green Dream", href: "/green-dream-challenge" },
    { label: "Office Hours & FAQs", href: "/office-hours-faqs" },
  ],
  about: [
    { label: "About Us", href: "/about" },
    { label: "Our Mission", href: "/about#mission" },
    { label: "Our Team", href: "/about#team" },
  ],
  connect: [
    { label: "Contact Us", href: "#contact" },
    { label: "Become a Sponsor", href: "/sponsors" },
    { label: "Volunteer", href: "#contact" },
  ],
} as const;
