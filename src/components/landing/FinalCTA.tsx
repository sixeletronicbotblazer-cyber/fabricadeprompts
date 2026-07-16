"use client";

import { FadeIn } from "./FadeIn";
import { Music2 } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="bg-black py-12 md:py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">
            Pare de tentar inventar prompt do zero.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-md mx-auto">
            Abra o app, escolha o modo, copie o prompt e gere seu vídeo com movimento mais
            natural para o{" "}
            <span className="tiktok-text-gradient font-semibold">TikTok Shop</span> ou Shopee.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <a
            href="#planos"
            className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 bg-[#FE2C55] hover:bg-[#e62750] text-white font-bold text-base sm:text-lg rounded-full transition-all shadow-lg shadow-[#FE2C55]/20 hover:shadow-[#FE2C55]/35 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Music2 className="size-5 mr-2" />
            Quero acessar agora
          </a>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-3 text-xs text-white/35">
            3 modos de vídeo • TikTok Shop & Shopee • Pagamento único
          </p>
        </FadeIn>
      </div>
    </section>
  );
}