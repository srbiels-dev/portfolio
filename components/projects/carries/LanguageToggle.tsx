"use client";

import { useLanguage } from "./LanguageContext";
import type { Locale } from "./i18n";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex items-center text-[12px] font-medium tracking-wide uppercase"
    >
      {(["pt", "en"] as Locale[]).map((l, i) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={`px-1.5 py-1 transition-opacity cursor-pointer ${
            locale === l ? "opacity-100" : "opacity-40 hover:opacity-70"
          } ${i === 0 ? "border-r border-(--color-border)" : ""}`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
