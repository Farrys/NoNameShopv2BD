import { Link } from 'react-router-dom';
import { ShoppingBag, Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="py-20 flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className="container max-w-md text-center">
        <h1 className="text-8xl font-bold text-primary mb-6">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn btn-primary">
            <Home size={18} className="mr-2" />
            Go Home
          </Link>
          <Link to="/products" className="btn btn-outline">
            <ShoppingBag size={18} className="mr-2" />
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}