function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex gap-[11px] items-center">
      <span className="font-mono text-text text-[18px] tracking-[-0.02em] font-normal">
        {label}
      </span>
      <svg
        className="rotate-90 shrink-0"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 10h12M11 5l5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
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
    <section
      aria-labelledby="process-heading"
      className="flex flex-col gap-12 items-start overflow-hidden px-6 py-6 w-full"
    >
      <SectionLabel label="PROCESSO" />

      <div className="flex gap-6 items-start w-full">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex flex-1 flex-col gap-6 items-start min-w-0 pt-6 border-t border-transparent"
          >
            <div className="flex flex-col gap-1 items-start">
              <p className="font-display text-text-tertiary text-[64px] leading-[1.2] tracking-[-0.02em]">
                {step.number}
              </p>
              <h3
                id={step.number === "01" ? "process-heading" : undefined}
                className="font-display text-text text-[24px] leading-[1.2]"
              >
                {step.title}
              </h3>
            </div>
            <p className="font-body text-text-secondary text-[16px] leading-[1.4]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
