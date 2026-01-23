import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Лого и описание */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center font-bold text-white">
                CC
              </div>
              <span className="text-xl font-bold text-white">CryptoCartel</span>
            </div>
            <p className="text-sm text-zinc-400">
              Независимая экосистема для истинных ценителей свободы и заработка на криптовалюте
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="text-white font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-zinc-400 hover:text-white text-sm">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-zinc-400 hover:text-white text-sm">
                  Наши проекты
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-zinc-400 hover:text-white text-sm">
                  О проекте
                </Link>
              </li>
              <li>
                <Link to="/#team" className="text-zinc-400 hover:text-white text-sm">
                  Команда
                </Link>
              </li>
            </ul>
          </div>

          {/* Документы */}
          <div>
            <h3 className="text-white font-semibold mb-4">Документы</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-zinc-400 hover:text-white text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white text-sm">
                  White Paper PON
                </a>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-zinc-400 hover:text-white text-sm">
                  Поддержка
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white text-sm">
                  Заявка на звонок
                </a>
              </li>
              <li>
                <a href="https://t.me/cryptocartel" className="text-zinc-400 hover:text-white text-sm flex items-center space-x-2">
                  <Send className="w-4 h-4" />
                  <span>Telegram</span>
                </a>
              </li>
            </ul>
            
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-zinc-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://t.me/cryptocartel" className="text-zinc-400 hover:text-white">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-sm text-zinc-400">
          <p>&copy; {new Date().getFullYear()} CryptoCartel. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
