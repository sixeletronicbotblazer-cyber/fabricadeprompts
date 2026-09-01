"use client";

export function UrgencyBar() {
  return (
    <>
      <div className="bg-[#09090D] border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 py-2 text-center">
          <p className="text-[11px] sm:text-xs font-medium text-[#A7A7B2]">
            Oferta de entrada liberada hoje • {" "}
            <span className="hidden sm:inline">
              acesso imediato a partir de{" "}
              <span className="text-[#EC4899] font-extrabold">R$17,90</span>
            </span>
            <span className="sm:hidden">
              acesso imediato
            </span>
          </p>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-[#7C3AED]/20 to-transparent" />
    </>
  );
}
