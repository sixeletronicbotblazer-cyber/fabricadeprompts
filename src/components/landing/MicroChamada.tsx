"use client";

import { FadeIn } from "./FadeIn";
import { ArrowDown } from "lucide-react";

export function MicroChamada() {
  return (
    <section className="bg-[#050505] py-4 sm:py-5 px-4">
      <div className="max-w-lg mx-auto text-center">
        <FadeIn>
          <span className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold text-[#A1A1AA]/40 uppercase tracking-[0.15em] bg-white/[0.03] border border-[#2A2A2E]/50 px-3 py-1 rounded-full mb-2.5">
            ANTES DE ACESSAR
          </span>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h3 className="text-sm sm:text-base font-extrabold text-white leading-tight mb-1.5">
            Veja primeiro o que você recebe por dentro
          </h3>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-[12px] sm:text-[13px] text-[#A1A1AA]/50 leading-relaxed max-w-sm mx-auto">
            Em poucos segundos você entende os formatos, a biblioteca e como usar os prompts para criar criativos com IA.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="mt-3">
            <span className="inline-flex items-center gap-1 text-[10px] text-[#25F4EE]/50">
              <ArrowDown className="size-3 animate-bounce" />
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
