import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper function to migrate existing products to database
export const migrateProductsToDatabase = async (products: any[]) => {
  try {
    const { data, error } = await supabase
      .from('products')
      .upsert(products.map(product => ({
        name: product.name,
        description: product.description,
        price: product.price,
        discount_price: product.discountPrice || null,
        category: product.category,
        images: product.images,
        brand: product.brand,
        rating: product.rating,
        stock: product.stock,
        colors: product.colors || null,
        sizes: product.sizes || null,
        tags: product.tags || null,
        featured: product.featured || false,
        bestseller: product.bestseller || false,
        new_arrival: product.newArrival || false
      })), { onConflict: 'name' });
    
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error migrating products:', error);
    return { success: false, error };
  }
};
// Database types
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          name: string;
          avatar: string | null;
          role: 'customer' | 'admin';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          name: string;
          avatar?: string | null;
          role?: 'customer' | 'admin';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          name?: string;
          avatar?: string | null;
          role?: 'customer' | 'admin';
          created_at?: string;
          updated_at?: string;
        };
      };
      products: {
        Row: {
          id: string;
          name: string;
          description: string;
          price: number;
          discount_price: number | null;
          category: string;
          images: string[];
          brand: string;
          rating: number;
          stock: number;
          colors: string[] | null;
          sizes: string[] | null;
          tags: string[] | null;
          featured: boolean;
          bestseller: boolean;
          new_arrival: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description: string;
          price: number;
          discount_price?: number | null;
          category: string;
          images?: string[];
          brand: string;
          rating?: number;
          stock?: number;
          colors?: string[] | null;
          sizes?: string[] | null;
          tags?: string[] | null;
          featured?: boolean;
          bestseller?: boolean;
          new_arrival?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string;
          price?: number;
          discount_price?: number | null;
          category?: string;
          images?: string[];
          brand?: string;
          rating?: number;
          stock?: number;
          colors?: string[] | null;
          sizes?: string[] | null;
          tags?: string[] | null;
          featured?: boolean;
          bestseller?: boolean;
          new_arrival?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      orders: {
        Row: {
          id: string;
          user_id: string;
          status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'canceled';
          subtotal: number;
          shipping: number;
          tax: number;
          total: number;
          payment_method: string;
          shipping_address: any;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          status?: 'pending' | 'processing' | 'shipped' | 'delivered' | 'canceled';
          subtotal: number;
          shipping?: number;
          tax?: number;
          total: number;
          payment_method: string;
          shipping_address: any;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          status?: 'pending' | 'processing' | 'shipped' | 'delivered' | 'canceled';
          subtotal?: number;
          shipping?: number;
          tax?: number;
          total?: number;
          payment_method?: string;
          shipping_address?: any;
          created_at?: string;
          updated_at?: string;
        };
      };
      order_items: {
        Row: {
          id: string;
          order_id: string;
          product_id: string;
          quantity: number;
          price: number;
          color: string | null;
          size: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          order_id: string;
          product_id: string;
          quantity: number;
          price: number;
          color?: string | null;
          size?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          order_id?: string;
          product_id?: string;
          quantity?: number;
          price?: number;
          color?: string | null;
          size?: string | null;
          created_at?: string;
        };
      };
      reviews: {
        Row: {
          id: string;
          product_id: string;
          user_id: string;
          rating: number;
          comment: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          product_id: string;
          user_id: string;
          rating: number;
          comment: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          product_id?: string;
          user_id?: string;
          rating?: number;
          comment?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}