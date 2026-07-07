"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import { FadeIn } from "./FadeIn";

const checkoutUrlBasico = "https://pay.cakto.com.br/3dtfnag_968205";
const checkoutUrlCompleto = "https://pay.cakto.com.br/36cmdfq";
const checkoutUrlDownsell = "https://pay.cakto.com.br/9wutx2x";

const basicoFeatures = [
  "Guia passo a passo completo",
  "Prompts por tipo de roupa",
  "Botões para copiar",
];

const completoFeatures = [
  "Guia passo a passo completo",
  "Prompts por tipo de roupa",
  "Botões para copiar",
];

const bonuses = [
  "Checklist de vídeo realista",
  "Fluxo rápido de criação",
  "Prompts de CTA para carrinho",
];

export function PricingSection() {
  const [downsellOpen, setDownsellOpen] = useState(false);

  return (
    <>
      <section className="py-8 md:py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-foreground leading-tight mb-2 text-center">
              Escolha o seu <span className="text-accent">plano</span>
            </h2>
            <p className="text-sm text-foreground/70 text-center mb-6 max-w-md mx-auto">
              Comece a criar vídeos UGC profissionais com IA hoje mesmo.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 items-start">
            {/* COMPLETO — highlighted */}
            <FadeIn>
              <div className="relative bg-white rounded-2xl border-2 border-accent p-5 sm:p-7 flex flex-col order-1 md:order-2 shadow-lg shadow-accent/10">
                {/* Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block bg-accent text-accent-foreground text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 sm:px-4 py-1 rounded-full shadow-md">
                    Mais escolhido
                  </span>
                </div>

                <div className="mt-1 mb-5">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-0.5">
                    Plano Completo
                  </h3>
                  <p className="text-sm text-foreground/70">
                    Tudo + bônus exclusivos
                  </p>
                </div>

                <div className="mb-5">
                  <span className="text-4xl sm:text-5xl font-extrabold text-foreground">
                    R$ 19
                  </span>
                  <span className="text-lg font-bold text-foreground">,90</span>
                  <span className="text-xs text-foreground/50 ml-1.5">
                    pagamento único
                  </span>
                </div>

                <ul className="space-y-2.5 mb-7 flex-1">
                  {completoFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className="size-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{f}</span>
                    </li>
                  ))}
                  <li className="border-t border-border pt-2.5 mt-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#25F4EE]">
                      Bônus incluídos
                    </span>
                  </li>
                  {bonuses.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <Check className="size-4 text-[#25F4EE] shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">
                        <span className="font-medium">{b}</span>{" "}
                        <span className="text-foreground/40">(bônus)</span>
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={checkoutUrlCompleto}
                  className="block w-full text-center bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3.5 px-6 rounded-full transition-all text-sm sm:text-base shadow-lg shadow-accent/25 hover:shadow-accent/35 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Quero o plano completo
                </a>
              </div>
            </FadeIn>

            {/* BÁSICO */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-border/60 p-5 sm:p-7 flex flex-col order-2 md:order-1">
                <div className="mb-5">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-0.5">
                    Plano Básico
                  </h3>
                  <p className="text-sm text-foreground/70">
                    O essencial para começar
                  </p>
                </div>

                <div className="mb-5">
                  <span className="text-4xl sm:text-5xl font-extrabold text-foreground">
                    R$ 10
                  </span>
                  <span className="text-lg font-bold text-foreground">,00</span>
                  <span className="text-xs text-foreground/50 ml-1.5">
                    pagamento único
                  </span>
                </div>

                <ul className="space-y-2.5 mb-4 flex-1">
                  {basicoFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className="size-4 text-foreground/40 shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-foreground/40 mb-5">
                  Sem bônus inclusos
                </p>

                <button
                  onClick={() => setDownsellOpen(true)}
                  className="block w-full text-center border-2 border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground font-bold py-3.5 px-6 rounded-full transition-all text-sm sm:text-base"
                >
                  Quero o plano básico
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Downsell Popup */}
      <AnimatePresence>
        {downsellOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setDownsellOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-8 z-10"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button
                onClick={() => setDownsellOpen(false)}
                className="absolute top-4 right-4 size-8 flex items-center justify-center rounded-full text-foreground/40 hover:text-foreground hover:bg-secondary transition-colors"
                aria-label="Fechar"
              >
                <X className="size-5" />
              </button>

              <h3 className="text-xl sm:text-2xl font-extrabold text-foreground mb-2">
                Espere! Antes de continuar...
              </h3>

              <p className="text-sm text-foreground/70 mb-5">
                Por apenas{" "}
                <span className="font-bold text-accent">R$ 14,90</span> você
                pode levar o plano completo com todos os bônus.
              </p>

              <ul className="space-y-2.5 mb-5">
                {bonuses.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span className="text-[#25F4EE] font-bold text-sm mt-px">✅</span>
                    <span className="text-sm text-foreground">{b}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-foreground/40 italic mb-6">
                Essa condição é válida apenas agora.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href={checkoutUrlDownsell}
                  className="block w-full text-center bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3.5 px-6 rounded-full transition-all text-sm sm:text-base shadow-lg shadow-accent/25"
                >
                  Sim, quero o completo por R$ 14,90
                </a>
                <a
                  href={checkoutUrlBasico}
                  className="block w-full text-center border border-border text-foreground/60 hover:bg-secondary font-medium py-3 px-6 rounded-full transition-colors text-sm"
                >
                  Não, quero o básico por R$ 10,00
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}