import { business, hoursLabel } from "@/lib/content";

export function HoursList({ compact = false }: { compact?: boolean }) {
  return (
    <ul className={compact ? "space-y-2" : "space-y-3"}>
      {business.hours.map((row) => (
        <li
          key={row.id}
          className="flex items-baseline justify-between gap-6 border-b border-gold/15 py-2"
        >
          <span className="text-cream">{row.days}</span>
          <span className={row.closed ? "text-cream/50" : "text-gold"}>
            {hoursLabel(row)}
          </span>
        </li>
      ))}
    </ul>
  );
}
