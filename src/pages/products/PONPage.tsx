import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PONPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Pablo Open Network (PON)</h1>
            <p className="text-xl text-zinc-400 mb-8">
              Присоединяйтесь к росту нашего токена и почувствуйте успех от инвестиций
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border border-orange-500/30 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Блокчейн для бизнеса и простых людей</h2>
            <ul className="space-y-4 text-zinc-300 text-lg">
              <li>✓ Историю транзакций нельзя изменить</li>
              <li>✓ Возможность создать собственный коин</li>
              <li>✓ Возможность токенизировать свой проект на Business Hub</li>
              <li>✓ Смарт-контракты и цифровые договора в Business Hub</li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <p className="text-zinc-300 mb-6">
              Pablo Open Network объединяет преимущества блокчейна как базы данных истории транзакций, и простоту работы с фиатными деньгами. 
              PON служит для оплаты товаров и услуг в нашем маркетплейсе и CC Business Hub.
            </p>
            <p className="text-zinc-300 mb-8">
              Стоимость актива не регулируется командой, но запрограммирована чёткой формулой, учитывающей активность коммюнити и показатели роста самого проекта.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all">
                Получи бесплатно 20 PONCoin!
              </button>
              <a href="#" className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg font-semibold transition-colors text-center">
                White Paper PON
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
