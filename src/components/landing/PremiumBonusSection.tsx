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
    <section className="relative bg-[#080808] py-10 md:py-16 px-4 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-[#FE2C55]/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-[#25F4EE]/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Badge */}
        <FadeIn>
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#FE2C55]/20 via-purple-500/20 to-[#25F4EE]/20 text-white/90 text-[10px] sm:text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
              <Gift className="size-3.5 text-[#FE2C55]" />
              Super bônus de final de mês
            </span>
          </div>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={0.05}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white text-center leading-tight mb-2">
            Galeria Premium de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE2C55] via-purple-400 to-[#25F4EE]">Prompts</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-sm sm:text-base text-white/70 text-center max-w-xl mx-auto mb-2 leading-relaxed">
            Veja como é a Galeria por dentro
          </p>
          <p className="text-xs sm:text-sm text-white/45 text-center max-w-lg mx-auto mb-10 leading-relaxed">
            Um acervo visual com categorias, filtros, imagens de referência e botão de copiar prompt.
          </p>
        </FadeIn>

        {/* Wide mockup image — premium frame */}
        <FadeIn delay={0.15}>
          <div className="relative max-w-4xl mx-auto mb-8">
            {/* Neon glow border effect */}
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#FE2C55]/40 via-purple-500/20 to-[#25F4EE]/40 blur-[0.5px]" />
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#FE2C55]/20 via-purple-500/10 to-[#25F4EE]/20 blur-[8px]" />

            {/* Inner frame */}
            <div className="relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/[0.08]">
              {/* Top glassmorphism bar */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white/[0.06] to-transparent z-10" />
              {/* Browser dots */}
              <div className="absolute top-3 left-4 flex gap-2 z-20">
                <div className="size-3 rounded-full bg-[#FE2C55]/40" />
                <div className="size-3 rounded-full bg-amber-400/40" />
                <div className="size-3 rounded-full bg-emerald-400/40" />
              </div>
              {/* Fake URL bar */}
              <div className="absolute top-3 left-16 sm:left-20 right-12 z-20 hidden sm:block">
                <div className="bg-white/[0.04] border border-white/[0.06] rounded-md h-6 flex items-center px-3">
                  <span className="text-[10px] text-white/25 font-medium">galeria.motionprompts.com</span>
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
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#080808]/60 to-transparent z-10" />
            </div>
          </div>
        </FadeIn>

        {/* 4 Mini cards below image */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mb-8">
          {miniCards.map((card, i) => (
            <FadeIn key={card.title} delay={0.2 + i * 0.05}>
              <div className="group bg-white/[0.04] backdrop-blur-sm rounded-xl border border-white/[0.06] p-4 hover:bg-white/[0.07] hover:border-white/[0.12] transition-all duration-300 text-center">
                <div className="flex justify-center mb-2">
                  <div className="size-9 rounded-lg bg-[#FE2C55]/10 border border-[#FE2C55]/15 flex items-center justify-center group-hover:bg-[#25F4EE]/10 group-hover:border-[#25F4EE]/15 transition-colors">
                    <card.icon className="size-4 text-[#FE2C55] group-hover:text-[#25F4EE] transition-colors" />
                  </div>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white">
                  {card.title}
                </h4>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Microcopy */}
        <FadeIn delay={0.4}>
          <p className="text-center text-xs text-white/35 mb-6">
            Disponível como bônus especial no Plano Vitalício.
          </p>
        </FadeIn>

        {/* CTA button */}
        <FadeIn delay={0.45}>
          <div className="flex justify-center">
            <a
              href="#planos"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FE2C55] to-[#d4234a] hover:from-[#e62750] hover:to-[#c01f43] text-white font-bold py-3.5 px-8 rounded-full transition-all text-sm sm:text-base shadow-lg shadow-[#FE2C55]/25 hover:shadow-[#FE2C55]/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              QUERO ACESSAR A GALERIA
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
