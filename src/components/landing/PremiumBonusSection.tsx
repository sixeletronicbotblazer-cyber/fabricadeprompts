"use client";

import { Eye, Filter, Play, ClipboardCopy } from "lucide-react";
import { FadeIn } from "./FadeIn";

const benefitCards = [
  {
    icon: Eye,
    title: "Visual primeiro",
    text: "Veja a referência antes de copiar o comando.",
  },
  {
    icon: Filter,
    title: "Categorias prontas",
    text: "Filtre por Vídeo, UGC, POV, Selfie, Produto, Roupas e muito mais.",
  },
  {
    icon: Play,
    title: "Preview do criativo",
    text: "Abra o card e entenda o tipo de cena antes de usar.",
  },
  {
    icon: ClipboardCopy,
    title: "Copiar prompt",
    text: "Copie o comando em poucos segundos e adapte para seu produto.",
  },
];

export function PremiumBonusSection() {
  return (
    <section className="relative bg-[#0D0D10] py-8 sm:py-10 md:py-12 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Badge */}
        <FadeIn>
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-1.5 bg-white/[0.04] text-[#C4C4CC] text-[10px] sm:text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border border-[#2A2A2E]/60">
              VEJA POR DENTRO
            </span>
          </div>
        </FadeIn>

        {/* Content grid: text left, video right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Text side */}
          <div className="order-1 md:order-1">
            <FadeIn delay={0.05}>
              <h2 className="text-[1.3rem] sm:text-2xl md:text-[1.75rem] font-black leading-[1.1] text-[#F4F4F5] mb-3">
                Escolha uma referência. Abra o prompt.{' '}
                <span className="text-[#FF2D55]">Copie em segundos.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-sm text-[#A1A1AA]/70 leading-relaxed mb-5 max-w-md">
                Dentro da Galeria Premium, você navega por ideias visuais, filtra por categoria, abre a prévia do criativo e copia o prompt pronto para adaptar no seu produto.
              </p>
            </FadeIn>

            {/* 4 benefit cards */}
            <div className="grid grid-cols-2 gap-2.5 mb-5">
              {benefitCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <FadeIn key={card.title} delay={0.15 + i * 0.05}>
                    <div className="bg-[#111113]/80 backdrop-blur-sm rounded-xl border border-[#2A2A2E]/50 p-3 sm:p-3.5">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="size-7 rounded-lg bg-[#FF2D55]/10 border border-[#FF2D55]/15 flex items-center justify-center shrink-0">
                          <Icon className="size-3.5 text-[#FF2D55]" />
                        </div>
                        <h4 className="text-xs sm:text-[13px] font-bold text-[#F4F4F5] leading-tight">
                          {card.title}
                        </h4>
                      </div>
                      <p className="text-[11px] text-[#A1A1AA]/60 leading-relaxed">
                        {card.text}
                      </p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

            {/* Microcopy */}
            <FadeIn delay={0.35}>
              <p className="text-xs text-[#A1A1AA]/50 mb-4">
                Disponível como bônus especial no acesso vitalício.
              </p>
            </FadeIn>

            {/* CTA */}
            <FadeIn delay={0.4}>
              <a
                href="#planos"
                className="inline-flex items-center justify-center bg-[#FF2D55] hover:brightness-110 text-white font-extrabold py-3.5 px-8 rounded-full transition-all text-sm sm:text-base shadow-lg shadow-[#FF2D55]/25 hover:shadow-xl hover:shadow-[#FF2D55]/35 hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wide"
              >
                QUERO VER A GALERIA
              </a>
            </FadeIn>
          </div>

          {/* Video side, premium mockup */}
          <div className="order-2 md:order-2">
            <FadeIn delay={0.15}>
              <div className="relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-[#2A2A2E]/60 shadow-[0_0_30px_rgba(168,85,247,0.08),0_0_60px_rgba(255,45,85,0.06),0_0_40px_rgba(34,211,238,0.04)]">
                {/* Browser chrome */}
                <div className="absolute top-0 left-0 right-0 h-9 bg-gradient-to-b from-white/[0.04] to-transparent z-10" />
                <div className="absolute top-2.5 left-3.5 flex gap-1.5 z-20">
                  <div className="size-2.5 rounded-full bg-[#FF2D55]/40" />
                  <div className="size-2.5 rounded-full bg-amber-400/40" />
                  <div className="size-2.5 rounded-full bg-emerald-400/40" />
                </div>
                <div className="absolute top-2.5 left-14 sm:left-16 right-10 z-20 hidden sm:block">
                  <div className="bg-white/[0.03] border border-[#2A2A2E]/50 rounded-md h-5 flex items-center px-2.5">
                    <span className="text-[9px] text-[#A1A1AA]/40 font-medium">galeria.motionprompts.com</span>
                  </div>
                </div>

                {/* Video */}
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full aspect-video object-cover block"
                  poster="/images/galeria-premium-bonus.png"
                >
                  <source src="/images/galeria-premium-demo.mp4" type="video/mp4" />
                </video>

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0D0D10]/70 to-transparent z-10 pointer-events-none" />
              </div>
            </FadeIn>

            {/* Sub-video phrase */}
            <FadeIn delay={0.25}>
              <p className="mt-3 text-center md:text-left text-[11px] sm:text-xs text-[#A1A1AA]/45 leading-relaxed">
                É como ter um acervo visual de criativos pronto para consultar sempre que faltar ideia.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
