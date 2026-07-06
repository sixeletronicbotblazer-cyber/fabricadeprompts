export function Footer() {
  return (
    <footer className="border-t border-border/60 py-8 px-4 mt-auto">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs text-foreground/50 mb-3">
          TikTok Shop Motion Prompts — Guia prático de criação UGC com IA.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a href="#" className="text-xs text-foreground/50 hover:text-foreground transition-colors">
            Termos de uso
          </a>
          <span className="text-border">•</span>
          <a href="#" className="text-xs text-foreground/50 hover:text-foreground transition-colors">
            Política de privacidade
          </a>
          <span className="text-border">•</span>
          <a href="#" className="text-xs text-foreground/50 hover:text-foreground transition-colors">
            Suporte
          </a>
        </div>
      </div>
    </footer>
  );
}