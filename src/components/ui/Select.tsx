import React from 'react';
import { cn } from '../../lib/utils';
import { useApp } from '../../context/AppContext';
import { ChevronDown } from 'lucide-react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

const Select: React.FC<SelectProps> = ({ label, children, className, ...props }) => {
  const { isRtl } = useApp();

  return (
    <div className="w-full">
      {label && (
        <label className={cn(
          "block text-sm font-bold text-on-surface-variant",
          isRtl ? "pr-1 text-right" : "pl-1 text-left"
        )}>
          {label}
        </label>
      )}
      <div className="relative">
        <select
          className={cn(
            "w-full px-5 py-4 bg-surface-container border border-outline-variant/10 rounded-xl focus:ring-2 focus:ring-primary/20 appearance-none transition-all text-on-surface cursor-pointer",
            isRtl ? "text-right" : "text-left",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <div className={cn(
          "absolute top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none",
          isRtl ? "left-4" : "right-4"
        )}>
          <ChevronDown size={20} />
        </div>
      </div>
    </div>
  );
};

export default Select;
