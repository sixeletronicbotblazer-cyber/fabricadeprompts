export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/[0.06] py-8 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs text-white/30 mb-3">
          TikTok Shop Motion Prompts — Guia prático de criação UGC com IA.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
            Termos de uso
          </a>
          <span className="text-white/10">•</span>
          <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
            Política de privacidade
          </a>
          <span className="text-white/10">•</span>
          <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
            Suporte
          </a>
        </div>
      </div>
    </footer>
  );
}