"use client";

import { motion, type Variants } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { useReserve } from "../ReserveContext";
import { PhotoSlot } from "../PhotoSlot";

const EASE = [0.16, 1, 0.3, 1] as const;

const photosStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

const photoLandscape: Variants = {
  hidden: { opacity: 0, y: -14, scale: 1.02 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.1, ease: EASE },
  },
};

const photoSquare: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
};

const copyStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.5 } },
};

const headline: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.95, ease: EASE },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

export function CarriesHero() {
  return (
    <section
      id="top"
      className="relative w-full min-h-[88vh] flex flex-col px-6 lg:px-12 pt-10 lg:pt-14 pb-12 lg:pb-16 overflow-hidden"
    >
      <PaperGrain />
      <HeroPhotos />
      <HeroCopy />
    </section>
  );
}

function HeroPhotos() {
  return (
    <motion.div
      variants={photosStagger}
      initial="hidden"
      animate="show"
      className="relative flex justify-end items-start gap-4 lg:gap-6"
    >
      <motion.div
        variants={photoLandscape}
        className="w-[clamp(200px,26vw,330px)] aspect-[330/248]"
      >
        <PhotoSlot aspect="330 / 248" label="Carrie" className="w-full h-full" />
      </motion.div>
      <motion.div
        variants={photoSquare}
        className="w-[clamp(120px,15vw,212px)] aspect-square mt-[clamp(80px,15vw,225px)]"
      >
        <PhotoSlot
          aspect="1 / 1"
          label="Carrie"
          className="w-full h-full border border-(--carries-dust-grey)"
        />
      </motion.div>
    </motion.div>
  );
}

function HeroCopy() {
  const { t } = useLanguage();

  return (
    <motion.div
      variants={copyStagger}
      initial="hidden"
      animate="show"
      className="relative flex flex-col gap-6 max-w-[1100px] mt-auto pt-10"
    >
      <motion.h1
        variants={headline}
        className="leading-[1.15] tracking-[-0.01em] text-[clamp(34px,_5.8vw,_60px)] font-semibold"
      >
        {t.hero.h1Top}
        <br />
        <span className="text-(--carries-ash-brown)">{t.hero.h1Bottom}</span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="text-[15px] md:text-[16px] leading-[1.45] max-w-[440px]"
      >
        {t.hero.sub}
      </motion.p>

      <motion.div variants={fadeUp}>
        <HeroActions />
      </motion.div>
    </motion.div>
  );
}

function HeroActions() {
  const { t } = useLanguage();
  const { openReserve } = useReserve();

  return (
    <div className="flex items-center gap-6 flex-wrap pt-2">
      <button
        type="button"
        onClick={openReserve}
        className="px-8 py-4 rounded-full bg-(--carries-graphite) text-(--carries-linen) text-[18px] md:text-[20px] font-semibold hover:bg-(--carries-ash-brown) transition-colors cursor-pointer"
      >
        {t.hero.ctaPrimary}
      </button>
      <a
        href="#sobre"
        className="text-[16px] md:text-[18px] font-medium text-(--carries-graphite) underline underline-offset-[6px] decoration-(--carries-graphite) hover:decoration-(--carries-ash-brown) transition-colors"
      >
        {t.hero.ctaSecondary}
      </a>
    </div>
  );
}

function PaperGrain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 0.44 0 0 0 0 0.35 0 0 0 0 0.29 0 0 0 0.7 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        backgroundSize: "220px 220px",
      }}
    />
  );
}
