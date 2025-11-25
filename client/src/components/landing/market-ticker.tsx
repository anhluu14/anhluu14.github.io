import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const coins = [
  { symbol: "BTC", name: "Bitcoin", price: "$96,234.52", change: "+2.4%" },
  { symbol: "ETH", name: "Ethereum", price: "$3,421.12", change: "+1.8%" },
  { symbol: "SOL", name: "Solana", price: "$142.50", change: "+5.2%" },
  { symbol: "XRP", name: "Ripple", price: "$1.12", change: "-0.5%" },
  { symbol: "ADA", name: "Cardano", price: "$0.58", change: "+0.9%" },
  { symbol: "DOT", name: "Polkadot", price: "$7.24", change: "+3.1%" },
  { symbol: "DOGE", name: "Dogecoin", price: "$0.12", change: "+8.4%" },
  { symbol: "AVAX", name: "Avalanche", price: "$35.67", change: "+4.2%" },
  { symbol: "LINK", name: "Chainlink", price: "$18.90", change: "+1.1%" },
];

export function MarketTicker() {
  return (
    <div className="w-full bg-black/40 border-y border-white/5 backdrop-blur-sm py-3 overflow-hidden flex">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...coins, ...coins, ...coins].map((coin, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="font-bold text-white">{coin.symbol}</span>
            <span className="text-gray-400 text-sm">{coin.price}</span>
            <span className={`text-sm font-medium ${coin.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
              {coin.change}
            </span>
            <div className="w-px h-4 bg-white/10 mx-2" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
