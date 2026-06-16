// src/features/auth/Login.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLock, FiUser, FiArrowRight } from 'react-icons/fi';

export const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
    setError(''); // Xóa lỗi khi người dùng gõ lại
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Giả lập độ trễ mạng 0.5s cho có cảm giác hệ thống đang xử lý
    setTimeout(() => {
      if (credentials.username === '123' && credentials.password === '123') {
        // Cấp phát token giả và lưu vào Local Storage
        localStorage.setItem('paas_token', 'mock_jwt_token_12345');
        navigate('/'); // Chuyển hướng vào trang chủ hệ thống
      } else {
        setError('Invalid username or password. System access denied.');
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30 mb-4">
            <span className="text-white font-bold text-3xl tracking-tighter">P</span>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-wide">PaaS <span className="text-gray-400 font-light">Console</span></h1>
          <p className="text-sm text-gray-500 mt-2 font-mono">AUTHORIZED PERSONNEL ONLY</p>
        </div>

        {/* Login Form (Glassmorphism effect) */}
        <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-6">
            
            <div>
              <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">Username</label>
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input 
                  type="text" 
                  name="username"
                  value={credentials.username}
                  onChange={handleInputChange}
                  className="w-full bg-gray-950/50 border border-gray-800 rounded-lg py-3 pl-11 pr-4 text-gray-200 placeholder-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all font-mono text-sm"
                  placeholder="Enter your username"
                  autoComplete="off"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">Password</label>
              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input 
                  type="password" 
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  className="w-full bg-gray-950/50 border border-gray-800 rounded-lg py-3 pl-11 pr-4 text-gray-200 placeholder-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all font-mono text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-400 text-xs p-3 rounded-lg flex items-start font-mono">
                <span className="mr-2">■</span> {error}
              </div>
            )}

            <button 
              type="submit" 
              disabled={isLoading || !credentials.username || !credentials.password}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-lg shadow-indigo-600/20"
            >
              {isLoading ? (
                <span className="animate-pulse font-mono">AUTHENTICATING...</span>
              ) : (
                <>
                  <span className="font-mono">INITIALIZE SESSION</span>
                  <FiArrowRight />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};