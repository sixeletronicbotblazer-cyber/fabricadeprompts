import { Hero } from "@/components/landing/Hero";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { InsideProduct } from "@/components/landing/InsideProduct";
import { AudienceSection } from "@/components/landing/AudienceSection";
import { CategoryExamples } from "@/components/landing/CategoryExamples";
import { OfferBox } from "@/components/landing/OfferBox";
import { BonusSection } from "@/components/landing/BonusSection";
import { GuaranteeSection } from "@/components/landing/GuaranteeSection";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <InsideProduct />
        <CategoryExamples />
        <AudienceSection />
        <OfferBox />
        <BonusSection />
        <GuaranteeSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}