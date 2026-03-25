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
        <label className={cn(
          "block text-sm font-bold text-on-surface-variant",
          isRtl ? "pr-1 text-right" : "pl-1 text-left"
        )}>
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className={cn(
            "absolute top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none",
            isRtl ? "right-4" : "left-4"
          )}>
            {icon}
          </div>
        )}
        <input
          className={cn(
            "w-full bg-surface-container border border-outline-variant/10 rounded-xl py-4 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface",
            icon && (isRtl ? "pr-12 pl-4" : "pl-12 pr-4"),
            !icon && "px-5",
            isRtl ? "text-right" : "text-left",
            className
          )}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
