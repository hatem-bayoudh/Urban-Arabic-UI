import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Bell, Languages, Moon, Sun, Search, Menu, User, Settings, LogOut } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import Input from './ui/Input';

const Topbar: React.FC = () => {
  const { isDark, isRtl, toggleTheme, toggleRtl, toggleSidebar, toggleMobileMenu } = useApp();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const profileData = {
    name: isRtl ? 'لينا الفارسي' : 'Lina Al-Farsi',
    level: isRtl ? 'مساهم مستوى ذهبي' : 'Contributor Gold Level',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lina'
  };

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 glass-effect border-b border-outline-variant/10 h-16 flex items-center px-6 transition-all duration-300"
    )}>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-8">
          <button 
            onClick={toggleSidebar}
            className="hidden lg:flex p-2 hover:bg-primary/10 rounded-full transition-all text-primary"
            title="Toggle Sidebar"
          >
            <Menu size={22} />
          </button>

          <span className="text-xl md:text-2xl font-black text-primary bg-clip-text bg-gradient-to-r from-primary to-primary-container font-headline whitespace-nowrap">
            Urban Arabic
          </span>
          
          <div className="hidden lg:flex w-64">
            <Input 
              icon={<Search size={18} />}
              placeholder={isRtl ? "ابحث عن مصطلح..." : "Search urban terms..."}
              className="py-2 rounded-full text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={toggleRtl}
            className="p-2 hover:bg-primary/10 rounded-full transition-all active:scale-95 text-primary"
            title={isRtl ? "English" : "العربية"}
          >
            <Languages size={20} />
          </button>
          
          <button 
            onClick={toggleTheme}
            className="p-2 hover:bg-primary/10 rounded-full transition-all active:scale-95 text-primary"
            title={isDark ? "Light Mode" : "Dark Mode"}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="p-2 hover:bg-primary/10 rounded-full transition-all active:scale-95 text-primary relative">
            <Bell size={20} />
            <span className="absolute top-2 end-2 w-2 h-2 bg-primary rounded-full border-2 border-surface"></span>
          </button>

          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="w-10 h-10 rounded-full bg-primary-container overflow-hidden border-2 border-primary/20 cursor-pointer hover:ring-2 hover:ring-primary/30 transition-all focus:outline-none"
            >
              <img 
                src={profileData.avatar} 
                alt="Profile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </button>

            <AnimatePresence>
              {isProfileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full mt-3 w-64 bg-surface-container-low border border-outline-variant/10 rounded-2xl shadow-2xl overflow-hidden z-[60] end-0"
                >
                  {/* Header */}
                  <div className="p-5 bg-primary/5 border-b border-outline-variant/10">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {profileData.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-on-surface font-headline leading-tight">{profileData.name}</h4>
                        <p className="text-[10px] uppercase tracking-wider font-bold text-primary/70 mt-0.5">{profileData.level}</p>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="p-2">
                    <NavLink 
                      to="/profile" 
                      onClick={() => setIsProfileOpen(false)}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 text-on-surface-variant hover:text-primary transition-all text-sm group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <User size={18} className="text-on-surface-variant group-hover:text-primary transition-colors" />
                      </div>
                      <span className="font-medium">{isRtl ? 'عرض الملف الشخصي' : 'View Profile'}</span>
                    </NavLink>
                    
                    <NavLink 
                      to="/settings" 
                      onClick={() => setIsProfileOpen(false)}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 text-on-surface-variant hover:text-primary transition-all text-sm group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Settings size={18} className="text-on-surface-variant group-hover:text-primary transition-colors" />
                      </div>
                      <span className="font-medium">{isRtl ? 'الإعدادات' : 'Settings'}</span>
                    </NavLink>
                  </div>

                  <div className="border-t border-outline-variant/10 p-2 bg-surface-container-lowest/50">
                    <button 
                      onClick={() => {
                        setIsProfileOpen(false);
                        navigate('/login');
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-destructive/10 text-destructive transition-all text-sm font-bold group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-destructive/5 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                        <LogOut size={18} />
                      </div>
                      <span>{isRtl ? 'تسجيل الخروج' : 'Logout'}</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 hover:bg-primary/10 rounded-full text-primary transition-colors"
            title="Open Menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
