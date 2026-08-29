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
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);
  const interactionTimer = useRef<ReturnType<typeof setTimeout>>;

  // Track which slide is most visible
  const updateActive = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const childWidth = el.firstElementChild?.getBoundingClientRect().width ?? el.clientWidth;
    const idx = Math.round(scrollLeft / childWidth);
    setActiveIdx(Math.min(idx, images.length - 1));
  }, []);

  const scrollToIdx = useCallback((idx: number) => {
    const el = trackRef.current;
    if (!el) return;
    const child = el.children[idx];
    if (!child) return;
    child.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    setActiveIdx(idx);
  }, []);

  const next = useCallback(() => {
    const nextIdx = (activeIdx + 1) % images.length;
    scrollToIdx(nextIdx);
  }, [activeIdx, scrollToIdx]);

  const prev = useCallback(() => {
    const prevIdx = (activeIdx - 1 + images.length) % images.length;
    scrollToIdx(prevIdx);
  }, [activeIdx, scrollToIdx]);

  const markInteraction = useCallback(() => {
    setUserInteracted(true);
    clearTimeout(interactionTimer.current);
    interactionTimer.current = setTimeout(() => setUserInteracted(false), 12000);
  }, []);

  // Autoplay
  useEffect(() => {
    if (userInteracted) return;
    const id = setInterval(() => {
      const el = trackRef.current;
      if (!el) return;
      const childWidth = el.firstElementChild?.getBoundingClientRect().width ?? el.clientWidth;
      const scrollLeft = el.scrollLeft;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (scrollLeft + childWidth >= maxScroll - 1) {
        scrollToIdx(0);
      } else {
        next();
      }
    }, 4500);
    return () => clearInterval(id);
  }, [userInteracted, next, scrollToIdx]);

  return (
    <section className="bg-[#0D0D10] py-8 sm:py-10 px-4">
      <div className="max-w-4xl mx-auto">
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
            {/* Desktop arrows */}
            <button
              onClick={() => { prev(); markInteraction(); }}
              className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 size-9 items-center justify-center rounded-full bg-[#111113]/90 border border-[#2A2A2E]/60 text-white/50 hover:text-white hover:border-[#FF2D55]/30 transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={() => { next(); markInteraction(); }}
              className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 size-9 items-center justify-center rounded-full bg-[#111113]/90 border border-[#2A2A2E]/60 text-white/50 hover:text-white hover:border-[#FF2D55]/30 transition-all"
              aria-label="Proximo"
            >
              <ChevronRight className="size-4" />
            </button>

            {/* Scrollable track - scroll-snap for native feel */}
            <div
              ref={trackRef}
              onScroll={updateActive}
              onTouchStart={markInteraction}
              onMouseDown={markInteraction}
              className="flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-0.5"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {images.map((src, i) => (
                <div
                  key={i}
                  className="snap-start flex-shrink-0 w-[92%] sm:w-[48%] lg:w-[32%]"
                >
                  <div className="bg-[#111113] rounded-2xl border border-[#2A2A2E]/60 p-2 sm:p-2.5 shadow-[0_0_30px_rgba(255,45,85,0.06),0_0_15px_rgba(34,211,238,0.04)]">
                    <img
                      src={src}
                      alt={`Prova social ${i + 1}`}
                      loading={i === 0 ? "eager" : "lazy"}
                      className="w-full h-auto object-contain rounded-xl"
                      draggable={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => { scrollToIdx(i); markInteraction(); }}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIdx
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
