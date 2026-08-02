export type TeamMember = {
  name: string;
  role: string;
  bio?: string;
  photo?: string;
  photoLabel?: string;
  photoGradient?: string;
};

export const executiveTeam: TeamMember[] = [
  {
    name: "Evan Xu",
    role: "Founder & President",
    bio: "Evan founded EcoRise with a passion for environmental education and community building. He leads the organization's vision and partnerships to connect schools, sponsors, and volunteers with opportunities for young people to take action.",
    photo: "/images/team/evan-xu-v2.jpg",
  },
  {
    name: "Shawn Chen",
    role: "Vice President of Operations",
    bio: "Shawn oversees day-to-day operations that keep EcoRise programs running smoothly. He coordinates schedules, logistics, and session planning so every camp and workshop stays organized for students.",
    photo: "/images/team/shawn-chen.jpg",
  },
  {
    name: "Josh McConkey",
    role: "Vice President of Marketing",
    bio: "Josh oversees marketing and brand strategy for EcoRise, managing outreach campaigns and public engagement to grow the organization's community footprint.",
    photo: "/images/team/josh-mcconkey-v5.jpg",
  },
];

export const directorTeam: TeamMember[] = [
  {
    name: "Andrew Wu",
    role: "Director of Outreach",
    bio: "Andrew leads outreach for EcoRise, connecting schools, families, and local partners. He grows the organization's community presence and helps more students get involved.",
    photo: "/images/team/andrew-wu.jpg",
  },
  {
    name: "Taksh Chauhan",
    role: "Director of Fundraising",
    bio: "Taksh leads fundraising and sponsor partnerships that make EcoRise programs possible. He builds donor relationships to secure the support students need to learn and lead.",
    photo: "/images/team/taksh-chauhan-v4.jpg",
  },
  {
    name: "Shriya Tiwari",
    role: "Director of Programs",
    bio: "Shriya leads EcoRise programs including Green Dream and Office Hours. She helps students explore sustainability and grow through hands-on environmental projects.",
    photo: "/images/team/shriya-tiwari-v3.jpg",
  },
];

/** Full leadership roster (executives then directors). */
export const coreTeam: TeamMember[] = [...executiveTeam, ...directorTeam];

export const CORE_TEAM_SLOT_COUNT = coreTeam.length;

