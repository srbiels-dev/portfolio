import { FadeIn } from "@/components/ui/FadeIn";

export function Footer() {
  return (
    <footer className="w-full">
      <FadeIn className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-end px-6 lg:pl-10 lg:pr-[50px] py-8 w-full">
        {/* Social links — bottom left */}
        <div className="flex flex-1 flex-col gap-6 lg:gap-8 items-start min-w-0 lg:mr-[-10px]">
          {[
            { label: "Behance", href: "https://behance.net/" },
            { label: "Instagram", href: "https://instagram.com/" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-text text-[20px] md:text-[24px] leading-[1.2] hover:text-text-secondary transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Brand wordmark — typographic statement */}
        <div className="flex flex-col items-start lg:items-end lg:mr-[-10px] lg:pb-[29px] lg:shrink-0">
          <p
            className="font-display text-text leading-[1] tracking-[-0.02em] select-none text-[clamp(72px,_22vw,_168px)]"
            aria-label="Baius Design"
          >
            BAIUS
          </p>
          <p
            className="font-display text-text leading-[1] tracking-[-0.02em] select-none text-[clamp(72px,_22vw,_168px)]"
            aria-hidden="true"
          >
            DESIGN
          </p>
          <p className="font-mono text-text text-[20px] md:text-[24px] text-left lg:text-right tracking-[-0.02em] mt-2 lg:mt-1">
            2026
          </p>
        </div>
      </FadeIn>
    </footer>
  );
}
