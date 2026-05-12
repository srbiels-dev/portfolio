"use client";

import { motion } from "motion/react";
import { Calendar } from "lucide-react";
import { useLanguage } from "../LanguageContext";

const EASE = [0.16, 1, 0.3, 1] as const;
const BARRIGA_SRC = "/projetos/carries/barriga.webm";

type EventItem = { date: string; title: string; meta: string; cta: string };

export function CarriesEventos() {
  const { t } = useLanguage();

  return (
    <section
      id="eventos"
      className="relative z-10 w-full px-6 lg:px-16 py-24 lg:py-32 scroll-mt-20 bg-(--color-bg) rounded-t-[28px] shadow-[0_-12px_32px_-20px_rgba(48,48,47,0.18)]"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-[12px] uppercase tracking-[0.18em] text-(--carries-ash-brown)">
              [ {t.eventos.eyebrow} ]
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

        <div className="grid grid-cols-1 md:grid-cols-4 border-y border-(--color-border) divide-y md:divide-y-0 md:divide-x divide-(--color-border)">
          <BarrigaTile />
          {t.eventos.items.map((ev, i) => (
            <EventTile key={ev.title} ev={ev} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BarrigaTile() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: EASE }}
      className="relative aspect-square md:aspect-auto md:min-h-[420px] flex items-center justify-center p-6 lg:p-8"
    >
      <video
        src={BARRIGA_SRC}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
}

function EventTile({ ev, index }: { ev: EventItem; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: EASE, delay: 0.1 + index * 0.08 }}
      className="relative md:min-h-[420px] flex flex-col p-7 lg:p-8"
    >
      <div className="flex items-start justify-between">
        <span className="inline-flex items-center justify-center w-9 h-9 border border-(--color-border) rounded-md text-(--carries-ash-brown)">
          <Calendar size={18} strokeWidth={1.5} />
        </span>
        <span className="text-[11px] tracking-[0.18em] text-(--carries-ash-brown) pt-1">
          [{String(index + 1).padStart(2, "0")}]
        </span>
      </div>

      <h3 className="mt-12 lg:mt-16 text-[clamp(26px,_3.2vw,_40px)] font-medium leading-[1.05] tracking-[-0.01em]">
        {ev.date}
      </h3>

      <div className="mt-auto pt-10 flex flex-col gap-2">
        <p className="text-[15px] md:text-[16px] leading-[1.4]">{ev.title}</p>
        <p className="text-[13px] md:text-[14px] text-(--color-text-secondary)">
          {ev.meta}
        </p>
        <button
          type="button"
          className="self-start mt-3 text-[14px] text-(--color-text) underline underline-offset-[6px] decoration-(--carries-dust-grey) hover:decoration-(--carries-ash-brown) cursor-pointer transition-colors"
        >
          {ev.cta} →
        </button>
      </div>
    </motion.article>
  );
}
