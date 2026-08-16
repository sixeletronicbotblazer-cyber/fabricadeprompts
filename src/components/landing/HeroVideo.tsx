"use client";

import { useRef, useState, useCallback } from "react";
import { Play, Pause, RotateCcw, Loader2 } from "lucide-react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPoster, setShowPoster] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handlePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (isEnded) {
      v.currentTime = 0;
      setIsEnded(false);
    }
    v.play().then(() => setIsPlaying(true)).catch(() => {});
  }, [isEnded]);

  const handlePause = useCallback(() => {
    videoRef.current?.pause();
    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  }, [isPlaying, handlePause, handlePlay]);

  const handleRestart = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    setIsEnded(false);
    v.play().then(() => setIsPlaying(true)).catch(() => {});
  }, []);

  return (
    <div className="mt-7 sm:mt-8 mx-auto w-full max-w-[760px]">
      <div className="relative rounded-2xl overflow-hidden bg-black shadow-[0_0_30px_rgba(37,244,238,0.08),0_0_60px_rgba(254,44,85,0.06)] border border-white/[0.08] group">
        {/* Video */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="none"
          onLoadedData={() => setIsLoading(false)}
          onCanPlay={() => {
            setIsLoading(false);
          }}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => {
            setIsPlaying(false);
            setIsEnded(true);
          }}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className={`w-full aspect-video object-cover rounded-2xl ${isEnded ? "opacity-0 scale-[0.98] transition-all duration-700" : showPoster ? "opacity-0" : "opacity-100 scale-100 transition-all duration-700"}`}
        >
          <source src="/images/demo-video.mp4" type="video/mp4" />
        </video>

        {/* Loading spinner */}
        {isLoading && !hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-black rounded-2xl">
            <Loader2 className="size-8 text-white/40 animate-spin" />
          </div>
        )}

        {/* Poster / Click-to-play */}
        {showPoster && !hasError && (
          <button
            onClick={() => {
              setShowPoster(false);
              setIsLoading(true);
              videoRef.current?.load();
              videoRef.current?.play().then(() => setIsPlaying(true)).catch(() => {});
            }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-[2px] rounded-2xl gap-3 cursor-pointer group/poster hover:bg-black/70 transition-colors"
            aria-label="Reproduzir vídeo"
          >
            <div className="flex items-center justify-center size-16 rounded-full bg-white/10 border border-white/20 group-hover/poster:bg-white/20 group-hover/poster:scale-110 transition-all">
              <Play className="size-7 text-white ml-1" fill="white" />
            </div>
            <span className="text-[12px] text-white/50 font-medium">
              Clique para assistir
            </span>
          </button>
        )}

        {/* Error state */}
        {hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111] rounded-2xl gap-2 px-4">
            <Play className="size-8 text-white/20" />
            <p className="text-[12px] text-white/30 text-center">
              Vídeo em breve
            </p>
          </div>
        )}

        {/* Play/Pause overlay button — always visible on hover/focus, and when paused */}
        {!isEnded && !isLoading && !hasError && (
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
            className="absolute bottom-3 right-3 flex items-center justify-center size-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/15 text-white/80 hover:text-white hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 [&:not(.group-hover\:opacity-100)]:sm:hidden cursor-pointer"
          >
            {isPlaying ? (
              <Pause className="size-4" />
            ) : (
              <Play className="size-4 ml-0.5" />
            )}
          </button>
        )}

        {/* Ended state — restart overlay */}
        {isEnded && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm rounded-2xl gap-3"
            style={{ animation: "heroFadeIn 0.5s ease 0.15s both" }}
          >
            <button
              onClick={handleRestart}
              aria-label="Reiniciar vídeo"
              className="flex items-center justify-center size-14 rounded-full bg-white/10 border border-white/15 text-white hover:bg-white/20 hover:scale-110 transition-all cursor-pointer"
            >
              <RotateCcw className="size-6" />
            </button>
            <span className="text-[12px] text-white/50 font-medium">
              Assistir novamente
            </span>
          </div>
        )}
      </div>

      <p className="mt-2.5 text-[11px] text-white/35 text-center">
        Veja o app em ação: do prompt ao vídeo pronto em menos de 1 minuto.
      </p>
    </div>
  );
}