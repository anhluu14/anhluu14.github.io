import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";
import heroImage from "@assets/generated_images/abstract_3d_crypto_network_visualization_with_glowing_nodes_and_glass_shapes_in_dark_blue_and_purple..png";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-300">Live Trading Now Active</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
            The Future of <br />
            <span className="text-gradient-primary">Decentralized</span> Trading
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
            Experience lightning-fast swaps, deep liquidity, and military-grade security. Join over 2 million users trading on FinSavvy today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full text-base h-12 px-8 bg-white text-black hover:bg-gray-200 transition-transform hover:scale-105">
              Start Trading <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-base h-12 px-8 border-white/20 hover:bg-white/10 hover:text-white text-white">
              View Markets
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <h4 className="text-3xl font-bold text-white mb-1">$82B+</h4>
              <p className="text-sm text-gray-500">Quarterly Volume</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-white mb-1">2M+</h4>
              <p className="text-sm text-gray-500">Verified Users</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-white mb-1">&lt;50ms</h4>
              <p className="text-sm text-gray-500">Latency</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/20 glow-effect">
            <img 
              src={heroImage} 
              alt="Crypto Dashboard" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-duration-700 transition-transform duration-700"
            />
            
            {/* Floating Cards */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 p-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center gap-4 shadow-xl"
            >
              <div className="h-10 w-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                <span className="text-orange-500 font-bold">BTC</span>
              </div>
              <div>
                <p className="text-sm text-gray-400">Bitcoin</p>
                <p className="text-white font-bold">+5.24%</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-10 p-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center gap-4 shadow-xl"
            >
              <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <span className="text-blue-500 font-bold">ETH</span>
              </div>
              <div>
                <p className="text-sm text-gray-400">Ethereum</p>
                <p className="text-white font-bold">+3.12%</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
