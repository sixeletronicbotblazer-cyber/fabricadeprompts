"use client";

import { FadeIn } from "./FadeIn";
import { ShieldCheck } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section className="bg-tiktok-pink-light py-10 md:py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <div className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-sm">
            <div className="inline-flex size-14 rounded-full bg-emerald-50 items-center justify-center mb-4">
              <ShieldCheck className="size-7 text-emerald-600" />
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#111] leading-tight mb-3">
              Garantia simples de 7 dias
            </h2>
            <p className="text-sm text-[#111]/60 leading-relaxed max-w-md mx-auto">
              Se você acessar e sentir que o guia não te ajuda a criar vídeos de roupa com IA de
              forma mais prática, pode pedir reembolso em até 7 dias.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}