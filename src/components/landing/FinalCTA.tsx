"use client";

import { FadeIn } from "./FadeIn";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="bg-[#050505] glow-final relative overflow-hidden py-14 md:py-24 px-4">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-[#FF2D55]/[0.06] rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl md:text-[2.25rem] font-black leading-[0.98] sm:leading-[1.0] text-[#F4F4F5] mb-4">
            Pare de criar prompt <span className="text-gradient-hot">no escuro</span>.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-sm text-[#A1A1AA]/70 leading-relaxed mb-10 max-w-md mx-auto">
            Escolha seu acesso e comece a usar prompts prontos para criar mais variações de criativos com IA.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-md mx-auto">
            <a
              href="#planos"
              className="block w-full text-center bg-cta-gradient hover:brightness-110 shadow-cta hover:shadow-cta-hover font-extrabold tracking-wide uppercase rounded-xl text-[15px] sm:text-base py-4 px-6 transition-all mb-4"
            >
              QUERO O ACESSO VITALÍCIO <ArrowRight className="inline size-4 ml-2" />
            </a>
            <a
              href="#planos"
              className="block w-full text-center border border-[#2A2A2E]/60 text-[#A1A1AA]/60 hover:bg-white/5 hover:text-[#C4C4CC] rounded-xl transition-colors text-sm py-3 px-6"
            >
              Ver plano mensal
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
