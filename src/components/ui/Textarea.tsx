import React from 'react';
import { cn } from '../../lib/utils';
import { useApp } from '../../context/AppContext';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const Textarea: React.FC<TextareaProps> = ({ className, ...props }) => {
  const { isRtl } = useApp();
  return (
    <textarea
      dir={isRtl ? 'rtl' : 'ltr'}
      className={cn(
        "w-full ps-5 pe-5 py-4 bg-surface-container border border-outline-variant/10 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all resize-none text-on-surface text-start",
        className
      )}
      {...props}
    />
  );
};

export default Textarea;
