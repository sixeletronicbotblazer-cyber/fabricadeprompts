"use client";

import { FadeIn } from "./FadeIn";
import { X, Check } from "lucide-react";

const alone = [
  "Perde tempo testando prompts",
  "Vídeo sai travado ou artificial",
  "Troca de roupa fica inconsistente",
  "Não sabe qual movimento usar",
  "Começa do zero toda vez",
];

const withApp = [
  "Copia prompts prontos",
  "Escolhe por tipo de cena",
  "Usa modos Modelo, POV e Selfie",
  "Tem movimentos organizados",
  "Cria mais rápido para testar",
];

export function ComparisonSection() {
  return (
    <section className="bg-black py-10 md:py-14 px-4">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight mb-2 text-center">
            Você poderia tentar fazer tudo sozinho…
          </h2>
          <p className="text-sm text-white/45 max-w-lg mx-auto mb-8 text-center">
            Mas o que mais trava não é a ferramenta. É saber o que pedir, como pedir e qual movimento usar para o vídeo não ficar robótico.
          </p>
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
              <p className="text-sm font-bold text-[#25F4EE] mb-4">Com o app</p>
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
