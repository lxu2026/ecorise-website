export type NavItem =
  | { label: string; href: string; hasDropdown?: false }
  | {
      label: string;
      href: string;
      hasDropdown: true;
      dropdownItems: { label: string; href: string }[];
    };

export const navItems: NavItem[] = [
  { label: "Summer Camp", href: "/summer-camp" },
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
    src: "/images/mission/classroom-activity.jpg",
    alt: "EcoRise camp students smiling together in front of wooden doors after a workshop",
    objectPosition: "center center",
  },
  {
    src: "/images/home/hero/hero-grid-5.jpg",
    alt: "EcoRise students smiling together at a workshop table",
    objectPosition: "58% 40%",
  },
  {
    src: "/images/home/hero/hero-grid-14.jpg",
    alt: "EcoRise camp students posing together during a group session",
    objectPosition: "center 42%",
  },
  {
    src: "/images/home/hero/hero-grid-12.jpg",
    alt: "EcoRise mentor guiding students through a hands-on workshop activity",
    objectPosition: "60% 40%",
  },
  {
    src: "/images/home/hero/hero-grid-13.jpg",
    alt: "EcoRise mentor and students smiling with a handmade EcoRise poster",
    objectPosition: "center 40%",
  },
  {
    src: "/images/home/hero/hero-grid-10.jpg",
    alt: "EcoRise campers collaborating during a summer workshop",
    objectPosition: "58% 40%",
  },
  {
    src: "/images/home/hero/hero-grid-18.jpg",
    alt: "EcoRise camper holding a handmade recycle poster",
    objectPosition: "center center",
  },
  {
    src: "/images/home/hero/hero-grid-21.jpg",
    alt: "EcoRise campers gathered around a laptop with a See Green. Live Green. Protect Naperville poster",
    objectPosition: "58% 42%",
  },
  {
    src: "/images/home/hero/hero-grid-22.jpg",
    alt: "EcoRise teens collaborating at a workshop table, student in a striped shirt gesturing",
    objectPosition: "55% 42%",
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
      "Interactive sessions for families and educators covering composting, urban gardening, water conservation, and hands-on environmental projects.",
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
      value: 149,
      label: "Students Taught",
      description:
        "Young leaders inspired through camps, workshops, and hands-on sustainability experiences.",
    },
    {
      value: 35,
      label: "Schools Represented",
      description:
        "Students from 35 schools participated in EcoRise programs across the community.",
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
      value: 48,
      label: "Student Leaders",
      description:
        "High school mentors and camp leaders empowering younger students while developing leadership skills.",
    },
  ] satisfies ImpactGlanceCard[],
} as const;

export const inTheNewsContent = {
  title: "In The News",
  subtitle:
    "Our mission has been featured by local media outlets, highlighting our commitment to advancing environmental literacy and empowering the next generation of sustainability leaders in Naperville and beyond.",
  features: [
    {
      title: "Daily Herald Feature",
      description:
        "During our summer camp program, EcoRise was featured by the Daily Herald. The article highlighted our mission to make environmental literacy accessible and our work bringing together over 100 local youth at the 95th Street Library to design hands-on sustainability projects for the community.",
      ctaLabel: "Read the Article",
      ctaHref:
        "https://www.dailyherald.com/20260713/submitted-content/napervilles-ecorise-wraps-up-free-environmental-summer-camp-for-youth/",
      imagePosition: "left",
      images: {
        primary: {
          src: "/images/about/95th-street-library.jpg",
          alt: "95th Street Library in Naperville, where EcoRise summer camp was held",
        },
        secondary: {
          src: "/images/about/daily-herald-sign.jpg",
          alt: "Daily Herald sign",
        },
      },
    },
    {
      title: "White Eagle Elementary School Support",
      description:
        "EcoRise is proud to be supported by local educators in District 204. Our summer camp program was officially shared with the community in the White Eagle Elementary School newsletter to help reach local families.",
      ctaLabel: "View the Newsletter",
      ctaHref: "https://app.smore.com/n/mf1er-white-eagle-elementary-news",
      imagePosition: "right",
      images: {
        primary: {
          src: "/images/about/white-eagle-elementary.jpg",
          alt: "White Eagle Elementary School in Naperville",
        },
      },
    },
  ],
} as const;

export const events = [
  {
    title: "Spring Sustainability Fair",
    date: "April 12, 2026",
    location: "Riverside Community Center",
    description:
      "Student showcases, eco-vendor booths, and live demonstrations open to all families.",
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
  { name: "Chicago White Sox", logo: "/images/sponsors/white-sox.png", url: "https://www.mlb.com/whitesox" },
  { name: "Kane County Cougars", logo: "/images/sponsors/kane-county-cougars.png", url: "https://www.milb.com/kane-county" },
  { name: "Culver's", logo: "/images/sponsors/culvers.svg", url: "https://www.culvers.com", logoClassName: "scale-110" },
  { name: "Smashburger", logo: "/images/sponsors/smashburger.svg", url: "https://smashburger.com" },
  { name: "Andy's Frozen Custard", logo: "/images/sponsors/andys-frozen-custard.png", url: "https://www.eatandys.com" },
  { name: "Avocado Theory", logo: "/images/sponsors/avocado-theory.png", url: "https://avocadotheory.com" },
  { name: "Lou Malnati's Pizzeria", logo: "/images/sponsors/lou-malnatis.png", url: "https://www.loumalnatis.com" },
  { name: "Trader Joe's", logo: "/images/sponsors/trader-joes.png", url: "https://www.traderjoes.com", logoClassName: "scale-110" },
  { name: "zzcamellia", logo: "/images/sponsors/zzcamellia.png", url: "https://zzcamellia.com/" },
  { name: "Insomnia Cookies", logo: "/images/sponsors/insomnia-cookies.png", url: "https://insomniacookies.com" },
  { name: "LUSH", logo: "/images/sponsors/lush.png", url: "https://www.lush.com" },
  { name: "Red Mango", logo: "/images/sponsors/red-mango.png", url: "https://www.redmangousa.com" },
  { name: "Egg Harbor Cafe", logo: "/images/sponsors/egg-harbor-cafe.png", url: "https://www.eggharborcafe.com" },
  { name: "45 Degree", logo: "/images/sponsors/45-degree.png", url: "https://45degreetea.com" },
  { name: "Sweet General", logo: "/images/sponsors/sweet-general.png", url: "https://sweetgeneral.com", logoClassName: "scale-110" },
  { name: "Chipotle", logo: "/images/sponsors/chipotle.png", url: "https://www.chipotle.com" },
  { name: "Paisans Pizzeria", logo: "/images/sponsors/paisans.png", url: "https://www.paisanspizza.com" },
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
  { label: "Summer Camp", href: "/summer-camp" },
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
    { label: "Summer Camp", href: "/summer-camp" },
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
