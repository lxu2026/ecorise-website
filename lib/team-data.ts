export type TeamMember = {
  name: string;
  role: string;
  bio?: string;
  photo?: string;
  photoLabel?: string;
  photoGradient?: string;
};

export const CORE_TEAM_SLOT_COUNT = 6;

export const coreTeam: TeamMember[] = [
  {
    name: "Evan Xu",
    role: "Co-Founder & President",
    bio: "Evan founded EcoRise with a passion for environmental education and community building. He leads the organization's vision and partnerships to connect schools, sponsors, and volunteers, and create meaningful opportunities for young people to take action.",
    photo: "/images/team/evan-xu-v2.jpg",
  },
  {
    name: "Andrew Wu",
    role: "",
    bio: "Andrew is passionate about environmental education and inspiring students to make a difference. He designs hands-on learning experiences that help students explore real-world environmental challenges and take action in their communities.",
    photo: "/images/team/andrew-wu.jpg",
  },
  {
    name: "Shawn Chen",
    role: "",
    bio: "Shawn loves creating engaging, interactive lessons that bring environmental topics to life. His enthusiasm and creativity energize camp sessions and help make learning fun, meaningful, and memorable for every student.",
    photo: "/images/team/shawn-chen.jpg",
  },
  {
    name: "Josh McConkey",
    role: "",
    bio: "Josh manages logistics for EcoRise, helping organize events, supplies, and schedules to keep every program running smoothly.",
    photo: "/images/team/josh-mcconkey-hoodie-v2.jpg",
  },
  {
    name: "Shriya Tiwari",
    role: "",
    bio: "Shriya leads Green Dream and Office Hours, helping students explore sustainability and develop hands-on environmental projects.",
    photo: "/images/team/shriya-tiwari.jpg",
  },
  {
    name: "Taksh Chauhan",
    role: "",
    bio: "Taksh leads fundraising and partnerships, helping secure the support that makes EcoRise programs possible.",
    photo: "/images/team/taksh-chauhan.jpg",
  },
];

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
    name: "Abhinav Prabhu",
    role: "Instructor",
    bio: "Abhinav enjoys teaching STEM and sustainability through creative, hands-on learning.",
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
    name: "Mannat Chhina",
    role: "Instructor",
    bio: "Mannat helps students connect with nature and understand how everyday choices make a difference.",
  },
  {
    name: "Navya Sedani",
    role: "Instructor",
    bio: "Navya inspires students to learn about climate change and build sustainable habits.",
  },
  {
    name: "Perlita Chan",
    role: "Instructor",
    bio: "Perlita creates a welcoming environment where students explore sustainability with confidence.",
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
];

export const instructorNames = instructors.map((instructor) => instructor.name);
