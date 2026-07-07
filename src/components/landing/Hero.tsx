"use client";

import { FadeIn } from "./FadeIn";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const checkoutUrl = "#";

const resultImages = [
  { src: "/images/result-skirt.jpeg", alt: "Vídeo UGC de pijama preto com saia" },
  { src: "/images/result-suit.jpeg", alt: "Vídeo UGC de pijama bege social" },
];

export function Hero() {
  return (
    <section className="py-8 md:py-14 lg:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <FadeIn>
              <div className="inline-flex items-center gap-2 mb-4">
                <Badge className="bg-foreground text-primary-foreground text-[11px] px-3 py-1 rounded-full border-0 font-semibold">
                  PROMPTS PRONTOS PARA COPIAR
                </Badge>
                <span className="text-[10px] font-bold text-[#25F4EE] bg-[#25F4EE]/10 px-2 py-1 rounded-full">
                  TIKTOK SHOP
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-[1.5rem] sm:text-[1.75rem] md:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.25] tracking-tight text-foreground">
                Pare de tentar inventar
                <br className="sm:hidden" />
                {" "}prompt do zero.
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-3 sm:mt-4 text-[13px] sm:text-[15px] text-foreground/70 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Abra o app, escolha o tipo de roupa, copie o prompt e gere seu vídeo com{" "}
                <span className="tiktok-text-gradient font-semibold">movimento mais natural</span>{" "}
                para o TikTok Shop.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-5 flex items-baseline gap-3 justify-center lg:justify-start">
                <span className="text-lg font-bold text-foreground/35 line-through">R$ 19,90</span>
                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground">R$ 10,00</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-5 flex flex-col items-center lg:items-start gap-2">
                <a
                  href={checkoutUrl}
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base rounded-full transition-all shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Quero acessar agora
                </a>
                <p className="text-[11px] text-foreground/60 text-center lg:text-left">
                  Acesso imediato • Pagamento único • Guia prático
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right: real result images */}
          <FadeIn delay={0.25} className="flex-shrink-0 w-full lg:w-auto">
            <div className="flex items-center justify-center gap-3">
              {resultImages.map((img) => (
                <div
                  key={img.src}
                  className="relative overflow-hidden rounded-2xl border border-border/60 w-full max-w-[150px] sm:max-w-[180px] aspect-[3/4] shadow-lg"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 150px, 180px"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-10">
                    <p className="text-[10px] text-white/90 font-semibold">Prompt do guia</p>
                    <p className="text-[9px] text-white/60">Resultado direto da IA</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}