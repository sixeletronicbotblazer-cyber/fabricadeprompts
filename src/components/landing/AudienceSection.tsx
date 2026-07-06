"use client";

import { FadeIn } from "./FadeIn";
import { Check, X } from "lucide-react";

const targetAudience = [
  "Afiliados de TikTok Shop",
  "Criadores de UGC",
  "Donos de loja de roupa",
  "Social medias",
  "Pessoas que querem testar criativos com IA",
  "Quem quer criar vídeos sem aparecer",
  "Quem não quer perder tempo criando prompt do zero",
];

const notFor = [
  "Você procura uma mentoria completa.",
  "Você quer alguém criando os vídeos por você.",
  "Você não pretende usar ferramentas de imagem ou vídeo com IA.",
];

export function AudienceSection() {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground leading-tight mb-8 text-center">
            Esse guia é para quem quer criar conteúdo de moda{" "}
            <span className="text-accent">sem complicar.</span>
          </h2>
        </FadeIn>

        <div className="bg-white rounded-2xl border border-border/60 p-6 mb-6">
          <FadeIn delay={0.1}>
            <div className="space-y-3">
              {targetAudience.map((item, i) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5 size-5 rounded-full bg-emerald-50 flex items-center justify-center">
                    <Check className="size-3 text-emerald-600" />
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="bg-secondary rounded-2xl p-6">
            <h3 className="text-sm font-bold text-foreground mb-3">Não é para você se:</h3>
            <div className="space-y-2.5">
              {notFor.map((item, i) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5 size-5 rounded-full bg-white flex items-center justify-center">
                    <X className="size-3 text-muted-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}