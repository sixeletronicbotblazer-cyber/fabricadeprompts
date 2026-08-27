"use client";

import { Check, ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

const chips = [
  "+250 prompts prontos",
  "Modelo, POV e Selfie",
  "Galeria Premium",
  "Aulas rapidas",
];

export function MiniDecisionBlock() {
  return (
    <section className="bg-[#050505] py-5 sm:py-6 px-4">
      <div className="max-w-md mx-auto">
        <FadeIn>
          <p className="text-xs sm:text-sm font-bold text-white/50 uppercase tracking-wider text-center mb-3">
            Voce recebe acesso a:
          </p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="flex flex-wrap justify-center gap-2 mb-3">
            {chips.map((chip, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#C4C4CC] bg-[#111113] border border-[#2A2A2E]/60 rounded-full px-3 py-1.5"
              >
                <Check className="size-3 text-[#FF2D55]" />
                {chip}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-[11px] text-[#A1A1AA]/50 text-center mb-3 leading-relaxed">
            Tudo organizado para copiar, adaptar e usar nos seus criativos.
          </p>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="text-center">
            <p className="text-xs text-[#A1A1AA]/60 mb-2.5">
              Acesso a partir de <span className="text-white font-bold">R$17,90</span>
            </p>
            <a
              href="#planos"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 py-3.5 bg-[#FF2D55] hover:brightness-110 text-white font-extrabold tracking-wide uppercase text-[14px] sm:text-[15px] rounded-full transition-all shadow-lg shadow-[#FF2D55]/25 hover:shadow-xl hover:shadow-[#FF2D55]/35 hover:scale-[1.02] active:scale-[0.98]"
            >
              QUERO ACESSAR AGORA
              <ArrowRight className="ml-2 size-3.5" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
