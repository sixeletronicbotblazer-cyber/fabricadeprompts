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
  vitalicioOnly?: boolean;
}

const baseFeatures: FeatureItem[] = [
  { text: "+250 prompts organizados prontos para copiar" },
  { text: "Modo Modelo, POV e Selfie UGC" },
  { text: "Novos módulos incluídos no acesso" },
  { text: "Bônus: Galeria Premium de Prompts", bonus: true },
  { text: "Aulas rápidas e exemplos prontos" },
  { text: "Como ativar TIKTOK SHOP em 3 dias!" },
];

const vitalicioExtras: FeatureItem[] = [
  { text: "Grupo VIP com atualizações e troca de ideias", vitalicioOnly: true },
  { text: "Todas as atualizações futuras incluídas", vitalicioOnly: true },
];

const mensalExtras: FeatureItem[] = [
  { text: "Acesso imediato" },
  { text: "Garantia simples de 7 dias" },
];

const vitalicioExtras2: FeatureItem[] = [
  { text: "Acesso imediato, pague uma vez só" },
  { text: "Garantia simples de 7 dias" },
];

const downsellFeatures = [
  "+250 prompts organizados",
  "Modo Modelo, POV e Selfie UGC",
  "Novos módulos incluídos no acesso",
  "Bônus: Galeria Premium de Prompts",
  "Aulas rápidas e exemplos prontos",
  "Como ativar TIKTOK SHOP em 3 dias!",
  "Grupo VIP com atualizações e troca de ideias",
  "Todas as atualizações futuras incluídas",
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
    <div className="flex items-center justify-center gap-2.5">
      {([time.h, time.m, time.s] as const).map((val, i) => (
        <div key={i} className="flex items-center gap-2.5">
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums leading-none">
              {pad(val)}
            </span>
            <span className="text-[9px] sm:text-[10px] text-white/40 font-medium mt-1 uppercase tracking-wider">
              {["Horas", "Min", "Seg"][i]}
            </span>
          </div>
          {i < 2 && (
            <span className="text-xl font-bold text-white/20 -mt-3">:</span>
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
      <section id="planos" className="bg-black py-8 md:py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight mb-2 text-center">
              Escolha o seu <span className="text-[#FE2C55]">plano</span>
            </h2>
            <p className="text-sm text-white/50 text-center mb-2 max-w-md mx-auto">
              3 modos de vídeo prontos para TikTok Shop e Shopee.
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <p className="text-xs text-white/30 text-center mb-8 max-w-lg mx-auto">
              Ambos os planos entregam o mesmo conteúdo. O Vitalício inclui Grupo VIP e atualizações futuras de graça.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 items-start">
            {/* VITALÍCIO, premium box */}
            <FadeIn>
              <div className="relative bg-[#111] rounded-2xl border-2 border-[#FE2C55]/60 p-5 sm:p-6 flex flex-col order-1 md:order-2 shadow-[0_0_40px_rgba(254,44,85,0.12),0_0_80px_rgba(37,244,238,0.05)]">
                {/* Top badge */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-block bg-[#FE2C55] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-4 sm:px-5 py-1.5 rounded-full shadow-md shadow-[#FE2C55]/30 whitespace-nowrap">
                    VITALÍCIO
                  </span>
                </div>

                {/* Urgency header */}
                <div className="text-center mt-2 mb-5">
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">
                    Promoção válida por 24 horas
                  </p>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight mb-1.5">
                    Somente hoje por esse preço.
                  </h3>
                  <p className="text-xs sm:text-[13px] text-white/45 leading-relaxed max-w-xs mx-auto">
                    Você tem 24 horas pra garantir. Quando o cronômetro zerar, o valor volta pro cheio, sem exceção.
                  </p>
                  <div className="inline-block mt-3 bg-[#FE2C55]/15 text-[#FE2C55] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#FE2C55]/25">
                    <Zap className="size-3 inline -mt-0.5 mr-1" />
                    Oferta relâmpago
                  </div>
                </div>

                {/* Countdown */}
                <div className="mb-4 rounded-xl bg-black/60 border border-white/[0.06] p-4">
                  <p className="text-center text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3">
                    Promoção acaba em (24h)
                  </p>
                  <CountdownTimer />
                </div>

                {/* Price warning */}
                <div className="mb-5 rounded-lg bg-amber-500/10 border border-amber-500/20 px-3.5 py-2.5 text-center">
                  <p className="text-[11px] sm:text-xs text-amber-400 font-semibold">
                    R$ 29,90 travado SÓ HOJE. Amanhã o valor volta ao normal.
                  </p>
                </div>

                {/* Price area */}
                <div className="mb-5 text-center">
                  <span className="text-base font-bold text-white/30 line-through">R$ 39,90</span>
                  <span className="inline-block ml-2 text-[10px] font-bold text-emerald-400 bg-emerald-400/15 px-2 py-0.5 rounded-full">
                    -25% OFF
                  </span>
                  <div className="mt-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white">
                      R$ 29
                    </span>
                    <span className="text-lg font-bold text-white">,90</span>
                  </div>
                  <p className="text-[11px] text-white/40 mt-1.5">
                    Pagamento único no PIX · acesso imediato
                  </p>
                </div>

                {/* Features list */}
                <ul className="space-y-2.5 mb-5 flex-1">
                  {[...baseFeatures, ...vitalicioExtras, ...vitalicioExtras2].map((f, i) => (
                    <li key={i} className={f.bonus ? "mt-1" : ""}>
                      <div className="flex items-start gap-2.5">
                        <Check className={`size-4 shrink-0 mt-0.5 ${f.bonus ? "text-[#25F4EE]" : f.vitalicioOnly ? "text-[#25F4EE]" : "text-[#FE2C55]"}`} />
                        <div className="flex-1">
                          <span className={`text-sm ${f.bonus ? "text-[#25F4EE]/90 font-semibold" : f.vitalicioOnly ? "text-[#25F4EE]/90 font-semibold" : "text-white/85"}`}>{f.text}</span>
                          {f.vitalicioOnly && (
                            <span className="ml-2 inline-block text-[9px] font-bold text-[#25F4EE] bg-[#25F4EE]/10 px-1.5 py-0.5 rounded-full border border-[#25F4EE]/20 uppercase tracking-wider">
                              Só vitalício
                            </span>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                  <li className="ml-6.5">
                    <span className="text-[10px] text-white/30 leading-relaxed block">
                      Acervo visual com imagens, categorias, favoritos e botão de copiar prompt.
                    </span>
                  </li>
                </ul>

                {/* CTA */}
                <a
                  href={checkoutUrlCompleto}
                  className="block w-full text-center bg-[#FE2C55] hover:bg-[#e62750] text-white font-bold py-3.5 px-6 rounded-full transition-all text-sm sm:text-base shadow-lg shadow-[#FE2C55]/25 hover:shadow-[#FE2C55]/40 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Quero o plano vitalício por R$29,90
                </a>

                <div className="flex items-center justify-center gap-1.5 mt-3">
                  <Shield className="size-3 text-white/25" />
                  <span className="text-[10px] text-white/25">
                    Pagamento seguro • Garantia 7 dias
                  </span>
                </div>

                <p className="mt-2 text-center text-[10px] text-white/20">
                  Depois que o cronômetro zerar, o preço volta para R$39,90.
                </p>
              </div>
            </FadeIn>

            {/* MENSAL, simpler box */}
            <FadeIn delay={0.1}>
              <div className="bg-[#1A1A1A] rounded-2xl border border-white/[0.08] p-5 sm:p-6 flex flex-col order-2 md:order-1">
                <div className="mb-5">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5">
                    Plano Mensal
                  </h3>
                  <p className="text-sm text-white/50">
                    Mesmo conteúdo do Vitalício, sem Grupo VIP e atualizações futuras.
                  </p>
                </div>

                <div className="mb-5">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white">
                    R$ 17
                  </span>
                  <span className="text-lg font-bold text-white">,90</span>
                  <span className="text-xs text-white/40 ml-1.5">
                    /mês
                  </span>
                </div>

                <ul className="space-y-2.5 mb-5 flex-1">
                  {[...baseFeatures, ...mensalExtras].map((f, i) => (
                    <li key={i} className={f.bonus ? "mt-1" : ""}>
                      <div className="flex items-start gap-2.5">
                        <Check className={`size-4 shrink-0 mt-0.5 ${f.bonus ? "text-[#25F4EE]" : "text-white/30"}`} />
                        <span className={`text-sm ${f.bonus ? "text-[#25F4EE]/90 font-semibold" : "text-white/70"}`}>{f.text}</span>
                      </div>
                    </li>
                  ))}
                  <li className="ml-6.5">
                    <span className="text-[10px] text-white/25 leading-relaxed block">
                      Acervo visual com imagens, categorias, favoritos e botão de copiar prompt.
                    </span>
                  </li>
                </ul>

                <button
                  onClick={() => setDownsellOpen(true)}
                  className="block w-full text-center border-2 border-white/20 text-white hover:bg-white hover:text-black font-bold py-3.5 px-6 rounded-full transition-all text-sm sm:text-base"
                >
                  Assinar por R$17,90/mês
                </button>

                <div className="flex items-center justify-center gap-1.5 mt-3">
                  <Shield className="size-3 text-white/20" />
                  <span className="text-[10px] text-white/20">
                    Acesso imediato • PIX seguro • Garantia de 7 dias
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Downsell Popup, R$24,90 Vitalício */}
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

              <p className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-1">
                Antes de continuar…
              </p>

              <h3 className="text-lg sm:text-xl font-extrabold text-white mb-1.5 leading-tight">
                Libere o Plano Vitalício por apenas{" "}
                <span className="text-[#FE2C55]">R$7 a mais</span>
              </h3>

              <p className="text-sm text-white/55 leading-relaxed mb-4">
                Você estava indo para o Mensal, mas por R$7 a mais leva o Vitalício com a mesma entrega, mais Grupo VIP e todas as atualizações futuras incluídas.
              </p>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-sm text-white/30 line-through">De R$29,90</span>
                <span className="text-sm text-white/60">por</span>
                <span className="text-xl sm:text-2xl font-extrabold text-[#FE2C55]">R$24,90</span>
                <span className="ml-1.5 text-[10px] font-bold text-[#25F4EE]/80 bg-[#25F4EE]/10 px-2 py-0.5 rounded-full border border-[#25F4EE]/20">
                  VITALÍCIO
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-block bg-[#FE2C55]/15 text-[#FE2C55] text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-[#FE2C55]/25">
                  Oferta especial nesta tela
                </span>
                <span className="inline-block text-[10px] font-bold text-[#25F4EE]/80 bg-[#25F4EE]/10 px-2.5 py-0.5 rounded-full border border-[#25F4EE]/20">
                  Acesso vitalício
                </span>
              </div>

              <div className="rounded-xl bg-gradient-to-r from-[#FE2C55]/10 to-[#25F4EE]/10 border border-[#FE2C55]/20 p-4 mb-5">
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
                  className="block w-full text-center bg-[#FE2C55] hover:bg-[#e62750] text-white font-bold py-3.5 px-6 rounded-full transition-all text-sm sm:text-base shadow-lg shadow-[#FE2C55]/25"
                >
                  Sim, quero o vitalício por R$24,90
                </a>
                <a
                  href={checkoutUrlInicial}
                  className="block w-full text-center border border-white/15 text-white/50 hover:bg-white/5 font-medium py-3 px-6 rounded-full transition-colors text-sm"
                >
                  Não, continuar com o Plano Mensal
                </a>
              </div>

              <p className="mt-3 text-center text-[10px] text-white/25">
                A diferença é de apenas R$7 para acessar o plano vitalício.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
