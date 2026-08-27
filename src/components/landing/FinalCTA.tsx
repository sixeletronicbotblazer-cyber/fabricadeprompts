"use client";

import { FadeIn } from "./FadeIn";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="bg-[#050505] relative overflow-hidden py-8 sm:py-12 md:py-16 px-4">
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <FadeIn>
          <h2 className="text-[1.3rem] sm:text-2xl md:text-[2rem] font-black leading-[1.1] sm:leading-[1.0] text-[#F4F4F5] mb-4">
            Pare de criar prompt <span className="text-[#FF2D55]">no escuro</span>.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-[13px] sm:text-sm text-[#A1A1AA]/70 leading-relaxed mb-5 sm:mb-6 max-w-md mx-auto">
            Escolha seu acesso e comece a usar prompts prontos para criar mais variações de criativos com IA.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-md mx-auto">
            <a
              href="#planos"
              className="block w-full text-center bg-[#FF2D55] hover:brightness-110 shadow-lg shadow-[#FF2D55]/25 hover:shadow-xl hover:shadow-[#FF2D55]/35 font-extrabold tracking-wide uppercase rounded-xl text-[15px] sm:text-base py-4 px-6 transition-all mb-4"
            >
              QUERO ACESSAR AGORA <ArrowRight className="inline size-4 ml-2" />
            </a>
            <a
              href="#planos"
              className="block w-full text-center border border-[#2A2A2E] text-[#A1A1AA]/70 hover:bg-white/5 hover:text-[#C4C4CC] rounded-xl transition-colors text-sm py-3 px-6"
            >
              Ver plano mensal
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
