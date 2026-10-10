"use client";

import { FadeIn } from "./FadeIn";
import { Heart, MessageCircle, Bookmark, Share2, Play } from "lucide-react";

const videos = [
  {
    src: "/images/example-0.mp4",
    caption: "Look completo com movimento natural",
  },
  {
    src: "/images/example-1.mp4",
    caption: "Modelo IA mostrando a peça de perto",
  },
  {
    src: "/images/example-2.mp4",
    caption: "Caimento realista do tecido",
  },
  {
    src: "/images/example-3.mp4",
    caption: "Detalhe da roupa em movimento",
  },
  {
    src: "/images/example-4.mp4",
    caption: "Criativo pronto para anunciar",
  },
  {
    src: "/images/example-6.mp4",
    caption: "Vídeo UGC sem gravar nada",
  },
  {
    src: "/images/example-7.mp4",
    caption: "Estilo TikTok Shop em segundos",
  },
];

function VideoCard({ video, index }: { video: (typeof videos)[number]; index: number }) {
  return (
    <div className="flex-shrink-0 w-[150px] sm:w-[180px] lg:w-[200px]">
      <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-[#111] shadow-lg shadow-black/40">
        {/* Video */}
        <video
          src={video.src}
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          className="w-full h-full object-cover"
          poster=""
        />

        {/* Top overlay */}
        <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none" />
        {/* Bottom overlay */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 to-transparent z-10 pointer-events-none" />

        {/* Badge top-left */}
        <div className="absolute top-2.5 left-2.5 z-20">
          <span className="inline-flex items-center gap-1 bg-[#7C3AED]/90 backdrop-blur-sm text-[9px] sm:text-[10px] font-bold text-white px-2 py-0.5 rounded-full">
            <Play className="size-2" fill="currentColor" />
            Prompt aplicado
          </span>
        </div>

        {/* Side icons (TikTok-style) */}
        <div className="absolute right-2 bottom-14 z-20 flex flex-col items-center gap-3 pointer-events-none">
          <Heart className="size-4 sm:size-[18px] text-white" />
          <MessageCircle className="size-4 sm:size-[18px] text-white" />
          <Bookmark className="size-4 sm:size-[18px] text-white" />
          <Share2 className="size-4 sm:size-[18px] text-white" />
        </div>

        {/* Caption bottom */}
        <div className="absolute bottom-2.5 left-2.5 right-9 z-20">
          <p className="text-[9px] sm:text-[10px] text-white/80 leading-snug">
            {video.caption}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ExampleCarousel() {
  return (
    <section className="bg-black py-10 md:py-14 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 mb-8 text-center">
        <FadeIn>
          <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white leading-tight mb-2">
            Veja o que dá para criar com os prompts
          </h2>
          <p className="text-xs sm:text-sm text-white/45 max-w-sm mx-auto">
            Vídeos gerados copiando e colando — sem editar, sem gravar.
          </p>
        </FadeIn>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        <div className="flex animate-scroll-left-slow">
          {[...videos, ...videos, ...videos].map((video, i) => (
            <div key={i} className="mx-1.5">
              <VideoCard video={video} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
