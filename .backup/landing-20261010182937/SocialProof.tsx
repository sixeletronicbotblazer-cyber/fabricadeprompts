"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

const proofs = [
  { name: "Ana C.", delay: 8000, duration: 4000 },
  { name: "Pedro H.", delay: 22000, duration: 3500 },
  { name: "Mariana S.", delay: 38000, duration: 4000 },
  { name: "Lucas M.", delay: 55000, duration: 3500 },
  { name: "Juliana R.", delay: 72000, duration: 4000 },
  { name: "Rafael A.", delay: 95000, duration: 3500 },
  { name: "Beatriz L.", delay: 115000, duration: 4000 },
  { name: "Gabriel F.", delay: 138000, duration: 3500 },
  { name: "Camila N.", delay: 162000, duration: 4000 },
  { name: "Thiago D.", delay: 188000, duration: 3500 },
  { name: "Fernanda O.", delay: 215000, duration: 4000 },
  { name: "Matheus P.", delay: 245000, duration: 3500 },
  { name: "Isabela G.", delay: 278000, duration: 4000 },
  { name: "Andre V.", delay: 312000, duration: 3500 },
  { name: "Larissa T.", delay: 348000, duration: 4000 },
  { name: "Bruno E.", delay: 385000, duration: 3500 },
  { name: "Carolina B.", delay: 420000, duration: 4000 },
  { name: "Diego I.", delay: 458000, duration: 3500 },
  { name: "Amanda U.", delay: 498000, duration: 4000 },
  { name: "Ricardo Z.", delay: 540000, duration: 3500 },
];

export function SocialProof() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState<string | null>(null);
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    const hideTimers: NodeJS.Timeout[] = [];

    proofs.forEach((p) => {
      const showTimer = setTimeout(() => {
        setCurrent(p.name);
        setVisible(true);

        const hideTimer = setTimeout(() => {
          setVisible(false);
        }, p.duration);
        hideTimers.push(hideTimer);
      }, p.delay);

      timersRef.current.push(showTimer);
    });

    return () => {
      timersRef.current.forEach(clearTimeout);
      hideTimers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:bottom-6 sm:left-auto sm:right-6 sm:w-[300px] z-40 pointer-events-none">
      <AnimatePresence>
        {visible && current && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto"
          >
            <div className="bg-[#151518]/95 backdrop-blur-md border border-[#2A2A2E]/60 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl shadow-black/40">
              <div className="flex-shrink-0 size-9 rounded-full bg-[#FF2D55]/10 border border-[#FF2D55]/12 flex items-center justify-center">
                <ShoppingCart className="size-4 text-[#FF2D55]" />
              </div>
              <div className="min-w-0">
                <p className="text-[13px] font-semibold text-[#F4F4F5] truncate">
                  {current}
                </p>
                <p className="text-[11px] text-[#A1A1AA]/70">
                  {t("socialProofPopup.bought")}
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
