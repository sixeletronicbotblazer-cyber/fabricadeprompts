"use client";

import { useState, useEffect } from "react";

export function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <a
        href="#planos"
        className="flex items-center justify-center w-full bg-[#0A0A0C]/95 backdrop-blur-md border-t border-[#FF2D55]/30 py-3.5 px-6 transition-all active:scale-[0.99]"
      >
        <span className="text-[#22D3EE] font-extrabold text-sm mr-2">R$17,90</span>
        <span className="w-px h-4 bg-white/20" />
        <span className="text-white font-extrabold text-sm ml-2 tracking-wide uppercase">
          Quero acessar
        </span>
      </a>
    </div>
  );
}
