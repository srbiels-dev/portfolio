import Link from "next/link";
import Image from "next/image";
import { FadeInSection } from "@/components/ui/FadeIn";
import { AnimatedArrow } from "@/components/ui/AnimatedArrow";
import { projects } from "@/lib/projects";

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex gap-[11px] items-center">
      <span className="font-mono text-text text-[18px] tracking-[-0.02em] font-normal">
        {label}
      </span>
      <AnimatedArrow />
    </div>
  );
}

export function Projects() {
  return (
    <FadeInSection
      id="projetos"
      aria-labelledby="projects-heading"
      className="flex flex-col gap-10 items-start overflow-hidden px-6 py-6 w-full scroll-mt-[60px]"
    >
      <SectionLabel label="projetos" />

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 items-stretch lg:items-start w-full">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projetos/${project.slug}`}
            className="flex flex-1 flex-col gap-6 items-start min-w-0 w-full group"
            aria-label={`Ver projeto ${project.name}`}
          >
            <div className="bg-[#2b2d33] h-[260px] sm:h-[340px] lg:h-[429px] rounded-2xl w-full shrink-0 overflow-hidden cursor-pointer relative">
              {project.cover && (
                <Image
                  src={project.cover}
                  alt={`Preview do projeto ${project.name}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              )}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.03] transition-colors duration-300" />
            </div>
            <h2
              className="font-display text-text leading-[1.2] tracking-[-0.02em] w-full"
              style={{ fontSize: project.cardSize }}
            >
              {project.name}
            </h2>
          </Link>
        ))}
      </div>
    </FadeInSection>
  );
}
