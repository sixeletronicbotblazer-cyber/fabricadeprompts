"use client";

import { FadeIn } from "./FadeIn";
import { AlertTriangle } from "lucide-react";

const problems = [
  { icon: "🤖", label: "Movimento duro" },
  { icon: "👗", label: "Roupa muda no vídeo" },
  { icon: "😳", label: "Modelo fica com cara de IA" },
  { icon: "📝", label: "Prompt não parece natural" },
];

export function ProblemSection() {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="flex items-start gap-3 mb-3">
            <AlertTriangle className="size-5 text-accent mt-0.5 shrink-0" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
              Criar vídeo de roupa com IA parece fácil… até a hora do{" "}
              <span className="text-accent">movimento ficar estranho.</span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-sm text-foreground/70 leading-relaxed mb-6">
            Você cria a imagem, coloca a roupa na personagem, mas na hora de animar o vídeo a
            modelo fica travada, artificial, dançando demais ou mudando a roupa.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {problems.map((p, i) => (
            <FadeIn key={p.label} delay={0.15 + i * 0.05}>
              <div className="bg-white rounded-xl border border-border/60 p-4 flex items-center gap-3">
                <span className="text-2xl">{p.icon}</span>
                <span className="text-sm font-semibold text-foreground">{p.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <p className="text-sm font-semibold text-foreground text-center">
            O problema quase nunca é a ferramenta. É o <span className="text-accent">comando que você usa.</span>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}