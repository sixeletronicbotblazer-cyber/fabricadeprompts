"use client";

import { useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, BadgePercent, Shield } from "lucide-react";

/* Checkout URLs — update these with real Cakto links */
const CHECKOUT_UPGRADE = "https://pay.cakto.com.br/3dtfnag_968205"; // R$32,90 — TODO: replace with real link
const CHECKOUT_MENSAL = "https://pay.cakto.com.br/3dtfnag_968205";  // R$24,90 — TODO: replace with real link

const checklist = [
  "+500 prompts organizados",
  "Biblioteca completa",
  "Galeria Premium / PromptVault",
  "Modo Modelo, POV e Selfie UGC",
  "Novos módulos",
  "Aulas rápidas e exemplos",
  "Grupo VIP",
  "Atualizações futuras",
  "Acesso completo sem mensalidade",
];

interface MensalUpgradePopupProps {
  open: boolean;
  onClose: () => void;
}

export function MensalUpgradePopup({ open, onClose }: MensalUpgradePopupProps) {
  const handleUpgrade = useCallback(() => {
    (window as any).trackCheckout?.("Vitalicio-Upgrade", 32.90);
    window.location.href = CHECKOUT_UPGRADE;
  }, []);

  const handleContinueMensal = useCallback(() => {
    (window as any).trackCheckout?.("Mensal", 24.90);
    window.location.href = CHECKOUT_MENSAL;
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Popup */}
          <motion.div
            key="popup"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[61] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-[#111113] rounded-2xl border border-[#FF2D55]/25 max-w-md w-full max-h-[90vh] overflow-y-auto pointer-events-auto shadow-[0_0_60px_rgba(255,45,85,0.15)]">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 size-8 flex items-center justify-center rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white/50 hover:text-white/80 transition-all z-10"
                aria-label="Fechar"
              >
                <X className="size-4" />
              </button>

              <div className="p-6 sm:p-7">
                {/* Header */}
                <p className="text-xs font-bold text-[#A1A1AA]/60 uppercase tracking-wider mb-3">
                  Antes de continuar...
                </p>

                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mb-2">
                  Libere o Vitalício por apenas{" "}
                  <span className="text-[#FF2D55]">R$8 a mais</span>
                </h3>

                <p className="text-sm text-[#A1A1AA]/70 leading-relaxed mb-5">
                  Acesso completo à biblioteca, Grupo VIP e todas as atualizações futuras incluídas.
                </p>

                {/* Price card */}
                <div className="bg-[#FF2D55]/[0.06] rounded-2xl border border-[#FF2D55]/10 p-5 mb-5 relative">
                  {/* OFERTA ESPECIAL badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 bg-[#FF2D55] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg shadow-[#FF2D55]/30 whitespace-nowrap">
                      <BadgePercent className="size-3" />
                      OFERTA ESPECIAL
                    </span>
                  </div>

                  {/* VITALÍCIO badge */}
                  <div className="flex justify-center mb-3 mt-1">
                    <span className="inline-flex items-center gap-1 bg-[#25F4EE]/15 border border-[#25F4EE]/25 text-[#25F4EE] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      VITALÍCIO
                    </span>
                  </div>

                  {/* De / Por */}
                  <div className="flex items-center justify-center gap-3 mb-1">
                    <span className="text-lg text-white/30 line-through font-bold">R$49,90</span>
                  </div>

                  <div className="flex items-baseline justify-center">
                    <span className="text-[2.5rem] sm:text-[3rem] font-extrabold text-white leading-none tracking-tight">
                      R$32
                    </span>
                    <span className="text-xl font-bold text-white">,90</span>
                  </div>

                  <p className="text-sm text-[#25F4EE]/80 mt-2 font-semibold text-center">
                    Pagamento único · Acesso vitalício
                  </p>
                </div>

                {/* Checklist */}
                <ul className="space-y-2.5 mb-6">
                  {checklist.map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <Check className="size-4 shrink-0 text-[#25F4EE]" />
                      <span className="text-sm text-white/80 leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA principal */}
                <button
                  onClick={handleUpgrade}
                  className="block w-full text-center bg-[#FF2D55] hover:brightness-110 text-white font-extrabold py-5 px-6 rounded-2xl transition-all text-base sm:text-lg shadow-lg shadow-[#FF2D55]/25 hover:shadow-[#FF2D55]/40 hover:scale-[1.02] active:scale-[0.98] mb-3 uppercase tracking-wide"
                >
                  SIM, QUERO O VITALÍCIO
                </button>

                {/* Opção discreta */}
                <button
                  onClick={handleContinueMensal}
                  className="block w-full text-center text-white/40 hover:text-white/60 text-sm font-medium py-2 transition-all"
                >
                  Não, continuar com o Mensal
                </button>

                {/* Microcopy */}
                <p className="text-[11px] text-[#A1A1AA]/40 text-center mt-3 leading-relaxed">
                  A diferença é de apenas R$8 para liberar o plano vitalício.
                </p>

                {/* Trust */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  <Shield className="size-3 text-white/20" />
                  <span className="text-[11px] text-white/20">
                    Pagamento seguro · Garantia 7 dias · PIX
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
