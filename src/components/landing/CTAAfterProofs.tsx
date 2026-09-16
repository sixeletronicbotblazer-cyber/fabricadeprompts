"use client";

import { FadeIn } from "./FadeIn";
import { Zap } from "lucide-react";

export function CTAAfterProofs() {
  return (
    <section className="bg-[#0D0D0D] py-8 md:py-10 px-4">
      <FadeIn>
        <div className="max-w-md mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 mb-3">
            <Zap className="size-3.5 text-[#25F4EE]" />
            <span className="text-[10px] font-bold text-[#25F4EE] uppercase tracking-wider">
              Mecanismo pronto
            </span>
          </div>
          <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-white leading-tight mb-3">
            Pare de inventar prompt.
            <br />
            <span className="text-white/60">Copie, aplique, gere.</span>
          </h3>
          <p className="text-xs sm:text-sm text-white/40 mb-5 max-w-sm mx-auto">
            O mecanismo já está pronto, prompts organizados por tipo de cena e movimento pra você só adaptar o produto e gerar o vídeo.
          </p>
          <a
            href="#oferta"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 py-3.5 bg-[#FE2C55] hover:bg-[#e62750] text-white font-bold text-sm sm:text-base rounded-full transition-all shadow-lg shadow-[#FE2C55]/25 hover:shadow-[#FE2C55]/40 hover:scale-[1.02] active:scale-[0.98]"
          >
            Quero acessar os prompts agora
          </a>
          <p className="text-[10px] text-white/30 mt-2.5">
            Acesso imediato pelo app.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
