"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);
  const initialized = useRef(false);

  const checkScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollPercent = scrollY / (docHeight - winHeight);

    if (scrollPercent < 0.08) {
      setVisible(false);
      return;
    }

    const planosEl = document.getElementById("planos");
    if (planosEl) {
      const rect = planosEl.getBoundingClientRect();
      if (rect.top < winHeight + 60 && rect.bottom > 0) {
        setVisible(false);
        return;
      }
    }

    setVisible(true);
  }, []);

  useEffect(() => {
    const handler = () => {
      checkScroll();
      if (!initialized.current) {
        initialized.current = true;
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [checkScroll]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden pb-[env(safe-area-inset-bottom)]">
      <a
        href="https://checkout.perfectpay.com.br/pay/PPU38CQFUC3"
        onClick={() => { (window as any).trackCheckout?.('Vitalicio', 49.90); }}
        className="flex items-center justify-center w-full bg-[#FF2D55] backdrop-blur-md py-3.5 px-6 shadow-[0_-4px_20px_rgba(255,45,85,0.25)] transition-all active:scale-[0.99]"
      >
        <span className="text-white/80 font-bold text-[13px] mr-2.5">R$49,90</span>
        <span className="w-px h-3.5 bg-white/25" />
        <span className="text-white font-extrabold text-[13px] ml-2.5 tracking-wide uppercase">
          Quero acesso vitalício
        </span>
      </a>
    </div>
  );
}
