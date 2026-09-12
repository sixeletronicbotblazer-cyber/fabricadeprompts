"use client";

import { FadeIn } from "./FadeIn";
import { ArrowRight } from "lucide-react";

const CHECKOUT_URL = "#LINK_VITALICIO_AQUI";

export function FinalCTA() {
  return (
    <section className="bg-[#050505] relative overflow-hidden py-8 sm:py-12 md:py-16 px-4">
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <FadeIn>
          <h2 className="text-[1.3rem] sm:text-2xl md:text-[2rem] font-black leading-[1.1] sm:leading-[1.0] text-[#F4F4F5] mb-4">
            Pare de criar prompt <span className="text-[#FF2D55]">no escuro</span>.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-[13px] sm:text-sm text-[#A1A1AA]/70 leading-relaxed mb-5 sm:mb-6 max-w-md mx-auto">
            Veja a referência, prepare a imagem e anime com uma base pronta de prompts.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-md mx-auto">
            <a
              href={CHECKOUT_URL}
              onClick={() => { (window as any).trackCheckout?.('Vitalicio', 49.90); }}
              className="block w-full text-center bg-[#FF2D55] hover:brightness-110 shadow-lg shadow-[#FF2D55]/25 font-extrabold tracking-wide uppercase rounded-2xl text-[15px] sm:text-base py-4 px-6 transition-all mb-4 hover:scale-[1.02] active:scale-[0.98]"
            >
              QUERO MEU ACESSO VITALÍCIO <ArrowRight className="inline size-4 ml-2" />
            </a>
            <p className="text-[11px] text-[#A1A1AA]/50">
              Pagamento único · Acesso vitalício · Sem mensalidade
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
