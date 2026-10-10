"use client";

import { useState, useCallback } from "react";
import { I18nProvider } from "@/lib/i18n/provider";
import type { Locale } from "@/lib/i18n/translations";
import { UrgencyBar } from "@/components/landing/UrgencyBar";
import { Hero } from "@/components/landing/Hero";
import { FormatosVirais } from "@/components/landing/FormatosVirais";
import { PremiumBonusSection } from "@/components/landing/PremiumBonusSection";
import { SocialProofSection } from "@/components/landing/SocialProofSection";
import { WhatsAppProofCarousel } from "@/components/landing/WhatsAppProofCarousel";
import { DorSection } from "@/components/landing/DorSection";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { ResultsProofsSection } from "@/components/landing/ResultsProofsSection";
import { ObjectionCards } from "@/components/landing/ObjectionCards";
import { PricingSection } from "@/components/landing/PricingSection";
import { GuaranteeSection } from "@/components/landing/GuaranteeSection";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { SocialProof } from "@/components/landing/SocialProof";
import { MobileStickyCTA } from "@/components/landing/MobileStickyCTA";
import { MensalUpgradePopup } from "@/components/landing/MensalUpgradePopup";
import { LanguageSelector } from "@/components/landing/LanguageSelector";

export default function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  // We unwrap params via React.use() inside the I18nProvider boundary
  return <LocalePageInner params={params} />;
}

function LocalePageInner({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = React.use(params);
  const locale = (["br", "en", "es"].includes(localeParam) ? localeParam : "br") as Locale;
  const [upgradeOpen, setUpgradeOpen] = useState(false);

  const handleMensalClick = useCallback(() => {
    setUpgradeOpen(true);
  }, []);

  const handleCloseUpgrade = useCallback(() => {
    setUpgradeOpen(false);
  }, []);

  return (
    <I18nProvider locale={locale}>
      <div className="min-h-screen flex flex-col">
        <LanguageSelector />
        <UrgencyBar />
        <main className="flex-1 pb-14 md:pb-0">
          <Hero />
          <FormatosVirais />
          <PremiumBonusSection />
          <SocialProofSection />
          <WhatsAppProofCarousel />
          <DorSection />
          <ComparisonSection />
          <ObjectionCards />
          <ResultsProofsSection />
          <PricingSection onMensalClick={handleMensalClick} />
          <GuaranteeSection />
          <FAQ />
          <FinalCTA />
        </main>
        <MobileStickyCTA />
        <Footer />
        <SocialProof />
        <MensalUpgradePopup open={upgradeOpen} onClose={handleCloseUpgrade} />
      </div>
    </I18nProvider>
  );
}

import React from "react";
