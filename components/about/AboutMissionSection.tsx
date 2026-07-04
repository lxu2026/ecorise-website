const missionText =
  "EcoRise is a student-led 501(c)(3) nonprofit based in Naperville, Illinois, founded in April 2026 to transform students' passion for protecting the planet into meaningful action. We believe environmental education should go beyond lectures and worksheets by providing hands-on experiences that build knowledge, confidence, and leadership. Through our Summer Camp, Green Dream Challenge, workshops, and service projects, we empower K–12 students to learn by doing, develop innovative environmental solutions, and create lasting impact in their communities—because the next generation of environmental leaders is already here; they just need the opportunity to rise.";

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

        <div className="mt-10 sm:mt-12">
          <div className="rounded-2xl bg-white px-6 py-7 shadow-[0_8px_40px_rgba(27,67,50,0.1)] sm:px-8 sm:py-8">
            <p className="text-pretty text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              {missionText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
