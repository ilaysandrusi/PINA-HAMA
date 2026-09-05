import type { Metadata } from "next";
import { copy, formatPrice, menu } from "@/lib/content";

export const metadata: Metadata = {
  title: "תפריט",
  description: "סמבוסקים, טוסטים, בורקסים, מאפים ושתייה מהפינה החמה בבאר שבע.",
};

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <p className="text-sm text-gold">{copy.menuPage.eyebrow}</p>
      <h1 className="mt-2 font-display text-5xl">{copy.menuPage.headline}</h1>
      <p className="mt-4 max-w-2xl text-cream/75">{copy.menuPage.lead}</p>

      <div className="mt-12 grid gap-12">
        {menu.categories.map((category) => (
          <section key={category.id}>
            <h2 className="border-b border-gold/25 pb-3 font-display text-3xl text-gold">
              {category.name}
            </h2>
            {category.description ? (
              <p className="mt-3 text-sm text-cream/60">{category.description}</p>
            ) : null}
            <ul className="mt-6 grid gap-4">
              {category.items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-start justify-between gap-6 border-b border-cream/10 pb-4"
                >
                  <div>
                    <h3 className="text-lg">
                      {item.name}
                      {item.spicy ? (
                        <span className="mr-2 text-xs text-ember">חריף</span>
                      ) : null}
                    </h3>
                    {item.description ? (
                      <p className="mt-1 text-sm text-cream/65">{item.description}</p>
                    ) : null}
                  </div>
                  <span className="shrink-0 text-gold">{formatPrice(item.price)}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <p className="mt-10 text-sm text-cream/50">{copy.menuPage.disclaimer}</p>
    </div>
  );
}
