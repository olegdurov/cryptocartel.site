import { motion } from "motion/react";
import { Github, Twitter, Send, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";

const socialLinks = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Send, label: "Telegram", href: "#" },
  { icon: MessageCircle, label: "Discord", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
];

const footerLinks = [
  {
    title: "Продукт",
    links: [
      { label: "Стейкинг", href: "#" },
      { label: "Фарминг", href: "#" },
      { label: "Свап", href: "#" },
      { label: "NFT", href: "#" },
    ],
  },
  {
    title: "Разработчикам",
    links: [
      { label: "Документация", href: "#" },
      { label: "API", href: "#" },
      { label: "GitHub", href: "#" },
      { label: "Аудиты", href: "#" },
    ],
  },
  {
    title: "Сообщество",
    links: [
      { label: "Twitter", href: "#" },
      { label: "Telegram", href: "#" },
      { label: "Discord", href: "#" },
      { label: "Форум", href: "#" },
    ],
  },
  {
    title: "Компания",
    links: [
      { label: "О нас", href: "#" },
      { label: "Блог", href: "#" },
      { label: "Карьера", href: "#" },
      { label: "Контакты", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-[#0a0a0f] border-t border-gray-800 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#1e1e3f_0%,transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* CTA Section */}
        <div className="py-16 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Присоединяйтесь к
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                революции CryptoCartel
              </span>
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Получайте последние новости, обновления и эксклюзивные предложения
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            >
              <Input
                type="email"
                placeholder="Ваш email адрес"
                className="flex-1 bg-[#1a1a2e] border-gray-700 focus:border-purple-500 text-white placeholder:text-gray-500"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white group">
                Подписаться
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 border-t border-gray-800">
          {/* Logo and description */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold">CC</span>
                </div>
                <span className="text-xl font-bold">CryptoCartel</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-xs">
                Первая децентрализованная платформа нового поколения для управления криптоактивами.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-[#1a1a2e] hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1, duration: 0.5 }}
            >
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-200 inline-block hover:translate-x-1 transform"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © 2024 CryptoCartel. Все права защищены.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex gap-6 text-sm"
            >
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Условия использования
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Конфиденциальность
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Cookies
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated background orb */}
      <motion.div
        className="absolute -bottom-48 -right-48 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </footer>
  );
}
