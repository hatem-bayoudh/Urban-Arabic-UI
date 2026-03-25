import React, { createContext, useContext, useState, useEffect } from 'react';

interface AppContextType {
  isDark: boolean;
  isRtl: boolean;
  isSidebarCollapsed: boolean;
  isMobileMenuOpen: boolean;
  toggleTheme: () => void;
  toggleRtl: () => void;
  toggleSidebar: () => void;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [isRtl, setIsRtl] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = isRtl ? 'ar' : 'en';
  }, [isRtl]);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleRtl = () => setIsRtl(!isRtl);
  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <AppContext.Provider value={{ 
      isDark, 
      isRtl, 
      isSidebarCollapsed, 
      isMobileMenuOpen,
      toggleTheme, 
      toggleRtl, 
      toggleSidebar,
      toggleMobileMenu,
      closeMobileMenu
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
