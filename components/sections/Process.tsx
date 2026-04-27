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

const steps = [
  {
    number: "01",
    title: "Diagnóstico gratuito",
    description:
      "Você me conta sobre seu negócio. Eu te mostro onde sua presença online tá te custando cliente. Sem compromisso, sem enrolação.",
  },
  {
    number: "02",
    title: "Estratégia + Design",
    description:
      "Monto a estrutura da página pensando no seu cliente, não no seu gosto pessoal. Você aprova, a gente ajusta, e eu desenvolvo.",
  },
  {
    number: "03",
    title: "Página no ar",
    description:
      "Entrego tudo pronto, responsivo, rápido. Te explico o funcionamento e fico disponível. Seu negócio agora tem um vendedor 24h.",
  },
];

export function Process() {
  return (
    <FadeInSection
      aria-labelledby="process-heading"
      className="flex flex-col gap-10 lg:gap-12 items-start overflow-hidden px-6 py-6 w-full"
    >
      <SectionLabel label="PROCESSO" />

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 items-start w-full">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex flex-1 flex-col gap-4 lg:gap-6 items-start min-w-0 w-full pt-6 border-t border-transparent"
          >
            <div className="flex flex-col gap-1 items-start">
              <p className="font-display text-text-tertiary text-[clamp(44px,_10vw,_64px)] leading-[1.2] tracking-[-0.02em]">
                {step.number}
              </p>
              <h3
                id={step.number === "01" ? "process-heading" : undefined}
                className="font-display text-text text-[20px] md:text-[24px] leading-[1.2]"
              >
                {step.title}
              </h3>
            </div>
            <p className="font-body text-text-secondary text-[15px] md:text-[16px] leading-[1.4]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </FadeInSection>
  );
}
