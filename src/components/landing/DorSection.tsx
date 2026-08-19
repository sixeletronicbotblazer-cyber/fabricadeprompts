'use client';

import { AlertTriangle, Shuffle, Bot } from 'lucide-react';
import { FadeIn } from './FadeIn';

const cards = [
  {
    icon: AlertTriangle,
    title: 'Prompt genérico',
    text: 'A IA não entende câmera, cenário, movimento e intenção do vídeo.',
  },
  {
    icon: Shuffle,
    title: 'Produto mudando',
    text: 'Cor, textura, formato e detalhes podem sumir quando o comando não protege a referência.',
  },
  {
    icon: Bot,
    title: 'Vídeo com cara de IA',
    text: 'Movimento travado, pele artificial, cenário falso e resultado pouco natural.',
  },
];

export function DorSection() {
  return (
    <section className="bg-[#0D0D0D] py-10 md:py-14 px-4">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight mb-2 text-center">
            Hoje não falta ferramenta. Falta comando certo.
          </h2>
        </FadeIn>

        <FadeIn delay={0.05}>
          <p className="text-sm text-white/45 max-w-lg mx-auto mb-8 text-center">
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
                <div className="bg-[#1A1A1A] border border-white/[0.06] rounded-2xl p-5 h-full">
                  <div className="size-10 rounded-xl bg-[#FE2C55]/10 border border-[#FE2C55]/15 flex items-center justify-center mb-3">
                    <Icon className="size-5 text-[#FE2C55]" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs text-white/40 leading-relaxed">
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
