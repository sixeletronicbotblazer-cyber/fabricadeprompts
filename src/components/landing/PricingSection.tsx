"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Sparkles } from "lucide-react";
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

const newModules = [
  { name: "Módulo POV", desc: "Vídeos em primeira pessoa que vendem" },
  { name: "Módulo Selfie", desc: "Vídeos estilo selfie com olhar pra câmera" },
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
      <section id="planos" className="bg-black py-10 md:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight mb-2 text-center">
              Escolha o seu <span className="text-[#FE2C55]">plano</span>
            </h2>
            <p className="text-sm text-white/50 text-center mb-8 max-w-md mx-auto">
              3 modos de vídeo prontos para TikTok Shop e Shopee.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 items-start">
            {/* COMPLETO — highlighted */}
            <FadeIn>
              <div className="relative bg-[#1A1A1A] rounded-2xl border-2 border-[#FE2C55] p-5 sm:p-7 flex flex-col order-1 md:order-2 shadow-lg shadow-[#FE2C55]/10">
                {/* Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block bg-[#FE2C55] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 sm:px-4 py-1 rounded-full shadow-md">
                    Mais escolhido
                  </span>
                </div>

                <div className="mt-1 mb-5">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5">
                    Plano Completo
                  </h3>
                  <p className="text-sm text-white/50">
                    3 modos + bônus exclusivos
                  </p>
                </div>

                <div className="mb-5">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white">
                    R$ 22
                  </span>
                  <span className="text-lg font-bold text-white">,90</span>
                  <span className="text-xs text-white/40 ml-1.5">
                    pagamento único
                  </span>
                </div>

                <ul className="space-y-2.5 mb-4 flex-1">
                  {completoFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className="size-4 text-[#FE2C55] shrink-0 mt-0.5" />
                      <span className="text-sm text-white/90">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* NEW MODULES — strong highlight */}
                <div className="mb-4 rounded-xl bg-gradient-to-r from-[#FE2C55]/10 to-[#25F4EE]/10 border border-[#FE2C55]/20 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="size-3.5 text-[#25F4EE]" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#25F4EE]">
                      Novos módulos incluídos
                    </span>
                  </div>
                  {newModules.map((m) => (
                    <div key={m.name} className="flex items-start gap-2.5 mb-2 last:mb-0">
                      <Check className="size-4 text-[#25F4EE] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-sm font-semibold text-white">{m.name}</span>
                        <span className="text-xs text-white/40 ml-1.5">{m.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bônus */}
                <ul className="space-y-2.5 mb-7">
                  <li className="border-t border-white/10 pt-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#25F4EE]">
                      Bônus incluídos
                    </span>
                  </li>
                  {bonuses.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <Check className="size-4 text-[#25F4EE] shrink-0 mt-0.5" />
                      <span className="text-sm text-white/90">
                        <span className="font-medium">{b}</span>{" "}
                        <span className="text-white/30">(bônus)</span>
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={checkoutUrlCompleto}
                  className="block w-full text-center bg-[#FE2C55] hover:bg-[#e62750] text-white font-bold py-3.5 px-6 rounded-full transition-all text-sm sm:text-base shadow-lg shadow-[#FE2C55]/25 hover:shadow-[#FE2C55]/40 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Quero o plano completo
                </a>
              </div>
            </FadeIn>

            {/* BÁSICO */}
            <FadeIn delay={0.1}>
              <div className="bg-[#1A1A1A] rounded-2xl border border-white/[0.08] p-5 sm:p-7 flex flex-col order-2 md:order-1">
                <div className="mb-5">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5">
                    Plano Básico
                  </h3>
                  <p className="text-sm text-white/50">
                    O essencial para começar
                  </p>
                </div>

                <div className="mb-5">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white">
                    R$ 10
                  </span>
                  <span className="text-lg font-bold text-white">,00</span>
                  <span className="text-xs text-white/40 ml-1.5">
                    pagamento único
                  </span>
                </div>

                <ul className="space-y-2.5 mb-4 flex-1">
                  {basicoFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className="size-4 text-white/30 shrink-0 mt-0.5" />
                      <span className="text-sm text-white/70">{f}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-white/30 mb-5">
                  Sem módulos POV, Selfie e sem bônus
                </p>

                <button
                  onClick={() => setDownsellOpen(true)}
                  className="block w-full text-center border-2 border-white/20 text-white hover:bg-white hover:text-black font-bold py-3.5 px-6 rounded-full transition-all text-sm sm:text-base"
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
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setDownsellOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="relative bg-[#1A1A1A] rounded-2xl border border-white/10 shadow-2xl w-full max-w-md p-6 sm:p-8 z-10"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button
                onClick={() => setDownsellOpen(false)}
                className="absolute top-4 right-4 size-8 flex items-center justify-center rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Fechar"
              >
                <X className="size-5" />
              </button>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                Espere! Antes de continuar...
              </h3>

              <p className="text-sm text-white/60 mb-4">
                Por apenas{" "}
                <span className="font-bold text-[#FE2C55]">R$ 16,90</span> você
                leva o plano completo com os 3 modos (modelo, POV e selfie) e todos os bônus.
              </p>

              <div className="rounded-xl bg-gradient-to-r from-[#FE2C55]/10 to-[#25F4EE]/10 border border-[#FE2C55]/20 p-3 mb-5">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="size-3.5 text-[#25F4EE]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#25F4EE]">
                    Incluído nesta oferta
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Módulo Modelo", "Módulo POV", "Módulo Selfie", ...bonuses].map((b) => (
                    <span key={b} className="inline-flex items-center gap-1 text-[11px] text-white/70 bg-white/5 rounded-full px-2.5 py-1">
                      <Check className="size-2.5 text-[#25F4EE]" />
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-xs text-white/30 italic mb-6">
                Essa condição é válida apenas agora.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href={checkoutUrlDownsell}
                  className="block w-full text-center bg-[#FE2C55] hover:bg-[#e62750] text-white font-bold py-3.5 px-6 rounded-full transition-all text-sm sm:text-base shadow-lg shadow-[#FE2C55]/25"
                >
                  Sim, quero o completo por R$ 16,90
                </a>
                <a
                  href={checkoutUrlBasico}
                  className="block w-full text-center border border-white/15 text-white/50 hover:bg-white/5 font-medium py-3 px-6 rounded-full transition-colors text-sm"
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