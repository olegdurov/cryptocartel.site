import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Shield, TrendingUp, GraduationCap, Coins, Building2, Store, Gem } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900 to-black" />
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center opacity-20"
      />
      
      {/* Плашка сверху */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute top-20 left-0 right-0 z-10 flex justify-center"
      >
        <div className="bg-gradient-to-r from-orange-500/10 to-red-600/10 border border-orange-500/20 px-6 py-2 rounded-full">
          <p className="text-orange-400 text-sm font-medium">Без верификаций и СМС</p>
        </div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          CryptoCartel
        </motion.h1>
        
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-3xl mx-auto"
        >
          Свободное крипто-сообщество и профессиональные инструменты
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            to="#register"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all group"
          >
            Регистрация в один клик
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Pablo персонаж */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring" }}
          className="mt-16"
        >
          <div className="relative w-64 h-64 mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=400" 
              alt="Pablo Escobar Cyborg"
              className="w-full h-full object-cover rounded-full border-4 border-orange-500 shadow-2xl shadow-orange-500/20"
            />
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-zinc-900 px-4 py-2 rounded-lg border border-orange-500/20">
              <p className="text-orange-400 text-sm font-medium">«Deньги правят миром»</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            О проекте CryptoCartel
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Независимая экосистема для истинных ценителей свободы и заработка на криптовалюте
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 md:p-12"
        >
          <p className="text-lg text-zinc-300 mb-6">
            Проект берет начало с простого новостного канала и разросся до целой платформы с 
            профессиональными инструментами и передовыми техническими решениями.
          </p>
          <p className="text-lg text-zinc-300 mb-8">
            Мы предоставляем готовые стратегии, торговые боты для работы через API-ключи, 
            образовательные программы и индивидуальное сопровождение, разработку новых алгоритмов 
            под ваши нужды и многое другое.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/product/community"
              className="flex items-center justify-center px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors text-white"
            >
              Перейти к сообществу
            </Link>
            <Link
              to="/product/bots"
              className="flex items-center justify-center px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors text-white"
            >
              Запустить торговый бот
            </Link>
            <Link
              to="/product/education"
              className="flex items-center justify-center px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors text-white"
            >
              Обучаться трейдингу
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    {
      icon: Shield,
      title: 'Сообщество и аналитика',
      description: 'Эксклюзивная аналитика, инсайды и прогнозы от профессионалов',
      href: '/product/community',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'Торговые стратегии',
      description: 'Проверенные торговые боты с открытым исходным кодом',
      href: '/product/strategies',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Coins,
      title: 'API торговые боты',
      description: 'Автоматизированная торговля через API ключи Binance/Bybit',
      href: '/product/bots',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: GraduationCap,
      title: 'Обучение',
      description: 'Курсы и индивидуальное сопровождение для новичков и профессионалов',
      href: '/product/education',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Gem,
      title: 'Pablo Open Network',
      description: 'Собственный блокчейн с расширенными возможностями',
      href: '/product/pon',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Building2,
      title: 'CC Business Hub',
      description: 'Площадка для предпринимателей и токенизации проектов',
      href: '/product/businesshub',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Store,
      title: 'CC Market',
      description: 'Маркетплейс товаров и услуг с оплатой в PON',
      href: '/product/market',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Coins,
      title: 'CC Bond',
      description: 'Токен с привязкой к физическому золоту',
      href: '/product/bond',
      color: 'from-amber-500 to-yellow-500'
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Наши проекты
          </h2>
          <p className="text-xl text-zinc-400">
            Полный набор инструментов для заработка на криптовалюте
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={idx}
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Link
                  to={product.href}
                  className="block h-full bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-xl p-6 hover:border-orange-500/50 transition-all group"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {product.title}
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    {product.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const milestones = [
    { date: 'Апрель 2024', text: 'Запуск новостного канала и аналитики' },
    { date: 'Февраль 2025', text: 'Запуск торговых ботов в тестовом режиме' },
    { date: 'Апрель 2025', text: 'Открытие регистрации и запуск API-ботов' },
    { date: 'Сентябрь 2025', text: 'Привлечение инвестиций для разработки блокчейна PON' },
    { date: 'Октябрь 2025', text: 'Добавление PON-баланса и запуск образовательного раздела' },
    { date: 'Январь 2026', text: 'Обновление интерфейса и редизайн сайта' },
    { date: 'Март 2026', text: 'Запуск CCBond с привязкой к физическому золоту' },
    { date: 'Май 2026', text: 'Запуск CC Business Hub' },
    { date: 'Октябрь 2026', text: 'Открытие исходного кода PON и вывод CCStock' },
  ];

  return (
    <section ref={ref} className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Дорожная карта Картеля
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-orange-500 to-red-600" />
          
          <div className="space-y-12">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ x: idx % 2 === 0 ? -50 : 50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex items-center ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-5/12 ${idx % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                  <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
                    <div className="text-orange-400 font-semibold mb-2">
                      {milestone.date}
                    </div>
                    <p className="text-zinc-300">
                      {milestone.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center text-zinc-400 mt-16 text-lg"
        >
          и так далее... <span className="text-orange-400">следите, будет интересно!</span>
        </motion.p>
      </div>
    </section>
  );
}

function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const team = [
    { name: 'Никита Игнатов', role: 'Основатель и идейный вдохновитель, трейдер' },
    { name: 'Виктор Гаврилов', role: 'Технический директор и разработчик PON' },
    { name: 'Ирина Заплётная', role: 'SMM-менеджер и PR' },
    { name: 'Вероника Зайцева', role: 'Дизайнер и маркетолог' },
    { name: 'Олег Дуров', role: 'Ведущий трейдер платформы' },
    { name: 'Даниил Виер', role: 'Front-end разработчик' },
    { name: 'Богдан Масендич', role: 'Тестировщик стратегий, трейдер' },
    { name: 'Константин Бессарабыч', role: 'Юридическое сопровождение' },
  ];

  return (
    <section ref={ref} id="team" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Наша команда
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-red-600 mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {member.name}
              </h3>
              <p className="text-sm text-zinc-400">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="contacts" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Контакты и обратная связь
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Форма обратной связи</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-orange-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-orange-500"
              />
              <textarea
                rows={4}
                placeholder="Ваше сообщение"
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-orange-500"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-600 hover:to-red-700 transition-all"
              >
                Отправить
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Связаться с нами</h3>
              <div className="space-y-4">
                <a
                  href="#"
                  className="block px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors text-white text-center"
                >
                  Написать в поддержку
                </a>
                <a
                  href="#"
                  className="block px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors text-white text-center"
                >
                  Оставить заявку на звонок
                </a>
                <a
                  href="https://t.me/cryptocartel"
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-[#0088cc] hover:bg-[#0077b3] rounded-lg transition-colors text-white"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                  </svg>
                  <span>Связаться с менеджером</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Roadmap />
      <Team />
      <Contacts />
      <Footer />
    </div>
  );
}
