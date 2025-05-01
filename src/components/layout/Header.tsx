import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  ShoppingCart, 
  Heart, 
  User,
  Menu,
  X,
  Search,
  LogOut,
  ChevronDown,
  Package
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useWishlist } from '../../context/WishlistContext';
import { categories } from '../../data/products';
import { cn } from '../../lib/utils';

export default function Header() {
  const { cartCount } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const { items: wishlistItems } = useWishlist();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
    navigate('/');
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold flex items-center">
          <span className="text-primary">NoName</span>
          <span className="text-accent">Shop</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-primary transition-colors">Главная страница</Link>
          
          <div className="relative">
            <button 
              className="flex items-center hover:text-primary transition-colors"
              onClick={() => setCategoriesOpen(!categoriesOpen)}
            >
              Категории <ChevronDown size={16} className="ml-1" />
            </button>
            
            {categoriesOpen && (
              <div 
                className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md p-3 w-56 grid grid-cols-1 gap-2 z-50"
                onMouseLeave={() => setCategoriesOpen(false)}
              >
                {categories.map(category => (
                  <Link 
                    key={category.id}
                    to={`/products/${category.id}`}
                    className="hover:bg-gray-100 p-2 rounded-md transition-colors"
                    onClick={() => setCategoriesOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link to="/products" className="hover:text-primary transition-colors">Все товары</Link>
          <Link to="/about" className="hover:text-primary transition-colors">О нас</Link>
          <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
        </nav>

        {/* Right-side items */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button 
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search size={20} />
          </button>

          {/* Wishlist */}
          <Link 
            to="/profile/wishlist" 
            className="p-2 rounded-full hover:bg-gray-100 transition-colors relative"
          >
            <Heart size={20} />
            {wishlistItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {wishlistItems.length}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link 
            to="/cart" 
            className="p-2 rounded-full hover:bg-gray-100 transition-colors relative"
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* User Account */}
          {isAuthenticated ? (
            <div className="relative">
              <button 
                className="flex items-center space-x-1 hover:text-primary"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              >
                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                  {user?.avatar ? (
                    <img 
                      src={user.avatar} 
                      alt={user.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-full h-full p-1" />
                  )}
                </div>
              </button>
              
              {userMenuOpen && (
                <div 
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                  onMouseLeave={() => setUserMenuOpen(false)}
                >
                  <div className="px-4 py-2 border-b">
                    <p className="text-sm font-medium">{user?.name}</p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                  <Link 
                    to="/profile" 
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    Мой профиль
                  </Link>
                  <Link 
                    to="/profile/orders" 
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    <span className="flex items-center">
                      <Package size={16} className="mr-2" />
                     Мои заказы
                    </span>
                  </Link>
                  <Link 
                    to="/profile/wishlist" 
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    <span className="flex items-center">
                      <Heart size={16} className="mr-2" />
                      Список желаний
                    </span>
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-red-500"
                  >
                    <span className="flex items-center">
                      <LogOut size={16} className="mr-2" />
                      Выход
                    </span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link 
              to="/login" 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <User size={20} />
            </Link>
          )}
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white pt-16">
          <div className="p-4 space-y-4">
            <Link 
              to="/" 
              className="block p-2 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Дом
            </Link>
            <Link 
              to="/products" 
              className="block p-2 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Все товары
            </Link>
            
            <div className="border-t border-gray-200 pt-2">
              <p className="font-medium pl-2 pb-1">Категории</p>
              {categories.map(category => (
                <Link 
                  key={category.id}
                  to={`/products/${category.id}`}
                  className="block p-2 hover:bg-gray-100 rounded-md pl-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
            
            <div className="border-t border-gray-200 pt-2">
              <Link 
                to="/about" 
                className="block p-2 hover:bg-gray-100 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/faq" 
                className="block p-2 hover:bg-gray-100 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
            </div>
            
            {!isAuthenticated && (
              <div className="border-t border-gray-200 pt-2 flex space-x-2">
                <Link 
                  to="/login" 
                  className="flex-1 btn btn-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Войти
                </Link>
                <Link 
                  to="/register" 
                  className="flex-1 btn btn-outline"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Зарегистрировать
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-24">
          <div className="bg-white rounded-lg p-4 w-full max-w-xl mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Поиск товаров</h3>
              <button 
                onClick={() => setSearchOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSearch}>
              <div className="flex">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products..."
                  className="input flex-grow"
                  autoFocus
                />
                <button 
                  type="submit"
                  className="btn btn-primary ml-2"
                >
                  Поиск
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}