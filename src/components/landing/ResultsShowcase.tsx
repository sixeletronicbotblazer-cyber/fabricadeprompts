"use client";

import { FadeIn } from "./FadeIn";
import { Play, Copy } from "lucide-react";

const results = [
  {
    prompt:
      "Modelo dá um passo para trás mostrando o look completo, mãos ao lado, virada leve, movimento natural do tecido, estilo UGC",
    image: "/images/result-look.gif",
  },
  {
    prompt:
      "Modelo tira a mão do cabelo, movimento natural, luz suave, pose casual, estilo vídeo UGC",
    image: "/images/result-hand.gif",
  },
];

export function ResultsShowcase() {
  return (
    <section className="py-6 md:py-10 px-4 bg-secondary/40">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <div className="text-center mb-6">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-foreground leading-tight mb-2">
              Prompts de <span className="text-accent">movimento realista</span>
            </h2>
            <p className="text-sm text-foreground/70 max-w-md mx-auto">
              Vídeos gerados copiando e colando os prompts do guia. Sem editar, sem filtro.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {results.map((item, idx) => (
            <FadeIn key={item.image} delay={idx * 0.1}>
              <div className="bg-white rounded-2xl border border-border/60 overflow-hidden shadow-sm">
                {/* Video */}
                <div className="relative overflow-hidden bg-secondary w-full aspect-[9/16] max-w-[320px] mx-auto sm:max-w-[280px]">
                  <img
                    src={item.image}
                    alt="Vídeo gerado pela IA com prompt do guia"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 bg-foreground/80 backdrop-blur-sm text-[10px] sm:text-xs font-semibold text-white px-2.5 py-1 rounded-full">
                      <Play className="size-2.5" />
                      Vídeo gerado
                    </span>
                  </div>
                </div>

                {/* Prompt */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Copy className="size-3.5 text-accent" />
                    <span className="text-[10px] text-foreground/50 uppercase tracking-wider font-semibold">
                      Prompt do guia
                    </span>
                  </div>
                  <p className="text-sm sm:text-[15px] text-foreground/80 font-mono leading-relaxed">
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