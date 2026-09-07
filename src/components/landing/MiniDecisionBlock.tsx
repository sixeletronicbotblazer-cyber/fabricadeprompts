"use client";

import { Sparkles, BookOpen, Check } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function MiniDecisionBlock() {
  return (
    <section className="bg-[#050505] py-5 sm:py-6 px-4">
      <div className="max-w-lg mx-auto">
        <FadeIn>
          <p className="text-xs sm:text-sm font-bold text-white/40 uppercase tracking-wider text-center mb-4">
            Uma base pronta para criar seus vídeos
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          {/* Motion Prompts */}
          <FadeIn delay={0.05}>
            <div className="bg-[#111113] border border-[#2A2A2E]/60 rounded-xl p-3.5 sm:p-4">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="size-7 rounded-lg bg-[#FF2D55]/10 border border-[#FF2D55]/12 flex items-center justify-center shrink-0">
                  <Sparkles className="size-3.5 text-[#FF2D55]" />
                </div>
                <h3 className="text-[13px] sm:text-sm font-bold text-[#F4F4F5] leading-tight">
                  Motion Prompts
                </h3>
              </div>
              <p className="text-[11px] sm:text-xs text-[#A1A1AA]/70 leading-relaxed">
                Orientação para criar personagens e preparar diferentes formatos de vídeo.
              </p>
            </div>
          </FadeIn>

          {/* Biblioteca Promptly Prompts - more prominent */}
          <FadeIn delay={0.1}>
            <div className="bg-[#111113] border border-[#FF2D55]/20 rounded-xl p-3.5 sm:p-4 shadow-[0_0_20px_rgba(255,45,85,0.06)]">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="size-7 rounded-lg bg-[#FF2D55]/10 border border-[#FF2D55]/12 flex items-center justify-center shrink-0">
                  <BookOpen className="size-3.5 text-[#FF2D55]" />
                </div>
                <h3 className="text-[13px] sm:text-sm font-bold text-[#F4F4F5] leading-tight">
                  Biblioteca Promptly Prompts
                </h3>
              </div>
              <p className="text-[11px] sm:text-xs text-[#C4C4CC]/80 leading-relaxed">
                Mais de 250 prompts com referências para preparar a imagem inicial e animar seu produto.
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <div className="flex flex-wrap justify-center gap-1.5">
            {["Aulas rápidas", "Novos módulos", "Ativar TikTok Shop"].map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-[#A1A1AA]/60 bg-[#111113] border border-[#2A2A2E]/50 rounded-full px-2.5 py-1"
              >
                <Check className="size-2.5 text-[#FF2D55]/60" />
                {chip}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.18}>
          <p className="text-[11px] text-[#A1A1AA]/50 text-center mt-3 leading-relaxed">
            Acesso a partir de <span className="text-white font-bold">R$17,90/mês</span>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
