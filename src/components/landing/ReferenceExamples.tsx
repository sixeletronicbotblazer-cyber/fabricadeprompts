"use client";

import { FadeIn } from "./FadeIn";
import { Play, Copy } from "lucide-react";

const refs = [
  {
    tag: "Modelo",
    tagColor: "bg-[#FF2D55]/90",
    prompt:
      "Modelo dá um passo para trás mostrando o look completo, mãos ao lado, virada leve, movimento natural do tecido, estilo UGC",
    image: "/images/result-look.gif",
  },
  {
    tag: "POV",
    tagColor: "bg-[#22D3EE]/90",
    prompt:
      "Vídeo em estilo POV, primeira pessoa. Mãos segurando a peça, mostrando detalhes do tecido e caimento. Câmera como se o comprador estivesse vendo ao vivo.",
    image: "/images/result-pov.gif",
  },
  {
    tag: "Selfie",
    tagColor: "bg-[#A855F7]/90",
    prompt:
      "Vídeo estilo selfie, modelo IA olhando para a câmera. Sorriso leve, mão segurando celular, movimento natural de mostrar a roupa.",
    image: "/images/result-selfie.gif",
  },
];

export function ReferenceExamples() {
  return (
    <section className="bg-[#0D0D10] py-10 sm:py-14 md:py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-[1.2rem] sm:text-xl md:text-[1.75rem] font-black leading-[1.1] sm:leading-[1.0] text-[#F4F4F5] mb-6 text-center">
            Referência: <span className="text-gradient-main">prompt + resultado</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {refs.map((ref, i) => (
            <FadeIn key={ref.tag} delay={i * 0.08}>
              <div className="bg-[#111113] rounded-2xl border border-[#2A2A2E]/60 overflow-hidden card-glow-pink hover:border-[#FF2D55]/15 transition-colors duration-300">
                {/* Video/GIF */}
                <div className="relative overflow-hidden bg-[#08080A] w-full aspect-[9/16]">
                  <img
                    src={ref.image}
                    alt={`Exemplo ${ref.tag}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-flex items-center gap-1 ${ref.tagColor} text-[10px] sm:text-xs font-bold text-white px-2.5 py-1 rounded-full border border-white/10`
                    }
                    >
                      <Play className="size-2.5" fill="currentColor" />
                      {ref.tag}
                    </span>
                  </div>
                </div>

                {/* Prompt */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Copy className="size-3.5 text-[#22D3EE]" />
                    <span className="text-[10px] text-[#A1A1AA]/60 uppercase tracking-wider font-semibold">
                      Prompt do guia
                    </span>
                  </div>
                  <p className="text-sm sm:text-[15px] text-[#A1A1AA]/80 font-mono leading-relaxed">
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