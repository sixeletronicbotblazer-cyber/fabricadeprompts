"use client";

import { FadeIn } from "./FadeIn";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Criativos em teste",
    text: "Variacoes sendo criadas para testar novos angulos.",
    image: "/images/proof-jan-fev.png",
    alt: "Dados de Janeiro e Fevereiro no TikTok Shop",
  },
  {
    title: "Aplicacao no TikTok",
    text: "Prints e bastidores de videos sendo usados na pratica.",
    image: "/images/proof-jun.png",
    alt: "Dados de Junho no TikTok Shop",
  },
  {
    title: "Mais velocidade",
    text: "Menos tempo criando do zero e mais tempo testando criativos.",
    image: "/images/app-preview.jpeg",
    alt: "Plataforma de prompts Motion Prompts",
  },
];

export function ResultsProofsSection() {
  return (
    <section className="bg-[#08080A] py-10 sm:py-14 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <FadeIn>
          <h2 className="text-[1.2rem] sm:text-2xl lg:text-[1.7rem] font-extrabold text-[#F4F4F5] leading-[1.15] sm:leading-[1.15] text-center max-w-md sm:max-w-lg mx-auto mb-2">
            Quem usa esse mecanismo, consegue{" "}
            <span className="text-[#FF2D55]">testar mais criativos</span>
          </h2>
        </FadeIn>

        {/* Subheadline */}
        <FadeIn delay={0.05}>
          <p className="text-[12px] sm:text-sm text-[#A1A1AA]/70 max-w-md mx-auto text-center leading-relaxed mb-2">
            Com os prompts certos, fica mais facil sair do zero, criar variacoes e testar mais videos para TikTok Shop.
          </p>
        </FadeIn>

        {/* Support paragraph */}
        <FadeIn delay={0.08}>
          <p className="text-[11px] sm:text-xs text-[#A1A1AA]/50 max-w-md mx-auto text-center leading-relaxed mb-7 sm:mb-10">
            A ideia nao e depender de sorte ou tentar inventar tudo sozinho. O metodo ajuda voce a ter direcao para criar, copiar, adaptar e testar diferentes formatos de criativo.
          </p>
        </FadeIn>

        {/* Cards grid - stacked on mobile, 3 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {cards.map((card, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.08}>
              <div className="bg-[#111113] rounded-2xl border border-[#2A2A2E]/50 overflow-hidden shadow-[0_0_20px_rgba(255,45,85,0.04),0_0_10px_rgba(34,211,238,0.02)]">
                <div className="p-2.5 sm:p-3">
                  <img
                    src={card.image}
                    alt={card.alt}
                    loading="lazy"
                    className="w-full h-auto object-contain rounded-xl"
                    draggable={false}
                  />
                </div>
                <div className="px-4 pb-4 pt-1">
                  <h3 className="text-[13px] sm:text-sm font-bold text-[#F4F4F5] mb-1">
                    {card.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#A1A1AA]/60 leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.3}>
          <div className="text-center mt-8 sm:mt-10">
            <a
              href="#planos"
              className="inline-flex items-center justify-center w-[75%] sm:w-auto sm:min-w-[260px] px-7 py-3 bg-[#FF2D55] hover:brightness-110 text-white font-extrabold tracking-wide uppercase text-[13px] sm:text-[14px] rounded-full transition-all shadow-lg shadow-[#FF2D55]/25 hover:shadow-xl hover:shadow-[#FF2D55]/35 hover:scale-[1.02] active:scale-[0.98]"
            >
              QUERO ACESSAR OS PROMPTS
              <ArrowRight className="ml-2 size-3.5" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
