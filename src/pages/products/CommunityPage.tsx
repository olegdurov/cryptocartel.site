import { ArrowRight, Lock, Unlock, TrendingUp, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Сообщество и аналитика
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Команда анализирует десятки и сотни новостей, фильтрует их и выдает только сухие факты и подсказки, как на этом можно заработать
            </p>
          </div>

          {/* Основной контент */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Unlock className="w-8 h-8 text-green-500" />
                <h2 className="text-2xl font-bold text-white">Открытое сообщество</h2>
              </div>
              
              <div className="space-y-4 mb-6">
                <p className="text-zinc-300">
                  Бесплатный доступ к новостям и базовой аналитике крипторынка
                </p>
                <ul className="space-y-2 text-zinc-400">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Ежедневные новости из мира криптовалют
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Базовая техническая аналитика
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Общение с единомышленниками
                  </li>
                </ul>
              </div>

              <a 
                href="https://t.me/cryptocartel_public"
                className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors text-white"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Присоединиться к открытому сообществу</span>
              </a>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border border-orange-500/30 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Lock className="w-8 h-8 text-orange-500" />
                <h2 className="text-2xl font-bold text-white">Закрытый клуб</h2>
              </div>
              
              <div className="space-y-4 mb-6">
                <p className="text-zinc-300">
                  Эксклюзивная аналитика, инсайды и прогнозы от профессиональных трейдеров
                </p>
                <ul className="space-y-2 text-zinc-400">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">★</span>
                    Экспертное прогнозирование актуальных монет
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">★</span>
                    Сигналы о своевременной покупке/продаже
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">★</span>
                    Инсайды из первых рук
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">★</span>
                    Закрытый чат для общения с экспертами
                  </li>
                </ul>
              </div>

              <a 
                href="https://t.me/cryptocartel_bot"
                className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 rounded-lg transition-all text-white"
              >
                <TrendingUp className="w-5 h-5" />
                <span>Присоединиться к закрытому клубу</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Дополнительная информация */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Что вы получите</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Аналитика по токенам</h3>
                <p className="text-zinc-400">
                  Глубокий анализ актуальных токенов с прогнозами роста и рекомендациями по входу в позицию
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Новости и инсайды</h3>
                <p className="text-zinc-400">
                  Актуальная информация из мира крипты, которая поможет вам принимать правильные решения
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Сигналы для трейдинга</h3>
                <p className="text-zinc-400">
                  Своевременные уведомления о возможностях для входа в прибыльные сделки
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Общение с профессионалами</h3>
                <p className="text-zinc-400">
                  Закрытый чат с опытными трейдерами, где можно обсудить стратегии и получить консультацию
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
