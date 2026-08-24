"use client";

import { useState } from "react";
import { Play, LayoutGrid, Image, ClipboardList } from "lucide-react";
import { FadeIn } from "./FadeIn";

const YOUTUBE_ID = "jupzIzUvc3Q";

const miniCards = [
  { icon: LayoutGrid, label: "Módulos" },
  { icon: Image, label: "Galeria" },
  { icon: ClipboardList, label: "Prompts prontos" },
];

export function InsideAppVSL() {
  const [playing, setPlaying] = useState(false);

  function handlePlay() {
    setPlaying(true);
  }

  return (
    <section className="relative bg-[#050505] py-10 sm:py-14 md:py-16 px-4 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF2D55]/[0.04] rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#22D3EE]/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Badge */}
        <FadeIn>
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center bg-white/[0.04] text-[#C4C4CC] text-[10px] sm:text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border border-[#2A2A2E]/60">
              VEJA POR DENTRO
            </span>
          </div>
        </FadeIn>

        {/* Desktop: text left, video right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Text side (desktop) / top (mobile) */}
          <div className="order-1 md:order-1">
            <FadeIn delay={0.05}>
              <h2 className="text-[1.4rem] sm:text-2xl md:text-[1.85rem] font-black leading-[1.1] text-[#F4F4F5] mb-3">
                Veja por dentro antes de{" "}
                <span className="text-[#FF2D55]">acessar</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-sm text-[#A1A1AA]/70 leading-relaxed mb-3 max-w-md">
                Em menos de 1 minuto, veja os módulos, a biblioteca de prompts e como funciona o caminho para copiar, adaptar e gerar seus criativos.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-xs text-[#A1A1AA]/50 leading-relaxed mb-6 max-w-md">
                Você não precisa imaginar o que vai receber. O vídeo mostra a área por dentro, os módulos principais e a galeria premium com prompts prontos para usar.
              </p>
            </FadeIn>

            {/* Mini cards */}
            <FadeIn delay={0.2}>
              <div className="flex flex-wrap gap-2.5 mb-7">
                {miniCards.map((card, i) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.label}
                      className="flex items-center gap-2.5 bg-[#111113] border border-[#2A2A2E]/50 rounded-xl px-4 py-3"
                    >
                      <div className="size-8 rounded-lg bg-[#FF2D55]/10 border border-[#FF2D55]/15 flex items-center justify-center shrink-0">
                        <Icon className="size-4 text-[#FF2D55]" />
                      </div>
                      <span className="text-[13px] font-semibold text-[#F4F4F5]">{card.label}</span>
                    </div>
                  );
                })}
              </div>
            </FadeIn>

            {/* CTA - desktop only, mobile CTA goes below video */}
            <FadeIn delay={0.25} className="hidden md:block">
              <a
                href="#planos"
                className="inline-flex items-center justify-center bg-[#FF2D55] hover:brightness-110 text-white font-extrabold py-3.5 px-8 rounded-full transition-all text-sm sm:text-base shadow-lg shadow-[#FF2D55]/25 hover:shadow-xl hover:shadow-[#FF2D55]/35 hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wide"
              >
                QUERO ACESSAR OS PROMPTS
              </a>
              <p className="text-[10px] text-[#A1A1AA]/40 mt-2.5">
                Acesso imediato • Pagamento único • Garantia simples de 7 dias
              </p>
            </FadeIn>
          </div>

          {/* Video side */}
          <div className="order-2 md:order-2">
            <FadeIn delay={0.1}>
              <div
                className="relative mx-auto w-full max-w-[320px] sm:max-w-[340px]"
              >
                {/* Label above video */}
                <p className="text-[10px] font-bold text-[#A1A1AA]/40 uppercase tracking-wider text-center mb-3">
                  Tour rápido do app
                </p>

                {/* Video card */}
                <div className="relative rounded-3xl overflow-hidden bg-[#0a0a0c] p-[2px] shadow-[0_0_40px_rgba(255,45,85,0.08),0_0_60px_rgba(34,211,238,0.05)]">
                  {/* Gradient border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#FF2D55]/30 via-[#FF2D55]/10 to-[#22D3EE]/20 pointer-events-none z-10" />

                  {/* Video container 9:16 */}
                  <div className="relative bg-[#0a0a0c] rounded-[22px] overflow-hidden z-0">
                    {playing ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                        className="w-full aspect-[9/16] block"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="Tour rápido do Motion Prompts"
                      />
                    ) : (
                      <button
                        onClick={handlePlay}
                        className="relative w-full aspect-[9/16] block bg-[#0a0a0c] cursor-pointer group"
                        aria-label="Reproduzir vídeo"
                      >
                        {/* Thumbnail */}
                        <img
                          src={`https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`}
                          alt="Tour rápido do Motion Prompts"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="size-16 sm:size-18 rounded-full bg-[#FF2D55]/90 group-hover:bg-[#FF2D55] group-hover:scale-110 transition-all flex items-center justify-center shadow-lg shadow-[#FF2D55]/30">
                            <Play className="size-7 text-white ml-1" fill="white" />
                          </div>
                        </div>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* CTA - mobile only, below video */}
            <FadeIn delay={0.2} className="md:hidden mt-8">
              <div className="flex flex-col items-center gap-2.5">
                <a
                  href="#planos"
                  className="inline-flex items-center justify-center w-full max-w-sm bg-[#FF2D55] hover:brightness-110 text-white font-extrabold py-3.5 px-8 rounded-full transition-all text-sm sm:text-base shadow-lg shadow-[#FF2D55]/25 hover:shadow-xl hover:shadow-[#FF2D55]/35 hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wide"
                >
                  QUERO ACESSAR OS PROMPTS
                </a>
                <p className="text-[10px] text-[#A1A1AA]/40">
                  Acesso imediato • Pagamento único • Garantia simples de 7 dias
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
