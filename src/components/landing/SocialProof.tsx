"use client";

import { useEffect, useState } from "react";

const names = [
  "Ana C.", "Pedro H.", "Juliana M.", "Rafael S.", "Camila F.",
  "Lucas T.", "Beatriz A.", "Thiago O.", "Mariana L.", "Gabriel R.",
  "Isabela P.", "Matheus V.", "Carolina D.", "Felipe N.", "Larissa B.",
  "Diego G.", "Amanda J.", "Bruno K.", "Patricia W.", "Vinicius E.",
];

export function SocialProof() {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const delays = [8000, 22000, 45000, 68000, 95000, 130000, 175000, 220000, 280000, 340000, 400000, 470000, 540000];
    const timers = delays.map((d) =>
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % names.length);
        setVisible(true);
        setTimeout(() => setVisible(false), 4500);
      }, d)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 left-4 z-30 max-w-[260px] animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="bg-[#141519] border border-[#27272E] rounded-lg px-3 py-2 shadow-lg flex items-center gap-2">
        <div className="size-7 rounded-full bg-[#FA2D62]/20 flex items-center justify-center text-[10px] font-bold text-[#FA2D62]">
          ✓
        </div>
        <p className="text-[11px] text-[#A7A7B1]">
          <strong className="text-white">{names[current]}</strong> acabou de comprar
        </p>
      </div>
    </div>
  );
}
