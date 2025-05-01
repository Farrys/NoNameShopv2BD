import { useState, useEffect } from 'react';
import { Route, Routes, Link, useLocation, Navigate } from 'react-router-dom';
import { User as UserIcon, Package, Heart, MapPin } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Address } from '../types';
import { cn } from '../lib/utils';
import ProfileDetails from './profile/ProfileDetails';
import ProfileOrders from './profile/ProfileOrders';
import ProfileWishlist from './profile/ProfileWishlist';
import ProfileAddresses from './profile/ProfileAddresses';

export default function ProfilePage() {
  const { user } = useAuth();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('details');
  
  useEffect(() => {
    // Set active tab based on URL path
    const path = location.pathname;
    if (path.includes('/profile/orders')) {
      setActiveTab('orders');
    } else if (path.includes('/profile/wishlist')) {
      setActiveTab('wishlist');
    } else if (path.includes('/profile/addresses')) {
      setActiveTab('addresses');
    } else {
      setActiveTab('details');
    }
  }, [location]);
  
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  return (
    <div className="py-12">
      <div className="container">
        <h1 className="text-3xl font-bold mb-8">My Account</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* User Info */}
              <div className="p-6 border-b">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <UserIcon size={24} className="text-primary" />
                    )}
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium">{user.name}</h3>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
              </div>
              
              {/* Navigation */}
              <nav className="p-2">
                <Link
                  to="/profile"
                  className={cn(
                    "flex items-center px-4 py-2 rounded-md transition-colors",
                    activeTab === 'details'
                      ? "bg-primary/10 text-primary font-medium"
                      : "hover:bg-gray-100"
                  )}
                >
                  <UserIcon size={18} className="mr-2" />
                  Profile Details
                </Link>
                
                <Link
                  to="/profile/orders"
                  className={cn(
                    "flex items-center px-4 py-2 rounded-md transition-colors",
                    activeTab === 'orders'
                      ? "bg-primary/10 text-primary font-medium"
                      : "hover:bg-gray-100"
                  )}
                >
                  <Package size={18} className="mr-2" />
                  My Orders
                </Link>
                
                <Link
                  to="/profile/wishlist"
                  className={cn(
                    "flex items-center px-4 py-2 rounded-md transition-colors",
                    activeTab === 'wishlist'
                      ? "bg-primary/10 text-primary font-medium"
                      : "hover:bg-gray-100"
                  )}
                >
                  <Heart size={18} className="mr-2" />
                  Wishlist
                </Link>
                
                <Link
                  to="/profile/addresses"
                  className={cn(
                    "flex items-center px-4 py-2 rounded-md transition-colors",
                    activeTab === 'addresses'
                      ? "bg-primary/10 text-primary font-medium"
                      : "hover:bg-gray-100"
                  )}
                >
                  <MapPin size={18} className="mr-2" />
                  Addresses
                </Link>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-grow">
            <Routes>
              <Route index element={<ProfileDetails />} />
              <Route path="orders" element={<ProfileOrders />} />
              <Route path="wishlist" element={<ProfileWishlist />} />
              <Route path="addresses" element={<ProfileAddresses />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}