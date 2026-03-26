import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { useApp } from '../context/AppContext';
import { cn } from '../lib/utils';

const Layout: React.FC = () => {
  const { isRtl, isSidebarCollapsed } = useApp();

  return (
    <div className="min-h-screen bg-surface transition-colors duration-300">
      <Topbar />
      <Sidebar />
      
      <main className={cn(
        "pt-24 pb-12 px-6 transition-all duration-300",
        isSidebarCollapsed ? "lg:ps-24 lg:pe-4" : "lg:ps-72 lg:pe-4"
      )}>
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 glass-effect border-t border-outline-variant/10 py-3 px-6 flex justify-around items-center z-50">
        <button className="p-2 text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">home</span></button>
        <button className="p-2 text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">explore</span></button>
        <button className="p-3 bg-primary text-on-primary rounded-full -mt-10 shadow-lg"><span className="material-symbols-outlined">add</span></button>
        <button className="p-2 text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">trending_up</span></button>
        <button className="p-2 text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">person</span></button>
      </nav>
    </div>
  );
};

export default Layout;
