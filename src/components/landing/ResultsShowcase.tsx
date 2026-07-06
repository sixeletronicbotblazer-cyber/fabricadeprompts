"use client";

import Image from "next/image";
import { FadeIn } from "./FadeIn";
import { Play } from "lucide-react";

const results = [
  {
    prompt:
      "Young woman standing in front of mirror, wearing a black pajama set with skirt, natural pose, soft lighting, full body UGC style video, mirror selfie angle",
    image: "/images/result-skirt.jpeg",
    type: "image" as const,
    label: "Resultado gerado",
  },
  {
    prompt:
      "Young woman in a beige tailored pajama suit, hands in pockets, confident stance, warm lighting, full body UGC style video",
    image: "/images/result-suit.jpeg",
    type: "image" as const,
    label: "Resultado gerado",
  },
  {
    prompt:
      "Model steps back slowly to show the full look, hands at sides, slight turn, natural fabric movement, UGC video style",
    image: "/images/result-look.gif",
    type: "gif" as const,
    label: "Vídeo gerado",
  },
  {
    prompt:
      "Model pulls hand away from hair, natural movement, soft lighting, casual pose, UGC video style",
    image: "/images/result-hand.gif",
    type: "gif" as const,
    label: "Vídeo gerado",
  },
];

export function ResultsShowcase() {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground leading-tight mb-3 text-center">
            Exemplos reais criados com os{" "}
            <span className="text-accent">prompts do guia</span>
          </h2>
          <p className="text-sm text-foreground/70 text-center mb-8 max-w-lg mx-auto">
            Veja os resultados gerados apenas usando os prompts que você receberá.
            Sem editar, sem filtros — resultado direto da IA.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {results.map((item, idx) => (
            <FadeIn key={item.image} delay={idx * 0.08}>
              <div className="bg-white rounded-xl border border-border/60 p-4 flex flex-col gap-3">
                {/* Prompt block */}
                <div className="bg-foreground rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="inline-block size-2 rounded-full bg-accent" />
                    <span className="text-[10px] text-white/50 uppercase tracking-wider font-semibold">
                      Prompt
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-white/80 font-mono leading-relaxed">
                    {item.prompt}
                  </p>
                </div>

                {/* Result */}
                <div className="flex flex-col items-center gap-2">
                  <div className="relative overflow-hidden rounded-lg bg-secondary w-full max-w-[200px] sm:max-w-[220px] aspect-[3/4]">
                    {item.type === "image" ? (
                      <Image
                        src={item.image}
                        alt="Resultado gerado pela IA"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 200px, 220px"
                      />
                    ) : (
                      <img
                        src={item.image}
                        alt="Vídeo gerado pela IA"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                    {item.type === "gif" && <Play className="size-2.5" />}
                    {item.label}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}