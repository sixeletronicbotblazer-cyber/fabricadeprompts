"use client";

import { FadeIn } from "./FadeIn";
import { UserPlus, Shirt, Film, Workflow } from "lucide-react";

const items = [
  {
    icon: UserPlus,
    title: "Prompts para criar personagem",
    desc: "Passo a passo para criar uma modelo realista a partir de referências de espelho.",
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    icon: Shirt,
    title: "Prompts para trocar roupa",
    desc: "Comando para colocar a peça na personagem mantendo cenário, corpo e realismo.",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: Film,
    title: "Prompts de movimento",
    desc: "Movimentos naturais para blusa, calça, short, vestido, academia, frio e mais.",
    color: "text-purple-600 bg-purple-50",
  },
  {
    icon: Workflow,
    title: "Fluxo pronto",
    desc: "Do Pinterest até o vídeo animado, com uma sequência simples de execução.",
    color: "text-accent bg-orange-50",
  },
];

export function SolutionSection() {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground leading-tight mb-3">
            Por isso eu organizei os prompts em um{" "}
            <span className="text-accent">app simples.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            Em vez de ficar tentando inventar comando do zero, você abre o app, escolhe o tipo de
            roupa, copia o prompt e usa na sua ferramenta de vídeo.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-3">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={0.15 + i * 0.05}>
              <div className="bg-white rounded-xl border border-border/60 p-5 h-full">
                <div className={`inline-flex size-10 rounded-lg items-center justify-center ${item.color} mb-3`}>
                  <item.icon className="size-5" />
                </div>
                <h3 className="text-sm font-bold text-foreground mb-1.5">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}