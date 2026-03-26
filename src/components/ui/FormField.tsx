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
  return (
    <div className={cn("space-y-2 w-full", className)}>
      <div className="flex items-center justify-between">
        <label className="text-sm font-bold text-on-surface-variant ps-1 text-start">
          {label}
          {required && <span className="text-destructive ms-1">*</span>}
        </label>
        {error && <span className="text-xs font-medium text-destructive">{error}</span>}
      </div>
      
      {children}
      
      {description && (
        <p className="text-xs text-on-surface-variant/70 text-start ps-1">
          {description}
        </p>
      )}
    </div>
  );
};

export default FormField;
