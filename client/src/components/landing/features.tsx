import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shield, Zap, Globe, Wallet, BarChart3, Lock } from "lucide-react";
import featureImage from "@assets/generated_images/premium_3d_gold_cryptocurrency_coin_floating_with_digital_particles..png";

const features = [
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Your funds are protected by industry-leading encryption and cold storage protocols."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Execute trades in milliseconds with our high-performance matching engine."
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Trade from anywhere in the world with 24/7 support in multiple languages."
  },
  {
    icon: Wallet,
    title: "Multi-Chain Support",
    description: "Seamlessly manage assets across Ethereum, Solana, BSC, and more."
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Professional charting tools and real-time market insights at your fingertips."
  },
  {
    icon: Lock,
    title: "Private & Secure",
    description: "We value your privacy. No intrusive data collection or tracking."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
            Why Choose <span className="text-gradient-primary">FinSavvy</span>?
          </h2>
          <p className="text-gray-400 text-lg">
            We combine cutting-edge technology with user-centric design to provide the best trading experience.
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
                <div className="absolute top-0 right-0 p-20 bg-primary/10 blur-3xl rounded-full -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/5 text-blue-400 group-hover:text-white group-hover:from-blue-500 group-hover:to-purple-600 transition-all">
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

        <div className="mt-24 grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-3xl p-8 md:p-12 border border-white/10">
          <div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Start your crypto journey with a <span className="text-yellow-400">Gold Standard</span> platform.
            </h3>
            <ul className="space-y-4 mb-8">
              {['Zero fees on your first deposit', 'Earn up to 12% APY on staking', 'Instant withdrawals to your bank'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <button className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors">
              Get Started Now
            </button>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-yellow-500/20 blur-[100px] rounded-full" />
            <img 
              src={featureImage} 
              alt="Gold Coin" 
              className="relative w-64 md:w-80 lg:w-96 animate-float" 
              style={{ animation: 'float 6s ease-in-out infinite' }}
            />
          </div>
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
