import { Hero } from "@/components/landing/Hero";
import { ResultsShowcase } from "@/components/landing/ResultsShowcase";
import { InsideProduct } from "@/components/landing/InsideProduct";
import { PricingSection } from "@/components/landing/PricingSection";
import { GuaranteeSection } from "@/components/landing/GuaranteeSection";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Hero />
        <ResultsShowcase />
        <InsideProduct />
        <PricingSection />
        <GuaranteeSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}