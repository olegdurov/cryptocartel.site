import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { CheckCircle2, Circle } from "lucide-react";

const roadmapItems = [
  {
    quarter: "Q1 2024",
    title: "Запуск платформы",
    status: "completed",
    items: [
      "Запуск основной сети",
      "Листинг на DEX биржах",
      "Запуск стейкинга",
      "Аудит смарт-контрактов",
    ],
  },
  {
    quarter: "Q2 2024",
    title: "Расширение экосистемы",
    status: "completed",
    items: [
      "Листинг на CEX биржах",
      "Мобильное приложение",
      "Фарминг программа",
      "Партнерства с проектами",
    ],
  },
  {
    quarter: "Q3 2024",
    title: "Инновации",
    status: "current",
    items: [
      "Кроссчейн интеграция",
      "NFT маркетплейс",
      "DAO запуск",
      "Обновление протокола v2",
    ],
  },
  {
    quarter: "Q4 2024",
    title: "Глобальная экспансия",
    status: "upcoming",
    items: [
      "Расширение на новые рынки",
      "Институциональные решения",
      "Дополнительные языки",
      "Программа амбассадоров",
    ],
  },
];

export function Roadmap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 bg-gradient-to-b from-[#0a0a0f] via-[#141420] to-[#0a0a0f] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

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
            Дорожная карта
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Путь к
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              доминированию
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            Наша стратегия развития и ключевые вехи на пути к созданию 
            лидирующей DeFi экосистемы
          </motion.p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-pink-600 to-blue-600" />

          <div className="space-y-12">
            {roadmapItems.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                  className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content card */}
                  <div
                    className={`${
                      isEven ? "lg:text-right lg:pr-12" : "lg:col-start-2 lg:pl-12"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`relative p-6 sm:p-8 bg-gradient-to-br from-[#1a1a2e] to-[#16161f] rounded-2xl border transition-all duration-300 ${
                        item.status === "current"
                          ? "border-purple-500 shadow-lg shadow-purple-500/20"
                          : "border-gray-800 hover:border-purple-500/50"
                      }`}
                    >
                      {/* Status badge */}
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 ${
                          item.status === "completed"
                            ? "bg-green-600/20 text-green-400"
                            : item.status === "current"
                            ? "bg-purple-600/20 text-purple-400"
                            : "bg-gray-600/20 text-gray-400"
                        }`}
                      >
                        {item.status === "completed" ? (
                          <CheckCircle2 className="w-4 h-4" />
                        ) : (
                          <Circle className="w-4 h-4" />
                        )}
                        <span className="text-sm font-semibold">
                          {item.status === "completed"
                            ? "Завершено"
                            : item.status === "current"
                            ? "В процессе"
                            : "Планируется"}
                        </span>
                      </div>

                      {/* Quarter */}
                      <div className="text-sm text-purple-400 font-semibold mb-2">
                        {item.quarter}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {item.title}
                      </h3>

                      {/* Items list */}
                      <ul className="space-y-2">
                        {item.items.map((subItem, subIndex) => (
                          <motion.li
                            key={subIndex}
                            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{
                              delay: 0.7 + index * 0.2 + subIndex * 0.1,
                              duration: 0.4,
                            }}
                            className={`flex items-center gap-2 text-gray-400 ${
                              isEven ? "lg:flex-row-reverse lg:justify-end" : ""
                            }`}
                          >
                            <CheckCircle2
                              className={`w-4 h-4 flex-shrink-0 ${
                                item.status === "completed"
                                  ? "text-green-400"
                                  : "text-gray-600"
                              }`}
                            />
                            <span>{subItem}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Corner glow */}
                      {item.status === "current" && (
                        <div className="absolute -top-px -right-px w-24 h-24 bg-gradient-to-br from-purple-600/30 to-transparent rounded-tr-2xl rounded-bl-full" />
                      )}
                    </motion.div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.2, duration: 0.4 }}
                      className="relative"
                    >
                      <div
                        className={`w-6 h-6 rounded-full border-4 ${
                          item.status === "current"
                            ? "bg-purple-600 border-purple-400 shadow-lg shadow-purple-500/50"
                            : item.status === "completed"
                            ? "bg-green-600 border-green-400"
                            : "bg-gray-700 border-gray-600"
                        }`}
                      />
                      {item.status === "current" && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-purple-600"
                          animate={{
                            scale: [1, 2, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      )}
                    </motion.div>
                  </div>

                  {/* Empty space for even items */}
                  {isEven && <div className="hidden lg:block" />}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
