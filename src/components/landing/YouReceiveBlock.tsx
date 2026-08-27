"use client";

import { Check, ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

const items = [
  "Biblioteca com +250 prompts prontos",
  "Prompts para Modelo, POV e Selfie",
  "Aulas rapidas de aplicacao",
  "Galeria Premium de referencias",
  "Acesso imediato",
  "Pagamento unico",
];

export function YouReceiveBlock() {
  return (
    <section className="bg-[#0D0D10] py-8 sm:py-10 px-4">
      <div className="max-w-md mx-auto">
        <FadeIn>
          <h2 className="text-lg sm:text-xl font-black text-[#F4F4F5] leading-tight mb-4 text-center">
            Voce recebe <span className="text-[#FF2D55]">hoje</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="bg-[#111113] rounded-2xl border border-[#2A2A2E]/60 p-5 sm:p-6 mb-5">
            <ul className="space-y-3">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="size-4 text-[#FF2D55] shrink-0 mt-0.5" />
                  <span className="text-[13px] sm:text-sm text-[#C4C4CC] leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="text-center">
            <p className="text-sm text-[#A1A1AA]/70 mb-3">
              A partir de <span className="text-white font-bold">R$17,90</span>
            </p>
            <a
              href="#planos"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 py-4 bg-[#FF2D55] hover:brightness-110 text-white font-extrabold tracking-wide uppercase text-[15px] sm:text-base rounded-full transition-all shadow-lg shadow-[#FF2D55]/25 hover:shadow-xl hover:shadow-[#FF2D55]/35 hover:scale-[1.02] active:scale-[0.98]"
            >
              QUERO ACESSAR AGORA
              <ArrowRight className="ml-2 size-4" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
