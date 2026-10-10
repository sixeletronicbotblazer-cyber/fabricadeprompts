"use client";

import { FadeIn } from "./FadeIn";
import { Eye, Copy, Sparkles } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Eye,
    title: "Veja a referência",
    text: "Escolha um estilo visual para seu produto: POV, UGC, Selfie, Faceless e outros formatos.",
  },
  {
    num: "02",
    icon: Copy,
    title: "Copie o prompt",
    text: "Encontre uma base organizada, pronta para copiar e adaptar ao que você vende.",
  },
  {
    num: "03",
    icon: Sparkles,
    title: "Crie novas versões",
    text: "Use o prompt na ferramenta de IA que preferir e teste variações de conteúdo.",
  },
];

export function MechanismSteps() {
  return (
    <section id="como-funciona" className="py-16 md:py-20 bg-[#101114]">
      <div className="max-w-[860px] mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-[690px] mx-auto mb-8">
            <span className="inline-flex items-center border border-[#3c1c27] bg-[#160e12] text-[#FA2D62] text-[10px] font-black tracking-[0.15em] uppercase px-3.5 py-2 rounded-[40px]">
              Simples assim
            </span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(30px,4vw,43px)] leading-[1.15] tracking-[-0.055em] mt-3 mb-2.5">
              Escolha o formato. Copie o prompt.{" "}
              <span className="text-[#FA2D62]">Adapte ao seu produto.</span>
            </h2>
            <p className="text-[#A7A7B1] text-sm leading-relaxed">
              O ponto de partida está pronto. Você não precisa inventar a estrutura de cada vídeo.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {steps.map((step) => (
              <div
                key={step.num}
                className="border border-[#272830] bg-[#17181c] rounded-[13px] p-6 min-h-[179px]"
              >
                <span className="inline-block border border-[#3e1e2d] text-[#FA2D62] px-2.5 py-1.5 rounded-md text-[11px] font-black">
                  {step.num}
                </span>
                <h3 className="text-lg mt-4 mb-2 font-bold">{step.title}</h3>
                <p className="text-xs leading-relaxed text-[#9da0a9]">{step.text}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="text-center mt-7">
            <a
              href="#por-dentro"
              className="inline-flex items-center justify-center gap-3 bg-[#FA2D62] text-white px-7 py-4 rounded-[10px] text-[13px] font-black shadow-[0_15px_32px_rgba(250,45,98,0.18)] hover:translate-y-[-2px] hover:brightness-110 transition-all duration-200"
            >
              VER A BIBLIOTECA POR DENTRO →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
