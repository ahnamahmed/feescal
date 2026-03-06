"use client";

import Nav from "@/components/nav";
import Hero from "@/components/hero";
import MarketplaceLogo from "@/components/marketplacelogo";
import Features from "@/components/features";
import ComparisonTable from "@/components/comparisontable";
import PricingCards from "@/components/pricingcards";
import FinalCTA from "@/components/finalcta";
import Footer from "@/components/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Nav />
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