export const instructors: TeamMember[] = [
  {
    name: "Aakshi Arora",
    role: "Instructor",
    bio: "Passionate about climate education, Aakshi helps students connect environmental concepts to everyday life.",
  },
  {
    name: "Aanya Agarwal",
    role: "Instructor",
    bio: "Aanya inspires young learners through fun, hands-on environmental activities and projects.",
  },
  {
    name: "Aashi Pandey",
    role: "Instructor",
    bio: "Aashi helps students explore environmental topics through creative, hands-on learning.",
  },
  {
    name: "Aashita Borikar",
    role: "Instructor",
    bio: "Aashita inspires students to explore sustainability through engaging, hands-on activities.",
  },
  {
    name: "Abhinav Prabhu",
    role: "Instructor",
    bio: "Abhinav enjoys teaching sustainability through creative, hands-on learning.",
  },
  {
    name: "Adhirit Chowdhary",
    role: "Instructor",
    bio: "Adhirit encourages students to think critically about sustainability and take action in their communities.",
  },
  {
    name: "Adhrit Krishnamoorthy",
    role: "Instructor",
    bio: "Adhrit inspires young learners through engaging environmental activities and teamwork.",
  },
  {
    name: "Achyut Choudhary",
    role: "Instructor",
    bio: "Achyut makes environmental topics engaging and encourages students to think critically.",
  },
  {
    name: "Aiden Lai",
    role: "Instructor",
    bio: "Aiden believes every student can make a difference through sustainability and teamwork.",
  },
  {
    name: "Akhil Nandakumar",
    role: "Instructor",
    bio: "Akhil enjoys helping students build confidence while learning about the environment.",
  },
  {
    name: "Akshita Vats",
    role: "Instructor",
    bio: "Akshita inspires students to take action through hands-on sustainability projects.",
  },
  {
    name: "Arth Parmar",
    role: "Instructor",
    bio: "Arth leads fun, interactive activities that encourage students to explore sustainability.",
  },
  {
    name: "Avani Pujari",
    role: "Instructor",
    bio: "Avani helps students build sustainable habits through engaging, real-world lessons.",
  },
  {
    name: "Bella Borjas",
    role: "Instructor",
    bio: "Bella helps students build confidence while learning about sustainability and the environment.",
  },
  {
    name: "Colin Juhn",
    role: "Instructor",
    bio: "Colin encourages students to learn about the environment through teamwork and interactive lessons.",
  },
  {
    name: "Constanza Davila",
    role: "Instructor",
    bio: "Constanza creates a welcoming space where students explore sustainability with curiosity and confidence.",
  },
  {
    name: "Derek Deng",
    role: "Instructor",
    bio: "Derek enjoys mentoring students and making environmental science fun and accessible.",
  },
  {
    name: "Dino Wang",
    role: "Instructor",
    bio: "Dino enjoys helping students explore environmental science through hands-on activities.",
  },
  {
    name: "Ethan Hu",
    role: "Instructor",
    bio: "Ethan is passionate about mentoring young environmental leaders and inspiring future changemakers.",
  },
  {
    name: "Gio Ibarra",
    role: "Instructor",
    bio: "Gio creates an inclusive learning environment where students are encouraged to ask questions and share ideas.",
  },
  {
    name: "Hadi Talha",
    role: "Instructor",
    bio: "Hadi helps students explore ecology and conservation through fun, hands-on lessons.",
  },
  {
    name: "Hannah Che",
    role: "Instructor",
    bio: "Hannah helps students build sustainable habits through fun, hands-on environmental learning.",
  },
  {
    name: "Imani Lynn",
    role: "Instructor",
    bio: "Imani creates a welcoming environment where students explore sustainability with curiosity.",
  },
  {
    name: "Ishaan Inamdar",
    role: "Instructor",
    bio: "Ishaan inspires students to protect the environment through hands-on learning and action.",
  },
  {
    name: "Krish Garud",
    role: "Instructor",
    bio: "Krish encourages students to grow through teamwork, sustainability, and creative problem-solving.",
  },
  {
    name: "Krizelle Escala",
    role: "Instructor",
    bio: "Krizelle helps students connect environmental concepts to real-world challenges.",
  },
  {
    name: "Leo Xie",
    role: "Instructor",
    bio: "Leo enjoys mentoring students and making environmental topics engaging and accessible.",
  },
  {
    name: "Mannat Chhina",
    role: "Instructor",
    bio: "Mannat helps students connect with nature and understand how everyday choices make a difference.",
  },
  {
    name: "Nandhan Mugilan",
    role: "Instructor",
    bio: "Nandhan inspires students to develop sustainable habits through hands-on projects.",
  },
  {
    name: "Navya Sedani",
    role: "Instructor",
    bio: "Navya inspires students to learn about climate change and build sustainable habits.",
  },
  {
    name: "Navaneeth Suresh",
    role: "Instructor",
    bio: "Navaneeth encourages students to explore ecology and conservation through interactive lessons.",
  },
  {
    name: "Perlita Chan",
    role: "Instructor",
    bio: "Perlita creates a welcoming environment where students explore sustainability with confidence.",
  },
  {
    name: "Rachel Kim",
    role: "Instructor",
    bio: "Rachel helps students explore sustainability through engaging lessons and hands-on activities.",
  },
  {
    name: "Raghunandan Thirthamattur",
    role: "Instructor",
    bio: "Raghunandan encourages students to think critically about environmental challenges and take action.",
  },
  {
    name: "Rashmi Panuganti",
    role: "Instructor",
    bio: "Rashmi encourages students to explore environmental science through creativity and teamwork.",
  },
  {
    name: "Rhea Garud",
    role: "Instructor",
    bio: "Rhea inspires curiosity about nature and sustainable living through engaging activities.",
  },
  {
    name: "Rishi Ravindrakumar",
    role: "Instructor",
    bio: "Rishi helps students connect environmental concepts with real-world challenges.",
  },
  {
    name: "Sahasra Racharla",
    role: "Instructor",
    bio: "Sahasra enjoys helping students learn about sustainability through hands-on activities.",
  },
  {
    name: "Sam Coughlin",
    role: "Instructor",
    bio: "Sam helps students grow as environmental leaders through teamwork and creative problem-solving.",
  },
  {
    name: "Siddharth Gajula",
    role: "Instructor",
    bio: "Siddharth inspires students to build sustainable habits through hands-on learning and mentorship.",
  },
  {
    name: "Simi Dawani",
    role: "Instructor",
    bio: "Simi inspires students to build greener habits and become future environmental leaders.",
  },
  {
    name: "Sofia Summers",
    role: "Instructor",
    bio: "Sofia encourages students to explore sustainability through creativity, teamwork, and hands-on projects.",
  },
  {
    name: "Srihan Veesam",
    role: "Instructor",
    bio: "Srihan enjoys mentoring students and helping them become confident environmental leaders.",
  },
  {
    name: "Zainah Haque",
    role: "Instructor",
    bio: "Zainah creates a supportive learning space where students explore sustainability with curiosity.",
  },
];

export const volunteers: TeamMember[] = [
  {
    name: "Adeline Tse",
    role: "Volunteer",
    bio: "Adeline helps out with photography for EcoRise.",
  },
  {
    name: "Atharv Mishra",
    role: "Volunteer",
    bio: "Atharv helped pass out EcoRise fliers at the Memorial Day parade.",
  },
  {
    name: "Michael Nie",
    role: "Volunteer",
    bio: "Michael shared EcoRise fliers with the community during the Memorial Day parade.",
  },
  {
    name: "Yifan Bao",
    role: "Volunteer",
    bio: "Yifan joined the Memorial Day parade crew to hand out EcoRise fliers.",
  },
];

export const instructorNames = instructors.map((instructor) => instructor.name);
