"use client";

import { FadeIn } from "./FadeIn";
import { Play, Copy, Eye, Camera, Sparkles } from "lucide-react";

const modes = [
  {
    icon: Eye,
    label: "Modo POV",
    tag: "Lançamento",
    tagColor: "#25F4EE",
    badgeColor: "#25F4EE",
    prompt:
      "Vídeo em estilo POV, primeira pessoa. Mãos segurando a peça de roupa, mostrando detalhes do tecido, costura e caimento. Câmera como se o comprador estivesse vendo a peça ao vivo. Movimento suave de virar a peça, luz natural, sem fala. Estilo UGC realista para TikTok Shop.",
    image: "/images/result-pov.gif",
    thumb: "/images/thumb-pov.jpeg",
  },
  {
    icon: Camera,
    label: "Modo Selfie",
    tag: "Lançamento",
    tagColor: "#FE2C55",
    badgeColor: "#FE2C55",
    prompt:
      "Vídeo em estilo selfie, modelo IA olhando diretamente para a câmera como se estivesse mandando foto. Sorriso leve, mão segurando celular, iluminação de ambiente. Movimento natural de ajustar o cabelo e mostrar a roupa. Sem fala, sem dança, estilo UGC casual para TikTok Shop.",
    image: "/images/result-selfie.gif",
    thumb: "/images/thumb-selfie.jpeg",
  },
];

export function ModeExamples() {
  return (
    <section className="bg-[#0D0D0D] py-10 md:py-16 px-4 border-t border-white/[0.04]">
      <div className="max-w-2xl mx-auto">
        <div className="space-y-8">
          {modes.map((mode, idx) => (
            <FadeIn key={mode.label} delay={idx * 0.1}>
              <div className="bg-[#1A1A1A] rounded-2xl border border-white/[0.08] overflow-hidden">
                {/* Header */}
                <div className="px-4 sm:px-5 pt-4 sm:pt-5 pb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="size-7 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${mode.badgeColor}15` }}
                    >
                      <mode.icon className="size-3.5" style={{ color: mode.badgeColor }} />
                    </div>
                    <span
                      className="text-[11px] font-bold uppercase tracking-wider"
                      style={{ color: mode.badgeColor }}
                    >
                      {mode.label}
                    </span>
                  </div>
                  <span
                    className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: `${mode.tagColor}15`,
                      color: mode.tagColor,
                    }}
                  >
                    ✨ {mode.tag}
                  </span>
                </div>

                {/* Video */}
                <div className="relative overflow-hidden bg-black/50 w-full aspect-[9/16] max-w-[320px] mx-auto sm:max-w-[280px]">
                  <img
                    src={mode.image}
                    alt={`Vídeo gerado — ${mode.label}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className="inline-flex items-center gap-1.5 backdrop-blur-sm text-[10px] sm:text-xs font-semibold text-white px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: `${mode.badgeColor}CC` }}
                    >
                      <Play className="size-2.5" />
                      {mode.label}
                    </span>
                  </div>
                </div>

                {/* Prompt */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Copy className="size-3.5" style={{ color: mode.badgeColor }} />
                    <span className="text-[10px] text-white/40 uppercase tracking-wider font-semibold">
                      Prompt do guia
                    </span>
                  </div>
                  <p className="text-sm sm:text-[15px] text-white/70 font-mono leading-relaxed">
                    &quot;{mode.prompt}&quot;
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