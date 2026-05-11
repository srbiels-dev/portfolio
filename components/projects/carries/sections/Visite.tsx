"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { useReserve } from "../ReserveContext";

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: EASE },
};

function RuleIcon({ i }: { i: number }) {
  const paths = [
    // calendar
    "M8 4v3M16 4v3M4 9h16M5 6h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z",
    // paw
    "M12 14c-3 0-5 2-5 4 0 1.5 1.5 2 3 2s1.5-1 2-1 .5 1 2 1 3-.5 3-2c0-2-2-4-5-4Zm-3-5c1 0 1.5 1 1.5 2s-.5 2-1.5 2-1.5-1-1.5-2 .5-2 1.5-2Zm6 0c1 0 1.5 1 1.5 2s-.5 2-1.5 2-1.5-1-1.5-2 .5-2 1.5-2ZM6 11c.8 0 1.2.8 1.2 1.6S6.8 14 6 14s-1.2-.6-1.2-1.4S5.2 11 6 11Zm12 0c.8 0 1.2.8 1.2 1.6S18.8 14 18 14s-1.2-.6-1.2-1.4S17.2 11 18 11Z",
    // dog head
    "M8 8c0-2 2-3 4-3s4 1 4 3v2c0 2-2 4-4 4s-4-2-4-4V8Zm-2 1c0 3 1 5 2 6m12-6c0 3-1 5-2 6M10 9.5h.01M14 9.5h.01",
    // no flash
    "M11 4l-3 8h5l-3 8M5 5l14 14",
  ];
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={paths[i] ?? paths[0]}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MiniMap() {
  return (
    <svg viewBox="0 0 400 320" className="w-full h-full">
      <rect width="400" height="320" fill="var(--carries-linen-soft)" />
      {/* streets */}
      <g
        stroke="var(--carries-dust-grey)"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      >
        <path d="M-10 80 Q 200 60 410 100" />
        <path d="M-10 200 Q 200 220 410 180" />
        <path d="M120 -10 Q 100 160 140 330" />
        <path d="M280 -10 Q 260 160 300 330" />
      </g>
      {/* secondary streets */}
      <g
        stroke="var(--carries-dust-grey)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      >
        <path d="M60 30 L 80 290" />
        <path d="M340 40 L 360 300" />
        <path d="M-10 140 Q 200 130 410 150" />
      </g>
      {/* park blob */}
      <ellipse
        cx="80"
        cy="240"
        rx="55"
        ry="40"
        fill="var(--carries-ash-brown)"
        opacity="0.12"
      />
      {/* pin */}
      <g transform="translate(200 160)">
        <circle r="22" fill="var(--carries-linen)" stroke="var(--carries-ash-brown)" strokeWidth="1.5" />
        <circle r="8" fill="var(--carries-ash-brown)" />
        <circle r="14" fill="none" stroke="var(--carries-ash-brown)" strokeWidth="1" opacity="0.4">
          <animate attributeName="r" values="14;22;14" dur="2.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="2.6s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}

function FAQItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-(--color-border-subtle)">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer"
      >
        <span className="text-[16px] md:text-[17px] font-medium leading-snug">
          {q}
        </span>
        <span
          aria-hidden="true"
          className="text-(--carries-ash-brown) text-[20px] leading-none transition-transform"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: EASE }}
        style={{ overflow: "hidden" }}
      >
        <p className="pb-5 pr-8 text-[15px] leading-[1.6] text-(--color-text-secondary)">
          {a}
        </p>
      </motion.div>
    </div>
  );
}

export function CarriesVisite() {
  const { t } = useLanguage();
  const { openReserve } = useReserve();

  return (
    <section
      id="visite"
      className="relative w-full px-6 lg:px-16 py-24 lg:py-32 scroll-mt-20 bg-(--carries-linen-soft)"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
        {/* Regras */}
        <motion.div {...fadeUp} className="flex flex-col gap-10">
          <span className="text-[12px] uppercase tracking-[0.12em] text-(--carries-ash-brown)">
            {t.antesDeVir.eyebrow}
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.antesDeVir.rules.map((rule, i) => (
              <div
                key={rule}
                className="flex flex-col gap-3 text-(--carries-ash-brown)"
              >
                <RuleIcon i={i} />
                <p className="text-[14px] md:text-[15px] leading-[1.4] text-(--color-text)">
                  {rule}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
          <motion.div {...fadeUp} className="flex flex-col gap-6">
            <span className="text-[12px] uppercase tracking-[0.12em] text-(--carries-ash-brown)">
              {t.faq.eyebrow}
            </span>
            <div className="flex flex-col">
              {t.faq.items.map((item, i) => (
                <FAQItem key={item.q} q={item.q} a={item.a} defaultOpen={i === 0} />
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="flex flex-col gap-8">
            <span className="text-[12px] uppercase tracking-[0.12em] text-(--carries-ash-brown)">
              {t.visite.eyebrow}
            </span>

            <div className="rounded-[var(--radius-xl)] overflow-hidden border border-(--color-border) aspect-[5/4]">
              <MiniMap />
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <p className="text-[18px] md:text-[20px] font-medium">
                  {t.visite.address}
                </p>
                <p className="text-[14px] text-(--color-text-secondary)">
                  {t.visite.neighborhood}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-[15px]">{t.visite.hours}</p>
                <p className="font-hand text-[18px] text-(--carries-ash-brown)">
                  {t.visite.hoursNote}
                </p>
              </div>

              <div className="flex items-center gap-4 pt-2 flex-wrap">
                <button
                  type="button"
                  onClick={openReserve}
                  className="px-5 py-2.5 rounded-full bg-(--carries-graphite) text-(--carries-linen) text-[14px] font-medium hover:bg-(--carries-ash-brown) transition-colors cursor-pointer"
                >
                  {t.visite.ctaReserve}
                </button>
                <a
                  href="#"
                  className="px-5 py-2.5 rounded-full border border-(--carries-graphite) text-[14px] text-(--carries-graphite) hover:bg-(--carries-graphite) hover:text-(--carries-linen) transition-colors"
                >
                  {t.visite.ctaDirections}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
