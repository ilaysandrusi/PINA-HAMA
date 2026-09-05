import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
  alt?: string;
};

export function Logo({
  className = "",
  priority = false,
  alt = "הפינה החמה",
}: LogoProps) {
  return (
    <Image
      src="/brand/logo.png"
      alt={alt}
      width={800}
      height={800}
      priority={priority}
      className={`rounded-full ${className}`}
    />
  );
}
