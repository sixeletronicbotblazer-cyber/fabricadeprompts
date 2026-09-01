"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Shield, Zap } from "lucide-react";
import { FadeIn } from "./FadeIn";

const checkoutUrlInicial = "https://pay.cakto.com.br/7dnhb97";
const checkoutUrlCompleto = "https://pay.cakto.com.br/oci2odo";
const checkoutUrlDownsell = "https://pay.cakto.com.br/guw9f5r";

interface FeatureItem {
  text: string;
  bonus?: boolean;
}

const baseFeatures: FeatureItem[] = [
  { text: "+250 prompts organizados prontos para copiar" },
  { text: "Modo Modelo, POV e Selfie UGC" },
  { text: "Novos modulos incluidos no acesso" },
  { text: "Bonus: Galeria Premium de Prompts", bonus: true },
  { text: "Aulas rapidas e exemplos prontos" },
  { text: "Como ativar TIKTOK SHOP em 3 dias!" },
];

const vitalicioExtras: string[] = [
  "Grupo VIP com atualizacoes e troca de ideias",
  "Todas as atualizacoes futuras incluidas",
];

const downsellFeatures = [
  "+250 prompts organizados",
  "Modo Modelo, POV e Selfie UGC",
  "Novos modulos incluidos no acesso",
  "Bonus: Galeria Premium de Prompts",
  "Aulas rapidas e exemplos prontos",
  "Como ativar TIKTOK SHOP em 3 dias!",
  "Grupo VIP com atualizacoes e troca de ideias",
  "Todas as atualizacoes futuras incluidas",
];

