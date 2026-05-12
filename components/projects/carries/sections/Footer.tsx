"use client";

import { useLanguage } from "../LanguageContext";
import { CarriesLogo } from "../LogoMark";

export function CarriesFooter() {
  const { t } = useLanguage();

  return (
    <footer className="bg-(--carries-graphite) text-(--carries-linen) px-6 lg:px-16 pt-16 pb-10">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1 flex flex-col gap-3">
            <CarriesLogo className="h-6 w-[112px] text-(--carries-linen)" />
            <p className="text-[13px] opacity-70 max-w-[220px]">
              {t.visite.address} · {t.visite.neighborhood}
            </p>
          </div>

          <FooterCol title={t.footer.nav}>
            <FooterLink href="#sobre">{t.nav.sobre}</FooterLink>
            <FooterLink href="#menu">{t.nav.menu}</FooterLink>
            <FooterLink href="#eventos">{t.nav.eventos}</FooterLink>
            <FooterLink href="#visite">{t.nav.visite}</FooterLink>
          </FooterCol>

          <FooterCol title={t.footer.contact}>
            <FooterLink href="#">Instagram</FooterLink>
            <FooterLink href="#">WhatsApp</FooterLink>
            <FooterLink href="#">ola@carries.cafe</FooterLink>
          </FooterCol>

          <FooterCol title={t.footer.newsletter}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2 mt-1"
            >
              <input
                type="email"
                required
                placeholder={t.footer.newsletterPlaceholder}
                className="flex-1 min-w-0 bg-transparent border-b border-(--carries-linen)/30 text-[14px] py-1.5 outline-none focus:border-(--carries-linen) placeholder:text-(--carries-linen)/40"
              />
              <button
                type="submit"
                className="text-[14px] underline underline-offset-[6px] decoration-(--carries-linen)/40 hover:decoration-(--carries-linen) cursor-pointer transition-colors"
              >
                →
              </button>
            </form>
          </FooterCol>
        </div>

        <div className="flex items-center justify-between gap-6 pt-8 border-t border-(--carries-linen)/15">
          <span className="font-hand text-[18px] opacity-80">{t.footer.closing}</span>
          <span className="text-[12px] opacity-50">© 2026</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-[11px] uppercase tracking-[0.14em] opacity-60">{title}</span>
      <ul className="flex flex-col gap-2 list-none">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className="text-[14px] opacity-80 hover:opacity-100 transition-opacity"
      >
        {children}
      </a>
    </li>
  );
}
