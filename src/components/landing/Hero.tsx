"use client";

import { FadeIn } from "./FadeIn";
import { HeroVideo } from "./HeroVideo";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="bg-[#050505] relative overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Platform qualifier */}
        <FadeIn>
          <div className="flex items-center justify-center gap-2.5 mb-5">
            <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-white/90 bg-white/[0.06] border border-white/[0.1] px-3 py-1.5 rounded-full">
              <svg className="size-3.5" viewBox="0 0 24 24" fill="none"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.15V11.7a4.83 4.83 0 01-3.77-1.54V6.69h3.77z" fill="#25F4EE"/><path d="M19.59 6.69a4.83 4.83 0 003.77-1.54V2h-3.77v4.69z" fill="#FE2C55"/><path d="M19.59 6.69a4.83 4.83 0 01-3.77 4.25V11.7a4.83 4.83 0 003.77 1.54V13a8.28 8.28 0 01-5.58-2.15v6.66a6.34 6.34 0 01-10.86-4.46" fill="white" opacity="0.15"/></svg>
              TikTok Shop
            </span>
            <span className="text-[11px] text-white/20 font-medium">+</span>
            <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-white/90 bg-white/[0.06] border border-white/[0.1] px-3 py-1.5 rounded-full">
              <svg className="size-3.5" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#F97316" opacity="0.8"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#F97316"/></svg>
              Shopee
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="text-[10px] sm:text-[11px] text-[#A1A1AA]/50 uppercase tracking-[0.15em] font-medium mb-3">
            PARA QUEM CRIA E VENDE EM
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h1 className="text-[1.65rem] sm:text-[2rem] md:text-[2.75rem] lg:text-[3rem] font-black leading-[1.12] sm:leading-[1.05] tracking-tight text-white">
            Pare de tentar <span className="text-[#FF2D55]">inventar prompt</span> do zero.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-[13px] sm:text-[15px] text-[#C4C4CC] leading-[1.5] mx-auto max-w-md mt-3 sm:mt-4">
            Crie vídeos para TikTok Shop e Shopee com uma base pronta: veja a prévia, prepare a imagem do seu produto e adapte o prompt para animar.
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <HeroVideo />
        </FadeIn>

        <FadeIn delay={0.28}>
          <p className="text-[10px] sm:text-[11px] text-[#A1A1AA]/40 text-center mt-2.5 italic">
            Motion Prompts em uso: criação de personagem e preparação da cena.
          </p>
        </FadeIn>

        <FadeIn delay={0.35}>
          <div className="mt-8 sm:mt-10 flex flex-col items-center gap-1">
            <p className="text-base sm:text-lg text-[#C4C4CC] font-extrabold text-center mb-4">
              A partir de <span className="text-white">R$ 17,90</span><span className="text-[#A1A1AA] font-semibold text-sm">/mês</span>
            </p>
            <a
              href="#planos"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 py-4 bg-[#FF2D55] whitespace-nowrap hover:brightness-110 text-white font-extrabold tracking-wide uppercase text-[15px] sm:text-base rounded-2xl transition-all shadow-lg shadow-[#FF2D55]/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              QUERO ACESSAR A BIBLIOTECA
              <ArrowRight className="ml-2 size-4" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
