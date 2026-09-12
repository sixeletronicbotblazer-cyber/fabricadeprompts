"use client";

import { Check, Video, FolderOpen } from "lucide-react";
import { FadeIn } from "./FadeIn";

const formatos = [
  "Modelo",
  "POV",
  "Selfie UGC",
  "Produto na mão",
  "Dancinha",
  "Transição",
  "Gancho",
  "Trend Viral",
];

const categorias = [
  "Moda feminina",
  "Casa",
  "Calçados",
  "Acessórios",
  "Pet",
  "Infantil",
  "Masculino",
  "Datas comemorativas",
];

export function MiniDecisionBlock() {
  return (
    <section id="beneficios" className="bg-[#050505] py-8 sm:py-10 md:py-14 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Headline */}
        <FadeIn>
          <div className="text-center mb-2">
            <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-black leading-[1.1] tracking-tight">
              <span className="text-[#FF2D55]">+500</span>{" "}
              <span className="text-[#F4F4F5]">prompts prontos</span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <p className="text-sm sm:text-base md:text-lg font-bold text-[#25F4EE] text-center mb-1">
            para criar vídeos com IA
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="text-xs sm:text-sm text-[#A1A1AA]/70 text-center mb-6 sm:mb-8 max-w-md mx-auto">
            Escolha o formato, copie a base e adapte para o seu produto.
          </p>
        </FadeIn>

        {/* 2 Column Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-6">
          {/* Card 1 - Formatos de vídeo */}
          <FadeIn delay={0.1}>
            <div className="bg-[#111113] border border-[#FF2D55]/15 rounded-xl p-4 sm:p-5 shadow-[0_0_20px_rgba(255,45,85,0.04)]">
              <div className="flex items-center gap-2 mb-3">
                <div className="size-7 rounded-lg bg-[#FF2D55]/10 border border-[#FF2D55]/12 flex items-center justify-center shrink-0">
                  <Video className="size-3.5 text-[#FF2D55]" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#F4F4F5] leading-tight">
                  Formatos de vídeo
                </h3>
              </div>
              <ul className="space-y-1.5">
                {formatos.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="size-3.5 text-[#FF2D55]/70 shrink-0" />
                    <span className="text-xs sm:text-sm text-[#C4C4CC]/80 leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Card 2 - Categorias prontas */}
          <FadeIn delay={0.15}>
            <div className="bg-[#111113] border border-[#25F4EE]/15 rounded-xl p-4 sm:p-5 shadow-[0_0_20px_rgba(37,244,238,0.04)]">
              <div className="flex items-center gap-2 mb-3">
                <div className="size-7 rounded-lg bg-[#25F4EE]/10 border border-[#25F4EE]/12 flex items-center justify-center shrink-0">
                  <FolderOpen className="size-3.5 text-[#25F4EE]" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#F4F4F5] leading-tight">
                  Categorias prontas
                </h3>
              </div>
              <ul className="space-y-1.5">
                {categorias.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="size-3.5 text-[#25F4EE]/70 shrink-0" />
                    <span className="text-xs sm:text-sm text-[#C4C4CC]/80 leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Closing phrase */}
        <FadeIn delay={0.2}>
          <p className="text-xs sm:text-sm text-[#A1A1AA]/50 text-center leading-relaxed">
            Copie, adapte e use na sua ferramenta de IA.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
