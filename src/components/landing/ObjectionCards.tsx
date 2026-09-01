"use client";

import { FadeIn } from "./FadeIn";
import { HelpCircle, GraduationCap, Zap } from "lucide-react";

const items = [
    {
        icon: HelpCircle,
        title: "Preciso aparecer?",
        text: "Nao. Voce pode criar videos com IA usando modelo, POV, produto na mao e selfie UGC.",
    },
    {
        icon: GraduationCap,
        title: "Serve para iniciante?",
        text: "Sim. Os prompts ja vem separados por estilo para copiar, adaptar e usar.",
    },
    {
        icon: Zap,
        title: "Recebo na hora?",
        text: "Sim. O acesso e liberado apos a compra.",
    },
];

export function ObjectionCards() {
    return (
        <section className="bg-[#08080A] py-6 sm:py-8 px-4">
            <div className="max-w-md mx-auto">
                <FadeIn>
                    <p className="text-xs font-bold text-white/30 uppercase tracking-wider text-center mb-4">
                        Antes de acessar, entenda:
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {items.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <FadeIn key={item.title} delay={i * 0.06}>
                                <div className="bg-[#111113] border border-[#2A2A2E]/60 rounded-2xl p-3.5 sm:p-4">
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <Icon className="size-3.5 text-[#FF2D55] shrink-0" />
                                        <h3 className="text-[12px] sm:text-[13px] font-bold text-[#F4F4F5] leading-tight">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-[11px] sm:text-xs text-[#A1A1AA]/65 leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}