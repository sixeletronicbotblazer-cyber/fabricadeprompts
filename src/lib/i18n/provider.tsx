"use client";

import { useMemo } from "react";
import { I18nContext, createI18nValue } from "./context";
import type { Locale } from "./translations";

interface I18nProviderProps {
  locale: Locale;
  children: React.ReactNode;
}

export function I18nProvider({ locale, children }: I18nProviderProps) {
  const value = useMemo(() => createI18nValue(locale), [locale]);
  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}
