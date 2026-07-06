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
    q: "Vou receber o quê?",
    a: "Você recebe acesso ao InfoApp com o passo a passo, prompts organizados, checklist e links úteis.",
  },
  {
    q: "O acesso é imediato?",
    a: "Sim. Depois da compra, você recebe as instruções de acesso.",
  },
];

export function FAQ() {
  return (
    <section className="py-8 md:py-14 px-4">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-foreground leading-tight mb-5 text-center">
            Dúvidas frequentes
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border/60 bg-white rounded-xl mb-2 px-5 border">
                <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-foreground/70 leading-relaxed">
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