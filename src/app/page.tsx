import Link from "next/link";
import { HoursList } from "@/components/HoursList";
import { Logo } from "@/components/Logo";
import {
  business,
  copy,
  featuredItems,
  formatPrice,
  primaryPhone,
} from "@/lib/content";
import { telHref, whatsappHref } from "@/lib/links";

export default function HomePage() {
  const phone = primaryPhone();
  const featured = featuredItems();

  return (
    <>
      <section className="hero-glow relative overflow-hidden">
        <div className="stripe h-2 w-full" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
          <div>
            <p className="text-sm tracking-[0.2em] text-gold">{copy.home.eyebrow}</p>
            <h1 className="mt-4 font-display text-5xl leading-none md:text-7xl">
              {copy.home.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-cream/80">
              {copy.home.subhead}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-gold" href="/menu">
                {copy.home.primaryCta}
              </Link>
              <a className="btn-ghost" href={telHref(phone)}>
                {copy.home.secondaryCta} · {phone.display}
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex h-64 w-64 items-center justify-center md:h-80 md:w-80">
            <div className="absolute inset-4 rounded-full bg-ember/35 blur-3xl" />
            <Logo
              priority
              className="relative h-full w-full drop-shadow-[0_0_40px_rgba(222,156,33,0.28)]"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-16 md:grid-cols-3">
        {copy.home.proof.map((item) => (
          <article key={item.title} className="card">
            <h2 className="font-display text-2xl text-gold">{item.title}</h2>
            <p className="mt-3 text-cream/80">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="bg-ink-2 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm text-gold">התנור</p>
              <h2 className="font-display text-4xl">{copy.home.featuredTitle}</h2>
            </div>
            <Link className="text-gold hover:text-gold-2" href="/menu">
              {copy.home.featuredCta}
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {featured.map((item) => (
              <article key={item.id} className="card">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl">{item.name}</h3>
                  <span className="text-gold">{formatPrice(item.price)}</span>
                </div>
                <p className="mt-2 text-sm text-cream/70">{item.description}</p>
                {item.spicy ? (
                  <p className="mt-3 text-xs text-ember">חריף</p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2">
        <div className="card">
          <h2 className="font-display text-3xl">{copy.home.visitTitle}</h2>
          <p className="mt-3 text-cream/80">{copy.home.visitText}</p>
          <p className="mt-6 text-lg">{business.address.full}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-gold" href={whatsappHref()}>
              וואטסאפ
            </a>
            <Link className="btn-ghost" href="/visit">
              שעות והגעה
            </Link>
          </div>
        </div>
        <div className="card">
          <h2 className="mb-4 font-display text-3xl">שעות פעילות</h2>
          <HoursList />
          {business.hoursNeedsConfirmation ? (
            <p className="mt-4 text-xs text-cream/50">
              השעות מהאתר הישן — לאשר מול המקום לפני השקה.
            </p>
          ) : null}
        </div>
      </section>
    </>
  );
}
