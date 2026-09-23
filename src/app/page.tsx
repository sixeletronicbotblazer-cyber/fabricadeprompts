"use client";

import { useState, useCallback } from "react";
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

export default function Home() {
  const [upgradeOpen, setUpgradeOpen] = useState(false);

  const handleMensalClick = useCallback(() => {
    setUpgradeOpen(true);
  }, []);

  const handleCloseUpgrade = useCallback(() => {
    setUpgradeOpen(false);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
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
  );
}
