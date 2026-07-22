import { UrgencyBar } from "@/components/landing/UrgencyBar";
import { Hero } from "@/components/landing/Hero";
import { SocialProofSection } from "@/components/landing/SocialProofSection";
import { ExampleCarousel } from "@/components/landing/ExampleCarousel";
import { ProofCarousel } from "@/components/landing/ProofCarousel";
import { CTAAfterProofs } from "@/components/landing/CTAAfterProofs";
import { MechanismSection } from "@/components/landing/MechanismSection";
import { WhatYouReceiveSection } from "@/components/landing/WhatYouReceiveSection";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { InsideProduct } from "@/components/landing/InsideProduct";
import { PricingSection } from "@/components/landing/PricingSection";
import { GuaranteeSection } from "@/components/landing/GuaranteeSection";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { SocialProof } from "@/components/landing/SocialProof";
import { EntryPopup } from "@/components/landing/EntryPopup";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <UrgencyBar />
      <main className="flex-1">
        <Hero />
        <SocialProofSection />
        <ExampleCarousel />
        <ProofCarousel />
        <CTAAfterProofs />
        <MechanismSection />
        <WhatYouReceiveSection />
        <ComparisonSection />
        <InsideProduct />
        <PricingSection />
        <GuaranteeSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <SocialProof />
      <EntryPopup />
    </div>
  );
}
