"use client";

import { FadeIn } from "./FadeIn";

const faqItems = [
  {
    q: "É um PDF ou uma biblioteca online?",
    a: "É uma biblioteca digital online. Se o checkout entregar um PDF, ele funciona como guia com o link de acesso, não como o produto principal.",
  },
  {
    q: "Vou precisar de outras ferramentas?",
    a: "Para gerar as imagens e vídeos, você pode usar ferramentas de IA externas que podem ter custos ou créditos próprios.",
  },
  {
    q: "Posso acessar no celular?",
    a: "Sim. A biblioteca abre pelo navegador do celular, tablet ou computador.",
  },
  {
    q: "Como recebo após a compra?",
    a: "Você recebe as instruções pelo fluxo de entrega configurado no checkout, incluindo o link de acesso à biblioteca.",
  },
];

export function FAQ() {
  return (
    <section className="py-10 md:py-14">
      <div className="max-w-[690px] mx-auto px-6">
        <h3 className="text-center font-[family-name:var(--font-space-grotesk)] text-[26px] font-bold mb-4">
          Perguntas rápidas
        </h3>
        {faqItems.map((item, i) => (
          <details key={i} className="bg-[#131418] border border-[#25262c] rounded-[9px] px-4 py-3.5 my-2 group">
            <summary className="cursor-pointer text-[13px] font-extrabold list-none flex items-center justify-between">
              {item.q}
              <span className="text-[#A7A7B1] ml-2 transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="text-xs text-[#a0a1ac] leading-relaxed mt-2">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
