import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Check, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { register, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true });
    }
  }, [isAuthenticated, navigate]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const validatePassword = (password: string): boolean => {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    // Validate password strength
    if (!validatePassword(formData.password)) {
      setError(
        'Password must be at least 8 characters and include uppercase, lowercase, and numbers'
      );
      return;
    }
    
    setIsLoading(true);
    
    try {
      const success = await register(formData.name, formData.email, formData.password);
      if (success) {
        navigate('/', { replace: true });
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  // Password validation checks
  const passwordChecks = [
    { 
      label: 'At least 8 characters', 
      valid: formData.password.length >= 8 
    },
    { 
      label: 'Contains uppercase letter', 
      valid: /[A-Z]/.test(formData.password) 
    },
    { 
      label: 'Contains lowercase letter', 
      valid: /[a-z]/.test(formData.password) 
    },
    { 
      label: 'Contains a number', 
      valid: /\d/.test(formData.password) 
    },
  ];
  
  return (
    <div className="py-12 flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className="container max-w-md">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Завести аккаунт</h1>
            <p className="text-gray-600 mt-1">Присоединяйтесь к NoName Shop и начните делать покупки</p>
          </div>
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="input w-full"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="input w-full"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  className="input w-full pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff size={18} className="text-gray-500" />
                  ) : (
                    <Eye size={18} className="text-gray-500" />
                  )}
                </button>
              </div>
              
              {formData.password && (
                <div className="mt-2">
                  <div className="grid grid-cols-2 gap-2">
                    {passwordChecks.map((check, index) => (
                      <div 
                        key={index} 
                        className="flex items-center text-xs"
                      >
                        {check.valid ? (
                          <Check size={14} className="text-green-500 mr-1" />
                        ) : (
                          <X size={14} className="text-gray-400 mr-1" />
                        )}
                        <span className={check.valid ? 'text-green-700' : 'text-gray-500'}>
                          {check.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="input w-full pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} className="text-gray-500" />
                  ) : (
                    <Eye size={18} className="text-gray-500" />
                  )}
                </button>
              </div>
              
              {formData.password && formData.confirmPassword && (
                <div className="mt-2 flex items-center text-xs">
                  {formData.password === formData.confirmPassword ? (
                    <>
                      <Check size={14} className="text-green-500 mr-1" />
                      <span className="text-green-700">Passwords match</span>
                    </>
                  ) : (
                    <>
                      <X size={14} className="text-red-500 mr-1" />
                      <span className="text-red-700">Passwords do not match</span>
                    </>
                  )}
                </div>
              )}
            </div>
            
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-primary hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}