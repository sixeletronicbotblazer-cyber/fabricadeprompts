"use client";

import { FadeIn } from "./FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Preciso aparecer nos videos?",
    a: "Nao. Voce pode criar cenas com modelo IA, POV, selfie, produto na mao e outros formatos sem gravar seu proprio rosto.",
  },
  {
    q: "Funciona para TikTok Shop e Shopee?",
    a: "Sim. Os prompts foram pensados para criativos de produtos fisicos, principalmente para TikTok Shop, Shopee e videos de oferta.",
  },
  {
    q: "Preciso saber criar prompt?",
    a: "Nao. A ideia e justamente copiar um prompt pronto e adaptar pequenos detalhes para o seu produto.",
  },
  {
    q: "Qual a diferenca entre mensal e vitalicio?",
    a: "No mensal, voce acessa a plataforma pagando mes a mes. No vitalicio, voce paga uma vez e mantem o acesso a plataforma, modulos extras, atualizacoes e bonus premium.",
  },
  {
    q: "O Plano Vitalicio tem Galeria Premium?",
    a: "Sim. A Galeria Premium de Prompts esta disponivel como bonus especial dentro do acesso vitalicio.",
  },
  {
    q: "Recebo acesso na hora?",
    a: "Sim. Apos a confirmacao do pagamento, voce recebe as instrucoes de acesso aos conteudos disponiveis.",
  },
  {
    q: "E pagamento unico?",
    a: "O Plano Vitalicio e pagamento unico. O Plano Mensal e recorrente mensal.",
  },
  {
    q: "Posso cancelar o mensal?",
    a: "Sim. O plano mensal pode ser cancelado conforme as regras da plataforma de pagamento.",
  },
  {
    q: "Funciona com qual ferramenta de IA?",
    a: "Voce pode adaptar os prompts para ferramentas de imagem e video com IA, como Flow, Veo, Kling, Sora e outras plataformas compativeis.",
  },
  {
    q: "Tem garantia?",
    a: "Sim. Voce tem 7 dias de garantia para testar se o conteudo faz sentido para voce.",
  },
];

export function FAQ() {
  return (
    <section className="bg-[#09090D] py-8 sm:py-10 md:py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-[1.3rem] sm:text-2xl md:text-[2rem] font-black text-[#F4F4F6] leading-[1.1] sm:leading-[1.0] mb-5 sm:mb-6 text-center">
            Duvidas frequentes
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-[#111118] rounded-[16px] mb-2.5 px-5 border border-white/[0.08] hover:border-white/[0.12] transition-colors overflow-hidden"
              >
                <AccordionTrigger className="text-sm font-semibold text-[#C4C4CC] hover:no-underline py-4 data-[state=open]:text-[#7C3AED] transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#A7A7B2]/80 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
