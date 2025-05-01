import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Product } from '../../types';
import { formatPrice, calculateDiscount, truncateText } from '../../lib/utils';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { cn } from '../../lib/utils';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [isHovered, setIsHovered] = useState(false);
  const inWishlist = isInWishlist(product.id);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };
  
  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };
  
  return (
    <Link 
      to={`/product/${product.id}`}
      className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-500",
            isHovered && product.images.length > 1 ? "opacity-0" : "opacity-100"
          )}
        />
        
        {product.images.length > 1 && (
          <img 
            src={product.images[1]} 
            alt={`${product.name} - alternate view`}
            className={cn(
              "w-full h-full object-cover absolute inset-0 transition-opacity duration-500",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          />
        )}
        
        {/* Badge for discount, featured, new arrival */}
        {(product.discountPrice || product.featured || product.newArrival) && (
          <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
            {product.discountPrice && (
              <span className="badge badge-primary">
                -{calculateDiscount(product.price, product.discountPrice)}%
              </span>
            )}
            {product.featured && (
              <span className="badge badge-accent">
                Featured
              </span>
            )}
            {product.newArrival && (
              <span className="badge badge-secondary">
                New
              </span>
            )}
          </div>
        )}
        
        {/* Action buttons */}
        <div className="absolute right-2 top-2 z-10">
          <button
            onClick={handleWishlistToggle}
            className={cn(
              "p-2 rounded-full bg-white shadow-sm hover:bg-gray-100 transition-colors",
              inWishlist ? "text-red-500" : "text-gray-600"
            )}
          >
            <Heart size={18} fill={inWishlist ? "currentColor" : "none"} />
          </button>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-medium text-gray-900 mb-1">
          {truncateText(product.name, 40)}
        </h3>
        
        <div className="flex items-center mb-1">
          <Star size={16} className="text-yellow-400 fill-current" />
          <span className="text-sm ml-1">{product.rating.toFixed(1)}</span>
          <span className="text-xs text-gray-500 ml-1">
            ({product.reviews.length} reviews)
          </span>
        </div>
        
        <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
        
        {/* Price */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center">
            {product.discountPrice ? (
              <>
                <span className="font-medium text-lg text-gray-900">
                  {formatPrice(product.discountPrice)}
                </span>
                <span className="text-sm text-gray-500 line-through ml-2">
                  {formatPrice(product.price)}
                </span>
              </>
            ) : (
              <span className="font-medium text-lg text-gray-900">
                {formatPrice(product.price)}
              </span>
            )}
          </div>
          
          <button
            onClick={handleAddToCart}
            className="p-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
            title="Add to cart"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </Link>
  );
}