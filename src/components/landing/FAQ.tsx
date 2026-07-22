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
    q: "Qual plano vale mais a pena?",
    a: "O Plano Inicial é para quem quer começar com os prompts principais. O Plano Completo é a melhor escolha para quem quer todos os modos, exemplos, módulos, grupo VIP, bônus e atualizações.",
  },
  {
    q: "O que recebo no Plano Completo?",
    a: "O Plano Completo libera a biblioteca completa com +250 prompts organizados, modos Modelo, POV e Selfie UGC, novos módulos, bônus, aulas rápidas, exemplos prontos e acesso ao grupo VIP para compradores.",
  },
  {
    q: "Preciso saber editar vídeo?",
    a: "Não. A ideia é usar prompts prontos para criar as imagens e movimentos com IA. Depois você pode ajustar o resultado na ferramenta que já usa.",
  },
  {
    q: "Serve para TikTok Shop e Shopee?",
    a: "Sim. Os prompts foram pensados para criar vídeos de produto, roupas e criativos com estética UGC.",
  },
  {
    q: "É curso ou app?",
    a: "É um app com prompts organizados, exemplos e aulas rápidas para usar como guia prático.",
  },
  {
    q: "Recebo acesso na hora?",
    a: "Sim. Após a compra, o acesso é liberado imediatamente.",
  },
  {
    q: "Tem garantia?",
    a: "Sim. Você tem garantia de 7 dias conforme as regras da plataforma de pagamento.",
  },
  {
    q: "Os resultados são garantidos?",
    a: "Não. Os resultados dependem do produto, oferta, criativo, tráfego e execução. O app ajuda você a criar mais criativos para testar com mais rapidez.",
  },
  {
    q: "Funciona para qualquer roupa?",
    a: "Funciona melhor para roupas com imagem clara e bem visível. O app tem categorias para blusa, calça, short, vestido, academia, jaqueta e outras peças.",
  },
  {
    q: "Serve para Flow, Veo ou outras ferramentas?",
    a: "Sim. Os prompts foram escritos para ferramentas de vídeo por IA que animam imagem de referência.",
  },
];

export function FAQ() {
  return (
    <section className="bg-black py-10 md:py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight mb-6 text-center">
            Dúvidas frequentes
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-[#1A1A1A] rounded-xl mb-2.5 px-5 border border-white/[0.08] overflow-hidden"
              >
                <AccordionTrigger className="text-sm font-semibold text-white hover:no-underline py-4 data-[state=open]:text-[#FE2C55] transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-white/50 leading-relaxed">
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
