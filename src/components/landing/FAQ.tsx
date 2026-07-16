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
    q: "É um curso?",
    a: "Não. É um guia prático em formato de aplicativo, com passo a passo e prompts prontos para copiar.",
  },
  {
    q: "O que são os modos Modelo, POV e Selfie?",
    a: "São 3 estilos de vídeo que mais vendem. Modelo é a IA mostrando a roupa de frente. POV é em primeira pessoa, como se fosse você segurando a peça. Selfie é a modelo olhando pra câmera, estilo selfie real.",
  },
  {
    q: "Funciona para Shopee também?",
    a: "Sim. Os prompts foram pensados para vídeos curtos de roupa, então funcionam tanto para TikTok Shop quanto para Shopee e outros marketplaces.",
  },
  {
    q: "Preciso aparecer nos vídeos?",
    a: "Não. A ideia é criar uma personagem IA para mostrar as roupas.",
  },
  {
    q: "Preciso comprar as roupas?",
    a: "Não necessariamente. Você pode usar imagens dos produtos como referência para criar os criativos.",
  },
  {
    q: "Funciona para qualquer roupa?",
    a: "Funciona melhor para roupas com imagem clara e bem visível. O app tem categorias para blusa, calça, short, vestido, academia, jaqueta e outras peças.",
  },
  {
    q: "Serve para Flow, Veo ou outras ferramentas?",
    a: "Sim. Os prompts foram escritos para ferramentas de vídeo por IA que animam imagem de referência.",
  },
  {
    q: "O acesso é imediato?",
    a: "Sim. Depois da compra, você recebe as instruções de acesso.",
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