function CountdownTimer() {
  const [time, setTime] = useState({ h: 23, m: 59, s: 59 });

  useEffect(() => {
    const stored = localStorage.getItem("pricing_countdown_end");
    let endTime: number;

    if (stored) {
      endTime = parseInt(stored, 10);
      if (Date.now() >= endTime) {
        endTime = Date.now() + 24 * 60 * 60 * 1000;
        localStorage.setItem("pricing_countdown_end", String(endTime));
      }
    } else {
      endTime = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem("pricing_countdown_end", String(endTime));
    }

    function tick() {
      const diff = Math.max(0, endTime - Date.now());
      const h = Math.floor(diff / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);
      setTime({ h, m, s });
    }

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center gap-2">
      {([time.h, time.m, time.s] as const).map((val, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <span className="text-lg sm:text-2xl font-extrabold text-white tabular-nums leading-none">
            {pad(val)}
          </span>
          {i < 2 && (
            <span className="text-sm font-bold text-white/20">:</span>
          )}
        </div>
      ))}
    </div>
  );
}

export function PricingSection() {
  const [downsellOpen, setDownsellOpen] = useState(false);

  return (
    <>
      <section id="planos" className="bg-[#07070A] py-8 md:py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight mb-1 text-center">
              Escolha o seu <span className="text-[#7C3AED]">plano</span>
            </h2>
            <p className="text-xs sm:text-sm text-white/40 text-center mb-6 max-w-sm mx-auto">
              Ambos os planos entregam o mesmo conteudo.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 items-start">

            {/* VITALICIO - highlighted card */}
            <FadeIn>
              <div className="relative bg-[#111118] rounded-[22px] border border-[#7C3AED]/30 p-5 sm:p-6 flex flex-col order-1 md:order-2 shadow-[0_0_40px_rgba(124,58,237,0.1)]">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  <span className="inline-block bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md shadow-[#7C3AED]/30 whitespace-nowrap">
                    MAIS POPULAR
                  </span>
                  <span className="hidden sm:inline-block bg-[#25F4EE]/10 text-[#25F4EE] text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#25F4EE]/20 whitespace-nowrap">
                    VITALICIO
                  </span>
                </div>

                {/* Price block */}
                <div className="text-center mt-2 sm:mt-1 mb-4 sm:mb-5">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-sm font-bold text-white/25 line-through">R$ 39,90</span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-emerald-400 bg-emerald-400/15 px-1.5 py-0.5 rounded-full">
                      -25%
                    </span>
                  </div>
                  <div className="bg-[#7C3AED]/6 rounded-2xl py-4 px-4 -mx-1 border border-[#7C3AED]/10">
                    <p className="text-[10px] sm:text-[11px] text-[#A7A7B2]/50 uppercase tracking-wider font-semibold mb-1">Acesso imediato</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-[3.8rem] sm:text-[4rem] md:text-[4.5rem] font-extrabold text-white leading-none tracking-tight">
                        R$29
                      </span>
                      <span className="text-2xl sm:text-3xl font-bold text-white">,90</span>
                    </div>
                    <p className="text-[11px] text-[#A7A7B2]/40 mt-1.5 font-semibold uppercase tracking-wider">
                      Pagamento unico
                    </p>
                  </div>
                </div>

                <a
                  href={checkoutUrlCompleto}
                  onClick={() => { (window as any).trackCheckout?.('Vitalicio', 29.90); }}
                  className="block w-full text-center bg-gradient-to-r from-[#7C3AED] to-[#EC4899] hover:brightness-110 text-white font-bold py-4 px-6 rounded-2xl transition-all text-sm sm:text-base shadow-lg shadow-[#7C3AED]/25 hover:shadow-[#7C3AED]/35 hover:scale-[1.02] active:scale-[0.98] mb-3 cta-glow"
                >
                  QUERO MEU ACESSO VITALICIO
                </a>

                <div className="mb-4 rounded-xl bg-black/50 border border-white/[0.06] px-3.5 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Zap className="size-3 text-[#7C3AED]" />
                    <span className="text-[10px] font-bold text-white/35 uppercase tracking-wider">Acaba em</span>
                  </div>
                  <CountdownTimer />
                </div>

                <ul className="space-y-1.5 mb-3">
                  {baseFeatures.map((f, i) => (
                    <li key={i}>
                      <div className="flex items-center gap-2">
                        <Check className={`size-3.5 shrink-0 ${f.bonus ? "text-[#25F4EE]" : "text-[#7C3AED]"}`} />
                        <span className={`text-[13px] leading-tight ${f.bonus ? "text-[#25F4EE]/90 font-semibold" : "text-white/80"}`}>{f.text}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-white/[0.06] pt-2.5 mb-3">
                  <p className="text-[9px] font-bold text-[#25F4EE]/50 uppercase tracking-wider mb-2">
                    So no Vitalicio
                  </p>
                  <ul className="space-y-1.5">
                    {vitalicioExtras.map((text, i) => (
                      <li key={i}>
                        <div className="flex items-center gap-2">
                          <Check className="size-3.5 shrink-0 text-[#25F4EE]" />
                          <span className="text-[13px] text-[#25F4EE]/90 font-semibold leading-tight">{text}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-center gap-1.5 mt-auto pt-1">
                  <Shield className="size-3 text-white/20" />
                  <span className="text-[10px] text-white/20">
                    Pagamento seguro / Garantia 7 dias
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* MENSAL card */}
            <FadeIn delay={0.1}>
              <div className="bg-[#111118] rounded-[22px] border border-white/[0.08] p-5 sm:p-6 flex flex-col order-2 md:order-1">
                <h3 className="text-base sm:text-lg font-bold text-white mb-0.5">
                  Plano Mensal
                </h3>
                <p className="text-xs text-white/45 mb-4">
                  Comece hoje e cancele quando quiser.
                </p>

                <div className="mb-4">
                  <span className="text-[2.5rem] sm:text-5xl font-extrabold text-white leading-none tracking-tight">
                    R$17
                  </span>
                  <span className="text-lg sm:text-2xl font-bold text-white">,90</span>
                  <span className="text-xs text-white/35 ml-1.5 font-medium">
                    /mes
                  </span>
                </div>

                <ul className="space-y-1.5 mb-4 flex-1">
                  {baseFeatures.map((f, i) => (
                    <li key={i}>
                      <div className="flex items-center gap-2">
                        <Check className={`size-3.5 shrink-0 ${f.bonus ? "text-[#25F4EE]/50" : "text-white/20"}`} />
                        <span className={`text-[13px] leading-tight ${f.bonus ? "text-[#25F4EE]/50 font-semibold" : "text-white/50"}`}>{f.text}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setDownsellOpen(true)}
                  className="block w-full text-center border border-white/15 text-white hover:bg-white hover:text-black font-bold py-4 px-6 rounded-2xl transition-all text-sm sm:text-base"
                >
                  QUERO COMECAR AGORA
                </button>

                <div className="flex items-center justify-center gap-1.5 mt-3">
                  <Shield className="size-3 text-white/15" />
                  <span className="text-[10px] text-white/15">
                    Acesso imediato / PIX / Garantia 7 dias
                  </span>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* DOWNSELL MODAL */}
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
              className="relative bg-[#15151D] rounded-[22px] border border-white/[0.08] shadow-2xl w-full max-w-md p-6 sm:p-8 z-10"
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

              <p className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-1">
                Antes de continuar...
              </p>

              <h3 className="text-lg sm:text-xl font-extrabold text-white mb-1.5 leading-tight">
                Libere o Vitalicio por apenas{" "}
                <span className="text-[#EC4899]">R$7 a mais</span>
              </h3>

              <p className="text-sm text-white/55 leading-relaxed mb-4">
                Mesma entrega do Mensal, mais Grupo VIP e todas as atualizacoes futuras incluidas.
              </p>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-sm text-white/30 line-through">De R$39,90</span>
                <span className="text-sm text-white/60">por</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#EC4899]">R$24,90</span>
                <span className="ml-1.5 text-[10px] font-bold text-[#25F4EE]/80 bg-[#25F4EE]/10 px-2 py-0.5 rounded-full border border-[#25F4EE]/20">
                  VITALICIO
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-block bg-[#EC4899]/10 text-[#EC4899] text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-[#EC4899]/20">
                  Oferta especial
                </span>
                <span className="inline-block text-[10px] font-bold text-[#25F4EE]/80 bg-[#25F4EE]/10 px-2.5 py-0.5 rounded-full border border-[#25F4EE]/20">
                  Acesso vitalicio
                </span>
              </div>

              <div className="rounded-2xl bg-gradient-to-r from-[#7C3AED]/8 to-[#EC4899]/8 border border-[#7C3AED]/15 p-4 mb-5">
                <div className="space-y-2">
                  {downsellFeatures.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <Check className="size-3.5 text-[#25F4EE] shrink-0 mt-0.5" />
                      <span className="text-xs text-white/70">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={checkoutUrlDownsell}
                  onClick={() => { (window as any).trackCheckout?.('Vitalicio Downsell', 24.90); }}
                  className="block w-full text-center bg-gradient-to-r from-[#7C3AED] to-[#EC4899] hover:brightness-110 text-white font-bold py-4 px-6 rounded-2xl transition-all text-sm sm:text-base shadow-lg shadow-[#7C3AED]/25"
                >
                  SIM, QUERO O VITALICIO
                </a>
                <a
                  href={checkoutUrlInicial}
                  onClick={() => { (window as any).trackCheckout?.('Mensal', 17.90); }}
                  className="block w-full text-center border border-white/[0.08] text-white/50 hover:bg-white/5 font-medium py-3 px-6 rounded-2xl transition-colors text-sm"
                >
                  Nao, continuar com o Mensal
                </a>
              </div>

              <p className="mt-3 text-center text-[10px] text-white/25">
                A diferenca e de apenas R$7 para o plano vitalicio.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
