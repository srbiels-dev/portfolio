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

function CupIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M7 12h16v8a5 5 0 0 1-5 5h-6a5 5 0 0 1-5-5v-8Zm16 1h2a3 3 0 0 1 0 6h-2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 7c0 1.5 1 2 1 3.5M16 7c0 1.5 1 2 1 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function PawIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.6">
        <ellipse cx="11" cy="11" rx="2" ry="2.6" />
        <ellipse cx="21" cy="11" rx="2" ry="2.6" />
        <ellipse cx="7" cy="16" rx="1.6" ry="2.2" />
        <ellipse cx="25" cy="16" rx="1.6" ry="2.2" />
        <path d="M16 16c-4 0-7 3-7 6 0 2 2 3 4 3s2-1 3-1 1 1 3 1 4-1 4-3c0-3-3-6-7-6Z" />
      </g>
    </svg>
  );
}

function BeanIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M12 6c-4 2-6 6-6 10s2 8 6 10c4-2 6-6 6-10S16 8 12 6Zm8 0c-2 1-3 3-3 5s1 4 3 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ICONS = [CupIcon, PawIcon, BeanIcon];

export function CarriesSobre() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="relative w-full px-6 lg:px-16 py-24 lg:py-32 scroll-mt-20">
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
              const Icon = ICONS[i] ?? CupIcon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
                  className="flex flex-col gap-4 text-(--carries-ash-brown)"
                >
                  <Icon />
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
