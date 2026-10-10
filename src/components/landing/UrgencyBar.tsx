"use client";

import { useI18n } from "@/lib/i18n/context";

export function UrgencyBar() {
  const { t, pricing } = useI18n();

  return (
    <>
      <div className="bg-[#08080A] border-b border-[#2A2A2E]/50">
        <div className="max-w-5xl mx-auto px-4 py-2 text-center">
          <p className="text-[11px] sm:text-xs font-medium text-[#A1A1AA]">
            {t("urgency.offerToday")} •{" "}
            <span className="hidden sm:inline">
              {t("urgency.fullLibrary")}{" "}
              <span className="text-[#FF2D55] font-extrabold">{pricing.vitalicioPrice}</span>{" "}
              <span className="text-white/30 line-through">{pricing.vitalicioFromPrice}</span>
            </span>
            <span className="sm:hidden">
              {t("urgency.mobileLibrary")} {pricing.vitalicioPrice} <span className="text-white/30 line-through">{pricing.vitalicioFromPrice}</span>
            </span>
          </p>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-[#FF2D55]/20 to-transparent" />
    </>
  );
}
