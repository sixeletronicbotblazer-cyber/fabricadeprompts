"use client";

import { Star } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { useI18n } from "@/lib/i18n/context";

export function SocialProofSection() {
  const { t } = useI18n();

  return (
    <section className="bg-[#07070A] pb-1 pt-4 sm:pt-5">
      <div className="max-w-md mx-auto px-4 text-center">
        <FadeIn>
          <div className="inline-flex flex-col items-center gap-1.5">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`size-4 ${
                    i < 4
                      ? "fill-amber-400 text-amber-400"
                      : "fill-amber-400/50 text-amber-400/50"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl sm:text-3xl font-black text-[#F4F4F6]">{t("socialProof.rating")}</span>
              <span className="text-xs text-[#A7A7B2]/50 font-medium">{t("socialProof.ofFive")}</span>
            </div>
            <p className="text-[11px] text-[#A7A7B2]/50">
              <span className="text-[#C4C4CC]/70 font-semibold">{t("socialProof.users")}</span> {t("socialProof.satisfied")}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
