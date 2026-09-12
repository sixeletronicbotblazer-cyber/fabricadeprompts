"use client";

import { FadeIn } from "./FadeIn";
import { Search, UserPlus, Image, Shirt, Play, ArrowRight } from "lucide-react";

const checkoutUrl = "#planos";

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Escolha uma referência",
    desc: "Pegue uma foto de espelho no Pinterest ou referência parecida.",
  },
  {
    icon: UserPlus,
    num: "02",
    title: "Crie sua personagem",
    desc: "Use o prompt do app para gerar uma modelo nova e realista.",
  },
  {
    icon: Image,
    num: "03",
    title: "Pegue a roupa",
    desc: "Use print ou imagem de produto do TikTok Shop, Kalodata ou sites parecidos.",
  },
  {
    icon: Shirt,
    num: "04",
    title: "Troque a roupa",
    desc: "Coloque a peça na personagem mantendo o estilo UGC.",
  },
  {
    icon: Play,
    num: "05",
    title: "Anime com movimento",
    desc: "Escolha o prompt certo para o tipo de roupa e gere o vídeo.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-8 md:py-14 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-foreground leading-tight mb-6 text-center">
            Como você vai usar
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-4">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.08}>
                <div className="flex gap-4 sm:gap-5">
                  {/* Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="size-10 rounded-full bg-white border-2 border-accent flex items-center justify-center">
                      <step.icon className="size-4 text-accent" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="bg-white rounded-xl border border-border/60 p-3.5 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                        PASSO {step.num}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-foreground mb-1">{step.title}</h3>
                    <p className="text-[13px] text-foreground/65 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-7 text-center">
            <a
              href={checkoutUrl}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-foreground text-primary-foreground font-bold text-sm rounded-full hover:bg-foreground/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Quero o passo a passo
              <ArrowRight className="size-4" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}