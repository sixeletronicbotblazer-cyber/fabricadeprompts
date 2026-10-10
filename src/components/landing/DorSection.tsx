"use client";

import { AlertTriangle, Shuffle, Bot } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { useI18n } from "@/lib/i18n/context";

export function DorSection() {
  const { t } = useI18n();

  const cards = [
    {
      icon: AlertTriangle,
      titlePre: t("dor.card1.title.pre"),
      titleHighlight: t("dor.card1.title.highlight"),
      text: t("dor.card1.text"),
    },
    {
      icon: Shuffle,
      titlePre: t("dor.card2.title.pre"),
      titleHighlight: t("dor.card2.title.highlight"),
      text: t("dor.card2.text"),
    },
    {
      icon: Bot,
      titlePre: t("dor.card3.title.pre"),
      titleHighlight: t("dor.card3.title.highlight"),
      text: t("dor.card3.text"),
    },
  ];

  return (
    <section className="bg-[#08080A] py-10 sm:py-14 md:py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <div className="flex justify-center mb-3">
            <span className="text-[9px] sm:text-[10px] font-bold text-[#FF2D55]/80 uppercase tracking-[0.15em] bg-[#FF2D55]/8 border border-[#FF2D55]/12 px-3 py-1 rounded-full">{t("dor.badge")}</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h2 className="text-[1.3rem] sm:text-2xl md:text-[2rem] font-black text-white leading-[1.15] sm:leading-[1.1] mb-3 text-center">
            {t("dor.headline.pre")} <span className="text-[#A1A1AA]">{t("dor.headline.mid")}</span>. {t("dor.headline.preHighlight")} <span className="text-[#FF2D55]">{t("dor.headline.highlight")}</span>{t("dor.headline.post")}
          </h2>
        </FadeIn>

        <FadeIn delay={0.05}>
          <p className="text-[12px] sm:text-sm text-[#A1A1AA]/70 max-w-md mx-auto mb-6 sm:mb-8 text-center">
            {t("dor.sub")}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-[#111113] border border-[#2A2A2E]/60 rounded-2xl p-4 sm:p-5 h-full transition-colors duration-300 hover:border-[#FF2D55]/20">
                  <div className="size-9 sm:size-10 rounded-xl bg-[#FF2D55]/10 border border-[#FF2D55]/12 flex items-center justify-center mb-3">
                    <Icon className="size-4 sm:size-5 text-[#FF2D55]" />
                  </div>
                  <h3 className="text-[13px] sm:text-sm font-bold text-[#F4F4F5] mb-1">
                    {card.titlePre}<span className="text-[#FF2D55]">{card.titleHighlight}</span>
                  </h3>
                  <p className="text-xs text-[#A1A1AA]/70 leading-relaxed">
                    {card.text}
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
