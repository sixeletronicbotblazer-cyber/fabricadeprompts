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
    <section className="bg-tiktok-teal py-10 md:py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#111] leading-tight mb-6 text-center">
            O que você recebe no <span className="text-[#FE2C55]">InfoApp</span>
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-3">
          {items.map((item, i) => (
            <FadeIn key={item} delay={i * 0.04}>
              <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm">
                <div className="flex-shrink-0 size-5 rounded-full bg-[#FE2C55]/10 flex items-center justify-center">
                  <Check className="size-3 text-[#FE2C55]" />
                </div>
                <span className="text-sm font-medium text-[#111]">{item}</span>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <p className="mt-5 text-center text-xs font-medium text-[#111]/60">
            Tudo organizado por categoria, com botão de copiar prompt.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}