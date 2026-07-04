type PlaceholderImageProps = {
  label: string;
  gradient: string;
  className?: string;
  aspect?: "video" | "square" | "wide";
};

const aspectClasses = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[21/9]",
};

export function PlaceholderImage({
  label,
  gradient,
  className = "",
  aspect = "video",
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} ${aspectClasses[aspect]} ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_50%)]" />
      <div className="absolute inset-0 flex items-end p-5">
        <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
          {label}
        </span>
      </div>
    </div>
  );
}
