import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '@/contexts/AuthContext';
import AuthModal from '@/components/AuthModal';

const products = [
  { name: 'Сообщество и аналитика', href: '/product/community' },
  { name: 'Торговые стратегии', href: '/product/strategies' },
  { name: 'API торговые боты', href: '/product/bots' },
  { name: 'Обучение и сопровождение', href: '/product/education' },
  { name: 'Pablo Open Network (PON)', href: '/product/pon' },
  { name: 'CC Business Hub', href: '/product/businesshub' },
  { name: 'CC Market', href: '/product/market' },
  { name: 'CC Bond', href: '/product/bond' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user } = useAuth();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Лого */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center font-bold text-white">
                CC
              </div>
              <span className="text-xl font-bold text-white">CryptoCartel</span>
            </Link>

            {/* Desktop меню */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-zinc-300 hover:text-white transition-colors">
                CryptoCartel
              </Link>
              
              {/* Dropdown продуктов */}
              <div 
                className="relative"
                onMouseEnter={() => setShowProducts(true)}
                onMouseLeave={() => setShowProducts(false)}
              >
                <button className="flex items-center space-x-1 text-zinc-300 hover:text-white transition-colors">
                  <span>Наши проекты</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                <AnimatePresence>
                  {showProducts && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-zinc-800 rounded-lg shadow-xl border border-zinc-700 overflow-hidden"
                    >
                      {products.map((product, idx) => (
                        <Link
                          key={idx}
                          to={product.href}
                          className="block px-4 py-3 text-sm text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors"
                        >
                          {product.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/#contacts" className="text-zinc-300 hover:text-white transition-colors">
                Контакты
              </Link>
            </div>

            {/* Кнопка входа */}
            <div className="hidden md:block">
              {user ? (
                <Link
                  to="/dashboard"
                  className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-600 hover:to-red-700 transition-all"
                >
                  Личный кабинет
                </Link>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-600 hover:to-red-700 transition-all"
                >
                  В личный кабинет
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-zinc-800 border-t border-zinc-700"
            >
              <div className="px-4 pt-2 pb-4 space-y-2">
                <Link to="/" className="block py-2 text-zinc-300 hover:text-white">
                  CryptoCartel
                </Link>
                
                <div className="space-y-1">
                  <div className="py-2 text-zinc-300 font-semibold">Наши проекты</div>
                  {products.map((product, idx) => (
                    <Link
                      key={idx}
                      to={product.href}
                      className="block py-2 pl-4 text-sm text-zinc-400 hover:text-white"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
                
                <Link to="/#contacts" className="block py-2 text-zinc-300 hover:text-white">
                  Контакты
                </Link>

                {user ? (
                  <Link
                    to="/dashboard"
                    className="block w-full px-6 py-2 mt-4 bg-gradient-to-r from-orange-500 to-red-600 text-white text-center rounded-lg"
                  >
                    Личный кабинет
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setShowAuthModal(true);
                    }}
                    className="block w-full px-6 py-2 mt-4 bg-gradient-to-r from-orange-500 to-red-600 text-white text-center rounded-lg"
                  >
                    В личный кабинет
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  );
}
