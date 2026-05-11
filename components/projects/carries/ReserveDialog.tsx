"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLanguage } from "./LanguageContext";
import { useReserve } from "./ReserveContext";

export function ReserveDialog() {
  const { open, setOpen } = useReserve();
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setTimeout(() => firstFieldRef.current?.focus(), 100);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, setOpen]);

  useEffect(() => {
    if (!open) setSubmitted(false);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="reserve-root"
          className="fixed inset-0 z-[80] flex items-end md:items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="reserve-title"
        >
          <motion.div
            className="absolute inset-0 bg-(--carries-graphite)/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            className="relative w-full max-w-[480px] bg-(--color-bg) text-(--color-text) rounded-t-3xl md:rounded-3xl p-8 md:p-10 shadow-xl"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          >
            {submitted ? (
              <div className="flex flex-col gap-3 items-start py-6">
                <span className="font-hand text-[28px] text-(--carries-ash-brown)">
                  {t.reserve.success}
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-4 text-[14px] underline underline-offset-4 cursor-pointer"
                >
                  fechar
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="flex flex-col gap-5"
              >
                <header className="flex flex-col gap-1">
                  <h2 id="reserve-title" className="text-[24px] font-medium">
                    {t.reserve.title}
                  </h2>
                  <p className="text-[14px] text-(--color-text-secondary)">
                    {t.reserve.subtitle}
                  </p>
                </header>

                <Field label={t.reserve.nameLabel}>
                  <input
                    ref={firstFieldRef}
                    required
                    type="text"
                    placeholder={t.reserve.namePlaceholder}
                    className={inputCls}
                  />
                </Field>

                <div className="grid grid-cols-2 gap-3">
                  <Field label={t.reserve.dateLabel}>
                    <input required type="date" className={inputCls} />
                  </Field>
                  <Field label={t.reserve.timeLabel}>
                    <input required type="time" className={inputCls} />
                  </Field>
                </div>

                <Field label={t.reserve.partyLabel}>
                  <input
                    required
                    type="number"
                    min={1}
                    max={10}
                    defaultValue={2}
                    className={inputCls}
                  />
                </Field>

                <Field label={t.reserve.notesLabel}>
                  <textarea
                    rows={2}
                    placeholder={t.reserve.notesPlaceholder}
                    className={`${inputCls} resize-none`}
                  />
                </Field>

                <div className="flex items-center justify-between gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="text-[14px] text-(--color-text-secondary) underline underline-offset-4 cursor-pointer"
                  >
                    {t.reserve.cancel}
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-full bg-(--carries-ash-brown) text-(--carries-linen) text-[14px] font-medium hover:bg-(--carries-graphite) transition-colors cursor-pointer"
                  >
                    {t.reserve.submit}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}

const inputCls =
  "w-full px-3.5 py-2.5 rounded-xl border border-(--color-border) bg-(--carries-linen-soft) text-(--color-text) text-[14px] outline-none transition-colors focus:border-(--carries-ash-brown)";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[11px] uppercase tracking-[0.08em] text-(--color-text-secondary)">
        {label}
      </span>
      {children}
    </label>
  );
}
