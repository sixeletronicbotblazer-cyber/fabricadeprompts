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
    <section className="bg-[#0D0D0D] py-10 md:py-14 px-4">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight mb-8 text-center">
            Você pode continuar tentando criar tudo sozinho...
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Alone */}
          <FadeIn>
            <div className="bg-[#1A1A1A] border border-white/[0.06] rounded-2xl p-5">
              <p className="text-sm font-bold text-white/50 mb-4">Tentando sozinho</p>
              <ul className="space-y-3">
                {alone.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <X className="size-4 text-[#FE2C55]/60 shrink-0 mt-0.5" />
                    <span className="text-sm text-white/50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* With App */}
          <FadeIn delay={0.1}>
            <div className="bg-[#1A1A1A] rounded-2xl border border-[#25F4EE]/20 p-5 shadow-[0_0_30px_rgba(37,244,238,0.06)]">
              <p className="text-sm font-bold text-[#25F4EE] mb-4">Com Motion Prompts</p>
              <ul className="space-y-3">
                {withApp.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="size-4 text-[#25F4EE] shrink-0 mt-0.5" />
                    <span className="text-sm text-white/80">{item}</span>
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
