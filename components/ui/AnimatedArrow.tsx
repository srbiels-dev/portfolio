"use client";

import { motion } from "motion/react";

export function AnimatedArrow() {
  return (
    <motion.svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
      initial={{ rotate: 90, y: 0 }}
      animate={{ rotate: 90, y: [0, 4, 0] }}
      transition={{
        y: {
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <path
        d="M4 10h12M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}
