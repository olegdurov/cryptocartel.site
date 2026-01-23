import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function APIBotsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">API торговые боты</h1>
          <p className="text-xl text-zinc-400 mb-12">
            Подключайте настроенный и протестированный алгоритм к своему балансу Binance или Bybit по API ключу
          </p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-8">
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6 mb-6">
              <p className="text-orange-400 font-semibold">
                ⚠️ Внимание: Вы не передаете средства платформе или третьим лицам, все средства остаются на вашем балансе в Binance/Bybit.
              </p>
            </div>
            <p className="text-zinc-300">
              Наши торговые боты работают через API-ключи, которые вы можете создать в несколько кликов в настройках на бирже.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
