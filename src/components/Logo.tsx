import Image from "next/image";
import { withBasePath } from "@/lib/paths";

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
      src={withBasePath("/brand/logo.png")}
      alt={alt}
      width={800}
      height={800}
      priority={priority}
      className={`rounded-full ${className}`}
    />
  );
}
