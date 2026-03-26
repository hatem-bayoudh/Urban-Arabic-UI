import React from 'react';
import { Send } from 'lucide-react';
import { cn } from '../lib/utils';
import { useApp } from '../context/AppContext';
import Button from './ui/Button';

import Textarea from './ui/Textarea';

interface CommentInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onCancel?: () => void;
  placeholder: string;
  submitLabel: string;
  cancelLabel?: string;
  minHeight?: string;
  avatar?: string;
  className?: string;
  variant?: 'default' | 'reply';
  isLast?: boolean;
}

const CommentInput: React.FC<CommentInputProps> = ({
  value,
  onChange,
  onSubmit,
  onCancel,
  placeholder,
  submitLabel,
  cancelLabel,
  minHeight = '120px',
  avatar,
  className,
  variant = 'default',
  isLast = true
}) => {
  const { isRtl } = useApp();

  return (
    <div className={cn("flex gap-5 relative", className)}>
      {variant === 'reply' && avatar && (
        <div className="absolute -start-[30px] top-0 bottom-0 w-[30px]">
          {/* Vertical line that continues down if not last */}
          {!isLast && (
            <div className="absolute top-[16px] bottom-0 w-0.5 bg-outline-variant/30 start-0" />
          )}
          {/* The elbow itself */}
          <div 
            className="absolute top-0 w-full h-[16px] border-s-2 border-b-2 border-outline-variant/30 rounded-es-xl start-0" 
          />
        </div>
      )}
      {avatar && (
        <img 
          src={avatar} 
          alt="User Avatar" 
          className={cn(
            "rounded-full border border-outline-variant/30 shrink-0 relative z-10",
            variant === 'reply' ? "w-8 h-8" : "w-12 h-12"
          )}
          referrerPolicy="no-referrer"
        />
      )}
      <div className="flex-1 space-y-3">
        <Textarea 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ minHeight }}
          className={cn(
            "bg-surface-container-low border-outline-variant/20 rounded-2xl",
            variant === 'reply' && "rounded-xl p-3"
          )}
          placeholder={placeholder}
        />
        <div className="flex justify-end gap-2">
          {onCancel && cancelLabel && (
            <button 
              onClick={onCancel}
              className="px-4 py-1.5 text-xs font-bold text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors"
            >
              {cancelLabel}
            </button>
          )}
          <Button 
            onClick={onSubmit}
            className={cn(variant === 'reply' ? "px-4 py-1.5 text-xs" : "px-8 py-2.5 shadow-md")} 
            icon={<Send size={variant === 'reply' ? 14 : 18} />}
          >
            {submitLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentInput;
