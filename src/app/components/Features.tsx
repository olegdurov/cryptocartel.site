import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Shield, Zap, Lock, TrendingUp, Users, Globe } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Максимальная безопасность",
    description: "Многоуровневая защита активов с использованием передовых криптографических технологий",
  },
  {
    icon: Zap,
    title: "Молниеносные транзакции",
    description: "Мгновенное выполнение операций благодаря оптимизированной архитектуре блокчейна",
  },
  {
    icon: Lock,
    title: "Децентрализация",
    description: "Полный контроль над вашими активами без посредников и центральных органов управления",
  },
  {
    icon: TrendingUp,
    title: "Высокая доходность",
    description: "Заработок на стейкинге и фарминге с конкурентными процентными ставками",
  },
  {
    icon: Users,
    title: "Сильное сообщество",
    description: "Активное глобальное сообщество единомышленников и профессиональная поддержка",
  },
  {
    icon: Globe,
    title: "Глобальная доступность",
    description: "Работает в любой точке мира 24/7 без ограничений и географических барьеров",
  },
];

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 bg-[#0a0a0f] overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#1e1e3f_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,#1e1e3f_0%,transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block text-purple-400 font-semibold mb-4 tracking-wider uppercase text-sm"
          >
            Почему CryptoCartel
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Революционная платформа
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              для вашего успеха
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            Мы предоставляем все необходимые инструменты для эффективного управления 
            вашими криптоактивами в одной экосистеме
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="relative p-8 bg-gradient-to-br from-[#1a1a2e]/80 to-[#16161f]/80 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 rounded-2xl transition-all duration-300" />
                
                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex p-3 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl mb-4"
                  >
                    <feature.icon className="w-6 h-6 text-purple-400" />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-600/20 to-transparent rounded-tr-2xl rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
