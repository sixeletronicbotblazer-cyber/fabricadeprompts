"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { FadeIn } from "./FadeIn";
import { formats } from "./formats-data";
import { Eye, ArrowRight } from "lucide-react";

/* ─── Carousel card ─── */
function HeroFormatCard({ item }: { item: (typeof formats)[0] }) {
  return (
    <div className="flex-shrink-0 w-[48%] sm:w-[30%] md:w-[22%] lg:w-[18%] pr-2 sm:pr-3">
      <div className="bg-[#141519] rounded-2xl border border-[#27272E]/60 overflow-hidden hover:border-[#FA2D62]/25 transition-all duration-300 shadow-[0_0_24px_rgba(250,45,98,0.06)] hover:shadow-[0_0_32px_rgba(250,45,98,0.12)]">
        <div className="relative w-full aspect-[9/16] bg-[#060607] overflow-hidden">
          <video
            src={item.videoSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-2 left-2 z-10">
            <span className={`inline-flex items-center gap-1 ${item.badgeColor} text-[8px] sm:text-[9px] font-bold text-white px-1.5 py-0.5 rounded-full border border-white/10`}>
              {item.badge}
            </span>
          </div>
          {item.trending && (
            <div className="absolute top-2 right-2 z-10">
              <span className="inline-flex items-center gap-1 bg-white/[0.12] backdrop-blur-sm text-[7px] sm:text-[8px] font-bold text-white/90 px-1 py-0.5 rounded-full border border-white/15">
                🔥 Em alta
              </span>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/40 to-transparent z-[5] pointer-events-none" />
        </div>
        <div className="p-2 sm:p-2.5">
          <h3 className="text-[10px] sm:text-xs font-bold text-white leading-tight truncate">
            {item.title}
          </h3>
        </div>
      </div>
    </div>
  );
}

/* ─── Hero Section ─── */
export function Hero() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, offset: 0 });

  /* Infinite auto-scroll */
  useEffect(() => {
    let lastTime = performance.now();
    const speed = 38;

    const animate = (time: number) => {
      if (!isDragging) {
        const delta = (time - lastTime) / 1000;
        lastTime = time;
        if (trackRef.current) {
          offsetRef.current += speed * delta;
          const halfWidth = trackRef.current.scrollWidth / 2;
          if (halfWidth > 0 && offsetRef.current >= halfWidth) {
            offsetRef.current -= halfWidth;
          }
          trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
        }
      } else {
        lastTime = time;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isDragging]);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, offset: offsetRef.current };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = dragStartRef.current.x - e.clientX;
    offsetRef.current = dragStartRef.current.offset + dx;
    if (trackRef.current) {
      const halfWidth = trackRef.current.scrollWidth / 2;
      if (halfWidth > 0) {
        while (offsetRef.current >= halfWidth) offsetRef.current -= halfWidth;
        while (offsetRef.current < 0) offsetRef.current += halfWidth;
      }
      trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
    }
  }, [isDragging]);

  const onPointerUp = useCallback(() => setIsDragging(false), []);

  const handleDiscoverClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("como-funciona");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const allItems = [...formats, ...formats, ...formats];

  return (
    <section id="hero" className="bg-[#060607] relative overflow-hidden pt-10 sm:pt-14 md:pt-[43px] px-0">
      <div className="max-w-[780px] mx-auto text-center relative z-10 px-6">
        {/* Eyebrow */}
        <FadeIn>
          <span className="inline-flex items-center border border-[#3c1c27] bg-[#160e12] text-[#FA2D62] text-[10px] font-black tracking-[0.15em] uppercase px-3.5 py-2 rounded-[40px]">
            A biblioteca para seus próximos vídeos
          </span>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.08}>
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(39px,5vw,67px)] leading-[1.05] tracking-[-0.055em] font-bold mt-5 mb-3.5 text-white">
            Seu próximo vídeo <span className="text-[#FA2D62]">não precisa começar do zero.</span>
          </h1>
        </FadeIn>

        {/* Subheadline */}
        <FadeIn delay={0.15}>
          <p className="max-w-[660px] mx-auto text-base text-[#b2b2bb] leading-[1.56] mb-4">
            Veja o formato, copie o prompt e adapte ao seu produto.{" "}
            <strong className="text-white">Uma biblioteca com mais de 500 prompts</strong> para criar vídeos com IA sem ficar travado na ideia.
          </p>
        </FadeIn>

        {/* Micro-benefits kickers */}
        <FadeIn delay={0.18}>
          <div className="flex items-center justify-center gap-3 flex-wrap text-[11px] text-[#858592]">
            <strong className="text-[#dadade]">✓ POV</strong>
            <strong className="text-[#dadade]">✓ Selfie UGC</strong>
            <strong className="text-[#dadade]">✓ Faceless</strong>
            <strong className="text-[#dadade]">✓ Ganchos</strong>
            <strong className="text-[#dadade]">✓ Produto</strong>
          </div>
        </FadeIn>

        {/* Price at top */}
        <FadeIn delay={0.2}>
          <p className="text-sm text-[#dbdbe0] mt-4">
            <span className="text-[#85858f] line-through mr-1.5">R$47,90</span>
            <strong className="text-2xl text-white font-black">R$29,90</strong> • vitalício
          </p>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.25}>
          <a
            href="#como-funciona"
            onClick={handleDiscoverClick}
            className="inline-flex items-center justify-center gap-3 bg-[#FA2D62] text-white px-7 py-4 rounded-[10px] text-[13px] font-black shadow-[0_15px_32px_rgba(250,45,98,0.18)] hover:translate-y-[-2px] hover:brightness-110 transition-all duration-200 mt-4"
          >
            QUERO VER COMO FUNCIONA →
          </a>
          <p className="text-[11px] text-[#7e7d87] mt-2.5">
            Prévia real dos formatos • Acesso no celular, tablet e computador
          </p>
        </FadeIn>
      </div>

      {/* ─── Video Carousel ─── */}
      <FadeIn delay={0.3}>
        <div className="mt-8 sm:mt-10 relative">
          <div className="flex justify-center mb-4 relative z-20">
            <div className="flex flex-col items-center bg-black/70 backdrop-blur-sm border border-[#FA2D62]/30 rounded-xl px-4 py-2 shadow-[0_0_16px_rgba(250,45,98,0.15)]">
              <div className="flex items-center gap-1.5">
                <Eye className="size-3.5 text-[#FA2D62]" />
                <span className="text-[10px] sm:text-xs font-bold text-white/90 uppercase tracking-wider leading-none">
                  VEJA POR DENTRO
                </span>
              </div>
              <span className="text-[8px] sm:text-[9px] text-[#A7A7B1]/60 leading-none mt-0.5">
                Biblioteca de prompts
              </span>
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex will-change-transform cursor-grab active:cursor-grabbing"
              style={{ touchAction: "pan-y" }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
            >
              {allItems.map((item, i) => (
                <HeroFormatCard key={i} item={item} />
              ))}
            </div>
          </div>

          <div className="absolute top-0 left-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#060607] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#060607] to-transparent z-10 pointer-events-none" />
        </div>
      </FadeIn>
    </section>
  );
}
