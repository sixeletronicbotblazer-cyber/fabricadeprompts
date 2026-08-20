"use client";

import { FadeIn } from "./FadeIn";
import {
  BookOpen,
  Shirt,
  Eye,
  Camera,
  Wind,
  Layers,
  Image,
  Users,
  Sparkles,
} from "lucide-react";

const modules = [
  {
    num: "01",
    icon: BookOpen,
    title: "Comece aqui",
    text: "Entenda como usar o app, copiar os prompts e adaptar para seus produtos.",
    color: "text-[#22D3EE]",
    bg: "bg-[#22D3EE]/10",
    border: "border-[#22D3EE]/15",
  },
  {
    num: "02",
    icon: Shirt,
    title: "Prompts de Modelo",
    text: "Crie cenas com modelos apresentando produtos, looks, acessórios e itens de beleza.",
    color: "text-[#FF2D55]",
    bg: "bg-[#FF2D55]/10",
    border: "border-[#FF2D55]/15",
  },
  {
    num: "03",
    icon: Eye,
    title: "Módulo POV",
    text: "Prompts para cenas em primeira pessoa: produto na mão, embalagem, cabide, loja e uso real.",
    color: "text-[#22D3EE]",
    bg: "bg-[#22D3EE]/10",
    border: "border-[#22D3EE]/15",
  },
  {
    num: "04",
    icon: Camera,
    title: "Modo Selfie UGC",
    text: "Crie cenas de selfie no espelho, criadoras segurando produto e vídeos com aparência natural.",
    color: "text-[#A855F7]",
    bg: "bg-[#A855F7]/10",
    border: "border-[#A855F7]/15",
  },
  {
    num: "05",
    icon: Wind,
    title: "Prompts de Movimento",
    text: "Comandos para animar imagens com movimentos realistas, sem deformar produto ou modelo.",
    color: "text-[#FF2D55]",
    bg: "bg-[#FF2D55]/10",
    border: "border-[#FF2D55]/15",
  },
  {
    num: "06",
    icon: Layers,
    title: "Prompts por tipo de roupa",
    text: "Blusa, calça, short, vestido, academia, frio, look completo, produto na mão e mais.",
    color: "text-[#22D3EE]",
    bg: "bg-[#22D3EE]/10",
    border: "border-[#22D3EE]/15",
  },
  {
    num: "07",
    icon: Image,
    title: "Galeria Premium de Prompts",
    text: "Um acervo visual separado com imagens, filtros, categorias, favoritos e botão de copiar prompt.",
    color: "text-[#A855F7]",
    bg: "bg-[#A855F7]/10",
    border: "border-[#A855F7]/15",
    badge: "Bônus",
  },
  {
    num: "08",
    icon: Users,
    title: "Grupo VIP",
    text: "Acesso a atualizações, novidades e avisos importantes sobre os conteúdos.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/15",
  },
];

export function PlatformModulesSection() {
  return (
    <section id="modulos" className="bg-[#08080A] py-10 sm:py-14 md:py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-[1.3rem] sm:text-2xl md:text-[2rem] font-black leading-[1.1] sm:leading-[1.0] text-[#F4F4F5] mb-2 text-center">
            Tudo que existe dentro da <span className="text-gradient-main">plataforma</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.05}>
          <p className="text-[13px] sm:text-sm text-[#A1A1AA]/80 text-center max-w-lg mx-auto mb-6 sm:mb-10 leading-relaxed">
            Um acervo completo para criar, adaptar e testar criativos com IA para produtos físicos.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {modules.map((mod, i) => (
            <FadeIn key={mod.num} delay={i * 0.05}>
              <div className="relative bg-[#111113] border border-[#2A2A2E]/60 rounded-2xl p-5 h-full card-glow-pink hover:border-[#FF2D55]/15 transition-colors duration-300">
                {mod.badge && (
                  <span className="absolute top-3 right-3 text-[9px] font-bold text-[#FF2D55] bg-[#FF2D55]/10 px-2 py-0.5 rounded-full border border-[#FF2D55]/15 uppercase tracking-wider">
                    {mod.badge}
                  </span>
                )}
                <div className="flex items-start gap-3.5">
                  <div
                    className={`flex-shrink-0 size-10 rounded-xl ${mod.bg} border ${mod.border} flex items-center justify-center`
                  }
                  >
                    <mod.icon className={`size-5 ${mod.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold text-[#A1A1AA]/40 uppercase tracking-wider mb-0.5">
                      Módulo {mod.num}
                    </p>
                    <h3 className="text-sm font-bold text-[#F4F4F5] mb-1">
                      {mod.title}
                    </h3>
                    <p className="text-xs text-[#A1A1AA]/70 leading-relaxed">
                      {mod.text}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* App preview image */}
        <FadeIn delay={0.45}>
          <div className="mt-10 max-w-md mx-auto">
            <div className="rounded-2xl overflow-hidden border border-[#2A2A2E]/60 shadow-[0_0_40px_rgba(255,45,85,0.06),0_0_60px_rgba(34,211,238,0.04)]">
              <img
                src="/images/app-preview.jpeg"
                alt="Dentro da plataforma — organizado por modo e categoria"
                className="w-full"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-center text-[11px] text-[#A1A1AA]/40">
              Visualize como é por dentro — organizado por modo e categoria.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}