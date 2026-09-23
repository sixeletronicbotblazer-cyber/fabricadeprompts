"use client";

import { FadeIn } from "./FadeIn";
import { Sparkles, Copy, Wand2 } from "lucide-react";

const categories = [
  {
    icon: Sparkles,
    title: "Ganchos & Transições",
    items: "Movimentos, trocas, vinho, manequim, fogo…",
  },
  {
    icon: Copy,
    title: "POV & Produto",
    items: "Skincare, moda, casa, acessórios, UGC selfie…",
  },
  {
    icon: Wand2,
    title: "Sazonais & Nichos",
    items: "Natal, datas comemorativas, nichos específicos…",
  },
];

export function FormatosVirais() {
  return (
    <section id="formatos" className="bg-[#050505] py-10 sm:py-14 md:py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold text-[#FF2D55]/90 uppercase tracking-[0.15em] bg-[#FF2D55]/8 border border-[#FF2D55]/12 px-3.5 py-1 rounded-full">
              FORMATOS VIRAIS VALIDADOS
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h2 className="text-[1.3rem] sm:text-xl md:text-[1.85rem] font-black leading-[1.15] sm:leading-[1.1] text-[#F4F4F5] mb-3 text-center max-w-lg mx-auto">
            Escolha o formato. Copie o prompt. <span className="text-[#FF2D55]">Adapte para o seu produto</span>.
          </h2>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="text-[12px] sm:text-sm text-[#A1A1AA]/60 leading-relaxed mb-8 sm:mb-10 max-w-md mx-auto text-center">
            Tudo já organizado dentro da biblioteca.
          </p>
        </FadeIn>

        {/* 3 static category cards */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="bg-[#111113] rounded-2xl border border-[#2A2A2E]/60 p-5 text-center hover:border-[#FF2D55]/20 transition-all duration-300"
                >
                  <div className="size-10 mx-auto mb-3 rounded-xl bg-[#FF2D55]/10 border border-[#FF2D55]/12 flex items-center justify-center">
                    <Icon className="size-5 text-[#FF2D55]" />
                  </div>
                  <h3 className="text-sm font-bold text-[#F4F4F5] mb-1.5">
                    {cat.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#A1A1AA]/60 leading-relaxed">
                    {cat.items}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-[11px] sm:text-xs text-[#A1A1AA]/50 text-center max-w-md mx-auto leading-relaxed">
            A biblioteca também inclui categorias por nicho, movimento, produto, datas comemorativas e estilos de criativo.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
