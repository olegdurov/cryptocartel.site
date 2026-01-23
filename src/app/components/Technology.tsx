import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Code, Database, Cpu, Network } from "lucide-react";

const technologies = [
  {
    icon: Code,
    title: "Смарт-контракты",
    description: "Автоматизированные протоколы с проверенным и аудированным кодом",
    stats: "99.9% надежность",
  },
  {
    icon: Database,
    title: "Распределенное хранилище",
    description: "Данные защищены и распределены по множеству узлов сети",
    stats: "100% доступность",
  },
  {
    icon: Cpu,
    title: "AI-оптимизация",
    description: "Искусственный интеллект для оптимальной доходности",
    stats: "40% выше доход",
  },
  {
    icon: Network,
    title: "Кроссчейн мосты",
    description: "Беспрепятственный обмен между различными блокчейнами",
    stats: "15+ сетей",
  },
];

export function Technology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 bg-gradient-to-b from-[#0a0a0f] via-[#141420] to-[#0a0a0f] overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl">
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1631864031824-d636e1dc5292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwbmV0d29yayUyMGRpZ2l0YWx8ZW58MXx8fHwxNzY4NjgxMjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block text-purple-400 font-semibold mb-4 tracking-wider uppercase text-sm"
              >
                Технологии будущего
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              >
                Построено на
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  передовых решениях
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg text-gray-400"
              >
                Мы используем самые современные технологии блокчейн для обеспечения 
                безопасности, скорости и масштабируемости нашей платформы.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="space-y-6"
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 10 }}
                  className="flex gap-4 p-4 bg-[#1a1a2e]/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg group-hover:from-purple-600/30 group-hover:to-pink-600/30 transition-colors duration-300">
                      <tech.icon className="w-6 h-6 text-purple-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-semibold text-white">{tech.title}</h4>
                      <span className="text-xs text-purple-400 font-semibold">{tech.stats}</span>
                    </div>
                    <p className="text-sm text-gray-400">{tech.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-xl mx-auto">
              {/* Rotating rings */}
              <motion.div
                className="absolute inset-0 border-2 border-purple-600/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-8 border-2 border-blue-600/30 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-16 border-2 border-pink-600/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Center glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-48 h-48 bg-gradient-to-r from-purple-600/50 to-blue-600/50 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Orbiting nodes */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg shadow-purple-500/50"
                  style={{
                    top: "50%",
                    left: "50%",
                    marginTop: "-8px",
                    marginLeft: "-8px",
                  }}
                  animate={{
                    rotate: 360,
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                      delay: (i * 10) / 8,
                    },
                    scale: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2,
                    },
                  }}
                  transformTemplate={({ rotate }) =>
                    `rotate(${rotate}) translateX(200px)`
                  }
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
