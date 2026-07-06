"use client";

import { FadeIn } from "./FadeIn";
import { Check } from "lucide-react";

const items = [
  "Guia para criar personagem IA",
  "Prompt de troca de roupa",
  "Prompts para blusas, cropped e corset",
  "Prompts para calça, short e parte de baixo",
  "Prompts para vestido e conjunto",
  "Prompts para roupa de academia",
  "Prompts para jaqueta, moletom e blusa de frio",
  "Prompts com roupa na mão ou no cabide",
  "Prompts de CTA para carrinho",
  "Sequências prontas de vídeo",
  "Checklist final antes de publicar",
  "Links úteis para o fluxo",
];

export function InsideProduct() {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground leading-tight mb-8 text-center">
            O que você recebe no <span className="text-accent">InfoApp</span>
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-2.5">
          {items.map((item, i) => (
            <FadeIn key={item} delay={i * 0.04}>
              <div className="flex items-center gap-3 bg-white rounded-lg border border-border/60 px-4 py-3">
                <div className="flex-shrink-0 size-5 rounded-full bg-accent/10 flex items-center justify-center">
                  <Check className="size-3 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <p className="mt-6 text-center text-xs font-medium text-muted-foreground">
            Tudo organizado por categoria, com botão de copiar prompt.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}