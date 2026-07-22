"use client";

import { FadeIn } from "./FadeIn";
import { Play, Copy } from "lucide-react";

const refs = [
  {
    tag: "Modelo",
    tagColor: "bg-[#FE2C55]/90",
    prompt:
      "Modelo dá um passo para trás mostrando o look completo, mãos ao lado, virada leve, movimento natural do tecido, estilo UGC",
    image: "/images/result-look.gif",
  },
  {
    tag: "POV",
    tagColor: "bg-[#25F4EE]/90",
    prompt:
      "Vídeo em estilo POV, primeira pessoa. Mãos segurando a peça, mostrando detalhes do tecido e caimento. Câmera como se o comprador estivesse vendo ao vivo.",
    image: "/images/result-pov.gif",
  },
  {
    tag: "Selfie",
    tagColor: "bg-purple-500/90",
    prompt:
      "Vídeo estilo selfie, modelo IA olhando para a câmera. Sorriso leve, mão segurando celular, movimento natural de mostrar a roupa.",
    image: "/images/result-selfie.gif",
  },
];

export function ReferenceExamples() {
  return (
    <section className="bg-[#0D0D0D] py-10 md:py-14 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white leading-tight mb-6 text-center">
            Referência: prompt + resultado
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {refs.map((ref, i) => (
            <FadeIn key={ref.tag} delay={i * 0.08}>
              <div className="bg-[#1A1A1A] rounded-2xl border border-white/[0.08] overflow-hidden">
                {/* Video/GIF */}
                <div className="relative overflow-hidden bg-black/50 w-full aspect-[9/16] max-h-[220px] sm:max-h-[240px]">
                  <img
                    src={ref.image}
                    alt={`Exemplo ${ref.tag}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2">
                    <span
                      className={`inline-flex items-center gap-1 ${ref.tagColor} text-[9px] sm:text-[10px] font-bold text-white px-2 py-0.5 rounded-full`}
                    >
                      <Play className="size-2" fill="currentColor" />
                      {ref.tag}
                    </span>
                  </div>
                </div>

                {/* Prompt */}
                <div className="p-3 sm:p-3.5">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Copy className="size-3 text-[#25F4EE]" />
                    <span className="text-[9px] text-white/35 uppercase tracking-wider font-semibold">
                      Prompt
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-white/55 font-mono leading-relaxed line-clamp-3">
                    &quot;{ref.prompt}&quot;
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
