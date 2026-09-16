"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Shield, Zap, BadgePercent } from "lucide-react";
import { FadeIn } from "./FadeIn";

const checkoutUrl = "https://pay.cakto.com.br/3dtfnag_968205";

const features = [
  { text: "Biblioteca completa com +500 prompts", highlight: true },
  { text: "Pré-visualização de cada prompt antes de usar", highlight: true },
  { text: "Atualizações semanais com novos prompts", highlight: true },
  { text: "Todos os formatos: Modelo, POV, UGC, Produto, Dancinha…" },
  { text: "Ganchos, transições e movimentos prontos" },
  { text: "Categorias por nicho: Moda, Casa, Pet, Acessórios…" },
  { text: "Formatos sazonais: Natal, Dia dos Pais e datas comemorativas" },
  { text: "Grupo VIP com troca de ideias" },
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
    <div className="flex items-center gap-1.5">
      {([time.h, time.m, time.s] as const).map((val, i) => (
        <div key={i} className="flex items-center gap-1">
          <span className="text-base sm:text-xl font-extrabold text-white tabular-nums leading-none">
            {pad(val)}
          </span>
          {i < 2 && (
            <span className="text-xs font-bold text-white/20">:</span>
          )}
        </div>
      ))}
    </div>
  );
}

export function PricingSection() {
  return (
    <section id="oferta" className="bg-[#050505] py-14 md:py-20 px-4">
      <div className="max-w-xl mx-auto">

        <FadeIn>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-3 text-center">
            Acesse a <span className="text-[#FF2D55]">biblioteca completa</span>
          </h2>
          <p className="text-base text-white/40 text-center mb-10">
            Pagamento único. Acesso vitalício.
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="relative bg-[#111113] rounded-2xl border border-[#FF2D55]/30 p-6 sm:p-8 shadow-[0_0_50px_rgba(255,45,85,0.12)]">

            {/* OFERTA badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-[#FF2D55] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-1.5 rounded-full shadow-lg shadow-[#FF2D55]/30 whitespace-nowrap">
                <BadgePercent className="size-3.5" />
                OFERTA ESPECIAL
              </span>
            </div>

            {/* Countdown */}
            <div className="rounded-xl bg-black/40 border border-[#2A2A2E]/50 px-4 py-2.5 flex items-center justify-between mb-6 mt-2">
              <div className="flex items-center gap-1.5">
                <Zap className="size-3.5 text-[#FF2D55]" />
                <span className="text-xs font-bold text-white/40 uppercase tracking-wider">Oferta acaba em</span>
              </div>
              <CountdownTimer />
            </div>

            {/* Price block with R$97 strikethrough */}
            <div className="bg-[#FF2D55]/[0.06] rounded-2xl py-6 px-5 border border-[#FF2D55]/10 mb-6 text-center">
              <p className="text-xs text-white/40 uppercase tracking-wider font-semibold mb-2">
                PACOTE VITALÍCIO
              </p>

              {/* De / Por */}
              <div className="flex items-center justify-center gap-3 mb-1">
                <span className="text-lg sm:text-xl text-white/30 line-through font-bold">R$97,00</span>
                <span className="text-xs font-bold text-[#25F4EE] uppercase tracking-wider bg-[#25F4EE]/10 px-2.5 py-0.5 rounded-full border border-[#25F4EE]/20">
                  -49%
                </span>
              </div>

              <div className="flex items-baseline justify-center">
                <span className="text-[3.5rem] sm:text-[4rem] md:text-[4.5rem] font-extrabold text-white leading-none tracking-tight">
                  R$49
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-white">,90</span>
              </div>

              <p className="text-sm text-[#25F4EE]/80 mt-2 font-semibold">
                Pagamento único · Acesso vitalício
              </p>
            </div>

            {/* CTA */}
            <a
              href={checkoutUrl}
              onClick={() => { (window as any).trackCheckout?.('Vitalicio', 49.90); }}
              className="block w-full text-center bg-[#FF2D55] hover:brightness-110 text-white font-extrabold py-5 sm:py-6 px-6 rounded-2xl transition-all text-lg sm:text-xl shadow-lg shadow-[#FF2D55]/25 hover:shadow-[#FF2D55]/40 hover:scale-[1.02] active:scale-[0.98] mb-7 uppercase tracking-wide"
            >
              QUERO ACESSAR A BIBLIOTECA
            </a>

            {/* Features */}
            <ul className="space-y-3.5 mb-7">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-2.5">
                  <Check className={`size-4 shrink-0 ${f.highlight ? "text-[#25F4EE]" : "text-[#FF2D55]/70"}`} />
                  <span className={`text-sm leading-tight ${f.highlight ? "text-[#25F4EE]/90 font-semibold" : "text-white/80"}`}>{f.text}</span>
                </li>
              ))}
            </ul>

            {/* Tudo incluso box */}
            <div className="rounded-xl bg-[#25F4EE]/5 border border-[#25F4EE]/10 px-4 py-3.5 mb-5">
              <p className="text-sm font-bold text-[#25F4EE]/90 text-center">
                Tudo incluso em um único pagamento.
              </p>
              <p className="text-xs text-white/45 text-center mt-1">
                Você paga uma vez e mantém o acesso para sempre. Sem mensalidade, sem surpresa.
              </p>
            </div>

            {/* Trust */}
            <div className="flex items-center justify-center gap-2">
              <Shield className="size-3.5 text-white/20" />
              <span className="text-xs text-white/20">
                Pagamento seguro · Garantia 7 dias · PIX
              </span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-xs text-[#A1A1AA]/40 text-center mt-5 max-w-md mx-auto leading-relaxed">
            Ferramentas externas de IA podem exigir conta e créditos próprios.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
