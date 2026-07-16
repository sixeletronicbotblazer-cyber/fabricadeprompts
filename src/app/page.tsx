import { Hero } from "@/components/landing/Hero";
import { ModesSection } from "@/components/landing/ModesSection";
import { ResultsShowcase } from "@/components/landing/ResultsShowcase";
import { ModeExamples } from "@/components/landing/ModeExamples";
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
      <main className="flex-1">
        <Hero />
        <ModesSection />
        <ResultsShowcase />
        <ModeExamples />
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