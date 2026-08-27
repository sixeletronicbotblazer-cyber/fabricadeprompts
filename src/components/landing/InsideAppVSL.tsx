"use client";

import { useState, useRef, useCallback } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function InsideAppVSL() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [started, setStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = useCallback(() => {
    setStarted(true);
  }, []);

  const handleVideoPlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  }, []);

  const handleMute = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  }, []);

  return (
    <section className="relative bg-[#050505] py-10 sm:py-14 md:py-16 px-4 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF2D55]/[0.04] rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#22D3EE]/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        {/* Headline */}
        <FadeIn>
          <h2 className="text-[1.4rem] sm:text-2xl md:text-[1.85rem] font-black leading-[1.1] text-[#F4F4F5] mb-3 text-center">
            Veja por dentro antes de{" "}
            <span className="text-[#FF2D55]">acessar</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-sm text-[#A1A1AA]/70 leading-relaxed max-w-sm mb-8 text-center">
            Veja os modulos, a biblioteca de prompts e como copiar e gerar seus criativos.
          </p>
        </FadeIn>

        {/* Video card */}
        <FadeIn delay={0.15}>
          <div className="relative w-full max-w-[320px] sm:max-w-[340px]">
            <div className="relative rounded-3xl overflow-hidden bg-[#0a0a0c] p-[2px] shadow-[0_0_40px_rgba(255,45,85,0.08),0_0_60px_rgba(34,211,238,0.05)]">
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#FF2D55]/30 via-[#FF2D55]/10 to-[#22D3EE]/20 pointer-events-none z-10" />

              <div className="relative bg-[#0a0a0c] rounded-[22px] overflow-hidden z-0">
                {!started ? (
                  <button
                    onClick={handlePlayClick}
                    className="relative w-full aspect-[9/16] block bg-[#0a0a0c] cursor-pointer group"
                    aria-label="Reproduzir vídeo"
                  >
                    <video
                      src="/vsl-oferta.webm"
                      className="w-full h-full object-cover"
                      muted
                      preload="metadata"
                      playsInline
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
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
                  <div className="relative w-full aspect-[9/16] bg-black">
                    <video
                      ref={videoRef}
                      src="/vsl-oferta.webm"
                      className="w-full h-full object-contain"
                      playsInline
                      loop
                      muted={isMuted}
                      autoPlay
                      preload="auto"
                    />
                    {/* Custom controls */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-20">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={handleVideoPlay}
                          className="size-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                          aria-label={isPlaying ? "Pausar" : "Reproduzir"}
                        >
                          {isPlaying ? (
                            <Pause className="size-4 text-white" fill="white" />
                          ) : (
                            <Play className="size-4 text-white ml-0.5" fill="white" />
                          )}
                        </button>
                        <button
                          onClick={handleMute}
                          className="size-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                          aria-label={isMuted ? "Ativar som" : "Silenciar"}
                        >
                          {isMuted ? (
                            <VolumeX className="size-4 text-white" />
                          ) : (
                            <Volume2 className="size-4 text-white" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
