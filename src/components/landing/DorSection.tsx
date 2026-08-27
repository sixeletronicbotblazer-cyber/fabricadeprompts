'use client';

import { AlertTriangle, Shuffle, Bot } from 'lucide-react';
import { FadeIn } from './FadeIn';

const cards = [
  {
    icon: AlertTriangle,
    title: 'Prompt genérico',
    titleHighlight: 'genérico',
    text: 'A IA não entende câmera, cenário, movimento e intenção do vídeo.',
  },
  {
    icon: Shuffle,
    title: 'Produto mudando',
    titleHighlight: 'mudando',
    text: 'Cor, textura, formato e detalhes podem sumir quando o comando não protege a referência.',
  },
  {
    icon: Bot,
    title: 'Vídeo com cara de IA',
    titleHighlight: 'cara de IA',
    text: 'Movimento travado, pele artificial, cenário falso e resultado pouco natural.',
  },
];

function HighlightedTitle({ title, highlight }: { title: string; highlight: string }) {
  const parts = title.split(highlight);
  return (
    <h3 className="text-[13px] sm:text-sm font-bold text-[#F4F4F5] mb-1">
      {parts[0]}<span className="text-[#FF2D55]">{highlight}</span>{parts[1]}
    </h3>
  );
}

export function DorSection() {
  return (
    <section className="bg-[#08080A] py-8 sm:py-10 md:py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <div className="flex justify-center mb-3">
            <span className="text-[9px] sm:text-[10px] font-bold text-[#FF2D55]/80 uppercase tracking-[0.15em] bg-[#FF2D55]/8 border border-[#FF2D55]/12 px-3 py-1 rounded-full">ESSE É O PROBLEMA</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h2 className="text-[1.3rem] sm:text-2xl md:text-[2rem] font-black text-white leading-[1.1] sm:leading-[1.0] mb-2 text-center">
            Hoje não falta <span className="text-[#A1A1AA]">ferramenta</span>. Falta <span className="text-[#FF2D55]">comando certo</span>.
          </h2>
        </FadeIn>

        <FadeIn delay={0.05}>
          <p className="text-[13px] sm:text-sm text-[#A1A1AA]/80 max-w-lg mx-auto mb-5 sm:mb-6 text-center">
            Você pode usar Veo, Flow, Kling, Sora ou qualquer IA. Mas se o prompt
            for fraco, o vídeo sai estranho, genérico ou muda completamente o
            produto.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-[#111113] border-[#2A2A2E]/60 rounded-2xl p-4 sm:p-5 h-full transition-all duration-300 hover:border-[#FF2D55]/15">
                  <div className="size-9 sm:size-10 rounded-xl bg-[#FF2D55]/10 border-[#FF2D55]/15 flex items-center justify-center mb-3">
                    <Icon className="size-4 sm:size-5 text-[#FF2D55]" />
                  </div>
                  <HighlightedTitle title={card.title} highlight={card.titleHighlight} />
                  <p className="text-xs text-[#A1A1AA]/70 leading-relaxed">
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
