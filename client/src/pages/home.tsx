import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { MarketTicker } from "@/components/landing/market-ticker";
import { Footer } from "@/components/landing/footer";
import { Contact } from "@/components/landing/contact";
import { WhatWeDo } from "@/components/landing/what-we-do";
import { Insight } from "@/components/landing/insight";
import { KeyFeatures } from "@/components/landing/key-features";
import { CryptoPerformance } from "@/components/landing/crypto-performance";

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <MarketTicker />
        <KeyFeatures />
        <WhatWeDo />
        <Features />
        <CryptoPerformance />
        <Insight />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
