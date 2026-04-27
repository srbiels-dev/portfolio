import { FadeInSection } from "@/components/ui/FadeIn";
import { CountUp } from "@/components/ui/CountUp";

const stats = [
  {
    value: 2,
    prefix: "R$ ",
    suffix: "K",
    subtitle: "/mês em tráfego",
    description:
      "Gastar R$2.000/mês em anúncio e mandar o clique pra um link do Instagram que não explica nada.",
  },
  {
    value: 6,
    prefix: "R$ ",
    suffix: "K",
    subtitle: "/mês perdidos",
    description:
      "Perder 3 clientes por semana porque sua página não passa confiança — a R$500 por cliente, são R$6.000 evaporando.",
  },
  {
    value: 100,
    prefix: "",
    suffix: "%",
    subtitle: "de dependência",
    description:
      "Depender só de indicação num mercado onde seu concorrente já aparece no Google antes de você.",
  },
];

export function PainPoints() {
  return (
    <FadeInSection
      aria-labelledby="pain-heading"
      className="flex flex-col gap-12 md:gap-16 items-start overflow-hidden px-6 py-24 md:py-32 lg:py-48 w-full"
    >
      {/* Two-tone quote headline */}
      <h2
        id="pain-heading"
        className="font-display text-[clamp(36px,_7.5vw,_64px)] leading-[1.15] md:leading-[1.2] tracking-[-0.02em] w-full"
      >
        <span className="text-text">&ldquo;Landing page é caro.&rdquo; </span>
        <span className="text-text-secondary">
          Sabe o que é caro de verdade?
        </span>
      </h2>

      {/* Stats */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 items-start w-full">
        {stats.map((stat) => (
          <div
            key={stat.subtitle}
            className="flex flex-1 flex-col gap-6 items-start min-w-0 w-full border-t border-[#656565] pt-6"
          >
            {/* Number + subtitle */}
            <div className="flex flex-col gap-1 items-start">
              <p className="font-display text-text text-[clamp(44px,_10vw,_64px)] leading-[1.2] tracking-[-0.02em]">
                <CountUp
                  to={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </p>
              <p className="font-display text-text-tertiary text-[20px] md:text-[24px] leading-[1.2] tracking-[0.06em]">
                {stat.subtitle}
              </p>
            </div>
            <p className="text-text text-[16px] md:text-[18px] leading-[1.4] font-body max-w-[448px]">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </FadeInSection>
  );
}
