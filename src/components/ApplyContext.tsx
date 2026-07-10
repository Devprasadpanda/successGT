import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

type Ctx = { open: boolean; openModal: () => void; closeModal: () => void };
const ApplyCtx = createContext<Ctx | null>(null);

export function ApplyProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);
  return <ApplyCtx.Provider value={{ open, openModal, closeModal }}>{children}</ApplyCtx.Provider>;
}

export function useApply() {
  const ctx = useContext(ApplyCtx);
  if (!ctx) throw new Error("useApply must be used within ApplyProvider");
  return ctx;
}
