import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Package, ChevronRight, CheckCircle, Truck, Clock } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { formatPrice } from '../../lib/utils';
import { Order, OrderStatus, CartItem } from '../../types';

// Sample mock orders data
const mockOrders: Order[] = [
  {
    id: 'ORD12345',
    userId: '1',
    items: [
      {
        product: {
          id: '1',
          name: 'Premium Cotton T-Shirt',
          description: 'Comfortable cotton t-shirt',
          price: 29.99,
          discountPrice: 24.99,
          category: 'clothing',
          images: ['https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg'],
          brand: 'UrbanStyle',
          rating: 4.5,
          reviews: [],
          stock: 50,
          colors: ['Black', 'White', 'Blue'],
          sizes: ['S', 'M', 'L', 'XL']
        },
        quantity: 2,
        color: 'Black',
        size: 'L'
      },
      {
        product: {
          id: '2',
          name: 'Wireless Headphones',
          description: 'High-quality wireless headphones',
          price: 199.99,
          category: 'electronics',
          images: ['https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg'],
          brand: 'SoundMaster',
          rating: 4.8,
          reviews: [],
          stock: 15
        },
        quantity: 1
      }
    ],
    subtotal: 249.97,
    shipping: 0,
    tax: 17.49,
    total: 267.46,
    status: 'delivered',
    paymentMethod: 'Credit Card',
    shippingAddress: {
      id: '1',
      name: 'Home',
      street: '123 Main St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94105',
      country: 'USA',
      isDefault: true
    },
    createdAt: '2025-05-15T14:30:00Z'
  },
  {
    id: 'ORD67890',
    userId: '1',
    items: [
      {
        product: {
          id: '3',
          name: 'Classic Leather Watch',
          description: 'Elegant leather watch',
          price: 149.99,
          discountPrice: 129.99,
          category: 'accessories',
          images: ['https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg'],
          brand: 'TimeWell',
          rating: 4.7,
          reviews: [],
          stock: 25
        },
        quantity: 1
      }
    ],
    subtotal: 129.99,
    shipping: 4.99,
    tax: 9.09,
    total: 144.07,
    status: 'processing',
    paymentMethod: 'PayPal',
    shippingAddress: {
      id: '1',
      name: 'Home',
      street: '123 Main St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94105',
      country: 'USA',
      isDefault: true
    },
    createdAt: '2025-06-01T09:15:00Z'
  }
];

// Helper function to get status icon
function getStatusIcon(status: OrderStatus) {
  switch (status) {
    case 'delivered':
      return <CheckCircle size={18} className="text-green-500" />;
    case 'shipped':
      return <Truck size={18} className="text-blue-500" />;
    case 'processing':
      return <Clock size={18} className="text-orange-500" />;
    default:
      return <Clock size={18} className="text-gray-500" />;
  }
}

export default function ProfileOrders() {
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const orderSuccess = queryParams.get('success') === 'true';
  const newOrderId = queryParams.get('orderId');
  
  // If there's a new order, add it to the top of the list
  useEffect(() => {
    if (orderSuccess && newOrderId) {
      // Create a new mock order with the generated ID
      const newOrder: Order = {
        id: newOrderId,
        userId: '1',
        items: JSON.parse(localStorage.getItem('recentOrder') || '[]') as CartItem[],
        subtotal: 99.99, // Placeholder values
        shipping: 0,
        tax: 7.0,
        total: 106.99,
        status: 'pending',
        paymentMethod: 'Credit Card',
        shippingAddress: {
          id: '1',
          name: 'Home',
          street: '123 Main St',
          city: 'San Francisco',
          state: 'CA',
          zipCode: '94105',
          country: 'USA',
          isDefault: true
        },
        createdAt: new Date().toISOString()
      };
      
      setOrders(prev => [newOrder, ...prev]);
    }
  }, [orderSuccess, newOrderId]);
  
  if (orders.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="font-medium">My Orders</h2>
        </div>
        
        <div className="p-6 text-center">
          <Package size={48} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-lg font-medium mb-2">No orders yet</h3>
          <p className="text-gray-500 mb-6">
            When you place an order, it will appear here.
          </p>
          <Link to="/products" className="btn btn-primary px-6">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      {/* Order Success Message */}
      {orderSuccess && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-start">
          <CheckCircle size={24} className="text-green-500 mr-3 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-green-800">Order Placed Successfully!</h3>
            <p className="text-green-700">
              Thank you for your order. Your order number is <strong>{newOrderId}</strong>.
              We'll send you an email confirmation shortly.
            </p>
          </div>
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="font-medium">My Orders</h2>
        </div>
        
        <div className="divide-y">
          {orders.map(order => (
            <div key={order.id} className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  {getStatusIcon(order.status)}
                  <span className="font-medium ml-2 capitalize">{order.status}</span>
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(order.createdAt).toLocaleDateString()}
                </span>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">Order #{order.id}</span>
                <span className="font-medium">{formatPrice(order.total)}</span>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg mb-3">
                {order.items.map((item, index) => (
                  <div key={index} className="flex items-center text-sm mb-2 last:mb-0">
                    <div className="w-8 h-8 bg-white rounded-md overflow-hidden flex-shrink-0">
                      <img 
                        src={item.product.images[0]} 
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="ml-2 flex-grow truncate">{item.product.name}</span>
                    <span className="text-gray-500">x{item.quantity}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full border border-gray-200 rounded-md py-2 flex items-center justify-center text-primary hover:bg-gray-50 transition-colors">
                View Order Details <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}