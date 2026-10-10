"use client";

import Image from "next/image";
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
                    <span className="text-[#FA2D62] font-black mr-2.5">✓</span>
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

          {/* Screenshot side */}
          <FadeIn delay={0.15}>
            <div className="p-4 bg-gradient-to-br from-[#1c1a2e] to-[#101117] rounded-[19px] border border-[#3a2842] shadow-[0_25px_65px_rgba(0,0,0,0.5)] order-first md:order-last">
              <div className="flex items-center justify-between text-[13px] font-extrabold px-2.5 pt-2.5 pb-4">
                <span className="font-[family-name:var(--font-space-grotesk)]">◈ PromptVault</span>
                <span className="bg-[#282432] text-[#a9a5bd] rounded-full px-4 py-1.5 text-[10px] font-semibold">
                  Buscar prompts...
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <Image src="/images/galeria-premium-bonus.png" alt="POV Produto" width={200} height={267} className="aspect-[3/4] object-cover rounded-lg" />
                <Image src="/images/prova_social_whatsapp_01.png" alt="Selfie UGC" width={200} height={267} className="aspect-[3/4] object-cover rounded-lg" />
                <Image src="/images/proof-jan-fev.png" alt="Gancho Visual" width={200} height={267} className="aspect-[3/4] object-cover rounded-lg" />
                <Image src="/images/prova_social_whatsapp_02.png" alt="Faceless" width={200} height={267} className="aspect-[3/4] object-cover rounded-lg" />
                <Image src="/images/prova_social_whatsapp_03.png" alt="Modelo" width={200} height={267} className="aspect-[3/4] object-cover rounded-lg" />
                <Image src="/images/prova_social_whatsapp_04.png" alt="Produto" width={200} height={267} className="aspect-[3/4] object-cover rounded-lg" />
              </div>
              <p className="text-[#bcb8c8] pt-3 px-1.5 text-[11px]">
                Galeria de formatos visuais • visualização demonstrativa
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
