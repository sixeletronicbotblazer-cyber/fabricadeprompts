"use client";

import { FadeIn } from "./FadeIn";
import { Check } from "lucide-react";

const checkoutUrl = "#planos";

const includes = [
  "Guia passo a passo",
  "Biblioteca de prompts",
  "Categorias por tipo de roupa",
  "Botões para copiar",
  "Checklist final",
  "Links úteis",
];

export function OfferBox() {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <div className="bg-foreground rounded-2xl p-6 sm:p-10 text-center relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <p className="text-sm text-white/80 font-medium mb-2">Acesso completo por apenas</p>
              <div className="mb-1">
                <span className="text-5xl sm:text-6xl font-extrabold text-white">R$ 19,90</span>
              </div>
              <p className="text-sm text-white/70 mb-8">Pagamento único. Acesso imediato ao InfoApp.</p>

              <div className="flex flex-col items-center gap-2.5 mb-8">
                {includes.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="size-4 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="size-2.5 text-accent" />
                    </div>
                    <span className="text-sm text-white/95">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={checkoutUrl}
                className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 bg-accent hover:bg-accent/90 text-white font-bold text-base sm:text-lg rounded-full transition-all shadow-lg shadow-accent/30 hover:shadow-accent/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                Comprar agora por R$ 19,90
              </a>
              <p className="mt-3 text-xs text-white/60">
                Você recebe o acesso logo após a compra.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}