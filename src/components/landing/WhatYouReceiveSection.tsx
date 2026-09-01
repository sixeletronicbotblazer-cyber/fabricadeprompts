"use client";

import { FadeIn } from "./FadeIn";
import { Sparkles, Shirt, Wind, Eye, Camera, RefreshCw, Users } from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "Prompts para criar modelo IA",
    text: "Comandos para gerar personagens em estilo UGC para vídeos de produto.",
  },
  {
    icon: Shirt,
    title: "Prompts de troca de roupa",
    text: "Use a imagem da modelo e a imagem da peça para criar o look final.",
  },
  {
    icon: Wind,
    title: "Movimentos por tipo de roupa",
    text: "Blusa, calça, vestido, short, academia, jaqueta e mais.",
  },
  {
    icon: Eye,
    title: "Modo POV",
    text: "Cenas em primeira pessoa segurando produto, pacote ou peça.",
  },
  {
    icon: Camera,
    title: "Modo Selfie UGC",
    text: "Selfies no espelho com celular cobrindo o rosto e estética realista.",
  },
  {
    icon: RefreshCw,
    title: "Atualizações e aulas",
    text: "Novos exemplos, aulas e melhorias adicionadas conforme o método evolui.",
  },
  {
    icon: Users,
    title: "Grupo VIP para compradores",
    text: "Espaço para trocar ideias, acompanhar atualizações e novidades do produto.",
  },
];

export function WhatYouReceiveSection() {
  return (
    <section className="bg-[#0D0D0D] py-10 md:py-14 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight mb-8 text-center">
            Dentro do app você encontra
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.06}>
              <div className="bg-[#15151D] border border-white/[0.06] rounded-2xl p-5 h-full">
                <div className="flex items-center justify-center size-9 rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/15 mb-3">
                  <item.icon className="size-4.5 text-[#7C3AED]" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
