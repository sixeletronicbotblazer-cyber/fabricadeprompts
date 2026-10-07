"use client";

import { useState, useEffect } from "react";
import { Check, Shield, Zap, BadgePercent, Star } from "lucide-react";
import { FadeIn } from "./FadeIn";

const checkoutUrlVitalicio = "https://go.perfectpay.com.br/PPU38CQFUC3"; // R$49,90 - Vitalício
const checkoutUrlMensal = "https://go.perfectpay.com.br/PPU38CQFSJG";  // R$24,90 - Mensal

const vitalicioFeatures = [
  { text: "Biblioteca completa com +500 prompts", highlight: true },
  { text: "Pré-visualização de cada prompt antes de usar", highlight: true },
  { text: "Atualizações semanais com novos prompts", highlight: true },
  { text: "Todos os formatos: Modelo, POV, UGC, Produto, Dancinha…" },
  { text: "Ganchos, transições e movimentos prontos" },
  { text: "Categorias por nicho: Moda, Casa, Pet, Acessórios…" },
  { text: "Formatos sazonais: Natal, Dia dos Pais e datas comemorativas" },
  { text: "Grupo VIP com troca de ideias" },
];

const mensalFeatures = [
  "Biblioteca completa com +500 prompts",
  "Pré-visualização de cada prompt",
  "Todos os formatos e categorias",
  "Atualizações mensais",
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

interface PricingSectionProps {
  onMensalClick?: () => void;
}

export function PricingSection({ onMensalClick }: PricingSectionProps) {
  return (
    <section id="oferta" className="bg-[#050505] py-14 md:py-20 px-4">
      <div className="max-w-3xl mx-auto">

        <FadeIn>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-3 text-center">
            Acesse a <span className="text-[#FF2D55]">biblioteca completa</span>
          </h2>
          <p className="text-base text-white/40 text-center mb-10">
            Escolha o melhor plano para você.
          </p>
        </FadeIn>

        {/* Two plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 items-start">

          {/* ─── VITALÍCIO (Principal) ─── */}
          <FadeIn delay={0.08}>
            <div className="relative bg-[#111113] rounded-2xl border-2 border-[#FF2D55]/35 p-6 sm:p-7 shadow-[0_0_50px_rgba(255,45,85,0.12)]">

              {/* MAIS POPULAR badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 bg-[#FF2D55] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-1.5 rounded-full shadow-lg shadow-[#FF2D55]/30 whitespace-nowrap">
                  <Star className="size-3.5 fill-white" />
                  MAIS POPULAR
                </span>
              </div>

              {/* Countdown */}
              <div className="rounded-xl bg-black/40 border border-[#2A2A2E]/50 px-4 py-2.5 flex items-center justify-between mb-5 mt-2">
                <div className="flex items-center gap-1.5">
                  <Zap className="size-3.5 text-[#FF2D55]" />
                  <span className="text-xs font-bold text-white/40 uppercase tracking-wider">Oferta acaba em</span>
                </div>
                <CountdownTimer />
              </div>

              {/* Plan label */}
              <p className="text-xs text-white/50 uppercase tracking-wider font-bold mb-3 text-center">
                VITALÍCIO
              </p>

              {/* Price block */}
              <div className="bg-[#FF2D55]/[0.06] rounded-2xl py-5 px-4 border border-[#FF2D55]/10 mb-5 text-center">
                <div className="flex items-center justify-center gap-3 mb-1">
                  <span className="text-lg sm:text-xl text-white/30 line-through font-bold">R$97,00</span>
                  <span className="text-xs font-bold text-[#25F4EE] uppercase tracking-wider bg-[#25F4EE]/10 px-2.5 py-0.5 rounded-full border border-[#25F4EE]/20">
                    -49%
                  </span>
                </div>

                <div className="flex items-baseline justify-center">
                  <span className="text-[3rem] sm:text-[3.5rem] font-extrabold text-white leading-none tracking-tight">
                    R$49
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-white">,90</span>
                </div>

                <p className="text-sm text-[#25F4EE]/80 mt-2 font-semibold">
                  Pagamento único
                </p>
                <p className="text-xs text-white/40 mt-0.5">
                  Você paga uma vez e mantém o acesso.
                </p>
              </div>

              {/* CTA */}
              <a
                href={checkoutUrlVitalicio}
                onClick={() => { (window as any).trackCheckout?.('Vitalicio', 49.90); }}
                className="block w-full text-center bg-[#FF2D55] hover:brightness-110 text-white font-extrabold py-5 sm:py-5.5 px-6 rounded-2xl transition-all text-base sm:text-lg shadow-lg shadow-[#FF2D55]/25 hover:shadow-[#FF2D55]/40 hover:scale-[1.02] active:scale-[0.98] mb-5 uppercase tracking-wide"
              >
                QUERO MEU ACESSO VITALÍCIO
              </a>

              {/* Features */}
              <ul className="space-y-3 mb-5">
                {vitalicioFeatures.map((f, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <Check className={`size-4 shrink-0 ${f.highlight ? "text-[#25F4EE]" : "text-[#FF2D55]/70"}`} />
                    <span className={`text-sm leading-tight ${f.highlight ? "text-[#25F4EE]/90 font-semibold" : "text-white/80"}`}>{f.text}</span>
                  </li>
                ))}
              </ul>

              {/* Tudo incluso box */}
              <div className="rounded-xl bg-[#25F4EE]/5 border border-[#25F4EE]/10 px-4 py-3 mb-4">
                <p className="text-sm font-bold text-[#25F4EE]/90 text-center">
                  Tudo incluso em um único pagamento.
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

          {/* ─── MENSAL (Secondary) ─── */}
          <FadeIn delay={0.15}>
            <div className="relative bg-[#111113] rounded-2xl border border-[#2A2A2E]/50 p-6 sm:p-7 mt-8 md:mt-0">

              {/* Plan label */}
              <p className="text-xs text-white/40 uppercase tracking-wider font-bold mb-4 text-center">
                PLANO MENSAL
              </p>

              {/* Price block */}
              <div className="bg-white/[0.03] rounded-2xl py-5 px-4 border border-[#2A2A2E]/40 mb-5 text-center">
                <div className="flex items-baseline justify-center">
                  <span className="text-[2.5rem] sm:text-[3rem] font-extrabold text-white leading-none tracking-tight">
                    R$24
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-white">,90</span>
                </div>

                <p className="text-sm text-white/40 mt-2 font-semibold">
                  Cobrança mensal
                </p>
              </div>

              <p className="text-[12px] sm:text-sm text-[#A1A1AA]/60 leading-relaxed mb-5 text-center max-w-xs mx-auto">
                Uma opção de entrada para quem quer conhecer a biblioteca e começar a utilizar os prompts.
              </p>

              {/* CTA */}
              <button
                onClick={onMensalClick}
                className="block w-full text-center border border-[#FF2D55]/30 bg-[#FF2D55]/5 hover:bg-[#FF2D55]/15 text-[#FF2D55] hover:text-white font-extrabold py-4.5 sm:py-5 px-6 rounded-2xl transition-all text-sm sm:text-base hover:scale-[1.02] active:scale-[0.98] mb-5 uppercase tracking-wide"
              >
                COMEÇAR PELO MENSAL
              </button>

              {/* Features */}
              <ul className="space-y-2.5 mb-5">
                {mensalFeatures.map((f, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <Check className="size-4 shrink-0 text-white/30" />
                    <span className="text-sm text-white/60 leading-tight">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Trust */}
              <div className="flex items-center justify-center gap-2">
                <Shield className="size-3.5 text-white/15" />
                <span className="text-[11px] text-white/15">
                  Pagamento seguro · Garantia 7 dias · PIX
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <p className="text-xs text-[#A1A1AA]/40 text-center mt-6 max-w-md mx-auto leading-relaxed">
            Ferramentas externas de IA podem exigir conta e créditos próprios.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
