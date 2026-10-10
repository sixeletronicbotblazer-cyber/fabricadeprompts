"use client";

import { useCallback } from "react";
import { useI18n } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/translations";

const localeLabels: Record<Locale, string> = {
  br: "PT",
  en: "EN",
  es: "ES",
};

export function LanguageSelector() {
  const { locale } = useI18n();

  const handleSwitch = useCallback((newLocale: Locale) => {
    // Set preferredLocale cookie
    document.cookie = `preferredLocale=${newLocale};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`;
    // Navigate to the new locale
    const path = window.location.pathname.replace(/^\/(br|en|es)/, `/${newLocale}`);
    window.location.href = path + window.location.search;
  }, []);

  // Hidden for BR — only show on international pages
  if (locale === "br") return null;

  const otherLocales: Locale[] = ["br", "en", "es"].filter(
    (l) => l !== locale
  ) as Locale[];

  return (
    <div className="fixed top-3 right-3 z-50 flex items-center gap-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-1.5 py-1">
      <span className="text-[10px] font-bold text-white/50 uppercase px-1.5">
        {localeLabels[locale]}
      </span>
      <div className="w-px h-3 bg-white/10" />
      {otherLocales.map((l) => (
        <button
          key={l}
          onClick={() => handleSwitch(l)}
          className="text-[10px] font-bold text-white/70 hover:text-white uppercase px-1.5 py-0.5 rounded-full hover:bg-white/10 transition-all"
        >
          {localeLabels[l]}
        </button>
      ))}
    </div>
  );
}
