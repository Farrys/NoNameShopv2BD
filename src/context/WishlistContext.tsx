import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../types';
import toast from 'react-hot-toast';

type WishlistContextType = {
  items: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Product[]>([]);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      try {
        setItems(JSON.parse(savedWishlist));
      } catch (error) {
        console.error('Failed to parse wishlist from localStorage', error);
      }
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(items));
  }, [items]);

  const addToWishlist = (product: Product) => {
    if (isInWishlist(product.id)) {
      toast.error('Товар уже в списке желаний');
      return;
    }
    
    setItems(prevItems => [...prevItems, product]);
    toast.success('Добавлен в список желаний');
  };

  const removeFromWishlist = (productId: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== productId));
    toast.success('Удалено из списка желаний');
  };

  const isInWishlist = (productId: string): boolean => {
    return items.some(item => item.id === productId);
  };

  const clearWishlist = () => {
    setItems([]);
    localStorage.removeItem('Список желаний');
    toast.success('Слист желания очистился');
  };

  return (
    <WishlistContext.Provider
      value={{
        items,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('USEWISHLIST должен использоваться в рамках WishList Provider');
  }
  return context;
};