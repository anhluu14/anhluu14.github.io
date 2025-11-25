import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import featureImage from "@assets/generated_images/premium_3d_gold_cryptocurrency_coin_floating_with_digital_particles..png";

export function Insight() {
  return (
    <section id="insight" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-3xl p-8 md:p-12 border border-white/10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
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
            <Button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-6 px-8 rounded-full transition-colors shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)] text-lg">
              Start Free Trial
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
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
            
            {/* Coin image behind/around the card or just floating */}
            <img 
              src={featureImage} 
              alt="Gold Coin" 
              className="absolute -top-10 -right-10 w-32 md:w-40 animate-float opacity-50 md:opacity-100 pointer-events-none" 
              style={{ animation: 'float 6s ease-in-out infinite' }}
            />
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
}
