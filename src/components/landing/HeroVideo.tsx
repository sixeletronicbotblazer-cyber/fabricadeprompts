"use client";

import { useState, useRef, useCallback } from "react";
import { Eye, Volume2, VolumeX } from "lucide-react";

const VSL_URL = "https://i.imgur.com/mchBO8F.mp4";

export function HeroVideo() {
  const [muted, setMuted] = useState(true);
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return true;
    return !sessionStorage.getItem("vsl_watched");
  });
  const [dismissed, setDismissed] = useState(() => {
    if (typeof window === "undefined") return false;
    return !!sessionStorage.getItem("vsl_watched");
  });
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnded = useCallback(() => {
    sessionStorage.setItem("vsl_watched", "1");
    setTimeout(() => {
      setVisible(false);
      setDismissed(true);
    }, 600);
  }, []);

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      const next = !muted;
      videoRef.current.muted = next;
      setMuted(next);
    }
  }, [muted]);

  if (dismissed) return null;

  return (
    <div
      className={`mt-6 sm:mt-8 mx-auto w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[460px] transition-all duration-500 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
    >
      <div className="relative rounded-2xl overflow-hidden bg-black shadow-[0_0_40px_rgba(255,45,85,0.12)] border border-[#2A2A2E]/60">
        {/* Selo "VEJA POR DENTRO" */}
        <div className="absolute top-3 right-3 z-20">
          <div className="flex flex-col items-center bg-black/70 backdrop-blur-sm border border-[#FF2D55]/30 rounded-xl px-2.5 py-1.5 shadow-[0_0_12px_rgba(255,45,85,0.2)]">
            <div className="flex items-center gap-1">
              <Eye className="size-3 text-[#FF2D55]" />
              <span className="text-[9px] sm:text-[10px] font-bold text-white/90 uppercase tracking-wider leading-none">
                VEJA POR DENTRO
              </span>
            </div>
            <span className="text-[7px] sm:text-[8px] text-[#A1A1AA]/60 leading-none mt-0.5">
              Biblioteca de prompts
            </span>
          </div>
        </div>

        {/* Botão mute/unmute */}
        <button
          onClick={toggleMute}
          aria-label={muted ? "Ativar som" : "Desativar som"}
          className="absolute bottom-3 left-3 z-20 size-9 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-sm border border-white/15 text-white/80 hover:text-white hover:bg-black/80 transition-all"
        >
          {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
        </button>

        {/* Vídeo vertical 9:16 - plays once, NO loop */}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleEnded}
          className="w-full aspect-[9/16] object-cover"
          poster="/images/galeria-premium-bonus.png"
        >
          <source src={VSL_URL} type="video/mp4" />
        </video>

        {/* Gradiente sutil na base */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Microcopy abaixo do vídeo */}
      <p className="mt-3 text-center text-[11px] sm:text-xs text-[#A1A1AA]/45 leading-relaxed max-w-[280px] mx-auto">
        Veja como funciona por dentro: escolha o estilo, copie o prompt e adapte para seu produto.
      </p>
    </div>
  );
}
