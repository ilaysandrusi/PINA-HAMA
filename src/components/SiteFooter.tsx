import Link from "next/link";
import { business, copy, hoursLabel } from "@/lib/content";
import { telHref } from "@/lib/links";
import { Logo } from "@/components/Logo";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-gold/20 bg-ink-2">
      <div className="stripe h-2 w-full" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="h-12 w-12" />
            <strong className="font-display text-2xl text-cream">{business.name}</strong>
          </div>
          <p className="mt-4 max-w-sm text-cream/75">{copy.footer.blurb}</p>
        </div>

        <div>
          <h2 className="mb-3 text-sm text-gold">שעות</h2>
          <ul className="space-y-2 text-cream/85">
            {business.hours.map((row) => (
              <li key={row.id} className="flex justify-between gap-6">
                <span>{row.days}</span>
                <span>{hoursLabel(row)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-sm text-gold">יצירת קשר</h2>
          <p>{business.address.full}</p>
          <div className="mt-3 grid gap-2">
            {business.phones.map((phone) => (
              <a key={phone.id} className="text-cream hover:text-gold" href={telHref(phone)}>
                {phone.display}
              </a>
            ))}
            <Link className="text-cream/80 hover:text-gold" href="/visit">
              ניווט והזמנה
            </Link>
          </div>
        </div>
      </div>
      <p className="border-t border-gold/10 px-4 py-4 text-center text-sm text-cream/50">
        © {year} {business.name} · באר שבע
      </p>
    </footer>
  );
}
