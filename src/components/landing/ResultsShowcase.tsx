"use client";

import Image from "next/image";
import { FadeIn } from "./FadeIn";
import { Play, Copy } from "lucide-react";

const results = [
  {
    prompt:
      "Mulher jovem de frente para o espelho, usando pijama preto com saia, pose natural, luz suave, vídeo UGC corpo inteiro, ângulo selfie no espelho",
    image: "/images/result-skirt.jpeg",
    type: "image" as const,
    label: "Resultado estático",
  },
  {
    prompt:
      "Mulher jovem com pijama social bege, mãos nos bolsos, postura confiante, luz quente, vídeo UGC corpo inteiro",
    image: "/images/result-suit.jpeg",
    type: "image" as const,
    label: "Resultado estático",
  },
  {
    prompt:
      "Modelo dá um passo para trás mostrando o look completo, mãos ao lado, virada leve, movimento natural do tecido, estilo UGC",
    image: "/images/result-look.gif",
    type: "gif" as const,
    label: "Vídeo gerado",
  },
  {
    prompt:
      "Modelo tira a mão do cabelo, movimento natural, luz suave, pose casual, estilo vídeo UGC",
    image: "/images/result-hand.gif",
    type: "gif" as const,
    label: "Vídeo gerado",
  },
];

export function ResultsShowcase() {
  return (
    <section className="py-6 md:py-10 px-4 bg-secondary/40">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-6">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-foreground leading-tight mb-2">
              Veja o que tem <span className="text-accent">dentro</span>
            </h2>
            <p className="text-sm text-foreground/70 max-w-md mx-auto">
              Resultados gerados com os prompts do guia. Sem editar, sem filtro — direto da IA.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {results.map((item, idx) => (
            <FadeIn key={item.image} delay={idx * 0.08}>
              <div className="bg-white rounded-2xl border border-border/60 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {/* Image */}
                <div className="relative overflow-hidden bg-secondary w-full aspect-[3/4] sm:aspect-auto sm:h-[280px]">
                  {item.type === "image" ? (
                    <Image
                      src={item.image}
                      alt="Resultado gerado pela IA"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  ) : (
                    <img
                      src={item.image}
                      alt="Vídeo gerado pela IA"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1.5 bg-foreground/80 backdrop-blur-sm text-[10px] sm:text-xs font-semibold text-white px-2.5 py-1 rounded-full">
                      {item.type === "gif" && <Play className="size-2.5" />}
                      {item.label}
                    </span>
                  </div>
                </div>

                {/* Prompt */}
                <div className="p-3.5 sm:p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Copy className="size-3 text-foreground/40" />
                    <span className="text-[10px] text-foreground/50 uppercase tracking-wider font-semibold">
                      Prompt do guia
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-foreground/80 font-mono leading-relaxed">
                    {item.prompt}
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