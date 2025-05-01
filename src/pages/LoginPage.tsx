import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the redirect path from location state or query params
  const from = location.state?.from || new URLSearchParams(location.search).get('redirect') || '/';
  
  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    
    try {
      const success = await login(email, password);
      if (success) {
        navigate(from, { replace: true });
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  // Demo login credentials
  const fillDemoCredentials = () => {
    setEmail('demo@example.com');
    setPassword('password123');
  };
  
  return (
    <div className="py-12 flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className="container max-w-md">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Добро пожаловать</h1>
            <p className="text-gray-600 mt-1">Войдите в свой аккаунт</p>
          </div>
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Электронная почта
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input w-full"
                required
              />
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Пароль
                </label>
                <a href="#" className="text-sm text-primary hover:underline">
                  Забыли пароль?
                </a>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
            </div>
            
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Нету аккаунта?{' '}
              <Link to="/register" className="text-primary hover:underline">
                Создать аккаунт
              </Link>
            </p>
          </div>
          
          <div className="mt-8 border-t pt-6">
            <p className="text-sm text-gray-500 text-center mb-4">
              Для демо покупок вы можете использовать:
            </p>
            <button
              type="button"
              onClick={fillDemoCredentials}
              className="btn btn-outline w-full"
            >
              Использовать временную учётную запись
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}