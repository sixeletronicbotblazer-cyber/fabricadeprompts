"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Crown } from "lucide-react";

const checkoutUrl = "https://go.perfectpay.com.br/PPU38CQFUC3"; // R$49,90 - Vitalício

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
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
            onClick={() => { setOpen(false); setClosed(true); }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative bg-[#111118] rounded-t-2xl sm:rounded-2xl border border-[#FF2D55]/20 shadow-[0_0_60px_rgba(255,45,85,0.12)] w-full sm:max-w-sm z-10 mb-16 sm:mb-0"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
        >
            <button
              onClick={() => { setOpen(false); setClosed(true); }}
              className="absolute top-3 right-3 size-7 flex items-center justify-center rounded-full text-[#A7A7B2]/40 hover:text-[#F4F4F6] hover:bg-white/10 transition-colors"
              aria-label="Fechar"
            >
              <X className="size-4" />
            </button>

            <div className="p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="size-4 text-[#25F4EE]" />
                <span className="text-xs font-bold text-[#A7A7B2]/60 uppercase tracking-wider">
                  Oferta especial
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-[#F4F4F6] mb-2 leading-tight">
                Biblioteca completa com +500 prompts por{" "}
                <span className="text-[#FF2D55]">R$49,90</span>
              </h3>

              <p className="text-sm text-[#A7A7B2]/70 leading-relaxed mb-5">
                Pré-visualização, atualizações semanais, todos os formatos e acesso vitalício.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#25F4EE] bg-[#25F4EE]/10 px-2.5 py-0.5 rounded-full border border-[#25F4EE]/20">
                  <Crown className="size-2.5" />
                  Vitalício
                </span>
                <span className="text-[10px] font-bold text-[#A7A7B2]/50 bg-white/5 px-2.5 py-0.5 rounded-full border border-[#2A2A2E]/60">
                  Pagamento único
                </span>
              </div>

              <a
                href={checkoutUrl}
                onClick={() => { (window as any).trackCheckout?.('Vitalicio Entry', 49.90); }}
                className="block w-full text-center bg-[#FF2D55] hover:brightness-110 shadow-lg shadow-[#FF2D55]/25 font-extrabold uppercase tracking-wide rounded-xl text-base py-5 px-6 transition-all"
              >
                QUERO ACESSAR A BIBLIOTECA
              </a>

              <button
                onClick={() => { setOpen(false); setClosed(true); }}
                className="block w-full text-center text-[#A7A7B2]/30 hover:text-[#A7A7B2]/50 text-sm mt-4 py-1.5 transition-colors"
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
