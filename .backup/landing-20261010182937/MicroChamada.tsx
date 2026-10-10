"use client";

import { FadeIn } from "./FadeIn";
import { ArrowDown } from "lucide-react";

export function MicroChamada() {
  return (
    <section className="bg-[#050505] py-4 sm:py-5 px-4">
      <div className="max-w-lg mx-auto text-center">
        <FadeIn>
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#A1A1AA]/50 uppercase tracking-[0.12em] bg-white/[0.03] border border-[#2A2A2E]/50 px-3.5 py-1 rounded-full mb-2.5">
            COMO FUNCIONA
          </span>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h3 className="text-base sm:text-lg font-extrabold text-white leading-tight mb-1.5">
            Veja a prévia. Copie o prompt. Crie o vídeo.
          </h3>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-sm text-[#A1A1AA]/55 leading-relaxed max-w-sm mx-auto">
            A biblioteca tem tudo organizado. Você só precisa escolher, copiar e adaptar para o seu produto.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="mt-3">
            <span className="inline-flex items-center gap-1 text-sm text-[#25F4EE]/50">
              <ArrowDown className="size-3.5 animate-bounce" />
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
