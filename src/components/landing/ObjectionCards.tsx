"use client";

import { FadeIn } from "./FadeIn";
import { HelpCircle, GraduationCap, Zap } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export function ObjectionCards() {
  const { t } = useI18n();

  const items = [
    {
      icon: HelpCircle,
      title: t("objections.card1.title"),
      text: t("objections.card1.text"),
    },
    {
      icon: GraduationCap,
      title: t("objections.card2.title"),
      text: t("objections.card2.text"),
    },
    {
      icon: Zap,
      title: t("objections.card3.title"),
      text: t("objections.card3.text"),
    },
  ];

  return (
    <section className="bg-[#08080A] py-8 sm:py-12 px-4">
      <div className="max-w-md mx-auto">
        <FadeIn>
          <p className="text-xs font-bold text-white/30 uppercase tracking-wider text-center mb-5">
            {t("objections.label")}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={i * 0.06}>
                <div className="bg-[#111113] border border-[#2A2A2E]/60 rounded-2xl p-3.5 sm:p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Icon className="size-3.5 text-[#FF2D55] shrink-0" />
                    <h3 className="text-[12px] sm:text-[13px] font-bold text-[#F4F4F5] leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#A1A1AA]/65 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
