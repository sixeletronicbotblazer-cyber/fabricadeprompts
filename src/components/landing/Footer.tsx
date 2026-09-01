export function Footer() {
  return (
    <footer className="bg-[#09090D] border-t border-white/[0.06] py-8 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs text-[#A7A7B2]/40 mb-3">
          TikTok Shop Motion Prompts | Guia pratico de criacao UGC com IA.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a href="#" className="text-xs text-[#A7A7B2]/40 hover:text-[#A7A7B2]/70 transition-colors">
            Termos de uso
          </a>
          <span className="text-white/10">•</span>
          <a href="#" className="text-xs text-[#A7A7B2]/40 hover:text-[#A7A7B2]/70 transition-colors">
            Politica de privacidade
          </a>
          <span className="text-white/10">•</span>
          <a href="#" className="text-xs text-[#A7A7B2]/40 hover:text-[#A7A7B2]/70 transition-colors">
            Suporte
          </a>
        </div>
      </div>
    </footer>
  );
}
