"use client";

import { motion } from "framer-motion";
import { Search, Grid3X3, Copy, Star, Gift, Tag, LayoutGrid, Heart } from "lucide-react";
import { FadeIn } from "./FadeIn";

const miniCards = [
  {
    icon: Tag,
    title: "Busca por categoria",
  },
  {
    icon: LayoutGrid,
    title: "Cards com referência visual",
  },
  {
    icon: Copy,
    title: "Botão copiar prompt",
  },
  {
    icon: Heart,
    title: "Favoritos e filtros",
  },
];

export function PremiumBonusSection() {
  return (
    <section className="relative bg-[#0D0D10] py-10 sm:py-14 md:py-16 px-4 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-[#FF2D55]/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-[#22D3EE]/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#A855F7]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Badge */}
        <FadeIn>
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#FF2D55]/15 via-[#A855F7]/15 to-[#22D3EE]/15 text-[#F4F4F5] text-[10px] sm:text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border border-[#2A2A2E]/60 backdrop-blur-sm">
              <Gift className="size-3.5 text-[#FF2D55]" />
              Super bônus de final de mês
            </span>
          </div>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={0.05}>
          <h2 className="text-[1.3rem] sm:text-2xl md:text-[2rem] font-black leading-[1.1] sm:leading-[1.0] text-[#F4F4F5] text-center mb-2">
            Galeria Premium de <span className="text-gradient-pink">Prompts</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-sm sm:text-base text-[#C4C4CC] text-center max-w-xl mx-auto mb-2 leading-relaxed">
            Veja como é a Galeria por dentro
          </p>
          <p className="text-xs sm:text-sm text-[#A1A1AA]/70 text-center max-w-lg mx-auto mb-10 leading-relaxed">
            Um acervo visual com categorias, filtros, imagens de referência e botão de copiar prompt.
          </p>
        </FadeIn>

        {/* Wide mockup image — premium frame */}
        <FadeIn delay={0.15}>
          <div className="relative max-w-4xl mx-auto mb-8">
            {/* Neon glow border effect */}
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#FF2D55]/40 via-[#A855F7]/20 to-[#22D3EE]/40 blur-[0.5px]" />
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#FF2D55]/20 via-[#A855F7]/10 to-[#22D3EE]/20 blur-[8px]" />

            {/* Inner frame */}
            <div className="relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-[#2A2A2E]/60">
              {/* Top glassmorphism bar */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white/[0.04] to-transparent z-10" />
              {/* Browser dots */}
              <div className="absolute top-3 left-4 flex gap-2 z-20">
                <div className="size-3 rounded-full bg-[#FF2D55]/40" />
                <div className="size-3 rounded-full bg-amber-400/40" />
                <div className="size-3 rounded-full bg-emerald-400/40" />
              </div>
              {/* Fake URL bar */}
              <div className="absolute top-3 left-16 sm:left-20 right-12 z-20 hidden sm:block">
                <div className="bg-white/[0.03] border border-[#2A2A2E]/60 rounded-md h-6 flex items-center px-3">
                  <span className="text-[10px] text-[#A1A1AA]/40 font-medium">galeria.motionprompts.com</span>
                </div>
              </div>
              {/* Image */}
              <img
                src="/images/galeria-premium-bonus.png"
                alt="Galeria Premium de Prompts — dashboard com categorias, filtros, cards visuais e botão de copiar"
                className="w-full h-auto block"
                loading="lazy"
              />
              {/* Bottom glassmorphism bar */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0D0D10]/60 to-transparent z-10" />
            </div>
          </div>
        </FadeIn>

        {/* 4 Mini cards below image */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mb-8">
          {miniCards.map((card, i) => (
            <FadeIn key={card.title} delay={0.2 + i * 0.05}>
              <div className="group bg-[#111113] rounded-xl border border-[#2A2A2E]/60 p-4 hover:bg-[#151518] hover:border-[#22D3EE]/15 card-glow-cyan transition-all duration-300 text-center">
                <div className="flex justify-center mb-2">
                  <div className="size-9 rounded-lg bg-[#FF2D55]/10 border border-[#FF2D55]/15 flex items-center justify-center group-hover:bg-[#22D3EE]/10 group-hover:border-[#22D3EE]/15 transition-colors">
                    <card.icon className="size-4 text-[#FF2D55] group-hover:text-[#22D3EE] transition-colors" />
                  </div>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#F4F4F5]">
                  {card.title}
                </h4>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Microcopy */}
        <FadeIn delay={0.4}>
          <p className="text-center text-xs text-[#A1A1AA]/50 mb-6">
            Disponível como bônus especial no Plano Vitalício.
          </p>
        </FadeIn>

        {/* CTA button */}
        <FadeIn delay={0.45}>
          <div className="flex justify-center">
            <a
              href="#planos"
              className="inline-flex items-center gap-2 bg-cta-gradient hover:brightness-110 text-white font-extrabold py-3.5 px-8 rounded-full transition-all text-sm sm:text-base shadow-cta hover:shadow-cta-hover hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wide"
            >
              QUERO ACESSAR A GALERIA
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}