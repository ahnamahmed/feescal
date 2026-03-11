"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/hero";
import MarketplaceLogo from "@/components/marketplacelogo";

const Features = dynamic(() => import("@/components/features"), { ssr: false });
const ComparisonTable = dynamic(() => import("@/components/comparisontable"), { ssr: false });
const PricingCards = dynamic(() => import("@/components/pricingcards"), { ssr: false });
const FinalCTA = dynamic(() => import("@/components/finalcta"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <main>
        <Hero />
        <section id="marketplaces">
          <MarketplaceLogo />
        </section>
        <section id="features">
          <Features />
        </section>
        <ComparisonTable />
        <PricingCards />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
