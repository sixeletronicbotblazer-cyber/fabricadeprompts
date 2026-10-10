"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FadeIn } from "./FadeIn";

const proofImages = [
  { src: "/images/prova_social_whatsapp_01.png", alt: "Prova social WhatsApp 1" },
  { src: "/images/prova_social_whatsapp_02.png", alt: "Prova social WhatsApp 2" },
  { src: "/images/prova_social_whatsapp_03.png", alt: "Prova social WhatsApp 3" },
  { src: "/images/prova_social_whatsapp_04.png", alt: "Prova social WhatsApp 4" },
];

export function WhatsAppProofCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let lastTime = performance.now();
    const speed = 30;

    const animate = (time: number) => {
      if (!isPaused) {
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
  }, [isPaused]);

  const allImages = [...proofImages, ...proofImages];

  return (
    <section id="provas" className="py-16 md:py-20 bg-[#101114]">
      <div className="max-w-[920px] mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-[690px] mx-auto mb-8">
            <span className="inline-flex items-center border border-[#3c1c27] bg-[#160e12] text-[#FA2D62] text-[10px] font-black tracking-[0.15em] uppercase px-3.5 py-2 rounded-[40px]">
              Provas e dúvidas reais
            </span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(29px,3.8vw,43px)] leading-[1.12] tracking-[-0.055em] mt-4 mb-3">
              Veja o que as pessoas perguntam{" "}
              <span className="text-[#FA2D62]">antes e depois de acessar.</span>
            </h2>
            <p className="text-[#A7A7B1] text-sm leading-relaxed">
              Conversas reais de quem já acessou a biblioteca.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <div ref={trackRef} className="flex gap-3 will-change-transform" style={{ width: "max-content" }}>
              {allImages.map((img, i) => (
                <div key={i} className="flex-shrink-0 w-[280px] md:w-[320px]">
                  <div className="bg-[#111215] border border-[#292a30] rounded-[13px] overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={320}
                      height={400}
                      className="w-full h-auto object-cover"
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
