"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { button } from "@/components/ui/Button/variants";

const HEADLINE = "Seu cliente te procurou. Mas o que ele encontrou?";
const WORDS = HEADLINE.split(" ");

const WORD_STAGGER = 0.05;
const WORD_START = 0.1;
const SUBTEXT_DELAY = WORD_START + (WORDS.length - 1) * WORD_STAGGER + 0.2;
const BUTTONS_DELAY = SUBTEXT_DELAY + 0.25;

export function Hero() {
  return (
    <section
      id="sobre"
      aria-labelledby="hero-heading"
      className="flex flex-col items-start overflow-hidden px-6 pt-[113px] pb-[113px] w-full scroll-mt-[60px]"
    >
      <div className="flex flex-col gap-6 items-start w-full max-w-[1200px]">
        <div className="flex flex-col gap-4 items-start w-full">
          {/* H1 — word by word */}
          <h1
            id="hero-heading"
            className="font-display text-text text-[100px] leading-[1.2] tracking-[-0.02em] w-full flex flex-wrap gap-x-[0.22em]"
          >
            {WORDS.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                  delay: WORD_START + i * WORD_STAGGER,
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1],
              delay: SUBTEXT_DELAY,
            }}
            className="text-text-secondary text-[20px] leading-[1.2] tracking-[-0.02em] font-body w-full max-w-[763px]"
          >
            Se a resposta é um site meia-boca, uma página desatualizada ou
            simplesmente nada — você tá pagando pra mandar cliente pro
            concorrente.
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
            delay: BUTTONS_DELAY,
          }}
          className="flex gap-4 items-center flex-wrap"
        >
          <Link
            href="#contato"
            className={button({ variant: "primary", size: "md" })}
          >
            Quero parar de perder cliente
          </Link>
          <Link
            href="#projetos"
            className={button({ variant: "secondary", size: "md" })}
          >
            Ver projetos
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
