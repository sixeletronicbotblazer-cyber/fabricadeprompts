"use client";

import { FadeIn } from "./FadeIn";
import { X, Check } from "lucide-react";

const alone = [
  "Prompt do zero toda vez",
  "Resultado imprevisível",
  "Produto muda na imagem",
  "Poucas variações para testar",
  "Vídeos com aparência artificial",
  "Tempo perdido ajustando comando",
];

const withApp = [
  "+500 prompts prontos por categoria",
  "Comandos para preservar o produto",
  "Todos os formatos: Modelo, POV, UGC…",
  "Pré-visualização antes de usar",
  "Atualizações semanais inclusas",
  "Copiar, adaptar e testar rápido",
];

export function ComparisonSection() {
  return (
    <section className="bg-[#08080A] py-10 sm:py-14 md:py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-[1.4rem] sm:text-2xl md:text-[2.15rem] font-black leading-[1.15] sm:leading-[1.1] text-[#F4F4F5] mb-6 sm:mb-8 text-center">
            Você pode continuar <span className="text-[#FF2D55]">inventando prompt</span> do zero...
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Alone */}
          <FadeIn>
            <div className="bg-[#111113] border border-[#2A2A2E]/60 rounded-2xl p-5 sm:p-6">
              <p className="text-sm font-bold text-[#A1A1AA] mb-5">Tentando sozinho</p>
              <ul className="space-y-3.5">
                {alone.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X className="size-4 text-[#FF2D55]/50 shrink-0 mt-0.5" />
                    <span className="text-sm text-[#A1A1AA]/60">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* With App */}
          <FadeIn delay={0.1}>
            <div className="bg-[#111113] rounded-2xl border border-[#FF2D55]/25 p-5 sm:p-6">
              <p className="text-sm font-bold text-[#FF2D55] mb-5">Com a biblioteca</p>
              <ul className="space-y-3.5">
                {withApp.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="size-4 text-[#FF2D55] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#C4C4CC]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
