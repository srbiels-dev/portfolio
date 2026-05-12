"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../LanguageContext";
import { useReserve } from "../ReserveContext";
import { CarriesLogo } from "../LogoMark";
import { LanguageToggle } from "../LanguageToggle";

export function CarriesNavbar() {
  const { t } = useLanguage();
  const { openReserve } = useReserve();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: { href: string; label: string }[] = [
    { href: "#sobre", label: t.nav.sobre },
    { href: "#menu", label: t.nav.menu },
    { href: "#eventos", label: t.nav.eventos },
    { href: "#visite", label: t.nav.visite },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-colors ${
        scrolled
          ? "bg-(--color-bg)/85 backdrop-blur-md border-b border-(--color-border-subtle)"
          : "bg-transparent"
      }`}
    >
      <nav
        className="flex items-center justify-between gap-4 px-6 py-4"
        aria-label="CARRIES navigation"
      >
        <a href="#top" className="text-(--color-text)" aria-label="CARRIES">
          <CarriesLogo className="h-5 w-[93px]" />
        </a>

        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[14px] text-(--color-text-secondary) hover:text-(--color-text) transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <button
            type="button"
            onClick={openReserve}
            className="px-4 md:px-5 py-2 rounded-full bg-(--carries-ash-brown) text-(--carries-linen) text-[13px] md:text-[14px] font-medium hover:bg-(--carries-graphite) transition-colors cursor-pointer"
          >
            {t.nav.reservar}
          </button>
        </div>
      </nav>
    </header>
  );
}
