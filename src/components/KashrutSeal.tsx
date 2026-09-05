import Image from "next/image";
import { withBasePath } from "@/lib/paths";

type SealProps = {
  className?: string;
};

export function KashrutSeal({ className = "" }: SealProps) {
  return (
    <Image
      src={withBasePath("/brand/kashrut-seal.png")}
      alt="כשר רבנות מהדרין"
      width={401}
      height={400}
      className={className}
    />
  );
}

export function KashrutBlock({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <div
      className={
        compact
          ? "flex items-center gap-3"
          : "card flex flex-col items-center gap-4 text-center sm:flex-row sm:text-right"
      }
    >
      <KashrutSeal
        className={
          compact ? "h-20 w-20 shrink-0" : "h-32 w-32 shrink-0"
        }
      />
      <div>
        <p className={compact ? "text-sm text-gold" : "font-display text-2xl text-gold"}>
          כשר למהדרין
        </p>
        <p className={compact ? "text-xs text-cream/70" : "mt-1 text-cream/75"}>
          בהשגחת הרבנות באר שבע
        </p>
      </div>
    </div>
  );
}
