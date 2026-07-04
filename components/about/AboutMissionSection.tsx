const missionProblemText =
  "Too many students are passionate about protecting the planet but never get the chance to turn that enthusiasm into real skills. Environmental literacy is often treated as an elective—something squeezed into a unit or a poster on a wall—while the urgency of climate change and local sustainability challenges grows every year. Young people deserve more than awareness; they deserve hands-on experience that builds confidence and leadership.";

const missionActionText =
  "EcoRise is a student-run 501(c)(3) nonprofit based in Naperville, Illinois, dedicated to making sustainability education accessible, engaging, and youth-led. Through our Summer Camp, Green Dream Challenge, workshops, and office hours, we give K–12 students the tools to explore STEM, develop environmental projects, and share their ideas with the community. Every program is designed by students who believe the next generation of environmental leaders is already here—we're just giving them the platform to rise.";

export function AboutMissionSection() {
  return (
    <section className="relative overflow-hidden bg-[#fafaf8] py-16 lg:py-24">
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#c1eb84]/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-32 h-80 w-80 rounded-full bg-[#f2c029]/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-24 left-1/3 h-64 w-64 rounded-full bg-[#4a7c44]/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 right-1/4 h-56 w-56 rounded-full bg-[#f2c029]/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        <h2
          id="mission"
          className="scroll-mt-28 text-center font-display text-3xl font-bold text-[#1b4332] sm:text-4xl"
        >
          Our Mission
        </h2>
        <div className="mx-auto mt-4 h-0.5 w-32 rounded-full bg-gradient-to-r from-[#1b4332] via-[#4a7c44] to-[#f2c029]" />

        <div className="mt-10 space-y-5 sm:mt-12 sm:space-y-6">
          <div className="rounded-2xl bg-white px-6 py-7 shadow-[0_8px_40px_rgba(27,67,50,0.1)] sm:px-8 sm:py-8">
            <p className="text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              {missionProblemText}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-full bg-gradient-to-r from-slate-100 via-[#fef9e7] to-[#f2c029]/30 px-6 py-4 sm:px-8 sm:py-5">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-[#f2c029]/25 blur-sm sm:h-24 sm:w-24"
            />
            <p className="relative text-center text-base font-medium text-[#1b4332] sm:text-lg">
              In April 2026, we set out to fix that.
            </p>
          </div>

          <div className="rounded-2xl bg-white px-6 py-7 shadow-[0_8px_40px_rgba(27,67,50,0.1)] sm:px-8 sm:py-8">
            <p className="text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              {missionActionText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
