"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { FadeIn } from "./FadeIn";

const IMGUR_ALBUM = "WQDSFRP";

export function InsideAppVSL() {
  const [started, setStarted] = useState(false);

  return (
    <section className="relative bg-[#050505] py-10 sm:py-14 md:py-16 px-4 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF2D55]/[0.04] rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#22D3EE]/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Text side (desktop) */}
          <div className="order-2 md:order-1">
            <FadeIn>
              <h2 className="text-[1.4rem] sm:text-2xl md:text-[1.85rem] font-black leading-[1.1] text-[#F4F4F5] mb-3">
                Veja por dentro antes de{" "}
                <span className="text-[#FF2D55]">acessar</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-sm text-[#A1A1AA]/70 leading-relaxed max-w-md">
                Em menos de 1 minuto, veja os módulos, a biblioteca de prompts e
                como funciona o caminho para copiar, adaptar e gerar seus
                criativos.
              </p>
            </FadeIn>
          </div>

          {/* Media side */}
          <div className="order-1 md:order-2">
            <FadeIn>
              <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[340px]">
                {/* Media card */}
                <div className="relative rounded-3xl overflow-hidden bg-[#0a0a0c] p-[2px] shadow-[0_0_40px_rgba(255,45,85,0.08),0_0_60px_rgba(34,211,238,0.05)]">
                  {/* Gradient border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#FF2D55]/30 via-[#FF2D55]/10 to-[#22D3EE]/20 pointer-events-none z-10" />

                  {/* Content container */}
                  <div className="relative bg-[#0a0a0c] rounded-[22px] overflow-hidden z-0">
                    {!started ? (
                      <button
                        onClick={() => setStarted(true)}
                        className="relative w-full aspect-[9/16] block bg-[#0a0a0c] cursor-pointer group"
                        aria-label="Reproduzir vídeo"
                      >
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors" />
                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="size-16 sm:size-[4.5rem] rounded-full bg-[#FF2D55]/90 group-hover:bg-[#FF2D55] group-hover:scale-110 transition-all flex items-center justify-center shadow-lg shadow-[#FF2D55]/30">
                            <Play
                              className="size-7 text-white ml-1"
                              fill="white"
                            />
                          </div>
                        </div>
                      </button>
                    ) : (
                      <iframe
                        src={`https://imgur.com/a/${IMGUR_ALBUM}/embed`}
                        className="w-full aspect-[9/16] block border-0 rounded-[22px]"
                        allowFullScreen
                        title="Veja por dentro do Motion Prompts"
                        loading="lazy"
                      />
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
