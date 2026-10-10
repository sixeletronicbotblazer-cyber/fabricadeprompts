"use client";

import { FadeIn } from "./FadeIn";

export function Footer() {
  return (
    <footer className="border-t border-[#23232a] py-7 pb-16 text-center text-[#767781] text-[11px]">
      <div className="px-6">
        <p>
          <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-white text-sm">Prompt</span>
          <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#FA2D62] text-sm">Vault</span>
          {" "}• Biblioteca de Prompts
        </p>
        <p className="mt-2">© {new Date().getFullYear()} PromptVault. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
