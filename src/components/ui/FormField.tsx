import React from 'react';
import { cn } from '../../lib/utils';
import { useApp } from '../../context/AppContext';

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
  error?: string;
  description?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  children,
  className,
  required,
  error,
  description,
}) => {
  const { isRtl } = useApp();

  return (
    <div className={cn("space-y-2 w-full", className)}>
      <div className={cn("flex items-center justify-between", isRtl ? "flex-row-reverse" : "flex-row")}>
        <label className={cn(
          "text-sm font-bold text-on-surface-variant",
          isRtl ? "pr-1 text-right" : "pl-1 text-left"
        )}>
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </label>
        {error && <span className="text-xs font-medium text-destructive">{error}</span>}
      </div>
      
      {children}
      
      {description && (
        <p className={cn(
          "text-xs text-on-surface-variant/70",
          isRtl ? "text-right pr-1" : "text-left pl-1"
        )}>
          {description}
        </p>
      )}
    </div>
  );
};

export default FormField;
