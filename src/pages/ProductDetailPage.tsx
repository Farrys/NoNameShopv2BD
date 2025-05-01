import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Share2, ChevronLeft, ChevronRight, Check, MinusCircle, PlusCircle, Truck, RotateCcw } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { Product } from '../types';
import { formatPrice, getStarRating } from '../lib/utils';
import ProductCard from '../components/products/ProductCard';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { cn } from '../lib/utils';
import toast from 'react-hot-toast';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string | undefined>(undefined);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined);
  const [activeTab, setActiveTab] = useState('description');
  
  useEffect(() => {
    setIsLoading(true);
    
    // Reset state when product ID changes
    setCurrentImageIndex(0);
    setQuantity(1);
    setSelectedColor(undefined);
    setSelectedSize(undefined);
    
    if (id) {
      // Simulate API call with a short delay
      setTimeout(() => {
        const foundProduct = getProductById(id);
        if (foundProduct) {
          setProduct(foundProduct);
          
          // Set default selected values
          if (foundProduct.colors && foundProduct.colors.length > 0) {
            setSelectedColor(foundProduct.colors[0]);
          }
          
          if (foundProduct.sizes && foundProduct.sizes.length > 0) {
            setSelectedSize(foundProduct.sizes[0]);
          }
          
          // Get related products
          setRelatedProducts(getRelatedProducts(id));
        } else {
          // Product not found, redirect to products page
          navigate('/products');
          toast.error('Product not found');
        }
        setIsLoading(false);
      }, 300);
    }
  }, [id, navigate]);
  
  const handleAddToCart = () => {
    if (!product) return;
    
    // Validate selection if options exist
    if (product.colors && product.colors.length > 0 && !selectedColor) {
      toast.error('Please select a color');
      return;
    }
    
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      toast.error('Please select a size');
      return;
    }
    
    addToCart(product, quantity, selectedColor, selectedSize);
  };
  
  const handleWishlistToggle = () => {
    if (!product) return;
    
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };
  
  const handleShare = () => {
    navigator.share ? 
      navigator.share({
        title: product?.name,
        text: product?.description.substring(0, 100) + '...',
        url: window.location.href,
      }).catch(() => {
        // Fallback if share fails
        navigator.clipboard.writeText(window.location.href);
        toast.success('Link copied to clipboard');
      }) : 
      // Fallback for browsers that don't support share API
      navigator.clipboard.writeText(window.location.href)
        .then(() => toast.success('Link copied to clipboard'))
        .catch(() => toast.error('Failed to copy link'));
  };
  
  const inWishlist = product ? isInWishlist(product.id) : false;
  
  if (isLoading) {
    return (
      <div className="py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 animate-pulse bg-gray-200 rounded-lg h-96"></div>
            <div className="md:w-1/2">
              <div className="animate-pulse bg-gray-200 h-8 w-3/4 mb-4 rounded"></div>
              <div className="animate-pulse bg-gray-200 h-4 w-1/4 mb-6 rounded"></div>
              <div className="animate-pulse bg-gray-200 h-32 w-full mb-6 rounded"></div>
              <div className="animate-pulse bg-gray-200 h-10 w-1/3 mb-4 rounded"></div>
              <div className="animate-pulse bg-gray-200 h-12 w-full mb-4 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="py-12">
        <div className="container text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/products" className="btn btn-primary">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }
  
  const { full: fullStars, half: halfStars, empty: emptyStars } = getStarRating(product.rating);
  
  return (
    <div className="py-12">
      <div className="container">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <nav className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-primary">Products</Link>
            <span className="mx-2">/</span>
            <Link to={`/products/${product.category}`} className="hover:text-primary capitalize">
              {product.category}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{product.name}</span>
          </nav>
        </div>
        
        {/* Product details */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Product Images */}
          <div className="lg:w-1/2">
            <div className="relative mb-4 bg-gray-100 rounded-lg overflow-hidden aspect-square">
              <img 
                src={product.images[currentImageIndex]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Image navigation arrows */}
              {product.images.length > 1 && (
                <>
                  <button 
                    onClick={() => setCurrentImageIndex(prev => 
                      prev === 0 ? product.images.length - 1 : prev - 1
                    )}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-sm hover:bg-white transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  
                  <button 
                    onClick={() => setCurrentImageIndex(prev => 
                      prev === product.images.length - 1 ? 0 : prev + 1
                    )}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-sm hover:bg-white transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>
            
            {/* Thumbnail gallery */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={cn(
                      "w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2",
                      index === currentImageIndex 
                        ? "border-primary" 
                        : "border-transparent"
                    )}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} - view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {[...Array(fullStars)].map((_, i) => (
                  <Star key={`full-${i}`} size={18} className="text-yellow-400 fill-current" />
                ))}
                {[...Array(halfStars)].map((_, i) => (
                  <Star key={`half-${i}`} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
                {[...Array(emptyStars)].map((_, i) => (
                  <Star key={`empty-${i}`} size={18} className="text-gray-300" />
                ))}
              </div>
              <span className="text-gray-500">
                {product.rating.toFixed(1)} ({product.reviews.length} reviews)
              </span>
            </div>
            
            {/* Brand */}
            <p className="text-gray-500 mb-4">
              Brand: <span className="font-medium">{product.brand}</span>
            </p>
            
            {/* Price */}
            <div className="mb-6">
              {product.discountPrice ? (
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-gray-900 mr-2">
                    {formatPrice(product.discountPrice)}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    {formatPrice(product.price)}
                  </span>
                  <span className="ml-2 badge badge-primary">
                    Save {formatPrice(product.price - product.discountPrice)}
                  </span>
                </div>
              ) : (
                <span className="text-2xl font-bold text-gray-900">
                  {formatPrice(product.price)}
                </span>
              )}
            </div>
            
            {/* Short Description */}
            <p className="text-gray-700 mb-6">
              {product.description.length > 300 
                ? product.description.substring(0, 300) + '...' 
                : product.description}
            </p>
            
            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <h3 className="font-medium mb-2">Color:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        "px-3 py-1 border rounded-md flex items-center",
                        selectedColor === color
                          ? "border-primary bg-primary/10"
                          : "border-gray-300 hover:border-gray-400"
                      )}
                    >
                      {selectedColor === color && <Check size={16} className="mr-1 text-primary" />}
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <h3 className="font-medium mb-2">Size:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "w-12 h-12 border rounded-md flex items-center justify-center font-medium",
                        selectedSize === size
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-gray-300 hover:border-gray-400"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Quantity and Add to Cart */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Quantity:</h3>
              <div className="flex items-center">
                <button
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="p-2 rounded-md hover:bg-gray-100"
                  disabled={quantity <= 1}
                >
                  <MinusCircle size={20} className={quantity <= 1 ? "text-gray-300" : "text-gray-600"} />
                </button>
                
                <input
                  type="number"
                  min="1"
                  max={product.stock}
                  value={quantity}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    if (!isNaN(val) && val >= 1 && val <= product.stock) {
                      setQuantity(val);
                    }
                  }}
                  className="w-16 text-center border-gray-300 border rounded-md mx-2"
                />
                
                <button
                  onClick={() => setQuantity(prev => Math.min(product.stock, prev + 1))}
                  className="p-2 rounded-md hover:bg-gray-100"
                  disabled={quantity >= product.stock}
                >
                  <PlusCircle size={20} className={quantity >= product.stock ? "text-gray-300" : "text-gray-600"} />
                </button>
                
                <span className="ml-4 text-sm text-gray-500">
                  {product.stock} items available
                </span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button
                onClick={handleAddToCart}
                className="btn btn-primary flex-grow sm:flex-grow-0 sm:w-1/2"
                disabled={product.stock === 0}
              >
                <ShoppingCart size={18} className="mr-2" />
                Add to Cart
              </button>
              
              <button
                onClick={handleWishlistToggle}
                className={cn(
                  "btn flex-grow sm:flex-grow-0 sm:w-1/4",
                  inWishlist 
                    ? "bg-red-100 text-red-600 hover:bg-red-200 border-red-200" 
                    : "btn-outline"
                )}
              >
                <Heart 
                  size={18} 
                  className={inWishlist ? "fill-current" : ""} 
                />
              </button>
              
              <button
                onClick={handleShare}
                className="btn btn-outline flex-grow sm:flex-grow-0 sm:w-1/4"
              >
                <Share2 size={18} />
              </button>
            </div>
            
            {/* Delivery Info */}
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div className="flex items-start">
                <Truck size={20} className="text-gray-600 mt-0.5 mr-2" />
                <div>
                  <h4 className="font-medium">Free Shipping</h4>
                  <p className="text-sm text-gray-500">
                    Free standard shipping on orders over $50
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <RotateCcw size={20} className="text-gray-600 mt-0.5 mr-2" />
                <div>
                  <h4 className="font-medium">Easy Returns</h4>
                  <p className="text-sm text-gray-500">
                    Return within 30 days for a full refund
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Tabs (Description, Specifications, Reviews) */}
        <div className="mb-12">
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto no-scrollbar">
              <button
                onClick={() => setActiveTab('description')}
                className={cn(
                  "px-4 py-2 font-medium text-sm whitespace-nowrap",
                  activeTab === 'description'
                    ? "border-b-2 border-primary text-primary"
                    : "text-gray-500 hover:text-gray-700"
                )}
              >
                Description
              </button>
              
              <button
                onClick={() => setActiveTab('specifications')}
                className={cn(
                  "px-4 py-2 font-medium text-sm whitespace-nowrap",
                  activeTab === 'specifications'
                    ? "border-b-2 border-primary text-primary"
                    : "text-gray-500 hover:text-gray-700"
                )}
              >
                Specifications
              </button>
              
              <button
                onClick={() => setActiveTab('reviews')}
                className={cn(
                  "px-4 py-2 font-medium text-sm whitespace-nowrap",
                  activeTab === 'reviews'
                    ? "border-b-2 border-primary text-primary"
                    : "text-gray-500 hover:text-gray-700"
                )}
              >
                Reviews ({product.reviews.length})
              </button>
            </div>
          </div>
          
          <div className="py-6">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p>{product.description}</p>
              </div>
            )}
            
            {activeTab === 'specifications' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="font-medium mb-2">Product Information</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span className="text-gray-600">Brand</span>
                        <span className="font-medium">{product.brand}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Category</span>
                        <span className="font-medium capitalize">{product.category}</span>
                      </li>
                      {product.colors && (
                        <li className="flex justify-between">
                          <span className="text-gray-600">Available Colors</span>
                          <span className="font-medium">{product.colors.join(', ')}</span>
                        </li>
                      )}
                      {product.sizes && (
                        <li className="flex justify-between">
                          <span className="text-gray-600">Available Sizes</span>
                          <span className="font-medium">{product.sizes.join(', ')}</span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div>
                {product.reviews.length === 0 ? (
                  <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
                ) : (
                  <div className="space-y-6">
                    {product.reviews.map(review => (
                      <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium">{review.userName}</h3>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={16} 
                                className={i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"} 
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mb-2">
                          {new Date(review.createdAt).toLocaleDateString()}
                        </p>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}