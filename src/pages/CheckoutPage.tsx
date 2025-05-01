import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { formatPrice } from '../lib/utils';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';

type PaymentMethod = 'credit-card' | 'paypal';
type CheckoutStep = 'shipping' | 'payment' | 'review';

export default function CheckoutPage() {
  const { items, cartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [step, setStep] = useState<CheckoutStep>('shipping');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('credit-card');
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  const [cardDetails, setCardDetails] = useState({
    name: '',
    number: '',
    expiry: '',
    cvc: '',
  });
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Calculate order summary
  const subtotal = cartTotal;
  const shippingCost = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.07; // Example 7% tax
  const total = subtotal + shippingCost + tax;
  
  useEffect(() => {
    // Set default address if available
    if (user?.addresses && user.addresses.length > 0) {
      const defaultAddress = user.addresses.find(addr => addr.isDefault);
      if (defaultAddress) {
        setSelectedAddress(defaultAddress.id);
      } else {
        setSelectedAddress(user.addresses[0].id);
      }
    }
    
    // Redirect if cart is empty
    if (items.length === 0) {
      navigate('/cart');
      toast.error('Your cart is empty');
    }
  }, [user, items, navigate]);
  
  const handleNextStep = () => {
    if (step === 'shipping') {
      if (!selectedAddress) {
        toast.error('Please select a shipping address');
        return;
      }
      setStep('payment');
    } else if (step === 'payment') {
      if (paymentMethod === 'credit-card') {
        if (!validateCardDetails()) {
          return;
        }
      }
      setStep('review');
    }
  };
  
  const handlePreviousStep = () => {
    if (step === 'payment') setStep('shipping');
    if (step === 'review') setStep('payment');
  };
  
  const validateCardDetails = () => {
    if (!cardDetails.name.trim()) {
      toast.error('Please enter the cardholder name');
      return false;
    }
    if (!cardDetails.number.trim() || cardDetails.number.replace(/\s/g, '').length !== 16) {
      toast.error('Please enter a valid card number');
      return false;
    }
    if (!cardDetails.expiry.trim() || !cardDetails.expiry.includes('/')) {
      toast.error('Please enter a valid expiry date (MM/YY)');
      return false;
    }
    if (!cardDetails.cvc.trim() || cardDetails.cvc.length < 3) {
      toast.error('Please enter a valid CVC code');
      return false;
    }
    return true;
  };
  
  const handlePlaceOrder = async () => {
    if (!agreeToTerms) {
      toast.error('Please agree to the terms and conditions');
      return;
    }
    
    // Simulate order placement
    setIsProcessing(true);
    
    try {
      // Simulate API call with delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create a demo order ID
      const orderId = uuidv4().substring(0, 8).toUpperCase();
      
      // Clear cart and redirect to success page
      clearCart();
      navigate(`/profile/orders?success=true&orderId=${orderId}`);
      toast.success('Order placed successfully!');
    } catch (error) {
      toast.error('Failed to place order. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };
  
  const selectedAddressData = user?.addresses.find(addr => addr.id === selectedAddress);
  
  return (
    <div className="py-12">
      <div className="container">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        {/* Checkout Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-3xl mx-auto mb-4">
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                step === 'shipping' ? 'bg-primary text-white' : 'bg-primary/20 text-primary'
              }`}>
                1
              </div>
              <span className="text-sm mt-1">Shipping</span>
            </div>
            <div className="w-24 h-1 bg-gray-200">
              <div className={`h-full bg-primary ${step !== 'shipping' ? 'w-full' : 'w-0'} transition-all duration-300`}></div>
            </div>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                step === 'payment' ? 'bg-primary text-white' : step === 'review' ? 'bg-primary/20 text-primary' : 'bg-gray-200 text-gray-500'
              }`}>
                2
              </div>
              <span className="text-sm mt-1">Payment</span>
            </div>
            <div className="w-24 h-1 bg-gray-200">
              <div className={`h-full bg-primary ${step === 'review' ? 'w-full' : 'w-0'} transition-all duration-300`}></div>
            </div>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                step === 'review' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                3
              </div>
              <span className="text-sm mt-1">Review</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Checkout Form */}
          <div className="lg:w-2/3">
            {/* Shipping Step */}
            {step === 'shipping' && (
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-4 border-b">
                  <h2 className="font-medium">Shipping Information</h2>
                </div>
                
                <div className="p-6">
                  {/* User profile info */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Contact Information</h3>
                    <p className="font-medium">{user?.name}</p>
                    <p className="text-gray-600">{user?.email}</p>
                  </div>
                  
                  {/* Shipping Addresses */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-sm font-medium text-gray-500">Shipping Address</h3>
                    </div>
                    
                    {user?.addresses && user.addresses.length > 0 ? (
                      <div className="space-y-3">
                        {user.addresses.map(address => (
                          <label 
                            key={address.id} 
                            className={`block border rounded-lg p-4 cursor-pointer transition-colors ${
                              selectedAddress === address.id 
                                ? 'border-primary bg-primary/5'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="flex items-start">
                              <input
                                type="radio"
                                name="shipping-address"
                                value={address.id}
                                checked={selectedAddress === address.id}
                                onChange={() => setSelectedAddress(address.id)}
                                className="mt-1 mr-3"
                              />
                              <div>
                                <p className="font-medium">{address.name}</p>
                                <p className="text-gray-600">{address.street}</p>
                                <p className="text-gray-600">
                                  {address.city}, {address.state} {address.zipCode}
                                </p>
                                <p className="text-gray-600">{address.country}</p>
                                {address.isDefault && (
                                  <span className="inline-block mt-1 text-xs bg-gray-100 rounded px-2 py-0.5">
                                    Default Address
                                  </span>
                                )}
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-6 border rounded-lg">
                        <p className="text-gray-500 mb-4">You don't have any saved addresses.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            {/* Payment Step */}
            {step === 'payment' && (
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-4 border-b">
                  <h2 className="font-medium">Payment Method</h2>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    {/* Credit Card Option */}
                    <label className={`block border rounded-lg p-4 cursor-pointer transition-colors ${
                      paymentMethod === 'credit-card'
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}>
                      <div className="flex items-start">
                        <input
                          type="radio"
                          name="payment-method"
                          value="credit-card"
                          checked={paymentMethod === 'credit-card'}
                          onChange={() => setPaymentMethod('credit-card')}
                          className="mt-1 mr-3"
                        />
                        <div className="flex-grow">
                          <div className="flex justify-between">
                            <p className="font-medium">Credit Card</p>
                            <div className="flex space-x-2">
                              <div className="w-8 h-5 bg-blue-900 rounded"></div>
                              <div className="w-8 h-5 bg-red-500 rounded"></div>
                              <div className="w-8 h-5 bg-yellow-500 rounded"></div>
                            </div>
                          </div>
                          
                          {paymentMethod === 'credit-card' && (
                            <div className="mt-4 space-y-3">
                              <div>
                                <label className="block text-sm text-gray-600 mb-1">Cardholder Name</label>
                                <input
                                  type="text"
                                  className="input w-full"
                                  placeholder="John Smith"
                                  value={cardDetails.name}
                                  onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                                />
                              </div>
                              
                              <div>
                                <label className="block text-sm text-gray-600 mb-1">Card Number</label>
                                <input
                                  type="text"
                                  className="input w-full"
                                  placeholder="1234 5678 9012 3456"
                                  value={cardDetails.number}
                                  onChange={(e) => {
                                    const value = e.target.value.replace(/\D/g, '').substring(0, 16);
                                    const formatted = value.replace(/(\d{4})(?=\d)/g, '$1 ');
                                    setCardDetails({...cardDetails, number: formatted});
                                  }}
                                />
                              </div>
                              
                              <div className="flex gap-4">
                                <div className="flex-1">
                                  <label className="block text-sm text-gray-600 mb-1">Expiry Date</label>
                                  <input
                                    type="text"
                                    className="input w-full"
                                    placeholder="MM/YY"
                                    value={cardDetails.expiry}
                                    onChange={(e) => {
                                      const value = e.target.value.replace(/\D/g, '').substring(0, 4);
                                      let formatted = value;
                                      if (value.length > 2) {
                                        formatted = value.substring(0, 2) + '/' + value.substring(2);
                                      }
                                      setCardDetails({...cardDetails, expiry: formatted});
                                    }}
                                  />
                                </div>
                                
                                <div className="flex-1">
                                  <label className="block text-sm text-gray-600 mb-1">CVC</label>
                                  <input
                                    type="text"
                                    className="input w-full"
                                    placeholder="123"
                                    value={cardDetails.cvc}
                                    onChange={(e) => {
                                      const value = e.target.value.replace(/\D/g, '').substring(0, 4);
                                      setCardDetails({...cardDetails, cvc: value});
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </label>
                    
                    {/* PayPal Option */}
                    <label className={`block border rounded-lg p-4 cursor-pointer transition-colors ${
                      paymentMethod === 'paypal'
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}>
                      <div className="flex items-start">
                        <input
                          type="radio"
                          name="payment-method"
                          value="paypal"
                          checked={paymentMethod === 'paypal'}
                          onChange={() => setPaymentMethod('paypal')}
                          className="mt-1 mr-3"
                        />
                        <div>
                          <p className="font-medium">PayPal</p>
                          <p className="text-gray-500 text-sm">
                            You will be redirected to PayPal to complete your purchase.
                          </p>
                        </div>
                      </div>
                    </label>
                  </div>
                  
                  <div className="mt-6 flex items-start">
                    <ShieldCheck size={20} className="text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-sm text-gray-600">
                      Your payment information is secure. We use industry-standard security measures to protect your data.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Review Step */}
            {step === 'review' && (
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-4 border-b">
                  <h2 className="font-medium">Review Your Order</h2>
                </div>
                
                <div className="p-6">
                  {/* Contact & Shipping */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Contact & Shipping</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Contact</span>
                        <span>{user?.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Ship to</span>
                        <div className="text-right">
                          {selectedAddressData ? (
                            <>
                              <p>{selectedAddressData.street}</p>
                              <p>
                                {selectedAddressData.city}, {selectedAddressData.state} {selectedAddressData.zipCode}
                              </p>
                              <p>{selectedAddressData.country}</p>
                            </>
                          ) : (
                            <span>No address selected</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Payment */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Payment</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Method</span>
                        <div className="flex items-center">
                          {paymentMethod === 'credit-card' ? (
                            <>
                              <CreditCard size={16} className="mr-2" />
                              <span>Credit Card (**** {cardDetails.number.replace(/\s/g, '').slice(-4)})</span>
                            </>
                          ) : (
                            <span>PayPal</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Items */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Items</h3>
                    <div className="divide-y border rounded-lg overflow-hidden">
                      {items.map(item => (
                        <div key={`${item.product.id}-${item.color}-${item.size}`} className="p-4 flex items-center">
                          <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                            <img 
                              src={item.product.images[0]} 
                              alt={item.product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <div className="ml-4 flex-grow">
                            <p className="font-medium">{item.product.name}</p>
                            <div className="text-sm text-gray-500">
                              {item.color && <span>Color: {item.color}</span>}
                              {item.color && item.size && <span className="mx-1">|</span>}
                              {item.size && <span>Size: {item.size}</span>}
                              <span className="mx-1">|</span>
                              <span>Qty: {item.quantity}</span>
                            </div>
                          </div>
                          
                          <div className="font-medium">
                            {formatPrice((item.product.discountPrice || item.product.price) * item.quantity)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Terms & Conditions */}
                  <div className="mb-6">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        checked={agreeToTerms}
                        onChange={() => setAgreeToTerms(!agreeToTerms)}
                        className="mt-1 mr-2"
                      />
                      <span className="text-sm text-gray-600">
                        I agree to the <a href="#" className="text-primary hover:underline">Terms & Conditions</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            )}
            
            {/* Navigation Buttons */}
            <div className="mt-6 flex justify-between">
              {step !== 'shipping' ? (
                <button
                  onClick={handlePreviousStep}
                  className="btn btn-outline"
                >
                  Back
                </button>
              ) : (
                <div></div>
              )}
              
              {step !== 'review' ? (
                <button
                  onClick={handleNextStep}
                  className="btn btn-primary"
                >
                  Continue
                </button>
              ) : (
                <button
                  onClick={handlePlaceOrder}
                  className="btn btn-primary"
                  disabled={isProcessing}
                >
                  {isProcessing ? 'Processing...' : 'Place Order'}
                </button>
              )}
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-24">
              <div className="p-4 border-b">
                <h2 className="font-medium">Order Summary</h2>
              </div>
              
              <div className="p-4">
                <div className="space-y-2 mb-4">
                  {items.map(item => (
                    <div key={`${item.product.id}-${item.color}-${item.size}`} className="flex justify-between text-sm">
                      <span>{item.product.name} × {item.quantity}</span>
                      <span className="font-medium">
                        {formatPrice((item.product.discountPrice || item.product.price) * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2 border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">{formatPrice(subtotal)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">
                      {shippingCost === 0 ? 'Free' : formatPrice(shippingCost)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (7%)</span>
                    <span className="font-medium">{formatPrice(tax)}</span>
                  </div>
                </div>
                
                <div className="border-t mt-4 pt-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Total</span>
                    <span className="font-bold text-xl">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}