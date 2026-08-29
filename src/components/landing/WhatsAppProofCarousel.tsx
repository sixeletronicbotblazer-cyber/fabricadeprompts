"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

const images = [
  "/images/prova_social_whatsapp_01.png",
  "/images/prova_social_whatsapp_02.png",
  "/images/prova_social_whatsapp_03.png",
  "/images/prova_social_whatsapp_04.png",
];

export function WhatsAppProofCarousel() {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval>>;

  const goTo = useCallback((index: number) => {
    setCurrent((index + images.length) % images.length);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (isDragging) return;
    autoplayRef.current = setInterval(next, 4500);
    return () => clearInterval(autoplayRef.current);
  }, [isDragging, next]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    startX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? next() : prev();
    }
    setIsDragging(false);
  }, [isDragging, next, prev]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    startX.current = e.clientX;
  }, []);

  const handleMouseUp = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = startX.current - e.clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? next() : prev();
    }
    setIsDragging(false);
  }, [isDragging, next, prev]);

  return (
    <section className="bg-[#0D0D10] py-8 sm:py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="flex justify-center mb-3">
            <span className="text-[9px] sm:text-[10px] font-bold text-[#22D3EE]/80 uppercase tracking-[0.15em] bg-[#22D3EE]/8 border border-[#22D3EE]/15 px-3 py-1 rounded-full">
              Provas reais
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h2 className="text-[1.3rem] sm:text-2xl font-black text-[#F4F4F5] leading-tight mb-2 text-center">
            Quem acessou ja comecou a <span className="text-[#FF2D55]">usar</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-[12px] sm:text-sm text-[#A1A1AA]/70 max-w-md mx-auto mb-6 text-center leading-relaxed">
            Veja duvidas e relatos de quem entrou para a biblioteca de prompts e comecou a aplicar nos criativos.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="relative">
            <button
              onClick={prev}
              className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 z-20 size-9 items-center justify-center rounded-full bg-[#111113]/90 border border-[#2A2A2E]/60 text-white/50 hover:text-white hover:border-[#FF2D55]/30 transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={next}
              className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 size-9 items-center justify-center rounded-full bg-[#111113]/90 border border-[#2A2A2E]/60 text-white/50 hover:text-white hover:border-[#FF2D55]/30 transition-all"
              aria-label="Proximo"
            >
              <ChevronRight className="size-4" />
            </button>

            <div
              className="overflow-hidden rounded-2xl"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={() => setIsDragging(false)}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {images.map((src, i) => (
                  <div key={i} className="w-full flex-shrink-0 px-1">
                    <div className="bg-[#111113] rounded-2xl border border-[#2A2A2E]/60 p-2 sm:p-2.5 shadow-[0_0_30px_rgba(255,45,85,0.06),0_0_15px_rgba(34,211,238,0.04)]">
                      <img
                        src={src}
                        alt={`Prova social ${i + 1}`}
                        loading={i === 0 ? "eager" : "lazy"}
                        className="w-full max-h-[55vh] sm:max-h-[60vh] object-contain rounded-xl"
                        draggable={false}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-4">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 h-2 bg-[#FF2D55]"
                    : "w-2 h-2 bg-white/20 hover:bg-white/35"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-[11px] sm:text-xs text-[#A1A1AA]/50 text-center mt-4 mb-4 leading-relaxed">
            Duvidas simples, acesso rapido e prompts prontos para copiar, adaptar e usar.
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="text-center">
            <a
              href="#planos"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 py-3.5 bg-[#FF2D55] hover:brightness-110 text-white font-extrabold tracking-wide uppercase text-[14px] sm:text-[15px] rounded-full transition-all shadow-lg shadow-[#FF2D55]/25 hover:shadow-xl hover:shadow-[#FF2D55]/35 hover:scale-[1.02] active:scale-[0.98]"
            >
              QUERO ACESSAR AGORA
              <ArrowRight className="ml-2 size-3.5" />
            </a>
            <p className="text-[10px] text-[#A1A1AA]/35 mt-3">
              Acesso imediato • Pagamento unico • Garantia simples de 7 dias
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
