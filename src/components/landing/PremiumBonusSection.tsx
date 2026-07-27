"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Layers, Copy, Star, Eye, AppWindow, Gift } from "lucide-react";
import { FadeIn } from "./FadeIn";

const benefitCards = [
  {
    icon: Search,
    title: "Busca rápida",
    text: "Encontre prompts por título, categoria ou objetivo.",
  },
  {
    icon: Layers,
    title: "Categorias prontas",
    text: "POV, Selfie, UGC, Roupas, Produto, TikTok Shop e Shopee.",
  },
  {
    icon: Copy,
    title: "Copiar e usar",
    text: "Cada card tem botão para copiar o prompt em segundos.",
  },
  {
    icon: Star,
    title: "Favoritos",
    text: "Salve os prompts que mais combinam com seu fluxo.",
  },
  {
    icon: Eye,
    title: "Imagem + prompt",
    text: "Veja a referência visual antes de usar o comando.",
  },
  {
    icon: AppWindow,
    title: "Acervo separado",
    text: "Um app exclusivo para consultar seus prompts com mais organização.",
  },
];

const floatingTags = ["POV", "Selfie", "UGC", "Copiar prompt", "Favoritos"];

export function PremiumBonusSection() {
  return (
    <section className="relative bg-black py-10 md:py-16 px-4 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 -left-32 w-72 h-72 bg-[#FE2C55]/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-72 h-72 bg-[#25F4EE]/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Badge */}
        <FadeIn>
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#FE2C55]/20 via-purple-500/20 to-[#25F4EE]/20 text-white/90 text-[10px] sm:text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
              <Gift className="size-3.5 text-[#FE2C55]" />
              Super bônus de final de mês
            </span>
          </div>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={0.05}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white text-center leading-tight mb-2">
            Galeria Premium de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE2C55] via-purple-400 to-[#25F4EE]">Prompts</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-sm sm:text-base text-white/70 text-center max-w-xl mx-auto mb-2 leading-relaxed">
            Acesse uma galeria visual com prompts prontos para copiar e usar.
          </p>
          <p className="text-xs sm:text-sm text-white/45 text-center max-w-lg mx-auto mb-10 leading-relaxed">
            Um acervo separado, organizado por categorias, com imagens de referência, filtros, favoritos e botão de copiar prompt para acelerar sua criação de vídeos para TikTok Shop e Shopee.
          </p>
        </FadeIn>

        {/* Main content — image + floating tags */}
        <FadeIn delay={0.15}>
          <div className="relative max-w-3xl mx-auto mb-12">
            {/* Floating tags around the image */}
            <motion.span
              className="absolute -top-3 left-6 sm:left-12 text-[10px] sm:text-xs font-bold text-[#25F4EE] bg-[#25F4EE]/10 px-2.5 py-1 rounded-full border border-[#25F4EE]/20 backdrop-blur-sm z-20"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              POV
            </motion.span>
            <motion.span
              className="absolute top-4 -right-2 sm:right-4 text-[10px] sm:text-xs font-bold text-[#FE2C55] bg-[#FE2C55]/10 px-2.5 py-1 rounded-full border border-[#FE2C55]/20 backdrop-blur-sm z-20"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              Selfie
            </motion.span>
            <motion.span
              className="absolute bottom-12 -left-3 sm:left-2 text-[10px] sm:text-xs font-bold text-purple-400 bg-purple-400/10 px-2.5 py-1 rounded-full border border-purple-400/20 backdrop-blur-sm z-20"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              UGC
            </motion.span>
            <motion.span
              className="absolute -bottom-2 right-8 sm:right-16 text-[10px] sm:text-xs font-bold text-[#25F4EE] bg-[#25F4EE]/10 px-2.5 py-1 rounded-full border border-[#25F4EE]/20 backdrop-blur-sm z-20"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            >
              Copiar prompt
            </motion.span>
            <motion.span
              className="absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 text-[10px] sm:text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20 backdrop-blur-sm z-20"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            >
              Favoritos
            </motion.span>

            {/* Image mockup frame */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(254,44,85,0.1),0_0_60px_rgba(37,244,238,0.06)] bg-[#0a0a0a]">
              {/* Glassmorphism overlay at top */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white/5 to-transparent z-10" />
              {/* Fake browser dots */}
              <div className="absolute top-2 left-3 flex gap-1.5 z-20">
                <div className="size-2.5 rounded-full bg-white/15" />
                <div className="size-2.5 rounded-full bg-white/15" />
                <div className="size-2.5 rounded-full bg-white/15" />
              </div>
              <Image
                src="/images/galeria-premium-bonus.png"
                alt="Galeria Premium de Prompts — PromptVault TikTok Shop"
                width={900}
                height={560}
                className="w-full h-auto block"
                priority={false}
              />
            </div>

            {/* Price value tag under image */}
            <div className="flex justify-center mt-4">
              <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs text-white/40">
                <span className="line-through">R$97/mês</span>
                <span className="text-emerald-400 font-semibold">Incluído como bônus</span>
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Benefit cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto mb-10">
          {benefitCards.map((card, i) => (
            <FadeIn key={card.title} delay={0.1 + i * 0.05}>
              <div className="group bg-white/[0.04] backdrop-blur-sm rounded-xl border border-white/[0.06] p-4 hover:bg-white/[0.07] hover:border-white/[0.12] transition-all duration-300">
                <card.icon className="size-5 text-[#FE2C55] mb-2.5 group-hover:text-[#25F4EE] transition-colors" />
                <h4 className="text-xs sm:text-sm font-bold text-white mb-1">
                  {card.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-white/45 leading-relaxed">
                  {card.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Exclusivity line */}
        <FadeIn delay={0.4}>
          <p className="text-center text-xs text-white/35 mb-6">
            Disponível como bônus especial dentro do acesso completo.
          </p>
        </FadeIn>

        {/* CTA button */}
        <FadeIn delay={0.45}>
          <div className="flex justify-center">
            <a
              href="#planos"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FE2C55] to-[#d4234a] hover:from-[#e62750] hover:to-[#c01f43] text-white font-bold py-3.5 px-8 rounded-full transition-all text-sm sm:text-base shadow-lg shadow-[#FE2C55]/25 hover:shadow-[#FE2C55]/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              Quero acessar o bônus completo
            </a>
          </div>
        </FadeIn>

        {/* Subtle secondary microcopy */}
        <FadeIn delay={0.5}>
          <p className="text-center text-[10px] sm:text-[11px] text-white/25 mt-4 max-w-md mx-auto leading-relaxed">
            Em vez de procurar prompts soltos, você acessa tudo em uma galeria organizada para copiar, testar e adaptar.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
