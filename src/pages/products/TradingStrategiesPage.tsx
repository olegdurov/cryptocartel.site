import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TradingStrategiesPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Торговые стратегии</h1>
          <p className="text-xl text-zinc-400 mb-12">
            Каждый желающий может приобрести копии торговых ботов с проверенными стратегиями и запустить их на своих мощностях или на серверах CryptoCartel.
          </p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <p className="text-zinc-300">
              Купив копию торгового бота по проверенной стратегии, вы получаете не только профит от сделок этой программы, но и весь исходный код и полное понимание внутренней механики работы ПО.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
