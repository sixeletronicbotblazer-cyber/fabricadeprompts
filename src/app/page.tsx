import { UrgencyBar } from "@/components/landing/UrgencyBar";
import { Hero } from "@/components/landing/Hero";
import { SocialProofSection } from "@/components/landing/SocialProofSection";
import { ProofCarousel } from "@/components/landing/ProofCarousel";
import { DorSection } from "@/components/landing/DorSection";
import { MechanismSection } from "@/components/landing/MechanismSection";
import { DayToDaySection } from "@/components/landing/DayToDaySection";
import { ReferenceExamples } from "@/components/landing/ReferenceExamples";
import { PlatformModulesSection } from "@/components/landing/PlatformModulesSection";
import { PremiumBonusSection } from "@/components/landing/PremiumBonusSection";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { GuaranteeSection } from "@/components/landing/GuaranteeSection";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { SocialProof } from "@/components/landing/SocialProof";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col grain-overlay">
      <UrgencyBar />
      <main className="flex-1">
        <Hero />
        <div className="section-divider" />
        <SocialProofSection />
        <ProofCarousel />
        <div className="section-divider" />
        <DorSection />
        <div className="section-divider" />
        <MechanismSection />
        <div className="section-divider" />
        <DayToDaySection />
        <ReferenceExamples />
        <div className="section-divider" />
        <PlatformModulesSection />
        <div className="section-divider" />
        <PremiumBonusSection />
        <div className="section-divider" />
        <ComparisonSection />
        <div className="section-divider" />
        <PricingSection />
        <div className="section-divider" />
        <GuaranteeSection />
        <div className="section-divider" />
        <FAQ />
        <div className="section-divider" />
        <FinalCTA />
      </main>
      <Footer />
      <SocialProof />
    </div>
  );
}
