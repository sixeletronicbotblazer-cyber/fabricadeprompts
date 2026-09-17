"use client";

import { useEffect, useRef } from "react";
import { FadeIn } from "./FadeIn";
import { TrendingUp } from "lucide-react";

const formats = [
  {
    title: "Transição vinho",
    badge: "Transição",
    badgeColor: "bg-[#FF2D55]",
    trending: true,
    videoSrc: "https://i.imgur.com/1aHrSL9.mp4",
  },
  {
    title: "Modo selfie",
    badge: "UGC",
    badgeColor: "bg-[#25F4EE]",
    trending: true,
    videoSrc: "https://i.imgur.com/SG8jG1h.mp4",
  },
  {
    title: "Transição troca de cor",
    badge: "Transição",
    badgeColor: "bg-[#FF2D55]",
    trending: false,
    videoSrc: "https://i.imgur.com/gAkp33J.mp4",
  },
  {
    title: "Transição manequim",
    badge: "Transição",
    badgeColor: "bg-[#FF2D55]",
    trending: true,
    videoSrc: "https://i.imgur.com/9iUQOS1.mp4",
  },
  {
    title: "Xícara natal",
    badge: "Natal",
    badgeColor: "bg-emerald-500/80",
    trending: false,
    videoSrc: "https://i.imgur.com/7IVUuKG.mp4",
  },
  {
    title: "Gancho óculos",
    badge: "Gancho",
    badgeColor: "bg-amber-500/80",
    trending: true,
    videoSrc: "https://i.imgur.com/hggvZWq.mp4",
  },
  {
    title: "POV produto skincare",
    badge: "POV",
    badgeColor: "bg-[#FF2D55]",
    trending: false,
    videoSrc: "https://i.imgur.com/5pDQS9I.mp4",
  },
  {
    title: "Gancho queimando roupa",
    badge: "Gancho",
    badgeColor: "bg-amber-500/80",
    trending: true,
    videoSrc: "https://i.imgur.com/EesDFmo.mp4",
  },
  {
    title: "Pacote pegando fogo",
    badge: "Gancho",
    badgeColor: "bg-amber-500/80",
    trending: true,
    videoSrc: "https://i.imgur.com/rAfQPdV.mp4",
  },
];

function FormatCard({ item }: { item: (typeof formats)[0] }) {
  return (
    <div className="flex-shrink-0 w-[72%] sm:w-[40%] md:w-[28%] lg:w-[22%] pr-3 sm:pr-4">
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
          <div className="absolute top-2.5 left-2.5 z-10">
            <span className={`inline-flex items-center gap-1 ${item.badgeColor} text-[9px] sm:text-[10px] font-bold text-white px-2 py-0.5 rounded-full border border-white/10`}>
              {item.badge}
            </span>
          </div>
          {item.trending && (
            <div className="absolute top-2.5 right-2.5 z-10">
              <span className="inline-flex items-center gap-1 bg-white/[0.12] backdrop-blur-sm text-[8px] sm:text-[9px] font-bold text-white/90 px-1.5 py-0.5 rounded-full border border-white/15">
                <TrendingUp className="size-2.5" />
                Em alta
              </span>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/40 to-transparent z-[5] pointer-events-none" />
        </div>
        <div className="p-3 sm:p-3.5">
          <h3 className="text-[13px] sm:text-sm font-bold text-[#F4F4F5] leading-tight">
            {item.title}
          </h3>
        </div>
      </div>
    </div>
  );
}

export function FormatosVirais() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    let lastTime = performance.now();
    const speed = 25;

    const animate = (time: number) => {
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

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section id="formatos" className="bg-[#050505] py-10 sm:py-14 md:py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold text-[#FF2D55]/90 uppercase tracking-[0.15em] bg-[#FF2D55]/8 border border-[#FF2D55]/12 px-3.5 py-1 rounded-full">
              FORMATOS VIRAIS VALIDADOS
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h2 className="text-[1.3rem] sm:text-xl md:text-[1.85rem] font-black leading-[1.15] sm:leading-[1.1] text-[#F4F4F5] mb-3 text-center max-w-lg mx-auto">
            Alguns dos formatos que você encontra <span className="text-[#FF2D55]">na biblioteca</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="text-[12px] sm:text-sm text-[#A1A1AA]/60 leading-relaxed mb-8 sm:mb-10 max-w-md mx-auto text-center">
            Todos organizados na biblioteca para você copiar, adaptar para seu produto e criar vídeos com IA.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="overflow-hidden -mx-4 px-4">
            <div
              ref={trackRef}
              className="flex will-change-transform"
              style={{ touchAction: "pan-y" }}
            >
              {[...formats, ...formats].map((item, i) => (
                <FormatCard key={i} item={item} />
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-[12px] sm:text-sm text-[#A1A1AA]/70 text-center mt-6 sm:mt-8 max-w-md mx-auto leading-relaxed">
            Escolha o formato, copie o prompt e adapte para o seu produto. Tudo pronto na biblioteca.
          </p>
        </FadeIn>

        <FadeIn delay={0.18}>
          <p className="text-[11px] sm:text-xs text-[#A1A1AA]/50 text-center mt-3 max-w-md mx-auto leading-relaxed">
            A biblioteca também inclui categorias por nicho, movimento, produto, datas comemorativas e estilos de criativo.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex justify-center mt-5">
            <a
              href="#oferta"
              className="inline-flex items-center justify-center border border-[#25F4EE]/25 bg-[#25F4EE]/5 hover:bg-[#25F4EE]/15 text-[#25F4EE] font-extrabold py-4 px-9 rounded-2xl transition-all text-sm sm:text-base hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wide"
            >
              VER A BIBLIOTECA COMPLETA
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
