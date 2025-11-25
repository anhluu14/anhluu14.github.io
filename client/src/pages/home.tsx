import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { MarketTicker } from "@/components/landing/market-ticker";
import { Footer } from "@/components/landing/footer";
import { Contact } from "@/components/landing/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <MarketTicker />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
