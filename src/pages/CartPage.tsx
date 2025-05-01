import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, MinusCircle, PlusCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/utils';
import { useAuth } from '../context/AuthContext';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, cartTotal } = useCart();
  const { isAuthenticated } = useAuth();
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [discount, setDiscount] = useState(0);
  
  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Demo coupon code logic
    if (couponCode.toLowerCase() === 'discount10') {
      setDiscount(cartTotal * 0.1);
      setCouponApplied(true);
    } else {
      alert('Invalid coupon code');
    }
  };
  
  // Calculate order summary
  const subtotal = cartTotal;
  const shippingCost = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.07; // Example 7% tax
  const total = subtotal + shippingCost + tax - discount;
  
  if (items.length === 0) {
    return (
      <div className="py-12">
        <div className="container">
          <div className="text-center max-w-md mx-auto">
            <ShoppingBag size={64} className="mx-auto text-gray-300 mb-6" />
            <h1 className="text-2xl font-bold mb-4">Ваша корзина пуста</h1>
            <p className="text-gray-500 mb-8">
            Похоже, вы еще ничего не добавили в свою корзину.
Просмотрите наши продукты и найдите то, что вам понравится!
            </p>
            <Link to="/products" className="btn btn-primary px-8">
              Начните делать покупки
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="py-12">
      <div className="container">
        <h1 className="text-3xl font-bold mb-8">Корзина</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
              <div className="p-4 border-b">
                <h2 className="font-medium">Товары в Корзине ({items.length})</h2>
              </div>
              
              <div className="divide-y">
                {items.map(item => (
                  <div key={`${item.product.id}-${item.color}-${item.size}`} className="p-4 flex items-center">
                    {/* Product Image */}
                    <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                      <img 
                        src={item.product.images[0]} 
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Product Details */}
                    <div className="ml-4 flex-grow">
                      <Link 
                        to={`/product/${item.product.id}`}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      
                      <div className="text-sm text-gray-500 mt-1">
                        {item.color && <span>Color: {item.color}</span>}
                        {item.color && item.size && <span className="mx-2">|</span>}
                        {item.size && <span>Size: {item.size}</span>}
                      </div>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 rounded-md hover:bg-gray-100"
                          >
                            <MinusCircle size={18} />
                          </button>
                          
                          <span className="w-8 text-center">{item.quantity}</span>
                          
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 rounded-md hover:bg-gray-100"
                            disabled={item.quantity >= item.product.stock}
                          >
                            <PlusCircle 
                              size={18} 
                              className={item.quantity >= item.product.stock ? "text-gray-300" : ""} 
                            />
                          </button>
                        </div>
                        
                        <div className="flex items-center">
                          <span className="font-medium mr-4">
                            {formatPrice((item.product.discountPrice || item.product.price) * item.quantity)}
                          </span>
                          
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Continue Shopping */}
            <div className="flex justify-between">
              <Link 
                to="/products" 
                className="text-primary hover:underline flex items-center"
              >
                ← Продолжить покупки
              </Link>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-24">
              <div className="p-4 border-b">
                <h2 className="font-medium">Резюме заказа</h2>
              </div>
              
              <div className="p-4 space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Суммка заказа до применения налога</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Отправка</span>
                  <span className="font-medium">
                    {shippingCost === 0 ? 'Free' : formatPrice(shippingCost)}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Налог (7%)</span>
                  <span className="font-medium">{formatPrice(tax)}</span>
                </div>
                
                {couponApplied && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span className="font-medium">-{formatPrice(discount)}</span>
                  </div>
                )}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Итоговая сумма заказа</span>
                    <span className="font-bold text-xl">{formatPrice(total)}</span>
                  </div>
                </div>
                
                {/* Coupon Code */}
                {!couponApplied && (
                  <form onSubmit={handleApplyCoupon} className="mt-4">
                    <div className="flex">
                      <input
                        type="text"
                        placeholder="Coupon code"
                        className="input flex-grow"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        required
                      />
                      <button 
                        type="submit"
                        className="btn btn-outline ml-2"
                      >
                        Применять
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Попробуйте "Discount10" для скидки 10%
                    </p>
                  </form>
                )}
                
                {/* Checkout Button */}
                <Link
                  to={isAuthenticated ? "/checkout" : "/login?redirect=checkout"}
                  className="btn btn-primary w-full"
                >
                  {isAuthenticated ? 'Перейти к оформлению заказа' : 'Войдите в систему для оформления заказа'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}