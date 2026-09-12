"use client";

import { Eye, ImageIcon, Play, ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

const steps = [
  {
    icon: Eye,
    title: "Veja a prévia",
    text: "Escolha uma referência do estilo que você quer criar.",
  },
  {
    icon: ImageIcon,
    title: "Prepare a imagem inicial",
    text: "Use a base para criar a cena: produto na mão, modelo vestindo ou outro formato disponível.",
  },
  {
    icon: Play,
    title: "Adapte e anime",
    text: "Ajuste o prompt para seu produto e use na ferramenta de IA.",
  },
];

export function PremiumBonusSection() {
  return (
    <section className="relative bg-[#0D0D10] py-8 sm:py-10 md:py-12 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Badge */}
        <FadeIn>
          <div className="flex justify-center mb-3">
            <span className="inline-flex items-center gap-1.5 bg-white/[0.04] text-[#C4C4CC] text-[10px] sm:text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border border-[#2A2A2E]/60">
              BIBLIOTECA PROMPTLY PROMPTS
            </span>
          </div>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={0.05}>
          <h2 className="text-[1.2rem] sm:text-xl md:text-[1.75rem] font-black leading-[1.1] text-[#F4F4F5] mb-2 text-center max-w-lg mx-auto">
            Veja a referência. Prepare a imagem.{" "}
            <span className="text-[#FF2D55]">Anime com uma base pronta.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="text-[12px] sm:text-sm text-[#A1A1AA]/70 leading-relaxed mb-5 max-w-md mx-auto text-center">
            Escolha o estilo de vídeo na biblioteca, prepare a imagem inicial com o seu produto e adapte o prompt de animação para usar na ferramenta de IA. Além dos formatos principais como Modelo, POV e Selfie UGC, você também encontra categorias para Dancinha, Ganchos, Transições, Produto na Mão, Moda Feminina, Casa, Calçados, Acessórios, Pet, Infantil, Masculino, Trend Viral, datas comemorativas e muito mais.
          </p>
        </FadeIn>

        {/* Content grid: text left, video right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Text side - 3 steps */}
          <div className="order-1 md:order-1">
            <div className="space-y-3 mb-4">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <FadeIn key={step.title} delay={0.1 + i * 0.06}>
                    <div className="flex gap-3 items-start">
                      <div className="flex flex-col items-center shrink-0">
                        <div className="size-8 rounded-lg bg-[#FF2D55]/10 border border-[#FF2D55]/12 flex items-center justify-center">
                          <Icon className="size-4 text-[#FF2D55]" />
                        </div>
                        {i < steps.length - 1 && (
                          <div className="w-px h-3 bg-[#2A2A2E]/60 mt-1" />
                        )}
                      </div>
                      <div className="pt-0.5">
                        <h4 className="text-[13px] sm:text-sm font-bold text-[#F4F4F5] leading-tight mb-0.5">
                          {step.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-[#A1A1AA]/70 leading-relaxed">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

            {/* Clarification line */}
            <FadeIn delay={0.3}>
              <p className="text-[10px] sm:text-[11px] text-[#A1A1AA]/45 leading-relaxed mb-4">
                A biblioteca fornece as referências e os prompts. A geração das imagens e dos vídeos acontece nas ferramentas de IA que você utilizar.
              </p>
            </FadeIn>

            {/* CTA */}
            <FadeIn delay={0.35}>
              <a
                href="https://checkout.perfectpay.com.br/pay/PPU38CQFUC3"
                className="inline-flex items-center justify-center bg-[#FF2D55] hover:brightness-110 text-white font-extrabold py-3.5 px-8 rounded-2xl transition-all text-sm sm:text-base shadow-lg shadow-[#FF2D55]/25 hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wide"
              >
                QUERO MEU ACESSO VITALÍCIO
              </a>
            </FadeIn>
          </div>

          {/* Video side, premium mockup */}
          <div className="order-2 md:order-2">
            <FadeIn delay={0.15}>
              <div className="relative rounded-2xl overflow-hidden bg-[#050505] border border-[#2A2A2E]/60 shadow-[0_0_40px_rgba(255,45,85,0.08)]">
                {/* Browser chrome */}
                <div className="absolute top-0 left-0 right-0 h-9 bg-gradient-to-b from-white/[0.04] to-transparent z-10" />
                <div className="absolute top-2.5 left-3.5 flex gap-1.5 z-20">
                  <div className="size-2.5 rounded-full bg-[#FF2D55]/30" />
                  <div className="size-2.5 rounded-full bg-amber-400/30" />
                  <div className="size-2.5 rounded-full bg-emerald-400/30" />
                </div>
                <div className="absolute top-2.5 left-14 sm:left-16 right-10 z-20 hidden sm:block">
                  <div className="bg-white/[0.03] border border-[#2A2A2E]/60 rounded-md h-5 flex items-center px-2.5">
                    <span className="text-[9px] text-[#A1A1AA]/40 font-medium">galeria.motionprompts.com</span>
                  </div>
                </div>

                {/* Video */}
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full aspect-video object-cover block"
                  poster="/images/galeria-premium-bonus.png"
                >
                  <source src="/images/galeria-premium-demo.mp4" type="video/mp4" />
                </video>

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0D0D10]/70 to-transparent z-10 pointer-events-none" />
              </div>
            </FadeIn>

            {/* Sub-video phrase */}
            <FadeIn delay={0.25}>
              <p className="mt-3 text-center md:text-left text-[11px] sm:text-xs text-[#A1A1AA]/40 leading-relaxed">
                É como ter um acervo visual de criativos pronto para consultar sempre que faltar ideia.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Confira os planos note */}
        <FadeIn delay={0.4}>
          <p className="text-[10px] sm:text-[11px] text-[#A1A1AA]/40 text-center mt-6">
            Biblioteca com formatos para diferentes nichos, produtos e campanhas. Confira o acesso incluído em cada plano abaixo.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
