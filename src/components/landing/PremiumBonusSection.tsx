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
    <section className="relative bg-[#0D0D10] py-8 sm:py-10 md:py-12 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Badge */}
        <FadeIn>
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-1.5 bg-[#FF2D55]/10 text-[#F4F4F5] text-[10px] sm:text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border border-[#2A2A2E]/60 backdrop-blur-sm">
              <Gift className="size-3.5 text-[#FF2D55]" />
              Super bônus de final de mês
            </span>
          </div>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={0.05}>
          <h2 className="text-[1.3rem] sm:text-2xl md:text-[2rem] font-black leading-[1.1] sm:leading-[1.0] text-[#F4F4F5] text-center mb-2">
            Galeria Premium de <span className="text-[#FF2D55]">Prompts</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-sm sm:text-base text-[#C4C4CC] text-center max-w-xl mx-auto mb-2 leading-relaxed">
            Veja como é a Galeria por dentro
          </p>
          <p className="text-xs sm:text-sm text-[#A1A1AA]/70 text-center max-w-lg mx-auto mb-6 leading-relaxed">
            Um acervo visual com categorias, filtros, imagens de referência e botão de copiar prompt.
          </p>
        </FadeIn>

        {/* Wide mockup image — premium frame */}
        <FadeIn delay={0.15}>
          <div className="relative max-w-4xl mx-auto mb-5">
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
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mb-5">
          {miniCards.map((card, i) => (
            <FadeIn key={card.title} delay={0.2 + i * 0.05}>
              <div className="group bg-[#111113] rounded-xl border border-[#2A2A2E]/60 p-4 hover:bg-[#151518] hover:border-[#22D3EE]/15 transition-all duration-300 text-center">
                <div className="flex justify-center mb-2">
                  <div className="size-9 rounded-lg bg-[#FF2D55]/10 border border-[#FF2D55]/15 flex items-center justify-center group-hover:bg-[#FF2D55]/10 group-hover:border-[#FF2D55]/15 transition-colors">
                    <card.icon className="size-4 text-[#FF2D55] group-hover:text-[#FF2D55] transition-colors" />
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
              className="inline-flex items-center gap-2 bg-[#FF2D55] hover:brightness-110 text-white font-extrabold py-3.5 px-8 rounded-full transition-all text-sm sm:text-base shadow-lg shadow-[#FF2D55]/25 hover:shadow-xl hover:shadow-[#FF2D55]/35 hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wide"
            >
              QUERO ACESSAR A GALERIA
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}