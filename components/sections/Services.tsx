import { FadeInSection } from "@/components/ui/FadeIn";

const features = [
  {
    title: "Estratégia de conversão",
    description:
      "Headline que fala o que o cliente quer ouvir. Estrutura que guia o visitante até o botão de contato sem ele perceber.",
  },
  {
    title: "Design com propósito",
    description:
      "Visual que transmite profissionalismo sem parecer template. Cada elemento existe por um motivo, não por decoração.",
  },
  {
    title: "Performance real",
    description:
      "Página rápida, responsiva, que funciona no celular do seu cliente. Sem firula que trava, sem peso desnecessário.",
  },
];

export function Services() {
  return (
    <FadeInSection
      aria-labelledby="services-heading"
      className="flex flex-col gap-12 lg:gap-14 items-start overflow-hidden px-6 py-20 lg:py-32 w-full"
    >
      <h2
        id="services-heading"
        className="font-display text-text text-[clamp(36px,_7.5vw,_64px)] leading-[1.15] md:leading-[1.2] tracking-[-0.02em] max-w-[969px]"
      >
        Eu não faço site bonito. Eu faço página que trabalha por você.
      </h2>

      {/* Two-column layout */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-[114px] items-start w-full">
        {/* Image placeholder */}
        <div className="w-full lg:flex-1 lg:min-w-0 aspect-[566/440] bg-[#2b2d33] rounded-2xl" />

        {/* Feature list */}
        <div className="flex flex-col gap-10 lg:gap-14 items-start justify-center w-full lg:w-auto lg:shrink-0">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col gap-4 lg:gap-6 items-start w-full lg:w-[603px]"
            >
              <h3 className="font-display font-bold text-text text-[20px] md:text-[24px] leading-[1.2] tracking-[-0.025em]">
                {f.title}
              </h3>
              <p className="font-body text-text-tertiary text-[16px] md:text-[18px] leading-[1.4] tracking-[-0.02em]">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}
