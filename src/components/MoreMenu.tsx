import React, { useState, useRef, useEffect } from 'react';
import { MoreHorizontal, Flag } from 'lucide-react';
import { cn } from '../lib/utils';
import { useApp } from '../context/AppContext';

interface MoreMenuProps {
  onReport: () => void;
  size?: number;
  className?: string;
  align?: 'left' | 'right';
}

const MoreMenu: React.FC<MoreMenuProps> = ({ 
  onReport, 
  size = 18, 
  className,
  align
}) => {
  const { isRtl } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className={cn("relative", className)} ref={menuRef}>
      <button 
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="text-on-surface-variant hover:text-on-surface transition-colors p-1 rounded-full hover:bg-surface-container"
      >
        <MoreHorizontal size={size} />
      </button>
      
      {isOpen && (
        <div className={cn(
          "absolute top-full mt-1 w-40 bg-surface-container-lowest border border-outline-variant/20 rounded-xl shadow-xl z-50 py-1",
          align === 'left' ? "start-0" : "end-0"
        )}>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onReport();
              setIsOpen(false);
            }}
            className="w-full px-4 py-2 text-xs font-bold text-error hover:bg-error/5 flex items-center gap-2 transition-colors"
          >
            <Flag size={14} />
            {isRtl ? 'إبلاغ' : 'Report'}
          </button>
        </div>
      )}
    </div>
  );
};

export default MoreMenu;
