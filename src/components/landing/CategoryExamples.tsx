"use client";

import { FadeIn } from "./FadeIn";

const categories = [
  {
    title: "Calça / Short",
    desc: "Movimentos com passos curtos, foco na cintura, caimento, quadril e pernas.",
    emoji: "👖",
  },
  {
    title: "Blusa / Cropped",
    desc: "Movimentos com mão no cabelo, ajuste da peça, pose frontal e virada leve.",
    emoji: "👚",
  },
  {
    title: "Vestido / Conjunto",
    desc: "Movimentos para mostrar look inteiro, tecido, caimento e virada lateral.",
    emoji: "👗",
  },
  {
    title: "Academia",
    desc: "Movimentos leves para top, legging, elasticidade e conforto.",
    emoji: "🏋️",
  },
  {
    title: "Jaqueta / Frio",
    desc: "Ajuste de manga, gola, capuz e caimento da peça.",
    emoji: "🧥",
  },
  {
    title: "Roupa na mão",
    desc: "Prompts para mostrar a peça antes de vestir, no cabide ou na mão.",
    emoji: "🤚",
  },
];

export function CategoryExamples() {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground leading-tight mb-3 text-center">
            Escolha o tipo de roupa e copie o{" "}
            <span className="text-accent">movimento certo.</span>
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
          {categories.map((cat, i) => (
            <FadeIn key={cat.title} delay={i * 0.05}>
              <div className="bg-white rounded-xl border border-border/60 p-5 h-full hover:shadow-md transition-shadow">
                <span className="text-3xl mb-3 block">{cat.emoji}</span>
                <h3 className="text-sm font-bold text-foreground mb-1.5">{cat.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{cat.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}