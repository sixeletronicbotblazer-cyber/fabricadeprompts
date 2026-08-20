"use client";

import { FadeIn } from "./FadeIn";
import { Badge } from "@/components/ui/badge";
import { HeroVideo } from "./HeroVideo";
import { Zap, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="bg-[#050505] relative overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <FadeIn>
          <div className="inline-flex items-center gap-2 mb-5">
            <Badge className="bg-[#FF2D55]/10 text-[#FF2D55] text-[11px] px-3 py-1 rounded-full border border-[#FF2D55]/20 font-semibold hover:bg-[#FF2D55]/15">
              <Zap className="size-3 mr-1" />
              CRIATIVOS COM IA PARA TIKTOK SHOP E SHOPEE
            </Badge>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-[1.65rem] sm:text-[2rem] md:text-[2.75rem] lg:text-[3rem] font-black leading-[1.08] sm:leading-[1.02] tracking-tight text-white">
            Crie vídeos para <span className="text-[#FF2D55]">TikTok Shop e Shopee</span> com IA <span className="text-white font-black">sem inventar prompt do zero</span>.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-[13px] sm:text-[15px] text-[#C4C4CC] leading-[1.5] mx-auto max-w-lg mt-3 sm:mt-4">
            <span className="text-white font-semibold">+250 prompts</span> com preview na tela — você vê antes de criar. Tudo separado por categoria:{" "}
            <span className="inline-flex items-center px-1.5 py-0.5 bg-[#FF2D55]/8 border border-[#FF2D55]/12 rounded text-[#FF2D55] text-[12px] sm:text-[13px] font-semibold mx-0.5">POV</span>{", "}
            <span className="inline-flex items-center px-1.5 py-0.5 bg-[#FF2D55]/8 border border-[#FF2D55]/12 rounded text-[#FF2D55] text-[12px] sm:text-[13px] font-semibold mx-0.5">UGC</span>{", "}
            <span className="inline-flex items-center px-1.5 py-0.5 bg-[#FF2D55]/8 border border-[#FF2D55]/12 rounded text-[#FF2D55] text-[12px] sm:text-[13px] font-semibold mx-0.5">Selfie sem rosto</span>{"."}
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <HeroVideo />
        </FadeIn>

        <FadeIn delay={0.35}>
          <div className="mt-8 sm:mt-10 flex flex-col items-center gap-1">
            <p className="text-base sm:text-lg text-[#C4C4CC] font-extrabold text-center mb-4">
              A partir de <span className="text-white">R$ 17,90</span><span className="text-[#A1A1AA] font-semibold text-sm">/mês</span>
            </p>
            <a
              href="#planos"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 py-4 bg-[#FF2D55] whitespace-nowrap hover:brightness-110 text-white font-extrabold tracking-wide uppercase text-[15px] sm:text-base rounded-full transition-all shadow-lg shadow-[#FF2D55]/25 hover:shadow-xl hover:shadow-[#FF2D55]/35 hover:scale-[1.02] active:scale-[0.98]"
            >
              QUERO ACESSAR AGORA
              <ArrowRight className="ml-2 size-4" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
