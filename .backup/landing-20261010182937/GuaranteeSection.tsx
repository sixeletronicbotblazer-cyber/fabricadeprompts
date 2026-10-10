"use client";

import { FadeIn } from "./FadeIn";
import { ShieldCheck } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export function GuaranteeSection() {
  const { t } = useI18n();

  return (
    <section className="bg-[#08080A] py-8 sm:py-12 md:py-14 px-4">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <div className="bg-[#111113] border border-[#2A2A2E]/60 rounded-2xl p-6 sm:p-8 text-center">
            <div className="inline-flex size-10 rounded-full bg-emerald-500/8 border border-emerald-500/12 items-center justify-center mb-4 mx-auto">
              <ShieldCheck className="size-5 text-emerald-400" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#F4F4F5] leading-tight mb-4">
              {t("guarantee.title")}
            </h2>
            <p className="text-sm text-[#A1A1AA]/70 leading-relaxed max-w-md mx-auto">
              {t("guarantee.text")}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
