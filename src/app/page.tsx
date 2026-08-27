import { UrgencyBar } from "@/components/landing/UrgencyBar";
import { Hero } from "@/components/landing/Hero";
import { YouReceiveBlock } from "@/components/landing/YouReceiveBlock";
import { SocialProofSection } from "@/components/landing/SocialProofSection";
import { ReferenceExamples } from "@/components/landing/ReferenceExamples";
import { PremiumBonusSection } from "@/components/landing/PremiumBonusSection";
import { InsideAppVSL } from "@/components/landing/InsideAppVSL";
import { ObjectionCards } from "@/components/landing/ObjectionCards";
import { PricingSection } from "@/components/landing/PricingSection";
import { GuaranteeSection } from "@/components/landing/GuaranteeSection";
import { FAQ } from "@/components/landing/FAQ";
import { ProofCarousel } from "@/components/landing/ProofCarousel";
import { DorSection } from "@/components/landing/DorSection";
import { MechanismSection } from "@/components/landing/MechanismSection";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { SocialProof } from "@/components/landing/SocialProof";
import { MobileStickyCTA } from "@/components/landing/MobileStickyCTA";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <UrgencyBar />
      <main className="flex-1 pb-16 md:pb-0">
        <Hero />\n        <YouReceiveBlock />
        <SocialProofSection />
        <ReferenceExamples />
        <PremiumBonusSection />
        <InsideAppVSL />
        <ObjectionCards />
        <PricingSection />
        <GuaranteeSection />
        <FAQ />
        <ProofCarousel />
        <DorSection />
        <MechanismSection />
        <ComparisonSection />
        <FinalCTA />
      </main>
      <MobileStickyCTA />
      <Footer />
      <SocialProof />
    </div>
  );
}