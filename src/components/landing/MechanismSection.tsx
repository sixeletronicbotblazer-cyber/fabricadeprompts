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

export function MechanismSection() {
  return (
    <section className="bg-[#0D0D0D] py-10 md:py-14 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight mb-2 text-center">
            O segredo não é só gerar vídeo. É guiar a IA como um criativo real.
          </h2>
        </FadeIn>

        <FadeIn delay={0.05}>
          <p className="text-sm text-white/45 max-w-lg mx-auto mb-10 text-center">
            Os prompts foram organizados para orientar a IA sobre cenário, enquadramento, movimento, estilo UGC, produto, câmera e formato vertical.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.08}>
              <div className="bg-[#1A1A1A] border border-white/[0.06] rounded-2xl p-5 h-full text-center">
                <div className="flex items-center justify-center size-10 rounded-xl bg-[#25F4EE]/10 border border-[#25F4EE]/15 mb-3 mx-auto">
                  <card.icon className="size-5 text-[#25F4EE]" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{card.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{card.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
