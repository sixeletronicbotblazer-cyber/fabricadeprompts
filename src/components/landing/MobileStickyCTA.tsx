"use client";

import { useEffect, useState } from "react";

const CHECKOUT_URL = "https://pay.cakto.com.br/oci2odo";

export function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docH > 0 ? scrollY / docH : 0;
      const oferta = document.getElementById("oferta");
      const ofertaRect = oferta?.getBoundingClientRect();
      const nearOferta = ofertaRect ? ofertaRect.top < 200 && ofertaRect.bottom > -200 : false;
      setVisible(pct > 0.08 && !nearOferta);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    if (typeof window.trackCheckout === "function") {
      window.trackCheckout("Vitalicio", 29.9);
    }
    window.location.href = CHECKOUT_URL;
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#060607]/95 backdrop-blur-md border-t border-[#27272E] px-4 py-3">
      <button
        onClick={handleClick}
        className="w-full bg-[#FA2D62] text-white py-3.5 rounded-[10px] text-[13px] font-black shadow-[0_15px_32px_rgba(250,45,98,0.18)]"
      >
        QUERO MEU ACESSO — R$29,90
      </button>
    </div>
  );
}
