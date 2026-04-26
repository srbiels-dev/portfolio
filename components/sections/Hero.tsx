import Link from "next/link";
import { button } from "@/components/ui/Button/variants";

export function Hero() {
  return (
    <section
      id="sobre"
      aria-labelledby="hero-heading"
      className="flex flex-col items-start overflow-hidden px-6 pt-[113px] pb-[113px] w-full scroll-mt-[60px]"
    >
      <div className="flex flex-col gap-6 items-start w-full max-w-[1200px]">
        {/* Headline + subtext */}
        <div className="flex flex-col gap-4 items-start w-full">
          <h1
            id="hero-heading"
            className="font-display text-text text-[100px] leading-[1.2] tracking-[-0.02em] w-full"
          >
            Seu cliente te procurou. Mas o que ele encontrou?
          </h1>
          <p className="text-text-secondary text-[20px] leading-[1.2] tracking-[-0.02em] font-body w-full max-w-[763px]">
            Se a resposta é um site meia-boca, uma página desatualizada ou
            simplesmente nada — você tá pagando pra mandar cliente pro
            concorrente.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex gap-4 items-center flex-wrap">
          <Link
            href="#contato"
            className={button({ variant: "primary", size: "md" })}
          >
            Quero parar de perder cliente
          </Link>
          <Link
            href="#projetos"
            className={button({ variant: "secondary", size: "md" })}
          >
            Ver projetos
          </Link>
        </div>
      </div>
    </section>
  );
}
