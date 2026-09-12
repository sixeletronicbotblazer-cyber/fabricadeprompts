"use client";

import { useEffect, useRef, useCallback } from "react";
import { Play } from "lucide-react";
import { FadeIn } from "./FadeIn";

const formats = [
  {
    title: "Dancinha",
    description: "O formato que chama atenção e ajuda a gerar alcance.",
    badge: "Viral",
    badgeColor: "bg-[#FF2D55]",
    videoSrc: "/images/formato-dancinha.mp4",
  },
  {
    title: "Movimento",
    description: "Modelo girando, mostrando caimento e detalhes da peça.",
    badge: "UGC",
    badgeColor: "bg-[#25F4EE]",
    videoSrc: "/images/formato-movimento.mp4",
  },
  {
    title: "Formato POV",
    description: "Mãos mostrando produto, peça ou detalhe sem precisar aparecer.",
    badge: "POV",
    badgeColor: "bg-[#FF2D55]",
    videoSrc: "/images/formato-pov.mp4",
  },
  {
    title: "Manequim",
    description: "Produto apresentado de forma limpa, visual e direta.",
    badge: "Produto",
    badgeColor: "bg-[#25F4EE]",
    videoSrc: "/images/formato-manequim.mp4",
  },
  {
    title: "Fábrica",
    description: "Cena mostrando produção, embalagem ou bastidores do produto.",
    badge: "Bastidor",
    badgeColor: "bg-[#FF2D55]",
    videoSrc: "/images/formato-fabrica.mp4",
  },
  {
    title: "Boneco",
    description: "Formato visual diferente para prender atenção no feed.",
    badge: "Criativo",
    badgeColor: "bg-[#25F4EE]",
    videoSrc: "/images/formato-boneco.mp4",
  },
];

const CHECKOUT_URL = "https://checkout.perfectpay.com.br/pay/PPU38CQFUC3";

function FormatCard({ item }: { item: (typeof formats)[0] }) {
  return (
    <div className="flex-shrink-0 w-[78%] sm:w-[45%] md:w-[30%] lg:w-[24%] pr-3 sm:pr-4">
      <div className="bg-[#111113] rounded-2xl border border-[#2A2A2E]/60 overflow-hidden hover:border-[#FF2D55]/20 transition-colors duration-300 shadow-[0_0_20px_rgba(255,45,85,0.04)]">
        <div className="relative w-full aspect-[9/16] bg-[#050505] overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <div className="size-12 rounded-full bg-[#FF2D55]/10 border border-[#FF2D55]/20 flex items-center justify-center">
              <Play className="size-5 text-[#FF2D55]/60 ml-0.5" fill="currentColor" />
            </div>
            <span className="text-[9px] text-[#A1A1AA]/30 text-center px-4 leading-tight">
              Adicionar vídeo {item.title} aqui
            </span>
          </div>
          <div className="absolute top-2.5 left-2.5 z-10">
            <span className={`inline-flex items-center gap-1 ${item.badgeColor} text-[9px] sm:text-[10px] font-bold text-white px-2 py-0.5 rounded-full border border-white/10`}>
              {item.badge}
            </span>
          </div>
        </div>
        <div className="p-3 sm:p-3.5">
          <h3 className="text-[13px] sm:text-sm font-bold text-[#F4F4F5] leading-tight mb-0.5">
            {item.title}
          </h3>
          <p className="text-[10px] sm:text-[11px] text-[#A1A1AA]/60 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FormatosVirais() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);
  const pausedRef = useRef(false);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    let lastTime = performance.now();
    const speed = 25;

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
    <section className="bg-[#050505] py-8 sm:py-10 md:py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex justify-center mb-3">
            <span className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold text-[#FF2D55]/90 uppercase tracking-[0.15em] bg-[#FF2D55]/8 border border-[#FF2D55]/12 px-3.5 py-1 rounded-full">
              FORMATOS VIRAIS VALIDADOS
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h2 className="text-[1.2rem] sm:text-xl md:text-[1.75rem] font-black leading-[1.1] sm:leading-[1.0] text-[#F4F4F5] mb-2 text-center max-w-lg mx-auto">
            Os formatos de vídeo com IA mais <span className="text-[#FF2D55]">virais</span> para vender no TikTok Shop
          </h2>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="text-[12px] sm:text-sm text-[#A1A1AA]/60 leading-relaxed mb-6 sm:mb-8 max-w-md mx-auto text-center">
            Veja alguns dos formatos que você encontra dentro da Biblioteca Premium + Academy para copiar, adaptar e transformar em criativos com IA.
          </p>
        </FadeIn>

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
              {[...formats, ...formats].map((item, i) => (
                <FormatCard key={i} item={item} />
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-[12px] sm:text-sm text-[#A1A1AA]/70 text-center mt-6 sm:mt-8 max-w-md mx-auto leading-relaxed">
            Você não precisa começar do zero. Escolha um formato, copie o prompt e adapte para o seu produto.
          </p>
        </FadeIn>

        <FadeIn delay={0.18}>
          <p className="text-[11px] sm:text-xs text-[#A1A1AA]/50 text-center mt-3 max-w-md mx-auto leading-relaxed">
            Esses são apenas alguns exemplos. A biblioteca também inclui categorias por nicho, movimento, produto, datas e estilos de criativo.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex justify-center mt-5">
            <a
              href={CHECKOUT_URL}
              onClick={() => { (window as any).trackCheckout?.('Vitalicio', 49.90); }}
              className="inline-flex items-center justify-center bg-[#FF2D55] hover:brightness-110 text-white font-extrabold py-3.5 px-8 rounded-2xl transition-all text-sm sm:text-base shadow-lg shadow-[#FF2D55]/25 hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wide"
            >
              QUERO ACESSAR A BIBLIOTECA
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
