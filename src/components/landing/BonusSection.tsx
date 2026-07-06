"use client";

import { FadeIn } from "./FadeIn";
import { ClipboardCheck, Zap, MousePointerClick } from "lucide-react";

const bonuses = [
  {
    icon: ClipboardCheck,
    title: "Checklist de vídeo realista",
    desc: "Uma lista simples para conferir se o vídeo não ficou com cara de IA antes de publicar.",
  },
  {
    icon: Zap,
    title: "Fluxo rápido de criação",
    desc: "O caminho resumido: referência, personagem, roupa, troca, movimento e publicação.",
  },
  {
    icon: MousePointerClick,
    title: "Prompts de CTA",
    desc: "Comandos para a modelo apontar para o carrinho ou indicar o produto de forma natural.",
  },
];

export function BonusSection() {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground leading-tight mb-8 text-center">
            Bônus <span className="text-accent">incluído</span>
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-3 gap-3">
          {bonuses.map((b, i) => (
            <FadeIn key={b.title} delay={i * 0.08}>
              <div className="bg-white rounded-xl border border-accent/20 p-5 h-full relative overflow-hidden">
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                    BÔNUS
                  </span>
                </div>
                <div className="size-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                  <b.icon className="size-5 text-accent" />
                </div>
                <h3 className="text-sm font-bold text-foreground mb-1.5 pr-14">{b.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}