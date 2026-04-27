import Link from "next/link";
import { button } from "@/components/ui/Button/variants";
import { FadeInSection } from "@/components/ui/FadeIn";

export function About() {
  return (
    <FadeInSection
      id="sobre"
      aria-labelledby="about-heading"
      className="flex flex-col items-start lg:items-end justify-center overflow-hidden px-6 py-20 lg:py-32 w-full scroll-mt-[60px]"
    >
      <div className="flex flex-col gap-6 lg:gap-8 items-start max-w-[859px] w-full">
        <h2
          id="about-heading"
          className="font-display text-text text-[clamp(36px,_7.5vw,_64px)] leading-[1.15] md:leading-[1.2] tracking-[-0.02em] max-w-[740px]"
        >
          Eu sou o Gabriel, e eu crio páginas que focam na dor do seu negócio.
        </h2>
        <p className="font-body text-text-secondary text-[16px] leading-[1.4] lg:leading-[1.2] max-w-[663px]">
          Tenho um background de 10 anos em Design Gráfico e 5 como Product
          Designer. Trabalho na interseção de marketing, design e tecnologia.
          Acredito no design que gere confiança e credibilidade para um negócio,
          colocando a perspectiva humana no centro dos processos.
        </p>
        <Link
          href="#contato"
          className={button({ variant: "primary", size: "md" })}
        >
          Vamos conversar
        </Link>
      </div>
    </FadeInSection>
  );
}
