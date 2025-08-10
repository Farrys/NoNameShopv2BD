import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Product } from '../types';

interface UseProductsOptions {
  category?: string;
  featured?: boolean;
  bestseller?: boolean;
  newArrival?: boolean;
  search?: string;
  limit?: number;
}

export function useProducts(options: UseProductsOptions = {}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, [options.category, options.featured, options.bestseller, options.newArrival, options.search, options.limit]);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      setError(null);

      let query = supabase
        .from('products')
        .select(`
          *,
          reviews (
            id,
            user_id,
            rating,
            comment,
            created_at,
            users (name)
          )
        `);

      // Apply filters
      if (options.category) {
        query = query.eq('category', options.category);
      }

      if (options.featured) {
        query = query.eq('featured', true);
      }

      if (options.bestseller) {
        query = query.eq('bestseller', true);
      }

      if (options.newArrival) {
        query = query.eq('new_arrival', true);
      }

      if (options.search) {
        query = query.or(`name.ilike.%${options.search}%,description.ilike.%${options.search}%,brand.ilike.%${options.search}%`);
      }

      // Apply limit
      if (options.limit) {
        query = query.limit(options.limit);
      }

      // Order by created_at desc
      query = query.order('created_at', { ascending: false });

      const { data, error } = await query;

      if (error) throw error;

      // Transform data to match Product interface
      const transformedProducts: Product[] = (data || []).map(product => ({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        discountPrice: product.discount_price,
        category: product.category as any,
        images: product.images,
        brand: product.brand,
        rating: product.rating,
        reviews: (product.reviews || []).map((review: any) => ({
          id: review.id,
          userId: review.user_id,
          userName: review.users?.name || 'Anonymous',
          rating: review.rating,
          comment: review.comment,
          createdAt: review.created_at
        })),
        stock: product.stock,
        colors: product.colors,
        sizes: product.sizes,
        tags: product.tags,
        featured: product.featured,
        bestseller: product.bestseller,
        newArrival: product.new_arrival
      }));

      setProducts(transformedProducts);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
    } finally {
      setIsLoading(false);
    }
  };

  const refetch = () => {
    fetchProducts();
  };

  return {
    products,
    isLoading,
    error,
    refetch
  };
}

export function useProduct(id: string) {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  const fetchProduct = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          reviews (
            id,
            user_id,
            rating,
            comment,
            created_at,
            users (name)
          )
        `)
        .eq('id', id)
        .single();

      if (error) throw error;

      if (data) {
        const transformedProduct: Product = {
          id: data.id,
          name: data.name,
          description: data.description,
          price: data.price,
          discountPrice: data.discount_price,
          category: data.category as any,
          images: data.images,
          brand: data.brand,
          rating: data.rating,
          reviews: (data.reviews || []).map((review: any) => ({
            id: review.id,
            userId: review.user_id,
            userName: review.users?.name || 'Anonymous',
            rating: review.rating,
            comment: review.comment,
            createdAt: review.created_at
          })),
          stock: data.stock,
          colors: data.colors,
          sizes: data.sizes,
          tags: data.tags,
          featured: data.featured,
          bestseller: data.bestseller,
          newArrival: data.new_arrival
        };

        setProduct(transformedProduct);
      }
    } catch (err) {
      console.error('Error fetching product:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch product');
    } finally {
      setIsLoading(false);
    }
  };

  const refetch = () => {
    fetchProduct();
  };

  return {
    product,
    isLoading,
    error,
    refetch
  };
}