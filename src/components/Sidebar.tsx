import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, TrendingUp, Book, Edit3, Bookmark, X, LogIn } from 'lucide-react';
import { cn } from '../lib/utils';
import { useApp } from '../context/AppContext';
import Button from './ui/Button';

const Sidebar: React.FC = () => {
  const { isRtl, isSidebarCollapsed, isMobileMenuOpen, closeMobileMenu } = useApp();

  const navItems = [
    { icon: Home, label: isRtl ? 'الرئيسية' : 'Home', path: '/' },
    { icon: TrendingUp, label: isRtl ? 'رائج' : 'Trending', path: '/trending' },
    { icon: Book, label: isRtl ? 'القاموس' : 'Dictionary', path: '/explore' },
    { icon: Edit3, label: isRtl ? 'مساهماتي' : 'My Contributions', path: '/contributions' },
    { icon: Bookmark, label: isRtl ? 'المحفوظات' : 'Saved Terms', path: '/saved' },
    { icon: LogIn, label: isRtl ? 'تسجيل الدخول' : 'Login', path: '/login' },
  ];

  const SidebarContent = ({ isMobile = false }) => (
    <>
      {isMobile && (
        <button 
          onClick={closeMobileMenu}
          className="absolute top-6 end-6 p-2 hover:bg-primary/10 rounded-full text-primary transition-colors"
        >
          <X size={24} />
        </button>
      )}
      
      <div className={cn(
        "mb-8 px-2 transition-all duration-300", 
        !isMobile && isSidebarCollapsed ? "opacity-0 scale-0 h-0" : "opacity-100 scale-100"
      )}>
        {(!isSidebarCollapsed || isMobile) && (
          <>
            <h2 className="text-xl font-black text-primary font-headline whitespace-nowrap">
              {isRtl ? 'مجلس المودرن' : 'Modern Majlis'}
            </h2>
            <p className="text-sm text-on-surface-variant whitespace-nowrap">
              {isRtl ? 'لهجات حضرية' : 'Urban Dialects'}
            </p>
          </>
        )}
      </div>

      <nav className="space-y-2 flex-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={isMobile ? closeMobileMenu : undefined}
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group",
              isActive 
                ? "bg-primary text-on-primary shadow-md font-bold" 
                : "text-on-surface-variant hover:bg-primary/10 hover:text-primary"
            )}
            title={!isMobile && isSidebarCollapsed ? item.label : undefined}
          >
            {({ isActive }) => (
              <>
                <item.icon size={22} className={cn("shrink-0", isActive ? "text-on-primary" : "text-primary")} />
                {(!isSidebarCollapsed || isMobile) && (
                  <span className="text-sm flex-1">
                    {item.label}
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="pb-4">
        <NavLink to="/add" onClick={isMobile ? closeMobileMenu : undefined}>
          {!isMobile && isSidebarCollapsed ? (
            <Button variant="primary" className="p-3 rounded-xl w-full flex justify-center">
              <Edit3 size={22} />
            </Button>
          ) : (
            <Button fullWidth size="lg" icon={<Edit3 size={20} />}>
              {isRtl ? 'إضافة مصطلح' : 'Contribute Term'}
            </Button>
          )}
        </NavLink>
      </div>
    </>
  );

  const sidebarClasses = cn(
    "hidden lg:flex flex-col fixed top-0 bottom-4 bg-surface-container-low border border-outline-variant/10 z-40 transition-all duration-300 rounded-b-3xl card-shadow overflow-hidden start-4",
    isSidebarCollapsed ? "w-20" : "w-64"
  );

  const mobileSidebarClasses = cn(
    "flex flex-col fixed inset-y-0 w-72 bg-surface-container-low z-[70] transition-transform duration-300 lg:hidden overflow-hidden start-0 rounded-e-3xl shadow-xl",
    isMobileMenuOpen 
      ? "translate-x-0" 
      : (isRtl ? "translate-x-full" : "-translate-x-full")
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={sidebarClasses}>
        {/* Fixed Fade Overlay */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-surface-container-low via-surface-container-low/90 to-transparent z-50 pointer-events-none" />
        
        <div className="flex flex-col h-full overflow-y-auto no-scrollbar pt-20 px-3">
          <SidebarContent />
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[65] lg:hidden transition-opacity duration-300"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Sidebar Drawer */}
      <aside className={mobileSidebarClasses}>
        {/* Fixed Fade Overlay */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-surface-container-low via-surface-container-low/90 to-transparent z-50 pointer-events-none" />
        
        <div className="flex flex-col h-full overflow-y-auto no-scrollbar pt-20 px-4">
          <SidebarContent isMobile />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
