import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  showWordmark?: boolean;
  className?: string;
  variant?: "default" | "footer";
};

export function Logo({
  showWordmark = true,
  className = "",
  variant = "default",
}: LogoProps) {
  const isFooter = variant === "footer";

  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative h-9 w-9 shrink-0 sm:h-10 sm:w-10">
        <Image
          src="/images/ecorise-logo.jpg"
          alt="EcoRise"
          fill
          className="rounded-full object-cover"
          priority
          sizes="40px"
        />
      </div>
      {showWordmark && (
        <span className="text-2xl font-semibold sm:text-[1.75rem]">
          <span className={isFooter ? "text-white" : "text-[#1b4332]"}>Eco</span>
          <span className={isFooter ? "text-[#f2c029]" : "text-[#ca8a04]"}>Rise</span>
        </span>
      )}
    </Link>
  );
}
