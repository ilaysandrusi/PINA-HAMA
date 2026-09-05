import type { Metadata } from "next";
import { Frank_Ruhl_Libre, Heebo } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { JsonLd } from "@/components/JsonLd";
import { business } from "@/lib/content";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
});

const frank = Frank_Ruhl_Libre({
  variable: "--font-frank",
  subsets: ["hebrew", "latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${business.name} | מאפייה בבאר שבע`,
    template: `%s | ${business.name}`,
  },
  description:
    "מאפייה בלב באר שבע. סמבוסקים מתנור אבן, בורקסים, מאפים ושעות פעילות עד הלילה. קק\"ל 2.",
  openGraph: {
    title: business.name,
    description: business.tagline,
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} ${frank.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink font-sans text-cream">
        <JsonLd />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
