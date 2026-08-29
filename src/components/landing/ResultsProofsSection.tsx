"use client";

import { useEffect, useRef, useCallback } from "react";
import { FadeIn } from "./FadeIn";

const cards = [
  {
    image: "/images/proof-jan-fev.png",
    alt: "Dados de Janeiro e Fevereiro no TikTok Shop",
    label: "Dados de Janeiro e Fevereiro no TikTok Shop",
    sub: "Criativos em teste",
    desc: "Variacoes sendo criadas para testar novos angulos.",
  },
  {
    image: "/images/proof-jun.png",
    alt: "Dados de Junho no TikTok Shop",
    label: "Dados de Junho no TikTok Shop",
    sub: "Aplicacao no TikTok",
    desc: "Prints e bastidores de videos sendo usados na pratica.",
  },
];

export function ResultsProofsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);
  const pausedRef = useRef(false);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    let lastTime = performance.now();
    const speed = 30;

    const animate = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!pausedRef.current && trackRef.current) {
        offsetRef.current += speed * delta;
        const halfWidth = trackRef.current.scrollWidth / 2;
        if (halfWidth > 0 && offsetRef.current >= halfWidth) {
          offsetRef.current -= halfWidth;
        }
        trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const pause = useCallback(() => {
    pausedRef.current = true;
    clearTimeout(pauseTimerRef.current);
  }, []);

  const resume = useCallback(() => {
    pausedRef.current = false;
  }, []);

  const handleTouchStart = useCallback(() => {
    pause();
    pauseTimerRef.current = setTimeout(resume, 3000);
  }, [pause, resume]);

  const handleMouseEnter = useCallback(() => {
    pause();
  }, [pause]);

  const handleMouseLeave = useCallback(() => {
    resume();
  }, [resume]);

  useEffect(() => {
    return () => clearTimeout(pauseTimerRef.current);
  }, []);

  return (
    <section className="bg-[#08080A] pt-4 pb-8 sm:pt-5 sm:pb-10">
      <div className="max-w-5xl mx-auto px-4">

        {/* Title */}
        <FadeIn>
          <h2 className="text-[1.15rem] sm:text-2xl lg:text-[1.6rem] font-extrabold text-[#F4F4F5] leading-[1.15] sm:leading-[1.2] text-center max-w-md sm:max-w-lg mx-auto mb-1.5">
            Quem usa esse mecanismo, consegue{" "}
            <span className="text-[#FF2D55]">testar mais criativos</span>
          </h2>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.05}>
          <p className="text-[11px] sm:text-[13px] text-[#A1A1AA]/60 max-w-sm mx-auto text-center leading-relaxed mb-1">
            Com os prompts certos, fica mais facil sair do zero, criar variacoes e testar mais videos para TikTok Shop.
          </p>
        </FadeIn>

        {/* Support paragraph */}
        <FadeIn delay={0.08}>
          <p className="text-[10px] sm:text-[11px] text-[#A1A1AA]/45 max-w-sm mx-auto text-center leading-relaxed mb-6 sm:mb-8">
            A ideia nao e depender de sorte ou tentar inventar tudo sozinho. O metodo ajuda voce a ter direcao para criar, copiar, adaptar e testar diferentes formatos de criativo.
          </p>
        </FadeIn>

        {/* Infinite carousel */}
        <FadeIn delay={0.1}>
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchStart}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              ref={trackRef}
              className="flex will-change-transform"
              style={{ touchAction: "pan-y" }}
            >
              {[...cards, ...cards, ...cards, ...cards].map((card, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[85%] sm:w-[47%] lg:w-[31.5%] pr-3 sm:pr-4"
                >
                  <div className="bg-[#111113] rounded-2xl border border-[#2A2A2E]/40 p-2 sm:p-2.5 shadow-[0_0_15px_rgba(255,45,85,0.04)]">
                    <img
                      src={card.image}
                      alt={card.alt}
                      loading={i < 2 ? "eager" : "lazy"}
                      className="w-full h-auto object-contain rounded-xl"
                      draggable={false}
                    />
                    <div className="px-1 pt-2 pb-1">
                      <p className="text-[10px] sm:text-xs font-bold text-[#F4F4F5]/80 leading-tight">
                        {card.label}
                      </p>
                      <p className="text-[9px] sm:text-[10px] text-[#A1A1AA]/50 leading-tight mt-0.5">
                        {card.sub}: {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
