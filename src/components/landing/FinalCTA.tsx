"use client";

import { FadeIn } from "./FadeIn";

export function FinalCTA() {
  return (
    <section className="bg-[#0D0D0D] py-12 md:py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">
            Pare de criar prompt no escuro.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-sm text-white/50 leading-relaxed mb-8 max-w-md mx-auto">
            Escolha seu acesso e comece a usar prompts prontos para criar mais variações de criativos com IA.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-md mx-auto">
            <a
              href="#planos"
              className="block w-full text-center bg-[#FE2C55] hover:bg-[#e62750] text-white font-bold py-3.5 px-6 rounded-full transition-all text-sm sm:text-base shadow-lg shadow-[#FE2C55]/25 hover:shadow-[#FE2C55]/40 hover:scale-[1.02] active:scale-[0.98] mb-3"
            >
              QUERO O ACESSO VITALÍCIO
            </a>
            <a
              href="#planos"
              className="block w-full text-center border border-white/15 text-white/50 hover:bg-white/5 font-medium py-3 px-6 rounded-full transition-colors text-sm"
            >
              Ver plano mensal
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
