"use client";

import { motion } from "motion/react";
import type { ReactNode, CSSProperties } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
  delay?: number;
  style?: CSSProperties;
}

/** Wraps a <section> with a fade-up entrance on scroll (fires once). */
export function FadeInSection({
  children,
  className,
  delay = 0,
  ...rest
}: FadeInSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.section>
  );
}

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
}

/** Wraps a <div> with a fade-up entrance on scroll (fires once). */
export function FadeIn({ children, className, delay = 0, style }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
