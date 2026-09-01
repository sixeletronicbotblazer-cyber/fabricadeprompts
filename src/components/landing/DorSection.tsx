'use client';

import { AlertTriangle, Shuffle, Bot } from 'lucide-react';
import { FadeIn } from './FadeIn';

const cards = [
  {
    icon: AlertTriangle,
    title: 'Prompt generico',
    titleHighlight: 'generico',
    text: 'A IA nao entende camera, cenario, movimento e intencao do video.',
  },
  {
    icon: Shuffle,
    title: 'Produto mudando',
    titleHighlight: 'mudando',
    text: 'Cor, textura, formato e detalhes podem sumir quando o comando nao protege a referencia.',
  },
  {
    icon: Bot,
    title: 'Video com cara de IA',
    titleHighlight: 'cara de IA',
    text: 'Movimento travado, pele artificial, cenario falso e resultado pouco natural.',
  },
];

function HighlightedTitle({ title, highlight }: { title: string; highlight: string }) {
  const parts = title.split(highlight);
  return (
    <h3 className="text-[13px] sm:text-sm font-bold text-[#F4F4F6] mb-1">
      {parts[0]}<span className="text-[#EC4899]">{highlight}</span>{parts[1]}
    </h3>
  );
}

export function DorSection() {
  return (
    <section className="bg-[#09090D] py-8 sm:py-10 md:py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <div className="flex justify-center mb-3">
            <span className="text-[9px] sm:text-[10px] font-bold text-[#EC4899]/80 uppercase tracking-[0.15em] bg-[#EC4899]/8 border border-[#EC4899]/12 px-3 py-1 rounded-full">ESSE E O PROBLEMA</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h2 className="text-[1.3rem] sm:text-2xl md:text-[2rem] font-black text-white leading-[1.1] sm:leading-[1.0] mb-2 text-center">
            Hoje nao falta <span className="text-[#A7A7B2]">ferramenta</span>. Falta <span className="text-[#7C3AED]">comando certo</span>.
          </h2>
        </FadeIn>

        <FadeIn delay={0.05}>
          <p className="text-[13px] sm:text-sm text-[#A7A7B2]/80 max-w-lg mx-auto mb-5 sm:mb-6 text-center">
            Voce pode usar Veo, Flow, Kling, Sora ou qualquer IA. Mas se o prompt
            for fraco, o video sai estranho, generico ou muda completamente o
            produto.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-[#111118] border border-white/[0.08] rounded-[18px] p-4 sm:p-5 h-full transition-colors duration-300 hover:border-[#7C3AED]/20">
                  <div className="size-9 sm:size-10 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/12 flex items-center justify-center mb-3">
                    <Icon className="size-4 sm:size-5 text-[#7C3AED]" />
                  </div>
                  <HighlightedTitle title={card.title} highlight={card.titleHighlight} />
                  <p className="text-xs text-[#A7A7B2]/70 leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
