import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "accent" | "secondary" | "outline" | "inverseOutline" | "ghost";
  size?: "md" | "lg" | "xl";
  className?: string;
};

const variants = {
  primary:
    "bg-ecorise-600 text-white shadow-lg shadow-ecorise-600/25 hover:bg-ecorise-700",
  accent:
    "bg-[#f2c029] text-[#1b4332] shadow-lg shadow-[#f2c029]/30 hover:bg-[#e5b025]",
  secondary:
    "bg-ecorise-700 text-white shadow-lg shadow-ecorise-700/25 hover:bg-ecorise-800",
  outline:
    "border-2 border-[#1b4332] bg-white text-[#1b4332] shadow-sm hover:bg-[#c1eb84]",
  inverseOutline:
    "border-2 border-white/80 bg-transparent text-white shadow-sm hover:border-[#c1eb84] hover:bg-white/10 hover:text-white",
  ghost:
    "border border-slate-200 bg-white text-slate-800 hover:border-ecorise-300 hover:text-ecorise-700",
};

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base sm:text-lg",
  xl: "px-10 py-4 text-lg sm:px-12 sm:py-5 sm:text-xl",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) {
  const isExternal = href.startsWith("http");
  const isNativeLink = href.startsWith("mailto:") || href.startsWith("tel:");
  const classes = `inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  if (isNativeLink) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
