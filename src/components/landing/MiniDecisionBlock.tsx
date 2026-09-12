"use client";

import { Sparkles, BookOpen, Check } from "lucide-react";
import { FadeIn } from "./FadeIn";

const chips = [
  "Aulas rápidas",
  "Novos módulos",
  "Formatos validados",
  "Atualizações constantes",
];

export function MiniDecisionBlock() {
  return (
    <section id="beneficios" className="bg-[#060816] py-8 sm:py-10 md:py-14 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Headline */}
        <FadeIn>
          <div className="text-center mb-1.5">
            <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-black leading-[1.1] tracking-tight">
              <span className="bg-gradient-to-r from-[#37E7FF] to-[#FF3D7F] bg-clip-text text-transparent">
                +500
              </span>{" "}
              <span className="text-white">prompts prontos</span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.04}>
          <p className="text-sm sm:text-base md:text-lg font-semibold text-[#37E7FF]/80 text-center mb-2">
            para criar vídeos com IA
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="text-xs sm:text-sm text-[#A8B1C7]/80 text-center mb-6 sm:mb-8 max-w-lg mx-auto leading-relaxed">
            Dois aplicativos complementares para criar, adaptar e testar vídeos com mais velocidade.
          </p>
        </FadeIn>

        {/* 2 Cards - Deliverables */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-5">
          {/* Card 1 - Motion Prompts */}
          <FadeIn delay={0.1}>
            <div className="bg-[#0C1220] border border-[#1C2438] rounded-xl p-4 sm:p-5 hover:border-[#FF3D7F]/20 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <div className="size-7 rounded-lg bg-[#FF3D7F]/10 border border-[#FF3D7F]/15 flex items-center justify-center shrink-0">
                  <Sparkles className="size-3.5 text-[#FF3D7F]" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                  Motion Prompts
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#A8B1C7]/75 leading-relaxed">
                Orientação para criar personagens, preparar imagens e entender os formatos de vídeo para usar com mais consistência.
              </p>
            </div>
          </FadeIn>

          {/* Card 2 - Biblioteca Promptly Prompts */}
          <FadeIn delay={0.15}>
            <div className="bg-[#0C1220] border border-[#1C2438] rounded-xl p-4 sm:p-5 hover:border-[#37E7FF]/20 transition-colors shadow-[0_0_24px_rgba(37,231,255,0.04)]">
              <div className="flex items-center gap-2 mb-2">
                <div className="size-7 rounded-lg bg-[#37E7FF]/10 border border-[#37E7FF]/15 flex items-center justify-center shrink-0">
                  <BookOpen className="size-3.5 text-[#37E7FF]" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                  Biblioteca Promptly Prompts
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#A8B1C7]/75 leading-relaxed">
                Mais de 500 prompts prontos, organizados por formatos e categorias, para adaptar e usar nos seus criativos.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Chips */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
            {chips.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-[#A8B1C7]/70 bg-[#0C1220] border border-[#1C2438] rounded-full px-2.5 py-1"
              >
                <Check className="size-2.5 text-[#37E7FF]/60" />
                {chip}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
