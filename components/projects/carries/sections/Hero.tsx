"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { useReserve } from "../ReserveContext";

const HERO_IMAGE_SRC =
  "/projetos/carries/31295b48-f495-492b-a958-a7ad0e294b2d%201.png";
const HERO_CUP_SRC = "/projetos/carries/Frame%2012.png";
const HERO_VIDEO_SRC =
  "/projetos/carries/27e9e33f-50b1-48de-acd5-e972011d111d.mp4";

const EASE = [0.16, 1, 0.3, 1] as const;

const photosStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

const photoLeft: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
};

const photoRight: Variants = {
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
      className="sticky top-0 z-0 w-full min-h-screen flex flex-col px-6 pt-6 pb-12 lg:pb-16 overflow-hidden"
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
      className="relative flex items-start gap-3 lg:gap-6"
    >
      <motion.div
        variants={photoLeft}
        className="relative mr-auto w-[clamp(140px,22vw,290px)] aspect-[330/248] overflow-hidden rounded-[var(--radius-xl)] bg-(--carries-linen-deep)"
      >
        <Image
          src={HERO_CUP_SRC}
          alt="Xícara CARRIES no balcão"
          fill
          sizes="(max-width: 1024px) 22vw, 290px"
          className="object-cover"
          priority
        />
      </motion.div>
      <motion.div
        variants={photoRight}
        className="relative w-[clamp(140px,22vw,290px)] aspect-[330/248] overflow-hidden rounded-[var(--radius-xl)] bg-(--carries-linen-deep)"
      >
        <Image
          src={HERO_IMAGE_SRC}
          alt="Carrie observando do canto preferido"
          fill
          sizes="(max-width: 1024px) 22vw, 290px"
          className="object-cover"
          priority
        />
      </motion.div>
      <motion.div
        variants={photoSquare}
        className="relative hidden sm:block w-[clamp(100px,13vw,180px)] aspect-square mt-[clamp(60px,13vw,180px)] overflow-hidden rounded-[var(--radius-xl)] border border-(--carries-dust-grey) bg-(--carries-linen-deep)"
      >
        <video
          src={HERO_VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
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
      className="relative flex flex-col gap-5 lg:gap-6 pt-10 lg:pt-6 lg:mt-auto"
    >
      <motion.h1
        variants={headline}
        className="leading-[1.15] tracking-[-0.01em] text-[clamp(36px,_5vw,_92px)] font-semibold"
      >
        {t.hero.h1Top}
        <br />
        <span className="text-(--carries-ash-brown) lg:whitespace-nowrap">
          {t.hero.h1Bottom}
        </span>
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
