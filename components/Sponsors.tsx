import { Button } from "@/components/ui/Button";
import {
  currentSponsors,
  inKindDonors,
  sponsorsPage,
  sponsorshipTiers,
  type CurrentSponsor,
  type SponsorTier,
} from "@/lib/homepage-data";
import { officeHoursContact } from "@/lib/office-hours-faqs-data";
import Image from "next/image";

const tierOrder: SponsorTier[] = ["gold", "silver", "bronze"];

const tierTheme: Record<
  SponsorTier,
  {
    badge: string;
    range: string;
    count: string;
    yearBadge: string;
  }
> = {
  gold: {
    badge: "bg-amber-100 text-amber-900",
    range: "text-amber-600",
    count: "text-ecorise-500",
    yearBadge: "bg-amber-50 text-amber-800 ring-amber-200/80",
  },
  silver: {
    badge: "bg-slate-200 text-slate-700",
    range: "text-slate-600",
    count: "text-ecorise-500",
    yearBadge: "bg-slate-100 text-slate-700 ring-slate-200/80",
  },
  bronze: {
    badge: "bg-orange-100 text-orange-900",
    range: "text-orange-700",
    count: "text-ecorise-500",
    yearBadge: "bg-orange-50 text-orange-800 ring-orange-200/80",
  },
};

function formatAmount(amount: number) {
  return `$${amount.toLocaleString()}`;
}

function SponsorsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2419] via-[#1b4332] to-[#163828] pb-24 pt-28 text-white sm:pb-28 sm:pt-32 lg:pb-32 lg:pt-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(193,235,132,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(193,235,132,0.12) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(193,235,132,0.2),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_100%,rgba(242,192,41,0.08),transparent_45%)]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-[#f2c029]" aria-hidden="true" />
          {sponsorsPage.heroEyebrow}
        </span>

        <h1 className="mt-8 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
          <span className="block text-white">{sponsorsPage.heroTitleLead}</span>
          <span className="mt-2 block">
            <span className="text-[#f2c029]">every </span>
            <span className="text-[#c1eb84]">green </span>
            <span className="text-[#a8e06a]">future</span>
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          {sponsorsPage.heroDescription}
        </p>

        <div className="mt-10">
          <Button
            href={sponsorsPage.ctaHref}
            variant="accent"
            size="lg"
            className="gap-2 px-8 shadow-[0_8px_32px_rgba(242,192,41,0.35)]"
          >
            {sponsorsPage.ctaLabel}
            <span aria-hidden="true" className="text-lg leading-none">
              ↓
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}

function SponsorCard({
  sponsor,
  tier,
}: {
  sponsor: CurrentSponsor;
  tier: SponsorTier;
}) {
  const theme = tierTheme[tier];
  const isWideLogo = Boolean(sponsor.logoWide);

  return (
    <article className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-[0_4px_24px_rgba(27,67,50,0.07)] ring-1 ring-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(27,67,50,0.12)] sm:p-7">
      <div className="flex items-start gap-4">
        <a
          href={sponsor.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${sponsor.name} website`}
          className={`flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition-transform group-hover:scale-[1.02] ${
            isWideLogo ? "h-14 w-24 px-2" : "h-14 w-14"
          }`}
        >
          <Image
            src={sponsor.logo}
            alt=""
            width={isWideLogo ? 88 : 48}
            height={48}
            unoptimized={isWideLogo}
            className={
              isWideLogo
                ? "h-auto max-h-10 w-full object-contain"
                : "h-10 w-10 object-contain"
            }
          />
        </a>

        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-bold leading-tight text-[#1b4332]">
            {sponsor.name}
          </h3>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${theme.yearBadge}`}
            >
              {sponsor.year ?? new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>

      {sponsor.description ? (
        <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-600">
          {sponsor.description}
        </p>
      ) : (
        <div className="mt-5 flex-1" />
      )}

      <div className="mt-6 flex items-end justify-between border-t border-slate-100 pt-4">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
          Contribution
        </span>
        <span className="text-2xl font-bold text-ecorise-600">
          {formatAmount(sponsor.amount)}
        </span>
      </div>
    </article>
  );
}

