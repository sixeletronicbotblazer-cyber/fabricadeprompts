"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { FadeIn } from "./FadeIn";

const YOUTUBE_ID = "jupzIzUvc3Q";

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT: {
      Player: new (
        el: HTMLElement,
        opts: { videoId: string; playerVars: Record<string, unknown>; events: Record<string, (e: { data: number; target: { mute: () => void; unMute: () => void; playVideo: () => void; pauseVideo: () => void; isMuted: () => boolean; getPlayerState: () => number } }) => void> }
      ) => {
        destroy: () => void;
        mute: () => void;
        unMute: () => void;
        playVideo: () => void;
        pauseVideo: () => void;
        isMuted: () => boolean;
        getPlayerState: () => number;
      };
    };
  }
}

function loadYouTubeAPI(): Promise<void> {
  return new Promise((resolve) => {
    if (window.YT?.Player) {
      resolve();
      return;
    }
    const existing = document.querySelector(
      'script[src="https://www.youtube.com/iframe_api"]'
    );
    if (existing) {
      const check = setInterval(() => {
        if (window.YT?.Player) {
          clearInterval(check);
          resolve();
        }
      }, 50);
      return;
    }
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    tag.async = true;
    window.onYouTubeIframeAPIReady = () => resolve();
    document.head.appendChild(tag);
  });
}

export function InsideAppVSL() {
  const [started, setStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [apiReady, setApiReady] = useState(false);
  const playerRef = useRef<ReturnType<typeof Object> | null>(null);
  const playerDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadYouTubeAPI().then(() => setApiReady(true));
  }, []);

  useEffect(() => {
    if (!started || !apiReady || !playerDivRef.current || playerRef.current) return;

    const timer = setTimeout(() => {
      if (!playerDivRef.current) return;
      playerRef.current = new window.YT.Player(playerDivRef.current, {
        videoId: YOUTUBE_ID,
        playerVars: {
          autoplay: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          playsinline: 1,
          fs: 0,
          cc_load_policy: 0,
          disablekb: 1,
        },
        events: {
          onReady: (event) => {
            event.target.mute();
            event.target.playVideo();
            setIsPlaying(true);
          },
          onStateChange: (event) => {
            setIsPlaying(event.data === 1);
          },
        },
      });
    }, 150);

    return () => clearTimeout(timer);
  }, [started, apiReady]);

  const togglePlayPause = useCallback(() => {
    const p = playerRef.current as NonNullable<
      (typeof playerRef)["current"]
    > & {
      getPlayerState: () => number;
      playVideo: () => void;
      pauseVideo: () => void;
    };
    if (!p) return;
    const state = p.getPlayerState();
    if (state === 1) {
      p.pauseVideo();
    } else {
      p.playVideo();
    }
  }, []);

  const toggleMute = useCallback(() => {
    const p = playerRef.current as NonNullable<
      (typeof playerRef)["current"]
    > & {
      isMuted: () => boolean;
      mute: () => void;
      unMute: () => void;
    };
    if (!p) return;
    if (p.isMuted()) {
      p.unMute();
      setIsMuted(false);
    } else {
      p.mute();
      setIsMuted(true);
    }
  }, []);

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

          {/* Video side */}
          <div className="order-1 md:order-2">
            <FadeIn>
              <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[340px]">
                {/* Video card */}
                <div className="relative rounded-3xl overflow-hidden bg-[#0a0a0c] p-[2px] shadow-[0_0_40px_rgba(255,45,85,0.08),0_0_60px_rgba(34,211,238,0.05)]">
                  {/* Gradient border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#FF2D55]/30 via-[#FF2D55]/10 to-[#22D3EE]/20 pointer-events-none z-10" />

                  {/* Video container 9:16 */}
                  <div className="relative bg-[#0a0a0c] rounded-[22px] overflow-hidden z-0">
                    {!started ? (
                      /* Thumbnail with play button */
                      <button
                        onClick={() => setStarted(true)}
                        className="relative w-full aspect-[9/16] block bg-[#0a0a0c] cursor-pointer group"
                        aria-label="Reproduzir vídeo"
                      >
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
                          <div className="size-16 sm:size-[4.5rem] rounded-full bg-[#FF2D55]/90 group-hover:bg-[#FF2D55] group-hover:scale-110 transition-all flex items-center justify-center shadow-lg shadow-[#FF2D55]/30">
                            <Play
                              className="size-7 text-white ml-1"
                              fill="white"
                            />
                          </div>
                        </div>
                      </button>
                    ) : (
                      /* YouTube player locked down with custom controls */
                      <div className="relative w-full aspect-[9/16] bg-black">
                        {/* Player container - pointer-events-none to block all YouTube interactions */}
                        <div className="absolute inset-0 pointer-events-none [&>iframe]:pointer-events-none">
                          <div ref={playerDivRef} className="w-full h-full" />
                        </div>

                        {/* Custom minimal controls */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-20">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={togglePlayPause}
                              className="size-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                              aria-label={isPlaying ? "Pausar" : "Reproduzir"}
                            >
                              {isPlaying ? (
                                <Pause
                                  className="size-4 text-white"
                                  fill="white"
                                />
                              ) : (
                                <Play
                                  className="size-4 text-white ml-0.5"
                                  fill="white"
                                />
                              )}
                            </button>
                            <button
                              onClick={toggleMute}
                              className="size-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                              aria-label={
                                isMuted ? "Ativar som" : "Silenciar"
                              }
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
        </div>
      </div>
    </section>
  );
}
