"use client";

import { FadeIn } from "./FadeIn";
import { Badge } from "@/components/ui/badge";

const checkoutUrl = "https://pay.cakto.com.br/3dtfnag_968205";

export function Hero() {
  return (
    <section className="bg-black py-12 md:py-20 lg:py-24 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 mb-6">
            <Badge className="bg-white/10 text-white text-[11px] px-3 py-1 rounded-full border border-white/15 font-semibold hover:bg-white/15">
              PROMPTS DE MOVIMENTO
            </Badge>
            <span className="text-[10px] font-bold text-[#25F4EE] bg-[#25F4EE]/10 px-2 py-1 rounded-full border border-[#25F4EE]/20">
              TIKTOK SHOP
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-[1.75rem] sm:text-3xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.15] tracking-tight text-white">
            Pare de tentar inventar
            <br className="sm:hidden" />
            {" "}prompt do zero.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[16px] text-white/60 leading-relaxed mx-auto max-w-lg">
            Abra o app, escolha o tipo de roupa, copie o prompt e gere seu vídeo com{" "}
            <span className="tiktok-text-gradient font-semibold">movimento mais natural</span>{" "}
            para o TikTok Shop.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-8 flex items-baseline gap-3 justify-center">
            <span className="text-lg font-bold text-white/30 line-through">R$ 19,90</span>
            <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">R$ 10,00</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-6 flex flex-col items-center gap-2.5">
            <a
              href={checkoutUrl}
              className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 bg-[#FE2C55] hover:bg-[#e62750] text-white font-bold text-base sm:text-lg rounded-full transition-all shadow-lg shadow-[#FE2C55]/25 hover:shadow-[#FE2C55]/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              Quero acessar agora
            </a>
            <p className="text-[11px] text-white/40">
              Acesso imediato • Pagamento único • Guia prático
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}