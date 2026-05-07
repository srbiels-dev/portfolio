"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import type { ReactNode } from "react";

export function Drawer({ children }: { children: ReactNode }) {
  const router = useRouter();
  const panelRef = useRef<HTMLDivElement>(null);

  const close = () => router.back();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    panelRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key="drawer-root"
        className="fixed inset-0 z-[60] flex flex-col items-stretch justify-end"
        role="dialog"
        aria-modal="true"
        aria-label="Detalhes do projeto"
      >
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={close}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
        />

        <motion.div
          ref={panelRef}
          tabIndex={-1}
          className="relative bg-bg rounded-t-3xl overflow-hidden h-[95vh] outline-none will-change-transform"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        >
          <div className="absolute top-0 inset-x-0 z-10 flex items-center justify-between px-6 md:px-10 py-4 bg-gradient-to-b from-bg to-transparent">
            <span className="font-mono text-text-tertiary text-[12px] uppercase tracking-[0.06em]">
              projeto
            </span>
            <button
              type="button"
              onClick={close}
              aria-label="Fechar"
              className="font-mono text-text-secondary text-[14px] hover:text-text transition-colors cursor-pointer"
            >
              fechar ✕
            </button>
          </div>

          <div className="h-full overflow-y-auto pt-16">{children}</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
