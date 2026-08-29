"use client";

import { useEffect, useRef, useCallback } from "react";
import { FadeIn } from "./FadeIn";

const images = [
  "/images/prova_social_whatsapp_01.png",
  "/images/prova_social_whatsapp_02.png",
  "/images/prova_social_whatsapp_03.png",
  "/images/prova_social_whatsapp_04.png",
];

export function WhatsAppProofCarousel() {
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
    <section className="bg-[#0D0D10] pt-4 pb-8 sm:pt-5 sm:pb-10">
      <div className="max-w-5xl mx-auto px-4">

        {/* Badge */}
        <FadeIn>
          <div className="flex justify-center mb-2">
            <span className="text-[9px] sm:text-[10px] font-bold text-[#FF2D55]/90 uppercase tracking-[0.18em] bg-[#FF2D55]/8 border border-[#FF2D55]/20 px-3.5 py-1 rounded-full shadow-[0_0_12px_rgba(255,45,85,0.15)]">
              Provas reais
            </span>
          </div>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={0.05}>
          <h2 className="text-[1.15rem] sm:text-2xl lg:text-[1.6rem] font-extrabold text-[#F4F4F5] leading-[1.15] sm:leading-[1.2] text-center max-w-md sm:max-w-lg mx-auto mb-1.5">
            Quem acessou ja comecou a{" "}
            <span className="text-[#FF2D55]">usar</span>
          </h2>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.05}>
          <p className="text-[11px] sm:text-[13px] text-[#A1A1AA]/60 max-w-sm mx-auto text-center leading-relaxed mb-6 sm:mb-8">
            Veja duvidas e relatos reais de quem entrou para a biblioteca de prompts e comecou a aplicar nos criativos.
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
              {[...images, ...images].map((src, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[92%] sm:w-[47%] lg:w-[31.5%] pr-3 sm:pr-4"
                >
                  <div className="bg-[#111113] rounded-2xl border border-[#2A2A2E]/40 p-2 sm:p-2.5 shadow-[0_0_15px_rgba(255,45,85,0.04)]">
                    <img
                      src={src}
                      alt={`Prova social WhatsApp ${i % images.length + 1}`}
                      loading={i < 2 ? "eager" : "lazy"}
                      className="w-full h-auto object-contain rounded-xl"
                      draggable={false}
                    />
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
