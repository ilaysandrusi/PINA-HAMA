"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { business, primaryPhone } from "@/lib/content";
import { telHref } from "@/lib/links";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const phone = primaryPhone();

  return (
    <header className="sticky top-0 z-40 border-b border-gold/20 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link
          href="/"
          className="shrink-0"
          aria-label={business.name}
          onClick={() => setOpen(false)}
        >
          <Logo className="h-16 w-16 md:h-[4.5rem] md:w-[4.5rem]" priority alt="" />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {business.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm tracking-wide ${
                pathname === item.href ? "text-gold" : "text-cream/80 hover:text-gold"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a className="btn-gold" href={telHref(phone)}>
            הזמינו עכשיו
          </a>
        </nav>

        <button
          type="button"
          className="rounded-full border border-gold/40 px-3 py-1 text-sm text-cream md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
        >
          {open ? "סגירה" : "תפריט"}
        </button>
      </div>

      {open ? (
        <nav className="grid gap-2 border-t border-gold/20 px-4 py-4 md:hidden">
          {business.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-2 text-cream"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a className="btn-gold mt-2 justify-center" href={telHref(phone)}>
            הזמינו עכשיו
          </a>
        </nav>
      ) : null}
    </header>
  );
}
