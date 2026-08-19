"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Shield, Zap, Crown, Repeat, Gift, ArrowRight, Sparkles } from "lucide-react";
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
            <span className="text-2xl sm:text-3xl font-extrabold text-[#F4F4F5] tabular-nums leading-none">
              {pad(val)}
            </span>
            <span className="text-[9px] sm:text-[10px] text-[#A1A1AA]/40 font-medium mt-1 uppercase tracking-wider">
              {["Horas", "Min", "Seg"][i]}
            </span>
          </div>
          {i < 2 && (
            <span className="text-xl font-bold text-[#A1A1AA]/20 -mt-3">:</span>
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
      <section id="planos" className="bg-[#0D0D10] py-10 sm:py-14 md:py-20 px-4 glow-pricing relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#FF2D55]/[0.06] rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-[1.3rem] sm:text-2xl md:text-[2rem] font-black leading-[1.1] sm:leading-[1.0] text-[#F4F4F5] mb-2 text-center">
              Escolha seu <span className="text-[#FF2D55]">acesso</span>
            </h2>
            <p className="text-[13px] sm:text-sm text-[#A1A1AA]/80 text-center mb-6 sm:mb-10 max-w-md mx-auto">
              Comece pelo <span className="text-[#A1A1AA]">mensal</span> ou garanta o acesso <span className="text-gradient-main">vitalício</span> com todos os módulos, atualizações e <span className="text-[#FF2D55]">bônus premium</span>.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 items-start">
            {/* VITALÍCIO — primary card */}
            <FadeIn>
              <div className="relative bg-[#151518] rounded-2xl border-2 border-transparent border-gradient-vitalicio p-5 sm:p-6 flex flex-col order-1 md:order-2 shadow-[0_0_50px_rgba(255,45,85,0.12),0_0_100px_rgba(168,85,247,0.06),0_0_80px_rgba(34,211,238,0.04)]">
                {/* Badges */}
                <div className="flex flex-wrap items-center justify-center gap-2 absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block bg-[#FF2D55] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md shadow-[#FF2D55]/30 whitespace-nowrap">
                    Mais escolhido
                  </span>
                  <span className="inline-block bg-white/5 text-[#A1A1AA] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#2A2A2E] whitespace-nowrap">
                    Acesso vitalício
                  </span>
                  <span className="inline-flex items-center gap-1 bg-[#A855F7]/15 text-[#A855F7] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#A855F7]/20 whitespace-nowrap">
                    <Gift className="size-3" />Com super bônus
                  </span>
                </div>

                {/* Urgency header */}
                <div className="text-center mt-4 mb-5">
                  <p className="text-[10px] font-bold text-[#A1A1AA]/40 uppercase tracking-widest mb-2">
                    Promoção válida por 24 horas
                  </p>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#F4F4F5] leading-tight mb-1.5">
                    Plano <span className="text-gradient-main">Vitalício</span>
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#A1A1AA]/70 leading-relaxed max-w-xs mx-auto">
                    Acesso completo à plataforma, módulos extras, atualizações e bônus premium sem mensalidade.
                  </p>
                  <div className="inline-block mt-3 bg-[#FF2D55]/10 text-[#FF2D55] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#FF2D55]/20">
                    <Zap className="size-3 inline -mt-0.5 mr-1" />
                    Oferta relâmpago
                  </div>
                </div>

                {/* Countdown */}
                <div className="mb-4 rounded-xl bg-[#050505]/80 border border-[#2A2A2E]/60 p-4">
                  <p className="text-center text-[10px] font-bold text-[#A1A1AA]/40 uppercase tracking-widest mb-3">
                    Promoção acaba em (24h)
                  </p>
                  <CountdownTimer />
                </div>

                {/* Price warning */}
                <div className="mb-5 rounded-lg bg-[#FF4D1A]/8 border border-[#FF4D1A]/15 px-3.5 py-2.5 text-center">
                  <p className="text-[11px] sm:text-xs text-[#FF4D1A] font-semibold">
                    R$ 29,90 disponível SÓ HOJE. Amanhã volta para R$ 39,90.
                  </p>
                </div>

                {/* Price area */}
                <div className="mb-5 text-center">
                  <span className="text-base font-bold text-[#A1A1AA]/40 line-through">R$ 39,90</span>
                  <span className="inline-block ml-2 text-[10px] font-bold text-[#22D3EE] bg-[#22D3EE]/10 px-2 py-0.5 rounded-full border border-[#22D3EE]/15">
                    -25% OFF
                  </span>
                  <div className="mt-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-[#F4F4F5]">
                      R$ 29
                    </span>
                    <span className="text-lg font-bold text-[#F4F4F5]">,90</span>
                  </div>
                  <p className="text-[11px] text-[#A1A1AA]/50 mt-1.5">
                    Pagamento único no PIX · acesso imediato
                  </p>
                </div>

                {/* Features list */}
                <ul className="space-y-2.5 mb-1 flex-1">
                  {vitalicioFeatures.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 ${f.startsWith("Galeria") ? "mt-1" : ""}`}>
                      <Check className={`size-4 shrink-0 mt-0.5 ${f.startsWith("Galeria") ? "text-[#22D3EE]" : "text-[#FF2D55]"}`} />
                      <span className={`text-sm ${f.startsWith("Galeria") ? "text-[#22D3EE] font-semibold" : "text-[#C4C4CC]"}`}>{f}</span>
                    </li>
                  ))}
                  <li className="ml-6.5">
                    <span className="text-[10px] text-[#A1A1AA]/40 leading-relaxed block">
                      Acervo visual com imagens de referência, categorias, favoritos e botão de copiar prompt.
                    </span>
                  </li>
                </ul>

                {/* Galeria Premium internal block */}
                <div className="mt-1 mb-4 rounded-xl bg-gradient-to-r from-[#22D3EE]/5 to-[#A855F7]/5 border border-[#22D3EE]/15 p-3.5 flex items-center gap-3">
                  <div className="flex-shrink-0 size-8 rounded-lg bg-[#22D3EE]/10 border border-[#22D3EE]/15 flex items-center justify-center">
                    <Sparkles className="size-4 text-[#22D3EE]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#22D3EE]">Inclui Galeria Premium de Prompts</p>
                    <p className="text-[10px] text-[#A1A1AA]/60">Acervo visual com categorias, filtros e botão de copiar.</p>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={checkoutUrlVitalicio}
                  className="block w-full text-center bg-cta-gradient hover:brightness-110 shadow-cta hover:shadow-cta-hover font-extrabold tracking-wide uppercase text-[15px] sm:text-base py-4 px-6 rounded-xl transition-all"
                >
                  QUERO O ACESSO VITALÍCIO <ArrowRight className="inline size-4 ml-2" />
                </a>

                <div className="flex items-center justify-center gap-1.5 mt-3">
                  <Shield className="size-3 text-[#A1A1AA]/30" />
                  <span className="text-[10px] text-[#A1A1AA]/30">
                    Pagamento seguro • Garantia 7 dias
                  </span>
                </div>

                <p className="mt-2 text-center text-[10px] text-[#A1A1AA]/25">
                  Depois que o cronômetro zerar, o preço volta para R$39,90.
                </p>
              </div>
            </FadeIn>

            {/* MENSAL — simpler card */}
            <FadeIn delay={0.1}>
              <div className="bg-[#111113] rounded-2xl border border-[#2A2A2E]/60 p-5 sm:p-6 flex flex-col order-2 md:order-1">
                <div className="mb-5">
                  <h3 className="text-lg sm:text-xl font-bold text-[#F4F4F5] mb-0.5">
                    Plano Mensal
                  </h3>
                  <p className="text-sm text-[#A1A1AA]/70">
                    Para começar com acesso aos prompts principais e testar a plataforma mês a mês.
                  </p>
                </div>

                <div className="mb-5">
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#F4F4F5]">
                    R$ 17
                  </span>
                  <span className="text-lg font-bold text-[#F4F4F5]">,90</span>
                  <span className="text-xs text-[#A1A1AA]/60 ml-1.5">
                    /mês
                  </span>
                </div>

                <ul className="space-y-2.5 mb-5 flex-1">
                  {mensalFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className="size-4 text-[#A1A1AA]/30 shrink-0 mt-0.5" />
                      <span className="text-sm text-[#A1A1AA]/70">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setRecoveryOpen(true)}
                  className="block w-full text-center border border-[#2A2A2E]/60 text-[#A1A1AA] hover:bg-white/5 hover:text-[#F4F4F5] font-bold py-3.5 px-6 rounded-xl transition-all text-sm sm:text-base cursor-pointer"
                >
                  COMEÇAR PELO MENSAL
                </button>

                <div className="flex items-center justify-center gap-1.5 mt-3">
                  <Shield className="size-3 text-[#A1A1AA]/25" />
                  <span className="text-[10px] text-[#A1A1AA]/25">
                    Acesso imediato • PIX seguro • Cancele quando quiser
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Microcopy */}
          <FadeIn delay={0.15}>
            <p className="text-center text-[11px] text-[#A1A1AA]/30 mt-8">
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
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
              onClick={() => setRecoveryOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="relative bg-[#111113] rounded-2xl border border-[#FF2D55]/20 shadow-[0_0_60px_rgba(255,45,85,0.10)] w-full max-w-md p-6 sm:p-8 z-10"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button
                onClick={() => setRecoveryOpen(false)}
                className="absolute top-4 right-4 size-8 flex items-center justify-center rounded-full text-[#A1A1AA]/40 hover:text-[#F4F4F5] hover:bg-white/10 transition-colors"
                aria-label="Fechar"
              >
                <X className="size-5" />
              </button>

              <p className="text-[10px] font-bold text-[#A1A1AA]/50 uppercase tracking-wider mb-1">
                Antes de continuar no mensal…
              </p>

              <h3 className="text-lg sm:text-xl font-extrabold text-[#F4F4F5] mb-1.5 leading-tight">
                Libere o acesso vitalício com{" "}
                <span className="text-[#FF2D55]">condição especial.</span>
              </h3>

              <p className="text-sm text-[#A1A1AA]/70 leading-relaxed mb-4">
                Por uma diferença pequena, você pode trocar o plano mensal pelo acesso vitalício e manter todos os módulos, atualizações e bônus premium sem pagar todo mês.
              </p>

              {/* Highlight badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#22D3EE] bg-[#22D3EE]/10 px-2.5 py-1 rounded-full border border-[#22D3EE]/20">
                  <Crown className="size-3" />
                  Plano Vitalício
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#A1A1AA]/50 bg-white/5 px-2.5 py-1 rounded-full border border-[#2A2A2E]/60">
                  Pagamento único
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#A1A1AA]/50 bg-white/5 px-2.5 py-1 rounded-full border border-[#2A2A2E]/60">
                  Sem mensalidade
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-sm text-[#A1A1AA]/30 line-through">De R$29,90</span>
                <span className="text-sm text-[#A1A1AA]/60">por</span>
                <span className="text-2xl sm:text-3xl font-black text-[#FF2D55]">R$22,90</span>
              </div>

              <div className="inline-block mb-4 bg-[#FF2D55]/10 text-[#FF2D55] text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-[#FF2D55]/20">
                Condição especial nesta tela
              </div>

              <div className="rounded-xl bg-gradient-to-r from-[#FF2D55]/5 to-[#22D3EE]/5 border border-[#FF2D55]/15 p-4 mb-5">
                <div className="space-y-2">
                  {recoveryFeatures.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <Check className="size-3.5 text-[#22D3EE] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#C4C4CC]">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={checkoutUrlRecovery}
                  className="block w-full text-center bg-cta-gradient hover:brightness-110 shadow-cta font-extrabold uppercase tracking-wide rounded-xl py-3.5 px-6 transition-all text-sm sm:text-base"
                >
                  SIM, QUERO O VITALÍCIO
                </a>
                <a
                  href={checkoutUrlMensal}
                  className="block w-full text-center border border-[#2A2A2E]/60 text-[#A1A1AA]/50 hover:bg-white/5 rounded-xl py-3 px-6 transition-colors text-sm"
                >
                  Não, continuar no mensal
                </a>
              </div>

              <p className="mt-3 text-center text-[10px] text-[#A1A1AA]/30">
                Oportunidade de acesso vitalício com condição especial.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
