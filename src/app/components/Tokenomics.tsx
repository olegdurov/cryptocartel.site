import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Coins, PieChart, Wallet, Landmark } from "lucide-react";

const tokenomics = [
  {
    label: "Ликвидность",
    percentage: "40%",
    amount: "400M CRTEL",
    color: "from-purple-600 to-purple-400",
  },
  {
    label: "Стейкинг",
    percentage: "25%",
    amount: "250M CRTEL",
    color: "from-blue-600 to-blue-400",
  },
  {
    label: "Команда",
    percentage: "15%",
    amount: "150M CRTEL",
    color: "from-pink-600 to-pink-400",
  },
  {
    label: "Маркетинг",
    percentage: "10%",
    amount: "100M CRTEL",
    color: "from-indigo-600 to-indigo-400",
  },
  {
    label: "Резерв",
    percentage: "10%",
    amount: "100M CRTEL",
    color: "from-violet-600 to-violet-400",
  },
];

const stats = [
  {
    icon: Coins,
    label: "Общий выпуск",
    value: "1,000,000,000",
    unit: "CRTEL",
  },
  {
    icon: PieChart,
    label: "Рыночная капитализация",
    value: "$2.5B",
    unit: "",
  },
  {
    icon: Wallet,
    label: "Холдеров",
    value: "150,000+",
    unit: "",
  },
  {
    icon: Landmark,
    label: "Листинги",
    value: "25+",
    unit: "бирж",
  },
];

export function Tokenomics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 bg-[#0a0a0f] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1e1e3f_0%,transparent_50%)]" />
      
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
            Токеномика
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Токен
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              CryptoCartel
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            Прозрачная и справедливая модель распределения токенов для 
            долгосрочного роста экосистемы
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="relative p-6 bg-gradient-to-br from-[#1a1a2e] to-[#16161f] rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 rounded-2xl transition-all duration-300" />
              
              <div className="relative">
                <stat.icon className="w-8 h-8 text-purple-400 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">
                  {stat.label} {stat.unit}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tokenomics Distribution */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Donut chart representation */}
              <svg className="w-full h-full" viewBox="0 0 200 200">
                <defs>
                  {tokenomics.map((item, index) => (
                    <linearGradient key={index} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" className="text-purple-600" stopColor="currentColor" />
                      <stop offset="100%" className="text-pink-600" stopColor="currentColor" />
                    </linearGradient>
                  ))}
                </defs>
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#1a1a2e"
                  strokeWidth="40"
                />
                {tokenomics.map((item, index) => {
                  const percentage = parseInt(item.percentage);
                  const previousTotal = tokenomics
                    .slice(0, index)
                    .reduce((sum, t) => sum + parseInt(t.percentage), 0);
                  const circumference = 2 * Math.PI * 80;
                  const offset = (previousTotal / 100) * circumference;
                  const length = (percentage / 100) * circumference;

                  return (
                    <motion.circle
                      key={index}
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke={`url(#gradient-${index})`}
                      strokeWidth="40"
                      strokeDasharray={`${length} ${circumference}`}
                      strokeDashoffset={-offset}
                      initial={{ strokeDashoffset: circumference }}
                      animate={isInView ? { strokeDashoffset: -offset } : {}}
                      transition={{ delay: 0.8 + index * 0.1, duration: 1, ease: "easeOut" }}
                      transform="rotate(-90 100 100)"
                    />
                  );
                })}
              </svg>

              {/* Center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-4xl font-bold text-white">1B</div>
                <div className="text-sm text-gray-400">CRTEL</div>
              </div>
            </div>
          </motion.div>

          {/* Distribution list */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="space-y-4"
          >
            {tokenomics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 bg-[#1a1a2e]/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color}`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-white">{item.label}</span>
                    <span className="text-purple-400 font-bold">{item.percentage}</span>
                  </div>
                  <div className="text-sm text-gray-400">{item.amount}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
