import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { 
  products, 
  getProductsByCategory, 
  searchProducts, 
  categories 
} from '../data/products';
import { Category, Product } from '../types';
import ProductGrid from '../components/products/ProductGrid';

export default function ProductsPage() {
  const { category } = useParams<{ category?: string }>();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('поиск');
  
  const [displayProducts, setDisplayProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageTitle, setPageTitle] = useState('Все товары');
  
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call with a short delay
    setTimeout(() => {
      let filteredProducts: Product[] = [];
      
      if (searchQuery) {
        // Handle search
        filteredProducts = searchProducts(searchQuery);
        setPageTitle(`Результаты поиска для "${searchQuery}"`);
      } else if (category) {
        // Handle category filter
        const validCategory = categories.find(c => c.id === category);
        if (validCategory) {
          filteredProducts = getProductsByCategory(category as Category);
          setPageTitle(validCategory.name);
        } else {
          filteredProducts = products;
          setPageTitle('Все товары');
        }
      } else {
        // Show all products
        filteredProducts = products;
        setPageTitle('Все товары');
      }
      
      setDisplayProducts(filteredProducts);
      setIsLoading(false);
    }, 500);
  }, [category, searchQuery]);
  
  return (
    <div className="py-12">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{pageTitle}</h1>
          <p className="text-gray-600">
            {displayProducts.length} {displayProducts.length === 1 ? 'товар' : 'товаров'} найдено
          </p>
        </div>
        
        <ProductGrid products={displayProducts} isLoading={isLoading} />
      </div>
    </div>
  );
}