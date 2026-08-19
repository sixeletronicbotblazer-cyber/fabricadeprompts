"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Shield, Zap, Crown, Repeat } from "lucide-react";
import { FadeIn } from "./FadeIn";

const checkoutUrlMensal = "https://pay.cakto.com.br/7dnhb97";
const checkoutUrlVitalicio = "https://pay.cakto.com.br/oci2odo";
const checkoutUrlRecovery = "https://pay.cakto.com.br/guw9f5r";

const vitalicioFeatures = [
  "Acesso vitalício ao app",
  "+250 prompts organizados",
  "Modo Modelo, POV e Selfie UGC",
  "Prompts por tipo de produto e roupa",
  "Prompts de movimento",
  "Aulas rápidas e exemplos práticos",
  "Galeria Premium de Prompts",
  "Grupo VIP com atualizações",
  "Novos conteúdos adicionados ao longo do tempo",
  "Pagamento único",
  "Acesso imediato aos módulos disponíveis",
];

const mensalFeatures = [
  "Acesso mensal ao app",
  "Prompts principais",
  "Categorias essenciais",
  "Comece a testar hoje",
  "Pagamento recorrente mensal",
  "Cancele quando quiser",
];

const recoveryFeatures = [
  "Acesso vitalício ao app",
  "+250 prompts organizados",
  "Modo Modelo, POV e Selfie UGC",
  "Galeria Premium de Prompts",
  "Atualizações futuras",
  "Grupo VIP",
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
  const [recoveryOpen, setRecoveryOpen] = useState(false);

  return (
    <>
      <section id="planos" className="bg-[#0D0D0D] py-10 md:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight mb-2 text-center">
              Escolha seu <span className="text-[#FE2C55]">acesso</span>
            </h2>
            <p className="text-sm text-white/50 text-center mb-10 max-w-md mx-auto">
              Comece pelo mensal ou garanta o acesso vitalício com todos os módulos, atualizações e bônus premium.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 items-start">
            {/* VITALÍCIO — primary card */}
            <FadeIn>
              <div className="relative bg-[#111] rounded-2xl border-2 border-[#FE2C55]/60 p-5 sm:p-6 flex flex-col order-1 md:order-2 shadow-[0_0_40px_rgba(254,44,85,0.12),0_0_80px_rgba(37,244,238,0.05)]">
                {/* Badges */}
                <div className="flex flex-wrap items-center justify-center gap-2 absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block bg-[#FE2C55] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md shadow-[#FE2C55]/30 whitespace-nowrap">
                    Mais escolhido
                  </span>
                  <span className="inline-block bg-white/10 text-white/80 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/15 whitespace-nowrap">
                    Acesso vitalício
                  </span>
                </div>

                {/* Urgency header */}
                <div className="text-center mt-4 mb-5">
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">
                    Promoção válida por 24 horas
                  </p>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight mb-1.5">
                    Plano Vitalício
                  </h3>
                  <p className="text-xs sm:text-[13px] text-white/45 leading-relaxed max-w-xs mx-auto">
                    Acesso completo à plataforma, módulos extras, atualizações e bônus premium sem mensalidade.
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
                    R$ 39,90 travado SÓ HOJE. Amanhã o valor volta ao normal.
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
                  {vitalicioFeatures.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 ${f.startsWith("Galeria") ? "mt-1" : ""}`}>
                      <Check className={`size-4 shrink-0 mt-0.5 ${f.startsWith("Galeria") ? "text-[#25F4EE]" : "text-[#FE2C55]"}`} />
                      <span className={`text-sm ${f.startsWith("Galeria") ? "text-[#25F4EE]/90 font-semibold" : "text-white/85"}`}>{f}</span>
                    </li>
                  ))}
                  <li className="ml-6.5">
                    <span className="text-[10px] text-white/30 leading-relaxed block">
                      Acervo visual com imagens de referência, categorias, favoritos e botão de copiar prompt.
                    </span>
                  </li>
                </ul>

                {/* CTA */}
                <a
                  href={checkoutUrlVitalicio}
                  className="block w-full text-center bg-[#FE2C55] hover:bg-[#e62750] text-white font-bold py-3.5 px-6 rounded-full transition-all text-sm sm:text-base shadow-lg shadow-[#FE2C55]/25 hover:shadow-[#FE2C55]/40 hover:scale-[1.02] active:scale-[0.98]"
                >
                  QUERO O ACESSO VITALÍCIO
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

            {/* MENSAL — simpler card */}
            <FadeIn delay={0.1}>
              <div className="bg-[#1A1A1A] rounded-2xl border border-white/[0.08] p-5 sm:p-6 flex flex-col order-2 md:order-1">
                <div className="mb-5">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5">
                    Plano Mensal
                  </h3>
                  <p className="text-sm text-white/50">
                    Para começar com acesso aos prompts principais e testar a plataforma mês a mês.
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
                  {mensalFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className="size-4 text-white/30 shrink-0 mt-0.5" />
                      <span className="text-sm text-white/70">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setRecoveryOpen(true)}
                  className="block w-full text-center border-2 border-white/20 text-white hover:bg-white hover:text-black font-bold py-3.5 px-6 rounded-full transition-all text-sm sm:text-base cursor-pointer"
                >
                  COMEÇAR PELO MENSAL
                </button>

                <div className="flex items-center justify-center gap-1.5 mt-3">
                  <Shield className="size-3 text-white/20" />
                  <span className="text-[10px] text-white/20">
                    Acesso imediato • PIX seguro • Cancele quando quiser
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Microcopy */}
          <FadeIn delay={0.15}>
            <p className="text-center text-[11px] text-white/25 mt-8">
              Acesso liberado após confirmação do pagamento.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Recovery Popup — Vitalício special offer */}
      <AnimatePresence>
        {recoveryOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setRecoveryOpen(false)}
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
                onClick={() => setRecoveryOpen(false)}
                className="absolute top-4 right-4 size-8 flex items-center justify-center rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Fechar"
              >
                <X className="size-5" />
              </button>

              <p className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-1">
                Antes de continuar no mensal…
              </p>

              <h3 className="text-lg sm:text-xl font-extrabold text-white mb-1.5 leading-tight">
                Libere o acesso vitalício com{" "}
                <span className="text-[#FE2C55]">condição especial.</span>
              </h3>

              <p className="text-sm text-white/55 leading-relaxed mb-4">
                Por uma diferença pequena, você pode trocar o plano mensal pelo acesso vitalício e manter todos os módulos, atualizações e bônus premium sem pagar todo mês.
              </p>

              {/* Highlight badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#25F4EE] bg-[#25F4EE]/10 px-2.5 py-1 rounded-full border border-[#25F4EE]/20">
                  <Crown className="size-3" />
                  Plano Vitalício
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-white/60 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                  Pagamento único
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-white/60 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                  Sem mensalidade
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-sm text-white/30 line-through">De R$29,90</span>
                <span className="text-sm text-white/60">por</span>
                <span className="text-xl sm:text-2xl font-extrabold text-[#FE2C55]">R$22,90</span>
              </div>

              <div className="inline-block mb-4 bg-[#FE2C55]/15 text-[#FE2C55] text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-[#FE2C55]/25">
                Condição especial nesta tela
              </div>

              <div className="rounded-xl bg-gradient-to-r from-[#FE2C55]/10 to-[#25F4EE]/10 border border-[#FE2C55]/20 p-4 mb-5">
                <div className="space-y-2">
                  {recoveryFeatures.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <Check className="size-3.5 text-[#25F4EE] shrink-0 mt-0.5" />
                      <span className="text-xs text-white/70">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={checkoutUrlRecovery}
                  className="block w-full text-center bg-[#FE2C55] hover:bg-[#e62750] text-white font-bold py-3.5 px-6 rounded-full transition-all text-sm sm:text-base shadow-lg shadow-[#FE2C55]/25"
                >
                  SIM, QUERO O VITALÍCIO
                </a>
                <a
                  href={checkoutUrlMensal}
                  className="block w-full text-center border border-white/15 text-white/50 hover:bg-white/5 font-medium py-3 px-6 rounded-full transition-colors text-sm"
                >
                  Não, continuar no mensal
                </a>
              </div>

              <p className="mt-3 text-center text-[10px] text-white/25">
                Oportunidade de acesso vitalício com condição especial.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
