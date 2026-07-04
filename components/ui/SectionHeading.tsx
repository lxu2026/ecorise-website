type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  display?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  display = false,
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <span
          className={`text-sm font-semibold uppercase tracking-[0.25em] ${
            display
              ? light
                ? "font-display font-medium not-italic text-white/80"
                : "font-display font-medium not-italic text-[#5a7a4a]"
              : light
                ? "text-white/80"
                : "text-[#315630]"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`${
          display
            ? "font-display text-4xl font-medium italic leading-[1.15] tracking-normal sm:text-5xl lg:text-[3.25rem]"
            : "text-3xl font-bold tracking-tight sm:text-4xl"
        } ${light ? "text-white" : "text-[#1b4332]"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg leading-relaxed ${
            display ? "max-w-2xl font-normal" : ""
          } ${light ? "text-ecorise-100" : "text-slate-700"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
