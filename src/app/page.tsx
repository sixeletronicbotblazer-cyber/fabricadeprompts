import { UrgencyBar } from "@/components/landing/UrgencyBar";
import { Hero } from "@/components/landing/Hero";
import { SocialProofSection } from "@/components/landing/SocialProofSection";
import { ProofCarousel } from "@/components/landing/ProofCarousel";
import { DorSection } from "@/components/landing/DorSection";
import { MechanismSection } from "@/components/landing/MechanismSection";
import { PremiumBonusSection } from "@/components/landing/PremiumBonusSection";
import { ReferenceExamples } from "@/components/landing/ReferenceExamples";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { GuaranteeSection } from "@/components/landing/GuaranteeSection";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { SocialProof } from "@/components/landing/SocialProof";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <UrgencyBar />
      <main className="flex-1">
        <Hero />
        <SocialProofSection />
        <ProofCarousel />
        <DorSection />
        <MechanismSection />
        <PremiumBonusSection />
        <ReferenceExamples />
        <ComparisonSection />
        <PricingSection />
        <GuaranteeSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <SocialProof />
    </div>
  );
}
