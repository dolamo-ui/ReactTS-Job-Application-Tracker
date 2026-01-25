// File: src/pages/AuthPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Mail, 
  Lock, 
  ArrowRight, 
  Chrome, 
  Linkedin, 
  Briefcase,
  UserPlus,
  LogIn,
  ArrowLeft,
  Eye,
  EyeOff
} from 'lucide-react';
import NavBar from '../components/NavBar';

interface AuthPageProps {
  mode?: 'login' | 'register';
}

export const AuthPage: React.FC<AuthPageProps> = ({ mode = 'login' }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(mode === 'login');
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState('');

  const serverURL = 'http://localhost:3000/users';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      setMessage('❌ Please enter both email and password');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch(`${serverURL}?email=${email}&password=${password}`);
      const users = await response.json();

      if (users.length > 0) {
        const user = users[0];
        localStorage.setItem('userId', user.id);
        localStorage.setItem('userEmail', user.email);
        
        console.log('Logged in as:', user);
        
        // Success animation delay
        setTimeout(() => {
          setIsLoading(false);
          navigate('/home');
        }, 800);
      } else {
        setIsLoading(false);
        setMessage('❌ Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setIsLoading(false);
      setMessage('❌ Something went wrong. Please try again.');
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setMessage('❌ Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('❌ Passwords do not match');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      // Check if user already exists
      const checkRes = await fetch(`${serverURL}?email=${email}`);
      const existingUsers = await checkRes.json();

      if (existingUsers.length > 0) {
        setIsLoading(false);
        setMessage('⚠️ User already exists!');
        return;
      }

      // Create new user
      const newUser = { email, password };
      const addRes = await fetch(serverURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (addRes.ok) {
        const createdUser = await addRes.json();
        
        // Auto login after registration
        localStorage.setItem('userId', createdUser.id);
        localStorage.setItem('userEmail', createdUser.email);
        
        setMessage('✅ Registration successful!');
        
        setTimeout(() => {
          setIsLoading(false);
          navigate('/home');
        }, 800);
      } else {
        setIsLoading(false);
        setMessage('❌ Failed to register user');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setIsLoading(false);
      setMessage('❌ Error connecting to server');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (isLogin) {
      handleLogin(e);
    } else {
      handleRegister(e);
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <NavBar onSignIn={() => navigate('/login')} onStart={() => navigate('/register')} />

      {/* Main Content */}
      <div className="flex pt-20 overflow-hidden">
      {/* Left Side: Illustration & Branding (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 p-12 flex-col justify-between text-white relative">
        <div className="relative z-10">
          <div className="flex items-center space-x-2 mb-12">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
              <Briefcase className="text-blue-600 w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight">CareerTrack</span>
          </div>

          <div className="max-w-md">
            <h1 className="text-5xl font-black mb-6 leading-tight">
              {isLogin ? "Welcome Back to Your Journey" : "Begin Your Professional Ascent"}
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              {isLogin 
                ? "Continue tracking your applications and landing that dream role with our intelligent dashboard." 
                : "Join thousands of successful job seekers who use CareerTrack to organize their applications and boost their interview rates."}
            </p>
          </div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-blue-500 bg-blue-400 overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-blue-100">
              Joined by 10,000+ career builders this month
            </p>
          </div>
        </div>

        {/* Decorative SVG Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Right Side: Auth Form */}
      <div className="w-full lg:w-1/2 flex flex-col p-6 sm:p-12 lg:p-20 justify-center bg-white">
        <div className="max-w-md w-full mx-auto">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-slate-500 text-sm font-semibold mb-8 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to home
          </button>

          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              {isLogin ? "Sign In" : "Create Account"}
            </h2>
            <p className="text-slate-500">
              {isLogin ? "Enter your credentials to access your tracker" : "Set up your profile to start tracking today"}
            </p>
          </div>

          {/* Toggle Tabs */}
          <div className="bg-slate-100 p-1.5 rounded-2xl mb-8 flex relative">
            <div
              className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-xl shadow-sm transition-all duration-300 ${
                isLogin ? 'left-1.5' : 'left-[calc(50%+1.5px)]'
              }`}
            />
            <button 
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2.5 text-sm font-bold relative z-10 transition-colors ${isLogin ? 'text-blue-600' : 'text-slate-500'}`}
            >
              <div className="flex items-center justify-center">
                <LogIn className="w-4 h-4 mr-2" /> Login
              </div>
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2.5 text-sm font-bold relative z-10 transition-colors ${!isLogin ? 'text-blue-600' : 'text-slate-500'}`}
            >
              <div className="flex items-center justify-center">
                <UserPlus className="w-4 h-4 mr-2" /> Register
              </div>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  required
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1.5">
                <label className="text-sm font-bold text-slate-700">Password</label>
                {isLogin && (
                  <a href="#" className="text-xs font-bold text-blue-600 hover:text-blue-700">Forgot Password?</a>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  required
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    required
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-11 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            )}

            {message && (
              <div className={`p-3 rounded-xl text-sm font-semibold text-center ${
                message.includes('✅') 
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                  : 'bg-rose-50 text-rose-700 border border-rose-200'
              }`}>
                {message}
              </div>
            )}

            <button
              disabled={isLoading}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all active:scale-95 disabled:opacity-70 flex items-center justify-center group"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  {isLogin ? "Login to Dashboard" : "Create My Account"}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold">
              <span className="px-4 bg-white text-slate-400">Or continue with</span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center px-4 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-semibold text-slate-600">
              <Chrome className="w-5 h-5 mr-2 text-blue-500" /> Google
            </button>
            <button className="flex items-center justify-center px-4 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-semibold text-slate-600">
              <Linkedin className="w-5 h-5 mr-2 text-blue-700" /> LinkedIn
            </button>
          </div>

          <p className="mt-10 text-center text-slate-500 text-sm">
            {isLogin ? "Don't have an account yet?" : "Already have an account?"}
            <button 
              onClick={() => {
                setIsLogin(!isLogin);
                setMessage('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
              }}
              className="ml-1.5 font-bold text-blue-600 hover:underline"
            >
              {isLogin ? "Sign up for free" : "Log in here"}
            </button>
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AuthPage;