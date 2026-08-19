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
    q: "Preciso aparecer nos vídeos?",
    a: "Não. Você pode criar cenas com modelo IA, POV, selfie, produto na mão e outros formatos sem gravar seu próprio rosto.",
  },
  {
    q: "Funciona para TikTok Shop e Shopee?",
    a: "Sim. Os prompts foram pensados para criativos de produtos físicos, principalmente para TikTok Shop, Shopee e vídeos de oferta.",
  },
  {
    q: "Preciso saber criar prompt?",
    a: "Não. A ideia é justamente copiar um prompt pronto e adaptar pequenos detalhes para o seu produto.",
  },
  {
    q: "Qual a diferença entre mensal e vitalício?",
    a: "No mensal, você acessa a plataforma pagando mês a mês. No vitalício, você paga uma vez e mantém o acesso à plataforma, módulos extras, atualizações e bônus premium.",
  },
  {
    q: "O Plano Vitalício tem Galeria Premium?",
    a: "Sim. A Galeria Premium de Prompts está disponível como bônus especial dentro do acesso vitalício.",
  },
  {
    q: "Recebo acesso na hora?",
    a: "Sim. Após a confirmação do pagamento, você recebe as instruções de acesso aos conteúdos disponíveis.",
  },
  {
    q: "É pagamento único?",
    a: "O Plano Vitalício é pagamento único. O Plano Mensal é recorrente mensal.",
  },
  {
    q: "Posso cancelar o mensal?",
    a: "Sim. O plano mensal pode ser cancelado conforme as regras da plataforma de pagamento.",
  },
  {
    q: "Funciona com qual ferramenta de IA?",
    a: "Você pode adaptar os prompts para ferramentas de imagem e vídeo com IA, como Flow, Veo, Kling, Sora e outras plataformas compatíveis.",
  },
  {
    q: "Tem garantia?",
    a: "Sim. Você tem 7 dias de garantia para testar se o conteúdo faz sentido para você.",
  },
];

export function FAQ() {
  return (
    <section className="bg-[#0D0D0D] py-10 md:py-16 px-4">
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
