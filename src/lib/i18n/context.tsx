"use client";

import { createContext, useContext } from "react";
import type { Locale } from "./translations";
import { getTranslation } from "./translations";
import type { PricingConfig } from "./pricing";
import { getPricing } from "./pricing";

interface I18nContextValue {
  locale: Locale;
  t: (key: string) => string;
  isBR: boolean;
  isIntl: boolean;
  currency: string;
  pricing: PricingConfig;
}

export const I18nContext = createContext<I18nContextValue>({
  locale: "br",
  t: (k: string) => k,
  isBR: true,
  isIntl: false,
  currency: "BRL",
  pricing: getPricing("br"),
});

export const useI18n = () => useContext(I18nContext);

export function createI18nValue(locale: Locale): I18nContextValue {
  const p = getPricing(locale);
  return {
    locale,
    t: (key: string) => getTranslation(locale, key),
    isBR: locale === "br",
    isIntl: locale !== "br",
    currency: p.currency,
    pricing: p,
  };
}
