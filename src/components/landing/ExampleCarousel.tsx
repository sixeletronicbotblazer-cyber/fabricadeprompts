"use client";

import { FadeIn } from "./FadeIn";
import { Heart, MessageCircle, Bookmark, Share2 } from "lucide-react";

type ExampleCard = {
  badge: string;
  badgeColor: string;
  label: string;
  caption: string;
  image: string;
};

const cards: ExampleCard[] = [
  {
    badge: "Prompt aplicado",
    badgeColor: "bg-[#25F4EE]/20 text-[#25F4EE]",
    label: "Modelo IA",
    caption: "Look no corpo sem gravar",
    image: "/images/placeholder-modelo.webp",
  },
  {
    badge: "Modo POV",
    badgeColor: "bg-[#FE2C55]/20 text-[#FE2C55]",
    label: "POV Produto",
    caption: "Produto na mão com aparência UGC",
    image: "/images/placeholder-pov.webp",
  },
  {
    badge: "Modo Selfie",
    badgeColor: "bg-purple-500/20 text-purple-400",
    label: "Selfie UGC",
    caption: "Vídeo no espelho com IA",
    image: "/images/placeholder-selfie.webp",
  },
  {
    badge: "Imagem + produto",
    badgeColor: "bg-amber-500/20 text-amber-400",
    label: "Troca de roupa",
    caption: "Aplique a peça na modelo",
    image: "/images/placeholder-troca.webp",
  },
  {
    badge: "Vídeo pronto",
    badgeColor: "bg-emerald-500/20 text-emerald-400",
    label: "Movimento natural",
    caption: "Pose, caimento e movimento",
    image: "/images/placeholder-movimento.webp",
  },
  {
    badge: "TikTok Shop",
    badgeColor: "bg-[#25F4EE]/20 text-[#25F4EE]",
    label: "Criativo de venda",
    caption: "Formato pronto para testar",
    image: "/images/placeholder-criativo.webp",
  },
];

function Card({ card }: { card: ExampleCard }) {
  return (
    <div className="flex-shrink-0 w-[160px] sm:w-[200px] lg:w-[220px]">
      <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-[#111] shadow-lg shadow-black/40 group">
        {/* Placeholder bg until images arrive */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-black/40" />

        {/* Top overlay */}
        <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-black/70 to-transparent z-10" />
        {/* Bottom overlay */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 to-transparent z-10" />

        {/* Badge top-left */}
        <div className="absolute top-3 left-3 z-20">
          <span className={`inline-block text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full ${card.badgeColor} backdrop-blur-sm`}>
            {card.badge}
          </span>
        </div>

        {/* Label top-right */}
        <div className="absolute top-3 right-3 z-20">
          <span className="text-[9px] font-semibold text-white/50 bg-black/40 backdrop-blur-sm px-1.5 py-0.5 rounded">
            {card.label}
          </span>
        </div>

        {/* Side icons (TikTok-style) */}
        <div className="absolute right-2.5 bottom-16 z-20 flex flex-col items-center gap-4">
          <button className="flex flex-col items-center gap-0.5" aria-label="Curtir">
            <Heart className="size-5 text-white" />
          </button>
          <button className="flex flex-col items-center gap-0.5" aria-label="Comentar">
            <MessageCircle className="size-5 text-white" />
          </button>
          <button className="flex flex-col items-center gap-0.5" aria-label="Salvar">
            <Bookmark className="size-5 text-white" />
          </button>
          <button className="flex flex-col items-center gap-0.5" aria-label="Compartilhar">
            <Share2 className="size-5 text-white" />
          </button>
        </div>

        {/* Caption bottom */}
        <div className="absolute bottom-3 left-3 right-10 z-20">
          <p className="text-[10px] sm:text-[11px] text-white/80 leading-snug">
            {card.caption}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ExampleCarousel() {
  return (
    <section className="bg-black py-10 md:py-14 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 mb-8 text-center">
        <FadeIn>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight mb-2">
            Veja o que dá para criar com os prompts
          </h2>
          <p className="text-sm text-white/45 max-w-md mx-auto">
            Exemplos de vídeos no formato TikTok Shop usando os modos Modelo, POV e Selfie.
          </p>
        </FadeIn>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        <div className="flex animate-scroll-left-slow">
          {[...cards, ...cards, ...cards].map((card, i) => (
            <div key={i} className="mx-2">
              <Card card={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
