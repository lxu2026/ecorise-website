import Image from "next/image";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import {
  coreTeam,
  instructors,
  volunteers,
  type TeamMember,
} from "@/lib/team-data";

function SectionTitle({
  title,
  underlineClass,
}: {
  title: string;
  underlineClass: string;
}) {
  return (
    <h3 className="text-center text-2xl font-bold text-[#1b4332] sm:text-3xl">
      <span className={`inline-block border-b-4 pb-2 ${underlineClass}`}>
        {title}
      </span>
    </h3>
  );
}

function LeaderCard({ member, delay = 0 }: { member: TeamMember; delay?: number }) {
  return (
    <AnimateOnScroll delay={delay} className="h-full">
      <article className="flex h-full flex-col gap-4">
        {member.photo ? (
          <div className="relative aspect-square overflow-hidden rounded-xl shadow-sm">
            <Image
              src={member.photo}
              alt={member.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ) : (
          <PlaceholderImage
            label={member.name}
            gradient={member.photoGradient ?? "from-ecorise-400 to-ecorise-700"}
            aspect="square"
            className="rounded-xl shadow-sm"
          />
        )}
        <h4 className="text-xl font-bold text-[#1b4332]">{member.name}</h4>
        <p className="text-left text-sm leading-relaxed text-slate-600">
          {member.bio}
        </p>
      </article>
    </AnimateOnScroll>
  );
}

function InstructorCard({
  member,
  delay = 0,
}: {
  member: TeamMember;
  delay?: number;
}) {
  return (
    <AnimateOnScroll delay={delay}>
      <article className="h-full rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
        <h4 className="text-base font-bold text-[#1b4332] sm:text-lg">{member.name}</h4>
        <p className="mt-1 text-sm font-medium text-ecorise-600">{member.role}</p>
        {member.bio ? (
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{member.bio}</p>
        ) : null}
      </article>
    </AnimateOnScroll>
  );
}

export function Team() {
  return (
    <section id="team" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll className="mx-auto mb-16 flex max-w-4xl flex-col items-center text-center">
          <h2 className="text-4xl font-bold text-[#1b4332] sm:text-5xl">Our Team</h2>
          <p className="mt-5 flex flex-col items-center text-base leading-relaxed text-slate-600 sm:text-lg">
            <span className="sm:whitespace-nowrap">
              EcoRise is powered by passionate student leaders, dedicated mentors, and community partners
            </span>
            <span className="sm:whitespace-nowrap">
              working together to inspire the next generation of environmental changemakers.
            </span>
          </p>
        </AnimateOnScroll>

        <div className="mb-20">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {coreTeam.map((member, index) => (
              <LeaderCard key={`core-team-${index}`} member={member} delay={index * 0.08} />
            ))}
          </div>
        </div>

        <div>
          <SectionTitle title="Instructors" underlineClass="border-ecorise-500" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {instructors.map((member, index) => (
              <InstructorCard key={`instructor-${index}`} member={member} delay={index * 0.04} />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <SectionTitle title="Volunteers" underlineClass="border-ecorise-500" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {volunteers.map((member, index) => (
              <InstructorCard key={`volunteer-${index}`} member={member} delay={index * 0.04} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
