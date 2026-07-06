"use client";

import { FadeIn } from "./FadeIn";
import { ShieldCheck } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <div className="bg-white rounded-2xl border border-border/60 p-6 sm:p-8 text-center">
            <div className="inline-flex size-14 rounded-full bg-emerald-50 items-center justify-center mb-4">
              <ShieldCheck className="size-7 text-emerald-600" />
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-foreground leading-tight mb-3">
              Garantia simples de 7 dias
            </h2>
            <p className="text-sm text-foreground/70 leading-relaxed max-w-md mx-auto">
              Se você acessar e sentir que o guia não te ajuda a criar vídeos de roupa com IA de
              forma mais prática, pode pedir reembolso em até 7 dias.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}