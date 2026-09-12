import { UrgencyBar } from "@/components/landing/UrgencyBar";
import { Hero } from "@/components/landing/Hero";
import { MicroChamada } from "@/components/landing/MicroChamada";
import { FormatosVirais } from "@/components/landing/FormatosVirais";
import { MiniDecisionBlock } from "@/components/landing/MiniDecisionBlock";
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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <UrgencyBar />
      <main className="flex-1 pb-14 md:pb-0">
        <Hero />
        <MicroChamada />
        <FormatosVirais />
        <MiniDecisionBlock />
        <PremiumBonusSection />
        <SocialProofSection />
        <WhatsAppProofCarousel />
        <DorSection />
        <ComparisonSection />
        <ObjectionCards />
        <ResultsProofsSection />
        <PricingSection />
        <GuaranteeSection />
        <FAQ />
        <FinalCTA />
      </main>
      <MobileStickyCTA />
      <Footer />
      <SocialProof />
    </div>
  );
}
