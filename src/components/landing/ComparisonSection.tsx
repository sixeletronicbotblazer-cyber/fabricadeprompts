"use client";

import { FadeIn } from "./FadeIn";
import { X, Check } from "lucide-react";

const alone = [
  "Prompt do zero toda vez",
  "Resultado imprevisivel",
  "Produto muda na imagem",
  "Poucas variacoes para testar",
  "Videos com aparencia artificial",
  "Tempo perdido ajustando comando",
];

const withApp = [
  "Prompts prontos por categoria",
  "Comandos para preservar produto",
  "Modelo, POV e Selfie UGC",
  "Mais ideias de criativo",
  "Fluxo organizado",
  "Copiar, adaptar e testar",
];

export function ComparisonSection() {
  return (
    <section className="bg-[#09090D] py-8 sm:py-10 md:py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-[1.3rem] sm:text-2xl md:text-[2rem] font-black leading-[1.1] sm:leading-[1.0] text-[#F4F4F6] mb-5 sm:mb-6 text-center">
            Voce pode continuar tentando criar tudo <span className="text-[#7C3AED]">sozinho</span>...
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Alone */}
          <FadeIn>
            <div className="bg-[#111118] border border-white/[0.08] rounded-[18px] p-4 sm:p-5">
              <p className="text-sm font-bold text-[#A7A7B2] mb-4">Tentando sozinho</p>
              <ul className="space-y-3">
                {alone.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <X className="size-4 text-[#EC4899]/50 shrink-0 mt-0.5" />
                    <span className="text-sm text-[#A7A7B2]/60">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* With App */}
          <FadeIn delay={0.1}>
            <div className="bg-[#111118] rounded-[18px] border border-[#7C3AED]/25 p-4 sm:p-5">
              <p className="text-sm font-bold text-[#7C3AED] mb-4">Com Motion Prompts</p>
              <ul className="space-y-3">
                {withApp.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="size-4 text-[#7C3AED] shrink-0 mt-0.5" />
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
