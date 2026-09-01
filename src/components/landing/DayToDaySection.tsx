'use client';

import { Copy, Layers, FolderOpen, Compass } from 'lucide-react';
import { FadeIn } from './FadeIn';

const cards = [
  { icon: Copy, title: 'Você para de começar do zero', text: 'Abra o app, escolha uma categoria e copie um prompt pronto para adaptar ao seu produto.', },
  { icon: Layers, title: 'Você testa mais variações', text: 'Crie versões em Modelo, POV, Selfie, Produto, Unboxing, Loja e Review sem depender de uma única ideia.', },
  { icon: FolderOpen, title: 'Você organiza seu fluxo criativo', text: 'Em vez de salvar comandos soltos, você acessa tudo separado por tipo de vídeo e objetivo.', },
  { icon: Compass, title: 'Você cria com mais direção', text: 'Cada prompt já indica o estilo da cena, câmera, movimento, ambiente e cuidados com o produto.', },
];

export function DayToDaySection() {
  return (
    <section className="bg-[#09090D] py-10 sm:py-14 md:py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-[1.3rem] sm:text-2xl md:text-[2rem] font-black text-white leading-[1.1] sm:leading-[1.0] mb-6 sm:mb-8 text-center">
            O que <span className="text-[#7C3AED]">muda</span> no seu dia a dia com o <span className="text-gradient-main">Motion Prompts</span>?
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="relative bg-[#111118] border-[#2A2A2E]/60 rounded-2xl p-4 sm:p-5 h-full card-glow-cyan transition-all duration-300 hover:border-[#22D3EE]/15">
                  <span className="text-[10px] font-black text-[#22D3EE]/25 absolute top-3 right-4">0{i + 1}</span>
                  <div className="size-9 sm:size-10 rounded-xl bg-[#22D3EE]/10 border-[#22D3EE]/15 flex items-center justify-center mb-3">
                    <Icon className="size-4 sm:size-5 text-[#22D3EE]" />
                  </div>
                  <h3 className="text-[13px] sm:text-sm font-bold text-[#F4F4F6] mb-1">
                    {card.title}
                  </h3>
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
