"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Shield, Zap } from "lucide-react";
import { FadeIn } from "./FadeIn";

const checkoutUrlVitalicio = "https://go.perfectpay.com.br/PPU38CQFUC3";
const checkoutUrlMensal = "https://go.perfectpay.com.br/PPU38CQFSJG";
const checkoutUrlRecovery = "https://go.perfectpay.com.br/PPU38CQFSJH";

const vitalicioFeatures = [
  { text: "Biblioteca Premium de prompts", highlight: true },
  { text: "Academy com formatos virais validados", highlight: true },
  { text: "+250 prompts organizados para copiar e adaptar" },
  { text: "Galeria de referências visuais", highlight: true },
  { text: "Modo Modelo, POV e Selfie UGC" },
  { text: "Prompts para produto na mão, unboxing e vídeos de oferta" },
  { text: "Formatos para Dancinha, Movimento, Manequim e Fábrica" },
  { text: "Formatos sazonais: Natal, Dia dos Pais e datas comemorativas" },
  { text: "Formatos para Casa, Calçados, Acessórios, Pet e Infantil" },
  { text: "Formatos para Masculino, Feminino, Lingerie e Moda" },
  { text: "Ganchos, transições e movimentos prontos" },
  { text: "Aulas rápidas e exemplos práticos" },
  { text: "Grupo VIP com atualizações e troca de ideias" },
  { text: "Todas as atualizações futuras incluídas", highlight: true },
  { text: "Acesso vitalício, sem mensalidade", highlight: true },
];

const mensalFeatures = [
  "Acesso aos prompts essenciais",
  "Categorias iniciais para começar",
  "Modo Modelo, POV e Selfie UGC básico",
  "Exemplos simples de aplicação",
  "Aulas rápidas de introdução",
  "Ideal para testar a ferramenta",
];

