"use client";

import { Star } from "lucide-react";
import { FadeIn } from "./FadeIn";

const reviews = [
  {
    name: "Camila",
    city: "São José dos Campos",
    stars: 5,
    text: "Amei demais! Meus vídeos ficaram tão mais profissionais, as clientes já notaram a diferença.",
    initials: "CA",
    color: "bg-[#FF2D55]/15 text-[#FF2D55]",
  },
  {
    name: "Jéssica",
    city: "Campinas",
    stars: 5,
    text: "Finalmente consigo fazer vídeo de produto sem ficar horas tentando. É só copiar e colar.",
    initials: "JE",
    color: "bg-[#A855F7]/15 text-[#A855F7]",
  },
  {
    name: "Bruna",
    city: "Ribeirão Preto",
    stars: 5,
    text: "O modo POV virou meu favorito, parece que a pessoa tá mesmo usando a roupa.",
    initials: "BR",
    color: "bg-[#22D3EE]/15 text-[#22D3EE]",
  },
  {
    name: "Amanda",
    city: "Sorocaba",
    stars: 5,
    text: "Já vendi 3 peças só usando os prompts de selfie. Melhor investimento do ano.",
    initials: "AM",
    color: "bg-[#FF4D1A]/15 text-[#FF4D1A]",
  },
  {
    name: "Larissa",
    city: "Bauru",
    stars: 5,
    text: "Tava cansada de vídeo que parecia robô. Com esses prompts o movimento ficou natural.",
    initials: "LA",
    color: "bg-amber-400/15 text-amber-400",
  },
  {
    name: "Fernanda",
    city: "Uberlândia",
    stars: 4,
    text: "Muito bom pelo preço! Podia ter mais de verão, mas no geral superou minhas expectativas.",
    initials: "FE",
    color: "bg-emerald-400/15 text-emerald-400",
  },
  {
    name: "Isabela",
    city: "Londrina",
    stars: 5,
    text: "Uso todo dia pra minha loja na Shopee, já virou parte da minha rotina de trabalho.",
    initials: "IS",
    color: "bg-[#A855F7]/15 text-[#A855F7]",
  },
  {
    name: "Gabriela",
    city: "São José do Rio Preto",
    stars: 5,
    text: "Minha amiga me indicou e não me arrependi. Os de modelo são incríveis demais.",
    initials: "GA",
    color: "bg-[#22D3EE]/15 text-[#22D3EE]",
  },
  {
    name: "Caroline",
    city: "Joinville",
    stars: 5,
    text: "No começo duvidei que ia funcionar, mas testei e o resultado foi melhor do que esperava.",
    initials: "CA",
    color: "bg-[#FF006E]/15 text-[#FF006E]",
  },
  {
    name: "Mariana",
    city: "Feira de Santana",
    stars: 5,
    text: "Prático e rápido. Faço 5 vídeos por dia agora, antes eu fazia 1 por semana.",
    initials: "MA",
    color: "bg-[#06B6D4]/15 text-[#06B6D4]",
  },
];

function ReviewCard({ review }: { review: typeof reviews[number] }) {
  return (
    <div className="flex-shrink-0 w-[220px] sm:w-[260px] bg-[#111113] border border-[#2A2A2E]/60 rounded-xl p-4 mx-2">
      {/* Stars */}
      <div className="flex items-center gap-0.5 mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`size-3.5 ${
              i < review.stars
                ? "fill-amber-400 text-amber-400"
                : "fill-white/10 text-white/10"
            }`}
          />
        ))}
      </div>

      {/* Comment */}
      <p className="text-[12.5px] leading-relaxed text-[#A1A1AA]/80 mb-3">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Person */}
      <div className="flex items-center gap-3">
        <div
          className={`flex items-center justify-center size-7 rounded-full text-[10px] font-bold border border-white/[0.06] ${review.color}`}
        >
          {review.initials}
        </div>
        <div>
          <p className="text-[12px] font-semibold text-[#F4F4F5]">{review.name}</p>
          <p className="text-[10px] text-[#A1A1AA]/50">{review.city}</p>
        </div>
      </div>
    </div>
  );
}

export function SocialProofSection() {
  return (
    <section className="bg-[#0D0D10] py-8 sm:py-10 md:py-12 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 mb-6 text-center">
        <FadeIn>
          {/* Rating display */}
          <div className="inline-flex flex-col items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`size-5 ${
                    i < 4
                      ? "fill-amber-400 text-amber-400"
                      : "fill-amber-400/50 text-amber-400/50"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl sm:text-5xl font-black text-[#F4F4F5]">
                4,8
              </span>
              <span className="text-sm text-[#A1A1AA]/60 font-medium">de 5,0</span>
            </div>
            <p className="text-[13px] text-[#A1A1AA]/60">
              Baseado em <span className="text-[#C4C4CC] font-semibold">+400 usuárias</span> satisfeitas
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Single row, fast scroll */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-[#0D0D10] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-[#0D0D10] to-transparent z-10 pointer-events-none" />
        <div className="flex animate-scroll-left">
          {[...reviews, ...reviews, ...reviews].map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
