import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Address } from '../types';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => void;
  addAddress: (address: Omit<Address, 'id'>) => void;
  updateAddress: (address: Address) => void;
  removeAddress: (addressId: string) => void;
  setDefaultAddress: (addressId: string) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data
const mockUsers: User[] = [
  {
    id: '1',
    name: 'Demo User',
    email: 'demo@example.com',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    addresses: [
      {
        id: '1',
        name: 'Home',
        street: '123 Main St',
        city: 'San Francisco',
        state: 'CA',
        zipCode: '94105',
        country: 'USA',
        isDefault: true,
      },
    ],
  },
];

// Mock passwords (in a real app, these would be hashed and stored in a secure database)
const mockPasswords: Record<string, string> = {
  'demo@example.com': 'password123',
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Check for saved user session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Не удалось проанализировать пользователя из LocalStorage', error);
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call with a delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Check if email and password match
    if (mockPasswords[email] && mockPasswords[email] === password) {
      const foundUser = mockUsers.find(u => u.email === email);
      if (foundUser) {
        setUser(foundUser);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(foundUser));
        toast.success('Вход произведён успешно!');
        return true;
      }
    }
    
    toast.error('Неверная электронная почта или пароль');
    return false;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulate API call with a delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Check if email already exists
    if (mockUsers.some(u => u.email === email) || mockPasswords[email]) {
      toast.error('Электронная почта уже используется');
      return false;
    }

    // Create new user
    const newUser: User = {
      id: uuidv4(),
      name,
      email,
      addresses: [],
    };

    // Add to mock data
    mockUsers.push(newUser);
    mockPasswords[email] = password;

    // Set as current user
    setUser(newUser);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(newUser));
    
    toast.success('Регистрация произошла успешно!');
    return true;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    toast.success('Выход из системы произошёл успешно!');
  };

  const updateProfile = (userData: Partial<User>) => {
    if (!user) return;

    const updatedUser = { ...user, ...userData };
    setUser(updatedUser);
    
    // Update in mock data
    const userIndex = mockUsers.findIndex(u => u.id === user.id);
    if (userIndex !== -1) {
      mockUsers[userIndex] = updatedUser;
    }

    localStorage.setItem('user', JSON.stringify(updatedUser));
    toast.success('Профиль обновлен успешно');
  };

  const addAddress = (addressData: Omit<Address, 'id'>) => {
    if (!user) return;

    const newAddress: Address = {
      ...addressData,
      id: uuidv4(),
    };

    // If this is the first address or marked as default, ensure it's the only default
    if (user.addresses.length === 0 || newAddress.isDefault) {
      const updatedAddresses = user.addresses.map(addr => ({
        ...addr,
        isDefault: false,
      }));
      
      const updatedUser = {
        ...user,
        addresses: [...updatedAddresses, newAddress],
      };
      
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    } else {
      const updatedUser = {
        ...user,
        addresses: [...user.addresses, newAddress],
      };
      
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
    
    toast.success('Адрес добавлен успешно');
  };

  const updateAddress = (address: Address) => {
    if (!user) return;

    const updatedAddresses = user.addresses.map(addr => {
      // If this address is being set as default, make sure no other address is default
      if (address.isDefault && addr.id !== address.id) {
        return { ...addr, isDefault: false };
      }
      return addr.id === address.id ? address : addr;
    });

    const updatedUser = { ...user, addresses: updatedAddresses };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    toast.success('Адрес обновлен успешно');
  };

  const removeAddress = (addressId: string) => {
    if (!user) return;

    const addressToRemove = user.addresses.find(addr => addr.id === addressId);
    const updatedAddresses = user.addresses.filter(addr => addr.id !== addressId);
    
    // If we're removing the default address, make the first remaining address the default
    if (addressToRemove?.isDefault && updatedAddresses.length > 0) {
      updatedAddresses[0].isDefault = true;
    }
    
    const updatedUser = { ...user, addresses: updatedAddresses };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    toast.success('Адрес удален успешно');
  };

  const setDefaultAddress = (addressId: string) => {
    if (!user) return;

    const updatedAddresses = user.addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === addressId,
    }));
    
    const updatedUser = { ...user, addresses: updatedAddresses };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    toast.success('Адрес по умолчанию обновлен');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        register,
        logout,
        updateProfile,
        addAddress,
        updateAddress,
        removeAddress,
        setDefaultAddress,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};