import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/60 backdrop-blur-xl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold font-display text-xl">C</span>
              </div>
              <span className="text-xl font-bold font-display tracking-tight text-white">Coby AI</span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#what-we-do" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">What We Do</a>
            <a href="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Why Us</a>
            <a href="#our-insights" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Our Insights</a>
            <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Contact</a>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              Connect Wallet
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-background border-b border-white/10 p-4 md:hidden flex flex-col gap-4"
          >
            <a href="#what-we-do" className="text-sm font-medium text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>What We Do</a>
            <a href="#features" className="text-sm font-medium text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Why Us</a>
            <a href="#our-insights" className="text-sm font-medium text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Our Insights</a>
            <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Contact</a>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">
              Connect Wallet
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
