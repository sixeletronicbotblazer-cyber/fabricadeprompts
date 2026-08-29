"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Star } from "lucide-react";
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
  const interactionTimer = useRef<ReturnType<typeof setTimeout>>();

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
    <section className="bg-[#0D0D10] pt-6 pb-10 sm:pt-8 sm:pb-12">
      <div className="max-w-5xl mx-auto px-4">

        {/* Rating seal */}
        <FadeIn>
          <div className="flex justify-center mb-3">
            <div className="inline-flex flex-col items-center gap-0.5">
              <div className="flex items-center gap-[3px]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`size-3.5 ${
                      i < 4
                        ? "fill-amber-400 text-amber-400"
                        : "fill-amber-400/50 text-amber-400/50"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl sm:text-2xl font-black text-[#F4F4F5] leading-none">4,8</span>
                <span className="text-[11px] text-[#A1A1AA]/50 font-medium">de 5,0</span>
              </div>
              <p className="text-[10px] text-[#A1A1AA]/50 leading-tight">
                <span className="text-[#C4C4CC]/70 font-semibold">+400 usuarias</span> satisfeitas
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Badge */}
        <FadeIn delay={0.05}>
          <div className="flex justify-center mb-2.5">
            <span className="text-[9px] sm:text-[10px] font-bold text-[#FF2D55]/90 uppercase tracking-[0.18em] bg-[#FF2D55]/8 border border-[#FF2D55]/20 px-3.5 py-1 rounded-full shadow-[0_0_12px_rgba(255,45,85,0.15)]">
              Provas reais
            </span>
          </div>
        </FadeIn>

        {/* Title - mobile manual break, desktop single line */}
        <FadeIn delay={0.08}>
          <div className="text-center mb-1.5">
            {/* Mobile: manual 2-line break */}
            <h2 className="text-[1.25rem] leading-[1.15] font-extrabold text-[#F4F4F5] sm:hidden max-w-[280px] mx-auto">
              Quem entrou ja comecou{" "}
              <span className="text-[#FF2D55]">a aplicar</span>
            </h2>
            {/* Desktop: single line */}
            <h2 className="hidden sm:block text-2xl lg:text-[1.7rem] leading-[1.2] font-extrabold text-[#F4F4F5] max-w-lg mx-auto">
              Quem entrou ja comecou{" "}
              <span className="text-[#FF2D55]">a aplicar</span>
            </h2>
          </div>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.12}>
          <p className="text-[11.5px] sm:text-[13px] text-[#A1A1AA]/60 max-w-sm mx-auto text-center leading-relaxed mb-7 sm:mb-9">
            Veja relatos reais de quem entrou, testou e comecou a usar os prompts nos criativos.
          </p>
        </FadeIn>

        {/* Carousel */}
        <FadeIn delay={0.15}>
          <div className="relative">
            {/* Desktop arrows - outside overflow-hidden */}
            <button
              onClick={() => { prev(); markInteraction(); }}
              className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 size-9 items-center justify-center rounded-full bg-[#111113]/95 border border-[#2A2A2E]/50 text-white/40 hover:text-white hover:border-[#FF2D55]/40 hover:bg-[#1A1A1E] transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={() => { next(); markInteraction(); }}
              className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 size-9 items-center justify-center rounded-full bg-[#111113]/95 border border-[#2A2A2E]/50 text-white/40 hover:text-white hover:border-[#FF2D55]/40 hover:bg-[#1A1A1E] transition-all"
              aria-label="Proximo"
            >
              <ChevronRight className="size-4" />
            </button>

            {/* Scrollable track */}
            <div
              ref={trackRef}
              onScroll={updateActive}
              onTouchStart={markInteraction}
              onMouseDown={markInteraction}
              className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory overflow-y-hidden"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {images.map((src, i) => (
                <div
                  key={i}
                  className="snap-start flex-shrink-0 w-[90%] sm:w-[47%] lg:w-[31.5%]"
                >
                  <div className="bg-[#111113] rounded-2xl border border-[#222225]/80 p-2 sm:p-2.5 shadow-[0_0_25px_rgba(255,45,85,0.05),0_0_10px_rgba(34,211,238,0.03)]">
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
          <div className="flex items-center justify-center gap-2 mt-5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => { scrollToIdx(i); markInteraction(); }}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIdx
                    ? "w-6 h-2 bg-[#FF2D55]"
                    : "w-2 h-2 bg-white/15 hover:bg-white/30"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.2}>
          <div className="text-center mt-8">
            <a
              href="#planos"
              className="inline-flex items-center justify-center w-[85%] sm:w-auto sm:min-w-[280px] px-8 py-3.5 bg-[#FF2D55] hover:brightness-110 text-white font-extrabold tracking-wide uppercase text-[14px] sm:text-[15px] rounded-full transition-all shadow-lg shadow-[#FF2D55]/25 hover:shadow-xl hover:shadow-[#FF2D55]/35 hover:scale-[1.02] active:scale-[0.98]"
            >
              QUERO ACESSAR AGORA
              <ArrowRight className="ml-2 size-3.5" />
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
