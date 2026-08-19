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
    color: "text-[#25F4EE]",
    bg: "bg-[#25F4EE]/10",
    border: "border-[#25F4EE]/15",
  },
  {
    num: "02",
    icon: Shirt,
    title: "Prompts de Modelo",
    text: "Crie cenas com modelos apresentando produtos, looks, acessórios e itens de beleza.",
    color: "text-[#FE2C55]",
    bg: "bg-[#FE2C55]/10",
    border: "border-[#FE2C55]/15",
  },
  {
    num: "03",
    icon: Eye,
    title: "Módulo POV",
    text: "Prompts para cenas em primeira pessoa: produto na mão, embalagem, cabide, loja e uso real.",
    color: "text-[#25F4EE]",
    bg: "bg-[#25F4EE]/10",
    border: "border-[#25F4EE]/15",
  },
  {
    num: "04",
    icon: Camera,
    title: "Modo Selfie UGC",
    text: "Crie cenas de selfie no espelho, criadoras segurando produto e vídeos com aparência natural.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/15",
  },
  {
    num: "05",
    icon: Wind,
    title: "Prompts de Movimento",
    text: "Comandos para animar imagens com movimentos realistas, sem deformar produto ou modelo.",
    color: "text-[#FE2C55]",
    bg: "bg-[#FE2C55]/10",
    border: "border-[#FE2C55]/15",
  },
  {
    num: "06",
    icon: Layers,
    title: "Prompts por tipo de roupa",
    text: "Blusa, calça, short, vestido, academia, frio, look completo, produto na mão e mais.",
    color: "text-[#25F4EE]",
    bg: "bg-[#25F4EE]/10",
    border: "border-[#25F4EE]/15",
  },
  {
    num: "07",
    icon: Image,
    title: "Galeria Premium de Prompts",
    text: "Um acervo visual separado com imagens, filtros, categorias, favoritos e botão de copiar prompt.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/15",
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
    <section id="modulos" className="bg-black py-10 md:py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight mb-2 text-center">
            Tudo que existe dentro da plataforma
          </h2>
        </FadeIn>

        <FadeIn delay={0.05}>
          <p className="text-sm text-white/45 text-center max-w-lg mx-auto mb-10 leading-relaxed">
            Um acervo completo para criar, adaptar e testar criativos com IA para produtos físicos.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {modules.map((mod, i) => (
            <FadeIn key={mod.num} delay={i * 0.05}>
              <div className="relative bg-[#1A1A1A] border border-white/[0.06] rounded-2xl p-5 h-full">
                {mod.badge && (
                  <span className="absolute top-3 right-3 text-[9px] font-bold text-[#FE2C55] bg-[#FE2C55]/10 px-2 py-0.5 rounded-full border border-[#FE2C55]/15 uppercase tracking-wider">
                    {mod.badge}
                  </span>
                )}
                <div className="flex items-start gap-3.5">
                  <div
                    className={`flex-shrink-0 size-10 rounded-xl ${mod.bg} border ${mod.border} flex items-center justify-center`}
                  >
                    <mod.icon className={`size-5 ${mod.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold text-white/20 uppercase tracking-wider mb-0.5">
                      Módulo {mod.num}
                    </p>
                    <h3 className="text-sm font-bold text-white mb-1">
                      {mod.title}
                    </h3>
                    <p className="text-xs text-white/40 leading-relaxed">
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
            <div className="rounded-2xl overflow-hidden border border-white/[0.06] shadow-[0_0_40px_rgba(254,44,85,0.06),0_0_60px_rgba(37,244,238,0.04)]">
              <img
                src="/images/app-preview.jpeg"
                alt="Dentro da plataforma — organizado por modo e categoria"
                className="w-full"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-center text-[11px] text-white/25">
              Visualize como é por dentro — organizado por modo e categoria.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
