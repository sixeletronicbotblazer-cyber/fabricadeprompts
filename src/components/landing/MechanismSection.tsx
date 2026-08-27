"use client";

import { FadeIn } from "./FadeIn";
import { MapPin, Move, Shield } from "lucide-react";

const cards = [
  {
    icon: MapPin,
    title: "Cenário certo",
    text: "Quarto, carro, loja, provador, mesa, cama, espelho ou ambiente de uso.",
  },
  {
    icon: Move,
    title: "Movimento natural",
    text: "Mãos mostrando o produto, modelo ajustando roupa, POV abrindo embalagem, selfie no espelho.",
  },
  {
    icon: Shield,
    title: "Produto preservado",
    text: "Comandos para manter cor, textura, formato, logo, proporção e detalhes da referência.",
  },
];

const flowSteps = ['Prompt', 'Cena', 'Movimento', 'Vídeo'];

export function MechanismSection() {
  return (
    <section className="bg-[#0D0D10] py-8 sm:py-10 md:py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-[1.3rem] sm:text-2xl md:text-[2rem] font-black text-white leading-[1.1] sm:leading-[1.0] mb-2 text-center">
            O segredo <span className="text-[#A1A1AA]/80">não é só gerar vídeo</span>. É <span className="text-[#FF2D55]">guiar a IA</span> como um <span className="text-[#F4F4F5] font-black">criativo real</span>.
          </h2>
        </FadeIn>

        <FadeIn delay={0.05}>
          <p className="text-[13px] sm:text-sm text-[#A1A1AA]/70 max-w-lg mx-auto mb-6 sm:mb-8 text-center">
            Os prompts foram organizados para orientar a IA sobre cenário, enquadramento, movimento, estilo UGC, produto, câmera e formato vertical.
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="flex items-center justify-center gap-1.5 sm:gap-3 mb-5 sm:mb-6">
            {flowSteps.map((step, i) => (
              <div key={step} className="flex items-center gap-1.5 sm:gap-3">
                <span className="text-[9px] sm:text-xs font-bold text-[#FF2D55]/60 uppercase tracking-wider">{step}</span>
                {i < 3 && <div className="w-3 sm:w-8 h-px bg-gradient-to-r from-[#FF2D55]/30 to-[#FF2D55]/10" />}
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.08}>
              <div className="bg-[#111113] border-[#2A2A2E]/60 rounded-2xl p-4 sm:p-5 h-full text-center transition-all duration-300 hover:border-[#22D3EE]/15">
                <div className="flex items-center justify-center size-9 sm:size-10 rounded-xl bg-[#22D3EE]/10 border-[#22D3EE]/15 mb-3 mx-auto">
                  <card.icon className="size-4 sm:size-5 text-[#22D3EE]" />
                </div>
                <h3 className="text-[13px] sm:text-sm font-bold text-[#F4F4F5] mb-1">{card.title}</h3>
                <p className="text-xs text-[#A1A1AA]/70 leading-relaxed">{card.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
