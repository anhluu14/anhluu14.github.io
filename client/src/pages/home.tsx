import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { MarketTicker } from "@/components/landing/market-ticker";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <MarketTicker />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
