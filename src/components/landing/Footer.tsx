"use client";

import { useI18n } from "@/lib/i18n/context";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-[#08080A] border-t border-[#2A2A2E]/50 py-8 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs text-[#A1A1AA]/40 mb-3">
          {t("footer.brand")}
        </p>
        <div className="flex items-center justify-center gap-4">
          <a href="#" className="text-xs text-[#A1A1AA]/40 hover:text-[#A1A1AA]/70 transition-colors">
            {t("footer.terms")}
          </a>
          <span className="text-white/10">•</span>
          <a href="#" className="text-xs text-[#A1A1AA]/40 hover:text-[#A1A1AA]/70 transition-colors">
            {t("footer.privacy")}
          </a>
          <span className="text-white/10">•</span>
          <a href="#" className="text-xs text-[#A1A1AA]/40 hover:text-[#A1A1AA]/70 transition-colors">
            {t("footer.support")}
          </a>
        </div>
      </div>
    </footer>
  );
}
