"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { FadeIn } from "./FadeIn";
import { formats } from "./formats-data";
import { TrendingUp, Eye, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

/* ─── Carousel card ─── */
function HeroFormatCard({ item, trendingLabel }: { item: (typeof formats)[0]; trendingLabel: string }) {
  return (
    <div className="flex-shrink-0 w-[48%] sm:w-[30%] md:w-[22%] lg:w-[18%] pr-2 sm:pr-3">
      <div className="bg-[#111113] rounded-2xl border border-[#2A2A2E]/60 overflow-hidden hover:border-[#FF2D55]/25 transition-all duration-300 shadow-[0_0_24px_rgba(255,45,85,0.06)] hover:shadow-[0_0_32px_rgba(255,45,85,0.12)]">
        <div className="relative w-full aspect-[9/16] bg-[#050505] overflow-hidden">
          <video
            src={item.videoSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Badge tag */}
          <div className="absolute top-2 left-2 z-10">
            <span className={`inline-flex items-center gap-1 ${item.badgeColor} text-[8px] sm:text-[9px] font-bold text-white px-1.5 py-0.5 rounded-full border border-white/10`}>
              {item.badge}
            </span>
          </div>
          {/* Em alta tag */}
          {item.trending && (
            <div className="absolute top-2 right-2 z-10">
              <span className="inline-flex items-center gap-1 bg-white/[0.12] backdrop-blur-sm text-[7px] sm:text-[8px] font-bold text-white/90 px-1 py-0.5 rounded-full border border-white/15">
                <TrendingUp className="size-2" />
                {trendingLabel}
              </span>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/40 to-transparent z-[5] pointer-events-none" />
        </div>
        <div className="p-2 sm:p-2.5">
          <h3 className="text-[10px] sm:text-xs font-bold text-[#F4F4F5] leading-tight truncate">
            {item.title}
          </h3>
        </div>
      </div>
    </div>
  );
}

/* ─── Hero Section ─── */
export function Hero() {
  const { t } = useI18n();
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, offset: 0 });

  /* Infinite auto-scroll (faster than original) */
  useEffect(() => {
    let lastTime = performance.now();
    const speed = 38; // px/s — slightly faster than the original 25

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

  /* Touch / swipe handlers for mobile */
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

  const onPointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  /* Smooth scroll to PremiumBonusSection */
  const handleDiscoverClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("como-funciona");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  /* Triple the formats for seamless loop */
  const allItems = [...formats, ...formats, ...formats];

  return (
    <section id="hero" className="bg-[#050505] relative overflow-hidden py-10 sm:py-14 md:py-18 px-0">
      <div className="max-w-2xl mx-auto text-center relative z-10 px-4">
        {/* Platform qualifier */}
        <FadeIn>
          <div className="flex items-center justify-center gap-2.5 mb-5">
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white/90 bg-white/[0.06] border border-white/[0.1] px-3.5 py-1.5 rounded-full">
              <svg className="size-4" viewBox="0 0 24 24" fill="none"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.15V11.7a4.83 4.83 0 01-3.77-1.54V6.69h3.77z" fill="#25F4EE"/><path d="M19.59 6.69a4.83 4.83 0 003.77-1.54V2h-3.77v4.69z" fill="#FE2C55"/><path d="M19.59 6.69a4.83 4.83 0 01-3.77 4.25V11.7a4.83 4.83 0 003.77 1.54V13a8.28 8.28 0 01-5.58-2.15v6.66a6.34 6.34 0 01-10.86-4.46" fill="white" opacity="0.15"/></svg>
              TikTok Shop
            </span>
            <span className="text-xs text-white/20 font-medium">+</span>
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white/90 bg-white/[0.06] border border-white/[0.1] px-3.5 py-1.5 rounded-full">
              <svg className="size-4" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#F97316" opacity="0.8"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#F97316"/></svg>
              Shopee
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="text-xs sm:text-sm text-[#A1A1AA]/50 uppercase tracking-[0.12em] font-semibold mb-4">
            {t("hero.eyebrow")}
          </p>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.15}>
          <h1 className="text-[1.75rem] sm:text-[2.25rem] md:text-[3rem] lg:text-[3.35rem] font-black leading-[1.15] sm:leading-[1.08] tracking-tight text-white">
            {t("hero.headline.pre")} <span className="text-[#FF2D55]">{t("hero.headline.highlight")}</span>{t("hero.headline.post")}
          </h1>
        </FadeIn>

        {/* Subheadline */}
        <FadeIn delay={0.2}>
          <p className="text-sm sm:text-base md:text-lg text-[#C4C4CC] leading-[1.6] mx-auto max-w-lg mt-6">
            <span className="text-[#FF2D55] font-semibold">{t("hero.sub.pre")}</span> {t("hero.sub.mid")}{" "}
            <span className="text-[#FF2D55] font-semibold">{t("hero.sub.highlight")}</span>{t("hero.sub.post")}
          </p>
        </FadeIn>

        <FadeIn delay={0.23}>
          <p className="text-xs sm:text-sm text-[#A1A1AA]/50 mt-2">
            {t("hero.formats")}
          </p>
        </FadeIn>
      </div>

      {/* ─── Video Carousel ─── */}
      <FadeIn delay={0.28}>
        <div className="mt-8 sm:mt-10 relative">
          {/* Badge */}
          <div className="flex justify-center mb-4 relative z-20">
            <div className="flex flex-col items-center bg-black/70 backdrop-blur-sm border border-[#FF2D55]/30 rounded-xl px-4 py-2 shadow-[0_0_16px_rgba(255,45,85,0.15)]">
              <div className="flex items-center gap-1.5">
                <Eye className="size-3.5 text-[#FF2D55]" />
                <span className="text-[10px] sm:text-xs font-bold text-white/90 uppercase tracking-wider leading-none">
                  {t("hero.peekBadge")}
                </span>
              </div>
              <span className="text-[8px] sm:text-[9px] text-[#A1A1AA]/60 leading-none mt-0.5">
                {t("hero.peekSub")}
              </span>
            </div>
          </div>

          {/* Carousel track */}
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
                <HeroFormatCard key={i} item={item} trendingLabel={t("hero.trending")} />
              ))}
            </div>
          </div>

          {/* Fade edges */}
          <div className="absolute top-0 left-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
        </div>
      </FadeIn>

      {/* ─── CTA ─── */}
      <div className="px-4">
        <FadeIn delay={0.35}>
          <div className="mt-10 sm:mt-12 flex flex-col items-center gap-3 max-w-2xl mx-auto">
            <a
              href="#como-funciona"
              onClick={handleDiscoverClick}
              className="inline-flex items-center justify-center w-full sm:w-auto px-10 sm:px-14 py-5 sm:py-6 bg-[#FF2D55] hover:brightness-110 text-white font-extrabold tracking-wide uppercase text-base sm:text-lg rounded-2xl transition-all shadow-lg shadow-[#FF2D55]/25 hover:shadow-[#FF2D55]/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              {t("hero.cta")}
              <ArrowRight className="ml-2.5 size-4" />
            </a>
            <p className="text-sm text-white/40 mt-1">
              {t("hero.ctaSub")}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
