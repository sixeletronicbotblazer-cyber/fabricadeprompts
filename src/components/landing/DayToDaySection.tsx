'use client';

import { Copy, Layers, FolderOpen, Compass } from 'lucide-react';
import { FadeIn } from './FadeIn';

const cards = [
  {
    icon: Copy,
    title: 'Você para de começar do zero',
    text: 'Abra o app, escolha uma categoria e copie um prompt pronto para adaptar ao seu produto.',
  },
  {
    icon: Layers,
    title: 'Você testa mais variações',
    text: 'Crie versões em Modelo, POV, Selfie, Produto, Unboxing, Loja e Review sem depender de uma única ideia.',
  },
  {
    icon: FolderOpen,
    title: 'Você organiza seu fluxo criativo',
    text: 'Em vez de salvar comandos soltos, você acessa tudo separado por tipo de vídeo e objetivo.',
  },
  {
    icon: Compass,
    title: 'Você cria com mais direção',
    text: 'Cada prompt já indica o estilo da cena, câmera, movimento, ambiente e cuidados com o produto.',
  },
];

export function DayToDaySection() {
  return (
    <section className="bg-black py-10 md:py-14 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight mb-8 text-center">
            O que muda no seu dia a dia com o Motion Prompts?
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="bg-[#1A1A1A] border border-white/[0.06] rounded-2xl p-5 h-full">
                  <div className="size-10 rounded-xl bg-[#25F4EE]/10 border border-[#25F4EE]/15 flex items-center justify-center mb-3">
                    <Icon className="size-5 text-[#25F4EE]" />
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
