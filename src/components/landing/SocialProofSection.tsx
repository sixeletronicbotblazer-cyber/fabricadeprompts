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
    color: "bg-pink-500/20 text-pink-400",
  },
  {
    name: "Jéssica",
    city: "Campinas",
    stars: 5,
    text: "Finalmente consigo fazer vídeo de produto sem ficar horas tentando. É só copiar e colar.",
    initials: "JE",
    color: "bg-purple-500/20 text-purple-400",
  },
  {
    name: "Bruna",
    city: "Ribeirão Preto",
    stars: 5,
    text: "O modo POV virou meu favorito, parece que a pessoa tá mesmo usando a roupa.",
    initials: "BR",
    color: "bg-cyan-500/20 text-cyan-400",
  },
  {
    name: "Amanda",
    city: "Sorocaba",
    stars: 5,
    text: "Já vendi 3 peças só usando os prompts de selfie. Melhor investimento do ano.",
    initials: "AM",
    color: "bg-rose-500/20 text-rose-400",
  },
  {
    name: "Larissa",
    city: "Bauru",
    stars: 5,
    text: "Tava cansada de vídeo que parecia robô. Com esses prompts o movimento ficou natural.",
    initials: "LA",
    color: "bg-amber-500/20 text-amber-400",
  },
  {
    name: "Fernanda",
    city: "Uberlândia",
    stars: 4,
    text: "Muito bom pelo preço! Podia ter mais de verão, mas no geral superou minhas expectativas.",
    initials: "FE",
    color: "bg-emerald-500/20 text-emerald-400",
  },
  {
    name: "Isabela",
    city: "Londrina",
    stars: 5,
    text: "Uso todo dia pra minha loja na Shopee, já virou parte da minha rotina de trabalho.",
    initials: "IS",
    color: "bg-violet-500/20 text-violet-400",
  },
  {
    name: "Gabriela",
    city: "São José do Rio Preto",
    stars: 5,
    text: "Minha amiga me indicou e não me arrependi. Os de modelo são incríveis demais.",
    initials: "GA",
    color: "bg-sky-500/20 text-sky-400",
  },
  {
    name: "Caroline",
    city: "Joinville",
    stars: 5,
    text: "No começo duvidei que ia funcionar, mas testei e o resultado foi melhor do que esperava.",
    initials: "CA",
    color: "bg-fuchsia-500/20 text-fuchsia-400",
  },
  {
    name: "Mariana",
    city: "Feira de Santana",
    stars: 5,
    text: "Prático e rápido. Faço 5 vídeos por dia agora, antes eu fazia 1 por semana.",
    initials: "MA",
    color: "bg-teal-500/20 text-teal-400",
  },
];

function ReviewCard({ review }: { review: typeof reviews[number] }) {
  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[340px] bg-[#1A1A1A] border border-white/[0.06] rounded-2xl p-5 mx-2.5">
      {/* Stars */}
      <div className="flex items-center gap-0.5 mb-3">
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
      <p className="text-[13.5px] leading-relaxed text-white/75 mb-4">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Person */}
      <div className="flex items-center gap-3">
        <div
          className={`flex items-center justify-center size-9 rounded-full text-[11px] font-bold ${review.color}`}
        >
          {review.initials}
        </div>
        <div>
          <p className="text-[13px] font-semibold text-white">{review.name}</p>
          <p className="text-[11px] text-white/35">{review.city}</p>
        </div>
      </div>
    </div>
  );
}

export function SocialProofSection() {
  // Split reviews into 2 rows for opposite-direction scrolling
  const row1 = reviews.slice(0, 5);
  const row2 = reviews.slice(5, 10);

  return (
    <section className="bg-[#0D0D0D] py-12 md:py-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 mb-10 text-center">
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
              <span className="text-4xl sm:text-5xl font-extrabold text-white">
                4,8
              </span>
              <span className="text-sm text-white/40 font-medium">de 5,0</span>
            </div>
            <p className="text-[13px] text-white/40">
              Baseado em <span className="text-white/60 font-semibold">+400 usuárias</span> satisfeitas
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0D0D0D] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0D0D0D] to-transparent z-10 pointer-events-none" />
        <div className="flex animate-scroll-left">
          {[...row1, ...row1, ...row1].map((review, i) => (
            <ReviewCard key={`r1-${i}`} review={review} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0D0D0D] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0D0D0D] to-transparent z-10 pointer-events-none" />
        <div className="flex animate-scroll-right">
          {[...row2, ...row2, ...row2].map((review, i) => (
            <ReviewCard key={`r2-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}