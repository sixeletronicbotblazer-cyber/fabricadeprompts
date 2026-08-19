"use client";

import { FadeIn } from "./FadeIn";
import { ShieldCheck } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section className="bg-black py-10 md:py-14 px-4">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <div className="bg-[#1A1A1A] rounded-2xl border border-white/[0.06] p-6 sm:p-8 text-center">
            <div className="inline-flex size-10 rounded-full bg-emerald-500/10 border border-emerald-500/15 items-center justify-center mb-4 mx-auto">
              <ShieldCheck className="size-5 text-emerald-400" />
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight mb-3">
              Garantia simples de 7 dias
            </h2>
            <p className="text-sm text-white/45 leading-relaxed max-w-md mx-auto">
              Você tem 7 dias para acessar o conteúdo e testar se ele faz sentido para o seu fluxo de criação. Caso não seja para você, é só acionar a garantia dentro do prazo.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
