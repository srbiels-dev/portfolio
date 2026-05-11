"use client";

import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { PhotoSlot } from "../PhotoSlot";

const EASE = [0.16, 1, 0.3, 1] as const;

export function CarriesMenu() {
  const { t } = useLanguage();

  return (
    <section
      id="menu"
      className="relative w-full px-6 lg:px-16 py-24 lg:py-32 scroll-mt-20 bg-(--carries-linen-soft)"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-[12px] uppercase tracking-[0.12em] text-(--carries-ash-brown)">
              {t.menu.eyebrow}
            </span>
            <h2 className="text-[clamp(34px,_4vw,_56px)] leading-[1.1] tracking-[-0.02em] font-medium">
              {t.menu.h2}
            </h2>
          </div>
          <a
            href="#"
            className="text-[14px] text-(--color-text-secondary) hover:text-(--color-text) underline underline-offset-[6px] decoration-(--carries-dust-grey) hover:decoration-(--carries-ash-brown) transition-colors"
          >
            {t.menu.full} →
          </a>
        </header>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {t.menu.items.map((item, i) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.06 }}
              className="flex flex-col gap-3 group"
            >
              <PhotoSlot aspect="1 / 1" label={item.name} className="transition-transform group-hover:scale-[1.01]" />
              <div className="flex items-baseline justify-between gap-2 pt-1">
                <h3 className="text-[16px] md:text-[17px] font-medium leading-tight">
                  {item.name}
                </h3>
                <span className="text-[14px] text-(--carries-ash-brown) shrink-0">
                  {item.price}
                </span>
              </div>
              <p className="text-[13px] md:text-[14px] text-(--color-text-secondary) leading-tight">
                {item.descriptor}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-2">
          <div className="h-px w-8 bg-(--carries-ash-brown)" />
          <span className="font-hand text-[20px] text-(--carries-ash-brown)">
            {t.menu.note}
          </span>
        </div>
      </div>
    </section>
  );
}
