import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const signals = [
  { type: "buy", whale: "0x7a...492", amount: "$1.2M", token: "ETH", time: "2m ago" },
  { type: "sell", whale: "0x3b...11a", amount: "$450K", token: "SOL", time: "5m ago" },
  { type: "accumulate", whale: "Smart Money", amount: "$2.8M", token: "LINK", time: "12m ago" },
  { type: "buy", whale: "0x9c...882", amount: "$5.1M", token: "BTC", time: "15m ago" },
  { type: "alert", whale: "New Wallet", amount: "$800K", token: "PEPE", time: "22m ago" },
  { type: "buy", whale: "Fund A", amount: "$3.2M", token: "ARB", time: "28m ago" },
];

export function MarketTicker() {
  return (
    <div className="w-full bg-black/40 border-y border-white/5 backdrop-blur-sm py-3 overflow-hidden flex relative z-20">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="relative z-30 flex shrink-0 items-center px-4 border-r border-white/10 bg-background shadow-[5px_0_20px_0px_rgba(0,0,0,0.8)]">
        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse mr-2" />
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider whitespace-nowrap">Live Whale Feed</span>
      </div>

      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {[...signals, ...signals, ...signals].map((signal, i) => (
          <div key={i} className="flex items-center gap-3 text-sm">
            <span className={`font-bold ${signal.type === 'buy' || signal.type === 'accumulate' ? 'text-green-400' : signal.type === 'sell' ? 'text-red-400' : 'text-yellow-400'}`}>
              {signal.type.toUpperCase()}
            </span>
            <span className="text-gray-300">{signal.token}</span>
            <span className="text-white font-mono">{signal.amount}</span>
            <span className="text-gray-500 text-xs">by {signal.whale}</span>
            <div className="w-px h-3 bg-white/10 mx-2" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
