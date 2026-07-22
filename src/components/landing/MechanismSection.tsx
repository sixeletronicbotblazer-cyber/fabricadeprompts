"use client";

import { FadeIn } from "./FadeIn";
import { MousePointerClick, Copy, Shirt, Play, Upload } from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    title: "Escolha o modo",
    text: "Modelo, POV ou Selfie.",
  },
  {
    icon: Copy,
    title: "Copie o prompt",
    text: "Use o comando pronto como base.",
  },
  {
    icon: Shirt,
    title: "Aplique o produto",
    text: "Troque roupa, produto ou cena.",
  },
  {
    icon: Play,
    title: "Gere o vídeo",
    text: "Use movimentos prontos e naturais.",
  },
  {
    icon: Upload,
    title: "Teste o criativo",
    text: "Publique no TikTok Shop ou Shopee.",
  },
];

export function MechanismSection() {
  return (
    <section className="bg-black py-10 md:py-14 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight mb-2 text-center">
            Não é só prompt. É um fluxo para criar criativo.
          </h2>
          <p className="text-sm text-white/45 max-w-lg mx-auto mb-10 text-center">
            Você não precisa ficar inventando comando do zero. Dentro do app, os prompts estão organizados por modo e por tipo de cena, para você sair da ideia até o vídeo final com mais clareza.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.08}>
              <div className="bg-[#1A1A1A] border border-white/[0.06] rounded-2xl p-4 sm:p-5 text-center h-full">
                <div className="flex items-center justify-center size-10 rounded-xl bg-[#25F4EE]/10 border border-[#25F4EE]/15 mb-3 mx-auto">
                  <step.icon className="size-5 text-[#25F4EE]" />
                </div>
                <p className="text-[9px] font-bold text-white/30 uppercase tracking-wider mb-1">
                  Passo {i + 1}
                </p>
                <h3 className="text-sm font-bold text-white mb-1">{step.title}</h3>
                <p className="text-xs text-white/40">{step.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
