import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product } from '../types';
import toast from 'react-hot-toast';

type CartContextType = {
  items: CartItem[];
  addToCart: (product: Product, quantity: number, color?: string, size?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  getProductQuantity: (productId: string) => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [cartCount, setCartCount] = useState<number>(0);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to parse cart from localStorage', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem('cart', JSON.stringify(items));
    }
    
    // Calculate totals
    const total = items.reduce((sum, item) => {
      const price = item.product.discountPrice || item.product.price;
      return sum + price * item.quantity;
    }, 0);
    
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    
    setCartTotal(total);
    setCartCount(count);
  }, [items]);

  const addToCart = (product: Product, quantity: number, color?: string, size?: string) => {
    setItems(prevItems => {
      // Check if the product is already in the cart with the same options
      const existingItemIndex = prevItems.findIndex(
        item => 
          item.product.id === product.id && 
          item.color === color && 
          item.size === size
      );

      if (existingItemIndex !== -1) {
        // If it exists, update the quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        toast.success('Количество предметов обновляется в корзине');
        return updatedItems;
      } else {
        // Otherwise, add as a new item
        toast.success('Товар добавлен в корзину');
        return [...prevItems, { product, quantity, color, size }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setItems(prevItems => {
      const newItems = prevItems.filter(item => item.product.id !== productId);
      
      // If cart becomes empty, remove from localStorage
      if (newItems.length === 0) {
        localStorage.removeItem('cart');
      }
      
      toast.success('Товар удален с корзины');
      return newItems;
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setItems(prevItems =>
      prevItems.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    localStorage.removeItem('cart');
  };

  const getProductQuantity = (productId: string): number => {
    const item = items.find(item => item.product.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        getProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};