"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Shield, Zap, Eye, RefreshCw, BookOpen, Users, Layers } from "lucide-react";
import { FadeIn } from "./FadeIn";

const checkoutUrlEspecial = "https://pay.cakto.com.br/3dtfnag_968205";
const checkoutUrlSimples = "https://pay.cakto.com.br/guw9f5r";
const checkoutUrlRecovery = "https://pay.cakto.com.br/7dnhb97";

const comparisonRows = [
  {
    icon: Layers,
    label: "Prompts",
    simples: "250 essenciais",
    especial: "500+ completos",
    simplesFull: false,
    especialFull: true,
  },
  {
    icon: Eye,
    label: "Pré-visualização",
    simples: null,
    especial: "Inclusa",
    simplesFull: false,
    especialFull: true,
  },
  {
    icon: RefreshCw,
    label: "Atualizações",
    simples: null,
    especial: "Semanais",
    simplesFull: false,
    especialFull: true,
  },
  {
    icon: BookOpen,
    label: "Formatos",
    simples: "Básicos",
    especial: "Todos + sazonais",
    simplesFull: false,
    especialFull: true,
  },
  {
    icon: BookOpen,
    label: "Biblioteca",
    simples: "Padrão",
    especial: "Premium",
    simplesFull: true,
    especialFull: true,
  },
  {
    icon: Users,
    label: "Suporte VIP",
    simples: null,
    especial: "Incluso",
    simplesFull: false,
    especialFull: true,
  },
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
  const [recoveryOpen, setRecoveryOpen] = useState(false);

  return (
    <>
      <section id="oferta" className="bg-[#050505] py-10 md:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-2 text-center">
              Escolha seu <span className="text-[#FF2D55]">pacote</span>
            </h2>
            <p className="text-sm sm:text-base text-white/50 text-center mb-8 max-w-md mx-auto">
              Pagamento único. Sem mensalidade.
            </p>
          </FadeIn>

          {/* Price cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 items-start mb-8">

            {/* PACOTE ESPECIAL */}
            <FadeIn>
              <div className="relative bg-[#111113] rounded-2xl border border-[#FF2D55]/30 p-6 sm:p-7 flex flex-col order-1 md:order-1 shadow-[0_0_40px_rgba(255,45,85,0.1)]">
                {/* Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block bg-[#FF2D55] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-1.5 rounded-full shadow-md shadow-[#FF2D55]/30 whitespace-nowrap">
                    MAIS ESCOLHIDO
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-lg sm:text-xl font-bold text-white text-center mt-3 mb-4">
                  Pacote Especial
                </h3>

                {/* Price */}
                <div className="bg-[#FF2D55]/[0.07] rounded-2xl py-5 px-4 -mx-1 border border-[#FF2D55]/10 mb-5">
                  <div className="flex items-baseline justify-center">
                    <span className="text-[3.5rem] sm:text-[4rem] md:text-[4.5rem] font-extrabold text-white leading-none tracking-tight">
                      R$49
                    </span>
                    <span className="text-2xl sm:text-3xl font-bold text-white">,90</span>
                  </div>
                  <p className="text-sm text-[#25F4EE]/80 mt-2 font-semibold text-center">
                    Pagamento único
                  </p>
                </div>

                {/* CTA */}
                <a
                  href={checkoutUrlEspecial}
                  onClick={() => { (window as any).trackCheckout?.('Especial', 49.90); }}
                  className="block w-full text-center bg-[#FF2D55] hover:brightness-110 text-white font-extrabold py-4 px-6 rounded-2xl transition-all text-base sm:text-lg shadow-lg shadow-[#FF2D55]/25 hover:shadow-[#FF2D55]/35 hover:scale-[1.02] active:scale-[0.98] mb-3 uppercase tracking-wide"
                >
                  QUERO O PACOTE ESPECIAL
                </a>

                {/* Countdown */}
                <div className="rounded-xl bg-black/50 border border-[#2A2A2E]/50 px-4 py-2.5 flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <Zap className="size-4 text-[#FF2D55]" />
                    <span className="text-xs font-bold text-white/40 uppercase tracking-wider">Oferta acaba em</span>
                  </div>
                  <CountdownTimer />
                </div>

                {/* Feature list */}
                <ul className="space-y-3">
                  {comparisonRows.filter(r => r.especialFull).map((row, i) => {
                    const Icon = row.icon;
                    return (
                      <li key={i} className="flex items-center gap-3">
                        <div className="size-7 rounded-lg bg-[#25F4EE]/10 border border-[#25F4EE]/15 flex items-center justify-center shrink-0">
                          <Icon className="size-3.5 text-[#25F4EE]" />
                        </div>
                        <span className="text-sm sm:text-base text-white/90 font-medium">{row.especial}</span>
                      </li>
                    );
                  })}
                </ul>

                {/* Trust */}
                <div className="flex items-center justify-center gap-2 mt-5 pt-3 border-t border-[#2A2A2E]/40">
                  <Shield className="size-3.5 text-white/25" />
                  <span className="text-xs text-white/25">
                    Pagamento seguro · Garantia 7 dias
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* PACOTE SIMPLES */}
            <FadeIn delay={0.1}>
              <div className="bg-[#111113] rounded-2xl border border-[#2A2A2E]/60 p-6 sm:p-7 flex flex-col order-2 md:order-2">
                {/* Name */}
                <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-4">
                  Pacote Simples
                </h3>

                {/* Price */}
                <div className="py-5 px-4 -mx-1 mb-5">
                  <div className="flex items-baseline justify-center">
                    <span className="text-[3.5rem] sm:text-[4rem] md:text-[4.5rem] font-extrabold text-white leading-none tracking-tight">
                      R$24
                    </span>
                    <span className="text-2xl sm:text-3xl font-bold text-white">,90</span>
                  </div>
                  <p className="text-sm text-white/40 mt-2 font-semibold text-center">
                    Pagamento único
                  </p>
                </div>

                {/* CTA */}
                <button
                  onClick={() => setRecoveryOpen(true)}
                  className="block w-full text-center border border-white/15 text-white hover:bg-white hover:text-black font-extrabold py-4 px-6 rounded-2xl transition-all text-base sm:text-lg mb-3 uppercase tracking-wide"
                >
                  COMEÇAR PELO SIMPLES
                </button>

                {/* Spacer to align with countdown */}
                <div className="h-12 mb-5" />

                {/* Feature list with X for missing */}
                <ul className="space-y-3">
                  {comparisonRows.map((row, i) => {
                    const Icon = row.icon;
                    const included = row.simples !== null;
                    return (
                      <li key={i} className="flex items-center gap-3">
                        <div className={`size-7 rounded-lg border flex items-center justify-center shrink-0 ${included ? "bg-white/[0.04] border-white/[0.08]" : "bg-transparent border-white/[0.06]"}`}>
                          {included ? (
                            <Icon className="size-3.5 text-white/30" />
                          ) : (
                            <X className="size-3.5 text-white/15" />
                          )}
                        </div>
                        <span className={`text-sm sm:text-base ${included ? "text-white/60 font-medium" : "text-white/25 line-through"}`}>
                          {included ? row.simples : `Sem ${row.label.toLowerCase()}`}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                {/* Trust */}
                <div className="flex items-center justify-center gap-2 mt-5 pt-3 border-t border-[#2A2A2E]/40">
                  <Shield className="size-3.5 text-white/15" />
                  <span className="text-xs text-white/15">
                    Pagamento seguro · Garantia 7 dias
                  </span>
                </div>
              </div>
            </FadeIn>

          </div>

          {/* Comparison table - desktop */}
          <FadeIn delay={0.15}>
            <div className="hidden md:block rounded-2xl border border-[#2A2A2E]/50 overflow-hidden bg-[#111113]/60">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#2A2A2E]/50">
                    <th className="text-left py-4 px-5 text-sm font-bold text-white/40 uppercase tracking-wider">O que você recebe</th>
                    <th className="text-center py-4 px-5 text-sm font-bold text-white/50">Simples</th>
                    <th className="text-center py-4 px-5 text-sm font-bold text-[#25F4EE]">Especial</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => {
                    const Icon = row.icon;
                    return (
                      <tr key={i} className={`${i < comparisonRows.length - 1 ? "border-b border-[#2A2A2E]/30" : ""}`}>
                        <td className="py-3.5 px-5">
                          <div className="flex items-center gap-2.5">
                            <Icon className="size-4 text-white/30" />
                            <span className="text-sm font-medium text-white/70">{row.label}</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-5 text-center">
                          {row.simples ? (
                            <span className="text-sm text-white/50">{row.simples}</span>
                          ) : (
                            <X className="size-4 text-white/15 mx-auto" />
                          )}
                        </td>
                        <td className="py-3.5 px-5 text-center">
                          <span className="text-sm font-semibold text-[#25F4EE]">{row.especial}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* RECOVERY POPUP */}
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
              className="relative bg-[#151518] rounded-2xl border border-[#FF2D55]/20 shadow-2xl w-full max-w-[370px] sm:max-w-sm z-10 overflow-hidden"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Top banner */}
              <div className="bg-[#FF2D55] py-2.5 px-4 text-center">
                <p className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                  OFERTA ESPECIAL
                </p>
              </div>

              <div className="p-6 sm:p-7">
                <button
                  onClick={() => setRecoveryOpen(false)}
                  className="absolute top-2 right-3 size-7 flex items-center justify-center rounded-full text-white/40 hover:text-white/80 hover:bg-white/10 transition-colors"
                  aria-label="Fechar"
                >
                  <X className="size-4" />
                </button>

                {/* Headline */}
                <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight text-center mb-5">
                  Libere o <span className="text-[#FF2D55]">Pacote Especial</span> por apenas{" "}
                  <span className="text-[#25F4EE]">R$32,90</span>
                </h3>

                {/* Checklist */}
                <ul className="space-y-2.5 mb-5">
                  <li className="flex items-center gap-2.5">
                    <Check className="size-4 text-[#25F4EE] shrink-0" />
                    <span className="text-sm text-white/80">500+ prompts completos</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="size-4 text-[#25F4EE] shrink-0" />
                    <span className="text-sm text-white/80">Pré-visualização inclusa</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="size-4 text-[#25F4EE] shrink-0" />
                    <span className="text-sm text-white/80">Atualizações semanais</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="size-4 text-[#25F4EE] shrink-0" />
                    <span className="text-sm text-white/80">Todos os formatos e categorias</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="size-4 text-[#25F4EE] shrink-0" />
                    <span className="text-sm text-white/80">Biblioteca Premium + Suporte VIP</span>
                  </li>
                </ul>

                {/* Price box */}
                <div className="rounded-2xl bg-[#FF2D55]/[0.07] border border-[#FF2D55]/15 px-5 py-4 mb-5 shadow-[0_0_30px_rgba(255,45,85,0.08)]">
                  <div className="flex items-baseline justify-center">
                    <span className="text-[3rem] sm:text-[3.4rem] font-extrabold text-white leading-none tracking-tight">
                      R$32
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-white">,90</span>
                  </div>
                  <p className="text-sm text-white/40 text-center mt-1.5 font-medium">
                    Pagamento único
                  </p>
                </div>

                {/* Pulsing CTA */}
                <motion.a
                  href={checkoutUrlRecovery}
                  onClick={() => { (window as any).trackCheckout?.('Especial Recovery', 32.90); }}
                  className="block w-full text-center bg-[#FF2D55] hover:brightness-110 text-white font-extrabold py-4 px-6 rounded-2xl transition-all text-base sm:text-lg shadow-lg shadow-[#FF2D55]/30 mb-4 uppercase tracking-wide"
                  animate={{
                    boxShadow: [
                      "0 4px 20px rgba(255,45,85,0.3)",
                      "0 4px 35px rgba(255,45,85,0.55)",
                      "0 4px 20px rgba(255,45,85,0.3)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  QUERO O PACOTE ESPECIAL
                </motion.a>

                {/* Secondary link */}
                <a
                  href={checkoutUrlSimples}
                  onClick={() => { (window as any).trackCheckout?.('Simples', 24.90); }}
                  className="block w-full text-center border border-[#2A2A2E]/60 text-white/35 hover:text-white/50 hover:bg-white/[0.03] font-medium py-2.5 px-6 rounded-xl transition-colors text-sm"
                >
                  Não, continuar com o Simples
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
