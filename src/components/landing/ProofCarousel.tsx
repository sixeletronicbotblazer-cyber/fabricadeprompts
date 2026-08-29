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
    <div className="flex-shrink-0 w-[260px] sm:w-[300px] lg:w-[340px]">
      <div className="relative rounded-2xl overflow-hidden bg-[#111113] border border-[#2A2A2E]/60 ">
        <div className="absolute top-2.5 left-2.5 z-10">
          <span className="inline-block text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FF2D55]/15 text-[#FF2D55] backdrop-blur-sm border border-[#FF2D55]/10">
            {proof.label}
          </span>
        </div>
        <img
          src={proof.src}
          alt={proof.label}
          loading="lazy"
          className="w-full aspect-[4/3] object-contain bg-black"
        />
      </div>
    </div>
  );
}

export function ProofCarousel() {
  return (
    <section className="bg-[#0D0D10] py-8 sm:py-10 md:py-12 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 mb-5 text-center">
        <FadeIn>
          <h2 className="text-[1.2rem] sm:text-xl md:text-[1.75rem] font-black leading-[1.1] sm:leading-[1.0] text-[#F4F4F5] mb-2">
            Quem usa o mecanismo de prompts,
            <br className="hidden sm:block" />
            <span className="text-[#FF2D55]"> testa mais criativos e vende mais</span>
          </h2>
          <p className="text-[12px] sm:text-sm text-[#A1A1AA]/70 max-w-md mx-auto">
            Prints reais de quem está criando vídeos com IA e faturando no TikTok Shop e Shopee.
          </p>
        </FadeIn>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-[#0D0D10] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-[#0D0D10] to-transparent z-10 pointer-events-none" />
        <div className="flex animate-scroll-right-slow">
          {[...proofs, ...proofs, ...proofs, ...proofs].map((proof, i) => (
            <div key={i} className="mx-2">
              <ProofCard proof={proof} />
            </div>
          ))}
        </div>
      </div>

      <p className="max-w-2xl mx-auto px-4 mt-6 text-center text-[10px] sm:text-[11px] text-[#A1A1AA]/40 leading-relaxed">
        Os resultados variam de acordo com produto, oferta, criativo e execução. Os prompts ajudam a criar mais criativos para testar com mais velocidade.
      </p>
    </section>
  );
}