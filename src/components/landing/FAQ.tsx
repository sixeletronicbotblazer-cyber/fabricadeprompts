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
    q: "Preciso saber criar prompts?",
    a: "Você parte de uma base pronta e adapta os detalhes ao seu produto. As referências e orientações ajudam a entender o que fazer em cada etapa.",
  },
  {
    q: "A biblioteca cria o vídeo automaticamente?",
    a: "Não. Ela reúne referências e prompts para orientar a criação. Você prepara a imagem inicial e usa o prompt de animação na ferramenta de IA escolhida.",
  },
  {
    q: "Posso usar no Flow ou Seedance?",
    a: "Você adapta os prompts à ferramenta e ao formato de geração que utilizar. As opções e os resultados podem variar conforme o modelo de IA.",
  },
  {
    q: "Qual a diferença entre mensal e vitalício?",
    a: "No mensal, você acessa pagando mês a mês e pode cancelar quando quiser. No vitalício, você paga uma vez e mantém o acesso completo à Biblioteca Premium, Academy, módulos extras, Grupo VIP e todas as atualizações futuras.",
  },
  {
    q: "O que eu recebo?",
    a: "Você recebe acesso à Biblioteca Premium + Academy, com prompts, formatos e referências organizadas para criar vídeos com IA para TikTok Shop e Shopee. Inclui categorias como Modelo, POV, Selfie UGC, Produto na Mão, Dancinha, Ganchos, Transições, Moda, Casa, Acessórios, Pet, datas comemorativas e outras atualizações.",
  },
  {
    q: "O acesso inclui a Biblioteca Promptly Prompts?",
    a: "Sim. A Biblioteca Promptly Prompts (Galeria Premium) está disponível como bônus especial dentro do acesso vitalício.",
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
    a: "Você pode adaptar os prompts para ferramentas de imagem e vídeo com IA, como Flow, Veo, Kling, Sora e outras plataformas. Os resultados podem variar conforme o modelo.",
  },
  {
    q: "Tem garantia?",
    a: "Sim. Você tem 7 dias de garantia para testar se o conteúdo faz sentido para você.",
  },
];

export function FAQ() {
  return (
    <section className="bg-[#08080A] py-8 sm:py-10 md:py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-[1.3rem] sm:text-2xl md:text-[2rem] font-black text-[#F4F4F5] leading-[1.1] sm:leading-[1.0] mb-5 sm:mb-6 text-center">
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
