import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";
import { button } from "@/components/ui/Button/variants";

function ExternalLinkIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M5 3h6v6M11 3 4 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 border-t border-(--color-border-subtle) pt-3">
      <span className="font-mono text-text-tertiary text-[12px] uppercase tracking-[0.06em]">
        {label}
      </span>
      <span className="font-body text-text text-[14px] leading-[1.4]">
        {value}
      </span>
    </div>
  );
}

function SectionBlock({
  label,
  heading,
  body,
}: {
  label: string;
  heading: string;
  body: string;
}) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 lg:gap-16 w-full">
      <span className="font-mono text-text-tertiary text-[14px] uppercase tracking-[0.06em] pt-1">
        {label}
      </span>
      <div className="flex flex-col gap-4 max-w-[760px]">
        <h2 className="font-display text-text text-[28px] md:text-[36px] leading-[1.15] tracking-[-0.02em]">
          {heading}
        </h2>
        <p className="font-body text-text-secondary text-[16px] md:text-[18px] leading-[1.5]">
          {body}
        </p>
      </div>
    </section>
  );
}

function GalleryPlaceholder({ aspect }: { aspect: string }) {
  return (
    <div
      className="bg-[#2b2d33] rounded-2xl w-full"
      style={{ aspectRatio: aspect }}
    />
  );
}

function GalleryImage({
  src,
  alt,
  aspect,
  priority = false,
}: {
  src: string;
  alt: string;
  aspect: string;
  priority?: boolean;
}) {
  return (
    <div
      className="bg-[#2b2d33] rounded-2xl w-full overflow-hidden relative"
      style={{ aspectRatio: aspect }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1200px) 1200px, 100vw"
        className="object-cover"
      />
    </div>
  );
}

export function ProjectContent({ project }: { project: Project }) {
  return (
    <article className="flex flex-col gap-20 md:gap-28 px-6 md:px-10 py-16 md:py-24 w-full max-w-[1200px] mx-auto">
      <header className="flex flex-col gap-10 w-full">
        <div className="flex flex-col gap-4 w-full">
          <span className="font-mono text-text-tertiary text-[14px] uppercase tracking-[0.06em]">
            {project.client} · {project.year}
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-6 w-full">
            <h1 className="font-display text-text text-[clamp(36px,_6vw,_64px)] leading-[1.1] tracking-[-0.02em] max-w-[860px]">
              {project.name}
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 self-start lg:self-end lg:mb-2">
              {project.liveDemoPath && (
                <Link
                  href={project.liveDemoPath}
                  aria-label={`Abrir landing ao vivo de ${project.name}`}
                  className={button({ variant: "primary", size: "sm" })}
                >
                  Ver landing ao vivo
                  <ExternalLinkIcon />
                </Link>
              )}
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir ${project.name} em uma nova aba`}
                  className={button({ variant: "secondary", size: "sm" })}
                >
                  Ver site no ar
                  <ExternalLinkIcon />
                </Link>
              )}
            </div>
          </div>
          <p className="font-body text-text-secondary text-[18px] md:text-[22px] leading-[1.4] max-w-[860px]">
            {project.tagline}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
          <MetaRow label="Cliente" value={project.client} />
          <MetaRow label="Ano" value={String(project.year)} />
          <MetaRow label="Serviços" value={project.services.join(", ")} />
          <MetaRow
            label="Status"
            value={project.liveUrl ? "No ar" : "Em produção"}
          />
        </div>
      </header>

      {project.cover ? (
        <GalleryImage
          src={project.cover}
          alt={`Cover do projeto ${project.name}`}
          aspect="16 / 10"
          priority
        />
      ) : (
        <GalleryPlaceholder aspect="16 / 10" />
      )}

      {project.overview && (
        <SectionBlock
          label="Visão geral"
          heading="Uma nova fase pediu uma nova página."
          body={project.overview}
        />
      )}

      {project.challenge && (
        <SectionBlock
          label="Desafio"
          heading="A página antiga falava com outro público."
          body={project.challenge}
        />
      )}

      {project.solution && (
        <SectionBlock
          label="Solução"
          heading="Narrativa em segmentos, ancorada em pessoas reais."
          body={project.solution}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <GalleryPlaceholder aspect="4 / 5" />
        <GalleryPlaceholder aspect="4 / 5" />
      </div>

      {project.impact && (
        <SectionBlock
          label="Impacto"
          heading="Conversão no contexto, sem tirar o usuário do fluxo."
          body={project.impact}
        />
      )}

      <GalleryPlaceholder aspect="16 / 9" />

      <footer className="flex flex-col gap-6 items-start border-t border-(--color-border-subtle) pt-10 w-full">
        <span className="font-mono text-text-tertiary text-[14px] uppercase tracking-[0.06em]">
          Próximo passo
        </span>
        <h2 className="font-display text-text text-[28px] md:text-[36px] leading-[1.15] tracking-[-0.02em] max-w-[640px]">
          Tem um projeto que pede esse mesmo cuidado?
        </h2>
        <Link
          href="/#contato"
          className={button({ variant: "primary", size: "md" })}
        >
          Falar comigo
        </Link>
      </footer>
    </article>
  );
}
