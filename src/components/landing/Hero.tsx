"use client";

import { FadeIn } from "./FadeIn";
import { Badge } from "@/components/ui/badge";
import { HeroVideo } from "./HeroVideo";

export function Hero() {
  return (
    <section id="hero" className="bg-black py-12 md:py-20 lg:py-24 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 mb-6">
            <Badge className="bg-white/10 text-white text-[11px] px-3 py-1 rounded-full border border-white/15 font-semibold hover:bg-white/15">
              CRIATIVOS COM IA PARA TIKTOK SHOP E SHOPEE
            </Badge>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-[1.75rem] sm:text-3xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.15] tracking-tight text-white">
            Crie vídeos para TikTok Shop e Shopee com IA sem inventar prompt do zero.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-[14px] sm:text-[16px] text-white/60 leading-relaxed mx-auto max-w-lg mt-4 sm:mt-5">
            Acesse um app com prompts prontos para gerar criativos em estilo Modelo, POV, Selfie UGC, produto na mão, unboxing, loja, roupa no corpo e muito mais.
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <HeroVideo />
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-[11px] text-white/35 text-center mt-2.5 max-w-sm mx-auto">
            Copie o prompt. Cole na IA. Gere variações. Teste mais criativos.
          </p>
        </FadeIn>

        <FadeIn delay={0.35}>
          <div className="mt-8 flex flex-col items-center gap-2.5">
            <a
              href="#planos"
              className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 bg-[#FE2C55] hover:bg-[#e62750] text-white font-bold text-base sm:text-lg rounded-full transition-all shadow-lg shadow-[#FE2C55]/25 hover:shadow-[#FE2C55]/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              QUERO ACESSAR OS PROMPTS
            </a>
            <a
              href="#modulos"
              className="text-[11px] text-white/30 hover:text-white/50 mt-3 inline-block transition-colors"
            >
              Ver o que vem dentro
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