function TierSponsorSection({
  tier,
  label,
  range,
  sponsors,
}: {
  tier: SponsorTier;
  label: string;
  range: string;
  sponsors: CurrentSponsor[];
}) {
  const theme = tierTheme[tier];
  const countLabel = `${sponsors.length} SPONSOR${sponsors.length === 1 ? "" : "S"}`;

  return (
    <section className="scroll-mt-28">
      <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-3">
        <span
          className={`rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider ${theme.badge}`}
        >
          {label}
        </span>
        <span className={`text-2xl font-bold sm:text-3xl ${theme.range}`}>
          {range}
        </span>
        <span
          className={`text-xs font-semibold uppercase tracking-[0.14em] ${theme.count}`}
        >
          {countLabel}
        </span>
        <div className="hidden h-px min-w-[3rem] flex-1 bg-slate-200 sm:block" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {sponsors.map((sponsor) => (
          <SponsorCard key={sponsor.name} sponsor={sponsor} tier={tier} />
        ))}
      </div>
    </section>
  );
}

function SponsorshipTiersSection() {
  return (
    <section id="sponsorship-tiers" className="scroll-mt-28 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[#1b4332] sm:text-4xl">
            Sponsorship tiers
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            The more you give, the more visibility you receive. Here is what each
            tier unlocks.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {sponsorshipTiers.map((tier) => (
            <article
              key={tier.id}
              className={`flex h-full flex-col rounded-2xl border bg-white p-8 shadow-[0_4px_24px_rgba(27,67,50,0.06)] transition-shadow hover:shadow-[0_8px_32px_rgba(27,67,50,0.1)] sm:p-9 ${tier.borderClass}`}
            >
              <span
                className={`mb-5 inline-flex w-fit rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider ${tier.badgeClass}`}
              >
                {tier.label}
              </span>
              <p className={`text-4xl font-bold tracking-tight ${tier.priceClass}`}>
                {tier.range}
              </p>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-600">
                {tier.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function InKindSection() {
  return (
    <section className="border-t border-slate-200 bg-[#f8faf8] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[#1b4332] sm:text-4xl">
            In-kind donations
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            These local partners support EcoRise through food, services, and
            other in-kind contributions.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {inKindDonors.map((donor) => (
            <a
              key={donor.name}
              href={donor.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${donor.name} website`}
              className="flex h-24 items-center justify-center rounded-2xl border border-slate-200/80 bg-white px-4 shadow-[0_2px_12px_rgba(27,67,50,0.05)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(27,67,50,0.1)] sm:h-28"
            >
              <Image
                src={donor.logo}
                alt={`${donor.name} logo`}
                width={120}
                height={48}
                unoptimized
                className={`max-h-12 w-auto max-w-[120px] object-contain ${
                  "logoClassName" in donor ? donor.logoClassName : ""
                }`}
              />
            </a>
          ))}
        </div>

        <p className="mt-14 text-center text-sm text-slate-600">
          Interested in partnering with EcoRise?{" "}
          <a
            href={`mailto:${officeHoursContact.email}`}
            className="font-semibold text-ecorise-600 transition-colors hover:text-ecorise-700"
          >
            Get in touch
          </a>
        </p>
      </div>
    </section>
  );
}

export function Sponsors() {
  const groupedTiers = tierOrder
    .map((tier) => {
      const meta = sponsorshipTiers.find((item) => item.id === tier);
      const sponsors = currentSponsors.filter((sponsor) => sponsor.tier === tier);
      return { tier, meta, sponsors };
    })
    .filter((group) => group.sponsors.length > 0);

  return (
    <>
      <SponsorsHero />

      <section className="bg-[#f8faf8] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-20 px-6 lg:px-8">
          {groupedTiers.map(({ tier, meta, sponsors }) => (
            <TierSponsorSection
              key={tier}
              tier={tier}
              label={meta?.label ?? tier}
              range={meta?.range ?? ""}
              sponsors={sponsors}
            />
          ))}
        </div>
      </section>

      <SponsorshipTiersSection />
      <InKindSection />
    </>
  );
}
