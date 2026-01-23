import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BondPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">CC Bond</h1>
            <p className="text-xl text-zinc-400">
              Токен с привязкой к физическому золоту. Стабильность и защита от инфляции.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-48 h-48 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center text-6xl font-bold text-white shadow-2xl shadow-amber-500/50"
            >
              CC
            </motion.div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <p className="text-zinc-300 mb-6">
              CCBond - это криптовалюта, привязанная к стоимости физического золота. Каждый токен обеспечен реальным золотом, что гарантирует его стабильность.
            </p>
            <p className="text-zinc-300">
              Запуск bonding curves токена на нашем блокчейне PON запланирован на март 2026 года.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
