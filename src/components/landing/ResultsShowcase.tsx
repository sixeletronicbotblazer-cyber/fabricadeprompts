"use client";

import { FadeIn } from "./FadeIn";
import { Play, Copy, User } from "lucide-react";

const results = [
  {
    prompt:
      "Modelo dá um passo para trás mostrando o look completo, mãos ao lado, virada leve, movimento natural do tecido, estilo UGC",
    image: "/images/result-look.gif",
  },
];

export function ResultsShowcase() {
  return (
    <section className="bg-[#0D0D0D] py-10 md:py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 mb-2">
              <User className="size-3.5 text-[#FE2C55]" />
              <span className="text-[10px] font-bold text-[#FE2C55] uppercase tracking-wider">
                Modo Modelo
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight mb-2">
              Prompts de <span className="text-[#FE2C55]">movimento realista</span>
            </h2>
            <p className="text-sm text-white/50 max-w-md mx-auto">
              Vídeo gerado copiando e colando o prompt do guia. Sem editar, sem filtro.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-5">
          {results.map((item, idx) => (
            <FadeIn key={item.image} delay={idx * 0.1}>
              <div className="bg-[#1A1A1A] rounded-2xl border border-white/[0.08] overflow-hidden">
                <div className="relative overflow-hidden bg-black/50 w-full aspect-[9/16] max-w-[320px] mx-auto sm:max-w-[280px]">
                  <img
                    src={item.image}
                    alt="Vídeo gerado pela IA — Modo Modelo"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 bg-[#FE2C55]/90 backdrop-blur-sm text-[10px] sm:text-xs font-semibold text-white px-2.5 py-1 rounded-full">
                      <Play className="size-2.5" />
                      Modo Modelo
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Copy className="size-3.5 text-[#25F4EE]" />
                    <span className="text-[10px] text-white/40 uppercase tracking-wider font-semibold">
                      Prompt do guia
                    </span>
                  </div>
                  <p className="text-sm sm:text-[15px] text-white/70 font-mono leading-relaxed">
                    &quot;{item.prompt}&quot;
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}