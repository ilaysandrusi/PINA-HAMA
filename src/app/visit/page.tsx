import type { Metadata } from "next";
import { HoursList } from "@/components/HoursList";
import { business, copy, primaryPhone } from "@/lib/content";
import { mapsEmbedSrc, telHref, whatsappHref } from "@/lib/links";

export const metadata: Metadata = {
  title: "הגעה ויצירת קשר",
  description: "כתובת, שעות וטלפון של הפינה החמה בקק\"ל 2, באר שבע.",
};

export default function VisitPage() {
  const phone = primaryPhone();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-sm text-gold">{copy.visit.eyebrow}</p>
      <h1 className="mt-2 font-display text-5xl">{copy.visit.headline}</h1>
      <p className="mt-4 max-w-2xl text-lg text-cream/75">{copy.visit.lead}</p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <section className="card">
          <h2 className="font-display text-3xl">{copy.visit.orderTitle}</h2>
          <p className="mt-3 text-cream/75">{copy.visit.orderText}</p>
          <p className="mt-5 text-xl">{business.address.full}</p>
          <div className="mt-6 grid gap-3">
            {business.phones.map((item) => (
              <a key={item.id} className="btn-ghost justify-between" href={telHref(item)}>
                <span>{item.label}</span>
                <span>{item.display}</span>
              </a>
            ))}
            <a className="btn-gold" href={whatsappHref()}>
              וואטסאפ · {phone.display}
            </a>
          </div>
        </section>

        <section className="card">
          <h2 className="font-display text-3xl">{copy.visit.hoursTitle}</h2>
          <div className="mt-4">
            <HoursList />
          </div>
          {business.hoursNeedsConfirmation ? (
            <p className="mt-4 text-sm text-cream/55">{copy.visit.hoursDisclaimer}</p>
          ) : null}
        </section>
      </div>

      <section className="mt-8 overflow-hidden rounded-3xl border border-gold/20">
        <div className="px-4 py-3 text-sm text-gold">{copy.visit.mapTitle}</div>
        <iframe
          title="מפת הפינה החמה"
          src={mapsEmbedSrc(business.geo.query)}
          className="h-[360px] w-full border-0 grayscale contrast-125"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <a
          className="block bg-ink-2 px-4 py-3 text-cream/80 hover:text-gold"
          href={business.geo.mapsUrl}
          target="_blank"
          rel="noreferrer"
        >
          פתיחה בגוגל מפות
        </a>
      </section>
    </div>
  );
}
