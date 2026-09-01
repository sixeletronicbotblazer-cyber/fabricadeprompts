"use client";

import { FadeIn } from "./FadeIn";
import { ShieldCheck } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section className="bg-[#08080A] py-6 sm:py-8 md:py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <div className="bg-[#111113] border border-[#2A2A2E]/60 rounded-2xl p-6 sm:p-8 text-center">
            <div className="inline-flex size-10 rounded-full bg-emerald-500/8 border border-emerald-500/12 items-center justify-center mb-4 mx-auto">
              <ShieldCheck className="size-5 text-emerald-400" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#F4F4F5] leading-tight mb-3">
              Garantia simples de 7 dias
            </h2>
            <p className="text-sm text-[#A1A1AA]/70 leading-relaxed max-w-md mx-auto">
              Voce tem 7 dias para acessar o conteudo e testar se ele faz sentido para o seu fluxo de criacao. Caso nao seja para voce, e so acionar a garantia dentro do prazo.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}