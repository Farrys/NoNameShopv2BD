import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { categories } from '../../data/products';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary">NoName</span>
              <span className="text-accent">Shop</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Ваше универсальное место для всех ваших потребностей в покупке.Качественные продукты, конкурентные цены и исключительное обслуживание.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Shop Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Магазин по категории</h3>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category.id}>
                  <Link 
                    to={`/products/${category.id}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Обслуживание клиентов</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/faq#returns" className="text-gray-300 hover:text-white transition-colors">
                  Возврат и возврат
                </Link>
              </li>
              <li>
                <Link to="/faq#shipping" className="text-gray-300 hover:text-white transition-colors">
                 Информация о доставке
                </Link>
              </li>
              <li>
                <Link to="/faq#orders" className="text-gray-300 hover:text-white transition-colors">
                  Отслеживание заказа
                </Link>
              </li>
              <li>
                <Link to="/faq#payment" className="text-gray-300 hover:text-white transition-colors">
                  Методы оплаты
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                 О нас
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Условия и подписки
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Связаться с нами</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Россия <br />
                  г.Санкт-Петербург<br />
                  ул. Бухаресткая 137,
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">support@nonameshop.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 pb-6">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-lg font-semibold mb-2">Подписаться на нашу рассылку</h3>
            <p className="text-gray-300 mb-4">
             Получите последние обновления, рекламные акции и новости о продуктах непосредственно в свой почтовый ящик.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="input bg-gray-800 border-gray-700 text-white flex-grow"
                required
              />
              <button 
                type="submit"
                className="btn btn-primary"
              >
                Подписаться
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 mt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} NoName Shop.Все права защищены.</p>
          <p className="mt-1">
            Разработано и разработано с помощью ❤ для лучшего опыта покупок.
          </p>
        </div>
      </div>
    </footer>
  );
}