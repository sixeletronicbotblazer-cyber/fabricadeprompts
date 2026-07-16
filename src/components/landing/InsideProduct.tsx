"use client";

import { FadeIn } from "./FadeIn";
import { Check, Sparkles } from "lucide-react";

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

const newModules = [
  "Módulo POV — vídeos em primeira pessoa",
  "Módulo Selfie — vídeos com olhar pra câmera",
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

        {/* NEW modules highlight */}
        <FadeIn delay={0.05}>
          <div className="mb-4 rounded-xl bg-gradient-to-r from-[#FE2C55]/10 to-[#25F4EE]/10 border border-[#FE2C55]/20 p-3 sm:p-4">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="size-3.5 text-[#FE2C55]" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#FE2C55]">
                Novos módulos
              </span>
            </div>
            <div className="space-y-2">
              {newModules.map((m) => (
                <div key={m} className="flex items-center gap-3">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#FE2C55]/15 flex items-center justify-center">
                    <Check className="size-3 text-[#FE2C55]" />
                  </div>
                  <span className="text-sm font-semibold text-[#111]">{m}</span>
                </div>
              ))}
            </div>
          </div>
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

        {/* App preview */}
        <FadeIn delay={0.5}>
          <div className="mt-6 rounded-2xl overflow-hidden border border-[#111]/10 shadow-lg max-w-md mx-auto">
            <img
              src="/images/app-preview.jpeg"
              alt="Dentro do InfoApp — organizado por modo e categoria"
              className="w-full"
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-center text-[11px] font-medium text-[#111]/50">
            Visualize como é por dentro — organizado por modo e categoria.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}