"use client";

import { FadeIn } from "./FadeIn";

export function CTAAfterProofs() {
  return (
    <section className="bg-[#0D0D0D] py-8 md:py-10 px-4">
      <FadeIn>
        <div className="max-w-md mx-auto text-center">
          <p className="text-lg sm:text-xl font-bold text-white mb-4">
            Quer parar de começar seus criativos do zero?
          </p>
          <a
            href="#planos"
            className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-3.5 bg-[#FE2C55] hover:bg-[#e62750] text-white font-bold text-sm sm:text-base rounded-full transition-all shadow-lg shadow-[#FE2C55]/25 hover:shadow-[#FE2C55]/40 hover:scale-[1.02] active:scale-[0.98]"
          >
            Quero acessar os prompts agora
          </a>
          <p className="text-[11px] text-white/30 mt-2.5">
            Acesso imediato pelo app.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}