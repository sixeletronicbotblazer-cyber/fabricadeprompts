"use client";

import { FadeIn } from "./FadeIn";
import { HelpCircle, GraduationCap, Zap } from "lucide-react";

const objections = [
  {
    icon: HelpCircle,
    title: "Preciso aparecer?",
    text: "Nao. Voce pode criar com IA usando modelos, POV, produto na mao e selfie UGC.",
  },
  {
    icon: GraduationCap,
    title: "Serve para iniciante?",
    text: "Sim. Os prompts ja vem organizados por estilo para copiar, adaptar e usar.",
  },
  {
    icon: Zap,
    title: "Recebo na hora?",
    text: "Sim. O acesso e liberado apos a compra.",
  },
];

export function ObjectionCards() {
  return (
    <section className="bg-[#08080A] py-8 sm:py-10 px-4">
      <div className="max-w-md mx-auto">
        <div className="grid grid-cols-1 gap-3">
          {objections.map((obj, i) => {
            const Icon = obj.icon;
            return (
              <FadeIn key={obj.title} delay={i * 0.06}>
                <div className="bg-[#111113] border border-[#2A2A2E]/60 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5">
                  <div className="size-9 rounded-xl bg-[#FF2D55]/10 border border-[#FF2D55]/15 flex items-center justify-center shrink-0">
                    <Icon className="size-4 text-[#FF2D55]" />
                  </div>
                  <div>
                    <h3 className="text-[13px] sm:text-sm font-bold text-[#F4F4F5] mb-1">{obj.title}</h3>
                    <p className="text-xs sm:text-[13px] text-[#A1A1AA]/70 leading-relaxed">{obj.text}</p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
