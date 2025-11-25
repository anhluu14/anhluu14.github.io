import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Radar, Telescope, BrainCircuit, TrendingUp, Bell, Target } from "lucide-react";

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
      </div>
    </section>
  );
}
