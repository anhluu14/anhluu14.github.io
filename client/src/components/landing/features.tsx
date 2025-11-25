import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Radar, Telescope, BrainCircuit, TrendingUp, Bell, Target } from "lucide-react";
import featureImage from "@assets/generated_images/premium_3d_gold_cryptocurrency_coin_floating_with_digital_particles..png";

const features = [
  {
    icon: Telescope,
    title: "Whale Watcher",
    description: "Real-time alerts when major wallets move funds. Know before the market reacts."
  },
  {
    icon: BrainCircuit,
    title: "Smart Money AI",
    description: "Our AI analyzes on-chain patterns to identify high-win-rate wallets and copy their moves."
  },
  {
    icon: Radar,
    title: "Early Discovery",
    description: "Spot accumulating tokens before they trend on social media or major exchanges."
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description: "Get push notifications the second a whale opens a position in your watched tokens."
  },
  {
    icon: TrendingUp,
    title: "Profit Tracking",
    description: "Track the historical performance of any wallet to verify if they are truly 'Smart Money'."
  },
  {
    icon: Target,
    title: "Sniper Mode",
    description: "Automated entry tools to get you in at the same block as the whales."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
            Trade with an <span className="text-gradient-primary">Unfair Advantage</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Don't guess. Follow the money. Coby AI gives you the same data hedge funds use to dominate the market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-all hover:-translate-y-1 group overflow-hidden relative">
                <div className="absolute top-0 right-0 p-20 bg-cyan-500/10 blur-3xl rounded-full -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-white/5 text-cyan-400 group-hover:text-white group-hover:from-cyan-500 group-hover:to-blue-600 transition-all">
                  <feature.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 font-display">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-3xl p-8 md:p-12 border border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold uppercase tracking-wider mb-6">
              Premium Insight
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              "I found $PEPE 3 days before the pump using Coby AI."
            </h3>
            <p className="text-gray-400 mb-8 text-lg">
              Join 50,000+ traders who stopped gambling and started tracking the whales.
            </p>
            <ul className="space-y-4 mb-8">
              {['Real-time wallet notifications', 'Copy-trade top performers', 'Filter by chain and volume'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="h-6 w-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 px-8 rounded-full transition-colors shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)]">
              Start Free Trial
            </button>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full" />
            <div className="relative w-full max-w-md bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-white font-bold">Smart Money Alert</h4>
                <span className="text-xs text-gray-500">Just now</span>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-2xl">🐋</span>
                </div>
                <div>
                  <p className="text-white font-medium">Whale 0x7a...992</p>
                  <p className="text-green-400 text-sm">Bought $250K PEPE</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Entry Price</span>
                  <span className="text-white">$0.0000012</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Win Rate</span>
                  <span className="text-green-400 font-bold">82%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">P&L (30d)</span>
                  <span className="text-green-400 font-bold">+$1.2M</span>
                </div>
              </div>
              
              <button className="w-full mt-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm font-medium transition-colors">
                Copy Trade
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
