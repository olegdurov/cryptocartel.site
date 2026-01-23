import { Link } from 'react-router-dom';
import { Shield, TrendingUp, GraduationCap, Coins, Building2, Store, Gem } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const products = [
  {
    icon: Shield,
    title: 'Сообщество и аналитика',
    description: 'Команда анализирует десятки и сотни новостей, фильтрует их и выдает только сухие факты и подсказки, как на этом можно заработать.',
    href: '/product/community',
    color: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800'
  },
  {
    icon: TrendingUp,
    title: 'Торговые стратегии',
    description: 'Готовые проверенные стратегии с полным доступом к исходному коду. Запускайте на своих мощностях или серверах CryptoCartel.',
    href: '/product/strategies',
    color: 'from-green-500 to-emerald-500',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800'
  },
  {
    icon: Coins,
    title: 'API торговые боты',
    description: 'Подключайте настроенный и протестированный алгоритм к своему балансу Binance или Bybit по API ключу.',
    href: '/product/bots',
    color: 'from-purple-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800'
  },
  {
    icon: GraduationCap,
    title: 'Обучение и сопровождение',
    description: 'Образовательные программы для новичков и профессионалов с индивидуальным сопровождением от экспертов.',
    href: '/product/education',
    color: 'from-orange-500 to-red-500',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800'
  },
  {
    icon: Gem,
    title: 'Pablo Open Network (PON)',
    description: 'Собственный блокчейн для бизнеса и простых людей с расширенными инструментами и токенизацией проектов.',
    href: '/product/pon',
    color: 'from-yellow-500 to-orange-500',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800'
  },
  {
    icon: Building2,
    title: 'CC Business Hub',
    description: 'Площадка для предпринимателей и владельцев бизнеса с возможностью токенизации и выпуска собственных цифровых акций.',
    href: '/product/businesshub',
    color: 'from-indigo-500 to-purple-500',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800'
  },
  {
    icon: Store,
    title: 'CC Market',
    description: 'Маркетплейс товаров и услуг с оплатой в криптовалюте PON. Свободная торговля без посредников.',
    href: '/product/market',
    color: 'from-pink-500 to-rose-500',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800'
  },
  {
    icon: Coins,
    title: 'CC Bond',
    description: 'Токен с привязкой к физическому золоту. Стабильность и защита от инфляции.',
    href: '/product/bond',
    color: 'from-amber-500 to-yellow-500',
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800'
  },
];

export default function ProductsOverviewPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Наши проекты
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Полный набор профессиональных инструментов для заработка на криптовалюте
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, idx) => {
              const Icon = product.icon;
              return (
                <Link
                  key={idx}
                  to={product.href}
                  className="group relative overflow-hidden bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-orange-500/50 transition-all"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
                  </div>
                  
                  <div className="p-8">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-3">
                      {product.title}
                    </h2>
                    
                    <p className="text-zinc-400">
                      {product.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
