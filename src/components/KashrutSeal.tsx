import { useId } from "react";

type SealProps = {
  className?: string;
};

export function KashrutSeal({ className = "" }: SealProps) {
  const id = useId();
  const topId = `${id}-top`;
  const midId = `${id}-mid`;
  const bottomId = `${id}-bottom`;

  return (
    <span dir="ltr" className="inline-flex">
      <svg
        className={className}
        viewBox="0 0 240 240"
        role="img"
        aria-label="כשר למהדרין בהשגחת הרבנות באר שבע"
      >
        <circle
          cx="120"
          cy="120"
          r="116"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="120"
          cy="120"
          r="108"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.15"
        />

        <defs>
          <path id={topId} d="M 38 120 A 82 82 0 0 1 202 120" />
          <path id={midId} d="M 58 120 A 62 62 0 0 1 182 120" />
          <path id={bottomId} d="M 198 128 A 78 78 0 0 1 42 128" />
        </defs>

        <text
          fill="currentColor"
          fontSize="15"
          fontWeight="700"
          letterSpacing="1.6"
          fontFamily="Heebo, Arial, sans-serif"
        >
          <textPath href={`#${topId}`} startOffset="50%" textAnchor="middle">
            בהשגחת הרבנות
          </textPath>
        </text>

        <text
          fill="currentColor"
          fontSize="11"
          fontWeight="600"
          letterSpacing="0.8"
          fontFamily="Heebo, Arial, sans-serif"
        >
          <textPath href={`#${midId}`} startOffset="50%" textAnchor="middle">
            כשר למהדרין
          </textPath>
        </text>

        <g
          transform="translate(120 128)"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.35"
        >
          {Array.from({ length: 8 }, (_, index) => (
            <path
              key={index}
              d="M0 -6 C7 -16 16 -10 8 0 C16 10 7 16 0 6 C-4 2 -4 -2 0 -6"
              transform={`rotate(${index * 45})`}
            />
          ))}
          <circle r="3.5" fill="currentColor" stroke="none" />
        </g>

        <text
          fill="currentColor"
          fontSize="16"
          fontWeight="700"
          letterSpacing="2.4"
          fontFamily="Heebo, Arial, sans-serif"
        >
          <textPath href={`#${bottomId}`} startOffset="50%" textAnchor="middle">
            באר שבע
          </textPath>
        </text>
      </svg>
    </span>
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
          compact ? "h-16 w-16 shrink-0 text-gold" : "h-28 w-28 shrink-0 text-gold"
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
