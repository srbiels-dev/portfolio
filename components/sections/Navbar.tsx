import Link from "next/link";
import { button } from "@/components/ui/Button/variants";

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav
        className="flex items-center justify-between gap-4 px-6 lg:px-10 py-4 backdrop-blur-sm"
        aria-label="Main navigation"
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="font-display text-text text-[18px] tracking-[-0.04em] font-semibold leading-none"
          aria-label="Baius Design — home"
        >
          baius
        </Link>

        {/* Nav links — hidden on mobile, visible from md up */}
        <ul
          className="hidden md:flex gap-8 lg:gap-[52px] items-center list-none"
          role="list"
        >
          {[
            { href: "#sobre", label: "sobre" },
            { href: "#projetos", label: "projetos" },
            { href: "#contato", label: "contato" },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="font-display text-text text-[14px] tracking-[-0.02em] hover:text-text-secondary transition-colors duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="#contato"
          className={button({ variant: "primary", size: "sm" })}
        >
          Falar comigo
        </Link>
      </nav>
    </header>
  );
}
