import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MarketPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">CC Market</h1>
          <p className="text-xl text-zinc-400 mb-12">
            Маркетплейс товаров и услуг с оплатой в криптовалюте PON
          </p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <p className="text-zinc-300">
              Покупайте и продавайте товары и услуги напрямую, оплачивая золотыми монетами с логотипом CryptoCartel. Свободная торговля без посредников.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
