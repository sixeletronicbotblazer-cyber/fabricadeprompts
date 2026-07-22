"use client";

import { FadeIn } from "./FadeIn";

const proofs = [
  {
    src: "/images/proof-jan-fev.png",
    label: "Venda realizada",
  },
  {
    src: "/images/proof-jun.png",
    label: "Resultado real",
  },
];

function ProofCard({ proof }: { proof: (typeof proofs)[number] }) {
  return (
    <div className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]">
      <div className="relative rounded-2xl overflow-hidden bg-[#111] border border-white/[0.06] shadow-[0_0_30px_rgba(254,44,85,0.06),0_0_60px_rgba(37,244,238,0.04)]">
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#FE2C55]/15 text-[#FE2C55] backdrop-blur-sm">
            {proof.label}
          </span>
        </div>
        <img
          src={proof.src}
          alt={proof.label}
          loading="lazy"
          className="w-full aspect-[4/3] object-cover"
        />
      </div>
    </div>
  );
}

export function ProofCarousel() {
  return (
    <section className="bg-[#0D0D0D] py-10 md:py-14 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 mb-8 text-center">
        <FadeIn>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight mb-2">
            Resultados e provas de quem já está usando criativos com IA
          </h2>
          <p className="text-sm text-white/45 max-w-md mx-auto">
            Prints reais de vendas, faturamento e validação usando criativos no TikTok Shop/Shopee.
          </p>
        </FadeIn>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0D0D0D] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0D0D0D] to-transparent z-10 pointer-events-none" />
        <div className="flex animate-scroll-right-slow">
          {[...proofs, ...proofs, ...proofs, ...proofs].map((proof, i) => (
            <div key={i} className="mx-2.5">
              <ProofCard proof={proof} />
            </div>
          ))}
        </div>
      </div>

      <p className="max-w-2xl mx-auto px-4 mt-8 text-center text-[11px] text-white/25 leading-relaxed">
        Os resultados variam de acordo com produto, oferta, criativo e execução. Os prompts ajudam a criar mais criativos para testar com mais velocidade.
      </p>
    </section>
  );
}
