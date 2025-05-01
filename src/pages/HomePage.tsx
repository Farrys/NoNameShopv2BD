import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Truck, CreditCard, RefreshCw } from 'lucide-react';
import { 
  getFeaturedProducts, 
  getBestsellerProducts, 
  getNewArrivalProducts,
  categories,
} from '../data/products';
import ProductCard from '../components/products/ProductCard';
import { Product } from '../types';
import { cn } from '../lib/utils';

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [bestsellerProducts, setBestsellerProducts] = useState<Product[]>([]);
  const [newArrivals, setNewArrivals] = useState<Product[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Demo heroSlides
  const heroSlides = [
    {
      title: "Летняя коллекция 2025 ",
      description: "Откройте для себя самые горячие стили сезона со скидкой до 40%",
      image: "https://images.pexels.com/photos/5698853/pexels-photo-5698853.jpeg",
      link: "/products/clothing",
      btnText: "Делайте покупки сейчас",
      color: "from-blue-500/80",
    },
    {
      title: "Новая электроника прибывает",
      description: "Обновите свои технологии с помощью последних гаджетов и инноваций",
      image: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg",
      link: "/products/electronics",
      btnText: "Исследуйте гаджеты",
      color: "from-purple-500/80",
    },
    {
      title: "Домашняя трансформация",
      description: "Переосмыслить свое пространство с нашей эксклюзивной коллекцией мебели",
      image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg",
      link: "/products/furniture",
      btnText: "Трансформировать сейчас",
      color: "from-amber-500/80",
    },
  ];
  
  useEffect(() => {
    // Fetch products
    setFeaturedProducts(getFeaturedProducts().slice(0, 8));
    setBestsellerProducts(getBestsellerProducts().slice(0, 4));
    setNewArrivals(getNewArrivalProducts().slice(0, 8));
    
    // Auto-advance carousel
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % heroSlides.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  return (
    <div>
      {/* Hero Carousel */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="container">
                <div className="max-w-xl text-white animate-fade-in">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-lg mb-6">{slide.description}</p>
                  <Link to={slide.link} className="btn btn-primary px-6 py-3">
                    {slide.btnText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide controls */}
        <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-colors",
                index === currentSlide ? "bg-white" : "bg-white/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
      
      {/* Features banner */}
      <section className="py-8 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center bg-gray-50 p-4 rounded-lg">
              <Truck size={36} className="text-primary mr-4" />
              <div>
                <h3 className="font-medium">Бесплатная доставка</h3>
                <p className="text-sm text-gray-600">По заказу более 50 долларов</p>
              </div>
            </div>
            <div className="flex items-center bg-gray-50 p-4 rounded-lg">
              <CreditCard size={36} className="text-primary mr-4" />
              <div>
                <h3 className="font-medium">Безопасная оплата</h3>
                <p className="text-sm text-gray-600">100% безопасная проверка</p>
              </div>
            </div>
            <div className="flex items-center bg-gray-50 p-4 rounded-lg">
              <RefreshCw size={36} className="text-primary mr-4" />
              <div>
                <h3 className="font-medium">Легкий возврат</h3>
                <p className="text-sm text-gray-600">30-дневная политика возврата</p>
              </div>
            </div>
            <div className="flex items-center bg-gray-50 p-4 rounded-lg">
              <ShoppingBag size={36} className="text-primary mr-4" />
              <div>
                <h3 className="font-medium">24/7 поддержка</h3>
                <p className="text-sm text-gray-600">Мы здесь, чтобы помочь</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Магазин по категориям</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map(category => (
              <Link 
                key={category.id}
                to={`/products/${category.id}`}
                className="relative group overflow-hidden rounded-lg aspect-square"
              >
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <h3 className="text-white text-lg font-medium">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-12">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Избранные товары</h2>
            <Link 
              to="/products" 
              className="flex items-center text-primary hover:underline"
            >
              Просмотреть все <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Promotional Banner */}
      <section className="py-12 bg-primary text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Летняя распродажа сейчас вживую!</h2>
              <p className="text-lg mb-6">
                Наслаждайтесь скидкой до 50% по выбранным предметам во всех категориях.
Ограниченное время предложения, делайте покупки сейчас, пока поставки длится!
              </p>
              <Link to="/products" className="btn bg-white text-primary hover:bg-gray-100">
                Купить продажу
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.pexels.com/photos/5868722/pexels-photo-5868722.jpeg" 
                alt="Summer Sale" 
                className="max-w-full h-auto rounded-lg shadow-lg"
                style={{ maxHeight: '300px' }}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* New Arrivals */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">New Arrivals</h2>
            <Link 
              to="/products" 
              className="flex items-center text-primary hover:underline"
            >
              Просмотреть все <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Bestsellers */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Bestsellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellerProducts.map(product => (
              <div key={product.id} className="flex gap-4 bg-white p-4 rounded-lg shadow-sm">
                <div className="w-24 h-24 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <Link 
                      to={`/product/${product.id}`}
                      className="font-medium hover:text-primary transition-colors"
                    >
                      {product.name.length > 25 
                        ? `${product.name.substring(0, 25)}...` 
                        : product.name}
                    </Link>
                    <p className="text-sm text-gray-500">{product.brand}</p>
                  </div>
                  <div>
                    {product.discountPrice ? (
                      <div className="flex items-center">
                        <span className="font-medium text-gray-900">
                          ${product.discountPrice.toFixed(2)}
                        </span>
                        <span className="text-sm text-gray-500 line-through ml-2">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>
                    ) : (
                      <span className="font-medium text-gray-900">
                        ${product.price.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-gray-100">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Оставайтесь в курсе</h2>
          <p className="text-lg text-gray-600 mb-8">
           Подпишитесь на нашу новостную рассылку для эксклюзивных предложений, вновь прибывших и инсайдерских советов.
          </p>
          <form className="flex flex-col md:flex-row gap-2 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="input flex-grow"
              required
            />
            <button type="submit" className="btn btn-primary md:w-auto">
              Подписаться
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            Подписывая, вы соглашаетесь с нашей политикой конфиденциальности и согласии на получение обновлений от нашей компании.
          </p>
        </div>
      </section>
    </div>
  );
}