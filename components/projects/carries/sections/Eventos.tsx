"use client";

import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";

const EASE = [0.16, 1, 0.3, 1] as const;

export function CarriesEventos() {
  const { t } = useLanguage();

  return (
    <section
      id="eventos"
      className="relative w-full px-6 lg:px-16 py-24 lg:py-32 scroll-mt-20"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-[12px] uppercase tracking-[0.12em] text-(--carries-ash-brown)">
              {t.eventos.eyebrow}
            </span>
            <h2 className="text-[clamp(34px,_4vw,_56px)] leading-[1.1] tracking-[-0.02em] font-medium">
              {t.eventos.h2}
            </h2>
          </div>
          <a
            href="#"
            className="text-[14px] text-(--color-text-secondary) hover:text-(--color-text) underline underline-offset-[6px] decoration-(--carries-dust-grey) hover:decoration-(--carries-ash-brown) transition-colors"
          >
            {t.eventos.all} →
          </a>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {t.eventos.items.map((ev, i) => (
            <motion.article
              key={ev.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.08 }}
              className="flex flex-col gap-5 p-6 lg:p-7 rounded-[var(--radius-xl)] border border-(--color-border) bg-(--color-bg) hover:border-(--carries-ash-brown) transition-colors"
            >
              <span className="text-[12px] tracking-[0.14em] uppercase text-(--carries-ash-brown) font-medium">
                {ev.date}
              </span>
              <h3 className="text-[22px] md:text-[24px] font-medium leading-[1.2]">
                {ev.title}
              </h3>
              <span className="text-[14px] text-(--color-text-secondary)">
                {ev.meta}
              </span>
              <button
                type="button"
                className="self-start mt-1 text-[14px] text-(--color-text) underline underline-offset-[6px] decoration-(--carries-dust-grey) hover:decoration-(--carries-ash-brown) cursor-pointer transition-colors"
              >
                {ev.cta} →
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
