"use client";

import { FadeIn } from "./FadeIn";
import { User, Eye, Camera, Zap } from "lucide-react";

const modes = [
  {
    icon: User,
    label: "Modo Modelo",
    title: "Vídeo com modelo IA mostrando a roupa",
    desc: "A persona mais usada no TikTok Shop. Modelo de frente, movimento natural, caimento realista. É o padrão que mais converte.",
    color: "#FE2C55",
  },
  {
    icon: Eye,
    label: "Modo POV",
    title: "Vídeo em primeira pessoa — como se fosse você",
    desc: "A câmera é o olhar do comprador. Mão segurando a peça, virando, mostrando detalhe. Sensação de 'estou vendo isso ao vivo'. Vende muito.",
    color: "#25F4EE",
  },
  {
    icon: Camera,
    label: "Modo Selfie",
    title: "Vídeo estilo selfie — olhar para a câmera",
    desc: "Modelo IA olhando direto pra câmera, como alguém mandando foto pro amigo. Gera conexão instantânea. Perfeito para reel e feed.",
    color: "#FE2C55",
  },
];

export function ModesSection() {
  return (
    <section className="bg-[#0D0D0D] py-10 md:py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 mb-3">
              <Zap className="size-3.5 text-[#FE2C55]" />
              <span className="text-[10px] font-bold text-[#FE2C55] uppercase tracking-wider">
                Os 3 modos que mais vendem
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight mb-2">
              Modelo • POV • Selfie
            </h2>
            <p className="text-sm text-white/50 max-w-md mx-auto">
              Quem domina esses 3 estilos de vídeo consegue testar qualquer peça e escalar criativos sem depender de um único formato.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-3">
          {modes.map((mode, i) => (
            <FadeIn key={mode.label} delay={i * 0.08}>
              <div className="bg-[#1A1A1A] rounded-2xl border border-white/[0.08] p-4 sm:p-5 flex gap-4">
                <div
                  className="flex-shrink-0 size-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${mode.color}15` }}
                >
                  <mode.icon className="size-5" style={{ color: mode.color }} />
                </div>
                <div className="min-w-0">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider"
                    style={{ color: mode.color }}
                  >
                    {mode.label}
                  </span>
                  <h3 className="text-[15px] sm:text-base font-bold text-white mt-0.5 mb-1">
                    {mode.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {mode.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p className="mt-5 text-center text-[13px] text-white/35">
            Cada modo tem prompts específicos no InfoApp. Prontos para copiar.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}