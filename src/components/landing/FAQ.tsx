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
    q: "O que eu recebo?",
    a: "Acesso a uma biblioteca com +500 prompts organizados por tipo de vídeo e categoria, com pré-visualização, atualizações semanais e todos os formatos para TikTok Shop e Shopee.",
  },
  {
    q: "A biblioteca cria o vídeo automaticamente?",
    a: "Não. Ela reúne referências e prompts para orientar a criação. Você prepara a imagem inicial e usa o prompt de animação na ferramenta de IA escolhida.",
  },
  {
    q: "Posso usar no Flow ou Seedance?",
    a: "Você adapta os prompts à ferramenta e ao formato de geração que utilizar. Os resultados podem variar conforme o modelo de IA.",
  },
  {
    q: "Preciso aparecer nos vídeos?",
    a: "Não. Você pode criar cenas com modelo IA, POV, selfie, produto na mão e outros formatos sem gravar seu próprio rosto.",
  },
  {
    q: "Funciona para TikTok Shop e Shopee?",
    a: "Sim. Os prompts foram pensados para criativos de produtos físicos, principalmente para TikTok Shop, Shopee e vídeos de oferta.",
  },
  {
    q: "É pagamento único?",
    a: "Sim. Você paga R$49,90 uma vez e mantém o acesso vitalício. Sem mensalidade.",
  },
  {
    q: "Recebo acesso na hora?",
    a: "Sim. Após a confirmação do pagamento, o acesso é liberado imediatamente.",
  },
  {
    q: "Funciona com qual ferramenta de IA?",
    a: "Você pode adaptar os prompts para ferramentas de imagem e vídeo com IA, como Flow, Veo, Kling, Sora e outras plataformas. Os resultados podem variar conforme o modelo.",
  },
  {
    q: "Tem garantia?",
    a: "Sim. Você tem 7 dias de garantia para testar se a biblioteca faz sentido para você.",
  },
];

export function FAQ() {
  return (
    <section className="bg-[#08080A] py-10 sm:py-14 md:py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-[1.4rem] sm:text-2xl md:text-[2rem] font-black text-[#F4F4F5] leading-[1.15] sm:leading-[1.1] mb-6 sm:mb-8 text-center">
            Dúvidas frequentes
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-[#111113] rounded-xl mb-2.5 px-5 border border-[#2A2A2E]/60 hover:border-white/[0.12] transition-colors overflow-hidden"
              >
                <AccordionTrigger className="text-sm font-semibold text-[#C4C4CC] hover:no-underline py-4 data-[state=open]:text-[#FF2D55] transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#A1A1AA]/80 leading-relaxed">
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
