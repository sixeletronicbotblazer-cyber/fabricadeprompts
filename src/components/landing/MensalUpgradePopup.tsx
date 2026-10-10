"use client";

import { useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, BadgePercent, Shield } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

interface MensalUpgradePopupProps {
  open: boolean;
  onClose: () => void;
}

export function MensalUpgradePopup({ open, onClose }: MensalUpgradePopupProps) {
  const { t, pricing } = useI18n();

  const checklist = [
    t("upgrade.check1"),
    t("upgrade.check2"),
    t("upgrade.check3"),
    t("upgrade.check4"),
    t("upgrade.check5"),
    t("upgrade.check6"),
    t("upgrade.check7"),
    t("upgrade.check8"),
    t("upgrade.check9"),
  ];

  const handleUpgrade = useCallback(() => {
    (window as any).trackCheckout?.("Vitalicio-Upgrade", 37.90);
    window.location.href = pricing.recoveryCheckout;
  }, [pricing.recoveryCheckout]);

  const handleContinueMensal = useCallback(() => {
    (window as any).trackCheckout?.("Mensal", 27.90);
    window.location.href = pricing.mensalOriginalCheckout;
  }, [pricing.mensalOriginalCheckout]);

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
                aria-label={t("upgrade.header")}
              >
                <X className="size-4" />
              </button>

              <div className="p-6 sm:p-7">
                {/* Header */}
                <p className="text-xs font-bold text-[#A1A1AA]/60 uppercase tracking-wider mb-3">
                  {t("upgrade.header")}
                </p>

                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mb-2">
                  {t("upgrade.headline.pre")}{" "}
                  <span className="text-[#FF2D55]">{t("upgrade.headline.highlight")}</span>
                </h3>

                <p className="text-sm text-[#A1A1AA]/70 leading-relaxed mb-5">
                  {t("upgrade.sub")}
                </p>

                {/* Price card */}
                <div className="bg-[#FF2D55]/[0.06] rounded-2xl border border-[#FF2D55]/10 p-5 mb-5 relative">
                  {/* OFERTA ESPECIAL badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 bg-[#FF2D55] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg shadow-[#FF2D55]/30 whitespace-nowrap">
                      <BadgePercent className="size-3" />
                      {t("upgrade.specialOffer")}
                    </span>
                  </div>

                  {/* VITALÍCIO badge */}
                  <div className="flex justify-center mb-3 mt-1">
                    <span className="inline-flex items-center gap-1 bg-[#25F4EE]/15 border border-[#25F4EE]/25 text-[#25F4EE] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {t("upgrade.vitalicio")}
                    </span>
                  </div>

                  {/* De / Por */}
                  <div className="flex items-center justify-center gap-3 mb-1">
                    <span className="text-lg text-white/30 line-through font-bold">{pricing.vitalicioFromPrice}</span>
                  </div>

                  <div className="flex items-baseline justify-center">
                    <span className="text-[2.5rem] sm:text-[3rem] font-extrabold text-white leading-none tracking-tight">
                      {pricing.currencySymbol}{pricing.recoveryMain}
                    </span>
                    <span className="text-xl font-bold text-white">{pricing.recoveryCents}</span>
                  </div>

                  <p className="text-sm text-[#25F4EE]/80 mt-2 font-semibold text-center">
                    {t("upgrade.singlePaymentLifetime")}
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
                  {t("upgrade.cta")}
                </button>

                {/* Opção discreta */}
                <button
                  onClick={handleContinueMensal}
                  className="block w-full text-center text-white/40 hover:text-white/60 text-sm font-medium py-2 transition-all"
                >
                  {t("upgrade.dismiss")}
                </button>

                {/* Microcopy */}
                <p className="text-[11px] text-[#A1A1AA]/40 text-center mt-3 leading-relaxed">
                  {t("upgrade.microcopy")}
                </p>

                {/* Trust */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  <Shield className="size-3 text-white/20" />
                  <span className="text-[11px] text-white/20">
                    {t("upgrade.trust")}
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
