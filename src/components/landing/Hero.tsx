"use client";

import { FadeIn } from "./FadeIn";
import { Badge } from "@/components/ui/badge";
import { HeroVideo } from "./HeroVideo";
import { Zap, ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="bg-[#050505] glow-hero relative overflow-hidden py-12 md:py-20 lg:py-24 px-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#FF2D55]/[0.08] rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <FadeIn>
          <div className="inline-flex items-center gap-2 mb-6">
            <Badge className="bg-[#FF2D55]/10 text-[#FF2D55] text-[11px] px-3 py-1 rounded-full border border-[#FF2D55]/20 font-semibold hover:bg-[#FF2D55]/15">
              <Zap className="size-3 mr-1" />
              CRIATIVOS COM IA PARA TIKTOK SHOP E SHOPEE
            </Badge>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-[1.75rem] sm:text-3xl md:text-5xl lg:text-[3.25rem] font-black leading-[1.02] sm:leading-[0.98] tracking-tight text-white">
            Crie vídeos para <span className="text-gradient-main">TikTok Shop e Shopee</span> com IA <span className="text-white font-black">sem inventar prompt do zero</span>.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-[14px] sm:text-[16px] text-[#C4C4CC] leading-[1.55] mx-auto max-w-lg mt-4 sm:mt-5">
            Acesse um app com prompts prontos para gerar criativos em estilo{" "}
            <span className="inline-flex items-center px-1.5 py-0.5 bg-[#FF2D55]/8 border border-[#FF2D55]/12 rounded text-[#FF2D55] text-[13px] font-semibold mx-0.5">Modelo</span>{", "}
            <span className="inline-flex items-center px-1.5 py-0.5 bg-[#FF2D55]/8 border border-[#FF2D55]/12 rounded text-[#FF2D55] text-[13px] font-semibold mx-0.5">POV</span>{", "}
            <span className="inline-flex items-center px-1.5 py-0.5 bg-[#FF2D55]/8 border border-[#FF2D55]/12 rounded text-[#FF2D55] text-[13px] font-semibold mx-0.5">Selfie UGC</span>{", "}
            <span className="inline-flex items-center px-1.5 py-0.5 bg-[#FF2D55]/8 border border-[#FF2D55]/12 rounded text-[#FF2D55] text-[13px] font-semibold mx-0.5">produto na mão</span>{", "}
            <span className="inline-flex items-center px-1.5 py-0.5 bg-[#FF2D55]/8 border border-[#FF2D55]/12 rounded text-[#FF2D55] text-[13px] font-semibold mx-0.5">unboxing</span>
            {", loja, roupa no corpo e muito mais."}
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <HeroVideo />
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-[11px] text-white/30 text-center mt-2.5 max-w-sm mx-auto">
            Copie o prompt. Cole na IA. Gere variações. Teste mais criativos.
          </p>
        </FadeIn>

        <FadeIn delay={0.35}>
          <div className="mt-8 flex flex-col items-center gap-2.5">
            <a
              href="#planos"
              className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 bg-cta-gradient hover:brightness-110 text-white font-extrabold tracking-wide uppercase text-[15px] sm:text-base rounded-full transition-all shadow-cta hover:shadow-cta-hover hover:scale-[1.02] active:scale-[0.98]"
            >
              QUERO ACESSAR OS PROMPTS
              <ArrowRight className="ml-2 size-4" />
            </a>
            <a
              href="#modulos"
              className="text-[11px] text-[#A1A1AA]/60 hover:text-[#A1A1AA] mt-3 inline-flex items-center gap-1 transition-colors"
            >
              Ver o que vem dentro
              <ChevronDown className="size-3" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
