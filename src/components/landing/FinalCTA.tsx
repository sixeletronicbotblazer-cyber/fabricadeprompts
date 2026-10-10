"use client";

import { FadeIn } from "./FadeIn";

const CHECKOUT_URL = "https://go.perfectpay.com.br/PPU38CQFUC3";

export function FinalCTA() {
  const handleClick = () => {
    if (typeof window.trackCheckout === "function") {
      window.trackCheckout("Vitalicio", 27.9);
    }
    window.location.href = CHECKOUT_URL;
  };

  return (
    <section className="py-10 md:py-14">
      <div className="max-w-[630px] mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(30px,4vw,43px)] leading-[1.15] tracking-[-0.055em] mb-3">
            Comece agora.{" "}
            <span className="text-[#FA2D62]">Sem travar na ideia.</span>
          </h2>
          <p className="text-[#A7A7B1] text-sm leading-relaxed mb-5">
            500+ prompts organizados. Um único pagamento. Acesso vitalício.
          </p>
          <button
            onClick={handleClick}
            className="inline-flex items-center justify-center gap-3 bg-[#FA2D62] text-white px-7 py-4 rounded-[10px] text-[13px] font-black shadow-[0_15px_32px_rgba(250,45,98,0.18)] hover:translate-y-[-2px] hover:brightness-110 transition-all duration-200"
          >
            QUERO MEU ACESSO →
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
