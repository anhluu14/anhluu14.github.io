import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import whatWeDoImage from "@assets/generated_images/ai_filtering_blockchain_data_stream_into_golden_signals..png";

export function WhatWeDo() {
  return (
    <section className="py-24 relative overflow-hidden bg-black/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-cyan-500 font-bold text-sm tracking-wider uppercase mb-2 block">What We Do</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              We decode the blockchain to find <span className="text-gradient-primary">hidden opportunities.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              The crypto market is noisy. Coby AI acts as your signal filter. We track over 15 million wallets in real-time, identifying the "Smart Money" that consistently outperforms the market, so you can copy their trades instantly.
            </p>
            
            <div className="space-y-6 mb-10">
              {[
                { title: "Whale Tracking", desc: "We monitor large wallet movements to spot accumulation phases before the pump." },
                { title: "Pattern Recognition", desc: "Our AI identifies repetitive success patterns in wallet behaviors." },
                { title: "Instant Execution", desc: "Get alerted the second a high-conviction trade is made on-chain." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 h-6 w-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-cyan-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 h-12 text-base font-bold">
              Learn More About Our Tech <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-cyan-500/20 rounded-3xl blur-3xl -z-10" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent z-10" />
              <img 
                src={whatWeDoImage} 
                alt="AI Blockchain Analysis" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay Stats */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-black/90 to-transparent">
                <div className="grid grid-cols-3 gap-4 text-center border-t border-white/10 pt-6">
                  <div>
                    <div className="text-2xl font-bold text-white font-display">24/7</div>
                    <div className="text-xs text-cyan-400 uppercase tracking-wider">Uptime</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white font-display">15M+</div>
                    <div className="text-xs text-cyan-400 uppercase tracking-wider">Wallets</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white font-display">0.05s</div>
                    <div className="text-xs text-cyan-400 uppercase tracking-wider">Latency</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
