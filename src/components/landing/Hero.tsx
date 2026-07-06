"use client";

import { FadeIn } from "./FadeIn";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Smartphone, UserPlus, Shirt, LayoutList, Copy, Sparkles, Music2 } from "lucide-react";

const checkoutUrl = "#";

function MockupCard() {
  return (
    <div className="w-full max-w-[260px] mx-auto">
      <div className="bg-white rounded-2xl border border-border/60 shadow-lg overflow-hidden">
        {/* Status bar */}
        <div className="bg-foreground px-4 py-2 flex items-center justify-between">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-white/30" />
            <div className="w-2 h-2 rounded-full bg-white/30" />
            <div className="w-2 h-2 rounded-full bg-white/30" />
          </div>
          <span className="text-[10px] text-white/60 font-medium">9:41</span>
          <div className="w-6 h-3 rounded-sm border border-white/30" />
        </div>
        {/* App header */}
        <div className="px-4 py-3 border-b border-border/40">
          <div className="flex items-center gap-2">
            <Music2 className="size-4 text-accent" />
            <span className="text-xs font-bold text-foreground truncate">
              TikTok Shop Motion
            </span>
          </div>
        </div>
        {/* App cards */}
        <div className="p-3 space-y-2">
          {[
            { icon: UserPlus, label: "Criar personagem", color: "text-accent bg-accent/10" },
            { icon: Shirt, label: "Trocar roupa", color: "text-[#25F4EE] bg-[#25F4EE]/10" },
            { icon: LayoutList, label: "Prompts por tipo de peça", color: "text-foreground bg-foreground/5" },
            { icon: Copy, label: "Copiar prompt", color: "text-accent bg-accent/10" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2.5 p-2.5 rounded-lg bg-secondary/50 border border-border/30"
            >
              <div className={`size-8 rounded-lg flex items-center justify-center ${item.color}`}>
                <item.icon className="size-4" />
              </div>
              <span className="text-[11px] font-medium text-foreground">{item.label}</span>
            </div>
          ))}
        </div>
        {/* Badge */}
        <div className="px-3 pb-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-accent/10 rounded-lg">
            <Sparkles className="size-3 text-accent" />
            <span className="text-[10px] font-semibold text-accent">+ prompts por categoria</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="py-10 md:py-16 lg:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <FadeIn>
              <div className="inline-flex items-center gap-2 mb-4">
                <Badge className="bg-foreground text-primary-foreground text-xs px-3 py-1 rounded-full border-0 font-semibold">
                  GUIA PRÁTICO + PROMPTS PRONTOS
                </Badge>
                <span className="text-[10px] font-bold text-[#25F4EE] bg-[#25F4EE]/10 px-2 py-1 rounded-full">
                  TIKTOK SHOP
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold leading-tight tracking-tight text-foreground">
                Crie vídeos de roupas para{" "}
                <span className="tiktok-text-gradient">TikTok Shop</span>{" "}
                com modelos IA usando{" "}
                <span className="text-accent">prompts prontos.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-4 text-sm sm:text-base text-foreground/70 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Um InfoApp simples para você criar personagem, trocar roupa, animar movimentos
                realistas e gerar vídeos UGC de moda sem precisar gravar uma modelo real.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-6 flex items-baseline gap-3 justify-center lg:justify-start">
                <span className="text-2xl font-bold text-foreground/40 line-through">R$ 29,90</span>
                <span className="text-4xl sm:text-5xl font-extrabold text-foreground">R$ 19,90</span>
              </div>
              <p className="mt-1.5 text-sm text-foreground/70 text-center lg:text-left">
                Acesso imediato ao guia em formato de aplicativo.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-6 flex flex-col items-center lg:items-start gap-3">
                <a
                  href={checkoutUrl}
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base rounded-full transition-all shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Music2 className="size-4 mr-1.5" />
                  Quero acessar os prompts
                </a>
                <p className="text-xs text-foreground/60 text-center lg:text-left">
                  Pagamento único • Acesso imediato • Ideal para TikTok Shop, afiliados e criativos
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right: mockup + result image */}
          <FadeIn delay={0.3} className="flex-shrink-0 w-full lg:w-auto">
            <div className="flex flex-col items-center gap-4">
              <MockupCard />
              {/* Small result preview */}
              <div className="relative overflow-hidden rounded-xl border border-border/60 w-full max-w-[200px] sm:max-w-[240px] aspect-[3/4] shadow-md">
                <Image
                  src="/images/result-skirt.jpeg"
                  alt="Exemplo de resultado criado com os prompts"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 200px, 240px"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-3 pt-8">
                  <p className="text-[10px] text-white/80 font-medium">Resultado real • Prompt do guia</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}