const mensalLimitation = "Não inclui Biblioteca Premium completa, Galeria avançada, Grupo VIP e atualizações futuras.";

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
      <section id="planos" className="bg-[#050505] py-8 md:py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight mb-1 text-center">
              Libere seu <span className="text-[#FF2D55]">acesso completo</span>
            </h2>
            <p className="text-xs sm:text-sm text-white/40 text-center mb-6 max-w-lg mx-auto">
              Pagamento único, acesso vitalício e todos os recursos da Biblioteca Premium + Academy em um só lugar.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 items-start">

            {/* VITALICIO */}
            <FadeIn>
              <div className="relative bg-[#111113] rounded-2xl border border-[#FF2D55]/30 p-5 sm:p-6 flex flex-col order-1 md:order-1 shadow-[0_0_40px_rgba(255,45,85,0.1)]">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  <span className="inline-block bg-[#FF2D55] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md shadow-[#FF2D55]/30 whitespace-nowrap">
                    MAIS POPULAR
                  </span>
                  <span className="hidden sm:inline-block bg-[#25F4EE]/10 text-[#25F4EE] text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#25F4EE]/20 whitespace-nowrap">
                    VITALÍCIO
                  </span>
                </div>

                <div className="text-center mt-2 sm:mt-1 mb-4 sm:mb-5">
                  <div className="bg-[#FF2D55]/6 rounded-2xl py-4 px-4 -mx-1 border border-[#FF2D55]/10">
                    <p className="text-[10px] sm:text-[11px] text-[#A1A1AA]/50 uppercase tracking-wider font-semibold mb-1">ACESSO COMPLETO</p>
                    <p className="text-sm text-white/30 line-through mb-0.5">De R$97,00</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-[3.8rem] sm:text-[4rem] md:text-[4.5rem] font-extrabold text-white leading-none tracking-tight">
                        R$49
                      </span>
                      <span className="text-2xl sm:text-3xl font-bold text-white">,90</span>
                    </div>
                    <p className="text-[11px] text-[#A1A1AA]/40 mt-1.5 font-semibold uppercase tracking-wider">
                      Pagamento único
                    </p>
                    <p className="text-[11px] text-[#25F4EE]/70 mt-1 font-semibold">
                      Você paga uma vez e mantém o acesso.
                    </p>
                  </div>
                </div>

                <a
                  href={checkoutUrlVitalicio}
                  onClick={() => { (window as any).trackCheckout?.('Vitalicio', 49.90); }}
                  className="block w-full text-center bg-[#FF2D55] hover:brightness-110 text-white font-bold py-4 px-6 rounded-2xl transition-all text-sm sm:text-base shadow-lg shadow-[#FF2D55]/25 hover:shadow-[#FF2D55]/35 hover:scale-[1.02] active:scale-[0.98] mb-2"
                >
                  QUERO MEU ACESSO VITALÍCIO
                </a>

                <p className="text-[11px] text-[#25F4EE]/70 font-semibold text-center mb-4 leading-relaxed">
                  Sem mensalidade. Acesso completo à Biblioteca Premium + Academy.
                </p>

                <div className="mb-4 rounded-xl bg-black/50 border border-[#2A2A2E]/50 px-3.5 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Zap className="size-3 text-[#FF2D55]" />
                    <span className="text-[10px] font-bold text-white/35 uppercase tracking-wider">Acaba em</span>
                  </div>
                  <CountdownTimer />
                </div>

                <ul className="space-y-1.5 mb-3">
                  {vitalicioFeatures.map((f, i) => (
                    <li key={i}>
                      <div className="flex items-center gap-2">
                        <Check className={`size-3.5 shrink-0 ${f.highlight ? "text-[#25F4EE]" : "text-[#FF2D55]"}`} />
                        <span className={`text-[13px] leading-tight ${f.highlight ? "text-[#25F4EE]/90 font-semibold" : "text-white/80"}`}>{f.text}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="rounded-xl bg-[#25F4EE]/5 border border-[#25F4EE]/10 px-4 py-3 mb-3">
                  <p className="text-[12px] sm:text-[13px] font-bold text-[#25F4EE]/90 text-center mb-0.5">
                    Tudo incluso em um único pagamento.
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-white/50 text-center leading-relaxed">
                    Depois da compra, você recebe acesso à biblioteca, aos módulos, aos formatos e às próximas atualizações disponíveis.
                  </p>
                </div>

                <div className="flex items-center justify-center gap-1.5 mt-auto pt-1">
                  <Shield className="size-3 text-white/20" />
                  <span className="text-[10px] text-white/20">
                    Pagamento seguro / Garantia 7 dias
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* MENSAL */}
            <FadeIn delay={0.1}>
              <div className="bg-[#111113] rounded-2xl border border-[#2A2A2E]/60 p-5 sm:p-6 flex flex-col order-2 md:order-2">
                <h3 className="text-base sm:text-lg font-bold text-white mb-0.5">
                  Plano Mensal
                </h3>
                <p className="text-xs text-white/45 mb-4">
                  Para começar a testar os prompts essenciais.
                </p>

                <div className="mb-4">
                  <span className="text-[2.5rem] sm:text-5xl font-extrabold text-white leading-none tracking-tight">
                    R$24
                  </span>
                  <span className="text-lg sm:text-2xl font-bold text-white">,90</span>
                  <span className="text-xs text-white/35 ml-1.5 font-medium">
                    /mês
                  </span>
                </div>

                <p className="text-[11px] text-white/40 mb-4 leading-relaxed">
                  Uma opção de entrada para quem quer conhecer a biblioteca e começar a aplicar os prompts principais.
                </p>

                <ul className="space-y-1.5 mb-3 flex-1">
                  {mensalFeatures.map((text, i) => (
                    <li key={i}>
                      <div className="flex items-center gap-2">
                        <Check className="size-3.5 shrink-0 text-white/20" />
                        <span className="text-[13px] leading-tight text-white/50">{text}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <p className="text-[10px] text-white/25 mb-4 leading-relaxed border-t border-[#2A2A2E]/40 pt-2.5">
                  {mensalLimitation}
                </p>

                <button
                  onClick={() => setRecoveryOpen(true)}
                  className="block w-full text-center border border-white/15 text-white hover:bg-white hover:text-black font-bold py-4 px-6 rounded-2xl transition-all text-sm sm:text-base"
                >
                  COMEÇAR PELO MENSAL
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

          <FadeIn delay={0.15}>
            <p className="text-[11px] sm:text-xs text-[#A1A1AA]/50 text-center mt-5 max-w-md mx-auto leading-relaxed">
              Você recebe acesso aos conteúdos e prompts indicados no plano. Ferramentas externas de IA podem exigir conta e créditos próprios.
            </p>
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
              {/* Top discount banner */}
              <div className="bg-[#FF2D55] py-2 px-4 text-center">
                <p className="text-[11px] sm:text-xs font-bold text-white uppercase tracking-wider">
                  🎁 Você ganhou um desconto!
                </p>
              </div>

              <div className="p-5 sm:p-6">
                <button
                  onClick={() => setRecoveryOpen(false)}
                  className="absolute top-2 right-3 size-7 flex items-center justify-center rounded-full text-white/40 hover:text-white/80 hover:bg-white/10 transition-colors"
                  aria-label="Fechar"
                >
                  <X className="size-4" />
                </button>

                {/* Headline */}
                <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight text-center mb-4">
                  Por apenas{" "}
                  <span className="text-[#FF2D55]">+R$8</span>{" "}
                  você pode ter o acesso vitalício
                </h3>

                {/* Price box */}
                <div className="rounded-2xl bg-[#FF2D55]/[0.07] border border-[#FF2D55]/15 px-6 py-5 mb-5 shadow-[0_0_30px_rgba(255,45,85,0.08)]">
                  <p className="text-[10px] text-white/40 uppercase tracking-[0.15em] font-semibold text-center mb-2">
                    Acesso vitalício
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-[3rem] sm:text-[3.4rem] font-extrabold text-white leading-none tracking-tight">
                      R$32
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-white">,90</span>
                  </div>
                  <p className="text-[11px] text-white/40 text-center mt-1.5 font-medium">
                    Pagamento único
                  </p>
                </div>

                {/* Pulsing CTA */}
                <motion.a
                  href={checkoutUrlRecovery}
                  onClick={() => { (window as any).trackCheckout?.('Vitalicio Recovery', 32.90); }}
                  className="block w-full text-center bg-[#FF2D55] hover:brightness-110 text-white font-extrabold py-4 px-6 rounded-2xl transition-all text-sm sm:text-base shadow-lg shadow-[#FF2D55]/30 mb-4"
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
                  QUERO O VITALÍCIO
                </motion.a>

                {/* Secondary button */}
                <a
                  href={checkoutUrlMensal}
                  onClick={() => { (window as any).trackCheckout?.('Mensal', 24.90); }}
                  className="block w-full text-center border border-[#2A2A2E]/60 text-white/35 hover:text-white/50 hover:bg-white/[0.03] font-medium py-2.5 px-6 rounded-xl transition-colors text-[12px]"
                >
                  Não, continuar com o Mensal
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
