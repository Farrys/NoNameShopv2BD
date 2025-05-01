import { useState, useEffect } from 'react';
import { ArrowUpDown, SlidersHorizontal, X } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '../../types';
import { cn } from '../../lib/utils';

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
}

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'newest' | 'rating';

export default function ProductGrid({ products, isLoading = false }: ProductGridProps) {
  const [displayProducts, setDisplayProducts] = useState<Product[]>(products);
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);
  
  // Price range filter
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  
  // Brand filter
  const allBrands = [...new Set(products.map(product => product.brand))];
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  
  // Rating filter
  const [minRating, setMinRating] = useState(0);
  
  // Update displayed products when products prop changes
  useEffect(() => {
    setDisplayProducts(products);
  }, [products]);
  
  // Apply sorting and filtering
  useEffect(() => {
    let filteredProducts = [...products];
    
    // Apply price filter
    filteredProducts = filteredProducts.filter(product => {
      const price = product.discountPrice || product.price;
      return price >= priceRange[0] && price <= priceRange[1];
    });
    
    // Apply brand filter
    if (selectedBrands.length > 0) {
      filteredProducts = filteredProducts.filter(product => 
        selectedBrands.includes(product.brand)
      );
    }
    
    // Apply rating filter
    filteredProducts = filteredProducts.filter(product => 
      product.rating >= minRating
    );
    
    // Apply sorting
    switch (sortBy) {
      case 'price-asc':
        filteredProducts.sort((a, b) => {
          const priceA = a.discountPrice || a.price;
          const priceB = b.discountPrice || b.price;
          return priceA - priceB;
        });
        break;
      case 'price-desc':
        filteredProducts.sort((a, b) => {
          const priceA = a.discountPrice || a.price;
          const priceB = b.discountPrice || b.price;
          return priceB - priceA;
        });
        break;
      case 'newest':
        // Since we don't have a date field, we'll use new arrivals flag
        filteredProducts.sort((a, b) => {
          if (a.newArrival && !b.newArrival) return -1;
          if (!a.newArrival && b.newArrival) return 1;
          return 0;
        });
        break;
      case 'rating':
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        // Featured products first, then bestsellers
        filteredProducts.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          if (a.bestseller && !b.bestseller) return -1;
          if (!a.bestseller && b.bestseller) return 1;
          return 0;
        });
    }
    
    setDisplayProducts(filteredProducts);
  }, [products, sortBy, priceRange, selectedBrands, minRating]);
  
  const handleBrandToggle = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };
  
  const resetFilters = () => {
    setPriceRange([0, 2000]);
    setSelectedBrands([]);
    setMinRating(0);
  };
  
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div 
            key={index} 
            className="bg-gray-100 rounded-lg shadow-sm h-80 animate-pulse"
          />
        ))}
      </div>
    );
  }
  
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Filter Panel (mobile) */}
      <div className="lg:hidden flex justify-between items-center mb-4">
        <button
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="btn btn-outline flex items-center"
        >
          <SlidersHorizontal size={18} className="mr-2" />
          Фильтры
        </button>
        
        <div className="flex items-center">
          <label htmlFor="mobile-sort" className="mr-2 text-sm font-medium">
           Сортировать по:
          </label>
          <select
            id="mobile-sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="input py-1 pl-3 pr-8"
          >
              <option value="featured">По избранным</option>
              <option value="price-asc">Цена: от минимальной до максимальной</option>
              <option value="price-desc">Цена: от максимальной до минимальной</option>
              <option value="newest">По новизне</option>
              <option value="rating">По рейтингу</option>
          </select>
        </div>
      </div>
      
      {/* Mobile Filters Drawer */}
      {filtersOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden">
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-lg p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Фильтры</h3>
              <button
                onClick={() => setFiltersOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Filter content - same as desktop */}
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Ценовой диапазон</h4>
                <div className="flex items-center gap-2">
                  <span>${priceRange[0]}</span>
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    step="10"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="flex-grow accent-primary"
                  />
                  <span>${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="2000"
                  step="10"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-primary"
                />
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Бренд</h4>
                <div className="space-y-1 max-h-40 overflow-y-auto">
                  {allBrands.map(brand => (
                    <label key={brand} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandToggle(brand)}
                        className="mr-2 accent-primary"
                      />
                      {brand}
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Рейтинг</h4>
                <input
                  type="range"
                  min="0"
                  max="5"
                  step="0.5"
                  value={minRating}
                  onChange={(e) => setMinRating(parseFloat(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-sm">
                  <span>Любой</span>
                  <span>{minRating}+ ★</span>
                </div>
              </div>
              
              <button
                onClick={resetFilters}
                className="w-full btn btn-outline"
              >
                Сбросить фильтры
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Desktop Filters */}
      <div className="hidden lg:block w-64 bg-white rounded-lg shadow-sm p-4 h-fit sticky top-24">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Фильтры</h3>
          <button
            onClick={resetFilters}
            className="text-sm text-primary hover:underline"
          >
            Перезагрузить
          </button>
        </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-2">Ценовой диапазон</h4>
            <div className="flex items-center gap-2">
              <span>${priceRange[0]}</span>
              <input
                type="range"
                min="0"
                max="2000"
                step="10"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                className="flex-grow accent-primary"
              />
              <span>${priceRange[1]}</span>
            </div>
            <input
              type="range"
              min="0"
              max="2000"
              step="10"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full accent-primary"
            />
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Бренд</h4>
            <div className="space-y-1 max-h-40 overflow-y-auto">
              {allBrands.map(brand => (
                <label key={brand} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandToggle(brand)}
                    className="mr-2 accent-primary"
                  />
                  {brand}
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Рейтинг</h4>
            <input
              type="range"
              min="0"
              max="5"
              step="0.5"
              value={minRating}
              onChange={(e) => setMinRating(parseFloat(e.target.value))}
              className="w-full accent-primary"
            />
            <div className="flex justify-between text-sm">
              <span>Любой</span>
              <span>{minRating}+ ★</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Grid */}
      <div className="flex-1">
        {/* Desktop Sort Controls */}
        <div className="hidden lg:flex justify-between items-center mb-6">
          <p className="text-sm text-gray-500">
            Отображается <span className="font-medium">{displayProducts.length}</span> товаров
          </p>
          
          <div className="flex items-center">
            <ArrowUpDown size={18} className="mr-2 text-gray-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="input py-1 pl-3 pr-8 bg-white"
            >
              <option value="featured">По избранным</option>
              <option value="price-asc">Цена: от минимальной до максимальной</option>
              <option value="price-desc">Цена: от максимальной до минимальной</option>
              <option value="newest">По новизне</option>
              <option value="rating">По рейтингу</option>
            </select>
          </div>
        </div>
        
        {displayProducts.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h3 className="text-lg font-medium mb-2">Товар не найден</h3>
            <p className="text-gray-500 mb-4">
              Попробуйте настроить свои фильтры или критерии поиска, чтобы найти то, что вы ищете.
            </p>
            <button
              onClick={resetFilters}
              className="btn btn-primary"
            >
              Сбросить фильтры
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}