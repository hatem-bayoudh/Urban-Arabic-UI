import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  AtSign, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Chrome, 
  Apple,
  Share2
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { cn } from '../lib/utils';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';

const Login: React.FC = () => {
  const { isRtl } = useApp();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, just navigate home
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface flex items-center justify-center p-6 relative overflow-hidden">
      {/* Auth Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-secondary-container/20 blur-[120px]" />
        <div className="absolute -bottom-[10%] -left-[5%] w-[40%] h-[40%] rounded-full bg-primary-container/20 blur-[120px]" />
      </div>

      {/* Main Content */}
      <main className="relative w-full max-w-md z-10">
        {/* Branding Header */}
        <div className="flex flex-col items-center mb-10">
          <div className="mb-4 p-3 bg-surface-container-lowest rounded-xl shadow-sm">
            <Share2 className="text-primary fill-primary" size={36} />
          </div>
          <h1 className="font-headline font-black text-3xl text-indigo-900 tracking-tight">
            {isRtl ? 'أوربان أرابيك' : 'Urban Arabic'}
          </h1>
          <p className="font-body text-on-surface-variant mt-2 font-medium">
            {isRtl ? 'تجمع رقمي للمجلس الحديث' : 'Digital Gathering for the Modern Majlis'}
          </p>
        </div>

        {/* Login Card */}
        <Card padding="none" className="rounded-[1.5rem] shadow-[0_12px_32px_rgba(45,47,49,0.06)] overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="mb-8">
              <h2 className="font-headline font-bold text-2xl text-on-surface mb-2">
                {isRtl ? 'مرحباً بعودتك' : 'Welcome back'}
              </h2>
              <p className="text-on-surface-variant text-sm">
                {isRtl ? 'يرجى إدخال بياناتك لتسجيل الدخول إلى حسابك.' : 'Please enter your details to sign in to your account.'}
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email Input */}
              <Input 
                label={isRtl ? 'البريد الإلكتروني أو اسم المستخدم' : 'Email or Username'}
                id="email"
                name="email"
                placeholder="name@example.com"
                type="text"
                icon={<AtSign size={20} />}
                className="bg-surface-container-low border-none focus:bg-surface-container-lowest"
              />

              {/* Password Input */}
              <div className="space-y-2">
                <div className="flex justify-between items-center ms-1">
                  <label className="block text-sm font-semibold text-on-surface-variant" htmlFor="password">
                    {isRtl ? 'كلمة المرور' : 'Password'}
                  </label>
                  <a className="text-xs font-bold text-primary hover:text-primary-dim transition-colors" href="#">
                    {isRtl ? 'نسيت كلمة المرور؟' : 'Forgot password?'}
                  </a>
                </div>
                <div className="relative group">
                  <Input 
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    type={showPassword ? "text" : "password"}
                    icon={<Lock size={20} />}
                    className="bg-surface-container-low border-none focus:bg-surface-container-lowest"
                  />
                  <button 
                    className="absolute top-1/2 -translate-y-1/2 end-4 flex items-center text-outline hover:text-on-surface transition-colors z-10"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <button 
                className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold py-4 rounded-xl shadow-lg shadow-primary/20 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group" 
                type="submit"
              >
                <span>{isRtl ? 'تسجيل الدخول' : 'Login'}</span>
                <ArrowRight className={cn("transition-transform", isRtl ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1")} size={18} />
              </button>
            </form>

            {/* Social Login Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-surface-container-high" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-surface-container-lowest px-4 text-outline font-bold tracking-widest">
                  {isRtl ? 'أو تابع باستخدام' : 'Or continue with'}
                </span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 px-4 bg-surface-container-low hover:bg-surface-container-high rounded-xl transition-all duration-200 text-on-surface font-semibold text-sm">
                <Chrome size={20} className="text-primary" />
                Google
              </button>
              <button className="flex items-center justify-center gap-2 py-3 px-4 bg-surface-container-low hover:bg-surface-container-high rounded-xl transition-all duration-200 text-on-surface font-semibold text-sm">
                <Apple size={20} className="text-primary" />
                Apple
              </button>
            </div>
          </div>

          {/* Footer Link */}
          <div className="bg-surface-container-low py-6 px-8 text-center">
            <p className="text-sm text-on-surface-variant font-medium">
              {isRtl ? 'ليس لديك حساب؟' : "Don't have an account?"}{' '}
              <a className="text-primary font-bold hover:underline underline-offset-4 decoration-2 decoration-primary/30 transition-all" href="#">
                {isRtl ? 'سجل الآن' : 'Sign up'}
              </a>
            </p>
          </div>
        </Card>

        {/* System Status/Help */}
        <div className="mt-8 flex justify-center gap-6">
          <a className="text-xs text-outline hover:text-on-surface transition-colors" href="#">
            {isRtl ? 'شروط الخدمة' : 'Terms of Service'}
          </a>
          <a className="text-xs text-outline hover:text-on-surface transition-colors" href="#">
            {isRtl ? 'سياسة الخصوصية' : 'Privacy Policy'}
          </a>
          <a className="text-xs text-outline hover:text-on-surface transition-colors" href="#">
            {isRtl ? 'مركز المساعدة' : 'Help Center'}
          </a>
        </div>
      </main>

      {/* Visual Decorative Image (Asymmetric Placement) */}
      <div className={cn(
        "fixed bottom-[5%] hidden xl:block w-72",
        isRtl ? "start-[5%] -rotate-3" : "end-[5%] rotate-3"
      )}>
        <div className="bg-surface-container-lowest p-2 rounded-[2rem] shadow-xl">
          <img 
            alt="Arabic architectural detail" 
            className="w-full h-96 object-cover rounded-[1.8rem]" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1ws_kW6K5K-ikjLO5olDnNYV3gdnB_jztSdQcerNtyd34IkAHaJGm1x5ELJdQ9mQ2cWBof3MBMViKE2n5NuEZcXH8SWtMT6aOP-gomyjKeOetsT8aPr-c6YRyMmlfmVOCvq6gNGL80ogomhextG3436zpBi3YrkJm6OTFOpjC-btuojGy9n6UjfIrSpDLs4iz64euBY3hTNklvNi1MWDP5RBU3r4fXcHQebShG1bJ55vvAOnrEV-HEI4mXSuz-pzhTm4SrNi0psgy"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
