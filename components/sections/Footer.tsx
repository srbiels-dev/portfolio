export function Footer() {
  return (
    <footer className="flex items-end justify-end pl-10 pr-[50px] py-8 w-full">
      {/* Social links — bottom left */}
      <div className="flex flex-1 flex-col gap-8 items-start min-w-0 mr-[-10px]">
        {[
          { label: "Behance", href: "https://behance.net/" },
          { label: "Instagram", href: "https://instagram.com/" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-text text-[24px] leading-[1.2] hover:text-text-secondary transition-colors duration-200"
          >
            {label}
          </a>
        ))}
      </div>

      {/* Brand wordmark — typographic statement */}
      <div className="flex flex-col items-end mr-[-10px] pb-[29px] shrink-0">
        <p
          className="font-display text-text leading-[1] tracking-[-0.02em] select-none"
          style={{ fontSize: "168px" }}
          aria-label="Baius Design"
        >
          BAIUS
        </p>
        <p
          className="font-display text-text leading-[1] tracking-[-0.02em] select-none"
          style={{ fontSize: "168px" }}
          aria-hidden="true"
        >
          DESIGN
        </p>
        <p className="font-mono text-text text-[24px] text-right tracking-[-0.02em] mt-1">
          2026
        </p>
      </div>
    </footer>
  );
}
