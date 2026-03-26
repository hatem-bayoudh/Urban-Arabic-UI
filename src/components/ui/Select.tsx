import React from 'react';
import { cn } from '../../lib/utils';
import { useApp } from '../../context/AppContext';
import { ChevronDown } from 'lucide-react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

const Select: React.FC<SelectProps> = ({ label, children, className, ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-bold text-on-surface-variant ps-1 text-start">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          className={cn(
            "w-full px-5 py-4 bg-surface-container border border-outline-variant/10 rounded-xl focus:ring-2 focus:ring-primary/20 appearance-none transition-all text-on-surface cursor-pointer text-start",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <div className="absolute top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none end-4">
          <ChevronDown size={20} />
        </div>
      </div>
    </div>
  );
};

export default Select;
