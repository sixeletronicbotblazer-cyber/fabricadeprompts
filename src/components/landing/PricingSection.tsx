"use client";

import { FadeIn } from "./FadeIn";
import { Check, Sparkles, Zap, Shield, RefreshCw, Smartphone, Eye, BookOpen } from "lucide-react";

const CHECKOUT_URL = "https://go.perfectpay.com.br/PPU38CQFSJE";

const benefits = [
  { icon: BookOpen, text: "Biblioteca completa com 500+ prompts prontos" },
  { icon: Eye, text: "Pré-visualização de cada prompt antes de usar" },
  { icon: RefreshCw, text: "Prompts atualizados semanalmente com os mais bombados e virais" },
  { icon: Zap, text: "Todos os formatos: POV, UGC, Faceless, Selfie, Produto, Ganchos" },
  { icon: Sparkles, text: "Você não vai precisar criar do zero nunca mais" },
  { icon: Shield, text: "Garantia de 7 dias — se não gostar, devolvemos seu dinheiro" },
  { icon: Smartphone, text: "Acesso pelo celular, tablet e computador" },
];

export function PricingSection() {
  const handleClick = () => {
    if (typeof window.trackCheckout === "function") {
      window.trackCheckout("Vitalicio", 29.9);
    }
    window.location.href = CHECKOUT_URL;
  };

  return (
    <section id="oferta" className="py-16 md:py-20 bg-[#060607]">
      <div className="max-w-[630px] mx-auto px-6 text-center">
        <FadeIn>
          <span className="inline-flex items-center border border-[#3c1c27] bg-[#160e12] text-[#FA2D62] text-[10px] font-black tracking-[0.15em] uppercase px-3.5 py-2 rounded-[40px]">
            Oferta especial de acesso
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(30px,4vw,43px)] leading-[1.15] tracking-[-0.055em] mt-4 mb-2">
            A biblioteca completa.<br />
            <span className="text-[#FA2D62]">Um preço só.</span>
          </h2>
          <p className="text-[#A7A7B1] text-sm leading-relaxed mb-0">
            Sem assinatura mensal. Sem comparação de planos. Tudo em um único acesso digital.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 bg-gradient-to-br from-[#1c1118] to-[#100f13] border border-[#6b273b] rounded-[20px] px-7 py-8 shadow-[0_0_65px_rgba(237,36,93,0.07)]">
            {/* Popular badge */}
            <span className="inline-block bg-[#FA2D62] text-[10px] font-black tracking-[0.08em] rounded-full px-3.5 py-1.5 uppercase">
              Mais popular
            </span>

            {/* Ribbon */}
            <span className="inline-block bg-[#ec2d5b]/20 text-[#FA2D62] text-[10px] font-black tracking-[0.08em] rounded-full px-3.5 py-1.5 ml-2 border border-[#FA2D62]/30">
              Acesso vitalício
            </span>

            <h3 className="mt-5 mb-1 font-[family-name:var(--font-space-grotesk)] text-[23px] font-bold">
              PromptVault Completo
            </h3>

            {/* Old price with discount badge */}
            <div className="flex items-center justify-center gap-2 mt-2">
              <p className="text-[#85858f] text-sm line-through">R$47,90</p>
              <span className="bg-[#34e3b4]/15 text-[#34e3b4] text-[10px] font-black px-2 py-0.5 rounded-md border border-[#34e3b4]/30">
                -38% OFF
              </span>
            </div>

            {/* Price */}
            <p className="text-[clamp(59px,8vw,83px)] font-black tracking-[-0.075em] leading-[1.13] mt-3 mb-1.5">
              <small className="text-[0.32em] align-middle tracking-[-0.02em]">R$</small>29,90
            </p>
            <p className="text-[#afb0bb] text-xs">Pagamento único • sem mensalidade</p>

            {/* Benefits list - detailed like old page */}
            <div className="mt-6 space-y-2.5 text-left max-w-[380px] mx-auto">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="mt-0.5 flex-shrink-0">
                    <b.icon className="size-3.5 text-[#34e3b4]" />
                  </div>
                  <span className="text-[12px] text-[#d4d4dc] leading-snug">{b.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={handleClick}
              className="w-full inline-flex items-center justify-center gap-3 bg-[#FA2D62] text-white px-7 py-4 rounded-[10px] text-[13px] font-black shadow-[0_15px_32px_rgba(250,45,98,0.18)] hover:translate-y-[-2px] hover:brightness-110 transition-all duration-200 mt-7 cta-glow"
            >
              QUERO MEU ACESSO VITALÍCIO →
            </button>
            <p className="text-[11px] text-[#7e7d87] mt-2.5">
              Após o pagamento, você recebe instruções para acessar a biblioteca.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
