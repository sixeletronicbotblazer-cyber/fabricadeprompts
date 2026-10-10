"use client";

import { TopBar } from "@/components/landing/TopBar";
import { Hero } from "@/components/landing/Hero";
import { MechanismSteps } from "@/components/landing/MechanismSteps";
import { LibraryPreview } from "@/components/landing/LibraryPreview";
import { WhatsAppProofCarousel } from "@/components/landing/WhatsAppProofCarousel";
import { PricingSection } from "@/components/landing/PricingSection";
import { GuaranteeSection } from "@/components/landing/GuaranteeSection";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { MobileStickyCTA } from "@/components/landing/MobileStickyCTA";
import { SocialProof } from "@/components/landing/SocialProof";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <main className="flex-1 pb-14 md:pb-0">
        <Hero />
        <MechanismSteps />
        <LibraryPreview />
        <WhatsAppProofCarousel />
        <PricingSection />
        <GuaranteeSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
      <SocialProof />
    </div>
  );
}
