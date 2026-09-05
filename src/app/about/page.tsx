import type { Metadata } from "next";
import Link from "next/link";
import { KashrutBlock } from "@/components/KashrutSeal";
import { copy } from "@/lib/content";

export const metadata: Metadata = {
  title: "קצת עלינו",
  description: "הפינה החמה — מאפייה בלב באר שבע עם סמבוסקים מתנור אבן.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-sm text-gold">{copy.about.eyebrow}</p>
      <h1 className="mt-2 font-display text-5xl leading-tight">
        {copy.about.headline}
      </h1>
      <p className="mt-6 text-xl leading-9 text-cream/85">{copy.about.lead}</p>
      <div className="mt-8 grid gap-5 text-lg leading-8 text-cream/75">
        {copy.about.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <section className="mt-12">
        <KashrutBlock />
        <p className="mt-4 text-cream/70">{copy.about.kashrutText}</p>
      </section>
      <section className="card mt-12">
        <h2 className="font-display text-3xl text-gold">{copy.about.ovenTitle}</h2>
        <p className="mt-3 text-cream/80">{copy.about.ovenText}</p>
        <Link className="btn-gold mt-6" href="/menu">
          לתפריט
        </Link>
      </section>
    </div>
  );
}
