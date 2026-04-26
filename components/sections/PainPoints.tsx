const stats = [
  {
    number: "R$ 2K",
    subtitle: "/mês em tráfego",
    description:
      "Gastar R$2.000/mês em anúncio e mandar o clique pra um link do Instagram que não explica nada.",
  },
  {
    number: "R$ 6K",
    subtitle: "/mês perdidos",
    description:
      "Perder 3 clientes por semana porque sua página não passa confiança — a R$500 por cliente, são R$6.000 evaporando.",
  },
  {
    number: "100%",
    subtitle: "de dependência",
    description:
      "Depender só de indicação num mercado onde seu concorrente já aparece no Google antes de você.",
  },
];

export function PainPoints() {
  return (
    <section
      aria-labelledby="pain-heading"
      className="flex flex-col gap-16 items-start overflow-hidden px-6 py-48 w-full"
    >
      {/* Two-tone quote headline */}
      <h2
        id="pain-heading"
        className="font-display text-[64px] leading-[1.2] tracking-[-0.02em] w-full"
      >
        <span className="text-text">&ldquo;Landing page é caro.&rdquo; </span>
        <span className="text-text-secondary">
          Sabe o que é caro de verdade?
        </span>
      </h2>

      {/* Stats */}
      <div className="flex gap-6 items-start w-full">
        {stats.map((stat) => (
          <div
            key={stat.number}
            className="flex flex-1 flex-col gap-6 items-start min-w-0 border-t border-[#656565] pt-6"
          >
            {/* Number + subtitle */}
            <div className="flex flex-col gap-1 items-start">
              <p className="font-display text-text text-[64px] leading-[1.2] tracking-[-0.02em]">
                {stat.number}
              </p>
              <p className="font-display text-text-tertiary text-[24px] leading-[1.2] tracking-[0.06em]">
                {stat.subtitle}
              </p>
            </div>
            <p className="text-text text-[18px] leading-[1.4] font-body max-w-[448px]">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
