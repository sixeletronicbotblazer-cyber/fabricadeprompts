"use client";

export function UrgencyBar() {
  return (
    <>
      <div className="bg-[#08080A] border-b border-[#2A2A2E]/50">
        <div className="max-w-5xl mx-auto px-4 py-2 text-center">
          <p className="text-[11px] sm:text-xs font-medium text-[#A1A1AA]">
            Oferta de entrada liberada hoje • {" "}
            <span className="hidden sm:inline">
              Pacote Especial por{" "}
              <span className="text-[#FF2D55] font-extrabold">R$49,90</span>
            </span>
            <span className="sm:hidden">
              Pacote Especial R$49,90
            </span>
          </p>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-[#FF2D55]/20 to-transparent" />
    </>
  );
}
