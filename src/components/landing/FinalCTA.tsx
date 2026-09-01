"use client";

import { FadeIn } from "./FadeIn";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="bg-[#07070A] relative overflow-hidden py-8 sm:py-12 md:py-16 px-4">
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <FadeIn>
          <h2 className="text-[1.3rem] sm:text-2xl md:text-[2rem] font-black leading-[1.1] sm:leading-[1.0] text-[#F4F4F6] mb-4">
            Pare de criar prompt <span className="text-[#7C3AED]">no escuro</span>.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-[13px] sm:text-sm text-[#A7A7B2]/70 leading-relaxed mb-5 sm:mb-6 max-w-md mx-auto">
            Escolha seu acesso e comece a usar prompts prontos para criar mais variacoes de criativos com IA.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-md mx-auto">
            <a
              href="#planos"
              className="block w-full text-center bg-gradient-to-r from-[#7C3AED] to-[#EC4899] hover:brightness-110 shadow-lg shadow-[#7C3AED]/20 cta-glow font-extrabold tracking-wide uppercase rounded-2xl text-[15px] sm:text-base py-4 px-6 transition-all mb-4 hover:scale-[1.02] active:scale-[0.98]"
            >
              QUERO ACESSAR A BIBLIOTECA <ArrowRight className="inline size-4 ml-2" />
            </a>
            <a
              href="#planos"
              className="block w-full text-center border border-white/[0.08] text-[#A7A7B2]/70 hover:bg-white/5 hover:text-[#C4C4CC] rounded-2xl transition-colors text-sm py-3 px-6"
            >
              Ver plano mensal
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
