import { Link } from 'react-router-dom';
import { ShoppingCart, Trash2, Heart } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';

export default function ProfileWishlist() {
  const { items, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  
  const handleAddToCart = (productId: string) => {
    const product = items.find(item => item.id === productId);
    if (product) {
      addToCart(product, 1);
      removeFromWishlist(productId);
    }
  };
  
  if (items.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="font-medium">My Wishlist</h2>
        </div>
        
        <div className="p-6 text-center">
          <Heart size={48} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-lg font-medium mb-2">Your wishlist is empty</h3>
          <p className="text-gray-500 mb-6">
            Products added to your wishlist will appear here.
          </p>
          <Link to="/products" className="btn btn-primary px-6">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="font-medium">My Wishlist ({items.length})</h2>
        <button
          onClick={clearWishlist}
          className="text-sm text-gray-500 hover:text-red-500"
        >
          Clear Wishlist
        </button>
      </div>
      
      <div className="divide-y">
        {items.map(product => (
          <div key={product.id} className="p-4 flex flex-col sm:flex-row">
            {/* Product Image */}
            <div className="w-full sm:w-24 h-24 bg-gray-100 rounded-md overflow-hidden">
              <img 
                src={product.images[0]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Product Details */}
            <div className="flex-grow sm:ml-4 mt-3 sm:mt-0">
              <Link 
                to={`/product/${product.id}`}
                className="font-medium hover:text-primary transition-colors"
              >
                {product.name}
              </Link>
              
              <div className="flex flex-col sm:flex-row sm:justify-between mt-2 gap-2">
                <div>
                  <span className="text-gray-500">{product.brand}</span>
                  <div className="mt-1">
                    {product.discountPrice ? (
                      <div className="flex items-center">
                        <span className="font-medium text-gray-900 mr-2">
                          {formatPrice(product.discountPrice)}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          {formatPrice(product.price)}
                        </span>
                      </div>
                    ) : (
                      <span className="font-medium text-gray-900">
                        {formatPrice(product.price)}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className="btn btn-sm btn-primary flex items-center"
                  >
                    <ShoppingCart size={14} className="mr-1" />
                    Add to Cart
                  </button>
                  
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="btn btn-sm btn-outline flex items-center"
                    aria-label="Remove from wishlist"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}