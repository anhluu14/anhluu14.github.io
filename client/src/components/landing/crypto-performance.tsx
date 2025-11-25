import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const cryptoData = [
  { symbol: "BTC", name: "Bitcoin", icon: "₿", return: "+245%", whaleReturn: "+1,245%", outperformance: "+1,000%", color: "bg-orange-500" },
  { symbol: "ETH", name: "Ethereum", icon: "Ξ", return: "+189%", whaleReturn: "+892%", outperformance: "+703%", color: "bg-blue-500" },
  { symbol: "SOL", name: "Solana", icon: "◎", return: "+324%", whaleReturn: "+1,876%", outperformance: "+1,552%", color: "bg-purple-500" },
  { symbol: "PEPE", name: "Pepe", icon: "🐸", return: "+412%", whaleReturn: "+4,231%", outperformance: "+3,819%", color: "bg-green-500" },
  { symbol: "DOGE", name: "Dogecoin", icon: "🐕", return: "+156%", whaleReturn: "+623%", outperformance: "+467%", color: "bg-yellow-500" },
  { symbol: "ARB", name: "Arbitrum", icon: "A", return: "+89%", whaleReturn: "+567%", outperformance: "+478%", color: "bg-blue-600" },
];

export function CryptoPerformance() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Track whale wallets finding <span className="text-gradient-primary">100x+ gems</span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-400 text-lg">
                Coby Premium members follow our most successful whale wallets and consistently outperform the market. Last year, smart money picked winners that went up 1,000%+ while the broader market gained 30%.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1 flex-shrink-0">
                    <TrendingUp className="h-3 w-3 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">
                    <span className="font-bold text-white">Real whale data</span> - Follow the same wallets that are making millions
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1 flex-shrink-0">
                    <TrendingUp className="h-3 w-3 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">
                    <span className="font-bold text-white">3 new signals daily</span> - Get fresh whale moves every morning, every week
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1 flex-shrink-0">
                    <TrendingUp className="h-3 w-3 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">
                    <span className="font-bold text-white">Verified track records</span> - Filter wallets by historical win rate and P&L
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Table */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-2 font-semibold text-gray-400 text-xs tracking-wider">ASSET</th>
                      <th className="text-right py-3 px-2 font-semibold text-gray-400 text-xs tracking-wider">MARKET RETURN</th>
                      <th className="text-right py-3 px-2 font-semibold text-gray-400 text-xs tracking-wider">WHALE RETURN</th>
                      <th className="text-right py-3 px-2 font-semibold text-gray-400 text-xs tracking-wider">OUTPERFORMANCE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cryptoData.map((crypto, index) => (
                      <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="py-4 px-2">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full ${crypto.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                              {crypto.icon}
                            </div>
                            <div className="flex flex-col">
                              <span className="font-bold text-white">{crypto.symbol}</span>
                              <span className="text-xs text-gray-500">{crypto.name}</span>
                            </div>
                          </div>
                        </td>
                        <td className="text-right py-4 px-2">
                          <span className="text-gray-400">{crypto.return}</span>
                        </td>
                        <td className="text-right py-4 px-2">
                          <span className="text-green-400 font-semibold">{crypto.whaleReturn}</span>
                        </td>
                        <td className="text-right py-4 px-2">
                          <span className="text-cyan-400 font-semibold">{crypto.outperformance}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/10 text-center text-xs text-gray-500">
                *Returns based on whale wallet entry prices vs market average entry. Historical data.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
