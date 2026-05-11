"use client";

import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";

const EASE = [0.16, 1, 0.3, 1] as const;

type MenuItem = { name: string; descriptor: string; price: string };

export function CarriesMenu() {
  const { t } = useLanguage();
  const items = t.menu.items;

  return (
    <section
      id="menu"
      className="relative lg:sticky lg:top-16 lg:z-0 w-full lg:min-h-[calc(100vh-4rem)] px-6 lg:px-16 py-24 lg:py-16 scroll-mt-20 bg-(--carries-linen-soft) overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col gap-8 lg:gap-10 lg:h-full lg:justify-center">
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

        <MenuMosaic items={items} />
        <MenuCarousel items={items} />

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

function MenuMosaic({ items }: { items: MenuItem[] }) {
  const placements = [
    "col-start-1 col-span-2 row-start-1",
    "col-start-3 row-start-1 row-span-2",
    "col-start-1 row-start-2",
    "col-start-4 row-start-1 row-span-2",
  ];

  return (
    <div className="hidden md:grid grid-cols-4 gap-4 lg:gap-6 auto-rows-[clamp(160px,18vw,240px)]">
      {items.map((item, i) => (
        <MenuTile
          key={item.name}
          item={item}
          index={i}
          className={placements[i] ?? ""}
        />
      ))}
    </div>
  );
}

function MenuTile({
  item,
  index,
  className,
}: {
  item: MenuItem;
  index: number;
  className?: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: EASE, delay: index * 0.06 }}
      className={`relative overflow-hidden rounded-[var(--radius-xl)] bg-(--carries-linen-deep) group ${className ?? ""}`}
      role="img"
      aria-label={`${item.name} — ${item.price}`}
    >
      <PhotoPlaceholder label={item.name} />

      <div className="absolute inset-0 bg-gradient-to-t from-(--carries-graphite)/85 via-(--carries-graphite)/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6 flex items-baseline justify-between gap-3 text-(--carries-linen) opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
        <h3 className="text-[18px] lg:text-[20px] font-medium leading-tight">
          {item.name}
        </h3>
        <span className="text-[15px] lg:text-[16px] text-(--carries-linen)/85 shrink-0">
          {item.price}
        </span>
      </div>
    </motion.article>
  );
}

function MenuCarousel({ items }: { items: MenuItem[] }) {
  return (
    <div className="md:hidden -mx-6 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex gap-4 px-6 pb-2 w-max">
        {items.map((item, i) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: EASE, delay: i * 0.05 }}
            className="shrink-0 w-[72vw] max-w-[320px] snap-start flex flex-col gap-3"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-xl)] bg-(--carries-linen-deep)">
              <PhotoPlaceholder label={item.name} />
            </div>
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-[16px] font-medium leading-tight">
                {item.name}
              </h3>
              <span className="text-[14px] text-(--carries-ash-brown) shrink-0">
                {item.price}
              </span>
            </div>
            <p className="text-[13px] text-(--color-text-secondary) leading-tight">
              {item.descriptor}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

function PhotoPlaceholder({ label }: { label: string }) {
  return (
    <div
      aria-hidden
      className="absolute inset-0 flex items-center justify-center"
    >
      <span className="font-hand text-(--carries-ash-brown) opacity-40 text-[clamp(18px,2.4vw,26px)] text-center px-4">
        {label}
      </span>
      <span
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(112,89,75,0.06), transparent 60%)",
        }}
      />
    </div>
  );
}
