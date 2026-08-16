"use client";

export function UrgencyBar() {
  return (
    <div className="bg-gradient-to-r from-black via-[#0D0D0D] to-black border-b border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 py-2 text-center">
        <p className="text-[11px] sm:text-xs font-medium text-white/70">
          ⚡ Oferta de entrada liberada hoje • {" "}
          <span className="hidden sm:inline">
            acesso imediato a partir de{" "}
            <span className="text-[#25F4EE] font-bold">R$17,90</span>
          </span>
          <span className="sm:hidden">
            acesso imediato
          </span>
        </p>
      </div>
    </div>
  );
}
