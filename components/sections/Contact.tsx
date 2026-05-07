"use client";

import { useState } from "react";
import { button } from "@/components/ui/Button";
import { FadeInSection } from "@/components/ui/FadeIn";

const siteOptions = ["Não", "Sim", "Tenho mas não gosto"] as const;
type SiteOption = (typeof siteOptions)[number];

function BottomBorderInput({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-5 items-start w-full">
      <label
        htmlFor={name}
        className="font-body text-[#989898] text-[18px] leading-[1.2] tracking-[-0.02em]"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete="off"
        className="w-full h-16 bg-transparent border-b border-[#787878] text-text text-[18px] font-body outline-none focus:border-text transition-colors duration-200 pb-3"
      />
    </div>
  );
}

export function Contact() {
  const [siteStatus, setSiteStatus] = useState<SiteOption | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log("Form submitted:", { ...data, siteStatus });
    // TODO: wire to email/CRM integration
  }

  return (
    <FadeInSection
      id="contato"
      aria-labelledby="contact-heading"
      className="flex flex-col lg:flex-row gap-12 lg:gap-[clamp(40px,_9vw,_184px)] items-start overflow-hidden px-6 py-20 lg:py-32 w-full scroll-mt-[60px]"
    >
      {/* Left — headline */}
      <div className="flex flex-col gap-6 items-start w-full lg:max-w-[766px] text-text lg:shrink-0">
        <h2
          id="contact-heading"
          className="font-display text-[clamp(36px,_7.5vw,_64px)] leading-[1.15] md:leading-[1.2] tracking-[-0.02em] w-full"
        >
          Vamos criar o que seu negócio merece.
        </h2>
        <p className="font-body text-[16px] leading-[1.4] lg:leading-[1.2] w-full">
          Me conta um pouco do seu negócio. Eu te respondo em até 24h com um
          diagnóstico gratuito da sua presença online — e te mostro onde você tá
          deixando dinheiro na mesa.
        </p>
      </div>

      {/* Right — form */}
      <form
        onSubmit={handleSubmit}
        className="flex w-full lg:flex-1 flex-col gap-10 lg:gap-14 items-start justify-center lg:min-w-0"
      >
        <BottomBorderInput label="SEU NOME" name="name" required />
        <BottomBorderInput label="NOME DO NEGÓCIO" name="business" required />
        <BottomBorderInput
          label="SEGMENTO (EX: CLÍNICA, ESCRITÓRIO DE ADVOCACIA, LOJA)"
          name="segment"
          required
        />
        <BottomBorderInput label="WHATSAPP" name="whatsapp" type="tel" required />

        {/* Site toggle */}
        <div className="flex flex-col gap-5 items-start w-full">
          <span className="font-body text-[#989898] text-[18px] leading-[1.2] tracking-[-0.02em]">
            TEM SITE HOJE?
          </span>
          <div className="flex gap-6 items-start flex-wrap">
            {siteOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setSiteStatus(opt)}
                className={`border flex items-center justify-center px-4 py-4 md:p-6 font-body text-[16px] md:text-[18px] tracking-[-0.02em] whitespace-nowrap transition-colors duration-200 ${
                  siteStatus === opt
                    ? "bg-text text-bg border-text"
                    : "bg-transparent text-text border-[#787878] hover:border-text"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <BottomBorderInput
          label="TEM ALGO A MAIS QUE QUEIRA ADICIONAR? (OPCIONAL)"
          name="notes"
        />

        <button
          type="submit"
          className={button({ variant: "primary", size: "lg" })}
        >
          Quero meu diagnóstico gratuito
        </button>
      </form>
    </FadeInSection>
  );
}
