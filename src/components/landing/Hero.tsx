"use client";

import { FadeIn } from "./FadeIn";
import { Badge } from "@/components/ui/badge";
import { User, Eye, Camera } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="bg-black py-12 md:py-20 lg:py-24 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 mb-6">
            <Badge className="bg-white/10 text-white text-[11px] px-3 py-1 rounded-full border border-white/15 font-semibold hover:bg-white/15">
              3 MODOS DE VÍDEO
            </Badge>
            <span className="text-[10px] font-bold text-[#25F4EE] bg-[#25F4EE]/10 px-2 py-1 rounded-full border border-[#25F4EE]/20">
              TIKTOK SHOP
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-[1.75rem] sm:text-3xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.15] tracking-tight text-white">
            Pare de tentar inventar
            <br className="sm:hidden" />
            {" "}prompt do zero.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[16px] text-white/60 leading-relaxed mx-auto max-w-lg">
            Abra o app, escolha o modo (modelo, POV ou selfie), copie o prompt e gere seu vídeo com{" "}
            <span className="tiktok-text-gradient font-semibold">movimento mais natural</span>{" "}
            para o TikTok Shop ou Shopee.
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-7 sm:mt-8 mx-auto w-full max-w-[760px]">
            <div className="relative rounded-2xl overflow-hidden bg-black shadow-[0_0_30px_rgba(37,244,238,0.08),0_0_60px_rgba(254,44,85,0.06)] border border-white/[0.08]">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full aspect-video object-cover rounded-2xl"
              >
                <source src="/images/demo-video.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="mt-2.5 text-[11px] text-white/35 text-center">
              Veja o app em ação: do prompt ao vídeo pronto em menos de 1 minuto.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.35}>
          <div className="mt-7 sm:mt-8 flex items-baseline gap-3 justify-center">
            <span className="text-lg font-bold text-white/30 line-through">R$ 19,90</span>
            <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">R$ 10,00</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-4 flex items-center justify-center gap-4">
            <div className="flex items-center gap-1.5 text-white/30">
              <User className="size-3.5" />
              <span className="text-[11px] font-medium">Modelo</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/30">
              <Eye className="size-3.5" />
              <span className="text-[11px] font-medium">POV</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/30">
              <Camera className="size-3.5" />
              <span className="text-[11px] font-medium">Selfie</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="mt-8 flex flex-col items-center gap-2.5">
            <a
              href="#planos"
              className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 bg-[#FE2C55] hover:bg-[#e62750] text-white font-bold text-base sm:text-lg rounded-full transition-all shadow-lg shadow-[#FE2C55]/25 hover:shadow-[#FE2C55]/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              Quero acessar agora
            </a>
            <p className="text-[11px] text-white/40">
              3 modos de vídeo • TikTok Shop & Shopee • Acesso imediato
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}