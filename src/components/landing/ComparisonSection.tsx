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
  "Prompts prontos por categoria",
  "Comandos para preservar produto",
  "Modelo, POV e Selfie UGC",
  "Mais ideias de criativo",
  "Fluxo organizado",
  "Copiar, adaptar e testar",
];

export function ComparisonSection() {
  return (
    <section className="bg-[#08080A] py-10 sm:py-14 md:py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-[1.3rem] sm:text-2xl md:text-[2rem] font-black leading-[1.1] sm:leading-[1.0] text-[#F4F4F5] mb-6 sm:mb-10 text-center">
            Você pode continuar tentando criar tudo <span className="text-gradient-hot">sozinho</span>...
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Alone */}
          <FadeIn>
            <div className="bg-[#111113] border border-[#2A2A2E]/60 rounded-2xl p-4 sm:p-5">
              <p className="text-sm font-bold text-[#A1A1AA] mb-4">Tentando sozinho</p>
              <ul className="space-y-3">
                {alone.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <X className="size-4 text-[#FF2D55]/50 shrink-0 mt-0.5" />
                    <span className="text-sm text-[#A1A1AA]/60">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* With App */}
          <FadeIn delay={0.1}>
            <div className="bg-[#111113] rounded-2xl border border-[#22D3EE]/25 p-4 sm:p-5 shadow-[0_0_30px_rgba(34,211,238,0.06)]">
              <p className="text-sm font-bold text-gradient-main mb-4">Com Motion Prompts</p>
              <ul className="space-y-3">
                {withApp.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="size-4 text-[#22D3EE] shrink-0 mt-0.5" />
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
