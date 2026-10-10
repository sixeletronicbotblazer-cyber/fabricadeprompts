import type { Locale } from "./translations";

export interface PricingConfig {
  currency: string;
  currencySymbol: string;
  /** Vitalício (lifetime) plan */
  vitalicioCheckout: string;
  vitalicioPrice: string;
  vitalicioMain: string;
  vitalicioCents: string;
  vitalicioFromPrice: string;
  vitalicioDiscount: string;
  /** Mensal (monthly) plan */
  mensalCheckout: string;
  mensalPrice: string;
  mensalMain: string;
  mensalCents: string;
  /** Recovery upgrade */
  recoveryCheckout: string;
  recoveryPrice: string;
  recoveryMain: string;
  recoveryCents: string;
  /** Mensal original for upgrade popup */
  mensalOriginalCheckout: string;
}

const pricingData: Record<Locale, PricingConfig> = {
  br: {
    currency: "BRL",
    currencySymbol: "R$",
    vitalicioCheckout: "https://go.perfectpay.com.br/PPU38CQFUC3",
    vitalicioPrice: "R$47,90",
    vitalicioMain: "47",
    vitalicioCents: ",90",
    vitalicioFromPrice: "R$97,00",
    vitalicioDiscount: "-49%",
    mensalCheckout: "https://go.perfectpay.com.br/PPU38CQGR43",
    mensalPrice: "R$27,90/mês",
    mensalMain: "27",
    mensalCents: ",90",
    recoveryCheckout: "https://go.perfectpay.com.br/PPU38CQFSJH",
    recoveryPrice: "R$37,90",
    recoveryMain: "37",
    recoveryCents: ",90",
    mensalOriginalCheckout: "https://go.perfectpay.com.br/PPU38CQGR43",
  },
  en: {
    currency: "USD",
    currencySymbol: "$",
    vitalicioCheckout: "#CHECKOUT_USD_LIFETIME_990",
    vitalicioPrice: "$9.90",
    vitalicioMain: "9",
    vitalicioCents: ".90",
    vitalicioFromPrice: "$19.90",
    vitalicioDiscount: "-50%",
    mensalCheckout: "#CHECKOUT_USD_MONTHLY_590",
    mensalPrice: "$5.90/month",
    mensalMain: "5",
    mensalCents: ".90",
    recoveryCheckout: "#CHECKOUT_USD_LIFETIME_790",
    recoveryPrice: "$7.90",
    recoveryMain: "7",
    recoveryCents: ".90",
    mensalOriginalCheckout: "#CHECKOUT_USD_MONTHLY_590",
  },
  es: {
    currency: "USD",
    currencySymbol: "US$",
    vitalicioCheckout: "#CHECKOUT_USD_LIFETIME_990",
    vitalicioPrice: "US$9,90",
    vitalicioMain: "9",
    vitalicioCents: ",90",
    vitalicioFromPrice: "US$19,90",
    vitalicioDiscount: "-50%",
    mensalCheckout: "#CHECKOUT_USD_MONTHLY_590",
    mensalPrice: "US$5,90/mes",
    mensalMain: "5",
    mensalCents: ",90",
    recoveryCheckout: "#CHECKOUT_USD_LIFETIME_790",
    recoveryPrice: "US$7,90",
    recoveryMain: "7",
    recoveryCents: ",90",
    mensalOriginalCheckout: "#CHECKOUT_USD_MONTHLY_590",
  },
};

export function getPricing(locale: Locale): PricingConfig {
  return pricingData[locale];
}
