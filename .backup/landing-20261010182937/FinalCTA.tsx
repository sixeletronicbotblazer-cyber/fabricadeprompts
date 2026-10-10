"use client";

import { FadeIn } from "./FadeIn";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export function FinalCTA() {
  const { t } = useI18n();

  return (
    <section className="bg-[#050505] relative overflow-hidden py-14 sm:py-18 md:py-24 px-4">
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <FadeIn>
          <h2 className="text-[1.6rem] sm:text-2xl md:text-[2.5rem] font-black leading-[1.15] sm:leading-[1.1] text-[#F4F4F5] mb-6">
            {t("finalCta.headline.pre")} <span className="text-[#FF2D55]">{t("finalCta.headline.highlight")}</span>{t("finalCta.headline.post")}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-sm sm:text-base text-[#A1A1AA]/70 leading-relaxed mb-8 sm:mb-10 max-w-md mx-auto">
            {t("finalCta.sub")}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-md mx-auto">
            <a
              href="#oferta"
              className="block w-full text-center bg-[#FF2D55] hover:brightness-110 shadow-lg shadow-[#FF2D55]/25 font-extrabold tracking-wide uppercase rounded-2xl text-base sm:text-lg py-5 sm:py-6 px-6 transition-all mb-6 hover:scale-[1.02] active:scale-[0.98]"
            >
              {t("finalCta.cta")} <ArrowRight className="inline size-4 ml-2" />
            </a>
            <p className="text-sm text-[#A1A1AA]/50">
              {t("finalCta.trust")}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
