"use client";

import { FadeIn } from "./FadeIn";
import { X, Check } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export function ComparisonSection() {
  const { t } = useI18n();

  const alone = [
    t("comparison.alone1"),
    t("comparison.alone2"),
    t("comparison.alone3"),
    t("comparison.alone4"),
    t("comparison.alone5"),
    t("comparison.alone6"),
  ];

  const withApp = [
    t("comparison.with1"),
    t("comparison.with2"),
    t("comparison.with3"),
    t("comparison.with4"),
    t("comparison.with5"),
    t("comparison.with6"),
  ];

  return (
    <section className="bg-[#08080A] py-10 sm:py-14 md:py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-[1.4rem] sm:text-2xl md:text-[2.15rem] font-black leading-[1.15] sm:leading-[1.1] text-[#F4F4F5] mb-6 sm:mb-8 text-center">
            {t("comparison.headline.pre")} <span className="text-[#FF2D55]">{t("comparison.headline.highlight")}</span>{t("comparison.headline.post")}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Alone */}
          <FadeIn>
            <div className="bg-[#111113] border border-[#2A2A2E]/60 rounded-2xl p-5 sm:p-6">
              <p className="text-sm font-bold text-[#A1A1AA] mb-5">{t("comparison.aloneTitle")}</p>
              <ul className="space-y-3.5">
                {alone.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X className="size-4 text-[#FF2D55]/50 shrink-0 mt-0.5" />
                    <span className="text-sm text-[#A1A1AA]/60">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* With App */}
          <FadeIn delay={0.1}>
            <div className="bg-[#111113] rounded-2xl border border-[#FF2D55]/25 p-5 sm:p-6">
              <p className="text-sm font-bold text-[#FF2D55] mb-5">{t("comparison.withTitle")}</p>
              <ul className="space-y-3.5">
                {withApp.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="size-4 text-[#FF2D55] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#C4C4CC]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
