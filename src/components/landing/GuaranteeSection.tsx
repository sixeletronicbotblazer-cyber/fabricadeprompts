"use client";

import { FadeIn } from "./FadeIn";
import { Shield } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section className="py-8 md:py-10">
      <div className="max-w-[630px] mx-auto px-6">
        <FadeIn>
          <div className="bg-[#141519] border border-[#27272E] rounded-[13px] p-5 flex items-start gap-4">
            <Shield className="size-6 text-[#FA2D62] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-sm mb-1">Garantia de 7 dias</h3>
              <p className="text-xs text-[#A7A7B1] leading-relaxed">
                Se dentro de 7 dias você sentir que a biblioteca não é para você, devolvemos seu dinheiro. Sem burocracia.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
