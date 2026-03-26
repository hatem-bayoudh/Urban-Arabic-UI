import React from 'react';
import { cn } from '../../lib/utils';
import { useApp } from '../../context/AppContext';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ label, icon, className, ...props }) => {
  const { isRtl } = useApp();
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-bold text-on-surface-variant ps-1 text-start">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none inset-inline-start-4">
            {icon}
          </div>
        )}
        <input
          dir={isRtl ? 'rtl' : 'ltr'}
          className={cn(
            "w-full bg-surface-container border border-outline-variant/10 rounded-xl py-4 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface text-start",
            icon ? "ps-12 pe-4" : "px-5",
            className
          )}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
