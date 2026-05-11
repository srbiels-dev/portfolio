"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

type Ctx = {
  open: boolean;
  setOpen: (v: boolean) => void;
  openReserve: () => void;
};

const ReserveCtx = createContext<Ctx | null>(null);

export function ReserveProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openReserve = useCallback(() => setOpen(true), []);

  const value = useMemo<Ctx>(() => ({ open, setOpen, openReserve }), [open]);

  return <ReserveCtx.Provider value={value}>{children}</ReserveCtx.Provider>;
}

export function useReserve() {
  const ctx = useContext(ReserveCtx);
  if (!ctx) throw new Error("useReserve must be used inside <ReserveProvider>");
  return ctx;
}
