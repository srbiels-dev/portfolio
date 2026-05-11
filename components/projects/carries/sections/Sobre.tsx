"use client";

import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { PhotoSlot } from "../PhotoSlot";

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: EASE },
};

const BEM_ESTAR_ICONS = [
  "/projetos/carries/Ela%20vem%20primeiro.svg",
  "/projetos/carries/Espa%C3%A7o%20para%20todos.svg",
  "/projetos/carries/Caf%C3%A9%20serio.svg",
];

export function CarriesSobre() {
  const { t } = useLanguage();

  return (
    <section
      id="sobre"
      className="relative z-10 w-full px-6 lg:px-16 py-24 lg:py-32 scroll-mt-20 bg-(--color-bg) rounded-t-[28px] shadow-[0_-12px_32px_-20px_rgba(48,48,47,0.18)]"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
        {/* História */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
          <motion.div {...fadeUp} className="flex flex-col gap-6">
            <span className="text-[12px] uppercase tracking-[0.12em] text-(--carries-ash-brown)">
              {t.sobre.eyebrow}
            </span>
            <h2 className="text-[clamp(34px,_4vw,_56px)] leading-[1.1] tracking-[-0.02em] font-medium">
              {t.sobre.h2}
            </h2>
            <div className="flex flex-col gap-5 text-[17px] md:text-[18px] leading-[1.6] text-(--color-text)">
              <p>{t.sobre.p1}</p>
              <p>{t.sobre.p2}</p>
              <p className="text-(--color-text-secondary)">{t.sobre.p3}</p>
            </div>
            <div className="flex items-center gap-3 pt-4">
              <div className="h-px w-8 bg-(--carries-ash-brown)" />
              <span className="font-hand text-[22px] text-(--carries-ash-brown)">
                {t.sobre.quote}
              </span>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
            <PhotoSlot aspect="4 / 5" label="Carrie · retrato" />
          </motion.div>
        </div>

        {/* Bem-estar */}
        <motion.div {...fadeUp} className="flex flex-col gap-10">
          <span className="text-[12px] uppercase tracking-[0.12em] text-(--carries-ash-brown)">
            {t.bemEstar.eyebrow}
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {t.bemEstar.items.map((item, i) => {
              const iconSrc = BEM_ESTAR_ICONS[i] ?? BEM_ESTAR_ICONS[0];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
                  className="flex flex-col gap-4"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={iconSrc}
                    alt=""
                    width={56}
                    height={56}
                    className="h-32 w-32"
                  />
                  <h3 className="text-[22px] font-medium leading-[1.2] text-(--color-text)">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-[1.55] text-(--color-text-secondary)">
                    {item.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
