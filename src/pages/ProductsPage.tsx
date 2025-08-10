import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { categories } from '../data/products';
import { useProducts } from '../hooks/useProducts';
import { Category, Product } from '../types';
import ProductGrid from '../components/products/ProductGrid';

export default function ProductsPage() {
  const { category } = useParams<{ category?: string }>();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search');
  
  const [pageTitle, setPageTitle] = useState('All Products');
  
  // Use the custom hook to fetch products from database
  const { products: displayProducts, isLoading } = useProducts({
    category: category as Category,
    search: searchQuery || undefined
  });
  
  useEffect(() => {
    if (searchQuery) {
      setPageTitle(`Результаты поиска для "${searchQuery}"`);
    } else if (category) {
      const validCategory = categories.find(c => c.id === category);
      if (validCategory) {
        setPageTitle(validCategory.name);
      } else {
        setPageTitle('Все продукты');
      }
    } else {
      setPageTitle('Все продукты');
    }
  }, [category, searchQuery]);
  
  return (
    <div className="py-12">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{pageTitle}</h1>
          <p className="text-gray-600">
            {displayProducts.length} {displayProducts.length === 1 ? 'товар' : 'товары'} found
          </p>
        </div>
        
        <ProductGrid products={displayProducts} isLoading={isLoading} />
      </div>
    </div>
  );
}