"use client";

import { FadeIn } from "./FadeIn";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="bg-[#050505] relative overflow-hidden py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <FadeIn>
          <h2 className="text-[1.5rem] sm:text-2xl md:text-[2.25rem] font-black leading-[1.15] sm:leading-[1.1] text-[#F4F4F5] mb-5">
            Pare de inventar prompt <span className="text-[#FF2D55]">no escuro</span>.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-sm sm:text-base text-[#A1A1AA]/70 leading-relaxed mb-6 sm:mb-8 max-w-md mx-auto">
            Acesse a biblioteca com +500 prompts prontos para criar vídeos com IA.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-md mx-auto">
            <a
              href="#oferta"
              className="block w-full text-center bg-[#FF2D55] hover:brightness-110 shadow-lg shadow-[#FF2D55]/25 font-extrabold tracking-wide uppercase rounded-2xl text-base sm:text-lg py-5 px-6 transition-all mb-5 hover:scale-[1.02] active:scale-[0.98]"
            >
              QUERO ACESSAR A BIBLIOTECA <ArrowRight className="inline size-4 ml-2" />
            </a>
            <p className="text-sm text-[#A1A1AA]/50">
              Pagamento único · Acesso vitalício · +500 prompts
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
