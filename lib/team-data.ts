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
    bio: "Evan founded EcoRise from a passion for environmental education and community building, guiding its vision and partnerships to connect schools, sponsors, and volunteers.",
    photo: "/images/team/evan-xu.jpg",
  },
  {
    name: "Andrew Wu",
    role: "",
    bio: "Andrew is passionate about teaching environmental topics and helping students discover how they can make a difference in their communities through hands-on learning.",
    photo: "/images/team/andrew-wu.jpg",
  },
  {
    name: "Shawn Chen",
    role: "",
    bio: "Shawn loves creating engaging lessons and brings real energy to camp, making every session fun and keeping kids excited to learn and explore.",
    photo: "/images/team/shawn-chen.jpg",
  },
  {
    name: "Josh McConkey",
    role: "",
    bio: "Josh handles behind-the-scenes logistics for EcoRise events, coordinating supplies, schedules, and setups so every program runs smoothly for students and volunteers.",
    photo: "/images/team/josh-mcconkey-hoodie-v2.jpg",
  },
  {
    name: "Shriya Tiwari",
    role: "",
    bio: "Shriya leads Green Dream and Office Hours, helping students explore sustainability ideas and develop hands-on environmental projects with support from the EcoRise team.",
    photo: "/images/team/shriya-tiwari.jpg",
  },
  {
    name: "Taksh Chauhan",
    role: "",
    bio: "Taksh handles funding and partnerships, securing resources and support that help EcoRise expand programs and reach students through sustainability education initiatives.",
    photo: "/images/team/taksh-chauhan.jpg",
  },
];

export const instructors: TeamMember[] = [
  {
    name: "Aakshi Arora",
    role: "Instructor",
    bio: "Aakshi brings enthusiasm for climate literacy to every lesson, guiding students through ecosystem concepts and helping them connect classroom learning to real-world sustainability challenges.",
  },
  {
    name: "Aanya Agarwal",
    role: "Instructor",
    bio: "Aanya loves making environmental science approachable for young learners and mentors students as they turn curiosity about nature into meaningful conservation projects.",
  },
  {
    name: "Abhinav Prabhu",
    role: "Instructor",
    bio: "Abhinav is passionate about hands-on STEM education and supports campers as they experiment with renewable energy ideas, waste reduction, and practical green solutions.",
  },
  {
    name: "Achyut Choudhary",
    role: "Instructor",
    bio: "Achyut enjoys breaking down complex environmental topics into engaging activities, encouraging students to think critically about biodiversity, pollution, and planetary health.",
  },
  {
    name: "Aiden Lai",
    role: "Instructor",
    bio: "Aiden believes every student can be an environmental steward and designs interactive sessions that inspire kids to explore sustainability through observation and collaboration.",
  },
  {
    name: "Akhil Nandakumar",
    role: "Instructor",
    bio: "Akhil combines patience with a love of teaching, helping students build confidence as they learn about ecosystems, resource conservation, and lasting environmental change.",
  },
  {
    name: "Akshita Vats",
    role: "Instructor",
    bio: "Akshita is dedicated to youth environmental education and guides students through hands-on projects that spark curiosity about climate action, recycling, and local habitats.",
  },
  {
    name: "Arth Parmar",
    role: "Instructor",
    bio: "Arth loves energizing camp workshops with thoughtful questions and activities that help students explore sustainability topics and advocate for their communities.",
  },
  {
    name: "Avani Pujari",
    role: "Instructor",
    bio: "Avani is committed to making sustainability relatable for every learner and helps students connect science concepts to everyday habits that reduce waste and conserve resources.",
  },
  {
    name: "Dino Wang",
    role: "Instructor",
    bio: "Dino brings a curious, student-centered approach to teaching and enjoys helping campers investigate environmental issues through experiments, discussions, and team challenges.",
  },
  {
    name: "Ethan Hu",
    role: "Instructor",
    bio: "Ethan is passionate about mentoring the next generation of environmental leaders and supports students as they learn about climate science, green technology, and stewardship.",
  },
  {
    name: "Gio Ibarra",
    role: "Instructor",
    bio: "Gio loves fostering an inclusive classroom where students feel empowered to ask questions about nature, explore sustainability solutions, and share ideas that make an impact.",
  },
  {
    name: "Hadi Talha",
    role: "Instructor",
    bio: "Hadi enjoys simplifying ecological concepts for young minds and encourages students to think about pollution, energy use, and conservation through engaging, age-appropriate lessons.",
  },
  {
    name: "Ishaan Inamdar",
    role: "Instructor",
    bio: "Ishaan is enthusiastic about environmental outreach and helps students turn lessons on water quality, wildlife, and clean energy into actionable plans they can carry forward.",
  },
  {
    name: "Krish Garud",
    role: "Instructor",
    bio: "Krish brings energy and care to every session, mentoring students through sustainability challenges and celebrating their progress as they develop research and advocacy skills.",
  },
  {
    name: "Mannat Chhina",
    role: "Instructor",
    bio: "Mannat loves connecting students with the natural world through interactive teaching and supports them as they explore how community choices affect our shared environment.",
  },
  {
    name: "Navya Sedani",
    role: "Instructor",
    bio: "Navya is passionate about youth-led climate education and guides campers through activities that build awareness of ecosystems, carbon footprints, and responsible resource use.",
  },
  {
    name: "Perlita Chan",
    role: "Instructor",
    bio: "Perlita enjoys creating welcoming learning spaces where students can discuss environmental topics openly and build practical knowledge about sustainability and biodiversity.",
  },
  {
    name: "Rashmi Panuganti",
    role: "Instructor",
    bio: "Rashmi is committed to helping students understand the science behind environmental change and mentors them as they brainstorm creative ways to protect habitats and reduce waste.",
  },
  {
    name: "Rhea Garud",
    role: "Instructor",
    bio: "Rhea loves inspiring curiosity about nature and supports students through hands-on lessons on conservation, renewable resources, and everyday habits for healthier communities.",
  },
  {
    name: "Rishi Ravindrakumar",
    role: "Instructor",
    bio: "Rishi brings a thoughtful teaching style to EcoRise programs and helps students connect classroom concepts to real sustainability challenges in their schools and neighborhoods.",
  },
  {
    name: "Simi Dawani",
    role: "Instructor",
    bio: "Simi is dedicated to making environmental education engaging and accessible, guiding students as they learn about climate resilience, green habits, and planetary leadership.",
  },
  {
    name: "Sofia Summers",
    role: "Instructor",
    bio: "Sofia enjoys working with young learners on sustainability projects and encourages them to explore how science, creativity, and teamwork can drive meaningful environmental change.",
  },
  {
    name: "Srihan Veesam",
    role: "Instructor",
    bio: "Srihan is passionate about teaching and mentoring students through EcoRise's mission, helping them build confidence as they explore ecology, conservation, and community climate solutions.",
  },
];

export const instructorNames = instructors.map((instructor) => instructor.name);
