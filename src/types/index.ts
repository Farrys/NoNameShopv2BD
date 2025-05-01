export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  category: Category;
  images: string[];
  brand: string;
  rating: number;
  reviews: Review[];
  stock: number;
  colors?: string[];
  sizes?: string[];
  tags?: string[];
  featured?: boolean;
  bestseller?: boolean;
  newArrival?: boolean;
}

export type Category = 
  | 'clothing'
  | 'electronics'
  | 'footwear'
  | 'cosmetics'
  | 'accessories'
  | 'furniture'
  | 'books';

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  color?: string;
  size?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  addresses: Address[];
}

export interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  status: OrderStatus;
  paymentMethod: string;
  shippingAddress: Address;
  createdAt: string;
}

export type OrderStatus = 
  | 'pending'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'canceled';

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}