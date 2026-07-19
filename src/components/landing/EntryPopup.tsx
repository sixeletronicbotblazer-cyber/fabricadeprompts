"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";

const checkoutUrlDownsell = "https://pay.cakto.com.br/9wutx2x";

export function EntryPopup() {
  const [open, setOpen] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (closed) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => { setOpen(false); setClosed(true); }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative bg-[#1A1A1A] rounded-t-2xl sm:rounded-2xl border border-white/[0.08] shadow-2xl w-full sm:max-w-sm z-10"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
          >
            <button
              onClick={() => { setOpen(false); setClosed(true); }}
              className="absolute top-3 right-3 size-7 flex items-center justify-center rounded-full text-white/30 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Fechar"
            >
              <X className="size-4" />
            </button>

            <div className="p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="size-4 text-[#25F4EE]" />
                <span className="text-[10px] font-bold text-[#25F4EE] uppercase tracking-wider">
                  Oferta rápida
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-white mb-1.5 leading-tight">
                Plano completo com 3 modos por{" "}
                <span className="text-[#FE2C55]">R$ 16,90</span>
              </h3>

              <p className="text-[13px] text-white/50 leading-relaxed mb-4">
                Prompts prontos para <span className="text-white/80 font-medium">modelo</span>,{" "}
                <span className="text-white/80 font-medium">POV</span> e{" "}
                <span className="text-white/80 font-medium">selfie</span> — os 3 estilos que mais vendem no TikTok Shop e Shopee.
              </p>

              <a
                href={checkoutUrlDownsell}
                className="block w-full text-center bg-[#FE2C55] hover:bg-[#e62750] text-white font-bold py-3.5 px-6 rounded-full transition-all text-sm shadow-lg shadow-[#FE2C55]/25 hover:shadow-[#FE2C55]/40"
              >
                Quero por R$ 16,90
              </a>

              <button
                onClick={() => { setOpen(false); setClosed(true); }}
                className="block w-full text-center text-white/30 hover:text-white/50 text-xs mt-3 py-1 transition-colors"
              >
                não obrigado
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}