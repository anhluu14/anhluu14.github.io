import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shield, Brain, BarChart3 } from "lucide-react";

const features = [
  {
    number: "01",
    title: "Real-Time Whale Detection",
    description: "Monitor millions of wallets and spot large accumulations the moment they happen. Never miss a smart money move again.",
    icon: BarChart3,
    color: "from-cyan-500 to-blue-500"
  },
  {
    number: "02",
    title: "AI-Powered Pattern Recognition",
    description: "Our advanced AI identifies profitable trading patterns by analyzing on-chain behavior of top-performing wallets.",
    icon: Brain,
    color: "from-purple-500 to-pink-500"
  },
  {
    number: "03",
    title: "Enterprise-Grade Security",
    description: "Military-grade encryption protects your wallet connections and trading data. Your funds, your control.",
    icon: Shield,
    color: "from-cyan-400 to-teal-500"
  }
];

export function KeyFeatures() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white leading-tight">
            Everything you need to <span className="text-gradient-primary">find winners early</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Powerful intelligence designed to decode the blockchain and give you an edge
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-all hover:-translate-y-2 group relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${feature.color} opacity-10 blur-2xl`} />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 text-white font-display font-bold text-2xl`}>
                    {feature.number}
                  </div>

                  <div className="mb-4 h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center text-cyan-400 group-hover:text-white transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-display">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
