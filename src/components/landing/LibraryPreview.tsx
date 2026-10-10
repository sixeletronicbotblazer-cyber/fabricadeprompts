"use client";

import { FadeIn } from "./FadeIn";

const checks = [
  "500+ prompts em diferentes categorias",
  "Prévia visual antes de copiar",
  "POV, UGC, Faceless, Selfie e produtos",
  "Aulas rápidas e acesso pelo navegador",
];

export function LibraryPreview() {
  return (
    <section id="por-dentro" className="py-16 md:py-20">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-8 md:gap-12 items-center">
          {/* Text side */}
          <FadeIn>
            <div>
              <span className="inline-flex items-center border border-[#3c1c27] bg-[#160e12] text-[#FA2D62] text-[10px] font-black tracking-[0.15em] uppercase px-3.5 py-2 rounded-[40px]">
                Tudo organizado
              </span>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(32px,4vw,48px)] leading-[1.12] tracking-[-0.055em] mt-4 mb-3">
                Você não precisa{" "}
                <span className="text-[#FA2D62]">ter a ideia perfeita.</span>
              </h2>
              <p className="text-sm leading-relaxed text-[#A7A7B1]">
                Em vez de começar com uma tela em branco, abra a biblioteca, escolha o formato e adapte o comando ao seu produto.
              </p>
              <ul className="grid gap-2.5 my-6">
                {checks.map((c) => (
                  <li key={c} className="text-[13px] text-[#e0e0e5]">
                    <span className="text-[#34e3b4] mr-2.5">✓</span>
                    {c}
                  </li>
                ))}
              </ul>
              <a
                href="#oferta"
                className="inline-flex items-center justify-center gap-3 bg-[#FA2D62] text-white px-7 py-4 rounded-[10px] text-[13px] font-black shadow-[0_15px_32px_rgba(250,45,98,0.18)] hover:translate-y-[-2px] hover:brightness-110 transition-all duration-200"
              >
                QUERO ACESSAR A BIBLIOTECA →
              </a>
            </div>
          </FadeIn>

          {/* Phone mockup with real screen recording */}
          <FadeIn delay={0.15}>
            <div className="flex justify-center order-first md:order-last">
              <div className="relative w-[260px] sm:w-[280px] md:w-[300px]">
                {/* Phone frame */}
                <div className="relative bg-[#1a1a1e] rounded-[2.5rem] border-[3px] border-[#2a2a30] shadow-[0_30px_80px_rgba(0,0,0,0.6),0_0_40px_rgba(250,45,98,0.08)] overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-[#1a1a1e] rounded-b-[1rem] z-20 flex items-center justify-center">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#2a2a30]" />
                  </div>
                  {/* Status bar */}
                  <div className="relative z-10 flex items-center justify-between px-6 pt-[6px] h-[44px] text-[9px] text-white/50 font-medium">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-2" viewBox="0 0 12 8" fill="currentColor"><path d="M1 6h2v2H1V6zm3-2h2v4H4V4zm3-4h2v8H7V0z" opacity="0.4"/></svg>
                      <svg className="w-3.5 h-2" viewBox="0 0 16 8" fill="currentColor"><rect x="0" y="1" width="12" height="6" rx="1" opacity="0.3"/><rect x="1" y="2" width="8" height="4" rx="0.5"/></svg>
                    </div>
                  </div>
                  {/* Video screen */}
                  <div className="mx-2 rounded-[1.2rem] overflow-hidden bg-black">
                    <video
                      src="/mockup-por-dentro.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  {/* Home indicator */}
                  <div className="flex justify-center py-2.5">
                    <div className="w-[100px] h-[4px] rounded-full bg-white/20" />
                  </div>
                </div>
                {/* Glow effect behind phone */}
                <div className="absolute -inset-4 bg-[#FA2D62]/5 rounded-[3rem] blur-2xl -z-10" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
