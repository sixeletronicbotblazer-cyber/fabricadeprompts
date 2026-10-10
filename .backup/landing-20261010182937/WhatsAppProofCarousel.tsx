"use client";

import { useEffect, useRef, useCallback } from "react";
import { FadeIn } from "./FadeIn";
import { useI18n } from "@/lib/i18n/context";
import { getSocialProofs, shouldShowSocialProof } from "@/lib/i18n/social-proof";

export function WhatsAppProofCarousel() {
  const { locale, t } = useI18n();
  const show = shouldShowSocialProof(locale);
  const images = getSocialProofs(locale);

  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);
  const pausedRef = useRef(false);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (!show) return;
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
  }, [show]);

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

  // Hide section entirely for EN
  if (!show) return null;

  return (
    <section className="bg-[#0D0D10] pt-4 pb-8 sm:pt-5 sm:pb-10">
      <div className="max-w-5xl mx-auto px-4">

        {/* Badge */}
        <FadeIn>
          <div className="flex justify-center mb-2">
            <span className="text-[9px] sm:text-[10px] font-bold text-[#FF2D55]/90 uppercase tracking-[0.18em] bg-[#FF2D55]/8 border border-[#FF2D55]/15 px-3.5 py-1 rounded-full">
              {t("whatsapp.badge")}
            </span>
          </div>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={0.05}>
          <h2 className="text-[1.15rem] sm:text-2xl lg:text-[1.6rem] font-extrabold text-[#F4F4F5] leading-[1.15] sm:leading-[1.2] text-center max-w-md sm:max-w-lg mx-auto mb-1.5">
            {t("whatsapp.headline.pre")}{" "}
            <span className="text-[#FF2D55]">{t("whatsapp.headline.highlight")}</span>
          </h2>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.05}>
          <p className="text-[11px] sm:text-[13px] text-[#A1A1AA]/60 max-w-sm mx-auto text-center leading-relaxed mb-6 sm:mb-8">
            {t("whatsapp.sub")}
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
              {[...images, ...images].map((img, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[92%] sm:w-[47%] lg:w-[31.5%] pr-3 sm:pr-4"
                >
                  <div className="bg-[#111113] rounded-2xl border border-[#2A2A2E]/60 p-2 sm:p-2.5">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading={i < 2 ? "eager" : "lazy"}
                      className="w-full h-auto object-contain rounded-2xl"
                      draggable={false}
                    />
                    {/* Tag for ES images */}
                    {img.tag && (
                      <div className="mt-2 text-center">
                        <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-bold text-[#FF2D55]/90 uppercase tracking-wider bg-[#FF2D55]/8 border border-[#FF2D55]/15 px-2.5 py-0.5 rounded-full">
                          {img.tag}
                        </span>
                      </div>
                    )}
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
