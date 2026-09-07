"use client";

import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { Play, Copy, ChevronDown } from "lucide-react";

const examples = [
  {
    tag: "Modelo",
    tagColor: "bg-[#FF2D55]",
    prompt:
      "Modelo dá um passo para trás mostrando o look completo, mãos ao lado, virada leve, movimento natural do tecido, estilo UGC",
    image: "/images/result-look.gif",
  },
  {
    tag: "POV",
    tagColor: "bg-[#25F4EE]",
    prompt:
      "Vídeo em estilo POV, primeira pessoa. Mãos segurando a peça, mostrando detalhes do tecido e caimento. Câmera como se o comprador estivesse vendo ao vivo.",
    image: "/images/result-pov.gif",
  },
  {
    tag: "Selfie",
    tagColor: "bg-[#FF2D55]",
    prompt:
      "Vídeo estilo selfie, modelo IA olhando para a câmera. Sorriso leve, mão segurando celular, movimento natural de mostrar a roupa.",
    image: "/images/result-selfie.gif",
  },
];

function PromptCard({ item }: { item: (typeof examples)[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-[#111113] rounded-2xl border border-[#2A2A2E]/60 overflow-hidden hover:border-[#FF2D55]/15 transition-colors duration-300">
      {/* Video/GIF */}
      <div className="relative overflow-hidden bg-[#050505] w-full aspect-[9/16]">
        <img
          src={item.image}
          alt={`Exemplo ${item.tag}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center gap-1 ${item.tagColor} text-[10px] sm:text-xs font-bold text-white px-2.5 py-1 rounded-full border border-white/10`}
          >
            <Play className="size-2.5" fill="currentColor" />
            {item.tag}
          </span>
        </div>
      </div>

      {/* Prompt - compact on mobile, expandable */}
      <div className="p-3 sm:p-5">
        <div className="flex items-center gap-2 mb-1.5">
          <Copy className="size-3 text-[#FF2D55]/60" />
          <span className="text-[9px] sm:text-[10px] text-[#A1A1AA]/60 uppercase tracking-wider font-semibold">
            Prompt do guia
          </span>
        </div>

        {/* Desktop view - full prompt */}
        <p className="hidden sm:block text-sm text-[#A1A1AA]/80 font-mono leading-relaxed">
          &quot;{item.prompt}&quot;
        </p>

        {/* Mobile view - expandable */}
        <div className="sm:hidden">
          <p className={`text-[12px] text-[#A1A1AA]/80 font-mono leading-relaxed ${!expanded ? "line-clamp-2" : ""}`}>
            &quot;{item.prompt}&quot;
          </p>
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-0.5 mt-1 text-[10px] text-[#FF2D55]/70 font-semibold hover:text-[#FF2D55] transition-colors"
            aria-expanded={expanded}
          >
            {expanded ? "Ver menos" : "Ver exemplo de prompt"}
            <ChevronDown className={`size-3 transition-transform ${expanded ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>
    </div>
  );
}

export function ReferenceExamples() {
  return (
    <section className="bg-[#0D0D10] py-8 sm:py-10 md:py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-[1.15rem] sm:text-xl md:text-[1.75rem] font-black leading-[1.1] sm:leading-[1.0] text-[#F4F4F5] mb-4 text-center">
            Referência: <span className="text-[#FF2D55]">prompt + resultado</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {examples.map((item, i) => (
            <FadeIn key={item.tag} delay={i * 0.08}>
              <PromptCard item={item} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
