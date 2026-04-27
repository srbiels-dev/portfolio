import { FadeInSection } from "@/components/ui/FadeIn";
import { AnimatedArrow } from "@/components/ui/AnimatedArrow";

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

const projects = [
  { name: "VAROS Academy", size: "24px" },
  { name: "Bardot Consultoria", size: "24px" },
  { name: "VAROS Consultoria", size: "24px" },
];

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
          <article
            key={project.name}
            className="flex flex-1 flex-col gap-6 items-start min-w-0 w-full"
          >
            {/* Card placeholder — will hold project screenshots */}
            <div className="bg-[#2b2d33] h-[260px] sm:h-[340px] lg:h-[429px] rounded-2xl w-full shrink-0 overflow-hidden group cursor-pointer relative">
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.03] transition-colors duration-300" />
            </div>
            <h2
              className="font-display text-text leading-[1.2] tracking-[-0.02em] w-full"
              style={{ fontSize: project.size }}
            >
              {project.name}
            </h2>
          </article>
        ))}
      </div>
    </FadeInSection>
  );
}
